<script>
	import { onMount } from 'svelte';
	import { addPageElement } from '$lib/utility';

	let portfollioPage;

	onMount(() => {
		addPageElement(portfollioPage, 'portfolio');
	});
</script>

<article id="portfolio" bind:this={portfollioPage}>
	<h1>Portfolio page!</h1>
</article>

<style style lang="postcss">
	article {
		background-color: royalblue;
	}
</style>
