module.exports = {
   devServer: {
      host: '0.0.0.0',
      port: 8080,
      proxy: {
         '/api': {
            target: 'https://www.bilibili.com',
            changeOrigin: true,
            pathRewrite: {
               '^/api': '/'
            }
         }
      },

   },
}