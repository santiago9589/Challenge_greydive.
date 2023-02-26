/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'xl': '1440px',
    },
    // colors: {
    //   'darkblueDM': 'hsl(209, 23%, 22%)',
    //   'verydarkblueDMB': 'hsl(207, 26%, 17%)',
    //   'verydarkblueLMT': 'hsl(200, 15%, 8%)',
    //   'darkgrayLMI': 'hsl(0, 0%, 52%)',
    //   'verylightgrayLMB': 'hsl(0, 0%, 98%)',
    //   'whiteDMTLME': 'hsl(0, 0%, 100%)',
    // },
    // fontFamily: {
    //   Nunito: ['Nunito Sans', 'sans-serif'],
    // },
    extend: {
    },
  },
  plugins: [],
}
