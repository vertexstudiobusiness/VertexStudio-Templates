/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          950: '#0e0b08',
          900: '#17120e',
          850: '#201813',
          800: '#2a201a',
          700: '#3e3027',
          600: '#584437',
          500: '#755c4b',
          400: '#9b7e67',
          300: '#c0a792',
          200: '#ddcfc2',
          100: '#eee6dc',
          50: '#f9f6f1',
        },
        caramel: {
          300: '#e5aa70',
          400: '#d99252',
          500: '#c67d3b',
          600: '#ab6528',
          700: '#8a4e1b',
        },
        copper: {
          300: '#ea9f82',
          400: '#db8262',
          500: '#c26543',
          600: '#a34d2e',
          700: '#82381e',
        },
        ivory: {
          50: '#fdfbf7',
          100: '#f7f4ec',
          200: '#ede8dc',
          300: '#dfd8c7',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'noise-pattern': "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 0)",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'steam': 'steam 3s ease-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        steam: {
          '0%': { opacity: '0', transform: 'translateY(0) scaleX(1)' },
          '50%': { opacity: '0.4', transform: 'translateY(-15px) scaleX(1.3)' },
          '100%': { opacity: '0', transform: 'translateY(-30px) scaleX(1.6)' },
        }
      }
    },
  },
  plugins: [],
}
