<script>
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Node from '$lib/Node/index.svelte';
	import { toHtml } from '$lib/utility';

	export let content;
	export let position;

	let isActive = false;
	// Inte jättesnygga att casta om så mycket
	function stringToDate(stringDate) {
		const d = new Date(stringDate);
		const s = d.toDateString();
		const res = s.substring(4, 8) + s.substring(11, 16);
		return res;
	}
	function toggleIsActive() {
		isActive = !isActive;
	}
</script>

<eventContainer on:click={toggleIsActive}>
	<nodeContainer>
		<Node {isActive} {position} />
	</nodeContainer>
	<transparentDiv class:isActive />
	{#if position === 'top'}
		<p id="date">{stringToDate(content.startDate)}</p>
	{:else}
		<p id="date">{stringToDate(content.startDate)} - {stringToDate(content.endDate)}</p>
	{/if}
	<h3 id="title" class="header" class:isActive>{content.title}</h3>
	<p id="subTitle" class="header" class:isActive>{content.organization}, {content.location}</p>
	<blockContainer class:isActive>
		{@html toHtml(content)}
	</blockContainer>
</eventContainer>

<style style lang="postcss">
	eventContainer {
		display: grid;
		grid-template-columns: 0.5rem 1fr 6fr 0.5rem;
		grid-template-rows: 1rem repeat(4, auto) 1rem;
	}
	nodeContainer {
		grid-column: 2;
		grid-row: 1 / span 6;
	}
	transparentDiv {
		grid-column: 2 / span 2;
		grid-row: 2 / span 4;
		z-index: 2;
		background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.26) 70%, white 90%);

		&.isActive {
			display: none;
		}
	}
	.header {
		overflow: hidden;
		white-space: nowrap;
		&.isActive {
			overflow: unset;
			white-space: unset;
		}
	}
	#date {
		grid-column: 3;
		grid-row: 2;
		font-size: 0.6rem;
	}
	#title {
		grid-column: 3;
		grid-row: 3;
		font-size: 1.2rem;
	}
	#subTitle {
		grid-column: 3;
		grid-row: 4;
		font-size: 0.8rem;
		line-height: 1rem;

		&.isActive {
			overflow: unset;
			white-space: unset;
		}
	}
	blockContainer {
		grid-column: 3;
		grid-row: 5;
		line-height: 0rem;
		opacity: 0;
		animation: dropOutMobile 0.3s linear 1;
		&.isActive {
			line-height: 1.2rem;
			opacity: 1;
			/* font-size: 0.8rem; */
			margin-top: 1rem;
			animation: dropInMobile 0.3s linear 1;
		}
	}

	@keyframes dropInMobile {
		from {
			line-height: 0rem;
			opacity: 0;
		}
		to {
			line-height: 1.2rem;
			opacity: 1;
		}
	}
	@keyframes dropOutMobile {
		from {
			line-height: 1.2rem;
			opacity: 1;
		}
		to {
			line-height: 0rem;
			opacity: 0;
		}
	}

	/* @media only screen and (min-width: 900px) {
		evenContainer {
			grid-template-columns: 1fr 2fr 1fr 5fr 5fr;
		}
		nodeContainer {
			grid-column: 3;
			grid-row: 1 / span 4;
		}
		#date {
			grid-column: 2;
			grid-row: 1;
		}
		#title {
			grid-column: 4;
			grid-row: 1;

			font-size: 1.3rem;
		}
		#subTitle {
			grid-column: 4;
			grid-row: 2;
		}
	} */
</style>
