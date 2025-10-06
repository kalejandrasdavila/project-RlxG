module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.json'],
        alias: {
            // Alias para resolver Swiper de forma más liviana
            'swiper': 'swiper/swiper.mjs',
            'swiper/modules': 'swiper/modules/index.mjs',
        },
        fallback: {
            // Fallbacks para módulos Node.js en el navegador
            "path": false,
            "fs": false,
            "crypto": false,
        }
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto',
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10000, // Reducido para chunks más pequeños
            maxSize: 100000, // Reducido a 100KB para menor uso de memoria
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    maxSize: 100000, // Reducido a 100KB
                    priority: 10,
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'all',
                    maxSize: 100000, // Reducido a 100KB
                    priority: 5,
                },
                // Separar librerías grandes en chunks más pequeños
                swiper: {
                    test: /[\\/]node_modules[\\/](swiper)[\\/]/,
                    name: 'swiper',
                    chunks: 'all',
                    maxSize: 80000, // Más pequeño para Swiper
                    priority: 20,
                },
                jquery: {
                    test: /[\\/]node_modules[\\/](jquery)[\\/]/,
                    name: 'jquery',
                    chunks: 'all',
                    maxSize: 80000,
                    priority: 20,
                },
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'react',
                    chunks: 'all',
                    maxSize: 80000,
                    priority: 20,
                }
            }
        },
        // Optimización adicional para reducir memoria
        usedExports: true,
        sideEffects: false,
        // Configuración para reducir uso de memoria durante el build
        minimize: false, // Desactivar minificación para reducir uso de memoria
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 400000, // Reducido a 400KB para menor uso de memoria
        maxAssetSize: 150000, // Reducido a 150KB
    }
};
