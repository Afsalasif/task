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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'mobile': {'raw': '(max-width: 640px)'},
        'tablet': {'raw': '(min-width: 641px) and (max-width: 1023px)'},
        'desktop': {'raw': '(min-width: 1024px)'}
      },
    },
  },
  plugins: [],
} satisfies Config;
