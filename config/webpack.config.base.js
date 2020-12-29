const path = require('path')
const webpack = require('webpack')
const nodeExcternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const utils = require('./utils')

const webpackconfig = {
  target: 'node',
  mode: 'development',
  entry: {
    server: path.join(utils.APP_PATH, 'index.js'),
  },
  resolve: {
    alias: {
      '@': utils.APP_PATH
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: utils.DIST_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: [path.join(__dirname, 'node_modules')],
      },
    ],
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      //创建全局常量
      'process.env': {
        NODE_ENV:
          process.env.NODE_ENV === 'production' ||
          process.env.NODE_ENV === 'prod'
            ? "'production'"
            : "'development'",
      },
    }),
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true,
  },
}

module.exports = webpackconfig
