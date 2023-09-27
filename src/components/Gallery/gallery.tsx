import { component$ } from '@builder.io/qwik';

export interface GalleryProps {

}
import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
    return (
        <zR>
            <main
                class={css({
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "stretch",
                    justifyContent: "stretch",
                    position: "relative",
                    "& .right": {
                        position: "relative",
                        // padding: "32px",
                        zIndex: "20",
                        flex: 1,
                        width: "100%",
                        // background: "rgb(var(--bg-color-2))",
                        boxShadow: "-10px 0 16px rgba(0, 0, 0, 0.1)",
                        overflow: "hidden",
                        backgroundImage:
                        'linear-gradient(to bottom, rgba(0,0,0,0.87), rgba(0,0,0,0.37)), image-set( url("https://collections.newberry.org/IIIF3/Image/2KXJ8Z3DGL97/square/400,/0/default.jpg") 1x, url("https://collections.newberry.org/IIIF3/Image/2KXJ8Z3DGL97/square/800,/0/default.jpg" ) 2x, url("https://collections.newberry.org/IIIF3/Image/2KXJ8Z3DGL97/square/1200,/0/default.jpg") 4x, url("https://collections.newberry.org/IIIF3/Image/2KXJ8Z3DGL97/square/max/0/default.jpg") 10x)',
                        backgroundSize: "cover",
                        // backgroundSize: "contain",
                        backgroundPosition: "center left",
                        // backgroundPosition: "center right",
                        backgroundAttachment: "fixed",
                        "& .gallery": {
                            padding: "87vh 32px 64px 32px",
                            margin: "auto",
                            background:
                            "linear-gradient(to bottom, rgba(var(--flame), 0) 0vw,  rgba(var(--flame), 0) 60vh, rgba(var(--flame), 1))  100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "32px",
                            "& .card": {
                                color: "rgb(var(--bg-color-1))",
                                display: "flex",
                                flexDirection: "column",
                                maxWidth: "500px",
                                background: "rgb(var(--granite))",
                                // height: "400px",
                                // width: "300px",
                                overflow: "hidden",
                                "& img": {
                                    maxWidth: "500px",
                                    width: '100%',
                                    objectFit: "cover",
                                },
                                "& .card-text": {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                gap: "8px",
                                    padding: "16px",
                                    "& .card-btn-group": {
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        "& button": {
                                            borderRadius: "4px",
                                            flex: 1,
                                            fontFamily: 'styrene',
                                            background: "rgb(var(--bg-color-1))",
                                            color: "rgb(var(--fg-color-1))",
                                        }
                                    }
                                }
                            },
                        },
                    },
                    "& .left": {
                        height: "100vh",
                        position: "sticky",
                        top: 0,
                        padding: "16px",
                        flexBasis: "30vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        background: "rgb(var(--bg-color-1))",
                        zIndex: 1,
                        minHeight: "100vh",
                        "& .text-content": {
                            fontSize: "1.25rem",
                        },
                        "& h1": {
                            fontSize: "10vh",
                            lineHeight: "10vh",
                            margin: 0,
                        },
                    },
                })}
            >
                <div class="left">
                    <h1>
                        A Very
                        <br />
                        Newberry
                        <br />
                        Halloween
                    </h1>
                    <div class="text-content">
                        <p>
                            The Newberry Library, like any building from the
                            1800s that is full of books, is haunted. Can’t come
                            to Chicago to experience the spirits yourself? We’ll
                            bring the spooky to you with highlights from
                            Newberry Digital Collections. Featured here is
                            everything you need for Halloween, from a 17th
                            century spell book to 20th century postcards. (The
                            Newberry is not liable for anyone who choose to use
                            the spell book to summon their own ghosts, ghouls,
                            or goblins.)
                        </p>
                        <p>
                            Browse our Halloween selection, learn about the
                            history of different items, and grab some vintage
                            postcards to send to your friends – or to color in
                            your own versions. Check this page throughout the
                            month or follow Digital Newberry on Tumblr to get
                            all your spooky season updates.
                        </p>
                    </div>
                </div>
                <div class="right">
                    <div class="gallery">
                        {cards.map((card, idx) => (
                            <div class="card">
                                <img
                                    srcSet={'altimage' in card ? card.altimage : srcsetter(card.image)}
                                    alt={card.blurb}
                                />
                                <section class="card-text">
                                    <h2>{card.title}</h2>
                                    <p>{card.blurb}</p>
                                    <div class="card-btn-group">
                                        <button onClick$={(e) => console.log(e.target)}>View</button>
                                        <button onClick$={(e) => console.log(e.target)}>About</button>
                                    </div>
                                </section>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
});

export const head: DocumentHead = {
    title: "Newberry Collection Stories",
    meta: [
        {
            name: "description",
            content: "Some fun with the collections.",
        },
    ],
};
