import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";

config()
const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

const ImageURL = "https://media.istockphoto.com/id/870588358/es/foto/tranquilo-perro-degustaci%C3%B3n-de-deliciosa-comida.jpg?s=612x612&w=0&k=20&c=JQVhWSBwlUxw_jT4Tmt2VhBs08Ui48xy2zAaSmblQa8=";
const model = "Salesforce/blip-image-captioning-base";

async function run() {
    try {
        const response = await fetch(ImageURL);
        const blob = await response.blob();

        const result = await hf.imageToText({
            data: blob,
            model: model
        });

        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

run();
