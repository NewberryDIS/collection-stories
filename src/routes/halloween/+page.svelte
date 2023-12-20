<script lang="ts">
  // import {onMount} from 'svelte'
  
import Card from '$comps/Card.svelte';
import Left from '$comps/Left.svelte'
import Right from '$comps/Right.svelte'
import Ghost from '$comps/Ghost.svelte'
// import SourceButton from '$comps/SourceButton.svelte'
import { hallodata } from '$lib'
// import data from '../demodata-holiday.json'
import '$styles/animations.css'

// const mei = "2KXGDNLSJ6C"
// const doodoo = await getData(mei)
// const data = doodoo.length > 0 ? doodoo : hallodata

const data = hallodata

</script>

  <Ghost holiday="halloween" />
  <Left holiday="halloween">
    <h1 slot="title" >
      A Very Newberry Halloween 
    </h1>
    <div class="left-text" >
      <p>
        The Newberry Library, like any building from the 1800s that is full of books, is haunted. Can’t come to Chicago to experience the spirits yourself? We’ll bring the spooky to you with highlights from <a href="https://collections.newberry.org/" target="_blank" class="llines">Newberry Digital Collections</a>. Featured here is everything you need for Halloween, from a 17th century spell book to 20th century postcards. (The Newberry is not liable for anyone who chooses to use the spell book to summon their own ghosts, ghouls, or goblins.)
      </p>
      <p>
        Browse our Halloween selection, learn about the history of different items, and grab some vintage postcards to send to your friends – or to color in your own versions. Check this page throughout the month or follow <a href="https://www.tumblr.com/digitalnewberry" target="_blank" class="llines">Digital Newberry on Tumblr</a> to get all your spooky season updates.
      </p>
    </div>
  </Left>
	<Right holiday="halloween">
    {#each data as d, i}
      <Card data={d} idx={i} />
    {/each}
	</Right>

<style>

</style>
