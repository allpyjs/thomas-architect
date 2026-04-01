/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8eef5",
          100: "#c5d4e6",
          200: "#9fb5d0",
          300: "#7894b8",
          400: "#5a78a3",
          500: "#3d5c8a",
          600: "#2f4a72",
          700: "#243a5c",
          800: "#1a2d4a",
          900: "#0f1f35",
          950: "#0a1628",
        },
      },
      fontFamily: {
        sans: [
          "Source Sans 3",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: ["Libre Baskerville", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
