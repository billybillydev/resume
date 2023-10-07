# astropine-css

This project is the main css package for astropine.
It worked with tailwindcss so be sure to have it in your project.

Don't also forget to define theme colors (primary, seconary, success, danger, info and warning) in your tailwind.config.js.

Below an example of tailwind.config.js file.

```js
module.exports = {
  content: ["src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue,css,md,mdx}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        ...colors,
        primary: colors.indigo, // or whatever hex value
        secondary: colors.black, // or whatever hex value
        success: colors.green, // or whatever hex value
        danger: colors.red, // or whatever hex value
        info: colors.blue, // or whatever hex value
        warning: colors.yellow, // or whatever hex value
      }),
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
```
