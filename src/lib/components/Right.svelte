<script lang="ts">
  import Background from '$comps/Background.svelte'
  import Arrow from '$comps/Arrow.svelte'
  import SourceButton from '$comps/SourceButton.svelte'
  import { sourceButtonData } from '$lib'
  import type { Holiday } from '$lib/types'
  export let holiday: Holiday = ''
</script>

<div class={`right ${holiday ?? ""}`}>
  {#if holiday }
    <Background holiday={holiday} />
  {/if}
  <slot name="outside-card-flow" />
  <div class="right-liner">
    {#if holiday}
      <SourceButton data={sourceButtonData[holiday]} /> 
      <Arrow />
    {/if}
    <div class="card-wrapper" >
      <slot />
    </div>
  </div>
</div>

<style>
.right {
  background: rgb(var(--bg-color-2));
  position: relative;
  flex: 3;
  padding: 0;
  overflow: visible;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  /* height: auto; */
}
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  gap: 20px;
  padding: 0 20px 77vh 20px;
}
.right:not(.halloween, .winter) .card-wrapper {
  padding-block: 7vh;
}
</style>
