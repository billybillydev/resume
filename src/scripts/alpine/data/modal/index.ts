export function modal() {
  return {
    init() {
      this.$watch("show", function (value) {
        if (value === true) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      });
    },
    show: false,
    close() {
      this.show = false;
    },
    open() {
      this.show = true;
    },
    shower: {
      ["x-show"]() {
        return this.show;
      },
    },
    trigger: {
      ["@click"]() {
        this.open();
      },
    },
    closerClick: {
      ["@click"]() {
        this.close();
      },
    },
    closerKeydown: {
      ["@keydown.escape.window"]() {
        this.close();
      },
    },
  };
}
