/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5FA5F9',
        highlight: '#ED4855',
      },
      zIndex: {
        contents: 10,
        header: 20,
        navigation: 20,
        highlight: 50,
      },
      maxWidth: {
        tablet: '768px',
      },
      padding: {
        navigation: '70px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
