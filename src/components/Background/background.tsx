import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import ScaryNewberry from "~/media/scarynewberry-cropped-overlay.jpg?jsx";
import SpookyNewberry from "~/media/spookynewberry.png?jsx";
// import ChillyNewberry from "~/media/scarynewberry-cropped.png?jsx";

import Snowflake1 from "~/media/snow/winter-bg-snowflakes-1.png?jsx";
import Snowflake2 from "~/media/snow/winter-bg-snowflakes-2.png?jsx";
import Snowflake3 from "~/media/snow/winter-bg-snowflakes-3.png?jsx";
import Snowflake4 from "~/media/snow/winter-bg-snowflakes-4.png?jsx";
import Snowflake5 from "~/media/snow/winter-bg-snowflakes-5.png?jsx";
import Snowflake6 from "~/media/snow/winter-bg-snowflakes-6.png?jsx";

const snowflakes = [
  <Snowflake1 key="flake1" />,
  <Snowflake2 key="flake2" />,
  <Snowflake3 key="flake3" />,
  <Snowflake4 key="flake4" />,
  <Snowflake5 key="flake5" />,
  <Snowflake6 key="flake6" />,
];
import Wintry from "~/media/wintry.png?jsx";
// import { Snowflake } from "../Snowflake/snowflake";

export interface BackgroundProps {
  holiday: string;
}
export const Background = component$<BackgroundProps>((props) => {
  return (
    <div
      class={
        props.holiday +
        " " +
        css({
          // position: "fixed",
          overflow: "hidden",
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
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60vh, rgba(var(--bg-color-2),1) 85%, rgba(var(--bg-color-2),1) 100%)",
          },
          "&.winter .tint": {
            minHeight: "100vh",
            // position: "fixed",
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
              width: "80%",
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
        }) +
        " background"
      }
    >
      <div class="scary">
        {props.holiday === "halloween" ? (
          <ScaryNewberry />
        ) : props.holiday === "winter" ? (
          <Wintry />
        ) : (
          ""
        )}
      </div>
      <div class="tint">
        <span></span>
        {props.holiday === "winter" ? (
          Array.from({ length: 200 }).map((_, i) => (
            <div key={i} class="snow">
              {snowflakes[(i % 6) + 1]}
            </div>
          ))
        ) : (
          <span></span>
        )}
      </div>
      <div class="spooky">
        {props.holiday === "halloween" ? (
          <SpookyNewberry />
        ) : props.holiday === "winter" ? (
          <span></span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
});
