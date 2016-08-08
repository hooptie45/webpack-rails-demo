_    = require("underscore")
path = require("path")
glob = require('glob-fs')({ gitignore: true })


module.exports = (source, sourceMap)->
  @cacheable(true) if @cacheable

  files = glob.readdirSync(path.join("app", "assets", "templates", "**/*.html.haml"))
  files.map(@addDependency)

  conf = (("../" + file) for file in files)

  reqs = (("require('#{file}')") for file in conf)
  requireStatement = "require('angular');\n" + reqs.join(";\n") + "\n"

  console.log(requireStatement)
  out = path.resolve( "webpack", "templates.js")

  source + requireStatement


