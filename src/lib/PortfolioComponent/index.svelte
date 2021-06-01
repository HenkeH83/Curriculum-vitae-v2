<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { addPageElement } from '$lib/utility';
	import PortfolioItem from './portfolioItem.svelte';

	export let content;

	let portfollioElement;

	onMount(() => {
		addPageElement(portfollioElement, 'portfolio');
	});
</script>

<article id="portfolio" bind:this={portfollioElement}>
	{#each content as post}
		<PortfolioItem content={post} />
	{/each}
</article>

<style style lang="postcss">
	article {
		/* width: 80vw; */
	}
</style>
