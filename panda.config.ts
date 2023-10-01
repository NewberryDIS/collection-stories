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
                    "0%": { left: "-200px", top: "0%", opacity: "0.01" },
                    "15%": { opacity: "0.50" },
                    "20%": { top: "33%" },
                    "40%": { opacity: "0.1" },
                    "55%": { top: "100%", opacity: "0.8" },
                    "80%": { opacity: "0.50" },
                    "90%": { top: "0%" },
                    "100%": { left: "110%" },
                },
            },
        },
    },

    // The output directory for your css system
    outdir: "src/styled-system",
});
