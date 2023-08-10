/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      "colors": {
        nav: "rgba(255, 255, 255, 0.5)",
        nav2: "rgb(92, 130, 255)",
        active: "rgba(157, 169, 183, 0.2)",
        about: "rgb(26 35 46)",
        "secondary-white": "rgb(199, 199, 199)"
      }
    },
  },
  plugins: [],
}

