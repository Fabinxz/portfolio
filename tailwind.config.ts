import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'brand-blue': {
          DEFAULT: '#007BFF',
          '50': '#E0F2FF',
          '100': '#C4E5FF',
          '200': '#A9D8FF',
          '300': '#8ECBFF',
          '400': '#73BEFF',
          '500': '#58B1FF',
          '600': '#3DA4FF',
          '700': '#0056b3',
          '800': '#004c9a',
          '900': '#003770',
          '950': '#002952',
        },
        'brand-cyan': {
          DEFAULT: '#06B6D4',
          '50': '#CFFAFE',
          '100': '#A5F3FC',
          '200': '#67E8F9',
          '300': '#22D3EE',
          '400': '#06B6D4',
          '500': '#0891B2',
          '600': '#0E7490',
          '700': '#155E75',
          '800': '#164E63',
          '900': '#143A4F',
          '950': '#082A36',
        },
        'brand-lime': { // Verde Limão Elétrico
          DEFAULT: '#39FF14', // Harlequin Green
          '50': '#F0FFF0',  // Honeydew (muito claro)
          '100': '#D9FFD9',
          '200': '#BFFFBF',
          '300': '#A6FFA6',
          '400': '#8CFF8C',
          '500': '#73FF73',
          '600': '#5AFF5A',
          '700': '#39FF14', // DEFAULT
          '800': '#2FDD12',
          '900': '#25AD0F',
          '950': '#1A790A',
        },
        'brand-orange': {
          DEFAULT: '#DD6B20',
          '50': '#FFFBEB',
          '100': '#FEF3C7',
          '200': '#FDE68A',
          '300': '#FCD34D',
          '400': '#FBBF24',
          '500': '#F59E0B',
          '600': '#DD6B20',
          '700': '#CC5500',
          '800': '#B95000',
          '900': '#A34500',
          '950': '#8A3B00',
        },
        'dark-bg': {
          'primary': '#0d1117',
          'secondary': '#111827',
          'tertiary': '#1F2937',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config