import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import GhostyBoy from "~/media/ghostyboy.png?jsx";

export const Ghost = component$(() => {
    return (
        <div
            class={
                css({
                    pointerEvents: "none",
                    // width: "100%",
                    height: "300px",
                    position: "fixed",
                    top: "200px",
                    right: 0,
                    left: 0,
                    "& .ghoo": {
                        position: "relative",
                        // left: "50%",
                        animation: "ghosty 10s infinite",
                        "& img": {
                            position: "relative",
                            height: "200px",
                            width: "200px",
                        },
                    },
                }) + " ghost"
            }
        >
            <div class="ghoo">
                <GhostyBoy />
            </div>
        </div>
    );
});
