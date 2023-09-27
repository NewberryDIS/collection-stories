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
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                "& .card": {
                    maxHeight: "75vh",
                    width: "80%",
                    margin: "auto",
                    background: "rgba(var(--fg-color-1), 0.75)",
                    color: "rgb(var(--bg-color-1))",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-evenly",
                    "& .image": {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // maxHeight: "50vh",
                        // width: "100%",
                        "& img": {
                            flex: 1,
                            // maxHeight: "50vh",
                            // width: "100%",
                            // maxHeight: "100%",
                            // objectFit: "cover",
                        },
                    },
                    "& .text": {
                        padding: "16px",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "16px",
                        "& .title": {
                            fontSize: "1.25rem",
                            color: "rgb(var(--splash))",
                        },
                        "& .blurb": {},

                        "& .btn-group": {
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            "& button": {
                                borderRadius: "4px",
                                flex: 1,
                                fontFamily: "styrene",
                                background: "rgb(var(--bg-color-1))",
                                color: "rgb(var(--fg-color-1))",
                            },
                        },
                    },
                },
            })}
        >
            <div className="card">
                <div className="image">
                    {image.map((img) => (
                        <img
                            src={
                                img.altfn
                                    ? img.altfn
                                    : `https://collections.newberry.org/IIIF3/Image/${img.ctxid}/full/,300/0/default.jpg`
                            }
                            alt={blurb}
                            width={img.width}
                            height={img.height}
                        />
                    ))}
                </div>
                <span className="text">
                    <h2 className="title">{title}</h2>
                    <p className="blurb">{blurb}</p>
                    <div className="btn-group">
                        <button>View</button>
                        <button>About</button>
                    </div>
                </span>
            </div>
        </div>
    );
});
