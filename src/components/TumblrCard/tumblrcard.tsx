import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface TumblrcardProps {
  data: {
    title: string;
    image: string;
    url: string;
  };
}

export const Tumblrcard = component$<TumblrcardProps>((props) => {
  // console.log(props.data);
  const { image, title, url } = props.data;
  return (
    <a
      href={url}
      class={css({
        position: "relative",
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.25)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        padding: "32px",
        boxShadow: "0 0 10px 10px rgba(0,0,0,0.125)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        textAlign: "center",
        maxWidth: "464px",
        transition: "200ms",
        "&:hover": {
          boxShadow: "0 0 10px 10px rgba(0,0,0,0.25)",
        },
        "& img": {
          // position: "relative",
          margin: "0 auto",
        },
        "& h2": {
          // maxWidth: "100vw",
          margin: 0,
          padding: 0,
          fontSize: "3rem",
          lineHeight: "3rem",
        },
        "& p": {
          // maxWidth: "90%",
          fontSize: "lg",
          minWidth: "0",
          width: "100%",
          textAlign: "center",
          letterSpacing: "2px",
        },
      })}
    >
      <img src={image} alt="" />
      <h2 dangerouslySetInnerHTML={title} />
    </a>
  );
});
