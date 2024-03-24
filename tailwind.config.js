/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a6cf7', // Utilizado para botones
        secondary: '#090e34', // Utilizado para texto en el header, títulos del sitio web y botones secundarios
        ternary: '#ffffff', // Utilizado para texto en fondo oscuro y botones con el color primario
        'text-secondary': '#959cb1', // Texto secundario
        'bg-secondary': '#fdfdfd', // Fondo secundario
        'bg-ternary': '#f8f9ff', // Fondo ternario
        'text-dark': '#9299af', // Texto en fondos oscuros y títulos
        transparent: 'transparent',
        'text-opacity': 'rgb(9 14 52)',
      },
      boxShadow: {
        'custom-shadow': '0px 5px 10px rgba(4, 10, 34, 0.2)',
      },
      screens: {
        sm: { max: '539px' },
        md: { max: '960px' },
      },
    },
  },
  plugins: [],
};
