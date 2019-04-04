const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const WEBPACK_SERVER_PORT = process.env.WEBPACK_SERVER_PORT || 5000;

const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 3000;
const GRAPHQL_URL = process.env.GRAPHQL_URL || `http://localhost:${GRAPHQL_PORT}`;

const config = require('./webpack.config')({}, {});
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
  proxy: { '/graphql': GRAPHQL_URL },
  disableHostCheck: true,
  historyApiFallback: true,
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack({ ...config, mode: 'development' });
const server = new WebpackDevServer(compiler, options);

server.listen(WEBPACK_SERVER_PORT, 'localhost', () => {
  console.log(`dev server listening on port ${WEBPACK_SERVER_PORT}`);
});
