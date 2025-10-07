// Configuración global para VTEX
module.exports = {
    builders: {
        react: {
            // Desactivar workers para evitar problemas
            maxWorkers: 1,
            cache: false,
            parallel: false,

            // Configuración de memoria
            memoryLimit: '2048MB',

            // Configuración de Webpack
            webpack: {
                parallelism: 1,
                cache: false,
                optimization: {
                    minimize: false,
                    splitChunks: {
                        chunks: 'all',
                        maxSize: 100000,
                        cacheGroups: {
                            default: {
                                minChunks: 1,
                                priority: -20,
                                reuseExistingChunk: true
                            },
                            vendor: {
                                test: /[\\/]node_modules[\\/]/,
                                name: 'vendors',
                                priority: -10,
                                reuseExistingChunk: true,
                                maxSize: 100000
                            }
                        }
                    }
                }
            },

            // Configuración de TypeScript
            typescript: {
                skipLibCheck: true,
                incremental: false
            }
        }
    },

    // Configuración de desarrollo
    development: {
        hotReload: false,
        sourceMap: false
    }
};
