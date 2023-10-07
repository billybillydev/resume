import Alpine from "@scripts/alpine";
import { formatDateMagic } from "@scripts/alpine/magic/format-date";

export function dateFormatDirective(el: HTMLElement, { expression }) {
  let text = el.textContent.trim();
  text = formatDateMagic()(text, expression, undefined, undefined, undefined);
  el.textContent = text;
}
