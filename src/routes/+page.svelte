<script>
	import Terminal from "../components/Terminal.svelte";


</script>

<svelte:head>
	<title>Wesley portifólio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<section>
	<div>
		<Terminal />
	</div>
</section>

<style lang="scss">
	section {
		margin-top: 50px;
		padding-top: 50px;
		div {
			height: 200vh;
		}
	}
</style>
