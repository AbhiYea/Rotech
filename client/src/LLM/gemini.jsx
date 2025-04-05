import { GoogleGenerativeAI } from "@google/generative-ai";

// 🌟 Replace this with env variable in production!
const API_KEY = "AIzaSyD78X8dLdP1G9QWCuEcupZtWfgNWEhO7YU";

// Init Gemini
const genAI = new GoogleGenerativeAI(API_KEY);

// Function to call Gemini
export async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (err) {
    console.error("Gemini Error:", err);
    return "⚠️ Error fetching response.";
  }
}
