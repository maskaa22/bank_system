/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#08050f",
        secondary: "#c4b5fd",
        violet: "#8b5cf6",
        blush: "#f472b6",
        amber: "#fbbf24",
        dimWhite: "rgba(233, 228, 255, 0.66)",
        dimBlue: "rgba(139, 92, 246, 0.14)",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
