require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {

  // Modelo do Gemini
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  
  // Prompt de comando para o modelo gerar uma resposta
  const prompt = "Me fale sobre a Alemanha.";

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