/** @type {import('tailwindcss').Config} */

const path = require(`path`);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkblueibg: "hsl(217, 28%, 15%)",
          darkbluembg: "hsl(218, 28%, 13%)",
          darkbluefbg: "hsl(216, 53%, 9%)",
          darkbluetbg: "hsl(219, 30%, 18%)",
        },

        accent: {
          cyan: "hsl(176, 68%, 64%)",
          blue: "hsl(198, 60%, 50%)",
          lightred: "hsl(0, 100%, 63%)",
        },

        neutral: {
          white: "hsl(0, 0%, 100%)",
        }
      },

      backgroundImage: {
        'back-image': `url(${path.resolve(__dirname, 'src/assets/images/bg-curvy-desktop.svg')})`,
      }
    },
  },
  plugins: [],
}