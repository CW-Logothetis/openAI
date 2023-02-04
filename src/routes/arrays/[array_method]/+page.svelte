<script>
// @ts-nocheck
    export let data
    const { output } = data
    let newOutput

    function styleHeadings() {
        const explanationOutput = output.replace("EXPLANATION", "<div style='margin-bottom: 1px; font-weight: 600'>EXPLANATION</div>");
        const syntaxOutput = explanationOutput.replace("SYNTAX", "<div style='margin: 20px 0 1px; font-weight: 600'>SYNTAX</div>")
        newOutput = syntaxOutput.replace("EXAMPLES", "<div style='margin: 20px 0 1px; font-weight: 600'>EXAMPLES</div>")
        return newOutput;
    }
    styleHeadings()

</script>


<section class='returned-text'>
    {#if !output}
        Loading...
    {:else}
        {@html newOutput}
    {/if}
</section>

<style>
    .returned-text {
        background-color: rgba(58, 58, 99, 0.5);
        border-radius: 10px;
        color: aliceblue;
        margin: 3rem auto;
        padding: 0 2rem 2rem 2rem;
        width: 50%;
        white-space: pre-wrap; 
    }
</style>