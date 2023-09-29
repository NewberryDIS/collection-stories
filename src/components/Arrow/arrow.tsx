import { component$ } from '@builder.io/qwik';
import { css } from '~/styled-system/css';


export const Arrow = component$(() => {
    return (
        <a href="#card-0" class={css({

            width: "100px",
            animation: "bounce",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        })}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(var(--flame))" viewBox="0 0 24 24">
                <g data-name="15.Arrow Down">
                    <path d="m12 18.414-4.707-4.707 1.414-1.414L12 15.586l3.293-3.293 1.414 1.414L12 18.414z" />
                    <path d="M11 6h2v11h-2z" />
                </g>
            </svg>
        </a>
    );
});
