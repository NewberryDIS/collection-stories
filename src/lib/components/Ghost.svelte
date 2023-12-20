<script lang="ts">
  import type { Holiday } from '$lib/types'
  export let holiday: Holiday

  let showNzo = false

  function toggleNzo () {
    showNzo = true
    setTimeout(() => {
      showNzo = false
    }, 10000);
  }

</script>

<div class={`${holiday} ghost`} class:showNzo id="ghost" >
  <div class="nzo"><img src='/ghostyboy.webp' alt=""></div>
  {#if holiday === 'winter'}
    <div class="ball">
      <img src="/ghostyball.webp" alt="" />
    </div>
  {/if}
</div>

{#if holiday === 'winter'}
  <button class:nzo-active={showNzo} id="snowflake-button" on:click={toggleNzo}>
    <img src="/snow/snowflake-3.webp" alt="" />
  </button> 
{/if}

<style>
.ghost {
  pointer-events: none;
  height: 200px;
  right: 0;
  left: 0;
  position: fixed;
}
.winter.ghost:not(.showNzo){
  display: none;
}
.winter {
  bottom: 33px;
}
.halloween {
  top: 200px;
}
.nzo, .ball img {
  transform: translateZ(0);
}
.nzo, .ball {
  position: relative;
}
.halloween .nzo {
  animation: spookynzo 10s ease infinite;
}
.winter .nzo {
  animation: winterghost 10s ease-in-out infinite;
}
.winter .ball {
  position: relative;
  bottom: 483px;

}
.winter .ball img {
  position: relative;
  animation: wintersnowball 10s ease-out infinite;
}
.showNzo {
  display: block !important;
}
#snowflake-button {
  opacity: 0.77;
  pointer-events: all;
  position: fixed;
  bottom: 3px;
  right: 3px;
  filter: invert(0);
  background: transparent;
  border: 0;
  transition:  400ms;
}
#snowflake-button:hover {
  filter: invert(1);
}
#snowflake-button.nzo-active {
  transition: 400ms;
  filter: invert(0.77);
}
</style>
