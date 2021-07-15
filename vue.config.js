module.exports = {
    devServer: {
        proxy: {
            '/iot/ue': {
                target: 'http://192.168.3.130/php/controller.php',
                changeOrigin: true,
                pathRewrite: {
                    '^/iot/ue': ''
                }
            }
        }
    }
}
