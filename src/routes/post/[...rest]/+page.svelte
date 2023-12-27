<script lang="ts">
  // import '$lib/dark-mode-toggle.js'
  import {base} from '$app/paths'
  import { onMount } from "svelte";
  import {afterNavigate} from '$app/navigation'
  import {page } from '$app/stores'
  import BiggerPicture, { type BiggerPictureInstance } from "bigger-picture/svelte";
  import "bigger-picture/css";
  import Left from '$comps/Left.svelte'
  import Right from '$comps/Right.svelte'
  import { truncateStringAtWordBoundary } from '$lib'
  import Article from '$comps/Article.svelte'
  let bp: BiggerPictureInstance, essayCards;
  export let data
  // console.log(data)
  afterNavigate(() => {
    const pagedata = data.cards.filter(f =>  $page.params.rest.includes(f.url)).pop()
    if ($page.params.rest){
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container: HTMLElement!) => {
          container.querySelector(".bp-x").remove();
          // history.pushState($page.params.rest, "")
          container.classList.add("blur");
          new Article({
            target: container.querySelector(".bp-html"),
            props: { data: pagedata } 
          });
        },
        onClose: (container) => {
          history.back()
        }
      });
    } else {
      let opts = ""
      bp.close()
    }
  })
  onMount(() => {
    bp = BiggerPicture({
      target: document.body,
    });
  });

</script>

  <dark-mode-toggle></dark-mode-toggle>
<Left>
  <h1 slot="title" >
    Newberry Collection Stories
  </h1>
  <p>
    Learn more about digitized manuscripts, maps, books, photographs, video, artwork, and other rare and unique materials from <a href="https://collections.newberry.org/" target="_blank" class="llines" >Newberry Digital Collections</a>.
  </p>
</Left>
<Right>
  {#each data.cards as d, idx}
    <a href="{base}/post/{d.url}"  class="tumblr-card" id="card-{idx}" >
      <!-- <a on:click|preventDefault={(e) => showModal(e, d)} href={d.url} target="_blank" class="tumblr-card" id="card-{idx}" > -->
      <div class="liner" style="background-image: url('{d.image}');" />
      <h2 >{truncateStringAtWordBoundary(d.title)}</h2>
    </a>
  {/each}
</Right>

<style lang="scss">
.tumblr-card {
  position: relative;
  aspect-ratio: 1 / 1;
  width: 333px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  &:hover {
    box-shadow: 0 0 10px 10px rgba(0,0,0,0.25);
    & h2 {
      background: rgba(var(--bg-color-1),0.77);
      box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
    & .liner {
      filter: blur(16px) saturate(180%);
    }
  }
}
.tumblr-card, .liner, h2 {
  transition: all 200ms ease-in-out;
}
.tumblr-card, h2 {
  border: 1px solid rgb(var(--bg-color-1));
}
.liner {
  background-image: var(--backgroundImage);
  background-position: 50% 25%;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
h2 {
  backdrop-filter: blur(10px);
  box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  background: rgba(var(--bg-color-1),0.5);
  color: rgb(var(--fg-color-1));
  margin: 16px;
  padding: 16px;
  font-size: clamp(22px, 3vh, 3rem);
  // line-height: clamp(22px, 3vh, 3rem); 
}
</style>
