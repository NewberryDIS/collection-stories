import { Slot, component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Background } from "../Background/background";

export const Right = component$(() => {
    return (
        <div
            class={css({
                position: "relative",
                width: "100%",
                overflow: "auto",
                height: "auto",
                display: "grid",
            })}
        >
            <Background />
            <Slot />
        </div>
    );
});
