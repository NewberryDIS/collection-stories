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
          position: "relative",
          flex: 3,
          width: "100%",
          overflow: "auto",
          height: "100%",
          display: "grid",
          "& .card-wrapper": {
            display: "flex",
            flexDirection: "column",
            gridArea: "1 / 1 / 2 / 2",
            paddingBlock: "77vh",
            gap: "20px",
          },
        })
      }
    >
      <Background holiday={props.holiday} />

      <div class="card-wrapper">
        {/* ghost has to be inside card-wrapper for the z-index layering to work */}
        <div
          class={css({
            width: "100%",
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
    </div>
  );
});
