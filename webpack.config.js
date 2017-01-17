var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './js/app.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: './js/[name].min.js',
  },
};