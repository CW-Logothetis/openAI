// @ts-nocheck
    import { OpenAI_API_KEY } from '$env/static/private'
    import { Configuration, OpenAIApi } from 'openai';

    const configuration = new Configuration({
        apiKey: OpenAI_API_KEY
    });

    const openai = new OpenAIApi(configuration);

    export const load = async ({ fetch }) => {
        console.log('server ran')
        const completion = async () => {
            console.log('ran on client')
            const data = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: 'Explain array.Prototype.reduce() with two examples and an exercise',
                max_tokens: 1000,
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
    }