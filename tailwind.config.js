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
        'txt1':'#f5f5dc',
        'txt2': '#CCCCCC',
        'bg1':'#1f1f1f',
        'bg2':'#8d8d8d',
        'd1':'#bf85ff',
        // 'd2':'#381c47',
      },
    },
  },
  plugins: [],
}