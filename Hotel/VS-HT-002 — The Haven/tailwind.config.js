/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        haven: {
          ivory: '#FAF8F5',
          cream: '#F4F0E8',
          beige: '#EBE5D8',
          sand: '#DFD8C8',
          'stone-light': '#CEC6B6',
          stone: '#A89F8F',
          'stone-dark': '#756D60',
          'olive-light': '#8A8F74',
          olive: '#5A6046',
          'olive-dark': '#3F442F',
          'charcoal-light': '#3A3835',
          charcoal: '#22211F',
          'charcoal-dark': '#141413',
          terracotta: '#B66A48',
          gold: '#BFA168',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Italiana"', '"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      letterSpacing: {
        'widest-editorial': '0.22em',
        'loose-editorial': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
