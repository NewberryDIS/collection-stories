<script lang="ts">
  import Card from "$comps/Card.svelte";
  import Left from "$comps/Left.svelte";
  import Right from "$comps/Right.svelte";
  import Ghost from "$comps/Ghost.svelte";
  import "$styles/animations.css";
  import "$styles/snow.css";

  export let data;
  const { cards } = data;

  $: console.log(cards);
</script>

<Ghost holiday="winter" />
<Left holiday="winter">
  <h1 slot="title">Newberry Winter Fest</h1>
  <div class="left-text">
    <p>
      As Chicago winter descends on the Newberry Library, we’re embracing this
      season with warm beverages and holiday lights. What better companion for
      cozy evenings at home than a peek into a frosty past? Here you can browse
      selections from{" "}
      <a
        href="https://collections.newberry.org/"
        class="llines"
        target="_blank"
      >
        Newberry Digital Collections
      </a>{" "}
      with centuries of letters, postcards, and art about the holiday season.
    </p>
    <p>
      Read Christmas cards from Ernest Hemingway, explore the evolution of the
      depiction of Santa, and learn how to say “Happy New Year” in multiple
      languages with vintage postcards. We'll be sharing more dives into these
      holiday items throughout the month at{" "}
      <a
        href="https://digitalnewberry.tumblr.com/"
        class="llines"
        target="_blank"
      >
        Digital Newberry on Tumblr
      </a>
      . Subscribe there or keep an eye on this page to get all of your latest Winter
      Fest updates!
    </p>
  </div>
</Left>
<Right holiday="winter">
  {#each cards as card, i}
    <!-- {#each cards as card, i} -->
    <Card data={card} idx={i} />
  {/each}
</Right>
