import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: import.meta.env.VITE_COHERE_API_KEY,
});

export async function translate() {

    const prediction = await cohere.generate({
      prompt: "hello",
      maxTokens: 10,
    });

    console.log("Received prediction", prediction);

}