var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  // context: path.resolve(__dirname, "src"),
  entry: [
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/",
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node-modules/'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader'],
        exclude: '/node-modules/'
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader'
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    // new ExtractTextPlugin('main.css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin()
  ]
};
