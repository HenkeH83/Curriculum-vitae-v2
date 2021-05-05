<script>
	import { fly } from 'svelte/transition';
	import { homePage } from '$lib/store';
</script>

<article bind:this={$homePage}>
	<h1>Landing page!</h1>
</article>

<style style lang="postcss">
	article {
		background-color: yellowgreen;
	}
</style>
