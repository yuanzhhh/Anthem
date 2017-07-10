const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const env = process.env.NODE_ENV.trim() // 当前环境
const UglifyJsPlugin = new webpack
  .optimize
  .UglifyJsPlugin({

    //压缩
    compress: {
      // 在UglifyJs删除没有用到的代码时不输出警告
      warnings: false,
    }
  });

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
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
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
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
    UglifyJsPlugin,
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
    new CopyWebpackPlugin([{
      from: './app/index.html',
      to: 'index.html'
    }])
  ]
};