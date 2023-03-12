/** @type {import('tailwindcss').Config} */
// const withMT = require('@material-tailwind/react/utils/withMT')

// module.exports = withMT({
//  content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {}
//   },
//   plugins: []
// })

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cerulean': {
          DEFAULT: '#0D9FBE',
          50: '#8CE4F7',
          100: '#78E0F6',
          200: '#52D7F3',
          300: '#2CCEF1',
          400: '#10BFE4',
          500: '#0D9FBE',
          600: '#097389',
          700: '#064755',
          800: '#021B20',
          900: '#000000'
        },
        'monte-carlo': {
          DEFAULT: '#7EC5D4',
          50: '#FFFFFF',
          100: '#F8FCFD',
          200: '#DAEEF3',
          300: '#BBE1E8',
          400: '#9DD3DE',
          500: '#7EC5D4',
          600: '#54B2C6',
          700: '#3896A9',
          800: '#2A707F',
          900: '#1C4B55'
        },
        'bahama-blue': {
          DEFAULT: '#005794',
          50: '#4DB5FF',
          100: '#38ADFF',
          200: '#0F9CFF',
          300: '#0087E6',
          400: '#006FBD',
          500: '#005794',
          600: '#00365C',
          700: '#001524',
          800: '#000000',
          900: '#000000'
        },
        'great-blue': {
          DEFAULT: '#2A669F',
          50: '#E4F7F8',
          100: '#CCEEF2',
          200: '#9CD7E5',
          300: '#6CB9D8',
          400: '#3B94CB',
          500: '#2A669F',
          600: '#234B83',
          700: '#1B3366',
          800: '#14204A',
          900: '#0C102E'
        },
        'gray': {
          DEFAULT: '#808080',
          50: '#DCDCDC',
          100: '#D2D2D2',
          200: '#BDBDBD',
          300: '#A9A9A9',
          400: '#949494',
          500: '#808080',
          600: '#646464',
          700: '#484848',
          800: '#2C2C2C',
          900: '#101010'
        },
        'christine': {
          DEFAULT: '#E75A0D',
          50: '#FBCBB1',
          100: '#FABE9E',
          200: '#F7A477',
          300: '#F58B50',
          400: '#F3712A',
          500: '#E75A0D',
          600: '#B2450A',
          700: '#7D3107',
          800: '#481C04',
          900: '#130701'
        },
        'alabaster': {
          DEFAULT: '#FBFBFB',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FBFBFB',
          600: '#DFDFDF',
          700: '#C3C3C3',
          800: '#A7A7A7',
          900: '#8B8B8B'
        },
      }
    }
  },
  plugins: []
}