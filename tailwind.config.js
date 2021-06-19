module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'start': '#af67e9',
      'stop': '#6565e7'
     }),
    extend : {
      fontFamily: {
        'body': ['Kumbh Sans']
      },
      fontSize: {
        'base12': '0.75rem'
      },
      screens: {
        'xsm': '375px',
        '1xl': '1440px'
      },
      colors: {
        veryDarkGrayishBlue: '#4a4b5e',
        darkGrayishlue: '#787887',
        lightGrayishBlue: '#e7e7e9',
        veryDarkDesaturatedBlue: '#1d1e35',
        softRed: '#f47c57'
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [],
}