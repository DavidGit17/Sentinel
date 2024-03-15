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
      fontFamily: {
        customStint: ['StintUltraExpanded-Regular', 'sans-serif'],
        customStretchPro: ['StretchPro', 'sans-serif'],
        customakira:['Akira Expanded Demo', 'sans-serif'],
        customMonserrat:['Montserrat', 'sans-serif'],
        customRubik:['Rubik-ExtraBold', 'sans-serif'],
        customRubikone:['Rubikone', 'sans-serif'],
        customAnonymousPro:['Anonymous Pro', 'sans-serif'],
        customNeueMachinaLight:['NeueMachina-Light', 'sans-serif']
      },
    },
  },
  plugins: [],
}