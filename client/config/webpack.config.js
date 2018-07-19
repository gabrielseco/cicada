const webpack = require('webpack');
const path = require('path');

const { HOST, PORT } = require('./env/dev.env');
const loaders = require('./webpack/loaders');
const optimization = require('./webpack/optimization');
const resolve = require('./webpack/resolve');
const { devPlugins } = require('./webpack/plugins');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'js/main.js',
    publicPath: '/'
  },
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  resolve: resolve,
  optimization: optimization,
  plugins: devPlugins(webpack),
  module: {
    rules: loaders
  },
  mode: 'development'
};
