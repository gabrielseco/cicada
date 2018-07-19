const webpack = require('webpack');
const path = require('path');

const loaders = require('./webpack/loaders');
const optimization = require('./webpack/optimization');
const resolve = require('./webpack/resolve');
const { prodPlugins } = require('./webpack/plugins');

module.exports = {
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, './../public/static'),
    filename: 'js/[name].[hash].js',
    publicPath: './static/'
  },
  entry: ['./src/index.js'],
  resolve: resolve,
  optimization: optimization,
  plugins: prodPlugins(webpack),
  module: {
    rules: loaders
  },
  mode: 'production'
};
