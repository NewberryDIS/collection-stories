import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
// import ScaryNewberry from "~/media/spookynewberry-cropped.png?jsx";
import SpookyNewberry from "~/media/spookylibrary.png?jsx";

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
                    backgroundImage:
                        'linear-gradient(to bottom, rgba(0,0,0,0.87), rgba(0,0,0,0.37)),  url("/spookynewberry-cropped.png")',
                    // 'linear-gradient(to bottom, rgba(0,0,0,0.87), rgba(0,0,0,0.37)), image-set( url("/spookynewberry-cropped.png") 1x, url("https://collections.newberry.org/IIIF3/Image/2KXJ8Z3DGL97/square/800,/0/default.jpg" ) 2x, url("https://collections.newberry.org/IIIF3/Image/2KXJ8Z3DGL97/square/1200,/0/default.jpg") 4x, url("https://collections.newberry.org/IIIF3/Image/2KXJ8Z3DGL97/square/max/0/default.jpg") 10x)',
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "bottom",
                    "& .spooky": {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                        "& img": {
                            width: "100%",
                        },
                    },
                    "& .scary": {
                        position: "sticky",
                        top: 0,
                        // flex: "1 1 auto",
                        "& img": {
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
            <div class="scary">{/* <ScaryNewberry /> */}</div>
            <div class="spooky">
                <SpookyNewberry />
            </div>
        </div>
    );
});
