import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import ScaryNewberry from "~/media/scarynewberry-cropped-overlay.jpg?jsx";
import SpookyNewberry from "~/media/spookynewberry.png?jsx";
import ChillyNewberry from '~/media/scarynewberry-cropped.png?jsx';

export interface BackgroundProps {
    holiday: string;
}
export const Background = component$<BackgroundProps>((props) => {
    return (
        <div
            class={props.holiday + " " + css({
                // position: "fixed",
                pointerEvents: "none",
                zIndex: 0,
                gridArea: "1 / 1 / 2 / 2",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                // backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.87), rgba(0,0,0,0.37))`,
                "& .tint": {
                    flex: 1,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60vh, rgba(var(--bg-color-2),1) 85%, rgba(var(--bg-color-2),1) 100%)",
                },
                "&.winter .tint": {
                    minHeight: "100vh",
                    position: "fixed",

                },
                //     "&.halloween .tint": {
                //             "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60vh, rgba(241,97,81,1) 85%, rgba(241,97,81,1) 100%)",
                //     },
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
                {props.holiday === "halloween" ? <ScaryNewberry /> : props.holiday === "winter" ? <ChillyNewberry /> : ""}
            </div>
            <div class="tint">
                {props.holiday === 'winter' ? Array.from({length: 200}).map((_, i) => <div key={i} class="snow" /> ) : <span></span>}
            </div>
            <div class="spooky">
                {props.holiday === "halloween" ? <SpookyNewberry /> : props.holiday === "winter" ? "" : ""}
            </div>
        </div>
    );
});
