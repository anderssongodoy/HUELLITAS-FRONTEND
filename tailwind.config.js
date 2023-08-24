/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FFFFFF",
        "secondary": "#267125",
        "button": "#2F772D",
        "title": "#DEBA3B",
        "textbutton": "#2B2B2B"
      }
    },
  },
  plugins: [],
}

