module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#84A59D',
        yellow: '#F6BD60',
        pink: '#F28482',
        lightPink: '#F7EDE2',
        lightGreen: '#D1ECE6'
      },
      fontFamily: {
        'Raleway' : ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}