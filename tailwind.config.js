const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    fontFamily: {
      'gugi' : ['Gugi','sans-serif']
    },
    colors: {
      'background':'#2D2D2D',
      'primary':'#014F43',
      'secondary':'#171717',
      'lite':'#EEEEEE'
    },
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

