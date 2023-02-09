/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'] 
    },
    extend: {
      colors: {
        primary: "#F5F5F5",
        secondary: "#000C2D",
        text: "#939AA3",
        ash: "#FAFAFA",
        black: "#000000",
        white: "#fff",
      }
    },
  },
  plugins: [],
}