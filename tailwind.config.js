module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend : {
      fontFamily: {
        'body': ['Kumbh Sans']
      },
      fontSize: {
        'base18': '1.125rem'
      },
      screens: {
        'xsm': '375px',
        '1xl': '1440px'
      },
      colors: {
        darkcyan: '#19a2ae',
        darkDesaturatedBlue: '#2d3248',
        darkGrayishBlue: '#6a6f81',
        darkGray: '#969696'
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