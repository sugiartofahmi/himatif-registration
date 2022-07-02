/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/src/assets/home.png')",
      },
      fontFamily:{
        freakeOne: ['Fredoka One', 'cursive'],
      },
    },
  },
  plugins: [],
}
