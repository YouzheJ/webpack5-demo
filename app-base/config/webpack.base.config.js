const path = require('path');
const packageJson = require('../package.json');
const { ModuleFederationPlugin } = require("webpack").container;

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
    filename: 'js/bundle.js',  // 打包输出的文件名字
    path: path.resolve(__dirname, '../dist')  // 输出路径
  },
  plugins: [
    new ModuleFederationPlugin({
      name: mfName,
      remotes: {
        'app-note': `app_note@//localhost:${port}/remoteEntry.js`,
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ]
}
