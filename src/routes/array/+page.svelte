<script>
// @ts-nocheck
    export let data
    const { output } = data
    console.log(output)
</script>


<main>
    {#if !output}
        Loading...
    {:else}
        {output}
    {/if}
</main>