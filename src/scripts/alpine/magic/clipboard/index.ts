export function clipboardMagic() {
  return async (subject: string) =>
    await navigator.clipboard.writeText(subject);
}
