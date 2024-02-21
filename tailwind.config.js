/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ["Montserrat", 'sans-serif'],
    },
    extend: {
      colors: {
        'rosa': '#eb01ae',
        'violeta': '#4d016e',
        'naranja': '#ff4800',
        'azulado': '#4d0163',
        'rosita': '#8900f2',
        'background1': '#1d1d1d',
        'background2': '#232427',
        'text1': '#676b76',
        'text2': '#e0e0df',
      },
    },
  },
  plugins: [],
}