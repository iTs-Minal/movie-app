
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#232E41",
        darkTheme: "#20232D",
        aquamarine: '#7FFFD4',
        yellow: {
          400: '#FFD700',
        },
        blue: {
          500: '#00C8FF',
        },
        red: {
          500: '#FF0E0E',
        },
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
        Exo_2: ["Exo_2", "serif"],
        Kanit: ["Kanit", "serif"],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['hover'],
      filter: ['hover'],
      zIndex: ['hover'],
    },
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
