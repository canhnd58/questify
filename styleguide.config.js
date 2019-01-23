const path = require('path');

module.exports = {
  webpackConfig: require('./node_modules/react-scripts/config/webpack.config.js'),
  require: [path.join(__dirname, './src/index.css')],
  exampleMode: 'expand',
  serverPort: 8080,
};
