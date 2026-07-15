/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      },
      colors: {
        gray: {
          150: '#ebedf0',
          250: '#dadde2',
          450: '#858a96',
          750: '#2b3544',
          755: '#293241',
          850: '#1b2431',
        },
      },
    },
  },
  plugins: [],
}