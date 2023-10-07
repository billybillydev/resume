export function nowMagic() {
  return (
    locales?: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions
  ) => new Date().toLocaleDateString(locales, options);
}
