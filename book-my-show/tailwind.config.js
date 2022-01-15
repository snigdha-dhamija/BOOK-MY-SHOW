module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        sneha: {
          50: '#fff1dd',
          100: '#ffd7b0',
          200: '#ffbc80',
          300: '#fea14e',
          400: '#fe871e',
          500: '#e56d06',
          600: '#b25402',
          700: '#803c00',
          800: '#4e2300',
          900: '#1f0a00',
        },
        navCol: {
          50: '#f5effb',
          100: '#dad5df',
          200: '#2B3148',
          300: '#a69fad',
          400: '#8c8394',
          500: '#736a7b',
          600: '#595260',
          700: '#403b46',
          800: '#27222b',
          900: '#100a15',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
