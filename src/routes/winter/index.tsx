import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Card } from "~/components/Card/card";
import { Left } from "~/components/Left/left";
import { Right } from "~/components/Right/right";
// import { css } from "~/styled-system/css";
import type { CortexData } from "~/types";
const peUrl = [
  "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=",
  "&PackageFields=SystemIdentifier,Title,new.Context,Link,new.Link-2&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json",
];
async function dataGetter(mei: string, token: string) {
  const dataUrl = peUrl[0] + mei + peUrl[1] + "&token=" + token;
  const response = await fetch(dataUrl).then((r) => r.json());
  return response as CortexData;
}
function urlParser(value: string) {
  const urlRegex = /href="([^"]*)"/;
  const match = value.match(urlRegex);
  if (match && match[1]) {
    return match[1];
  } else {
    return "[grayed out for now]";
  }
}
export const useCortexData = routeLoader$(async (requestEvent) => {
  const token = requestEvent.env.get("CORTEX_API_TOKEN") as string;
  const winterMei = "2KXJ8ZS43VB4Y";
  const response = await dataGetter(winterMei, token);
  const cardResponse = await Promise.all(
    response.APIResponse.Content.map((item) =>
      dataGetter(item.MediaEncryptedIdentifier, token),
    ),
  );
  const cardData = cardResponse.map((res) => ({
    image: {
      width: parseInt(res.APIResponse.Representative.MaxWidth),
      height: parseInt(res.APIResponse.Representative.MaxHeight),
      ctxid: res.APIResponse.Representative.MediaEncryptedIdentifier,
      altfn:
        res.APIResponse.Representative.MediaEncryptedIdentifier ===
        "2KXJ8ZS43VD50"
          ? "winter-postcards.webp"
          : "",
    },
    title: res.APIResponse.Title,
    blurb: res.APIResponse["new.Context"],
    view: res.APIResponse.Link,
    about: urlParser(res.APIResponse["new.Link-2"]),
    iiiftype: res.APIResponse.Content[0]["CoreField.IIIFResourceType"],
  }));
  // console.log(JSON.stringify(cardData.map((c) => ({ title: c.title }))));
  return cardData;
});

// jen's preferred order
// {"title":"Winter postcards, early 20th c."},
// {"title":"Arctic exploration, 1820s-1880s"},
// {"title":"A 1598 map with... Santa?"},
// {"title":"Holiday haul, circa 19th c."},
// {"title":"New Year postcards, early 20th c."},
// {"title":"New Yeeres calligraphy book, 1606"},
// {"title":"New Year diaries & letters, 1800s-1980s"}]

// const cards = [
//   {
//     image: {
//       width: 617,
//       height: 400,
//       ctxid: "2KXJ8ZS43VLAS",
//       altfn: "winter-postcards.webp",
//     },
//     title: "Winter postcards, early 20th c.",
//     blurb:
//       "Featuring all your favorite wintertime activities -- from ice skating to single-engine piloting to gathering mushrooms & champagne",
//     view: "https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA40C6X8S&SMLS=1&RW=1920&RH=919&FR_=1&W=1920&H=953#/DamView&VBID=2KXJA40CALCY&PN=1&WS=AssetManagement",
//     about: "[grayed out for now]",
//   },
// ];

export default component$(() => {
  const cortexData = useCortexData();
  return (
    <>
      <Left holiday="winter">
        <h1 q:slot="title">Newberry Winter Fest</h1>
        <p>
          As Chicago winter descends on the Newberry Library, we’re embracing
          this season with warm beverages and holiday lights. What better
          companion for cozy evenings at home than a peek into a frosty past?
          Here you can browse selections from{" "}
          <a href="https://collections.newberry.org/" class="llines">
            Newberry Digital Collections
          </a>{" "}
          with centuries of letters, postcards, and art about the holiday
          season.
        </p>
        <p>
          Read Christmas cards from Ernest Hemingway, explore the evolution of
          the depiction of Santa, and learn how to say “Happy New Year” in
          multiple languages with vintage postcards. Explore this page and
          follow{" "}
          <a href="https://digitalnewberry.tumblr.com/" class="llines">
            Digital Newberry on Tumblr
          </a>{" "}
          to get all of the latest Winter Fest updates!
        </p>
      </Left>
      <Right holiday="winter">
        {/* <pre class={css({ background: "#333", color: "#ccc", zIndex: 9999 })}> */}
        {/*   {JSON.stringify(cortexData.value, null, 4)} */}
        {/* </pre> */}
        {cortexData.value.map((card, idx) => (
          <div id={`card-${idx}`} key={idx} class="col">
            <Card data={card} idx={idx} />
          </div>
        ))}
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
