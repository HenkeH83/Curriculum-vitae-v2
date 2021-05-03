<script>
	import { page } from '$app/stores';
	import { homePage, aboutPage } from '$lib/store';

	const scrollTo = (page) => {
		const scrollOptions = {
			behavior: 'smooth',
			block: 'start',
			inline: 'start'
		};
		page.scrollIntoView(scrollOptions);
	};
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.path === '/'} on:click={scrollTo($homePage)}>Home</li>
			<li class:active={$page.path === '/about'} on:click={scrollTo($aboutPage)}>About</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: hsla(0, 0%, 100%, 0.7);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
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

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
