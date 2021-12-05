$(window).on("load", function () {
  function start() {
    // initialize
    $("#scale").on("change", () => start());
    $("table").remove();

    // construct field
    const fieldSize = +$("#scale").val();
    const $body = $("body");
    const $table = $("<table>");
    $body.append($table);
    [...Array(fieldSize)].forEach(() => $table.append("<tr>"));
    const $trs = $("tr");
    $trs.each((_, tr) =>
      [...Array(fieldSize)].forEach(() => $(tr).append("<td>"))
    );

    const cells = $("td");
    console.log(`scale: ${cells.length}`);
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
        const idx = Math.floor(Math.random() * cells.length);
        if (prev !== idx) {
          prev = idx;
          return idx;
        }
      }
    }
    function loop() {
      const idx = next();
      const target = $(cells[idx]).addClass("selected");
      target.on("click", function () {
        touch(target);
      });
    }
    loop();
  }
  start();
});
