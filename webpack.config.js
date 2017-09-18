var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProd = NODE_ENV == 'production';

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: process.env.PUBLIC_PATH,
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: isProd ? ExtractTextPlugin.extract ({
          fallback: 'style-loader',
          use: ['css-loader?minimize', 'sass-loader'],
        }) : ['style-loader', 'css-loader?sourceMap', 'sass-loader']
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader?name=[hash].[ext]'
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=1000000',
      }
    ]
  },

  devtool: NODE_ENV == 'development' ? 'cheap-module-eval-source-map' : false,

    devServer: {
    hot: true,
    port: 5000,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new ExtractTextPlugin('main.css'),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
};

if (isProd) {
  module.exports.plugins.push(
    new UglifyJSPlugin()
  );
} else {
  module.exports.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}