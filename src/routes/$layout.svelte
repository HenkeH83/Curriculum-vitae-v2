<script>
	import Navbar from '$lib/Navbar/index.svelte';
	// import NameBox from '$lib/nameBox/NameBox.svelte';
	import '../app.postcss';
</script>

<!-- Lämnar namebox ideèn för tillfället -->
<!-- <NameBox /> -->
<Navbar />
<main>
	<slot />
</main>
