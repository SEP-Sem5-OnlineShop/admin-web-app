const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        colors: {
          accent: '#E5E7EB',
          danger: colors.red[600],
          warn: colors.amber[400],
          success: colors.emerald[600],
          info: colors.blue[700],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
