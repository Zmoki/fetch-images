module.exports = (config) => {
  config.set({
    basePath: '',
    port: 9876,
    frameworks: ['mocha'],
    client: {
      mocha: {
        timeout: 15000
      }
    },
    browsers: ['Chrome'],
    reporters: ['progress'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    timeout: 15000,
    files: [
      'test/**/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel'
          }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      require('karma-webpack'),
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-chrome-launcher'
    ]
  })
};
