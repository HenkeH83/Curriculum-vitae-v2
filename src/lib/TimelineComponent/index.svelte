<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { addPageElement, getNodePosition } from '$lib/utility';
	import EventComponent from './EventComponent.svelte';

	export let content;

	let timelineElement;
	// $: console.log(content);

	onMount(() => {
		addPageElement(timelineElement, 'timeline');
	});
</script>

<article id="timeline" bind:this={timelineElement}>
	{#each content as lifeEvent, index}
		<EventComponent content={lifeEvent} position={getNodePosition(content, index)} />
	{/each}
</article>

<style style lang="postcss">
	article {
		margin-bottom: 3rem;
	}
</style>
