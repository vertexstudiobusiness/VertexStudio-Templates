/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#08080a",
          dark: "#101114",
          surface: "#18191e",
          card: "#1e2026",
          border: "#2b2d35",
          concrete: "#8a8f9d",
          concreteLight: "#d4d7df",
          offwhite: "#f4f4f0",
          purewhite: "#ffffff",
          orange: "#ff4400",
          orangeHover: "#ff5a1a",
          orangeLight: "#ffede6",
          acid: "#d8ff00",
          danger: "#ff2233"
        }
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        condensed: ['"Oswald"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #ff4400',
        'brutal-white': '4px 4px 0px 0px #f4f4f0',
        'brutal-dark': '4px 4px 0px 0px #08080a',
        'glow-orange': '0 0 25px -5px rgba(255, 68, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

