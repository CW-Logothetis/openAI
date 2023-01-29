<script>
// @ts-nocheck
    export let data
    const { output } = data
    console.log(output)
</script>


<section class='returned-text'>
    {#if !output}
        Loading...
    {:else}
        {output}
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