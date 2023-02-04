// @ts-nocheck
    import { OpenAI_API_KEY } from '$env/static/private'
    import { Configuration, OpenAIApi } from 'openai';
    import { error } from '@sveltejs/kit';

    const configuration = new Configuration({
        apiKey: OpenAI_API_KEY
    });

    const openai = new OpenAIApi(configuration);

    export const load = async ({ fetch, params }) => {
        console.log('server ran')
     
        const arrayMethodID = Object.values(params)

        const completion = async () => {
        
            console.log(arrayMethodID)

            const data = await openai.createCompletion({
                model: 'text-curie-001',
                prompt: `Create three paragraph sections, with the headings for each section in uppercase. First, under the EXPLANATION heading, explain array.Prototype.${arrayMethodID}(). Then, under the SYNTAX heading, provide the syntax. Finally, under the EXAMPLES heading, give two examples.`,
                max_tokens: 500,
                temperature: 0.3,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
                stop: ["\"\"\""],
            });            
            
            return data.data.choices[0].text;
           
        };

        return {
            output: completion()
        }

        if (!data) {
            throw error();
        }
    }
