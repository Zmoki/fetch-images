'use strict';

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  output: {
    path: './dist',
    library: process.env.npm_package_config_library,
    libraryTarget: 'umd'
  }
};
