import { GoogleGenerativeAI } from '@google/generative-ai';
import personajes from './charactersRole.js';
import { formatHistory, getSystemPrompt } from './chatServerUtils.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, character, history = [] } = req.body;
     const systemPrompt = getSystemPrompt(character, personajes);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: systemPrompt
    });

     // Iniciar chat con el historial previo
    const chat = model.startChat({
      history: formatHistory(history)
    });

    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error('Error calling Gemini:', error);
    return res.status(500).json({ error: 'Error generating response' });
  }
}