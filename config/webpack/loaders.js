var _         = require("underscore");
var JS_LOADER = function(extension, loader, config) {
  return _.extend({
    test: new RegExp("\\." + extension + "$"),
    loaders: ["rollup", loader],
    exclude: /(node_modules|bower_components)/
  }, (config || {}));
};

module.exports = [
  /*************************************************************************
   * Config Files  (yaml, json)
   *************************************************************************/
  {
    test: /\.ya?ml$/,
    loaders: ['json', 'yaml']
  },

  /*************************************************************************
   * JS Languages  (coffee-script, es6, es6+react, coffee-script+react)
   *************************************************************************/
  // JS_LOADER("tsx?",      "awesome-typescript-loader"),
  // JS_LOADER("cjsx",  "coffee-jsx-loader"),
  JS_LOADER("coffee",  "coffee-loader"),
  JS_LOADER("cjsx",  "coffee-jsx-loader"),
  JS_LOADER("es6",     "babel?presets[]=es2015"),
  JS_LOADER("jsx",     "babel?presets[]=react,presets[]=es2015"),

  {
    test: /\.js$/,
    loaders: [
      "rollup",
      "babel?presets[]=react,presets[]=es2015"
    ],
    exclude: /(node_modules|bower_components)/
  },

  /*************************************************************************
   * CSS (css, scss, sass, less)
   *************************************************************************/
  { test: /\.css$/,                              loader: "style!css" },
  { test: /\.scss$/,                             loaders: ['style', 'css', 'postcss', 'sass'] },
  { test: /\.less$/,                             loaders: ['style', 'css', 'less'] },

  /*************************************************************************
   * IMAGE / FONT
   *************************************************************************/
  { test: /\.woff$/,                             loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]" },
  { test: /\.woff2$/,                            loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"},
  { test: /\.eot$/,                            loader: "url-loader?limit=10000&mimetype=application/font-eot&name=[path][name].[ext]"},
  { test: /\.ttf$/,                            loader: "url-loader?limit=10000&mimetype=application/font-fft&name=[path][name].[ext]"},
  { test: /\.(svg|gif|png)$/,            loader: "file-loader" },
  { test: /\.(jpe?g|png|gif|svg)$/i,             loader: 'file' },

  /*************************************************************************
   * FONT AWESOME
   *************************************************************************/
  { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url" },
  { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,        loader: 'file' },
]
