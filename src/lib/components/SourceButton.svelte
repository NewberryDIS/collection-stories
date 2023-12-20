<script lang="ts">
  type SourceButtonData = {
    data: {
      img: string;
      url: string;
      text: string[];
    }
  }

  import { base } from '$app/paths'

  export let data: SourceButtonData
  const { img, url, text } = data

  const bgimage =`url('${base}/${img}');`
  let show = false

</script>

<div class="source-button">
  <button id="qmark" on:click={() => show = !show} style={`background-image: ${bgimage}`}>
    ?
  </button>
    <p class:show id="qanswer">
      {text[0]}
      <em>
        {text[1]}
      </em>
      <a href={ url } class="rev-llines">View at the digital collections.</a>
      {text[2]}
    </p>
</div>

<style lang="scss">
.source-button {
  position: sticky;
  top: 0;
  right: 0;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;
  gap: 8px;
}
#qmark, #qanswer {
  padding: 0 12px;
  margin: 0;
  transition: opacity 150ms;
  color: rgba(var(--bg-color-1), 1);
}
#qmark {
  opacity: 0.7;
  height: 46px;
  width: 50px;
  font-size: 24px;
  border: 0;
  background: none;
  background-size: contain;
  background-repeat: no-repeat;
}
#qanswer {
  background: rgba(var(--fg-color-1), 1);
  border: 1px solid rgba(var(--bg-color-1), 1);
  font-size: 0.77rem;
  opacity: 0.0001;
  max-width: 200px;
}
#qmark:hover ,#qmark:hover~#qanswer, #qanswer:hover, #qanswer.show {
  opacity: 0.99;
}
.rev-llines {
  color: inherit !important;
  font-weight: 700;
  line-height: 1rem;
  text-decoration: none;
  background: linear-gradient(
      to right,
      rgba(var(--bg-color-1), 0.3),
      rgba(var(--bg-color-1), 0.3)
    ),
    linear-gradient(
      to right,
      rgba(var(--bg-color-1), 1),
      rgba(var(--bg-color-1), 1)
    );
  background-size:
    100% 0.1rem,
    0 0.1rem;
  background-position:
    100% 100%,
    0 100%;
  background-repeat: no-repeat;
  transition: background-size 300ms;
}

.rev-llines:hover,
.rev-llines:focus {
  background-size:
    0 0.1rem,
    100% 0.1rem;
}
</style>
