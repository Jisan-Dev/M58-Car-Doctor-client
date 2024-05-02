import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#FF3811',
          // secondary: 'teal',
          // warning: 'CYAN',
          '.btn-outline.btn-primary:hover': {
            color: '#FFF ',
          },
          '.btn-primary': {
            color: '#FFF',
          },
        },
      },
    ],
  },
};
