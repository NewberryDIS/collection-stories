import { component$, useSignal } from '@builder.io/qwik';
import { css } from '~/styled-system/css';

export interface SourcebuttonProps {
    img: string;
}

export const Sourcebutton = component$<SourcebuttonProps>((props) => {
    const showCitation = useSignal(false)
  return (
 <div
                    class={css({
                        position: "absolute",
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
                            border: "1px solid rgba(var(--fg-color-1), 1)",
                            // position: "relative",
                            // top: "33px",
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
                    })}
                >
                    <button
                        onClick$={() =>
                            (showCitation.value = !showCitation.value)
                        }
                        class="qmark"
                        style={ `background-image: url('/${props.img}')` }
                    >
                        {" "}
                        ?
                    </button>
                    <p
                        class={`qanswer ${
                            showCitation.value ? "show" : "noshow"
                        }`}
                    >
                        The spooky background image is the{" "}
                        <em>Newberry Library, Chicago, 1975</em>.{" "}
                        <a
                            href="https://collections.newberry.org/asset-management/2KXJ8Z3DGL97?WS=AssetManagement"
                            target="_blank"
                            class="llines"
                        >
                            View at the digital collections.{" "}
                        </a>{" "}
                        The terrifying ghost is Enzo.
                    </p>
                </div>
  );
});
