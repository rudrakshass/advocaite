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
      'background':'#0C0C0C',
      'primary':'#9ABF80',
      'secondary':'#52616B',
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

