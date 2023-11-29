import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/Card/card";
import { css } from "~/styled-system/css";
import { Arrow } from "~/components/Arrow/arrow";
// import { Ghost } from "~/components/Ghost/ghost";
import { Left } from "~/components/Left/left";
import { Right } from "~/components/Right/right";


    const sampleData = {
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
        about: "https://www.tumblr.com/digitalnewberry/731458343803158528/the-book-of-magical-charms?source=share&ref=_tumblr",
    }

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
            <Left holiday="none" >
                <h1 q:slot="title">
                The Newberry collection
                </h1>
                <p>is good</p>
            </Left>
            <Right holiday="none" >
                <div class="card-wrapper">
                    <div class="arrow-wrapper">
                        <Arrow />
                    </div>
                        <div  class="col">
                            <Card data={sampleData} idx={0} />
                        </div>
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
