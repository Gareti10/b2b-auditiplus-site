/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#07111F",
        panel: "#11243A",
        cyan: "#00CFFF",
        green: "#00D084",
        muted: "#AAB7C4",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 207, 255, 0.14)",
        greenGlow: "0 0 40px rgba(0, 208, 132, 0.12)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(0,207,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,.055) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
