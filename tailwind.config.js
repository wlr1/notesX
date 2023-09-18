/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["IBM Plex Sans", "sans"],
        second: ["DM Sans", "sans"],
      },
    },
  },
  plugins: [],
};
