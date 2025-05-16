/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'ShowcaseImg': "url('/images/grid-wire-frame.svg')",
      },
      backgroundImage: {
        'collabo': "url('/images/bg1.jpg')",
      },
      backgroundImage: {
        'bgImage': "url('/images/bg2.png')",
      },
    },
  },
  plugins: [],
 
}
