<script context="module">
	export const prerender = true;
</script>

<script>
	import { urlFor } from '$lib/sanity-client';
	import { toHtml } from '$lib/utility';

	export let content;

	let isActive = false;
	let containerElement;

	function activate() {
		isActive = !isActive;
		// if (isActive) {
		// 	scrollToElement(containerElement);
		// }
	}
</script>

<container class:isActive on:click={activate} bind:this={containerElement}>
	<h3>
		{content.title}
	</h3>
	<img
		class:isActive
		srcset="{urlFor(content.image).width(200).quality(80).auto('format').url()} 400w,
	{urlFor(content.image).width(300).quality(80).auto('format').url()} 600w,
	{urlFor(content.image).width(1800).quality(80).auto('format').url()} 1200w,
        {urlFor(content.image).width(1800).height(225).quality(80).auto('format').url()} 2x"
		sizes="(max-width: 599px) 100vw,
        (max-width: 899px) 50vw,
        (max-width: 11999px) 33vw,
        25vw"
		src={urlFor(content.image).width(1000).quality(80).auto('format').url()}
		alt={content.alt}
		width="400"
		height="647"
		loading="lazy"
	/>
	<textContainer class:isActive class="[ collapseableText ]">
		{@html toHtml(content)}
		<a href={content.link} target="_blank">Link to website</a>
	</textContainer>
</container>

<style style lang="postcss">
	container {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 3rem repeat(2, auto) 1rem;

		textContainer {
			grid-column: 1;
			grid-row: 3;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		& h3 {
			grid-column: 1;
			grid-row: 1;
			margin-bottom: 1rem;
			/* align-self: center; */
		}

		& img {
			grid-column: 1;
			grid-row: 2;
			width: 100%;
			min-width: 200px;
			height: auto;
			/* min-height: 300px; */
			object-fit: contain;
		}

		& textContainer {
			margin-top: 1rem;
			& a {
				margin-top: 1rem;
				color: black;
				transition: all 0.3s ease-in-out;
				&:visited {
					background: linear-gradient(to right, var(--dark-blue), var(--matt-blue));
					background-clip: text;
					color: transparent;
				}
				&:hover {
					background: linear-gradient(to right, var(--dark-blue), var(--matt-blue));
					background-clip: text;
					color: transparent;
				}
			}
		}
	}

	@media only screen and (min-width: 1024px) {
		container {
			cursor: pointer;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 3rem auto 5rem;

			& h3 {
				grid-column: 1 / span 3;
				grid-row: 1;
				/* align-self: center; */
				text-transform: uppercase;
				/* text-decoration: underline; */
				border-bottom: 1px solid black;
			}

			& img {
				grid-column: 1 / span 3;
				grid-row: 2;
				&.isActive {
					/* width: 33%; */
				}
			}

			& textContainer {
				margin-top: 0;
				padding: 5rem;
				/* background-color: var(--light-green); */
				background-color: rgba(255, 255, 255, 0.8);
				border: 1px solid black;
				grid-column: 1 / span 3;
				grid-row: 2;
				/* font-size: 1.2rem; */
				/* line-height: 1.6rem; */
			}
		}
	}
</style>
