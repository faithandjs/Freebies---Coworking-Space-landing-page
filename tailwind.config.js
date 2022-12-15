module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      mainText: ['Axiforma', 'sans-serif'],
      main: ['Cera Pro', 'sans-serif'],
      profile: ['Avenir Next Cyr', 'sans-serif'],
      heading: ['Gilroy-Medium', 'sans-serif'],
      heading2: ['Gilroy-Bold', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: '#fd5b2f',
        grey: { DEFAULT: '#686c75', light: '#989898' },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};

