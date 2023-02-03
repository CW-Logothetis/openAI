<script>
// @ts-nocheck
	import { arrayMethods } from '$lib/arrayMethods'
</script>


<section class="header">
	<div class="header__content">
		<div class="header__text">
			<h1>Array methods</h1>
			<p>Summaries, syntax and example</p>
		</div>
		<img src='/diagram_array.png' alt='diagram of an array'/>
	</div>
</section>

<section class="cards">
	{#each arrayMethods as arrayMethod}
		<a on:click={() => window.location.href = '/arrays/' + arrayMethod.id} class="card flex-col">
			<h2>{arrayMethod.method}</h2>
			<p>{arrayMethod.description}</p>
		</a>
	{/each}
</section>


<style>

	h2 {
		color: var(--js-grey);
		font-size: 1.1rem;
		margin-bottom: 1.25em;
	}

	p {
		font-size: 1rem;
		color: var(--js-grey)
	}

	img {
		width: 50%;
	}

	.header {
		background: rgba(0, 0, 0, 0.3);
		margin: 0;
		width: 100%;
		margin-bottom: 3em;
	}
	
	.header__content {
		color: aliceblue;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		padding: 0 1em;
		max-width: 900px;
	}
	
	.header__content  h1 {
		
		font-size: 1.8rem;
		font-weight: 500;
		margin-bottom: 1em;
	}

	.header__content  p {
		color: aliceblue;
		font-size: 1rem;
		margin-bottom: 1.5rem;
	}

	.cards {
		display: grid;
		margin: 0 auto;
		padding: 0 2em;
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
		box-shadow: 0px 8px 8px rgba(124, 124, 111, 0.25);
		transform: scale(1.05);
	}

	.card:hover > h2 {
		color: rgb(16, 16, 16);
	}
	.card:hover > p {
		color: rgb(16, 16, 16);
	}
</style>