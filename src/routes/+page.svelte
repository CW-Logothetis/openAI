<script>
// @ts-nocheck
	import { arrayMethods } from '$lib/arrayMethods'
</script>

<section class="header">
	<div class="header__content">
		<h1>Array methods</h1>
		<p>Summaries, syntax and example</p>
	</div>
</section>

<section class="cards">
	{#each arrayMethods as arrayMethod}
		<a on:click={() => window.location.href = '/' + arrayMethod.id} class="card flex-col">
			<h2>{arrayMethod.method}</h2>
			<p>{arrayMethod.description}</p>
		</a>
	{/each}
</section>



<style>
	h2 {
		color: var(--js-grey);
		font-size: 1.1rem;
		margin-bottom: 1.5em;
	}

	p {
		font-size: 0.8rem;
		color: var(--js-grey)
	}

	.header {
		background: rgba(0, 0, 0, 0.4);
		margin: 0;
		width: 100%;
		padding: 1rem;
		margin-bottom: 3em;
	}
	
	.header__content {
		margin: 0 auto;
		max-width: 900px;
	}
	
	.header__content > h1 {
		color: aliceblue;
		font-size: 1.8rem;
		font-weight: 500;
		margin-bottom: 1.5em;
	}

	.header__content > p {
		color: aliceblue;
		font-size: 1rem;
		margin-bottom: 1.5rem;
	}

	.cards {
		display: grid;
		margin: 0 auto;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
		grid-gap: 1.5rem;
		max-width: 900px;
	}

	a {
		text-decoration: none;
	}

	.flex-col {
		display: flex;
		flex-direction: column;
	}

	.card {
		background-color: var(--js-yellow);
		border-radius: 10px;
		padding: 25px;
		padding-bottom: 5px;
		height: 10rem;
		cursor: pointer; 
		transition: transform .2s;
	}

	.card:hover {
		transform: scale(1.05);
		box-shadow: 0px 8px 8px rgba(124, 124, 111, 0.25);
	}
</style>