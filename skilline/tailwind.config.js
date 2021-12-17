const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens
    },
    colors: {
      'transparent': 'transparent',
      'primary': '#F48C06',
      'secondary': '#2F327D',
      'blue': '#65DAFF',
      'gray': '#6C6C6C',
      'purple': '#252641',
      'white': '#fff',
      sky: colors.sky,
      yellow: colors.yellow,
      gray: colors.gray
    },
    extend: {
      boxShadow: {
        '3xl': '0px 4px 12px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}
