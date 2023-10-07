import collapse from "@alpinejs/collapse";
import focus from "@alpinejs/focus";
import Alpine from "alpinejs";
import manage from "alpinejs-manage";

import { accordion } from "@scripts/alpine/data/accordion";
import { carousel } from "@scripts/alpine/data/carousel";
import { dropdown } from "@scripts/alpine/data/dropdown";
import { modal } from "@scripts/alpine/data/modal";
import { progressData } from "@scripts/alpine/data/progress";
import { sidebar } from "@scripts/alpine/data/sidebar";
import { table } from "@scripts/alpine/data/table";
import { tabs } from "@scripts/alpine/data/tabs";
import { tooltip } from "@scripts/alpine/data/tooltip";
import { capitalizeDirective } from "@scripts/alpine/directive/capitalize";
import { dateFormatDirective } from "@scripts/alpine/directive/format-date";
import { logDirective } from "@scripts/alpine/directive/log";
import { clipboardMagic } from "@scripts/alpine/magic/clipboard";
import { formatDateMagic } from "@scripts/alpine/magic/format-date";
import { nowMagic } from "@scripts/alpine/magic/now";

/* Data */
Object.entries({ ...accordion }).forEach(([key, value]) =>
  Alpine.data(key, value)
);
Alpine.data("carousel", carousel);
Alpine.data("dropdown", dropdown);
Alpine.data("modal", modal);
Alpine.data("progress", progressData);
Alpine.data("sidebar", sidebar);
Alpine.data("table", table);
Alpine.data("tabs", tabs);
Alpine.data("tooltip", tooltip);

/* Directive */
Alpine.directive("capitalize", capitalizeDirective);
Alpine.directive("date-format", dateFormatDirective);
Alpine.directive("log", logDirective);

/* Magic */
Alpine.magic("clipboard", clipboardMagic);
Alpine.magic("formatDate", formatDateMagic);
Alpine.magic("now", nowMagic);

/* Plugins */
Alpine.plugin(collapse);
Alpine.plugin(focus);
Alpine.plugin(manage);

export default Alpine;
