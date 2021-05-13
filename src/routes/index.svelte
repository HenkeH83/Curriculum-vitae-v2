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
		body
	}`;
	const experienceFilter = `*[_type == 'experience']`;
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

	export async function load() {
		const aboutRes = await client.fetch(aboutFilter, aboutQuery);
		const skillsRes = await client.fetch(skillsFilter, skillsQuery);
		const experienceRes = await client.fetch(experienceFilter, experienceQuery);

		return {
			props: {
				aboutContent: await aboutRes,
				skillsContent: await skillsRes,
				experienceContent: await experienceRes
			}
		};
	}
</script>

<script>
	import LandingComponent from '$lib/LandingComponent/landingComponent.svelte';
	import AboutComponent from '$lib/AboutComponent/aboutComponent.svelte';
	import TimelineComponent from '$lib/TimelineComponent/timelineComponent.svelte';
	import PortfolioComponent from '$lib/PortfolioComponent/portfolioComponent.svelte';
	import ContactComponent from '$lib/ContactComponent/contactComponent.svelte';
	import { windowWidth } from '$lib/store';

	export let aboutContent;
	export let skillsContent;
	export let experienceContent;
</script>

<svelte:head>
	<title>Henrik Hagström, curriculum vitae</title>
</svelte:head>

<svelte:window bind:innerWidth={$windowWidth} />

<section>
	<LandingComponent />
	<AboutComponent content={aboutContent} />
	<TimelineComponent content={experienceContent} />
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
