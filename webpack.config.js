const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const devserver = require('./serverConf');
const env = process.env.NODE_ENV.trim() // 当前环境
//启动图片服务器
require('./server/bin/www');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    host: devserver.devserver,
    overlay: {
      errors: true,
      warnings: true
    },
    contentBase: './app',
    port: 8080,
    noInfo: false,
    quiet: false
  },
  entry: [
    "webpack-dev-server/client?http://" + devserver.devserver + ":8080/",
    "webpack/hot/only-dev-server",
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      // include: path.resolve(__dirname, 'app'),
      loader: 'style-loader!css-loader'
    }, {
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'app'),
      exclude: /node_modules/,
      //cacheDirectory 增加babel编译缓存
      loader: ['react-hot-loader', 'babel-loader?cacheDirectory']
    }]
  },
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      // ================================
      // 自定义路径别名
      // ================================
      '@': path.join(__dirname, '')
    }
  },
  plugins: [
    //作用域提升，webpack3
    new webpack
    .optimize
    .ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      // ================================
      // 配置开发全局常量
      // ================================
      __DEV__: env === 'development',
      __PROD__: env === 'production'
    }),
    // 进度条
    new NyanProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BrowserSyncPlugin({
      host: devserver.devserver,
      port: 9090,
      proxy: 'http://' + devserver.devserver + ':8080',
      logConnections: false,
      notify: false
    }, {
      reload: false
    })
  ]
};