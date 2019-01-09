const path = require('path');

module.exports = {
  webpackConfig: require('./node_modules/react-scripts/config/webpack.config.js'),
  require: [path.join(__dirname, './src/index.css')],
  styles: {
    StyleGuide: {
      '@global *': {
        fontFamily: '"Indie Flower", cursive',
      },
      '@global .CodeMirror *': {
        fontFamily:
          'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      },
    },
  },
  exampleMode: 'expand',
};
