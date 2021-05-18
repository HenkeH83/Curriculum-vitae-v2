<script>
	import { onMount } from 'svelte';
	import { addPageElement } from '$lib/utility';

	let contactElement;

	onMount(() => {
		addPageElement(contactElement, 'contact');
	});
</script>

<article id="contact" bind:this={contactElement}>
	<h1>Contact page!</h1>
</article>

<style style lang="postcss">
	article {
		background-color: rebeccapurple;
		height: 100vh;
	}
</style>
