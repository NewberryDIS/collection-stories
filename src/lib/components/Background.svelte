<script>
  import { base } from '$app/paths'
export let holiday

// halloween and winter images are declared here; 
// in the html section below, if holiday isn't one of those 2, there's no <img> at all
const topImage = holiday === 'halloween' ? '/scary-newberry.webp' : '/wintry-newberry.webp'  
</script>

<div class={holiday + ' background'}>
  <div class="background-top">
    {#if holiday}
      <img src={base + topImage} alt="" /> 
    {/if}
  </div>
  <div class="background-middle">
    {#if 'winter' === holiday}
      {#each Array.from({length: 199}) as _, i}
        <div class={`snow sno-${Math.floor(i / 50)}`}>
          <img src={`${base}/snow/snowflake-${i % 6 + 1}.webp`} alt="">
        </div>
      {/each}
    {:else}
      <span></span>
    {/if}
  </div>
  <div class="background-bottom">
    {#if 'halloween' === holiday}
      <img src="{base}/spooky-newberry.webp" alt="" />
    {:else}
      <span></span>
    {/if}
  </div>
</div>

<style>
.background {
  grid-area: 1 / 1 / 2 / 2;
  position: absolute;
  overflow: hidden;
  pointer-events: none;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}
.background-top {
  position: fixed;
  top: 0;
  /* width: 100%; <--- media query, below */
}
.background-top img {
  position: relative;
  width: 100%;
  height: 100vh;
}
.background-middle {
  height: 100%;
  width: 100%;
  flex: 1 1 0%;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60vh, rgba(var(--bg-color-2),1) 85%, rgba(var(--bg-color-2),1) 100%);
}
.background-bottom {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  background: rgba(var(--bg-color-2), 1);
}
.background-bottom img {
  width: 100%;
  /* height: 100vh; */
}
img {
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  margin: 0;
}
@media screen and (max-width: 1023px){
  .background-top {
    width: 100%;
  }
}
@media screen and (min-width: 1024px){
  .background-top {
    width: 80%;
  }
}
/* snow specific mq */
/* .sno-0 is always visible */
@media screen and (max-width: 767px) {
  .sno-1, .sno-2, .sno-3 {
    display: none;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .sno-1 {
    display: block;
  }
  .sno-2, .sno-3 {
    display: none;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1333px) {
  .sno-1, .sno-2 {
    display: block;
  }
  .sno-3 {
    display: none;
  }
}
@media screen and (min-width: 1333px) {
  .sno-1, .sno-2, .sno-3 {
    display: block;
  }
}
</style>
