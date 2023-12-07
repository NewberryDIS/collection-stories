import { component$ } from "@builder.io/qwik";
// import { component$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import GhostyBoy from "~/media/ghostyboy.webp?jsx";
import GhostyBall from "~/media/ghostyball.webp?jsx";

export interface GhostProps {
  holiday: string;
}

export const Ghost = component$<GhostProps>(({ holiday }) => {
  // const stop = useSignal(false);
  return (
    <div
      class={
        holiday +
        " " +
        css({
          pointerEvents: "none",
          // width: "100%",
          height: "200px",
          // position: "fixed",
          right: 0,
          left: 0,
          "& .ghoo, .ball img": {
            transform: "translateZ(0)",
          },
          // "& button": {
          //   pointerEvents: "all",
          //   position: "fixed",
          //   top: "20vw",
          //   left: "40vw",
          //   padding: "50px",
          //   background: "#333",
          //   color: "#ccc",
          // },
          // "& .stop, .stop img": {
          //   animationPlayState: "paused !important",
          // },
          "& .ghoo": {
            // left: "50%",
            animation: "ghoosty 10s infinite",
            "& img": {
              position: "relative",
              height: "200px",
              width: "200px",
            },
          },
          "&.halloween": {
            position: "fixed",
            top: "200px",
            "& .ghoo": {
              position: "relative",
              animation: "ghoosty 10s infinite",
            },
            "& .ball": {
              display: "none",
            },
          },
          "&.winter": {
            position: "fixed",
            bottom: "33px",
            "& .ghoo": {
              // position: "fixed",
              position: "relative",
              // bottom: "300px",
              animationName: "winterghost",
              animationDuration: "10s",
              animationDelay: "0s",
              animationTimingFunction: "ease-in-out",
              // animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              animationIterationCount: "infinite",
            },
            "& .ball": {
              position: "relative",
              bottom: "483px",
              "& img": {
                position: "relative",
                animationName: "wintersnowball",
                animationDuration: "10s",
                animationDelay: "0s",
                // animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                animationTimingFunction: "ease-out",
                animationIterationCount: "infinite",
              },
            },
          },
        }) +
        " ghost"
      }
    >
      {/* <button onClick$={() => (stop.value = !stop.value)}>click</button> */}
      {/* <div class={`ghoo ${stop.value ? "stop" : ""}`}> */}
      <div class="ghoo">
        <GhostyBoy />
      </div>

      <div class="ball">
        <GhostyBall />
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
