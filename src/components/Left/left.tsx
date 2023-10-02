import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import NewberryLogo from "~/media/NewberryLogo_flame.png?jsx";

export const Left = component$(() => {
    return (
        <div
            class={
                css({
                    height: {
                        sm: "auto",
                        md: "auto",
                        lg: "100vh",
                        xl: "100vh",
                    },
                    backgroundColor: "rgb(var(--bg-color-1))",
                    color: "#bbb",
                    padding: "42px 0px 24px 0px",
                    flex: 0,
                    display: "flex",
                    flexDirection: "column",
                    // position: "relative",
                    position: "absolute",
                    right: 0,
                    top: 0,
                    left: 0,
                    sm: {
                        flexDirection: "column",
                    },
                    md: {
                        flexDirection: "row",
                    },
                    lg: {
                        position: "relative",
                        padding: "0 0 24px 0",
                        flexDirection: "column",
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
                }) + " left"
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
                })}
            >
                <a href="https://newberry.org/" target="_blank">
                    <NewberryLogo />
                </a>
            </div>
            <h1>
                A Very
                Newberry
                Halloween
            </h1>
            <div class={css({height: "auto", overflow: "auto"}) + " text-content"}>
                <p>
                    The Newberry Library, like any building from the 1800s that
                    is full of books, is haunted. Can’t come to Chicago to
                    experience the spirits yourself? We’ll bring the spooky to
                    you with highlights from{" "}
                    <a
                        href="https://collections.newberry.org/"
                        class="llines"
                        target="_blank"
                    >
                        Newberry Digital Collections
                    </a>
                    . Featured here is everything you need for Halloween, from a
                    17th century spell book to 20th century postcards. (The
                    Newberry is not liable for anyone who chooses to use the
                    spell book to summon their own ghosts, ghouls, or goblins.)
                </p>
                <p>
                    Browse our Halloween selection, learn about the history of
                    different items, and grab some vintage postcards to send to
                    your friends – or to color in your own versions. Check this
                    page throughout the month or follow{" "}
                    <a
                        href="https://www.tumblr.com/digitalnewberry"
                        target="_blank"
                        class="llines"
                    >
                        Digital Newberry on Tumblr
                    </a>{" "}
                    to get all your spooky season updates.
                </p>
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
                            borderRight:
                                "2px solid rgba(var(--fg-color-1), 0.5)",
                        },
                    },
                })}
            >
                <a target="_blank" href="https://www.newberry.org">
                    The Newberry
                </a>
                <a
                    target="_blank"
                    href="https://www.newberry.org/contact-librarian"
                >
                    Contact Us
                </a>
            </footer>
        </div>
    );
});
