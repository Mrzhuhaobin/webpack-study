const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: '8000',
        hot: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'develop'
        }),
    ]
});