// VTEX No-Workers - Versión segura para navegador
// Este script es seguro para ejecutarse tanto en Node.js como en el navegador

console.log('[VTEX-NO-WORKERS-BROWSER] Anti-worker protection activated');

// DESTRUIR WORKERPOOL GLOBALMENTE ANTES DE QUE SE USE
if (typeof global !== 'undefined') {
    // Interceptar y destruir workerpool antes de que se cargue
    Object.defineProperty(global, 'workerpool', {
        get: function () {
            console.warn('[VTEX-NO-WORKERS] workerpool access blocked globally');
            return undefined;
        },
        set: function () {
            console.warn('[VTEX-NO-WORKERS] workerpool assignment blocked globally');
        },
        configurable: false,
        enumerable: false
    });
}

// Bloquear workers en el contexto global (tanto Node.js como navegador)
if (typeof global !== 'undefined') {
    // Sobrescribir constructores
    global.Worker = function () {
        console.warn('[VTEX-NO-WORKERS] Worker constructor blocked');
        return {
            terminate: () => Promise.resolve(),
            postMessage: () => { },
            on: () => { },
            removeListener: () => { }
        };
    };

    global.SharedWorker = function () {
        console.warn('[VTEX-NO-WORKERS] SharedWorker constructor blocked');
        return {
            port: {
                postMessage: () => { },
                close: () => { },
                on: () => { }
            }
        };
    };

    // Bloquear APIs relacionadas
    global.SharedArrayBuffer = undefined;
    global.Atomics = undefined;

    // Interceptar importScripts
    if (typeof global.importScripts === 'function') {
        global.importScripts = function () {
            console.warn('[VTEX-NO-WORKERS] importScripts blocked');
        };
    }
}

// Interceptar en el contexto de window si existe (navegador)
if (typeof window !== 'undefined') {
    window.Worker = function () {
        console.warn('[VTEX-NO-WORKERS] Browser Worker blocked');
        return {
            terminate: () => { },
            postMessage: () => { },
            addEventListener: () => { },
            removeEventListener: () => { }
        };
    };

    window.SharedWorker = function () {
        console.warn('[VTEX-NO-WORKERS] Browser SharedWorker blocked');
        return {
            port: {
                postMessage: () => { },
                close: () => { },
                addEventListener: () => { }
            }
        };
    };

    // Bloquear APIs relacionadas en el navegador
    window.SharedArrayBuffer = undefined;
    window.Atomics = undefined;
}

// Solo en Node.js - interceptar módulos nativos
if (typeof process !== 'undefined' && typeof require !== 'undefined' && typeof module !== 'undefined') {
    try {
        // Configuración equilibrada para prevenir workerpool
        process.env.UV_THREADPOOL_SIZE = '1';
        process.env.NODE_OPTIONS = '--max-old-space-size=4096';
        process.env.NODE_NO_WARNINGS = '1';
        process.env.WORKERPOOL_DISABLED = 'true';

        // Interceptar el require de workerpool específicamente
        const Module = require('module');
        const originalRequire = Module.prototype.require;

        Module.prototype.require = function (id) {
            // Lista mínima de módulos problemáticos
            const blockedModules = [
                'workerpool',
                'jest-worker'
            ];

            // Verificar si el módulo está en la lista de bloqueados
            if (typeof id === 'string') {
                const isBlocked = blockedModules.some(blocked =>
                    id === blocked ||
                    id.includes(blocked) ||
                    id.endsWith('/' + blocked)
                );

                if (isBlocked) {
                    console.warn(`[VTEX-NO-WORKERS] Blocked module: ${id}`);

                    // Retornar un mock específico para workerpool
                    if (id.includes('workerpool')) {
                        return {
                            pool: () => ({
                                exec: () => Promise.resolve({}),
                                terminate: () => Promise.resolve(),
                                stats: () => ({}),
                                proxy: () => Promise.resolve({})
                            }),
                            worker: () => ({}),
                            isMainThread: true,
                            cpus: () => 1
                        };
                    }

                    // Mock genérico para otros workers
                    return {
                        Worker: function () {
                            return {
                                terminate: () => Promise.resolve(),
                                postMessage: () => { },
                                on: () => { },
                                removeListener: () => { }
                            };
                        },
                        isMainThread: true,
                        parentPort: null,
                        workerData: null,
                        threadId: 0
                    };
                }
            }

            return originalRequire.apply(this, arguments);
        };

        // Interceptar spawn y fork para prevenir procesos worker
        try {
            const cp = require('child_process');
            const originalSpawn = cp.spawn;
            const originalFork = cp.fork;

            cp.spawn = function (command, args, options) {
                if (command && (command.includes('worker') || command.includes('pool'))) {
                    console.warn(`[VTEX-NO-WORKERS] Blocked spawn: ${command}`);
                    return {
                        pid: -1,
                        kill: () => { },
                        on: () => { },
                        stdout: { on: () => { } },
                        stderr: { on: () => { } }
                    };
                }
                return originalSpawn.apply(this, arguments);
            };

            cp.fork = function (modulePath, args, options) {
                if (modulePath && modulePath.includes('worker')) {
                    console.warn(`[VTEX-NO-WORKERS] Blocked fork: ${modulePath}`);
                    return {
                        pid: -1,
                        kill: () => { },
                        send: () => { },
                        on: () => { },
                        disconnect: () => { }
                    };
                }
                return originalFork.apply(this, arguments);
            };
        } catch (e) {
            // Silenciosamente fallar si no se puede interceptar child_process
        }
    } catch (e) {
        // Silenciosamente fallar si no se puede interceptar Module
        console.warn('[VTEX-NO-WORKERS] Could not intercept module system (browser environment)');
    }
}

// Exportar para compatibilidad
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        workerpoolDisabled: true,
        workersBlocked: true
    };
}

// También exportar como variable global para el navegador
if (typeof window !== 'undefined') {
    window.VTEX_NO_WORKERS = {
        workerpoolDisabled: true,
        workersBlocked: true
    };
}
