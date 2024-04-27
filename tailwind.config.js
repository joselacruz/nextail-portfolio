/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)', // Utilizado para botones
        secondary: 'var(--secondary)', // Utilizado para texto en el header, títulos del sitio web y botones secundarios
        ternary: '#ffffff', // Utilizado para texto en fondo oscuro y botones con el color primario
        'text-secondary': 'var(--text-secondary)', // Texto secundario
        'bg-secondary': 'var(--bg-secondary)', // Fondo secundario
        'bg-ternary': 'var(--bg-ternary)', // Fondo ternario
        'text-dark': 'var(--text-dark)', // Texto en fondos oscuros y títulos
        'border-color': 'var(--border-color)',
        transparent: {
          DEFAULT: 'transparent',
          600: 'var(--transparent-600)',
        },
        'text-opacity': 'var(--text-opacity)',
      },
      boxShadow: {
        'custom-shadow': 'var(--custom-shadow)',
      },
      screens: {
        sm: { min: '539px' },
        smd: { min: '720px' },
        md: { min: '960px' },
        lg: { min: '1200px' },
      },
    },
  },
  plugins: [],
};
