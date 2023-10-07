export function capitalizeDirective(el: HTMLElement) {
  let text = el.textContent.trim();
  text = text[0].toUpperCase() + text.slice(1);
  el.textContent = text;
}
