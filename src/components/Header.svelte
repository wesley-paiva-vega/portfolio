<script lang="ts">
	import ts_logo from '../images/ts_logo.jpg';

	let isScrollable = false;

	$: isScrollable;

	const handleScroll = () => {
		window.addEventListener('scroll', function() {
  			console.log('Posição do scroll: ' + window.scrollY);
	});
	};
</script>

<header class={isScrollable ? `scroll` : null}>
	<div on:scroll={handleScroll}>
		<img width="30" src={ts_logo} alt="Logo Ts" />
		<ul class="links">
			<li>Sobre Mim</li>
			<li>Artigos</li>
			<li>Contato</li>
		</ul>
	</div>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		z-index: 3;
		width: 100%;
		background: #fff;
		-webkit-transition: height 0.3s ease;
		transition: height 0.3s ease;
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 50px;

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
	}

	.scroll {
		-webkit-box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
		box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
	}
</style>
