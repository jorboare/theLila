/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: "#840c80",
        background: "#fff9ec",
      },
      screens: {
        xsm: "350px",
      },
      fontFamily: {
        Titles: "Dream Avenue, sans-serif",
        Helvetica: "Helvetica, sans-serif",
      },
    },
  },
  plugins: [],
};
