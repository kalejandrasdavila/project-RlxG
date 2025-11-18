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
            webpack: (config) => {
                // Externalizar React y ReactDOM para evitar múltiples copias
                // VTEX ya proporciona React, por lo que no debe incluirse en el bundle
                
                // Función para externalizar React - MÁS AGRESIVA
                // Esta función se asegura de que React NUNCA se incluya en el bundle
                const externalizeReact = function(context, request, callback) {
                    // Externalizar React y ReactDOM - incluyendo sub-módulos
                    if (/^react$/.test(request) || 
                        /^react-dom$/.test(request) ||
                        /^react\/jsx-runtime$/.test(request) ||
                        /^react\/jsx-dev-runtime$/.test(request) ||
                        (request && request.startsWith && (request.startsWith('react/') || request.startsWith('react-dom/')))) {
                        // Devolver el nombre del módulo para externalización
                        return callback(null, request);
                    }
                    callback();
                };
                
                // CRÍTICO: Forzar externalización de React de manera absoluta
                // VTEX requiere que React se externalice usando nombres globales
                // Usar 'React' y 'ReactDOM' (mayúsculas) que es el formato que VTEX espera
                const reactExternals = {
                    'react': 'React',
                    'react-dom': 'ReactDOM'
                };
                
                // CRÍTICO: VTEX puede tener su propia configuración de externals
                // Necesitamos sobrescribirla completamente para asegurar que React se externalice
                // Usar formato de objeto que es el más compatible
                const existingExternals = typeof config.externals === 'object' && !Array.isArray(config.externals) 
                    ? config.externals 
                    : {};
                
                config.externals = {
                    ...existingExternals,
                    ...reactExternals
                };
                
                // CRÍTICO: Asegurar que resolve.alias NO apunte a React local
                // Si hay un alias que apunta a node_modules/react, eliminarlo
                if (config.resolve && config.resolve.alias) {
                    // Eliminar cualquier alias que apunte a React local
                    Object.keys(config.resolve.alias).forEach(key => {
                        if (key === 'react' || key === 'react-dom') {
                            delete config.resolve.alias[key];
                        }
                    });
                }
                
                // CRÍTICO: Asegurar que resolve.alias también apunte a React externo
                // Esto fuerza que todos los imports de React usen el runtime de VTEX
                if (!config.resolve) {
                    config.resolve = {};
                }
                if (!config.resolve.alias) {
                    config.resolve.alias = {};
                }
                // NO crear alias para React - dejar que se resuelva externamente
                // Los alias pueden interferir con la externalización

                config.parallelism = 1;
                config.cache = false;
                
                // Asegurar que los chunks dinámicos también externalicen React
                if (!config.output) {
                    config.output = {};
                }
                config.output.globalObject = 'this';
                
                // CRÍTICO: Forzar externalización en chunks dinámicos
                // Esto asegura que los imports dinámicos también externalicen React
                if (!config.optimization) {
                    config.optimization = {};
                }
                if (!config.optimization.splitChunks) {
                    config.optimization.splitChunks = {};
                }
                if (!config.optimization.splitChunks.cacheGroups) {
                    config.optimization.splitChunks.cacheGroups = {};
                }
                
                // Asegurar que React NUNCA se incluya en chunks dinámicos
                // CRÍTICO: Esto previene que React se incluya en los chunks generados por import()
                config.optimization.splitChunks.cacheGroups.reactExternal = {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: false, // No crear chunk para React
                    enforce: true,
                    priority: 10000, // Prioridad máxima
                    reuseExistingChunk: false,
                    chunks: 'all' // Aplicar a todos los chunks, incluyendo dinámicos
                };
                
                // CRÍTICO: Configurar splitChunks para excluir React de TODOS los chunks
                config.optimization = {
                    ...config.optimization,
                    minimize: false,
                    splitChunks: {
                        chunks: 'all',
                        maxSize: 100000,
                        cacheGroups: {
                            default: {
                                minChunks: 1,
                                priority: -20,
                                reuseExistingChunk: true,
                                // Excluir React del chunk por defecto
                                exclude: /[\\/]node_modules[\\/](react|react-dom)[\\/]/
                            },
                            vendor: {
                                test: /[\\/]node_modules[\\/]/,
                                name: 'vendors',
                                priority: -10,
                                reuseExistingChunk: true,
                                maxSize: 100000,
                                // Excluir React de vendor chunk - CRÍTICO
                                exclude: /[\\/]node_modules[\\/](react|react-dom)[\\/]/
                            },
                            // Asegurar que React nunca se incluya en ningún chunk
                            react: {
                                test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                                name: false, // No crear chunk
                                enforce: true,
                                priority: 10000, // Prioridad máxima
                                reuseExistingChunk: false,
                                chunks: 'all' // Aplicar a todos los chunks
                            }
                        }
                    }
                };

                return config;
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
