<script context="module">
	export const prerender = true;
</script>

<script>
	import LandingComponent from '$lib/LandingComponent/landingComponent.svelte';
	import AboutComponent from '$lib/AboutComponent/aboutComponent.svelte';
	import TimelineComponent from '$lib/TimelineComponent/timelineComponent.svelte';
	import PortfolioComponent from '$lib/PortfolioComponent/portfolioComponent.svelte';
	import ContactComponent from '$lib/ContactComponent/contactComponent.svelte';
	import { windowWidth } from '$lib/store';
</script>

<svelte:head>
	<title>Henrik Hagström, curriculum vitae</title>
</svelte:head>

<svelte:window bind:innerWidth={$windowWidth} />

<section>
	<LandingComponent />
	<AboutComponent />
	<TimelineComponent />
	<PortfolioComponent />
	<ContactComponent />
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
