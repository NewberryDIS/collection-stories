import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import Gallery from '~/components/Gallery/gallery'
export default component$(() => {
    return (
        <>
            <Gallery />
            <div
                class={css({

                    padding: 10,
                    bg: "red.400",
                    margin: 100,
                    fontSize: 30,
                    '& .testo, .left': {

                        justifyContent: 'center',
                    },
                    '& .testo, .left, .right': {
                        height: "600vh",
                        display: 'flex',
                        alignItems: 'flex-start',
                    },
                    '& .left, .right': {
                        flex: 1,
                        border: '1px solid black',
                    },
                    "& .right": {

                        justifyContent: 'space-evenly',
                        flexDirection: "column",
                    },
                    '& .styck':{
                        position: 'sticky',
                        top: '15px',

                    }
                })}
            >
                This box is styled with PandaCSS.
                <div class="testo">
                    <div class="right">
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        asdfasdf
                    </div>         <div class="left">asdf</div>
                    <div class="right">
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        <div class="styck">asdfassfsf</div>
                        asdfasdf
                    </div>
                </div>
            </div>
        </>
    );
});
