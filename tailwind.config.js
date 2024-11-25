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
      'primary':'#0E8388',
      'secondary':'#153334',
      'lite':'#CBE4DE'
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

