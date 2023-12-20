
<script lang="ts">
	export let modal: HTMLDialogElement, modalClose
</script>

<dialog bind:this={modal} on:close>
	<button on:click={modal.close() && modalClose}>x</button>
	<slot />
</dialog>

<style>
	dialog {
		width: 80%;
		margin: auto;
	}

	dialog::backdrop {
		background-color: hsl(0 0% 0% / 40%);
	}
</style>
