/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#161A1D",
          soft: "#5C656D",
          faint: "#9AA2AA",
        },
        base: {
          DEFAULT: "#E7EBF0",
          hi: "#F5F7FA",
          lo: "#C8CDD6",
        },
        surface: "#F3F5F8",
        accent: {
          DEFAULT: "#4763C9",
          deep: "#2A3C82",
          soft: "#E3E8FB",
        },
        warm: "#C2603D",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Hanken Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "9px",
        md: "14px",
        lg: "22px",
      },
    },
  },
  plugins: [],
};
