import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const Arrow = component$(() => {
    return (
        <a
            href="#card-0"
            class={css({
                // position: "absolute",
                // bottom: "30px",
                pointerEvents: "auto",
                width: "100px",
                animation: "bounce",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "200ms",
                // border: "10px solid transparent",
                "&:hover": {
                    border: "10px solid rgb(var(--flame))",
                },
            })}
        >
            <svg fill="rgba(var(--flame))" viewBox="0 0 24 24">
                <g>
                    <path d="m12 18.414-4.707-4.707 1.414-1.414L12 15.586l3.293-3.293 1.414 1.414L12 18.414z" />
                    <path d="M11 6h2v11h-2z" />
                </g>
            </svg>
        </a>
    );
});
