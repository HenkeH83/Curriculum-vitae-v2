<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { addPageElement } from '$lib/utility';
	import SkillsItem from './SkillsItem.svelte';
	import { windowWidth } from '$lib/store';
	import { send, receive } from '$lib/crossfade';

	export let content;

	let activeList = [];
	let cardList = [];
	let skillsElement;
	let isActive = true;

	function addActive(item) {
		if ($windowWidth < 1024) return;
		cardList = cardList.filter((card) => card._id != item._id);
		activeList = activeList.concat(item).sort((a, b) => a.order - b.order);
	}

	function removeActive(item) {
		console.log('item', { item });
		activeList = activeList.filter((card) => card._id != item._id);
		cardList = cardList.concat(item).sort((a, b) => a.order - b.order);
	}

	onMount(() => {
		addPageElement(skillsElement, 'skills');
		cardList = content;
	});
</script>

<article id="skills" bind:this={skillsElement}>
	{#if $windowWidth >= 1024}
		<listContainer>
			{#each activeList as active, index (active._id)}
				<skillWrapper class:isActive id={active._id} on:click={removeActive(active)} in:receive={{ key: active._id }} out:send={{ key: active._id }} animate:flip={{ duration: 800 }}>
					<SkillsItem content={active} isActive={true} />
				</skillWrapper>
			{/each}
		</listContainer>
	{/if}
	<listContainer>
		{#each cardList as skill, index (skill._id)}
			<skillWrapper id={skill._id} on:click={addActive(skill)} in:receive={{ key: skill._id }} out:send={{ key: skill._id }} animate:flip={{ duration: 800 }}>
				<SkillsItem content={skill} />
			</skillWrapper>
		{/each}
	</listContainer>
</article>

<style style lang="postcss">
	article {
		width: 100%;
		margin-bottom: 3rem;

		& listContainer {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 2rem;

			& skillWrapper {
				width: 60vw;
				min-height: 60vw;
				margin-bottom: 1rem;
				cursor: pointer;
			}
		}
	}
	@media only screen and (min-width: 1024px) {
		article {
			width: 60vw;

			& listContainer {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
				grid-template-rows: auto;
				gap: 2rem;

				& skillWrapper {
					margin-bottom: 0;
					width: 16rem;
					min-height: unset;
					height: 16rem;

					&.isActive {
						grid-column: 1 / -1;
					}
				}
			}
		}
	}
</style>
