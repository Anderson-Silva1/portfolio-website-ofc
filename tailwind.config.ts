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
        principal: "var(--principal)",
        secundaria: "var(--secundaria)",
        escura: "var(--escura)",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        typing: "typing 3s steps(20, end) infinite alternate",
        blink: "blink 1s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
