/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FDF2F4',
          100: '#FBE8EB',
          200: '#F5C8CF',
          300: '#EBA0AB',
          400: '#DD687B',
          500: '#C7364E',
          600: '#AA2238',
          700: '#8A172A',
          800: '#64101E',
          900: '#460A13',
          950: '#28040A',
        },
        gold: {
          50: '#FAF7EE',
          100: '#F4ECD4',
          200: '#E9D6A4',
          300: '#DCBE71',
          400: '#CFA747',
          500: '#B88F28',
          600: '#946E19',
          700: '#705014',
          800: '#533C14',
          900: '#3D2D13',
        },
        ivory: {
          50: '#FDFAF6',
          100: '#FAF5ED',
          200: '#F5EADB',
          300: '#EDDCBF',
          400: '#E2CA9D',
          500: '#D5B47B',
          600: '#BA945A',
        },
        sandstone: {
          50: '#F9F7F3',
          100: '#F1ECE2',
          200: '#E3D7C4',
          300: '#D2BFA1',
          400: '#BFA47D',
          500: '#AB895B',
          600: '#926F43',
          700: '#755535',
          800: '#5B432C',
          900: '#403021',
        },
        walnut: {
          50: '#F6F4F3',
          100: '#E7E2E0',
          200: '#D2C8C3',
          300: '#B6A69E',
          400: '#957F75',
          500: '#7A645A',
          600: '#624E45',
          700: '#4F3E37',
          800: '#382B26',
          900: '#231A17',
          950: '#140E0C',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        display: ['Cinzel', '"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #460A13 0%, #28040A 50%, #140E0C 100%)',
        'gold-shimmer': 'linear-gradient(120deg, #B88F28 0%, #DCBE71 30%, #FAF7EE 50%, #DCBE71 70%, #946E19 100%)',
      },
      boxShadow: {
        'royal': '0 20px 40px -15px rgba(40, 4, 10, 0.45)',
        'royal-gold': '0 10px 30px -10px rgba(184, 143, 40, 0.35)',
        'inner-gold': 'inset 0 0 15px rgba(220, 190, 113, 0.25)',
      }
    },
  },
  plugins: [],
}
