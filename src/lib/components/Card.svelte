<script lang="ts">
type Image = {
  width: number;
  height: number;
  altfn?: string;
  ctxid?: string;
};
type Data = {
  image: Image;
  title: string;
  blurb: string;
  view: string;
  about: string;
};

import { base } from '$app/paths'
export let data: Data, idx: number 
const { image, title, blurb, about, view } = data
const viewUrl = view.startsWith("http") 
  ? view
  : "https://collections.newberry.org/" + view;
const aboutDisabled = about.endsWith(']')

// $: console.log(data)
</script>

<div class="card-wings">
	<div class="card" id={`card-${idx}`}>
		<img src={image.altfn ? base + image.altfn : `https://collections.newberry.org/IIIF3/Image/${image.ctxid}/full/,400/0/default.jpg` }
		  alt=""
		/>
		<div class="card-text-section">
			<h2>{title}</h2>
			<p>{@html blurb}</p>
			<div class="btn-group">
				<a href={viewUrl} target="_blank" aria-label={`View the ${title}`}>View</a>
				{#if aboutDisabled}
          <div class="disabled">
          	<span class="about-link">About</span>
          	<span class="coming-soon">Coming soon!</span>
        	</div> 
        {:else}
						<a href={about} target="_blank" aria-label={`Read more about the ${title}`}>
							<span class="about-link">About</span>
						</a>
        {/if}
			</div>
		</div>
	</div>
</div>

<style>
.card-wings {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
}
.card {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: center;
	text-align: center;

	filter: drop-shadow(0 30px 10px rgba(var(--midnight),0.33));
	backdrop-filter: blur(16px) saturate(180%);
	background-color: rgba(var(--midnight), 0.33);
	border: 1px solid rgb(var(--granite), 0.33);
	border-radius: 10px;

	gap: 10px;
	padding: 33px;
	max-width: 400px;
}
img {
	object-fit: contain;
	max-width: 100%;
	max-height: 100%;
	margin: auto;
}
h2 {
	min-width: 0;
  font-size: clamp(30px, 5vh, 3rem);
  /* font-size: 3rem; */
  color: rgb(vaR(--midnight));
  text-shadow: 0 0 10px rgb(var(--splash-color)), 0 0 20px rgb(var(--splash-color)), 0 0 40px rgb(var(--splash-color)), 0 0 80px rgb(var(--splash-color));

}
.btn-group {
	width: 100%;
	display: flex;
	align-items: center;
	gap: 10px;
}
.btn-group a, .disabled {
	border-radius: 4px;
	flex: 1;
	font-family: "styrene";
	background: rgb(var(--bg-color-1));
	color: rgb(var(--fg-color-1));
	border: 1px solid rgba(var(--fg-color-1), 0.4);
	transition: 150ms;
}
.btn-group a:hover {
	border: 1px solid rgb(var(--fg-color-1))
}
.disabled {
	cursor: default;
	opacity: 0.5;
 	position: relative;
  background: rgba(var(--bg-color-1), 0.5);
}
.coming-soon {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.0001;
}
.coming-soon, .about-link {
  transition: 400ms;
}

.disabled:hover .about-link {
  opacity: 0.0001;
}
.disabled:hover .coming-soon {
  opacity: 0.9999;
}

</style>
