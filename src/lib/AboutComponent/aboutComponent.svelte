<script>
	import { onMount } from 'svelte';
	import { addPageElement } from '$lib/utility';

	let aboutPage;

	onMount(() => {
		addPageElement(aboutPage, 'about');
	});
</script>

<article id="about" bind:this={aboutPage}>
	<h2>About</h2>
</article>

<style style lang="postcss">
	article {
		background-color: aqua;
	}
</style>
