const chatContainer = document.querySelector('#chat');

export function renderChatToretto() {
    if (!chatContainer) return;
    chatContainer.innerHTML = `
            <!-- Header del chat -->
            <div class="chat__header">
                <div class="chat__user">
                <img src="${window.location.origin}/src/img/tj.jpg" alt="Usuario" class="chat__avatar">
                <span class="chat__name">Tj Parker</span>
                </div>
            </div>
            <!-- Mensajes -->
            <div class="chat__messages">
            </div>
            <!-- Input -->
            <div class="chat__input">
                <input 
                type="text" 
                class="chat__field" 
                placeholder="Escribí un mensaje..."
                >
                <button class="chat__button">Enviar</button>
            </div>
        `;
}