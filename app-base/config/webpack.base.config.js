const path = require('path');
const packageJson = require('../package.json');
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 8081;
const getMFName = name => name.replace(/-/g, '_');
const mfName = getMFName(packageJson.name);

module.exports = {
  entry: {  // 入口文件
    app:  path.resolve(__dirname, '../src/index.js'),
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  output: {  // 编译打包后的文件名及所在路径
    filename: 'js/[name].js',  // 打包输出的文件名字
    path: path.resolve(__dirname, '../dist')  // 输出路径
  },
  plugins: [
    new ModuleFederationPlugin({
      name: mfName, // 不能包含连线符，需要是合法的变量名
      // library: { type: "var", name: mfName },
      filename: "remoteEntry.js",
      remotes: {
        'app-note': `app_note@//localhost:${port}/remoteEntry.js`,
      },
      exposes: {
        // './CardContextProvider': path.resolve(__dirname, '../src/lib/CardContextProvider.js')
      },
      shared: { react: { singleton: true, eager: true }, "react-dom": { singleton: true, eager: true } },
    }),
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
}
