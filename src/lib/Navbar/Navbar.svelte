<script>
	import { onMount } from 'svelte';
	import { pages, windowWidth } from '$lib/store';
	import Node from '$lib/Node/Node.svelte';
	import Arrow from '$lib/Navbar/Arrow.svelte';

	let currentPage = 'home';
	let elementList;
	let isReady = false;
	let isTouchScreen = false;
	let navElement;
	let openMobile = false;
	let startX;
	let endX;

	// Kanske optimera denna lite
	$: if ($pages != null && Object.keys($pages).length >= 5) {
		const {
			home: { element: homeElement },
			about: { element: aboutElement },
			timeline: { element: timelineElement },
			portfolio: { element: portfolioElement },
			contact: { element: contactElement }
		} = $pages;

		elementList = [homeElement, aboutElement, timelineElement, portfolioElement, contactElement];

		//Fler options
		const options = {
			rootMargin: '-30px',
			threshold: 0
		};
		if ($windowWidth >= 600) {
			options.rootMargin = '-200px';
		}
		if ($windowWidth >= 900) {
			options.rootMargin = '-300px';
		}
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					currentPage = entry.target.id;
				}
			});
		}, options);

		elementList.forEach((element) => {
			console.log('new observer');
			observer.observe(element);
		});

		isReady = true;
	}

	function scrollTo(page) {
		const scrollOptions = {
			behavior: 'smooth',
			block: 'start',
			inline: 'start'
		};
		page.scrollIntoView(scrollOptions);
	}
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
		<Node isActive={currentPage === 'home'} position={'top'} on:clicked={scrollTo($pages.home.element)} />
		<btn on:click={scrollTo($pages.home.element)}><h3>Home</h3></btn>
		<Node isActive={currentPage === 'about'} position={'middle'} on:clicked={scrollTo($pages.about.element)} />
		<btn on:click={scrollTo($pages.about.element)}><h3>About</h3></btn>
		<Node isActive={currentPage === 'timeline'} position={'middle'} on:clicked={scrollTo($pages.timeline.element)} />
		<btn on:click={scrollTo($pages.timeline.element)}><h3>Timeline</h3></btn>
		<Node isActive={currentPage === 'portfolio'} position={'middle'} on:clicked={scrollTo($pages.portfolio.element)} />
		<btn on:click={scrollTo($pages.portfolio.element)}><h3>Portfolio</h3></btn>
		<Node isActive={currentPage === 'contact'} position={'bottom'} on:clicked={scrollTo($pages.contact.element)} />
		<btn on:click={scrollTo($pages.contact.element)}><h3>Contact</h3></btn>
	</gridContainer>
	{#if isTouchScreen}
		<Arrow isOpen={openMobile} />
	{/if}
</nav>

<style style lang="postcss">
	nav {
		position: fixed;
		right: 0;
		width: 8vw;
		margin-right: 0.6rem;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition: all 0.3s ease-in;
		/* background-color: aquamarine; */
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
			/* padding-right: 1.6rem; */
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
			height: 100vh;
		}
		@media only screen and (max-height: 740px) {
			height: 65vh;
		}
	}
	btn:hover {
		cursor: pointer;
	}
	nav:hover btn h3 {
		transform: rotate(0deg);
	}
	nav.isTouchScreen {
		width: 14vw;
		margin-right: 0px;

		& btn {
			width: 37%;
			height: 64%;
			/* background-color: violet; */
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
				}
			}
			@media only screen and (min-width: 768px) {
				width: 10vw;
			}
		}
	}
</style>
