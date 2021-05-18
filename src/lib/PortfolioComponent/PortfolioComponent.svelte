<script>
	import { onMount } from 'svelte';
	import { addPageElement } from '$lib/utility';

	let portfollioElement;

	onMount(() => {
		addPageElement(portfollioElement, 'portfolio');
	});
</script>

<article id="portfolio" bind:this={portfollioElement}>
	<h1>Portfolio page!</h1>
</article>

<style style lang="postcss">
	article {
		background-color: royalblue;
		height: 100vh;
	}
</style>
