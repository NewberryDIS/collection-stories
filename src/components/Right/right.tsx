import { Slot, component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Background } from "../Background/background";
import { Arrow } from "~/components/Arrow/arrow";

export interface RightProps {
  holiday: string;
}

export const Right = component$<RightProps>((props) => {
  return (
    <div
      class={
        props.holiday +
        " " +
        css({
          // background: "rgb(var(--fg-color-2))",
          // backgroundImage: "url(/wintrynewberry.png)",
          //               backgroundPosition: "66%",
          //               backgroundAttachment: "fixed",
          //               backgroundSize: "100vw 100vh",
          position: "relative",
          flex: 3,
          padding: 0,
          overflow: "visible",
          // width: "100%",
          height: "100%",
          display: "grid",
          "& .card-wrapper": {
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60vh, rgba(var(--bg-color-2),1) 85%, rgba(var(--bg-color-2),1) 100%)",
            display: "flex",
            flexDirection: "column",
            gridArea: "1 / 1 / 2 / 2",
            paddingBlock: "7vh 77vh",
            lg: { paddingBlock: "77vh" },
            gap: "20px",
          },
          // "& .wrapper": {
          //   position: "relative",
          //   display: "grid",
          //   overflowY: "auto",
          //   overflowX: "hidden",
          // },
        })
      }
    >
      <Background holiday={props.holiday} />
      {/* <div class="wrapper"> */}
      <div class="card-wrapper">
        <div
          class={css({
            // width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            // pointerEvents: "none",
          })}
        >
          <Arrow />
        </div>
        <Slot />
      </div>
      {/* </div> */}
    </div>
  );
});
