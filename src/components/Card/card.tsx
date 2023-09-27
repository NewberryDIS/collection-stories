import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

type Image = {
    width: number;
    height: number;
    altfn?: string;
    ctxid?: string;
};
type Data = {
    image: Image[];
    title: string;
    blurb: string;
    view: string;
    about: string;
};
export interface CardProps {
    data: Data;
}

export const Card = component$<CardProps>((props) => {
    const { image, title, blurb, view, about } = props.data;
    return (
        <div
            class={css({
                position: "sticky",
                top: "10px",
                display: "flex",
                // flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: 'wrap',
                gap: "32px",
                "& .container": {
                    alignSelf: "flex-start",
                    backdropFilter: "blur(16px) saturate(180%)",
                    backgroundColor: "rgba(17, 25, 40, 0.25)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.125)",
                    padding: "32px",
                    filter: "drop-shadow(0 30px 10px rgba(0,0,0,0.125))",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                    textAlign: "center",
                    minWidth: '464px',
                },
                '& img': {
                    height: "400px",
                },
                '& h2': {
                    fontSize: '3rem',
                    lineHeight: '3rem',
                },
                "& p": {
                    textAlign: "center",
                    letterSpacing: "2px",
                },

                "& .btn-group": {
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "& a": {
                        borderRadius: "4px",
                        flex: 1,
                        fontFamily: "styrene",
                        background: "rgb(var(--bg-color-1))",
                        color: "rgb(var(--fg-color-1))",
                    },
                },
                '& .disabled': {
                    cursor: "not-allowed",
                    opacity: 0.5,
                    background: "rgba(var(--bg-color-1), 0.5)",

                },
                "& .text-section": {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                }
            })}
        >
            <div class="container">
                <img class="banner-image" src={image[0].altfn ? "/" + image[0].altfn : `https://collections.newberry.org/IIIF3/Image/${image[0].ctxid}/full/,400/0/default.jpg`}  width={image[0].height === 400 ? image[0].width : Math.round((image[0].width / image[0].height) * 400)} height="400" style={`width: ${image[0].height === 400 ? image[0].width : Math.round((image[0].width / image[0].height) * 400)}px`} />
                <div class="text-section" style={`width: ${image[0].height === 400 ? image[0].width : Math.round((image[0].width / image[0].height) * 400)}px`} >
                    <h2>{title}</h2>
                    <p>{blurb}</p>
                    <div class="btn-group">
                        <a href={view} target="_blank">View </a>
                        <a href={about.endsWith(']') ? '#' : about} class={about.endsWith(']') ? 'disabled' : ''} target="_blank">About</a>
                    </div></div>
            </div>
        </div>
    );
});
