/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        drop:{
          '0%': { transform: 'translateY(-500%)' }, // Start position (above)
          '100%': { transform: 'translateY(0%)' }, // End position (at its normal place)
        },
        
        blink:{
          '0%':{ opacity: '1' },
          '50%':{ opacity: '0' },
          '100%':{ opacity: '1' },
        }
      },
      animation: {
        'drop-slow': 'drop 250ms ease-out 10',
        'blink-box':'blink  0.2s ease-in-out 3'
      },
    },
  },
  plugins: [],
}

