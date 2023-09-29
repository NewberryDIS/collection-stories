import { component$ } from '@builder.io/qwik';
import { css } from '~/styled-system/css';


export const Ghost = component$(() => {
  return (
    <div class={css({
            width: "100vw",
            height: "300px",
            "& .ghoo": {
  position: "relative",
            animation: "smoWiFaGho 10s infinite",
            }
        })}>
            <div class="ghoo">
                <img src="ghosty.gif"  />
            </div>
    </div>
  );
});
