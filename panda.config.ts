import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        winterghost: {
          "0%": { left: "-200px", opacity: 0.01, bottom: "333px" },
          "10%": { left: "-200px" },
          "33%": { left: "23%", opacity: 0.33 },
          "45%": { left: "15%", opacity: 0.77 },
          "55%": { left: "40%", opacity: 0.99 },
          "80%": { bottom: "333px" },
          "90%": { bottom: "366px" },
          "85%": { bottom: "333px" },
          "100%": { left: "110%", opacity: 0.33 },
        },
        wintersnowball: {
          "0%": {
            transform: "rotate(0deg) scale(0.77)",
            left: "-150px",
            opacity: 0.33,
          },
          "33%": { transform: "rotate(540deg) scale(1)", left: "37%" },
          "50%": { transform: "rotate(540deg) scale(1)", left: "37%" },
          "100%": {
            transform: "rotate(3600deg) scale(1.33)",
            left: "150%",
            opacity: 0.99,
          },
        },
        ghoosty: {
          "0%": { top: "0%", left: "-200px", opacity: "0.01" },
          "20%": { top: "100%" },
          "30%": { opacity: "0.37" },
          "50%": { top: "0%" },
          "70%": { opacity: "0.1" },
          "80%": { top: "100%" },
          "100%": { top: "0%", left: "110%", opacity: "0.5" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});
// "0%": { left: "-400px", opacity: 0.01 },
//     "33%": { left: "40%", opacity: 0.37 },
//     "50%": { left: "33%" },
//     "66%": { left: "50%", opacity: 0.1 },
//     "75%": { left: "66%" },
//     "100%": { left: "110%", opacity: 0.5 },
//
//
//     "0%": { left: "-200px", opacity: 0.01 },
//     "33%": { left: "45%", opacity: 0.37 },
//     "50%": { left: "45%" },
//     "66%": { left: "45%", opacity: 0.1 },
//     "75%": { left: "66%" },
//     "100%": { left: "310%", opacity: 0.5 },
// "0%": { left: "-200px" },
// // "33%": { left: "45%" },
// // "50%": { left: "50%" },
// "57%": { left: "50%" },
// // "75%": { left: "66%" },
// "100%": { left: "310%" },
