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
    new NpmInstallPlugin({
      save: true
    })
  ],
  devServer: {
    port: devServerPort,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  output: {
    publicPath: '//localhost:' + devServerPort + '/webpack/'
  }
}
