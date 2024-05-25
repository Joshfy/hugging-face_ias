import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";

config()
const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

const ImageURL = "https://www.mascothouse.es/wp-content/uploads/2013/11/cat-playing-1.jpg";
const model = "Helsinki-NLP/opus-tatoeba-en-tr";

async function run() {
    try {
        // const response = await fetch(ImageURL);
        // const blob = await response.blob();

        for await (const output of hf.textGenerationStream({
        model: "google/flan-t5-xxl",
        inputs: 'repeat "one two three four"',
        parameters: { max_new_tokens: 250 }
      })) {
        console.log(output.token.text, output.generated_text);
      }

    } catch (error) {
        console.error("Error:", error);
    }
}

run();
