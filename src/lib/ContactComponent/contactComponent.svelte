<script>
	import { onMount } from 'svelte';
	import { addPageElement } from '$lib/utility';

	let contactPage;

	onMount(() => {
		addPageElement(contactPage, 'contact');
	});
</script>

<article id="contact" bind:this={contactPage}>
	<h1>Contact page!</h1>
</article>

<style style lang="postcss">
	article {
		background-color: rebeccapurple;
	}
</style>
