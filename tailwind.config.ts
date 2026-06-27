import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    "./src/data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:    "var(--primary)",
        secondary:  "var(--secondary)",

        brand: {
          olive:        "#6B7A3A",
          "olive-dark": "#556030",
          "olive-light":"#8a9c4a",
          navy:         "#1F2A44",
          "navy-dark":  "#151d30",
          "navy-light": "#2a3a5e",
          gold:         "#C9A84C",
          "gold-light": "#e0c06a",
          cream:        "#F5F3ED",
          bg:           "#F5F3ED",
          dark:         "#0e1520",
        },
      },
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0px' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        slideDown:  'slideDown 400ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp:    'slideUp 400ms cubic-bezier(0.87, 0, 0.13, 1)',
        fadeInUp:   'fadeInUp 0.7s ease forwards',
        shimmer:    'shimmer 2.5s linear infinite',
        floatY:     'floatY 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
