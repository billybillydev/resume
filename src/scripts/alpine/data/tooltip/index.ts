export type TooltipOutputs = {
  visible: boolean;
  init?: () => void;
  show?: () => void;
  hide?: () => void;
  toggle: {
    "@mouseenter": () => void;
    "@mouseleave": () => void;
  };
};

export function tooltip(triggerOnHover: boolean = true): TooltipOutputs {
  return {
    visible: false,
    init() {
      if (triggerOnHover) {
        this.$refs.content.addEventListener("mouseenter", () => {
          this.visible = true;
        });
        this.$refs.content.addEventListener("mouseleave", () => {
          this.visible = false;
        });
      }
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    toggle: {
      ["@mouseenter"]() {
        if (!triggerOnHover) {
          this.show();
        }
      },
      ["@mouseleave"]() {
        if (!triggerOnHover) {
          this.hide();
        }
      },
    },
  };
}
