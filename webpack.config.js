var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');

var config = {
  entry: path.join(process.cwd(), 'client/client-render.js'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : [
          path.resolve(__dirname, 'client'),
          path.resolve(__dirname, 'components')
        ],
        loader : 'babel-loader'
      }
    ]
 }
};

module.exports = config;
