<script>
	import { onMount } from 'svelte';
	import { addPageElement, toHtml } from '$lib/utility';

	export let content;

	let portfollioElement;

	onMount(() => {
		addPageElement(portfollioElement, 'portfolio');
	});
</script>

<article id="portfolio" bind:this={portfollioElement}>
	{#each content as post}
		<a href={post.link}>{post.title}</a>
		{@html toHtml(post)}
	{/each}
</article>

<style style lang="postcss">
	article {
		background-color: royalblue;
		height: 100vh;
	}
</style>
