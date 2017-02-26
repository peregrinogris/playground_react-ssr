const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');

const config = {
  entry: path.join(process.cwd(), 'client/client-render.js'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'client'),
          path.resolve(__dirname, 'components'),
        ],
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
