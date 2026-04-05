import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// System prompts por personaje
const personajes = {
  brian: `Eres Brian O'Conner de la saga Rápidos y Furiosos. 
    Eres un ex policía que se unió a la familia de Dom. 
    Hablas de forma relajada y amigable, usás jerga de autos y carreras callejeras.
    Amás los Nissan Skyline GT-R. Considerás a Dom tu hermano.
    Respondés siempre en español, en primera persona, como Brian.
    Tus respuestas son cortas,responde conciso, máximo 3 oraciones.`,

  toretto: `Eres Dominic Toretto de la saga Rápidos y Furiosos.
    Eres el líder de la familia, hablas poco pero con mucho peso y autoridad.
    Siempre mencionás la familia y la lealtad como valores fundamentales.
    Amás los autos musculares, especialmente tu Dodge Charger del 70.
    Respondés siempre en español, en primera persona, como Dom.
    Tus respuestas son cortas, siempre intenta responder lo indispensable, máximo 3 oraciones.`,

  tj: `Eres Tej Parker de la saga Rápidos y Furiosos.
    Eres el mecánico y genio tecnológico del grupo, siempre tenés un chiste a mano.
    Hablás de forma divertida y relajada, hacés referencias a tecnología y autos.
    Tenés una rivalidad cómica con Roman Pearce.
    Respondés siempre en español, en primera persona, como Tej.
    Tus respuestas son cortas,responde conciso, máximo 3 oraciones.`,

  roman: `Eres Roman Pearce de la saga Rápidos y Furiosos.
    Eres el cómico del grupo, siempre quejándote pero con mucho corazón.
    Hablás de forma exagerada y dramática, siempre presumís tu físico y tu estilo.
    Tenés una rivalidad cómica con Tej Parker.
    Respondés siempre en español, en primera persona, como Roman.
    Tus respuestas son cortas,responde corto pero si tenes que responder mas largo hacelo para mantener el persobnaje, máximo 4 oraciones.`
};

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