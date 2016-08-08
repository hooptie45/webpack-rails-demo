var path      = require('path'),
    app_root  = path.join(__dirname, "../..");

module.exports = [

  /*************************************************************************
   * Forces all templates in asset/templates to be put in the template cache,
   * without needing to explicitly require it
   *************************************************************************/
  {
    test: /.*required\.coffee/,
    loader: 'ng-loader',
  },

  /*************************************************************************
   * Legacy Sprockets Shim
   *************************************************************************/
  {
    loader: 'sprockets-loader',
    query: {
      logicalPaths: [
        path.join(app_root, 'app', 'assets', 'javascripts'),
        path.join(app_root, 'app', 'assets', 'stylesheets'),
        path.join(app_root, 'app', 'assets', 'templates'),
        path.join(app_root, 'webpack'),
        path.join(app_root, 'node_modules'),
      ]
    }
  }
]
