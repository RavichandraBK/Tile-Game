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
        fro:{
          // '0%': {
          //   transform: 'translateX(0);' /* Start at the initial position */
          // },
          // '15%': {
          //   transform: 'translateX(128px);' /* Move right by 100px */
          // },
          // '25%': {
          //   transform: 'translateX(128px);' /* Move right by 100px */
          // },
          // '35%': {
          //   transform: 'translateX(128px);' /* Move right by 100px */
          // },
          // '45%': {
          //   transform: 'translateX(256px);' /* Pause at this position */
          // },
          // '55%': {
          //   transform: 'translateX(256px);' /* Pause at this position */
          // },
          // '65%': {
          //   transform: 'translateX(256px);' /* Pause at this position */
          // },
          // '75%': {
          //   transform: 'translateX(384px);' /* Pause at this position */
          // },
          // '85%': {
          //   transform: 'translateX(384px);' /* Pause at this position */
          // },
          // '95%': {
          //   transform: 'translateX(384px);' /* Pause at this position */
          // },
          // '100%': {
          //   transform: 'translateX(384px);' /* Pause at this position */
          // },
          // '0%': {
          //   transform: 'translateX(0px);' /* Pause at this position */
          // },
          // '16%': {
          //   transform: 'translateX(128px);' /* Pause at this position */
          // },
          // '32%': {
          //   transform: 'translateX(128px);' /* Pause at this position */
          // },
          // '48%': {
          //   transform: 'translateX(256px);' /* Pause at this position */
          // },
          // '64%': {
          //   transform: 'translateX(256px);' /* Pause at this position */
          // },
          // '80%': {
          //   transform: 'translateX(384px);' /* Pause at this position */
          // },
          // '100%': {
          //   transform: 'translateX(384px);' /* Pause at this position */
          // },
          '0%': {
            transform: 'translateX(0px);' /* Pause at this position */
          },
          '12%': {
            transform: 'translateX(0px);' /* Pause at this position */
          },
          '24%': {
            transform: 'translateX(128px);' /* Pause at this position */
          },
          '36%': {
            transform: 'translateX(128px);' /* Pause at this position */
          },
          '48%': {
            transform: 'translateX(256px);' /* Pause at this position */
          },
          '60%': {
            transform: 'translateX(256px);' /* Pause at this position */
          },
          '72%': {
            transform: 'translateX(384px);' /* Pause at this position */
          },
          '84%': {
            transform: 'translateX(384px);' /* Pause at this position */
          },
          '100%': {
            transform: 'translateX(384px);' /* Pause at this position */
          },
          
        },
        
        blink:{
          '0%':{ opacity: '1' },
          '50%':{ opacity: '0' },
          '100%':{ opacity: '1' },
        }
      },
      animation: {
        'drop-slow': 'drop 250ms ease-out 10',
        'blink-box':'blink  0.2s ease-in-out 3',
        'motion':'fro 2s ease-in infinite alternate'
      },
    },
  },
  plugins: [],
}

