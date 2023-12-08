import type { Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface TumblrcardProps {
  data: {
    title: string;
    image: string;
    url: string;
    // tags: string[];
  };
  alternate: Signal;
}

export const Tumblrcard = component$<TumblrcardProps>((props) => {
  // console.log(props.data);
  const { image, title, url } = props.data;
  const { alternate } = props;
  return (
    <a
      href={url}
      target="_blank"
      class={
        css({
          position: "relative",
          border: "1px solid rgba(255, 255, 255, 1)",
          maxWidth: "464px",
          // borderRadius: "50px",
          minWidth: "400px",
          aspectRatio: "1 / 1",
          transition: "200ms",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          textAlign: "center",
          "& *": {
            transition: "200ms",
            overflow: "hidden",
          },
          "&:hover": {
            // filter: "drop-shadow(0 0 10px 10px rgba(0,0,0,0.25))",
            boxShadow: "0 0 10px 10px rgba(0,0,0,0.25)",
            "& h2": {
              background: "rgba(255,255,255,0.77)",
              boxShadow: "4px 4px 60px 8px rgba(0,0,0,0.2)",
            },
            "& .liner ": {
              // backdropFilter: "blur(1px) saturate(1)",
              filter: "blur(1px) saturate(1)",
            },
          },
          "&.alt": {
            borderRadius: "50px !important",
            "& h2, .liner": {
              borderRadius: "50px !important",
            },
            // border: "0 !important",
            "& h2": {
              // border: "0 !important",
            },
          },
          "& h2": {
            border: "1px solid rgba(255, 255, 255, 1)",
            // border: "none",
            borderLeft: "1px solid $white",
            borderTop: "1px solid $white",
            // borderRadius: "50px",
            backdropFilter: "blur(5px)",
            boxShadow: "4px 4px 60px rgba(0,0,0,0.2)",
            transition: "all 0.2s ease-in-out",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            background: "rgba(255,255,255,0.5)",
            color: "rgb(var(--fg-color-1))",
            // position: "absolute",
            // bottom: 0,
            // left: 0,
            // right: 0,

            margin: "16px",
            padding: "16px",
            fontSize: "3rem",
            lineHeight: "3rem",
          },
          "& .liner": {
            backgroundPosition: "center",
            filter: "blur(16px) saturate(180%)",
            width: "100%",
            height: "100%",
            // backdropFilter: "blur(16px) saturate(180%)",
            overflow: "hidden",
            // borderRadius: "50px",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        }) + (alternate.value ? " alt" : "")
      }
    >
      {/* <img src={image} alt="" /> */}
      <div class="liner" style={`background-image: url(${image}); `}></div>
      {/* <h2>{tags}</h2> */}
      <h2 dangerouslySetInnerHTML={title} />
    </a>
  );
});
