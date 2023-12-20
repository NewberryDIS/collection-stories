<script lang="ts">
  import NewberryLogo from '$comps/NewberryLogo.svelte'
  export let holiday: import('$lib/types').Holiday
</script>

<div class="left {holiday}" >
  <NewberryLogo />
  <slot name="title" />
  <slot />
  <footer>
    <a href="https://www.newberry.org/contact-librarian" target="_blank">Contact Us</a>
  </footer>
</div>
<style lang="scss">

.left {
  background-color: rgb(var(--bg-color-1));
  color: rgb(var(--fg-color-1));
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  max-height: 100%;
}
:global(.left-text){
  overflow: auto;
  font-size: 1.125rem;
}

:global(.left h1) {
  padding: 56px 0 0 0;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
}

.left footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 24px;
  background-color: rgba(var(--fg-color-1), 0.77);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 250ms;
  &:hover {
    background-color: rgba(var(--fg-color-2), 1);
  }
  & a {
    padding: 0 8px;
    font-family: 'styrene';
    font-size: 14px;
    line-height: 14px;
    color: rgb(var(--bg-color-1));
  }
}

/* sm */
@media screen and (max-width: 767px) {
  .left {
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
  }
}

/* med */
@media screen and (max-width: 1023px){
  .left {
    flex: 0;
    height: auto;
    position: relative;
    padding: 16px 16px 32px 16px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px){
  .left {
    flex-direction: row;
    justify-content: flex-end;
    align-items: end;
    gap: 16px;
  }
}

/* lg */
@media screen and (min-width: 1024px){
  .left {
    height: 100vh;
    flex-direction: column;
    position: sticky;
    padding: 16px 16px 24px 16px;
    flex: 1 1 0%;
    justify-content: center;
    align-items: stretch;
  }
}
</style>
