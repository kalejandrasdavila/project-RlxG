// VTEX No-Workers - Solución definitiva para eliminar workerpool
// Este script debe ser el primero en ejecutarse

// Interceptar y bloquear workerpool a nivel de proceso
if (typeof process !== 'undefined') {
    // Configurar variables de entorno más agresivas
    process.env.UV_THREADPOOL_SIZE = '1';
    process.env.NODE_OPTIONS = '--max-old-space-size=2048 --no-worker --no-experimental-worker';
    process.env.NODE_NO_WARNINGS = '1';
    process.env.DISABLE_WORKERS = 'true';
    process.env.NO_WORKERS = 'true';
    process.env.WORKERPOOL_DISABLED = 'true';

    // Interceptar el require de workerpool específicamente
    let Module, originalRequire;
    try {
        Module = require('module');
        originalRequire = Module.prototype.require;
    } catch (e) {
        // En el navegador, no hay módulo 'module'
        console.warn('[VTEX-NO-WORKERS] Module interception not available in browser');
        Module = null;
        originalRequire = null;
    }

    if (Module && originalRequire) {
        Module.prototype.require = function (id) {
            // Lista completa de módulos a bloquear
            const blockedModules = [
                'workerpool',
                'worker_threads',
                'child_process',
                'cluster',
                'worker-farm',
                'worker-loader',
                'threads',
                'piscina',
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
    }

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
        // Silenciosamente fallar si no se puede interceptar
        console.warn('[VTEX-NO-WORKERS] Child process interception not available in browser');
    }
}

// Bloquear workers en el contexto global
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

// Interceptar en el contexto de window si existe
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
}

console.log('[VTEX-NO-WORKERS] Anti-worker protection activated');

module.exports = {
    workerpoolDisabled: true,
    workersBlocked: true
};
