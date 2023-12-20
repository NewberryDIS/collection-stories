<script lang="ts">
  import '$styles/elevations.css'
  import '$styles/global.scss'
</script>
<main>
  <slot/>
</main>
<style lang="scss">

main {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 0;
  padding: 0;
}

</style>
