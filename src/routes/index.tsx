import { component$ } from "@builder.io/qwik";
import { Card } from "~/components/Card/card";
import { css } from "~/styled-system/css";
import SpookyLibrary from "~/media/spookylibrary.png?jsx";

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
        blurb: "Send e-greetings with vintage Halloween images from our collections! Treat a friend with digitized witches, ghosts, and clowns -- just copy & paste into a text, email, or social media message.",
        view: "https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA45P1L0W&SMLS=1&RW=1280&RH=603#/DamView&VBID=2KXJA45P1T3R&PN=1&WS=SearchResults ",
        about: "https://www.tumblr.com/digitalnewberry/729544430790541312/vintage-halloween-postcards",
    },
    {
        image: [
            {
                width: 234,
                height: 400,
                ctxid: "2KXJ8ZQ50KYQ",
            },
            {
                width: 268,
                height: 400,
                ctxid: "2KXJ8ZQ5R6F7",
            },
        ],
        title: "Book of magical charms, ca. 1612",
        blurb: 'This 17th-century book of magical charms is the ultimate self-help guide, covering everything from speaking with "spiritts" to curing a toothache.',
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
        blurb: "Inspired by the online #ColorOurCollections festival, a special Halloween coloring book based on our vintage postcards. Get a peek into old Halloween traditions with these pages fun for kids and adults alike!",
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
        blurb: "Find this year’s costume in images from the postcard golden age (1890s-1920s). Fantastical scenes, elaborate sports outfits, and period clothing provide plenty of ideas for your Halloween party.",
        view: "https://collections.newberry.org/Share/adj2s70b61g1n27eg2hf3u04ikge537f",
        about: "[grey for now]",
    },
    {
        image: [{ width: 327, height: 400, ctxid: "2KXJ8ZSVNXL1T" }],
        title: "Modern manuscripts, 1890s-1940s",
        blurb: '"It isn’t natural to us to frisk" at the Halloween party? Explore how 20th century people celebrated and spoke about Halloween with our modern manuscripts.',
        view: "https://collections.newberry.org/Share/3ebdn80fysljic8218hdcpkq3pt233s8",
        about: "[grey for now]",
    },
    {
        image: [{ width: 260, height: 400, ctxid: "2KXJ8ZSU09S1F" }],
        title: "Early modern ghosts, 1660-1705",
        blurb: "English broadsides featuring ghostly offerings of warnings, advice, and denunciations in verse form.",
        view: "https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA45TD1YF&SMLS=1&RW=1280&RH=603#/DamView&VBID=2KXJA45TDYBZ&PN=1&WS=SearchResults",
        about: "[grey for now]",
    },
    {
        image: [{ width: 600, height: 400, ctxid: "2KXJ8ZSJ9Q7PB" }],
        title: "WWI skeletons, mid- to late-1910s",
        blurb: "Anti-German propaganda depicting the horrors of war (plus a few post-war fishing trips).",
        view: "https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA45TDPAC&PN=1&WS=SearchResults#/DamView&VBID=2KXJA45TIQN0&PN=1&WS=SearchResults",
        about: "[grey for now]",
    },
];

export default component$(() => {
    return (
        <div
            class={css({
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                height: "auto",
                lg: {
                    flexDirection: "row",
                    height: "100vh",
                },
                position: "relative",
                width: "100%",
                "& .loof": {
                    position: "sticky",
                    top: 0,
                    height: {
                        sm: "auto",
                        md: "auto",
                        lg: "100vh",
                        xl: "100vh",
                    },
                    backgroundColor: "rgb(var(--bg-color-1))",
                    color: "#bbb",
                    padding: "16px",
                    flex: 0,
                    display: "flex",
                    flexDirection: "column",
                    sm: {
                        flexDirection: "column",
                    },
                    md: {
                        flexDirection: "row",
                    },
                    lg: {
                        flexDirection: "column",
                    },
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                },
                "& h1": {
                    fontSize: "min(10vh, 13vw)",
                },
                "& .text-content p, h1": {
                    padding: "16px",
                },
                "& .text-content p": {
                    fontSize: "lg",
                    // display: 'none',
                    // lg: { display: 'block'},
                },
                "& .riiit": {
                    position: "relative",
                    backgroundColor: "#333",
                    color: "#ccc",
                    overflow: "auto",
                    height: "auto",
                    flex: 2,
                    zIndex: "20",
                    boxShadow: "-10px 0 16px rgba(0, 0, 0, 0.1)",
                    backgroundImage:
                        'linear-gradient(to bottom, rgba(0,0,0,0.87), rgba(0,0,0,0.37)), image-set( url("https://collections.newberry.org/IIIF3/Image/2KXJ8Z3DGL97/square/400,/0/default.jpg") 1x, url("https://collections.newberry.org/IIIF3/Image/2KXJ8Z3DGL97/square/800,/0/default.jpg" ) 2x, url("https://collections.newberry.org/IIIF3/Image/2KXJ8Z3DGL97/square/1200,/0/default.jpg") 4x, url("https://collections.newberry.org/IIIF3/Image/2KXJ8Z3DGL97/square/max/0/default.jpg") 10x)',
                    backgroundSize: "cover",
                    backgroundPosition: "center left",
                    backgroundAttachment: "fixed",
                },
                "& .liner": {
                    margin: "auto",

                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60vh, rgba(241,97,81,1) 85%, rgba(241,97,81,1) 100%)",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    // marginBottom: "100vh",
                },
                "& .spooky": {
                    pointerEvents: "none",
                    minHeight: "auto",
                    lg: {
                        minHeight: "40vh",
                    },
                    display: "flex",

                    alignItems: "center",
                    justifyContent: "center",
                },
                "& .wrap": {
                    height: "77vh",
                    // lg: {
                    //     height: "90vh",
                    // },
                },
                "& .col": {
                    margin: "30px",
                    // position: "sticky",
                    // top: "15px",
                },
            })}
        >
            <div class="loof">
                <h1>
                    A Very
                    <br />
                    Newberry
                    <br />
                    Halloween
                </h1>
                <div class="text-content">
                    <p>
                        The Newberry Library, like any building from the 1800s
                        that is full of books, is haunted. Can’t come to Chicago
                        to experience the spirits yourself? We’ll bring the
                        spooky to you with highlights from Newberry Digital
                        Collections. Featured here is everything you need for
                        Halloween, from a 17th century spell book to 20th
                        century postcards. (The Newberry is not liable for
                        anyone who chooses to use the spell book to summon their
                        own ghosts, ghouls, or goblins.)
                    </p>
                    <p>
                        Browse our Halloween selection, learn about the history
                        of different items, and grab some vintage postcards to
                        send to your friends – or to color in your own versions.
                        Check this page throughout the month or follow Digital
                        Newberry on Tumblr to get all your spooky season
                        updates.
                    </p>
                </div>
            </div>
            <div class="riiit">
                <div class="liner">
                    <div class="spooky">
                        <img
                            src="/spooky.gif"
                            class={css({
                                opacity: 0.33,
                                position: "fixed",
                                top: "20vh",
                                right: 0,
                            })}
                            alt="a very spooky ghost that floats along the screen"
                        />
                    </div>
                    {cards.map((card, idx) => (
                        <div key={idx} class="col">
                            <Card data={card} idx={idx} />
                        </div>
                    ))}
                </div>
                <div
                    class={css({
                        // height: { sm: "100vh", md: "100vh", lg: "222vh" },
                        // position: "absolute",
                        // top: 0,
                        // bottom: 0,
                        // left: 0,
                        // right: 0,
                        height: "120vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        // lg: {
                        //     height: "222vh",
                        // },
                        backgroundColor: "rgb(var(--flame))",
                        "& img": {
                            zIndex: "99999",
                            opacity: "0.5",
                            // backgroundImage:
                            //     "url('/spookyshlflibrary.png')",
                            // backgroundSize: "contain",
                            // backgroundPosition: "bottom center",
                            // backgroundRepeat: "no-repeat",
                            width: "100%",
                        },
                    })}
                >
                    <SpookyLibrary />
                    {/* <img */}
                    {/*     src="/spookyshlflibrary.png" */}
                    {/*     alt="a spooke library, a version of the newberry as though made from paper, with books in the windows, and bats and jack o lanterns strewn about" */}
                    {/* /> */}
                </div>
            </div>
        </div>
    );
});
