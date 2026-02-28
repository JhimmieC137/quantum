import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '5%': { opacity: '1' },
          '45%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fade: 'fade 30s infinite', // total = 60s × 3 images
      },
    },
  },
  plugins: [],
} satisfies Config;
