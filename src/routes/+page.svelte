<script lang="ts">
import { page } from '$app/stores'
import { base } from '$app/paths'
import { goto, preloadData, pushState } from '$app/navigation'
import Left from '$comps/Left.svelte'
import Right from '$comps/Right.svelte'
import { truncateStringAtWordBoundary } from '$lib'
// console.log($page.params)
// tags stuff
// import TumblrCard from '$comps/TumblrCard.svelte'
// import Modal from '$comps/Modal.svelte'
// import BlogPost from './post/[id]/+page.svelte'

// import { blogPostData } from '$lib'
// tag page files are moved to out-of-project folder
// import Tags from '$comps/Tags.svelte'
// import { ApiData } from '$lib/types'

export let data
// import data from './test-data-tumblr.json'
// console.log(data)

</script>
<Left reverseColor={true} > 
  <h1 slot="title" >
    Newberry Collection Stories
  </h1>
  <p>
    Learn more about digitized manuscripts, maps, books, photographs, video, artwork, and other rare and unique materials from <a href="https://collections.newberry.org/" target="_blank" class="llines" >Newberry Digital Collections</a>.
  </p>
</Left>
<Right>
  {#each data.cards as d, idx}
    <a href={d.tumblrurl} target="_blank" class="tumblr-card" id="card-{idx}" >
      <!-- <a on:click|preventDefault={(e) => showModal(e, d)} href={d.url} target="_blank" class="tumblr-card" id="card-{idx}" > -->
      <!-- <div class="liner" style="background-image: url('{d.image}');" /> -->
      <img class="liner" src={d.image} alt="" />
      <h2 >{@html d.title}</h2>
      <!-- <h2 >{truncateStringAtWordBoundary(d.title)}</h2> -->
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
      // background: rgba(var(--bg-color-1),0.77);
      box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
    & .liner {
      // transform: scale(2) translate(-25%, -25%);
      transform: scale(1.25);
      // background-size: 250%;
      // width: 200%;
      // height: 200%;
      // object-fit: none;
      // filter: blur(16px) saturate(180%);
    }
  }
}
.tumblr-card, .liner, h2 {
  transition: all 200ms ease-in-out;
}
.tumblr-card, h2 {
  border: 1px solid rgb(var(--fg-color-1));
}

.liner {
  transform: scale(1.15);
  object-fit: cover;
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  object-position: center;
  //   background-image: var(--backgroundImage);
  // background-position: 50% 25%;
  //   background-size: 100%;
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
