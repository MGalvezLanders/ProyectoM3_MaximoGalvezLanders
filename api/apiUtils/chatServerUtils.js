export function formatHistory(history) {
  return history
    .filter(msg => {
      const content = msg.text || msg.content;
      return content && content.trim() !== "";
    })
    .map((msg) => {
      const content = msg.text || msg.content;

      return {
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: content }],
      };
    });
}

export function getSystemPrompt(character, personajes) {
  return personajes[character] || personajes.brian;
}
