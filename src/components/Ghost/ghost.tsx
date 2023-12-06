import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import GhostyBoy from "~/media/ghostyboy.webp?jsx";


export interface GhostProps {
    holiday: string;
}

export const Ghost = component$<GhostProps>(({holiday}) => {
    return (
        <div
            class={
                holiday + " " + 
                    css({
                        pointerEvents: "none",
                        // width: "100%",
                        height: "200px",
                        position: "fixed",
                        right: 0,
                        left: 0,

                        "& .ghoo": {
                            position: "relative",
                            // left: "50%",
                            animation: "ghoosty 10s infinite",
                            "& img": {
                                position: "relative",
                                height: "200px",
                                width: "200px",
                            },
                        },
                        "&.halloween": {
                            top: "200px",
                            "& .ghoo": {
                                animation: "ghoosty 10s infinite",
                            },
                            "& .ball":{
                                display: "none",
                            }
                        },
                        "&.winter": {
                            bottom: "33px",
                            "& .ghoo": {
                                animation: "winterghost 10s infinite",
                            },
                            "& .ball": {
                                animation: "wintersnowball 10s infinite",
                            }
                        },
                    }) + " ghost"
            }
        >
            <div class="ghoo">
                <GhostyBoy />
            </div>

            <div class="ball">
                <GhostyBoy />
            </div>
        </div>
    );
});

// @keyframes ghowosty {
//     0% {
//         left: -200px;
//         opacity: 0.01
//     }
//     33% {
//     left: 40%;
//         opacity: 0.37;
//     }
//     50% {
//     left: 33%;
//     }
//     66% {
//     left: 50%;
//         opacity: 0.1;
//     }
//     75% {
//     left: 66%;
//     }
//     100% {
//         left: 110%;
//         opacity: 0.5
//     }
// }
