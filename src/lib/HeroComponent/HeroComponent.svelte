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
			<h1>Fullstack frontend developer</h1>
			<h2>With a passion for great <span>design</span></h2>
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
		left: -13.5vw;
		overflow: hidden;
	}
	colorBox {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--light-green);

		display: grid;
		grid-template-columns: 1.5rem 1fr 2rem;
		grid-template-rows: 2rem 1fr 1fr 30%;

		line-height: 2.1rem;
		letter-spacing: 0.3rem;

		animation: dropIn 0.9s ease-out 1;
		/* animation-delay: 1s; */

		text-align: end;

		& h1 {
			grid-column: 2;
			grid-row: 2;

			/* text-align: center; */
			text-transform: uppercase;
			font-size: 2rem;
		}

		& h2 {
			grid-column: 2;
			grid-row: 3;

			font-size: 1.2rem;

			& span {
				/* background-image: linear-gradient(yellow, blue); TODO: Lämnar detta här ifall svg bakgrund blir aktuellt */
			}
		}
	}

	@keyframes dropIn {
		from {
			line-height: 0rem;
		}
		to {
			line-height: 2.1rem;
		}
	}

	/* Ifall vi vill hantera den dåliga landscape layouten i mobil, funkar inte riktigt just nu. 
	@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
		html {
			transform: rotate(-90deg);
			transform-origin: left top;
			width: 100vh;
			overflow-x: hidden;
			position: absolute;
			top: 100%;
			left: 0;
		}
	} */

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
