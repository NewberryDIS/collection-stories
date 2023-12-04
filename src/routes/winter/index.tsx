import { component$ } from "@builder.io/qwik";
import type {  DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Card } from "~/components/Card/card";
import { Left } from "~/components/Left/left";
import { Right } from "~/components/Right/right";
import { css } from "~/styled-system/css";
import type { CortexData } from "~/types";
const peUrl = [ "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=", "&PackageFields=SystemIdentifier,Title,new.Context,Link,new.Link-2&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json" ]
async function dataGetter (mei: string, token: string) {
    const dataUrl = peUrl[0] + mei + peUrl[1] + "&token=" + token
    const response = await fetch(dataUrl).then(r => r.json())
    return response as CortexData
}

export const useCortexData = routeLoader$(async (requestEvent) => {
    const token = requestEvent.env.get("CORTEX_API_TOKEN") as string
    const winterMei = '2KXJ8ZS43VB4Y'
    const response = await dataGetter(winterMei, token)
    const cardResponse = await Promise.all(response.APIResponse.Content.map((item => dataGetter(item.MediaEncryptedIdentifier, token))))
    const cardData = cardResponse.map(res => ({
        image: {
            width: res.APIResponse.Representative.MaxWidth,
            height: res.APIResponse.Representative.MaxHeight,
            ctxid: res.APIResponse.Representative.MediaEncryptedIdentifier,
            altfn: ''
        },
        title: res.APIResponse.Title,
        blurb: res.APIResponse["new.Context"],
        view: res.APIResponse.Link,
        about: res.APIResponse["new.Link-2"]

    }))

    return cardData
})

const cards = [
  {
    image:  {
        width: 617,
        height: 400,
        ctxid: "2KXJ8ZS43VLAS",
        altfn: "winter-postcards.webp",
      },
    title: "Winter postcards, early 20th c.",
    blurb:
      "Featuring all your favorite wintertime activities -- from ice skating to single-engine piloting to gathering mushrooms & champagne",
    view: "https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA40C6X8S&SMLS=1&RW=1920&RH=919&FR_=1&W=1920&H=953#/DamView&VBID=2KXJA40CALCY&PN=1&WS=AssetManagement",
    about: "[grayed out for now]",
  },
];

export default component$(() => {
    const cortexData = useCortexData() 
  return (
    <>
      <Left holiday="winter">
        <h1 q:slot="title">Newberry Winter Fest</h1>
        <p>ok hi</p>
                {/* {cortexData.value.APIResponse.Content.map(c=><p>{c.MediaEncryptedIdentifier}</p>)} */}
        <p>

          "Featuring all your favorite wintertime activities -- from ice skating
          to single-engine piloting to gathering mushrooms & champagne",
        </p>
      </Left>
      <Right holiday="winter">
        <div class="toot">
                    <pre class={css({background: "#333", color: "#ccc", zIndex: 9999})}>{JSON.stringify(cortexData.value, null, 4)}</pre>
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
