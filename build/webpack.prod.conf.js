const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const env = require('../config/prod.env');

module.exports = merge(baseWebpackConfig, {
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env
        })
    ],
    externals: {
        appConfig: 'appConfig'
    }
})