<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { addPageElement, toHtml } from '$lib/utility';

	export let content;

	let aboutElement;

	onMount(() => {
		addPageElement(aboutElement, 'about');
	});
</script>

<article id="about" bind:this={aboutElement}>
	<h3>{content[0].title}</h3>
	<blockContainer>
		{@html toHtml(content[0])}
	</blockContainer>
</article>

<style style lang="postcss">
	article {
		margin-bottom: 5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		/* line-height: 1.2rem; */

		& h3 {
			margin-bottom: 1rem;
		}

		& blockContainer {
			padding-right: 1rem;
		}
	}

	@media only screen and (min-width: 1024px) {
		article {
			padding-right: 0rem;
		}
	}
</style>
