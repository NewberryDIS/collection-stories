<script lang="ts">
	export let data 
	import { blogPostData } from '$lib'
</script>

<div class="center">
	<!-- <img alt={data.image.alt} src={data.image.src} /> -->
	<div class="post">
    {@html $blogPostData.body}
    <!-- <pre>{JSON.stringify($blogPostData, null, 4)}</pre> -->
	</div>
</div>
	<style lang="scss">
	.post {
		max-width: 100%;
	}
		/* .center { */
		 	/* width: 100vw; */ 
		 	/* height: 100vh; */ 
		/* 	overflow: hidden; */
		/* 	background: #333; */
		/* 	color: #ccc; */
		/* } */
	</style>
