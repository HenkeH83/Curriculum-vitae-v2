<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { addPageElement } from '$lib/utility';
	import { windowWidth } from '$lib/store';

	let homeElement;

	onMount(() => {
		addPageElement(homeElement, 'home');
	});
</script>

<article id="home" bind:this={homeElement}>
	<heroContainer>
		{#if $windowWidth > 900}
			<img in:fade={{ delay: 200, x: 500, duration: 500 }} src="/fullHero.svg" alt="Henrik" />
		{:else}
			<img in:fade={{ delay: 200, x: 500, duration: 500 }} src="/halfHero.svg" alt="Henrik" />
		{/if}
		<colorBox in:fly={{ x: -500, duration: 500 }}>
			<h1>Hej</h1>
			<p>Jag är grym</p>
		</colorBox>
	</heroContainer>
</article>

<style style lang="postcss">
	article {
		display: flex;
		align-items: center;
	}
	heroContainer {
		width: 100%;
		height: 75%;
		margin-top: 3vh;
		position: relative;
	}
	img {
		z-index: 1;
		height: 45vh;
		position: absolute;
		bottom: 0;
		left: -12.5vw;
		overflow: hidden;
	}
	colorBox {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--light-green);
		text-align: end;
		font-size: 2rem;
	}
	@media only screen and (min-width: 900px) {
		article {
			width: 85vw;
			justify-content: center;
		}
		heroContainer {
			position: unset;
			margin-top: unset;
			width: unset;
			height: undet;
			display: flex;
			align-items: flex-end;
			transform: translateX(-11%);
		}
		img {
			position: unset;
			height: 75vh;
			transform: translateX(51%);
		}
		colorBox {
			position: unset;
			height: 75vh;
			width: 63vw;
			font-size: 5rem;
		}
	}
</style>
