export function renderHome() {
    const app = document.querySelector('#app');
    if (!app) return;
    app.innerHTML = `
        <h2>Bienvenidos al Chat bot</h2>
        <p>¡Hola! Soy tu asistente virtual, diseñado para ayudarte a resolver tus dudas y brindarte información útil. Puedes hacerme preguntas sobre una amplia variedad de temas, desde tecnología hasta entretenimiento, y haré todo lo posible para proporcionarte respuestas precisas y útiles. ¡No dudes en preguntar lo que necesites!</p>
        `;
}