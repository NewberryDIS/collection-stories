import { component$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
// import WinterIcon from "~/media/wintry-mini.png?jsx";

export interface SourcebuttonProps {
  img: string;
  url: string;
  text: string[];
}

export const Sourcebutton = component$<SourcebuttonProps>(
  ({ img, url, text }) => {
    const showCitation = useSignal(false);
    return (
      <div
        class={css({
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "8px",
          "& .qmark, .qanswer": {
            padding: "0 12px",
            margin: 0,
            transition: "opacity 250ms",
            color: "rgba(var(--bg-color-1))",
          },
          "& .qmark": {
            opacity: 0.7,
            height: "46px",
            width: "50px",
            fontSize: "24px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          },
          "& .qanswer": {
            background: "rgba(var(--fg-color-1), 1)",
            border: "1px solid rgba(var(--bg-color-1), 1)",
            // position: "relative",
            // top: "33px",
            fontSize: "0.77rem",
            opacity: 0.01,
            maxWidth: "200px",
          },
          "&:hover .qmark": {
            opacity: 0.99,
          },
          "&:hover .qanswer, .show": {
            opacity: 0.99,
          },
          "& em": {
            fontStyle: "italic",
          },
          "& a, em": {
            marginInline: "4px",
          },
        })}
      >
        <button
          onClick$={() => (showCitation.value = !showCitation.value)}
          class="qmark"
          style={`background-image: url('/collection-stories/${img}')`}
        >
          {" "}
          ?
        </button>
        <p class={`qanswer ${showCitation.value ? "show" : "noshow"}`}>
          {text[0]}
          <em>{text[1]}</em>
          <a href={url} target="_blank" class="rev-llines">
            View at the digital collections.{" "}
          </a>
          {text[2]}
        </p>
      </div>
    );
  },
);
