export function formatHistory(history) {
  return history.map(msg => ({
    role: msg.role,
    parts: [{ text: msg.text }]
  }));
}

export function getSystemPrompt(character, personajes) {
  return personajes[character] || personajes.brian;
}