<script context="module">
	export const prerender = true;
</script>

<script>
	import { urlFor } from '$lib/sanity-client';
	import { toHtml } from '$lib/utility';

	export let content;
</script>

<container>
	<a href={content.link}>
		<img
			srcset="{urlFor(content.image).width(200).height(100).quality(80).auto('format').url()} 400w,
        {urlFor(content.image).width(300).height(150).quality(80).auto('format').url()} 600w,
        {urlFor(content.image).width(450).height(225).quality(80).auto('format').url()} 2x"
			sizes="(max-width: 599px) 100vw,
        (max-width: 899px) 50vw,
        (max-width: 11999px) 33vw,
        25vw"
			src={urlFor(content.image).width(900).height(1456).quality(80).auto('format').url()}
			alt={content.alt}
			width="400"
			height="647"
			loading="lazy"
		/>
		<h2>
			{content.title}
		</h2>
	</a>
	<!-- {@html toHtml(content)} -->
</container>

<style style lang="postcss">
	container {
		/* width: 90%; */
		padding: 1rem;
		height: auto;
	}

	a {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
	}

	img {
		width: 100%;
		min-width: 200px;
		height: auto;
		/* min-height: 300px; */
		object-fit: contain;
	}
</style>
