module.exports = {
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    maxSize: 200000, // 200KB
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'all',
                    maxSize: 200000, // 200KB
                }
            }
        }
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 500000, // 500KB
        maxAssetSize: 300000, // 300KB
    }
};
