<script>
	import { onMount } from 'svelte';
	import { addPageElement, toHtml } from '$lib/utility';

	export let content;

	let skillsElement;
	$: console.log(content);
	onMount(() => {
		addPageElement(skillsElement, 'skills');
	});
</script>

<article id="skills" bind:this={skillsElement}>
	{#each content as skill}
		<h2>{skill.skill}</h2>
		<!-- <p>{skill.level.skillLevel}</p> -->
		{@html toHtml(skill)}
	{/each}
</article>

<style style lang="postcss">
	article {
		height: 100vh;
		background-color: violet;
	}
</style>
