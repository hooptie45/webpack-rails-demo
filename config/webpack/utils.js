var _      = require("lodash"),
    path   = require('path'),
    js_dir = path.join("app", "assets", "javascripts"),
    globfs = require('glob-fs');

var asLocal = file => `./${file}`;

module.exports.searchFeature = function(moduleName, name) {
  function expendDir(dir) {
    return (function() {
      try {
        return globfs({}).readdirSync(path.join(js_dir, name, dir, "**/*.coffee"));
      } catch(e) {
        console.log(e)
        return []
      };
    })()
  };

  var scaffold   = ["services", "models", "controllers", "directives"],
      moduleFile = [`app/assets/javascripts/${moduleName}`];

  return _.chain(
    moduleFile
  ).concat(
    _.chain(scaffold)..flatMap(expendDir).uniq().value()
  ).map(asLocal)
    .tap(console.log)
    .value()
};
