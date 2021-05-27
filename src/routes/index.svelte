<script context="module">
	export const prerender = true;
	import { client } from '$lib/sanity-client';

	const aboutProjection = `*[_type == 'about']`;
	const aboutFilter = `{
		title,
		body
	}`;
	const skillsProjection = `*[_type == 'skills' && type -> skillType match 'code'] | order(order asc)`;
	const skillsFilter = `{
		_id,
		skill,
		icon {
			asset -> {
				url
			}
		},
		level -> {skillLevel},
		type -> {skillType},
		body
	}`;
	const experienceProjection = `*[_type == 'experience'] | order(startDate desc)`;
	const experienceFilter = `{
		title,
		organization,
		location,
		categories,
		startDate,
		endDate,
		relevance -> {relevance},
		body
	}`;
	const portfolioProjection = `*[_type == 'portfolio']`;
	const portfolioFilter = `{
		title,
		link,
		image {
			asset -> {
				url
			}
		},
		body
	}`;

	export async function load() {
		const aboutRes = await client.fetch(aboutProjection, aboutFilter);
		const skillsRes = await client.fetch(skillsProjection, skillsFilter);
		const experienceRes = await client.fetch(experienceProjection, experienceFilter);
		const portfolioRes = await client.fetch(portfolioProjection, portfolioFilter);

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
	import { windowWidth, windowHeight, windowY } from '$lib/store';

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

<svelte:window bind:innerWidth={$windowWidth} bind:innerHeight={$windowHeight} bind:scrollY={$windowY} />

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
