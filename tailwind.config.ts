import type { Config } from "tailwindcss";

const config: Config = {
  // WAŻNE: Nie ma tu linijki "darkMode".
  // Dzięki temu Tailwind włącza tryb "media", Opera widzi, że obsługujemy dark mode
  // i przestaje wymuszać swoje kolory. A my w CSS (powyżej) podstawiliśmy biel.
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dashed-line': 'linear-gradient(to right, currentColor 50%, transparent 50%)',
      },
      keyframes: {
        drive: {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(400%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        drive: 'drive 6s linear infinite',
        shimmer: 'shimmer 2s infinite linear',
      },
    },
  },
  plugins: [],
};

export default config;