
<script lang="ts">
  import Card from '$comps/Card.svelte'
  import Left from '$comps/Left.svelte'
  import Right from '$comps/Right.svelte'
  import Ghost from '$comps/Ghost.svelte'
  import '$styles/animations.css'
  import '$styles/snow.css'
  import '$styles/words.css'
  
  export let data
  const { cards } = data

  // $: console.log(cards[1])
</script>

  <Ghost holiday="winter" />
  <Left holiday="transc">
    <h1 slot="title" >
      Newberry Transcribe 
    </h1>
    <div class="left-text" >
      <p>
        As Newberry Transcribe descends on the Newberry Library, we’re embracing
        this transcription with warm diaries and cheerful letters. What better
        companion for cozy evenings at home than a peek into another person's diary?
        Here you can browse selections from{" "}
        <a
          href="https://collections.newberry.org/"
          class="llines"
          target="_blank"
        >
          Newberry Digital Collections
        </a>{" "}
        with centuries of letters, postcards, and art about the transcription 
        season.
      </p>
      <p>
        Read transcriptions from Becca2, explore the evolution of
        the transcriptions' correctness, and learn how to say “No Thank You” in
        cursive. We'll be sharing more transcriptions as you get off your butt and do them.      </p>
    </div>
  </Left>
	<Right holiday="transc">
    {#each cards as card, i}
    <!-- {#each cards as card, i} -->
       <Card data={card} idx={i} />
    {/each}
	</Right>
