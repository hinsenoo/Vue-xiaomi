module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        // 代理
        proxy: {
            // 拦截 /api 的访问
            // 例：https://www.imooc.com/u/loading
            // 当访问到 /u 时会转发到 target
            '/api': {
                // 代理的目标地址
                target: 'http://mall-pre.springboot.cn',
                // 是否要将主机头的源点更改为 url 地址
                changeOrigin: true,
                // 路径转发规则：把 /api 置为空
                pathRewrite: {
                    '/api': ''
                },
            }
        }
    },
    // 浏览器调试
    configureWebpack: {
        devtool: 'source-map'
    }
    
}