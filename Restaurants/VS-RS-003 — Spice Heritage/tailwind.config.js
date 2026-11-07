/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F2E6",
        cream: "#FDFAF2",
        sand: "#EDE3CF",
        ink: "#1E0B10",
        burgundy: {
          300: "#8C3A4B",
          400: "#74293A",
          500: "#5C1A2C",
          600: "#4A1120",
          700: "#3A0E1C",
          800: "#2C0A15",
          900: "#20060E",
        },
        saffron: {
          300: "#EFCE8B",
          400: "#E8B455",
          500: "#DFA13C",
          600: "#C9862B",
        },
        gold: {
          300: "#E3C57F",
          400: "#D3AF62",
          500: "#C09A4E",
          600: "#A87F3C",
        },
        leaf: "#157A46",
        brick: "#A94438",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Jost", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.32em",
        luxe2: "0.45em",
      },
      boxShadow: {
        lux: "0 24px 60px -24px rgba(28, 10, 16, 0.38)",
        card: "0 10px 34px -14px rgba(28, 10, 16, 0.28)",
        gold: "0 10px 30px -12px rgba(192, 154, 78, 0.45)",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1.02) translateY(0)" },
          "100%": { transform: "scale(1.12) translateY(-1.5%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        kenburns: "kenburns 22s ease-in-out infinite alternate",
        "spin-slow": "spin-slow 80s linear infinite",
        floaty: "floaty 7s ease-in-out infinite",
        shimmer: "shimmer 3.2s linear infinite",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
