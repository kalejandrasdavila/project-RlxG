module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current',
                browsers: ['> 1%', 'last 2 versions']
            },
            modules: 'auto',
            loose: true
        }],
        ['@babel/preset-react', {
            runtime: 'automatic'
        }],
        ['@babel/preset-typescript', {
            allowDeclareFields: true
        }]
    ],
    plugins: [],
    ignore: [
        'test-runner.js',
        'node_modules'
    ],
    compact: false,
    minified: false,
    sourceMaps: false
};
