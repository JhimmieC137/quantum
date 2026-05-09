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
        // CSS-var based tokens (set in globals.css)
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:    "var(--primary)",
        secondary:  "var(--secondary)",

        // Semantic brand tokens
        brand: {
          red:        "#b91c1c",  // primary CTA, section fills  → red-700
          "red-dark": "#991b1b",  // pressed/dark state           → red-800
          "red-soft": "#dc2626",  // hover state                  → red-600
          amber:      "#fbbf24",  // accent highlights             → amber-400
          "amber-alt":"#f59e0b",  // section bars / dividers       → amber-500
          bg:         "#F4F2EC",  // page / section background
          dark:       "#27272a",  // heavy text / footer           → zinc-800
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
      },
      animation: {
        slideDown: 'slideDown 400ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp:   'slideUp 400ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
