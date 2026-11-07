/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FDFCF7',
          100: '#F7F4EC',
          200: '#EFE9DC',
          300: '#E2D8C3',
          400: '#CEBDA0',
          500: '#B69E7B',
        },
        charcoal: {
          950: '#0F0F0E',
          900: '#181816',
          800: '#232320',
          700: '#343430',
          600: '#4E4E48',
          500: '#6E6E67',
          400: '#94948C',
          300: '#BFBFB8',
          200: '#DFDFDA',
          100: '#EFEFEA',
        },
        wood: {
          900: '#3A271B',
          800: '#523826',
          700: '#734E35',
          600: '#966746',
          500: '#B88258',
          400: '#D5A47E',
          100: '#F4ECE4',
        },
        olive: {
          900: '#232B22',
          800: '#343F33',
          700: '#485646',
          600: '#60735E',
          500: '#7D957B',
          200: '#D5E0D4',
          100: '#EAF0E9',
          50: '#F4F7F4',
        },
        ambercrema: {
          DEFAULT: '#C37936',
          dark: '#A65F20',
          light: '#DE995B',
          subtle: '#FAF2EA',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px -2px rgba(24, 24, 22, 0.05), 0 1px 4px -1px rgba(24, 24, 22, 0.03)',
        'card': '0 10px 30px -5px rgba(24, 24, 22, 0.06), 0 4px 10px -2px rgba(24, 24, 22, 0.03)',
        'elevated': '0 20px 40px -15px rgba(24, 24, 22, 0.12), 0 0 1px 1px rgba(24, 24, 22, 0.05)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}
