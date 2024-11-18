/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          500: "#4caf50",
        },
        blue: {
          500: "#2196f3",
        },
      },
    },
  },
  plugins: [],
};
