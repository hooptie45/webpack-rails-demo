module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine'
    ],
    webpackMiddleware: {
      stats: 'errors-only'
    },
    files: [
      'spec/javascripts/main.coffee'
    ],
    exclude: [
      "**/*~",
      "*\#*"
    ],
    preprocessors: {
      'spec/javascripts/main.coffee': ['webpack']

    },
    webpack: require("./config/webpack.config.js"),
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine-html-reporter'),
      require('karma-chrome-launcher'),
      require('karma-jasmine'),
      require("karma-phantomjs-launcher"),
      require('karma-sourcemap-loader')
    ],
    reporters: [
      'kjhtml',
      'progress'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    browsers: [
      'Chrome'
    ],
    singleRun: false,
    concurrency: Infinity
  })
}
