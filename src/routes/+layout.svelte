<script>
	import Container from '../components/Container.svelte';
	import Header from '../components/Header.svelte';
	import './styles.css';

	let onScrollable = false;
	let screenY = 0;

	$: if(screenY >= 50) {
		onScrollable = true;
	}

	$: if(screenY === 0) {
		onScrollable = false
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<Container>
	<Header isScrollable={onScrollable} />
	<div class="app">	
		<main>
			<slot />
		</main>	
		<footer>
			<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		</footer>
	</div>
</Container>

<svelte:window bind:scrollY={screenY} />

<style>
	.app {
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
