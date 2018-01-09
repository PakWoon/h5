const path = require('path')

const dev = {
    //开发服务器配置
    host: 'localhost',
    port: 8080,
    autoOpenBrowser: false,
    hotUpdate: true,
    gzip: true,
    clientLogLevel: 'warning', //控制台log显示等级
    redirectIndex: false, //当发生404响应时是否跳转到index
    errorOverlay: true, //当系统编译错误时信息是否显示在浏览器中
    notifyOnErrors: true,
    proxyTable: [],//api转发

    //Paths
    assetsPublicPath: '/',

    //Source Maps
    devtool: 'eval-source-map',
}

const prod = {
    //Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: 'https://cdn.yuekeyun.com/larkprotalH5/',

    //Source Maps
    productionSourceMap: true,
    devtool: '#source-map',

    //Gzip压缩
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
}

module.exports = {
    dev: dev,
    prod: prod
}