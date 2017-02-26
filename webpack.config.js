var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: path.join(process.cwd(), 'src/client/app/client-render.js'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : [
          APP_DIR,
          path.resolve(__dirname, 'src/components')
        ],
        loader : 'babel-loader'
      }
    ]
 }
};

module.exports = config;
