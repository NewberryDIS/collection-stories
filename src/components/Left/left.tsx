import { Slot, component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface LeftProps {
  holiday: string;
}

export const Left = component$<LeftProps>((props) => {
  return (
    <div
      class={
        props.holiday +
        " " +
        css({
          height: {
            sm: "auto",
            md: "auto",
            lg: "100vh",
            xl: "100vh",
          },
          backgroundColor: "rgb(var(--bg-color-1))",
          color: "#bbb",
          padding: "55px 0px 24px 0px",
          flex: 0,
          display: "flex",
          flexDirection: "column",
          // position: "relative",
          position: "absolute",
          right: 0,
          top: 0,
          left: 0,
          md: {
            flexDirection: "row",
          },
          lg: {
            position: "relative",
            padding: "0 0 24px 0",
            flexDirection: "column",
            flex: 1,
          },
          alignItems: "flex-start",
          justifyContent: "space-between",
          "& h1": {
            fontSize: "min(10vh, 13vw)",
            lineHeight: "min(10vh, 13vw)",
          },
          "& .text-content p, h1": {
            padding: "16px",
          },
          "& .text-content p": {
            fontSize: "lg",
          },
        }) +
        " left"
      }
    >
      <div
        class={css({
          position: "absolute",
          top: "10px",
          left: "16px",
          zIndex: 22,
          lg: {
            padding: "10px 0 0 16px",
            position: "relative",
            top: 0,
            left: 0,
          },
          "& .logo": {
            "& a": {
              transform: "translate(-0.27287251,-0.28531668)",
            },
            "& path, text": {
              transition: "150ms",
              fill: "rgba(var(--splash-color), 0.77)",
              "&:hover": {
                fill: "rgba(var(--splash-color), 1)",
              },
            },
          },
        })}
      >
        <p>
          {/* <NewberryLogo /> */}
          <svg
            class="logo"
            width="263.54108"
            height="55.578121"
            viewBox="0 0 263.54107 55.578121"
          >
            <a href="https://newberry.org/" target="_blank">
              <path
                id="path231-2"
                style="fill-opacity:1;stroke-width:0.444444"
                d="M 34.415451,0.28531669 27.454514,4.5060197 20.495529,8.7267227 20.272873,5.6681287 20.050217,2.6095357 10.161545,8.1896137 0.27287252,13.771645 V 34.81852 55.863437 h 10.00000048 10 V 34.197426 12.531411 l 2.111328,-1.216797 c 1.16086,-0.669449 2.640347,-1.5542383 3.28711,-1.9648443 1.155696,-0.733711 1.233214,-0.710808 4.554687,1.3593753 l 3.380859,2.107422 v 21.523438 21.523432 l 8.111328,-0.0195 8.109376,-0.0215 4.445312,-4.19142 4.445312,-4.19336 -2.550781,-0.008 -2.550781,-0.01 L 53.499435,29.999731 53.384201,12.579809 43.899826,6.4313707 Z"
              />
            </a>
            <a href="https://collections.newberry.org/" target="_blank">
              <text
                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:21.3333px;font-family:'styrene-bold';white-space:pre;inline-size:208.543;display:inline;fill-opacity:1"
                x="77.995346"
                y="9.8382692"
                id="text1"
                transform="translate(-14.779014,26.491328)"
              >
                <tspan x="77.995346" y="9.8382692" id="tspan2">
                  Digital Newberry
                </tspan>
              </text>
            </a>
          </svg>
        </p>
      </div>

      <Slot name="title" />

      <div class={css({ height: "auto", overflow: "auto" }) + " text-content"}>
        <Slot />
      </div>

      <footer
        class={css({
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "24px",
          // width: "100%",
          // flexBasis: "24px",
          backgroundColor: "rgba(var(--fg-color-2), 0.77)",
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
          transition: "250ms",

          "&:hover": {
            backgroundColor: "rgba(var(--fg-color-2), 1)",
          },
          "& a": {
            padding: "0 8px",
            fontFamily: "styrene",
            fontSize: "14px",
            lineHeight: "14px",
            _firstOfType: {
              borderRight: "2px solid rgba(var(--fg-color-1), 0.5)",
            },
          },
        })}
      >
        <a target="_blank" href="https://www.newberry.org">
          The Newberry
        </a>
        <a target="_blank" href="https://www.newberry.org/contact-librarian">
          Contact Us
        </a>
      </footer>
    </div>
  );
});
