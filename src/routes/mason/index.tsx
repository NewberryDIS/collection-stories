import { component$ } from "@builder.io/qwik";
import { Masonry } from "~/components/masonry/masonry";
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
                width: "100vw",
                height: "100vh",
                backgroundColor: "#333333",
                color: "#ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "16px",
            })}
        >
            {cards.map((card) => (
                <div
                    key={card.image[0].ctxid}
                    class={css({
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#333333",

                        width: "400px",
                        height: "300px",
                        border: "1px solid white",
                        "& h1, p": {
                            minWidth: "0px",
                        },
                    })}
                >
                    <h2>{card.title}</h2>
                    <p>{card.blurb}</p>
                </div>
            ))}
            New route works.
        </div>
    );
});
