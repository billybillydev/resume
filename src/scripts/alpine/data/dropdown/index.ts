import { PositionType } from "@common/types";
import { tailwindThemeConfig } from "@config/design";

export function dropdown(position: PositionType = "bottom", duration: number) {
  const positionClassMap = new Map<PositionType, string>([
    ["top", "-translate-x-1/2 left-1/2 bottom-full"],
    ["bottom", "-translate-x-1/2 left-1/2 top-full"],
    ["left", "-translate-y-1/2 top-1/2 right-full"],
    ["right", "-translate-y-1/2 top-1/2 left-full"],
  ]);

  const transitionClassMap = new Map<
    PositionType,
    {
      enter: { start: string; end: string };
      leave: { start: string; end: string };
    }
  >([
    [
      "top",
      {
        enter: {
          start: "translate-y-2 opacity-0",
          end: "translate-y-0 opacity-100",
        },
        leave: {
          start: "translate-y-0 opacity-100",
          end: "translate-y-2 opacity-0",
        },
      },
    ],
    [
      "bottom",
      {
        enter: {
          start: "-translate-y-2 opacity-0",
          end: "translate-y-0 opacity-100",
        },
        leave: {
          start: "translate-y-0 opacity-100",
          end: "-translate-y-2 opacity-0",
        },
      },
    ],
    [
      "left",
      {
        enter: {
          start: "translate-x-2 opacity-0",
          end: "translate-x-0 opacity-100",
        },
        leave: {
          start: "translate-x-0 opacity-100",
          end: "translate-x-2 opacity-0",
        },
      },
    ],
    [
      "right",
      {
        enter: {
          start: "-translate-x-2 opacity-0",
          end: "translate-x-0 opacity-100",
        },
        leave: {
          start: "translate-x-0 opacity-100",
          end: "-translate-x-2 opacity-0",
        },
      },
    ],
  ]);

  return {
    init() {
      this.$watch("visible", () => {
        window.addEventListener("resize", () => {
          this.selectPositionUpdate();
        });
      });
      this.setPositionClasses();
      this.setAlpineAttributes();
    },
    position,
    duration,
    visible: false,
    async show() {
      this.visible = true;
      await this.$nextTick();
      this.selectPositionUpdate();
      this.setPositionClasses();
      this.setAlpineAttributes();
    },
    hide() {
      this.visible = false;
    },
    toggle() {
      this.visible = !this.visible;
    },
    hover: {
      ["@mouseenter"]() {
        this.show();
      },
      ["@mouseleave"]() {
        this.hide();
      },
    },
    trigger: {
      ["@click"]() {
        this.show();
      },
    },
    closer: {
      ["@click.away"]() {
        this.hide();
      },
    },
    isVisible() {
      return this.visible;
    },
    shower: {
      ["x-show"]() {
        return this.visible;
      },
    },
    setPositionClasses() {
      this.$refs.content.classList.add(
        ...positionClassMap.get(this.position).split(" ")
      );
    },
    resetPositionClasses() {
      this.$refs.content.classList.remove(
        ...positionClassMap.get(this.position).split(" ")
      );
    },
    setAlpineAttributes() {
      this.$refs.content.style.transitionDuration =
        tailwindThemeConfig.transitionDuration[this.duration];
      this.$refs.content.setAttribute("x-transition:enter", `ease-out`);
      this.$refs.content.setAttribute(
        "x-transition:enter-start",
        transitionClassMap.get(this.position).enter.start
      );
      this.$refs.content.setAttribute(
        "x-transition:enter-end",
        transitionClassMap.get(this.position).enter.end
      );
      this.$refs.content.setAttribute("x-transition:leave", `ease-out`);
      this.$refs.content.setAttribute(
        "x-transition:leave-start",
        transitionClassMap.get(this.position).leave.start
      );
      this.$refs.content.setAttribute(
        "x-transition:leave-end",
        transitionClassMap.get(this.position).leave.end
      );
    },
    selectPositionUpdate() {
      switch (this.position) {
        case "bottom":
          if (
            this.$refs.content.getBoundingClientRect().bottom >
            window.innerHeight
          ) {
            this.resetPositionClasses();
            this.position = "top";
          } else {
            this.position = "bottom";
          }
          break;
        case "top":
          if (this.$refs.content.getBoundingClientRect().top < 0) {
            this.resetPositionClasses();
            this.position = "bottom";
          } else {
            this.position = "top";
          }
          break;

        default:
          break;
      }
    },
  };
}
