<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { addPageElement } from '$lib/utility';
	import SkillsItem from './SkillsItem.svelte';

	export let content;

	let skillsElement;
	onMount(() => {
		addPageElement(skillsElement, 'skills');
	});
</script>

<article id="skills" bind:this={skillsElement}>
	{#each content as skill, index}
		<SkillsItem content={skill} />
	{/each}
</article>

<style style lang="postcss">
	article {
		width: 100%;
		margin-bottom: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* background-color: var(--light-blue); */
	}
</style>
