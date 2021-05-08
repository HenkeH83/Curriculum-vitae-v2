<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { addPageElement } from '$lib/utility';

	let homeElement;

	onMount(() => {
		addPageElement(homeElement, 'home');
	});
</script>

<article id="home" bind:this={homeElement}>
	<h1>Landing page!</h1>
</article>

<style style lang="postcss">
	article {
		background-color: yellowgreen;
	}
</style>
