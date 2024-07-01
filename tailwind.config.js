/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5FA5F9',
      },
      zIndex: {
        contents: 10,
        header: 20,
        navigation: 20,
        highlight: 50,
      },
    },
  },
  plugins: [],
};
