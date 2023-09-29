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
                ghosty: {
                    '0%':  { left: "-100px", top: 0},
                    '15%': { left: "15%", top: "100px" },
                    '22%': { left: "22%", top: "0px" },
                    '37%': { left: "37%", top: "75px" },
                    '42%': { left: "42%", top: "111px" },
                    '69%': { left: "69%", top: "0px" },
                    '77%': { left: "77%", top: "100px" },
                    '86%': { left: "86%", top: "0px" },
                    '100%': { left: "100%" },
                }, 
                smoothGhost: {
                    '0%': {left: '-100px', top: 0},
                    '15%': { top: "100px" },
                    '22%': { top: "0px" },
                    '37%': { top: "75px" },
                    '42%': { top: "-10px" },
                    '69%': { top: "86px" },
                    '77%': { top: "11px" },
                    '86%': { top: "100px" },
                    '100%': {left: '100%', top: 0}
                }, 

                smoWiFaGho: {
                    '0%': {left: '-100px', top: 0,  opacity: '0.01',},
                    "10%": { opacity: '0.10',},
                    '15%': { top: "100px" },
                    "20%": { opacity: '0.40',},
                    '22%': { top: "0px" },
                    "30%": { opacity: '0.50',},
                    '37%': { top: "75px" },
                    "40%": { opacity: '0.80',},
                    '42%': { top: "-10px" },
                    "50%": { opacity: '0.99',},
                    "60%": { opacity: '0.99',},
                    '69%': { top: "86px" },
                    "70%": { opacity: '0.75',},
                    '77%': { top: "11px" },
                    "80%": { opacity: '0.33',},
                    '86%': { top: "100px" },
                    "90%": { opacity: '0.25',},
                    '100%': {left: '100%', top: 0, opacity: '0.01',}
                }
            }
        },
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});
