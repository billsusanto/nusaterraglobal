/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      outfit: ["var(--font-outfit)"],
      sans: ["var(--font-montserrat)"],
    },
    extend: {
      colors: {
        primary: "#4D8B31",
        secondary: "#E0B83D",
        "light-gray": "#f5f5f5",
        "dark-gray": "#333333",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/home_background.jpg')",
        "gradient-border": "linear-gradient(to right, #4D8B31, #E0B83D)",
      },
    },
  },
  plugins: [],
};
