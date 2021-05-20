<script>
	import { createEventDispatcher } from 'svelte';
	// import { nodePositions } from '$lib/utility'

	export let isActive;
	export let position;
	// export let size = 0;

	const dispatch = createEventDispatcher();

	let isTop = false;
	let isMiddle = false;
	let isBottom = false;

	switch (position) {
		case 'top':
			isTop = true;
			break;
		case 'middle':
			isMiddle = true;
			break;
		case 'bottom':
			isBottom = true;
			break;
	}
	// console.log({ isTop }, { isMiddle }, { isBottom });
</script>

<nodeContainer class:isTop class:isMiddle class:isBottom on:click={() => dispatch('clicked')}>
	<svg width="20" height="20" version="1.1" viewBox="0 0 5.2917 5.2917" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
		<g transform="translate(0 -291.71)" stroke="#000" stroke-linecap="square">
			<ellipse id="dot" class:isActive cx="2.6458" cy="294.35" rx="1.2351" ry="1.2771" stroke-width=".2" style="paint-order:stroke fill markers" />
			<ellipse id="halo" class:isActive cx="2.6458" cy="294.35" rx="2.2654" ry="2.3423" fill="none" stroke-width=".2" style="paint-order:stroke fill markers" />
		</g>
	</svg>
</nodeContainer>

<style style lang="postcss">
	nodeContainer {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
	#dot {
		fill: black;
		&.isActive {
		}
	}
	#halo {
		stroke: black;
		display: none;
		&.isActive {
			display: inline;
		}
	}
	.isTop::before {
		content: '';
		position: absolute;
		top: 50%;
		left: calc(50% - 1px);
		border-left: 2px solid black;
		height: 100%;
		width: 5px;
	}
	.isMiddle::before {
		content: '';
		position: absolute;
		left: calc(50% - 1px);
		border-left: 2px solid black;
		height: 100%;
		width: 5px;
	}
	.isBottom::before {
		content: '';
		position: absolute;
		bottom: 50%;
		left: calc(50% - 1px);
		border-left: 2px solid black;
		height: 100%;
		width: 5px;
	}
</style>
