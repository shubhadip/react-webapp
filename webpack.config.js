var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {dependencies} = require('./package.json');

const VENDOR_LIBS = [];
Object.entries(dependencies).forEach(([key, value]) => {
  VENDOR_LIBS.push(key);
});

config = {
  entry:{
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules:[
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test:/\.(scss|sass)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        }),
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      names:['vendor','manifest']
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title:'Sass To Css',
      hash: true,
      minify:false,
      template: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}

module.exports = config;