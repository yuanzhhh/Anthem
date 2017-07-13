const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const env = process.env.NODE_ENV.trim() // 当前环境
const UglifyJsPlugin = new webpack
  .optimize
  .UglifyJsPlugin({
    // 最紧凑的输出
    beautify: false,
    // 删除所有的注释
    comments: false,
    compress: {
      // 在UglifyJs删除没有用到的代码时不输出警告  
      warnings: false,
      // 删除所有的 `console` 语句
      // 还可以兼容ie浏览器
      drop_console: true,
      // 内嵌定义了但是只用到一次的变量
      collapse_vars: true,
      // 提取出出现多次但是没有定义成变量去引用的静态值
      reduce_vars: true,
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
    new CopyWebpackPlugin([{
      from: './app/index.html',
      to: 'index.html'
    }])
  ]
};