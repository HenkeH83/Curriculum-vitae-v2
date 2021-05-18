<script>
	import { onMount } from 'svelte';
	import { addPageElement } from '$lib/utility';
	import EventComponent from './EventComponent.svelte';

	export let content;

	let timelineElement;

	onMount(() => {
		addPageElement(timelineElement, 'timeline');
	});
</script>

<article id="timeline" bind:this={timelineElement}>
	{#each content as lifeEvent}
		<EventComponent content={lifeEvent} position={'middle'} />
	{/each}
</article>

<style style lang="postcss">
	article {
		background-color: var(--light-green);
	}
</style>
