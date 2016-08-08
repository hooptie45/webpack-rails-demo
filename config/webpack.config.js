require('coffee-script/register')

var StatsPlugin = require('stats-webpack-plugin'),
    merge       = require('webpack-merge'),
    path        = require('path'),
    webpack     = require('webpack')

var app_root  = path.join(__dirname, ".."),
    lib_dir   = path.join(app_root, 'public/libs'),
    node_dir  = path.join(app_root, 'node_modules'),
    bower_dir = path.join(app_root, 'bower_components');

var production = process.env.RAILS_ENV === 'production';

var config = {
  resolve: {
    modules: [
      "node_modules",
    ],
  },
  cache: true,
  entry: {
    required: [
      "jquery",
      "jquery-ui",
      "jquery-ui/ui/effect",
      "underscore",
      "select2",
      "bootstrap",
      "angular",
      "angular-resource",
      "angular-cookies",
      "angular-sanitize",
      "angular-route",
      "./webpack/required"
    ],
    app:  ['./webpack/app'],
    application: ['./app/assets/javascripts/application'],
    'feature-one': ['./webpack/feature-one'],
    'feature-two': ['./webpack/feature-two'],
  },
  output: {
    // Build assets directly in to public/webpack/, let webpack know
    // that all webpacked assets start with webpack/
    // must match config.webpack.output_dir
    path: path.join(app_root, 'public', 'webpack'),
    publicPath: '/webpack/',
		chunkFilename: "[id].chunk.js",
    filename: production ? '[name]-[chunkhash].js' : '[name].bundle.js'
  },
  plugins: [
    new webpack.dependencies.LabeledModulesPlugin(),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      _: "underscore"}),
    new StatsPlugin('manifest.json', {
      assets: true,
      chunkModules: true,
      source: false,
      chunks: false,
      modules: true}),
  ],
  module: {
    preLoaders: require("./webpack/preloaders.js"),
    loaders: require("./webpack/loaders.js"),
  },
  resolve: {
    alias: {
      "templates": "./../app/assets/templates"
    },
    root: path.join(__dirname, '..', 'webpack'),
    extensions: [
      "",
      ".coffee",
      '.ts',
      ".js",
      ".haml"
    ]
  },
};

environment = process.env.RAILS_ENV || 'development'
console.log(`***** loading webpack ${environment} config *****`)
module.exports = merge(config, require(`./webpack/${environment}`))
