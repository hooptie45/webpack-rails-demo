$ = require "jquery"

module.exports = (id)=>
  $ ->
    el = $("##{id}")
    el.switchClass "alert-danger", "alert-success",
      duration: 1000,
      easing: "easeInExpo",
      complete: ->
        el.find('.status').html("<b>SUCCESS</b>")
