const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InterpolateHtmlPlugin = require('./webpack-plugins/InterpolateHtmlPlugin');

const { TITLE } = require('./../env/dev.env');

const PUBLIC_URL = {
  DEV: './images',
  PROD: './static/images'
};

const devPlugins = webpack => [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
      PUBLIC_URL: JSON.stringify(PUBLIC_URL.DEV)
    }
  }),
  new HtmlWebpackPlugin({
    title: TITLE,
    template: './assets/index.html',
    inject: 'body'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  }),
  new InterpolateHtmlPlugin({
    PUBLIC_URL: PUBLIC_URL.DEV
  })
];

const prodPlugins = webpack => [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
      PUBLIC_URL: JSON.stringify(PUBLIC_URL.PROD)
    }
  }),
  new HtmlWebpackPlugin({
    title: TITLE,
    template: './assets/index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true
    }
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  }),
  new InterpolateHtmlPlugin({
    PUBLIC_URL: PUBLIC_URL.PROD
  })
];

module.exports = {
  devPlugins: devPlugins,
  prodPlugins: prodPlugins
};
