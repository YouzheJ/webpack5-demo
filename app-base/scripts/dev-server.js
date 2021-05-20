const Webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('../config/webpack.dev.config.js');

const compiler = Webpack(webpackConfig);
const port = 8080;
const host = '127.0.0.1';
const devServerOptions = {
  ...webpackConfig.devServer,
  // index: 'index.html',
  open: true,
  stats: {
    colors: true,
  },
  contentBase: path.resolve(__dirname, '../dist'),
  publicPath: '/',
  historyApiFallback: true,
  hot: true,
};
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(port, host, () => {
  console.log(`Starting server on http://${host}:${port}`);
});
