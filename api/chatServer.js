import { GoogleGenerativeAI } from '@google/generative-ai';
import personajes from './charactersRole.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, character, history = [] } = req.body;
    const systemPrompt = personajes[character] || personajes.brian;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: systemPrompt
    });

     // Convertir el historial al formato que espera Gemini
    const formattedHistory = history.map(msg => ({
      role: msg.role,        // 'user' o 'model'
      parts: [{ text: msg.text }]
    }));

     // Iniciar chat con el historial previo
    const chat = model.startChat({
      history: formattedHistory
    });

    const result = await model.sendMessage(message);
    const text = result.response.text();

    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error('Error calling Gemini:', error);
    return res.status(500).json({ error: 'Error generating response' });
  }
}