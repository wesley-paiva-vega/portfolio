<script>
	import Terminal from "../components/Terminal.svelte";


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<section>
	<h1>Hi, I'm Wesley</h1>

	<div>
		<Terminal />
	</div>
</section>

<style lang="scss">
	section {
		margin-top: 50px;

		div {
			height: 200vh;
		}
	}
</style>
