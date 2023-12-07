import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { css } from "~/styled-system/css";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div
      class={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        margin: 0,
        padding: 0,
        // overflow: "hidden",
        // width: "100vw",

        lg: {
          flexDirection: "row",
          // height: "100vh",
        },
        position: "relative",
        // width: "100%",
      })}
    >
      <Slot />
    </div>
  );
});
