<script>
// @ts-nocheck
    import { arrayMethods } from '$lib/arrayMethods'
    import { page } from '$app/stores';
    
    export let data
    
    const { output } = data

    let pageParams = $page.params
    console.log(pageParams)
    let pageName = Object.values(pageParams)
    console.log(pageName)

    let newOutput

    function styleHeadings() {
        const explanationOutput = output.replace("EXPLANATION", "<div style='margin-bottom: -1.5rem; font-weight: 600'>EXPLANATION</div>");
        const syntaxOutput = explanationOutput.replace("SYNTAX", "<div style='margin: 20px 0 -1.5rem; font-weight: 600'>SYNTAX</div>")
        newOutput = syntaxOutput.replace("EXAMPLES", "<div style='margin: 20px 0 -1.5rem; font-weight: 600'>EXAMPLES</div>")
        return newOutput;
    }
    styleHeadings()

</script>


<section class="header">
	<div class="header__content">
        <h1>array.prototype.<span style='font-weight:600'>{pageName}()</span></h1>
	</div>
</section>

<container>

    <section class="method-menu">
        <ul>
            {#each arrayMethods as arrayMethod}
                <li on:click={() => window.location.href = '/arrays/' + arrayMethod.id} class="">
                    {arrayMethod.method}
                <li>
            {/each}
        </ul>
    </section>

    <section class='returned-text'>
        {#if !output}
            Loading...
        {:else}
            {@html newOutput}
        {/if}
    </section>

    <section>
        <p></p>
    </section>

</container>

<style>

    .header {
        text-align: center;
		background: rgba(0, 0, 0, 0.3);
		margin: 0;
		width: 100%;
		margin-bottom: 3em;
	}
	
	.header__content {
		color: aliceblue;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		padding: 0 1em;
	}
	
	.header__content  h1 {
		font-size: 1.8rem;
		font-weight: 300;
		margin-bottom: 1em;
	}

    container {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
    }

    ul {
        color: aliceblue;
        font-size: 0.9rem;
        font-weight: 400;
        list-style-type: none;
    }

    li {
        margin-bottom: 15px;
    }

    .method-menu {
        border-right: solid 1px rgba(240, 248, 255, 0.3);
    }

    .returned-text {
        background-color: rgba(58, 58, 99, 0.5);
        border-radius: 10px;
        color: aliceblue;
        margin: 3rem auto;
        padding: 0 2rem 2rem 2rem;
        width: 50%;
        height: max-content;
        white-space: pre-wrap; 
    }
</style>