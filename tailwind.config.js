module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica']
    },
    extend: {
      colors: {
        'txt1':'#f5f5dc',
        'txt2': '#CCCCCC',
        'bg1':'#1f1f1f',
        'bg2':'#8d8d8d',
        'd1':'#460C68',
        // 'd2':'#381c47',
        // ColoresMati
        'morado': '#7F167F',
        'morado2': '#460C68',
        'rosaClaro': '#F56EB3',
        'rosa': '#CB1C8D',
        'gris': '#3D3B40',
        'darkAzul': '#151A1E',
        'blanco': '#F0F0F0',
        'gris2': '#242424',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus', 'active'], // Agregar variantes de color para fondos
      textColor: ['hover', 'focus', 'active'], // Agregar variantes de color para texto
    },
  },
  plugins: [],
}
