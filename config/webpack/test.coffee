path          = require('path')
webpack       = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('test') }
    }),
  ]
  devtool: 'source-map',
  entry: {
    tests: [
      "jquery",
      "underscore",
      "angular",
      "angular-resource",
      "angular-mocks",
    ]
  }
}
