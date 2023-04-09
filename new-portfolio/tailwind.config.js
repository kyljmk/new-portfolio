/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    transform: (content) => content.replace(/taos:/g, ""),
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": {
            transform: "translateX(-800px)",
          },
          "90%": {
            transform: "translateX(30px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(800px)",
          },
          "90%": {
            transform: "translateX(-30px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "slide-in-left": "slideInLeft 1s linear",
        "slide-in-right": "slideInRight 1s linear",
      },
    },
  },
  plugins: [require("taos/plugin")],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
