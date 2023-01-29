<script>
//   import '@picocss/pico'
  import '../app.css'
</script> 

<nav>
	<a href="/">Home</a>
</nav>

<main>
	<slot />
</main>


<style>
	nav {
		padding: 1rem;
	}
	
	nav > a {
		color: aliceblue;
		font-size: 1em;
		font-weight: 500;
		letter-spacing: 0.1px;
		text-decoration: none;
	}

	:global(html) {
		background: rgb(20, 20, 40);
		/* scrollbar-gutter: stable; */
		overflow-y: scroll;
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}

	:global(.layout) {
		--width: 700px;
		padding-left: max(1rem, calc(calc(100vw - var(--width)) / 2));
		padding-right: max(1rem, calc(calc(100vw - var(--width)) / 2));
	}

	main {
		margin-bottom: 5rem;
	}

</style>