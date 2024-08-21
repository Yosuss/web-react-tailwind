/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontSize: {
        'tiny': '0.5rem', // 8px
        'medium': '0.625rem', // 10px
        'xxs': '0.75rem',  // 12px
      },
      screens: {
        'sm': '320px',   // handphone screen
        'md': '640px',   // laptop screens
        'lg': '1024px',  // pc screens
        },
      // backgroundImage: {
      //     'mars': "url('./assets/mars.jpg')",
      //   }, 

    },
  },
  plugins: [],
}

