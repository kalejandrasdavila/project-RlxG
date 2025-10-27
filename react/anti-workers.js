// Anti-workers script - Solución definitiva para VTEX
// Este script debe ejecutarse antes que cualquier otro módulo

// Bloquear workers a nivel global
if (typeof global !== 'undefined') {
    // Sobrescribir constructores de workers
    global.Worker = function () {
        console.warn('Worker constructor blocked for VTEX compatibility');
        return { terminate: () => { }, postMessage: () => { } };
    };

    global.SharedWorker = function () {
        console.warn('SharedWorker constructor blocked for VTEX compatibility');
        return { port: { postMessage: () => { }, close: () => { } } };
    };

    // Bloquear ServiceWorker
    if (global.navigator && global.navigator.serviceWorker) {
        global.navigator.serviceWorker = undefined;
    }

    // Bloquear WebWorker APIs
    global.importScripts = function () {
        console.warn('importScripts blocked for VTEX compatibility');
    };

    // Deshabilitar SharedArrayBuffer completamente
    global.SharedArrayBuffer = undefined;

    // Bloquear módulos de Node.js workers
    const originalRequire = global.require;
    if (originalRequire) {
        global.require = function (id) {
            if (typeof id === 'string') {
                const blockedModules = [
                    'worker_threads',
                    'child_process',
                    'cluster',
                    'workerpool',
                    'worker-farm',
                    'worker-loader',
                    'threads'
                ];

                if (blockedModules.some(blocked => id.includes(blocked))) {
                    console.warn(`Blocked module: ${id}`);
                    return {
                        Worker: function () { return { terminate: () => { } }; },
                        isMainThread: true,
                        parentPort: null,
                        workerData: null
                    };
                }
            }
            return originalRequire.apply(this, arguments);
        };
    }
}

// Configuración de proceso para Node.js
if (typeof process !== 'undefined') {
    process.env.UV_THREADPOOL_SIZE = '1';
    process.env.NODE_OPTIONS = '--max-old-space-size=2048 --no-worker';
    process.env.NODE_NO_WARNINGS = '1';
    process.env.DISABLE_WORKERS = 'true';

    // Interceptar spawn/fork para prevenir workers
    if (process.binding) {
        try {
            const originalBinding = process.binding;
            process.binding = function (name) {
                if (name === 'spawn_sync' || name === 'process_wrap') {
                    console.warn(`Blocked process binding: ${name}`);
                    return {};
                }
                return originalBinding.apply(this, arguments);
            };
        } catch (e) {
            // Silenciosamente fallar si no se puede interceptar
        }
    }
}

module.exports = {};
