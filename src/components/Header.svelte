<script lang="ts">
	import ts_logo from '../images/ts_logo.jpg';
	import Container from './Container.svelte';

	export let isScrollable = false;

	$: isScrollable;

</script>

<header  class={isScrollable ? `scroll` : null}>
	<Container>
		<div>
			<img width="30" src={ts_logo} alt="Logo Ts" />
			<ul class="links">
				<li>Sobre Mim</li>
				<li>Artigos</li>
				<li>Contato</li>
			</ul>
		</div>
	</Container>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;
		width: 100%;
		background: var(--color-bg-primary);
		-webkit-transition: height 0.3s ease;
		transition: height 0.3s ease;
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 50px;
			height: 90px;

			ul {
				display: flex;
				align-items: center;
				justify-content: center;
				li {
					list-style: none;
				}
			}
		}
	}

	.links {
		gap: 50px;
		color: var(--color-theme-7);
	}

	.scroll {
		-webkit-box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
		box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
		background-color: var(--color-bg-primary-dark);

		div {
			height: 60px;
			transition: height .3s ease;
		}
	}
</style>
