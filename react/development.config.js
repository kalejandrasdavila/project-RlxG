// Configuración de desarrollo para VTEX IO
// Este archivo no interfiere con la configuración de Webpack de VTEX

module.exports = {
    // Configuración para desarrollo
    development: {
        // Deshabilitar source maps en desarrollo
        sourceMap: false,

        // Configuración de CORS
        cors: {
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
            headers: ['X-Requested-With', 'content-type', 'Authorization']
        },

        // Configuración de React
        react: {
            fastRefresh: true,
            strictMode: false
        }
    }
};
