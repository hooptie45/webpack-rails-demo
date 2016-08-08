NpmInstallPlugin = require('npm-install-webpack-plugin');
webpack          = require('webpack')

devServerPort = 3808;

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  output: {
    publicPath: 'http://localhost:8090/assets'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('required', 'required.js', Infinity),
    new NpmInstallPlugin({
      save: true
    })
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') }
    })
  ]
  devServer: {
    port: devServerPort,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  output: {
    publicPath: '//localhost:' + devServerPort + '/webpack/'
  }
}
