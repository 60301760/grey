/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.js",
    // Add other paths as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'], // Montserrat as default
      },
    },
  },
  plugins: [],
};