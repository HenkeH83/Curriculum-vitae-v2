<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { addPageElement, toHtml } from '$lib/utility';
	import Hacker from './Hacker.svelte';

	export let content;

	let aboutElement;

	onMount(() => {
		addPageElement(aboutElement, 'about');
	});
</script>

<article id="about" bind:this={aboutElement}>
	<h3>{content[0].title}</h3>
	<blockContainer>
		{@html toHtml(content[0])}
	</blockContainer>
	<hackerContainer>
		<Hacker />
	</hackerContainer>
</article>

<style style lang="postcss">
	article {
		margin-bottom: 5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		/* line-height: 1.2rem; */

		& h3 {
			margin-bottom: 1rem;
		}

		& blockContainer {
			padding-right: 1rem;
			margin-bottom: 3rem;
		}
	}

	@media only screen and (min-width: 1024px) {
		article {
			padding-right: 0rem;
			width: 63vw;
			display: grid;
			grid-template-columns: repeat(2, 1fr) 5rem 1fr;
			grid-template-rows: 2rem 1fr;

			& h3 {
				grid-column: 1 / span 3;
				grid-row: 1;
			}

			& blockContainer {
				grid-column: 1 / span 2;
				grid-row: 2;
			}

			& hackerContainer {
				grid-column: 4;
				grid-row: 2;
			}
		}
	}
</style>
