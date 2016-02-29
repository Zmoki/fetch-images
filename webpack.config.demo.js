'use strict';

const path = require('path');

module.exports = {
  entry: [
    './demo/index.js'
  ],
  output: {
    path: path.join(__dirname, 'demo', 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  }
};
