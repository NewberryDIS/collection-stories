import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/Card/card";
import { css } from "~/styled-system/css";
import { Arrow } from "~/components/Arrow/arrow";
import { Ghost } from "~/components/Ghost/ghost";
import { Left } from "~/components/Left/left";
import { Right } from "~/components/Right/right";

const cards = [
    {
        image: [
            {
                width: 617,
                height: 400,
                ctxid: "2KXGDNLS0NM",
                altfn: "halloween-slideshow.webp",
            },
        ],
        title: "Halloween postcards, ca. 1910s",
        blurb: "Send e-greetings with vintage Halloween images from our collections! Treat a friend with digitized witches, ghosts, and clowns -- just copy & paste into a text, email, or social media message.",
        view: "https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA45P1L0W&SMLS=1&RW=1280&RH=603#/DamView&VBID=2KXJA45P1T3R&PN=1&WS=SearchResults ",
        about: "https://www.tumblr.com/digitalnewberry/730081438520705024/vintage-halloween-postcards?source=share",
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
                altfn: "coloringbookpage.webp",
            },
        ],
        title: "Color Our Collections: Newberry Halloween 2023",
        blurb: "Inspired by the <a href='https://library.nyam.org/colorourcollections/' target='_blank' class='llines'>online #ColorOurCollections festival</a>, a special Halloween coloring book based on our vintage postcards. Get a peek into old Halloween traditions with these pages fun for kids and adults alike!",
        view: "https://collections.newberry.org/asset-management/2KXJ8ZS86HE6V",
        about: "[grey for now]",
    },
    {
        image: [
            {
                width: 263,
                height: 400,
                ctxid: "2KXJ8ZS86HYCV",
                altfn: "halloween-costumes.webp",
            },
        ],

        title: "Costume ideas",
        blurb: "Find this year’s costume in images from the postcard golden age (1890s-1920s). Fantastical scenes, elaborate sports outfits, and period clothing provide plenty of ideas for your Halloween party.",
        view: "https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4P71SAO&SMLS=1&RW=1920&RH=963#/DamView&VBID=2KXJA4P71UOW&PN=1&WS=AssetManagement",
        about: "https://www.tumblr.com/digitalnewberry/730804233777135616/with-halloween-just-a-few-short-weeks-away-you?source=share",
    },
    {
        image: [{ width: 327, height: 400, ctxid: "2KXJ8ZSVNXL1T" }],
        title: "Modern manuscripts, 1890s-1940s",
        blurb: '"It isn’t natural to us to frisk" at the Halloween party? Explore how 20th century people celebrated and spoke about Halloween with our modern manuscripts.',
        view: "https://collections.newberry.org/Share/3ebdn80fysljic8218hdcpkq3pt233s8",
        about: "https://www.tumblr.com/digitalnewberry/730081464400658432/turn-of-the-century-halloween?source=share",
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
        view: "https://collections.newberry.org/asset-management?WS=AssetManagement#/DamView&VBID=2KXJA4P67MOS&PN=1&WS=AssetManagement",
        about: "https://www.tumblr.com/digitalnewberry/730998690665381889/on-this-day-in-1915-british-nurse-edith-cavell?source=share&ref=_tumblr",
    },
    {
        image: [{ width: 267, height: 400, ctxid: "2KXJ8ZS6Z99FF" }],
        title: "Assorted demons, early to mid-20th c.",
        blurb: "For all your soul-selling, cake-walking, and golfing needs",
        view: "https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4P76K0W&SMLS=1&RW=1920&RH=963#/DamView&VBID=2KXJA4P78LED&PN=1&WS=AssetManagement",
        about: "[grey for now]",
    },
    {
        image: [{width: 600, height: 400, ctxid: "2KXJ8ZSMLTJHC" , altfn: "autumn.webp"}],
        title: "Bonus: Happy Autumn",
        blurb: "It's always peak fall foliage in the Newberry's postcard collections.",
        view: "https://collections.newberry.org/asset-management?WS=AssetManagement#/DamView&VBID=2KXJA4P6H3VT&PN=1&WS=AssetManagement",
        about: "[grey for now]",
    }
];

export default component$(() => {
    const showCitation = useSignal(false);
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
                "& .arrow-wrapper": {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    pointerEvents: "none",
                },
                "& .card-wrapper": {
                    gridArea: "1 / 1 / 2 / 2",
                    paddingBlock: "77vh",
                },
                "& .col": {
                    margin: "30px",
                },
            })}
        >
            <Ghost />
            <Left />
            <Right>
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
                            backgroundImage: "url('/ghostyboy.webp')",
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
                <div class="card-wrapper">
                    {/* ghost has to be inside card-wrapper for the z-index layering to work */}
                    <div class="arrow-wrapper">
                        <Arrow />
                    </div>
                    {cards.map((card, idx) => (
                        <div id={`card-${idx}`} key={idx} class="col">
                            <Card data={card} idx={idx} />
                        </div>
                    ))}
                </div>
            </Right>
        </div>
    );
});

export const head: DocumentHead = {
    title: "A Newberry Halloween",
    meta: [
        {
            name: "description",
            content:
                "A collection of portals to halloween content from the collections of the Newberry Library",
        },
    ],
};
