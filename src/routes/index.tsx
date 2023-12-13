// import type { RequestEvent } from "@builder.io/qwik-city";
//
// export const onGet = async ({ redirect }: RequestEvent) => {
//   console.log("Redirecting to winter...");
//   throw redirect(307, "/collection-stories/winter");
// };

import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Left } from "~/components/Left/left";
// import { Right } from "~/components/Right/right";
import tumblr from "tumblr.js";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Tumblrcard } from "~/components/TumblrCard/tumblrcard";
import type { Post } from "~/types";
//
import { css } from "~/styled-system/css";
export const usePosts = routeLoader$(async (requestEvent) => {
  const client = tumblr.createClient({
    consumer_key: requestEvent.env.get("TUMBLR_API_KEY"),
  });
  const response = await client.blogPosts("digitalnewberry.tumblr.com", {tag: ['collection stories']});
  let posts = response.posts;
  posts = posts.filter((p: Post) => p.trail[0].blog.name === "digitalnewberry");
  posts = posts
    .filter((p: Post) => p.tags.indexOf("collection stories") > -1)
    .map((p: Post) => {
      const htmlBlock = p.body;
      const h1Match = htmlBlock.match(/<h1>(.*?)<\/h1>/);
      const h1Value = h1Match ? h1Match[1].replace(/<\/?[^>]+(>|$)/g, ""): null;
      const imgMatch = htmlBlock.match(/<img[^>]*?src=['"](.*?)['"]/);
      const imgSrc = imgMatch ? imgMatch[1] : null;

      return {
        title: h1Value as string,
        image: imgSrc,
        url: p.short_url,
        // tags: p.tags,
        // allData: p,
      };
    });
  // return response;
  console.log(posts)
  return posts;
});
type MiniPost = {
  title: string;
  image: string;
  url: string;
};
export default component$(() => {
  const posts = usePosts();
  const alternate = useSignal(false);
  // console.log(posts.value);
  return (
    <>
      <Left holiday="none">
        <h1
          q:slot="title"
          onClick$={() => (alternate.value = !alternate.value)}
        >
          The Newberry collection
        </h1>
        <p>is good</p>
      </Left>
      <div
        class={css({
          background: "rgb(var(--bg-color-2))",
          backgroundImage: "url('/coloringbookpage.webp')",
          position: "relative",
          flex: 3,
          width: "100%",
          overflow: "auto",
          height: "100%",
          "& .card-wrapper": {
            marginBlock: "10vh",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            alignItems: "stretch",
          },
        })}
      >
        {/* <pre class={css({ background: "#333", color: "#ccc" })}> */}
        {/*   {JSON.stringify(posts, null, 4)} */}
        {/* </pre> */}
        <div class="card-wrapper">
          {posts.value.map((p: MiniPost, idx: number) => (
            <Tumblrcard key={idx} data={p} alternate={alternate} />
          ))}
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Newberry Collection Stories",
  meta: [
    {
      name: "description",
      content:
        "A collection of portals to content from the collections of the Newberry Library",
    },
  ],
};
