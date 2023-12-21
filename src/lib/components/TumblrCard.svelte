<script lang="ts">
export let data, idx
const { title, image, url, tags } = data
const backgroundImage = `url('${image}');`
</script>

<a href={url} target="_blank" class="tumblr-card" id={`card-${idx}`}>
  <div class="liner" style={`background-image: ${backgroundImage};`} />
  <h2 >{@html title}</h2>
</a>

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
      background: rgba(var(--bg-color-1),0.77);
      box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
    & .liner {
      filter: blur(16px) saturate(180%);
    }
  }
}
.tumblr-card, .liner, h2 {
  transition: all 200ms ease-in-out;
}
.tumblr-card, h2 {
  border: 1px solid rgb(var(--bg-color-1));
}
.liner {
  background-image: var(--backgroundImage);
  background-position: 50% 25%;
  background-size: cover;
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
