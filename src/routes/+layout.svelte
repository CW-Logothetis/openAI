<script>
  import '@picocss/pico'
</script> 

<nav>
	<a href="/">Home</a>
</nav>

<main>
	<slot />
</main>


<style>
	nav {
		background: rgba(0, 0, 0, 0.4);
		padding-top: 1rem;
		padding-bottom: 1rem;
		text-transform: uppercase;
		font-size: 0.7rem;
		letter-spacing: 0.1px;
		font-weight: 500;
	}

	:global(html) {
		background: rgb(20, 20, 40);
		/* scrollbar-gutter: stable; */
		overflow-y: scroll;
	}

	:global(.layout) {
		--width: 700px;
		padding-left: max(1rem, calc(calc(100vw - var(--width)) / 2));
		padding-right: max(1rem, calc(calc(100vw - var(--width)) / 2));
	}

	main {
		margin-bottom: 5rem;
		margin-top: 5vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

</style>