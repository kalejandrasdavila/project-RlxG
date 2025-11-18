// Configuración de emergencia para VTEX - Prevenir workers
// Cargar script anti-workers definitivo
if (typeof window === 'undefined') {
    require('./vtex-no-workers.js');
}

module.exports = {
    // Externalizar React y ReactDOM para evitar múltiples copias
    // VTEX ya proporciona React, por lo que no debe incluirse en el bundle
    // Usar formato de objeto con nombres globales que VTEX espera
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    
    // Configuración de resolución para bloquear workers
    resolve: {
        alias: {
            // Bloquear módulos problemáticos
            'workerpool': false,
            'worker_threads': false,
            'child_process': false,
            'cluster': false,
            'worker-farm': false,
            'worker-loader': false,
            'threads': false,
            'piscina': false,
            'jest-worker': false,
        },
        fallback: {
            'workerpool': false,
            'worker_threads': false,
            'child_process': false,
            'cluster': false,
            'os': false,
            'path': false,
            'fs': false,
            'module': false,
            'worker-farm': false,
            'worker-loader': false,
            'threads': false,
            'piscina': false,
            'jest-worker': false,
        }
    },

    // Configuración de módulos
    module: {
        rules: [
            {
                test: /workerpool/i,
                use: 'null-loader'
            },
            {
                test: /worker_threads/i,
                use: 'null-loader'
            },
            {
                test: /worker-threads/i,
                use: 'null-loader'
            },
            {
                test: /worker/i,
                use: 'null-loader'
            },
            {
                test: /jest-worker/i,
                use: 'null-loader'
            }
        ]
    },

    optimization: {
        minimize: false,
        splitChunks: false,
        concatenateModules: false,
        usedExports: false,
        sideEffects: false,
        // Desactivar TODAS las optimizaciones
        removeAvailableModules: false,
        removeEmptyChunks: false,
        mergeDuplicateChunks: false,
        flagIncludedChunks: false,
        providedExports: false,
        mangleExports: false,
        innerGraph: false,
        realContentHash: false,
    },

    performance: {
        hints: false
    },

    // Configuración adicional anti-workers
    cache: false,
    parallelism: 1,

    // Stats mínimos
    stats: 'errors-only',

    // Configuraciones de Node.js
    node: {
        child_process: 'empty',
        cluster: 'empty',
        worker_threads: 'empty',
        workerpool: 'empty',
    }
};
