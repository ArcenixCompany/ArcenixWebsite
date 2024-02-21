/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        'txt1':'#14acd4',
        'txt2': '#0c5484',
        'bg1':'#052537',
        'bg2':'#042e44',
        'd1':'#9c7cd4',
        'd2':'#3e3360',
      },
    },
  },
  plugins: [],
}