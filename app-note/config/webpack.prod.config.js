const { merge } = require('webpack-merge');
const common = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',  // 输出文件的文件名称或者文件地址/文件名称
      template: 'public/index.html', // 本地模板位置
      inject: 'body', // 注入文件位置 body | head | true - body| false - none
      minify: { 
        removeComments: true,  // 压缩后去除注释
        collapseWhitespace: true, // 去除空格、换行
      }
    })
  ]
});