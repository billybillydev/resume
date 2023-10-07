export function sidebar() {
  return {
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
    closerEscape: {
      ["@keydown.escape.window"]() {
        this.close();
      },
    },
  };
}
