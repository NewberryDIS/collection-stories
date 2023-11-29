import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/Card/card";
import { Left } from "~/components/Left/left";
import { Right } from "~/components/Right/right";
// import { css } from "~/styled-system/css";
const cards = [
  {
    image: [
      {
        width: 617,
        height: 400,
        ctxid: "2KXJ8ZS43VLAS",
        altfn: "winter-postcards.webp",
      },
    ],
    title: "Winter postcards, early 20th c.",
    blurb:
      "Featuring all your favorite wintertime activities -- from ice skating to single-engine piloting to gathering mushrooms & champagne",
    view: "https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA40C6X8S&SMLS=1&RW=1920&RH=919&FR_=1&W=1920&H=953#/DamView&VBID=2KXJA40CALCY&PN=1&WS=AssetManagement",
    about: "[grayed out for now]",
  },
];

export default component$(() => {
  return (
    <>
      <Left holiday="winter">
        <h1 q:slot="title">Newberry Winter Fest</h1>
        <p>ok hi</p>
        <p>
          "Featuring all your favorite wintertime activities -- from ice skating
          to single-engine piloting to gathering mushrooms & champagne",
        </p>
      </Left>
      <Right holiday="winter">
        <div class="toot">
          {cards.map((card, idx) => (
            <div id={`card-${idx}`} key={idx} class="col">
              <Card data={card} idx={idx} />
            </div>
          ))}
        </div>
        <p class="toot">New route works.</p>
      </Right>
    </>
  );
});

export const head: DocumentHead = {
  title: "A Newberry Winter",
  meta: [
    {
      name: "description",
      content:
        "A collection of portals to winter-themed content from the collections of the Newberry Library",
    },
  ],
};
