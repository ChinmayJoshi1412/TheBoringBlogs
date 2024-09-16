/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'slate':'#0F172A',
      'teal':'#115E59',
      'lightTeal':'#0D9488',
      'lightSlate':'#334155',
      'white':'#FFFFFF',
      'black':'#000000'
    },
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'scroll-slow': 'scroll 30s linear infinite', // 30s can be adjusted for speed
      },
    },
  },
  plugins: [],
}