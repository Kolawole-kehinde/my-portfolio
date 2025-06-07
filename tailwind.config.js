// tailwind.config.js
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
        'collabo': "url('/images/bg1.jpg')",
        'bgImage': "url('/images/bg2.png')",
      },
       animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      
    },
  },
  plugins: [],
}
