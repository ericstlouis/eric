module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        NTR: ['NTR', 'sans-serif'],
        poppins: ['Poppins', 'san-serif'],
      },
      colors: {
        primary: {
          grey: '#272525',
          pink: '#E94B3C',
          secondary: '#7A7A7A',
          card: '#201E1E',
        },
      },
    },
  },
  plugins: [],
};
