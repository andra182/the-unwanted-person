/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "multi-outline": "0 0 0 4px #FFEE00,  0 0 0 9px #000000",
      },
      fontFamily: {
        'sour-gummy': ['Sour Gummy', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
