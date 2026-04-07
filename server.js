import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import personajes from './api/characters.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  console.log("Body recibido:", req.body);
  console.log("API KEY:", process.env.GEMINI_API_KEY);
  const { message, character } = req.body; // <-- agregás personaje

  const systemPrompt = personajes[character] || personajes.brian; // fallback a brian
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}
`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          system_instruction: {                        // <-- contexto del personaje
            parts: [{ text: systemPrompt }]
          },
          contents: [
            {
              parts: [{ text: message }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log('Gemini response status:', response.status);
    console.log('Gemini data:', data);

    if (!response.ok || !data.candidates) {
      console.error("Error de Gemini:", data);
      return res.status(500).json({ error: "Error al llamar a Gemini" });
    }

    res.json({
      reply: data.candidates[0].content.parts[0].text
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});