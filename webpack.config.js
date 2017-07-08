const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    // host: '172.17.120.218',
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
    "webpack-dev-server/client?http://127.0.0.1:8080/",
    "webpack/hot/only-dev-server",
    path.resolve(__dirname, 'app/main.js')],
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
      loader: ['react-hot-loader', 'babel-loader']
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
     alias: {
      // ================================
      // 自定义路径别名
      // ================================
      '@': path.join(__dirname,'')
    }
  },
  plugins: [
    //作用域提升，webpack3
    new webpack
    .optimize
    .ModuleConcatenationPlugin(),
    // 进度条
    new NyanProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BrowserSyncPlugin({
      host: '127.0.0.1',
      port: 9090,
      proxy: 'http://127.0.0.1:8080',
      logConnections: false,
      notify: false
    }, {
      reload: false
    })
  ]
};
