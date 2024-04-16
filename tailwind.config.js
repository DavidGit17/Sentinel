/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
      },
    },
  },
  plugins: [],
}