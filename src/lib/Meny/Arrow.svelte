<script>
	import { fly } from 'svelte/transition';
	export let isOpen;
</script>

<container>
	{#if isOpen}
		<right class="svgContainer">
			<svg width="60" height="20" version="1.1" viewBox="0 0 15.875 5.2917">
				<g transform="translate(0 -291.71)" stroke="#000" stroke-linecap="square" stroke-width=".049764">
					<g in:fly={{ delay: 1800, x: -30, duration: 1300 }} out:fly={{ delay: 0, x: 30, duration: 600 }} transform="translate(-5.2917 3.9771e-6)">
						<path d="m10.176 296.16 2.0843-2.0696 0.28109 0.26051-1.8545 1.8109z" style="paint-order:stroke fill markers" />
						<path d="m10.657 292.54 1.8879 1.8154-0.2914 0.26656-2.0817-2.0762z" style="paint-order:stroke fill markers" />
					</g>
					<g in:fly={{ delay: 1200, x: -30, duration: 1300 }} out:fly={{ delay: 60, x: 30, duration: 600 }} transform="translate(-5.2917 3.9771e-6)">
						<path d="m12.058 296.16 2.0843-2.0696 0.28109 0.26051-1.8545 1.8109z" style="paint-order:stroke fill markers" />
						<path d="m12.539 292.54 1.8879 1.8154-0.2914 0.26656-2.0817-2.0762z" style="paint-order:stroke fill markers" />
					</g>
					<g in:fly={{ delay: 600, x: -30, duration: 1300 }} out:fly={{ delay: 120, x: 30, duration: 600 }} transform="translate(-5.2917 3.9771e-6)">
						<path d="m13.941 296.16 2.0843-2.0696 0.28109 0.26051-1.8545 1.8109z" style="paint-order:stroke fill markers" />
						<path d="m14.422 292.54 1.8879 1.8154-0.2914 0.26656-2.0817-2.0762z" style="paint-order:stroke fill markers" />
					</g>
				</g>
			</svg>
		</right>
	{:else}
		<left class="svgContainer">
			<svg width="60" height="20" version="1.1" viewBox="0 0 15.875 5.2917">
				<g transform="translate(0 -291.71)" stroke="#000" stroke-linecap="square" stroke-width=".049764">
					<path in:fly={{ delay: 600, x: 30, duration: 1300 }} out:fly={{ delay: 0, x: -30, duration: 600 }} d="m5.2111 294.08 2.0872 2.0872-0.5545-5e-3 -1.8108-1.8038z" style="paint-order:stroke fill markers" />
					<path in:fly={{ delay: 600, x: 30, duration: 1300 }} out:fly={{ delay: 0, x: -30, duration: 600 }} d="m4.9328 294.35 1.8001-1.8072 0.5654-2e-3 -2.0871 2.0871z" style="paint-order:stroke fill markers" />
					<path in:fly={{ delay: 1200, x: 30, duration: 1300 }} out:fly={{ delay: 60, x: -30, duration: 600 }} d="m7.0203 294.08 2.0872 2.0872-0.5545-5e-3 -1.8108-1.8038z" style="paint-order:stroke fill markers" />
					<path in:fly={{ delay: 1200, x: 30, duration: 1300 }} out:fly={{ delay: 60, x: -30, duration: 600 }} d="m6.7421 294.35 1.8001-1.8072 0.5654-2e-3 -2.0871 2.0872z" style="paint-order:stroke fill markers" />
					<path in:fly={{ delay: 1800, x: 30, duration: 1300 }} out:fly={{ delay: 120, x: -30, duration: 600 }} d="m8.8296 294.08 2.0872 2.0872-0.5545-5e-3 -1.8108-1.8038z" style="paint-order:stroke fill markers" />
					<path in:fly={{ delay: 1800, x: 30, duration: 1300 }} out:fly={{ delay: 120, x: -30, duration: 600 }} d="m8.5513 294.35 1.8001-1.8072 0.5654-2e-3 -2.0871 2.0872z" style="paint-order:stroke fill markers" />
				</g>
			</svg>
		</left>
	{/if}
</container>

<style style lang="postcss">
	container {
		width: 100%;
		padding-top: 5vh;
		/* background-color: rgba(224, 36, 36, 0.5); */
	}
	.svgContainer {
		min-height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	svg {
		position: absolute;
		/* background-color: rgba(51, 136, 117, 0.5); */
	}
</style>
