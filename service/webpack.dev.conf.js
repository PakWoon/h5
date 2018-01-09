const webpack = require('webpack')
const merge = require('webpack-merge')

const config = require('../config')
const baseWebpackConfig = require('./webpack.base.conf')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
    devtool: config.dev.devtool,
    devServer: {
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        publicPath: config.dev.assetsPublicPath,
        open: config.dev.autoOpenBrowser,
        hot: config.dev.hotUpdate,
        clientLogLevel: config.dev.clientLogLevel, //控制台log显示等级
        historyApiFallback: config.dev.redirectIndex, //当发生404响应时是否跳转到index
        compress: config.dev.gzip, //是否启用Gzip压缩
        overlay: config.dev.errorOverlay //当系统编译错误时信息是否显示在浏览器中
            ? { warnings: false, errors: true }
            : false,
        proxy: config.dev.proxyTable, //开发过程中后台服务api转发
        quiet: true, //启动后除了初始启动信息之外的任何内容都不会被打印到控制台，错误信息使用FriendlyErrorsPlugin插件显示
        watchOptions: {
            poll: true //watch模式监听没生效时使用此属性（Watch 在 NFS 和 VirtualBox 机器上不适用）
        }
    }
})