import { component$ } from '@builder.io/qwik';

export interface GalleryProps {

}
import { css } from "~/styled-system/css";

const cards = [
    {
        image: [
            {
                width: 616,
                height: 400,
                ctxid: "2KXGDNLS0NM",
                altfn: "halloween-slideshow.gif",
            },
        ],
        title: "Halloween postcards, ca. 1910s",
        blurb:
        "Send e-greetings with vintage Halloween images from our collections! Treat a friend with digitized witches, ghosts, and clowns -- just copy & paste into a text, email, or social media message.",
        view: "https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA45P1L0W&SMLS=1&RW=1280&RH=603#/DamView&VBID=2KXJA45P1T3R&PN=1&WS=SearchResults ",
        about:
        "https://www.tumblr.com/digitalnewberry/729544430790541312/vintage-halloween-postcards",
    },
    {
        image: [
            {
                width: 268,
                height: 400,
                ctxid: "2KXJ8ZQ5R6F7",
            },
            {
                width: 234,
                height: 400,
                ctxid: "2KXJ8ZQ50KYQ",
            },
        ],
        title: "Book of magical charms, ca. 1612",
        blurb:
        'This 17th-century book of magical charms is the ultimate self-help guide, covering everything from speaking with "spiritts" to curing a toothache.',
        view: "https://collections.newberry.org/asset-management/2KXJ8Z9UGC2Q",
        about: "https://youtu.be/e-5luAo20ss?si=FH9020LA-Y3ot3K7 ",
    },
    {
        image: [
            {
                width: 641,
                height: 400,
                ctxid: "2KXJ8ZS86HE6V",
                altfn: "coloringbookpage.png",
            },
        ],
        title: "Color Our Collections: Newberry Halloween 2023",
        blurb:
        "Inspired by the online #ColorOurCollections festival, a special Halloween coloring book based on our vintage postcards. Get a peek into old Halloween traditions with these pages fun for kids and adults alike!",
        view: "https://collections.newberry.org/asset-management/2KXJ8ZS86HE6V",
        about: "[grey for now]",
    },
    {
        image: [
            {
                width: 263,
                height: 400,
                ctxid: "2KXJ8ZS86HYCV",
                altfn: "halloween-costumes.gif",
            },
        ],

        title: "Costume ideas",
        blurb:
        "Find this year’s costume in images from the postcard golden age (1890s-1920s). Fantastical scenes, elaborate sports outfits, and period clothing provide plenty of ideas for your Halloween party.",
        view: "https://collections.newberry.org/Share/adj2s70b61g1n27eg2hf3u04ikge537f",
        about: "[grey for now]",
    },
    {
        image: [{ width: 327, height: 400, ctxid: "2KXJ8ZSVNXL1T" }],
        title: "Modern manuscripts, 1890s-1940s",
        blurb:
        '"It isn’t natural to us to frisk" at the Halloween party? Explore how 20th century people celebrated and spoke about Halloween with our modern manuscripts.',
        view: "https://collections.newberry.org/Share/3ebdn80fysljic8218hdcpkq3pt233s8",
        about: "[grey for now]",
    },
    {
        image: [{ width: 260, height: 400, ctxid: "2KXJ8ZSU09S1F" }],
        title: "Early modern ghosts, 1660-1705",
        blurb:
        "English broadsides featuring ghostly offerings of warnings, advice, and denunciations in verse form.",
        view: "https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA45TD1YF&SMLS=1&RW=1280&RH=603#/DamView&VBID=2KXJA45TDYBZ&PN=1&WS=SearchResults",
        about: "[grey for now]",
    },
    {
        image: [{ width: 600, height: 400, ctxid: "2KXJ8ZSJ9Q7PB" }],
        title: "WWI skeletons, mid- to late-1910s",
        blurb:
        "Anti-German propaganda depicting the horrors of war (plus a few post-war fishing trips).",
        view: "https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA45TDPAC&PN=1&WS=SearchResults#/DamView&VBID=2KXJA45TIQN0&PN=1&WS=SearchResults",
        about: "[grey for now]",
    },
];

export default component$(() => {
    return (
        <>
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
                            <div key={idx} class="card">
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

