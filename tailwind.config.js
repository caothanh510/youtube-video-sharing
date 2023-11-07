/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.{js,jsx,ts,tsx,vue}",
    "./app/views/**/*",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
