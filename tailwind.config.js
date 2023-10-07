/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue,css,md,mdx}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        ...colors,
        primary: colors.indigo,
        secondary: colors.black,
        success: colors.green,
        danger: colors.red,
        info: colors.blue,
        warning: colors.yellow,
      }),
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
