import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

const imgUrl = (pic: string) =>
    `https://collections.newberry.org/IIIF3/Image/${pic}/full/,300/0/default.jpg`;

type Image = {
    width: number;
    height: number;
    altfn?: string;
    ctxid?: string;
};
type Data = {
    image: Image;
    title: string;
    blurb: string;
    view: string;
    about: string;
};
export interface ArticleProps {
    data: Data;
}

export const Article = component$<ArticleProps>((props) => {
    const { image, title, blurb, view, about } = props.data;
    const { width, height, altfn, ctxid } = image;
    if (Array.isArray(image)) {
        console.log("width", width);
    }

    return (
        <article
            class={css({
                display: "flex",
                fontSize: 30,
                background: "rgb(var(--bg-color-2))",
                "& .left": {
                    padding: 10,
                    flex: 1,
                    // border: "1px solid black",
                    alignSelf: "flex-start",
                    position: "sticky",
                    top: "10vh",
                },
                "& .right": {
                    background: "rgb(var(--bg-color-1))",
                    minHeight: "100vh",
                    padding: 10,
                    flex: 1,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",

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
                    // border: "1px solid black",
                },
            })}
        >
            <div class="left">
                {Array.isArray(image) ? (
                    <div className="imgset">
                        <img
                            src={`//collections.newberry.org/IIIF3/Image/${image[0].ctxid}/full/600,/0/default.jpg`}
                            alt={image[0].blurb}
                            width={image[0].width}
                            height={image[0].height}
                        />
                        <img
                            src={`//collections.newberry.org/IIIF3/Image/${image[1].ctxid}/full/600,/0/default.jpg`}
                            alt={image[1].blurb}
                            width={image[1].width}
                            height={image[1].height}
                        />
                    </div>
                ) : (
                    <img
                        src={`/${
                            altfn
                                ? altfn
                                : Array.isArray(ctxid)
                                ? ""
                                : `//collections.newberry.org/IIIF3/Image/${ctxid}/full/600,/0/default.jpg`
                        }`}
                        width={width}
                        height={height}
                        alt={ctxid}
                    />
                )}
            </div>
            <div class="right">
                <h2>{title}</h2>
                <p>{blurb}</p>
                <div class="btn-group">
                    <button onClick$={() => console.log(view)}>View</button>
                    <button onClick$={() => console.log(about)}>About</button>
                </div>
            </div>
        </article>
    );
});
