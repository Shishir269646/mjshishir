import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      animation: {
        'animCircle': 'animCircle 10s linear infinite'
      },
      
      keyframes: {
        animCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }, 
        },
      },


    },


  },


  plugins: [daisyui],


}