require('coffee-script/register')

var StatsPlugin   = require("stats-webpack-plugin"),
    _             = require("lodash"),
    merge         = require("webpack-merge"),
    path          = require("path"),
    webpack       = require("webpack"),
    path          = require("path"),
    searchFeature = require("./webpack/utils").searchFeature;

var app_root  = path.join(__dirname, ".."),
    lib_dir    = path.join(app_root, "public/libs"),
    node_dir   = path.join(app_root, "node_modules"),
    bower_dir  = path.join(app_root, "bower_components"),
    output_dir = path.join(app_root, "public", "webpack"),
    production = process.env.RAILS_ENV === "production";

var config = {
  resolve: {
    modules: [
  cache: true,
      "node_modules",
    ],
  },
  entry: {
    application: ["./app/assets/javascripts/application"],
    "feature-one": ["./webpack/feature-one"],
    "feature-two": ["./webpack/feature-two"],
    "spend-search": searchFeature("spend-search", "search/spend"),
    "markets-search": searchFeature("markets-search", "search/markets"),
    "contracts-search": searchFeature("contracts-search", "search/contracts"),
    "task-orders-search": searchFeature("task-orders-search", "search/task-orders"),
    "opportunities-search": searchFeature("opportunities-search", "search/opportunities")
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
    root: path.join(__dirname, '..', 'webpack'),
console.log(`***** loading webpack ${environment} config *****`)
module.exports = merge(config, require(`./webpack/${environment}`))
