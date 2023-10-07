import { DirectionType } from "@common/types";
import { tailwindThemeConfig } from "@config/design";

export function tabs(direction: DirectionType = "vertical") {
  return {
    init() {
      const tabs = this.$refs.tabButtons.children;
      const tabsNb = tabs.length - 1;
      const tailwindKey = `1/${tabsNb}`;
      if (this.direction === "vertical") {
        this.$refs.tabButtons.style.gridTemplateColumns =
          tailwindThemeConfig.gridTemplateColumns[tabsNb];
      } else {
        this.$refs.tabButtons.style.gridTemplateRows =
          tailwindThemeConfig.gridTemplateRows[tabsNb];
      }
      this.$refs.tabMarker.style.width = tailwindThemeConfig.width[tailwindKey];
      this.tabRepositionMarker(this.$refs.tabButtons.firstElementChild);
    },
    direction,
    tabSelected: 1,
    tabId: this.$id("tabs"),
    tabButtonClicked(tabButton) {
      this.tabSelected = tabButton.id.replace(this.tabId + "-", "");
      this.tabRepositionMarker(tabButton);
    },
    tabRepositionMarker(tabButton) {
      this.$refs.tabMarker.style.width = tabButton.offsetWidth + "px";
      this.$refs.tabMarker.style.height = tabButton.offsetHeight + "px";
      this.$refs.tabMarker.style.top = tabButton.offsetTop + "px";
      this.$refs.tabMarker.style.left = tabButton.offsetLeft + "px";
    },
    tabContentActive(tabContent) {
      return (
        this.tabSelected == tabContent.id.replace(this.tabId + "-content-", "")
      );
    },
  };
}
