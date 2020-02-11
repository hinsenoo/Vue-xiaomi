module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        // 代理
        proxy: {
            // 拦截 /api 的访问
            '/api': {
                // 代理的目标地址
                target: 'https://www.imooc.com/'
            }
        }
    }
}