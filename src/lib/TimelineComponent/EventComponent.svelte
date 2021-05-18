<script>
	import Node from '$lib/Node/index.svelte';

	export let content;
	export let position;
</script>

<Node {position} />
<h3>{content.title}</h3>
<p>{content.organization}</p>
<p>{content.location}</p>
