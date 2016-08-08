webpack = require('webpack')
path = require('path')

module.exports = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('required', 'required.js', Infinity),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: warnings: false
      sourceMap: false,
      cacheFolder: path.resolve("../..", 'public/cached_uglify/'),
      debug: true,
      minimize: true,
      output: comments: false
      compressor: warnings: false
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
}
