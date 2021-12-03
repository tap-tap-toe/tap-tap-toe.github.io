$(window).on("load", function () {
  let touched = 0;
  function touch(self) {
    self.off("click");
    self.removeClass("selected");
    touched += 1;
    $("#counter").html(`${touched}`);
    loop();
  }
  let prev = -1;
  function next() {
    while (true) {
      const idx = Math.floor(Math.random() * 16);
      if (prev !== idx) {
        prev = idx;
        return idx;
      }
    }
  }
  function loop() {
    const idx = next();
    console.log(idx);
    const target = $($("td")[idx]).addClass("selected");
    target.on("click", function () {
      touch(target);
    });
  }
  loop();
});
