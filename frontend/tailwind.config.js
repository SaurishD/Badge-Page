/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#006258',
        'primary-background': '#080a0b',
        'card-primary': '#1a1a1a',
        'card-elevation': '#101315',
        'text-primary': '#F7F7F8',
        'text-secondary': '#91969a',
        'text-success': '#27b26d',
        'elevation1': '#16181a',
        'elevation2': '#111315',
        'elevation3': '#0c0e10',
        'success-elevation': '#192b24',
        'success-elevation2': '#709390'
      },
      
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.custom-scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': `${theme('colors.elevation1')} ${theme('colors.primary-background')}`,
          '&::-webkit-scrollbar': {
            'width': '12px',
          },
          '&::-webkit-scrollbar-track': {
            'background': theme('colors.primary-background'),
          },
          '&::-webkit-scrollbar-thumb': {
            'background-color': theme('colors.primary-background'),
            'border-radius': '6px',
            'border': `3px solid ${theme('colors.white')}`,
          },
          '&::-webkit-scrollbar-thumb:hover': {
            'background-color': theme('colors.gray.500'),
          },
        },
      }
      addUtilities(newUtilities, ['responsive'])
    }
  ],
}

