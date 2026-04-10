const replies = [
  "Hermano, esa pregunta no la vi venir.",
  "La familia es lo primero, ya lo sabés.",
  "No sé de qué hablás pero te banco.",
  "Esto lo hablamos después de la carrera.",
  "Interesante. Seguí.",
  "Eso no te lo esperabas, ¿no?",
  "Mira, la vida es como un cuarto de milla.",
];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Parseo del body
  const buffers = [];
  for await (const chunk of req) buffers.push(chunk);
  const body = JSON.parse(Buffer.concat(buffers).toString());

  const { message, character, history = [] } = body;

  await new Promise(r => setTimeout(r, 600));

  const reply = replies[Math.floor(Math.random() * replies.length)];

  return res.status(200).json({ reply });
}