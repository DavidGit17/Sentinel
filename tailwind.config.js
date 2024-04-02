/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreynav: '#272525',
        customPurple: '#9600ff',
      },
      fontFamily:{
        customInter:['Inter, sans-serif'],
        customStint:['Stint, sans-serif']
      },
    },
  },
  plugins: [],
}