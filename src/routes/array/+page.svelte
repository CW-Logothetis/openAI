<script>
// @ts-nocheck
    // import { OpenAI_API_KEY } from '$env/static/private'
    import { Configuration, OpenAIApi } from 'openai';

    let response

    const configuration = new Configuration({
        apiKey: ''
    });

    const openai = new OpenAIApi(configuration);

    export const completion = async () => {
        console.log('ran on client')
        const output = await openai.createCompletion({
            model: 'text-davinci-002',
            prompt: 'Capital of England',
            max_tokens: 2000,
            temperature: 0.6
        });
        response = output.data.choices[0].text;
        console.log(output)
    };

    completion()
</script>


<main>
    {#if !response}
        Loading...
    {:else}
        {response}
    {/if}
</main>