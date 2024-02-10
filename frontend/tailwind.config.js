module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EE9789",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};

// tailwind.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [react()],
});
