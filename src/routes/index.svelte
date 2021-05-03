<script context="module">
	export const prerender = true;
</script>

<script>
	import LandingComponent from '$lib/LandingComponent/index.svelte';
	import AboutComponent from '$lib/AboutComponent/index.svelte';
	// import { homePage, aboutPage } from '$lib/store';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<LandingComponent />
	<AboutComponent />
</section>

<style style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
