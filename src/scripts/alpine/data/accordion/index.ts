function soloAccordion() {
  return {
    show: false,
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    toggle() {
      this.show = !this.show;
    },
    trigger: {
      ["@click"]() {
        this.toggle();
      },
    },
    display: {
      ["x-show"]() {
        return this.show;
      },
    },
  };
}
function groupAccordion() {
  return {
    activeAccordion: "",
    setActiveAccordion(id) {
      this.activeAccordion = this.activeAccordion == id ? "" : id;
    },
    isActive(id) {
      return this.activeAccordion === id;
    },
  };
}

export const accordion = { soloAccordion, groupAccordion };
