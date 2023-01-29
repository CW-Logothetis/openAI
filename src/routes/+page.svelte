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
		<a href="/array" class="card flex-col">
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
		padding: 1em;
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
		margin-bottom: 1.5em;
	}

	.cards {
		display: grid;
		margin: 0 auto;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
		grid-gap: 1rem;
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
		border: 1px solid #EAEAEA;
		background-color: var(--js-yellow);
		border-radius: 10px;
		padding: 25px;
		padding-bottom: 5px;
		/* width: 100%; */
		height: 10em;
		cursor: pointer; 
	}
</style>