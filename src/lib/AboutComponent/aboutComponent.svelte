<script>
	import { onMount } from 'svelte';
	import { addPageElement } from '$lib/utility';

	export let content;

	let aboutPage;

	onMount(() => {
		addPageElement(aboutPage, 'about');
	});
</script>

<article id="about" bind:this={aboutPage}>
	<h2>{content[0].title}</h2>
</article>

<style style lang="postcss">
	article {
		background-color: aqua;
	}
</style>
