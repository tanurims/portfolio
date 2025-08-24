/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        cute: {
          blue: "#60a5fa",
          pink: "#f472b6",
          lightBlue: "#93c5fd",
          lightPink: "#f9a8d4",
          skyBlue: "#0ea5e9",
          hotPink: "#ec4899",
        },
        neon: {
          blue: "#3b82f6",
          pink: "#ec4899",
          lightBlue: "#60a5fa",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "cute-bounce": "cute-bounce 3s ease-in-out infinite",
        "gentle-pulse": "gentle-pulse 4s ease-in-out infinite",
        "cute-glow": "cute-glow 2s ease-in-out infinite alternate",
        gradient: "gradient 15s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "cute-bounce": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.05)" },
        },
        "gentle-pulse": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
        "cute-glow": {
          from: {
            boxShadow: "0 0 5px #60a5fa, 0 0 10px #60a5fa, 0 0 15px #60a5fa",
          },
          to: {
            boxShadow: "0 0 10px #f472b6, 0 0 20px #f472b6, 0 0 30px #f472b6",
          },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
