/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'main': '5.25rem',
      }
    },
    fontFamily:{
      space: ["Space Grotesk", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
      inter:["Inter", "sans-serif"],
    },
  },
  plugins: [],
}

