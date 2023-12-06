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
                    "0%": { left: "-400px", opacity: 0.01, },
                    "33%": { left: "40%",  opacity: 0.37, },
                    "50%": { left: "33%",  },
                    "66%": { left: "50%",  opacity: 0.1, },
                    "75%": { left: "66%",  },
                    "100%": { left: "110%", opacity: 0.5, },
                },

                wintersnowball: {
                    "0%": { left: "-200px", opacity: 0.01, },
                    "33%": { left: "45%",  opacity: 0.37, },
                    "50%": { left: "45%",  },
                    "66%": { left: "60%",  opacity: 0.1, },
                    "75%": { left: "66%",  },
                    "100%": { left: "110%", opacity: 0.5, },
                },
                ghoosty: {
                    "0%":  {top: "0%", left: "-200px", opacity: "0.01"},
                    "20%": {top: "100%"},
                    "30%": {opacity: "0.37"},
                    "50%": {top: "0%"},
                    "70%": {opacity: "0.1"},
                    "80%": {top: "100%"},
                    "100%":{top: "0%", left: "110%", opacity: "0.5"},
                }
            },
        },
    },

    // The output directory for your css system
    outdir: "src/styled-system",
});
