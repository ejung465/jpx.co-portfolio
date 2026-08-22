/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#F5F3EF",
          soft: "rgba(245,243,239,0.56)",
          faint: "rgba(245,243,239,0.32)",
        },
        base: {
          DEFAULT: "#0A0F1A",
          hi: "#101828",
          lo: "#060A12",
        },
        surface: "#0E1424",
        accent: {
          DEFAULT: "#C8A96A",
          deep: "#E0C88E",
          soft: "rgba(200,169,106,0.12)",
        },
        warm: "#D98C6A",
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Hanken Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
      },
    },
  },
  plugins: [],
};
