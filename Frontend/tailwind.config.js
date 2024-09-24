/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js,jsx",
  ],
  theme: {
    extend: {
      screens:{
        "mobile":"480px",
        "tablet":"768px",
        "laptops":"1024px",
        "desktops":"1200px",
        "xlscreens":"1201px",
      },
      colors: {
        customGreynav: '#272525',
        customPurple: '#9600ff',
      },
      fontFamily:{
        customRoboto:['Roboto, san-serif'],
        customInter:['Inter, sans-serif'],
        customStint:['Stint, sans-serif'],
        customsfuidisplay:['sfuidisplay, Stint'],
        customsfuidisplaylight:['sfuidisplaylight, Stint'],
        customsfuidisplaybold:['sfuidisplaybold, Stint']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}