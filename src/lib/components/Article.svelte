<script>
  export let data
  console.log(data)
  import {browser} from '$app/environment'

  let modifiedHtmlString, doc
  if (browser){

const parser = new DOMParser();
 doc = parser.parseFromString(data.body, 'text/html');
// Find all <a> elements
const links = doc.querySelectorAll('a');

// Modify the target attribute for each link
links.forEach(link => {
  link.setAttribute('target', '_blank');
});

// Get the modified HTML string
 modifiedHtmlString = doc.documentElement.innerHTML;
  }
</script>
<article>

<svelte:component this={doc} />
  <!-- {@html modifiedHtmlString} -->
  <!-- {@html data.body} -->
</article>

<style lang="scss">
  article {
    width: 80vw;
    height: 90vh;
    padding: 2vh 2vw;
    background: rgb(var(--bg-color-1));
    background-attachment: fixed;
    border: 1px solid var(--fg-color-1);
    overflow: auto;
  }
  :global(article * ) {
    max-width: 100%;
  }
  @media screen and (max-width: 1023px){
    article {
      width: 80vw;
    }
  }
  @media screen and (min-width: 1024px){
    article {
      width: 50vw;
    }
  }
</style>
