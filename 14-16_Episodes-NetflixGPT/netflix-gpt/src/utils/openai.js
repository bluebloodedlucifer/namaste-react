import OpenAI from 'openai';
import { OPENAI_KEY } from './constatants';

const openai = new OpenAI({
//   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true
});

// async function main() {
//   const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });
// }

// main();

export default openai;