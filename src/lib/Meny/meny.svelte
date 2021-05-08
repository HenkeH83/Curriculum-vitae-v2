<script>
	import { onMount } from 'svelte';
	import { pages } from '$lib/store';
	import Node from '$lib/Node/Node.svelte';

	let currentPage = 'home';
	let elementList;
	let isReady = false;

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

		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						currentPage = entry.target.id;
					}
				});
			},
			{
				rootMargin: '-300px',
				threshold: 0
			}
		);

		elementList.forEach((element) => {
			console.log('new observer');
			observer.observe(element);
		});

		isReady = true;
	}

	const scrollTo = (page) => {
		const scrollOptions = {
			behavior: 'smooth',
			block: 'start',
			inline: 'start'
		};
		page.scrollIntoView(scrollOptions);
	};
</script>

<nav>
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
</nav>

<style style lang="postcss">
	nav {
		position: fixed;
		right: 0;
		width: 8vw;
		height: 100vh;
		padding-right: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	gridContainer {
		width: 100%;
		height: 50%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
	}

	nav:hover gridContainer {
		/* grid-template-columns: 1fr 1fr; */
	}

	btn {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	btn h3 {
		width: fit-content;
		height: fit-content;
		transform: rotateY(0deg) rotate(-90deg);
		transform-origin: bottom right;
		transition: all 0.3s ease-out;
	}

	btn:hover {
		cursor: pointer;
	}

	nav:hover btn h3 {
		transform: rotate(0deg);
	}
</style>
