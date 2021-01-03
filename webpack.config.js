const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',  
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   compress: true,
  //   port: 8000,
  //   // host: '0.0.0.0'
  // },
  plugins: [
    new CleanWebpackPlugin({dist: 'dist'}),
    new HtmlWebpackPlugin({
        title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)/,
            use: ['file-loader']
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }
    ]
  }
};