module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"RedRing Medium"'],
      display: ['"RedRing Bold"'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        blackmine: {
          'primary': '#23a455',
          'primary-focus': '#43b16e',
          'primary-content': '#fff',
          'base-100': '#000000',
          'base-200': '#1a1a1a',
          'base-300': '#4d4d4d',
          'base-content': '#ffffff',
          // // this is not mine
          'neutral': '#ffffff',
          'neutral-focus': '#4d4d4d',
          'neutral-content': '#000000',
          'secondary': '#5865F2',
          'secondary-focus': '#404EED',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
};
