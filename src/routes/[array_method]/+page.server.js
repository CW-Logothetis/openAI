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
                model: 'text-davinci-003',
                prompt: `Explain array.Prototype.${arrayMethodID}(). Then give syntax, two examples and an exercise without the answer.`,
                max_tokens: 1000,
                temperature: 0.3,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
                stop: ["\"\"\""],
            });
            
            if (!data) {
                throw error(404, {
                    message: 'Not found'
                });
            }
            
            return data.data.choices[0].text;
            
        };

        return {
            output: completion()
        }
    }
