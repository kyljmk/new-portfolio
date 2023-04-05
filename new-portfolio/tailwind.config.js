/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": {
            transform: "translateX(-500px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(500px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "slide-in-left": "slideInLeft 1.5s linear",
        "slide-in-right": "slideInRight 1.5s linear",
      },
    },
  },
  plugins: [],
};
