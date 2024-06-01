/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100:"#858585",
          200:"#ACACAC",
          300:"#EDEDED",
          400:"#FBFBFB"
        },
      },
    },
  },
  plugins: [],
}
