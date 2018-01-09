const path = require('path')

module.exports = {
    /**
     * 基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader,
     * 默认使用当前目录，但是推荐在配置中传递一个值。
     * 这使得你的配置独立于 CWD(current working directory - 当前执行路径)。
     * */
    context: path.resolve(__dirname, '../'),
    entry: {

    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
          ? config.build.assetsPublicPath
          : config.dev.assetsPublicPath
    }
}