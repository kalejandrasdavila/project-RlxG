// Configuración de emergencia para VTEX - Destruir workers completamente
// Importar script anti-workers definitivo (versión segura para navegador)
try {
    require('./vtex-no-workers-browser.js');
} catch (e) {
    console.warn('[VTEX-CONFIG] Could not load vtex-no-workers-browser.js:', e.message);
}

module.exports = (config) => {
    // Configuración equilibrada para prevenir errores de workerpool
    config.cache = false;
    config.parallelism = 1;

    // Filtrar plugins problemáticos de manera más selectiva
    if (config.plugins) {
        config.plugins = config.plugins.filter(plugin => {
            const pluginName = plugin.constructor.name.toLowerCase();
            const blockedNames = ['workerpool', 'jest-worker', 'thread-loader'];
            return !blockedNames.some(blocked => pluginName.includes(blocked));
        });
    }

    // Optimizaciones seguras que no usan workerpool
    config.optimization = {
        ...config.optimization,
        minimize: false,
        minimizer: [],
        splitChunks: false,
        concatenateModules: false,
        usedExports: false,
        sideEffects: false,
    };

    // Bloquear solo módulos específicos problemáticos
    config.resolve = config.resolve || {};
    config.resolve.alias = {
        ...config.resolve.alias,
        'workerpool': false,
        'jest-worker': false,
    };

    config.resolve.fallback = {
        ...config.resolve.fallback,
        'workerpool': false,
        'jest-worker': false,
        'fs': false,
        'path': require.resolve('path-browserify'),
    };

    // Agregar reglas para bloquear workers - más exhaustivo
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Permitir el archivo vtex-no-workers-browser.js que es seguro para el navegador
    // (No necesita reglas especiales de exclusión)

    // Bloquear solo los módulos más problemáticos
    const workerPatterns = [
        /workerpool/i,
        /jest-worker/i
    ];

    workerPatterns.forEach(pattern => {
        config.module.rules.push({
            test: pattern,
            use: 'null-loader'
        });
    });

    // Desactivar performance
    config.performance = { hints: false };

    // Stats mínimos
    config.stats = 'errors-only';

    // Configuración simple y segura
    config.experiments = {
        ...config.experiments,
        topLevelAwait: false,
    };

    // Configuración mínima de node
    config.node = {
        ...config.node,
        fs: 'empty',
    };

    return config;
};
