module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: { // 配置跨域
      '/api': {
        //要访问的跨域的api的域名
        target: 'http://localhost:3000/api/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
