// src/utils/chatUtils.js
export function buildHistory(history, userMessage, botReply) {
  return [
    ...history,
    { role: 'user', text: userMessage },
    { role: 'model', text: botReply }
  ];
}

export function isValidMessage(text) {
  return text.trim().length > 0;
}