import { Slot, component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface MasonryProps {}

export const Masonry = component$<MasonryProps>((props) => {
    return (
        <div
            class={css({
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "masonry",
            })}
        >
            <Slot />
        </div>
    );
});
