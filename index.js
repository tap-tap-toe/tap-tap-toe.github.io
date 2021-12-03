$(window).on("load", function () {
  function touch(self) {
    self.off("click");
    self.removeClass("selected");
    loop();
  }
  function loop() {
    const idx = Math.floor(Math.random() * 16);
    const target = $($("td")[idx]).addClass("selected");
    target.on("click", function () {
      touch(target);
    });
  }
  loop();
});
