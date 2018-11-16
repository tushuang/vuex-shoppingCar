module.exports = {
    devServer:{
        port:8080,
        proxy:{
            '/api':{
                target:'http://my.xiu.com',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}