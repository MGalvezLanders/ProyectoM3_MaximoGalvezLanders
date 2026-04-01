export function renderChat() {
    const app = document.querySelector('.app');
    app.innerHTML = `
    <main class="chat">
                <!-- Header del chat -->
                <div class="chat__header">
                    <div class="chat__user">
                    <img src="avatar.jpg" alt="Usuario" class="chat__avatar">
                    <span class="chat__name">Juan Pérez</span>
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
            </main>
        `
}