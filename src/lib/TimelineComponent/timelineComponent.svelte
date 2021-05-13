<script>
	import { onMount } from 'svelte';
	import { addPageElement } from '$lib/utility';

	export let content;

	let timelinePage;

	onMount(() => {
		addPageElement(timelinePage, 'timeline');
	});
</script>

<article id="timeline" bind:this={timelinePage}>
	{#each content as post}
		<h1>{post.title}</h1>
	{/each}
</article>

<style style lang="postcss">
	article {
		background-color: khaki;
	}
</style>
