<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { bounceInOut } from 'svelte/easing';
	import { pages, windowWidth } from '$lib/store';
	import { scrollInto } from '$lib/utility';
	import Node from '$lib/Node/index.svelte';
	import Arrow from '$lib/Navbar/Arrow.svelte';

	let currentPage = 'home';
	let isTouchScreen = false;
	let openMobile = false;
	let navElement;
	let elementList;
	let startX;
	let endX;

	// Kanske optimera denna lite
	$: if ($pages != null && Object.keys($pages).length >= 5) {
		const {
			home: { element: homeElement },
			about: { element: aboutElement },
			skills: { element: skillsElement },
			timeline: { element: timelineElement },
			portfolio: { element: portfolioElement }
			// contact: { element: contactElement }
		} = $pages;

		elementList = [homeElement, aboutElement, skillsElement, timelineElement, portfolioElement /* , contactElement */];

		const options = {
			rootMargin: '0px',
			threshold: 0.25
		};
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					currentPage = entry.target.id;
				}
			});
		}, options);

		elementList.forEach((element) => {
			observer.observe(element);
		});
	}

	// function scrollInto(page) {
	// 	const scrollOptions = {
	// 		behavior: 'smooth',
	// 		block: 'start',
	// 		inline: 'start'
	// 	};
	// 	page.scrollIntoView(scrollOptions);
	// }
	function startTuch(event) {
		startX = event.changedTouches[0].pageX;
	}
	function endTuch(event) {
		endX = event.changedTouches[0].pageX;
		if (endX - 30 < startX) {
			openMobile = true;
		} else if (endX + 30 > startX) {
			openMobile = false;
		}
	}
	onMount(() => {
		isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints;
		navElement.addEventListener('touchstart', (e) => startTuch(e), false);
		navElement.addEventListener('touchend', (e) => endTuch(e), false);
	});
</script>

<nav class:isTouchScreen class:openMobile bind:this={navElement}>
	<gridContainer>
		<Node isActive={currentPage === 'home'} position={'top'} on:clicked={scrollInto($pages.home.element)} />
		<btn on:click={scrollInto($pages.home.element)}><h3>Home</h3></btn>
		<Node isActive={currentPage === 'about'} position={'middle'} on:clicked={scrollInto($pages.about.element)} />
		<btn on:click={scrollInto($pages.about.element)}><h3>About</h3></btn>
		<Node isActive={currentPage === 'skills'} position={'middle'} on:clicked={scrollInto($pages.skills.element)} />
		<btn on:click={scrollInto($pages.skills.element)}><h3>Skills</h3></btn>
		<Node isActive={currentPage === 'timeline'} position={'middle'} on:clicked={scrollInto($pages.timeline.element)} />
		<btn on:click={scrollInto($pages.timeline.element)}><h3>Timeline</h3></btn>
		<Node isActive={currentPage === 'portfolio'} position={'bottom'} on:clicked={scrollInto($pages.portfolio.element)} />
		<btn on:click={scrollInto($pages.portfolio.element)}><h3>Portfolio</h3></btn>
		<!-- <Node isActive={currentPage === 'contact'} position={'bottom'} on:clicked={scrollInto($pages.contact.element)} />
		<btn on:click={scrollInto($pages.contact.element)}><h3>Contact</h3></btn> -->
	</gridContainer>
	{#if isTouchScreen}
		<Arrow isOpen={openMobile} />
	{/if}
</nav>

<!-- kolla igenom storleken i olika upplösningar -->
<style style lang="postcss">
	nav {
		z-index: 5;
		position: fixed;
		right: 0.6rem;
		width: 8vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition: all 0.3s ease-in;
		cursor: pointer;
	}

	gridContainer {
		width: 100%;
		height: 50%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		& btn {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			& h3 {
				width: fit-content;
				height: fit-content;
				transform: rotateY(0deg) rotate(-90deg);
				transform-origin: bottom right;
				transition: all 0.3s ease-out;
			}
		}
		@media only screen and (max-height: 600px) {
			height: 85vh;
		}
		@media only screen and (max-height: 900px) {
			height: 75vh;
		}
	}
	/* btn:hover {
		cursor: pointer;
	} */
	nav:hover btn h3 {
		transform: rotate(0deg);
		animation: bounce 0.7s 1;
	}
	nav.isTouchScreen {
		width: 14vw;
		margin-right: 0px;

		& btn {
			width: 37%;
			height: 64%;
			& h3 {
				transform: rotateY(0deg) rotate(-90deg);
			}
		}

		&.openMobile {
			width: 35vw;
			background-color: rgba(255, 255, 255, 0.8);
			& btn {
				width: 100%;
				height: 100%;
				margin-left: -0.6rem;

				& h3 {
					transform: rotate(0deg);
					animation: bounce 0.7s 1;
				}
			}
			@media only screen and (min-width: 768px) {
				width: 10vw;
			}
		}
	}

	@keyframes bounce {
		0% {
			transform: rotate(-90deg);
			-webkit-animation-timing-function: ease-in;
		}
		33% {
			transform: rotate(30deg);
			-webkit-animation-timing-function: ease-out;
		}
		50% {
			transform: rotate(-30deg);
			-webkit-animation-timing-function: ease-in;
		}
		66% {
			transform: rotate(20deg);
			-webkit-animation-timing-function: ease-out;
		}
		82% {
			transform: rotate(-10deg);
			-webkit-animation-timing-function: ease-in;
		}
		/* 92% {
			transform: rotate(10deg);
			-webkit-animation-timing-function: ease-out;
		} */
		/* 97% {
			transform: rotate(-10deg);
			-webkit-animation-timing-function: ease-in;
		} */
		100% {
			transform: rotate(0deg);
		}
	}
</style>
