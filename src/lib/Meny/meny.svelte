<script>
	import { page } from '$app/stores';
	import { homePage, aboutPage, timelinePage, portfollioPage, contactPage } from '$lib/store';

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
	<ul>
		<li class:active={$page.path === '/'} on:click={scrollTo($homePage)}>Home</li>
		<li class:active={$page.path === '/about'} on:click={scrollTo($aboutPage)}>About</li>
		<li class:active={$page.path === '/about'} on:click={scrollTo($timelinePage)}>Timeline</li>
		<li class:active={$page.path === '/about'} on:click={scrollTo($portfollioPage)}>Portfollio</li>
		<li class:active={$page.path === '/about'} on:click={scrollTo($contactPage)}>Contact</li>
	</ul>
</nav>

<style style lang="postcss">
	nav {
		position: fixed;
		height: 100vh;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 50vh;
		padding: 3rem;
		list-style: none;
		background: var(--light-green);
		background-size: contain;
	}

	li {
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}
</style>
