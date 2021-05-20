<script context="module">
	export const prerender = true;
	import { client } from '$lib/sanity-client';

	const aboutFilter = `*[_type == 'about']`;
	const aboutQuery = `{
		title,
		body
	}`;
	const skillsFilter = `*[_type == 'skills']`;
	const skillsQuery = `{
		title,
		level,
		body
	}`;
	const experienceFilter = `*[_type == 'experience'] | order(startDate desc)`;
	const experienceQuery = `{
		title,
		organization,
		location,
		categories,
		startDate,
		endDate,
		relevance,
		body
	}`;
	const portfolioFilter = `*[_type == 'portfolio']`;
	const portfolioQuery = `{
		title,
		link,
		image,
		body
	}`;

	export async function load() {
		const aboutRes = await client.fetch(aboutFilter, aboutQuery);
		const skillsRes = await client.fetch(skillsFilter, skillsQuery);
		const experienceRes = await client.fetch(experienceFilter, experienceQuery);
		const portfolioRes = await client.fetch(portfolioFilter, portfolioQuery);

		return {
			props: {
				aboutContent: await aboutRes,
				skillsContent: await skillsRes,
				experienceContent: await experienceRes,
				portfofioContent: await portfolioRes
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import HeroComponent from '$lib/HeroComponent/index.svelte';
	import AboutComponent from '$lib/AboutComponent/index.svelte';
	import SkillsComponent from '$lib/SkillsComponent/index.svelte';
	import TimelineComponent from '$lib/TimelineComponent/index.svelte';
	import PortfolioComponent from '$lib/PortfolioComponent/index.svelte';
	// import ContactComponent from '$lib/ContactComponent/index.svelte';
	import { windowWidth } from '$lib/store';

	export let aboutContent;
	export let skillsContent;
	export let experienceContent;
	export let portfofioContent;

	let isReady = false;

	onMount(() => {
		isReady = true;
	});
</script>

<svelte:head>
	<title>Henrik Hagström, curriculum vitae</title>
</svelte:head>

<svelte:window bind:innerWidth={$windowWidth} />

<section>
	{#if isReady}
		<HeroComponent />
		<AboutComponent content={aboutContent} />
		<SkillsComponent content={skillsContent} />
		<TimelineComponent content={experienceContent} />
		<PortfolioComponent content={portfofioContent} />
		<!-- <ContactComponent /> -->
	{/if}
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
