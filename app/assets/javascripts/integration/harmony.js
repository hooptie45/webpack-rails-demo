$(e => {
  const el = $("#js");
  return el.switchClass("alert-danger", "alert-success", {
    duration: 1000,
    easing: "easeInExpo",
    complete: e => el.find('.status').html("<b>SUCCESS</b>")
  });
});
