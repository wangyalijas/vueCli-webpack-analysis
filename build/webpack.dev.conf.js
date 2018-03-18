var path = require('path')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const env = require('../config/dev.env');

module.exports = merge(baseWebpackConfig, {
    devtool: config.dev.devtool,
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'), // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。
        port: 8001,
        hot: true // +
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.NamedModulesPlugin(), // 显示在控制台上更新HMR正确的文件名。
        new webpack.HotModuleReplacementPlugin()
    ]
})