<script lang="ts">
	import Container from '../components/Container.svelte';
	import Header from '../components/Header.svelte';
	import './styles.css';

	let onScrollable = false;
	let screenY = 0;
	let events: Header;

	const handleEvents = (key: string) => {
		switch(key) {
			case 'edit':
				events.onEdit();
				break;
			case 'save': 
				events.onSave();
				break
			case 'delete':
				events.onDelete();
				break
			default: 
				return null;
		}
	}

	$: if(screenY >= 50) {
		onScrollable = true;
	}

	$: if(screenY === 0) {
		onScrollable = false
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<Container>
	<Header bind:this={events} on:message={() => alert('Agora disparou mané')} isScrollable={onScrollable} />

		<div class="app">
			<main>
				<slot />
				<button on:click={() => handleEvents('edit')}>Handle Edit</button>
				<button on:click={() => handleEvents('delete')}>Handle Delete</button>
				<button on:click={() => handleEvents('save')}>Handle Save</button>
		</main>	
		<footer>
			<p >visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
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
