/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070D18',
          900: '#0B192C',
          850: '#0E223D',
          800: '#142C4C',
          700: '#1E3C64',
          600: '#2A5184',
          500: '#3D6B9F',
          400: '#648FB9',
          300: '#94B4D4',
          200: '#C7D9EA',
          100: '#E8F0F7',
          50: '#F4F7FA',
        },
        gold: {
          900: '#5E4314',
          800: '#7E5B1D',
          700: '#9E7227',
          600: '#B88734',
          500: '#C59A45', // Primary Champagne Gold
          400: '#D5AE5D',
          300: '#E2C47E',
          200: '#EED9A7',
          100: '#F7EDD3',
          50: '#FDFBF6',
        },
        champagne: {
          light: '#F8F5EE',
          base: '#EED9B3',
          rich: '#C99E53',
        },
        charcoal: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50: '#F9FAFB',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(11, 25, 44, 0.05)',
        'premium': '0 10px 30px -5px rgba(11, 25, 44, 0.12), 0 4px 6px -2px rgba(11, 25, 44, 0.04)',
        'elevated': '0 20px 40px -10px rgba(11, 25, 44, 0.22)',
        'gold-glow': '0 0 25px rgba(197, 154, 69, 0.25)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}
