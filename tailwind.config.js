/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    colors: {
      gray: '#ABB7B7',
      blue: '#425cbb',
      red: '#d81300',
      pink: '#f62459',
      yellow: '#ffc500',
      green: '#15db95'
    },
    fontFamily: {
      sans: ['Eczar', 'serif'],
      serif: ['Poppins', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}
