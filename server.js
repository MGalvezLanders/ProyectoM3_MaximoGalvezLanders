import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: userMessage }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log('Gemini response status:', response.status);
    console.log('Gemini data:', data);

    // Verificar que la respuesta sea válida
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