<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { toHtml } from '$lib/utility';
	import { urlFor } from '$lib/sanity-client';

	export let content;
	export let isActive = false;

	let isVisible = false;
	let wrappingElement = null;
	let isFirst = false;

	function activateCard() {
		isActive = !isActive;
	}

	function setupObserver() {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						if (entries.intersectionRatio >= 1) {
							isFirst = false;
							observer.unobserve(wrappingElement);
						}
					}
				});
			},
			{
				root: Document.body,
				rootMargin: '0px',
				threshold: 0.5
			}
		);
		observer.observe(wrappingElement);
	}

	onMount(() => {
		if (!isActive) {
			isFirst = true;
			setupObserver();
		} else {
			isVisible = true;
		}
	});
</script>

<wrapper bind:this={wrappingElement}>
	{#if isVisible}
		<card class:isActive class:isFirst on:click={activateCard}>
			<img src={urlFor(content.icon).width(100).auto('format').url()} alt={content.alt} />
			<bodyContainer class="[ collapseableText ]" class:isActive>
				<h2>{content.skill}</h2>
				{@html toHtml(content)}
			</bodyContainer>
		</card>
	{/if}
</wrapper>

<style style lang="postcss">
	wrapper {
		width: 100%;
		height: 100%;
	}
	card {
		width: 100%;
		height: 100%;

		display: grid;
		grid-template-columns: 1rem 1fr 1rem;
		grid-template-rows: 1rem 50vw repeat(2, auto) 1rem;

		color: white;
		border-radius: 15px;
		background-color: var(--dark-blue);
		box-shadow: -2px -2px 6px 2px rgb(66, 69, 85);
		transition: all 0.3s ease-out;
		animation: boopUp 0.3s 1;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			bottom: 1rem;
			right: 1.5rem;
			width: 1rem;
			height: 1rem;
			border-right: 2px solid white;
			transform-origin: center;
			transition: all 0.3s ease-out;
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 1.5rem;
			right: 1rem;
			width: 1rem;
			height: 1rem;
			border-right: 2px solid white;
			transform: rotate(90deg);
			transform-origin: center;
			transition: all 0.3s ease-out;
		}

		&.isFirst {
			animation: slide 0.5s 1;
			animation-timing-function: ease-out;
		}

		&.isActive {
			box-shadow: -5px -5px 6px 2px rgb(85, 88, 104);
			animation: boopDown 0.3s 1;
			height: auto;
		}

		&.isActive::before {
			bottom: 1.4rem;
			right: 1.4rem;

			transform: rotate(45deg);
		}
		&.isActive::after {
			bottom: 1.4rem;
			right: 0.7rem;

			transform: rotate(135deg);
		}

		& img {
			grid-column: 2;
			grid-row: 2;
			align-self: center;
			justify-self: center;
			margin-bottom: -1rem;
		}

		& bodyContainer {
			grid-column: 2;
			grid-row: 4;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;

			& h2 {
				grid-column: 2;
				grid-row: 3;
				font-size: 1.3rem;
				margin-bottom: 1rem;
				align-self: center;
				border-bottom: 2px solid white;
			}

			&.isActive {
				padding: 1rem;

				& h2 {
					padding-bottom: 1rem;
				}
			}
		}
	}

	@media only screen and (min-width: 1024px) {
		card {
			grid-template-rows: 1rem 200px 1rem;
			grid-template-columns: 1rem 200px repeat(5, 1fr);
			transform: all 0.5s ease-out;
			animation: none;

			&.isActive {
				width: 60vw;
				animation: none;

				& img {
					margin-right: -1rem;
					margin-bottom: 0;
				}
			}

			& img {
				margin-right: -2rem;
			}

			& bodyContainer {
				display: none;

				&.isActive {
					display: inline;
					grid-column: 4 / span 3;
					grid-row: 2;
				}

				& h2 {
					align-self: start;
				}
			}
		}
	}

	@keyframes boopDown {
		0% {
			transform: scale(1);
			box-shadow: -2px -2px 6px 2px rgb(66, 69, 85);
			animation-timing-function: ease-out;
		}
		30% {
			background-color: hsl(230, 28%, 13%);
			transform: scale(0.9);
			box-shadow: -1px -1px 6px 2px rgb(85, 88, 104);
			animation-timing-function: ease-in;
		}
		100% {
			transform: scale(1);
			box-shadow: -5px -5px 6px 2px rgb(85, 88, 104);
			animation-timing-function: ease-out;
		}
	}
	@keyframes boopUp {
		0% {
			transform: scale(1);
			box-shadow: -5px -5px 6px 2px rgb(85, 88, 104);
			animation-timing-function: ease-out;
		}
		30% {
			background-color: hsl(229, 14%, 30%);
			transform: scale(1.1);
			box-shadow: -7px -7px 6px 2px rgb(85, 88, 104);
			animation-timing-function: ease-in;
		}
		100% {
			transform: scale(1);
			box-shadow: -2px -2px 6px 2px rgb(66, 69, 85);
			animation-timing-function: ease-out;
		}
	}
	@keyframes slide {
		from {
			transform: translateY(8rem);
		}
		to {
			transform: translateY(0);
		}
	}
</style>
