import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { askQuestion } from "./question.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {

  // Modelo do Gemini
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  
  // Prompt de comando para o modelo gerar uma resposta
  let prompt = "Você é um site de viagens e deve responder somente perguntas sobre este assunto, caso o usuário pergunte algo diferente. Diga que não pode responder, o usuário escolheu: ";
  prompt += await askQuestion("Me fale sobre um destino que você gostaria de saber: ");

  // Verifica se o modelo foi carregado corretamente
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(response.text());
  } catch (error) {
    console.error("Erro detalhado:", error);
  }
}

run();