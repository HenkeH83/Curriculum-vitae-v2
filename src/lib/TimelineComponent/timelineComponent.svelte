<script>
	import { onMount } from 'svelte';
	import { addPageElement } from '$lib/utility';

	let timelinePage;

	onMount(() => {
		addPageElement(timelinePage, 'timeline');
	});
</script>

<article id="timeline" bind:this={timelinePage}>
	<h1>Timeline page!</h1>
</article>

<style style lang="postcss">
	article {
		background-color: khaki;
	}
</style>
