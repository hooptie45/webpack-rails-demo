

$ ->
  el = $("#coffee")
  el.switchClass("alert-danger", "alert-success",
    duration: 1000,
    easing: "easeInExpo",
    complete: ->
      el.find('.status').html("<b>SUCCESS</b>")
  )
