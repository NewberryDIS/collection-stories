import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import ScaryNewberry from "~/media/scarynewberry-cropped-overlay.jpg?jsx";
import SpookyNewberry from "~/media/spookynewberry.png?jsx";

export const Background = component$(() => {
    return (
        <div
            class={
                css({
                    gridArea: "1 / 1 / 2 / 2",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    // backgroundImage: `linear-gradyyient(to bottom, rgba(0,0,0,0.87), rgba(0,0,0,0.37))`,
                    "& .tint": {
                        flex: 1,
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60vh, rgba(241,97,81,1) 85%, rgba(241,97,81,1) 100%)",
                    },
                    "& .spooky": {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                        background: "rgba(241,97,81,1)",
                        "& img": {
                            width: "100%",
                        },
                    },
                    "& .scary": {
                        position: "fixed",
                        top: 0,
                        width: "100%",
                        lg: { 
                            width: "80%"
                        },
                        "& img": {
                            position: "relative",
                            width: "100%",
                            // objectPosition: "80% 50%",
                            objectFit: "cover",
                            height: "100vh",
                        },
                    },
                    "& img": {
                        overflow: "hidden",
                        objectFit: "cover",
                        margin: 0,
                        objectPosition: "center",
                    },
                }) + " background"
            }
        >
            <div class="scary">
                <ScaryNewberry />
            </div>
            <div class="tint">
                <span></span>
            </div>
            <div class="spooky">
                <SpookyNewberry />
            </div>
        </div>
    );
});
