import type { RequestEvent } from "@builder.io/qwik-city";
// import { checkAuthorization } from '../auth'; // Your authorization code
// import type { DashboardData } from '../types'; // Your types

export const onGet = async ({ redirect }: RequestEvent) => {
  console.log("Redirecting to winter...");
  throw redirect(307, "/_csh/winter");
};

// import { component$ } from "@builder.io/qwik";
// import type { DocumentHead } from "@builder.io/qwik-city";
// import { Left } from "~/components/Left/left";
// // import { Right } from "~/components/Right/right";
// import tumblr from "tumblr.js";
// import { routeLoader$ } from "@builder.io/qwik-city";
// import { Tumblrcard } from "~/components/TumblrCard/tumblrcard";
// import type { Post } from "~/tumblrtypes";
//
// import { css } from "~/styled-system/css";
// export const usePosts = routeLoader$(async (requestEvent) => {
//   const client = tumblr.createClient({
//     consumer_key: requestEvent.env.get("TUMBLR_API_KEY"),
//   });
//   const response = await client.blogPosts("digitalnewberry.tumblr.com");
//   let posts = response.posts;
//   posts = posts.filter((p: Post) => p.trail[0].blog.name === "digitalnewberry");
//   posts = posts.map((p: Post) => {
//     const htmlBlock = p.body;
//     const h1Match = htmlBlock.match(/<h1>(.*?)<\/h1>/);
//     const h1Value = h1Match ? h1Match[1] : null;
//     const imgMatch = htmlBlock.match(/<img[^>]*?src=['"](.*?)['"]/);
//     const imgSrc = imgMatch ? imgMatch[1] : null;
//
//     return {
//       title: h1Value,
//       image: imgSrc,
//       url: p.short_url,
//     };
//   });
//   // return response;
//   return posts;
// });
// type MiniPost = {
//   title: string;
//   image: string;
//   url: string;
// };
// export default component$(() => {
//   const posts = usePosts();
//   // console.log(posts.value);
//   return (
//     <>
//       <Left holiday="none">
//         <h1 q:slot="title">The Newberry collection</h1>
//         <p>is good</p>
//       </Left>
//       <div
//         class={css({
//           background: "rgb(var(--fg-color-2))",
//           position: "relative",
//           flex: 3,
//           width: "100%",
//           overflow: "auto",
//           height: "100%",
//           "& .toot": {
//             marginBlock: "10vh",
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "20px",
//             justifyContent: "center",
//             alignItems: "stretch",
//           },
//         })}
//       >
//         <div class="toot">
//           {posts.value.map((p: MiniPost, idx: number) => (
//             <Tumblrcard key={idx} data={p} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// });
//
// export const head: DocumentHead = {
//   title: "A Newberry Halloween",
//   meta: [
//     {
//       name: "description",
//       content:
//         "A collection of portals to halloween content from the collections of the Newberry Library",
//     },
//   ],
// };
