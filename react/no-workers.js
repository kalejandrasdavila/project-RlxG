// Configuración de emergencia para VTEX - Forzar sin workers
// Versión completamente compatible con browser - Reforzada

// Configuración de variables de entorno solo si estamos en Node.js
if (typeof process !== 'undefined' && process.env) {
    process.env.UV_THREADPOOL_SIZE = '1';
    process.env.NODE_OPTIONS = '--max-old-space-size=1024 --no-worker';
    process.env.NODE_NO_WARNINGS = '1';
}

// Bloquear workers de forma más agresiva
if (typeof global !== 'undefined') {
    // Deshabilitar Worker constructor si existe
    if (typeof global.Worker !== 'undefined') {
        global.Worker = function () {
            throw new Error('Workers disabled for VTEX compatibility');
        };
    }

    // Deshabilitar SharedArrayBuffer
    if (typeof global.SharedArrayBuffer !== 'undefined') {
        global.SharedArrayBuffer = undefined;
    }
}

// Override de funciones problemáticas solo en entorno Node.js
if (typeof window === 'undefined' && typeof require !== 'undefined') {
    try {
        // Intentar bloquear workers sin usar require('module')
        if (typeof global !== 'undefined' && global.require) {
            const originalRequire = global.require;
            global.require = function (id) {
                // Bloquear cualquier módulo relacionado con workers
                if (typeof id === 'string' && (
                    id.includes('worker') ||
                    id.includes('thread') ||
                    id.includes('cluster') ||
                    id.includes('workerpool') ||
                    id.includes('worker_threads')
                )) {
                    console.warn(`Blocked worker module: ${id}`);
                    return {};
                }
                return originalRequire.apply(this, arguments);
            };
        }
    } catch (e) {
        // Silenciosamente fallar si no podemos acceder a require
        console.warn('Cannot override require in this environment');
    }
}

// Exportar objeto vacío para compatibilidad
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {};
} else if (typeof exports !== 'undefined') {
    exports = {};
}
