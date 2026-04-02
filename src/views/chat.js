export function renderChat() {
    const app = document.querySelector('#app');
    if (!app) return;
    app.innerHTML = `
    <aside class="aside-characters">
        <div>
            <h2 class="aside-characters__title">Personajes</h2>
            <ul class="aside-characters__list">
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/src/img/brian.webp" alt="Brian O'Conner" class="aside-characters__avatar">
                    <span class="aside-characters__name">Brian O'Conner</span>
                </li>
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/src/img/dominic.avif" alt="Dominic Toretto" class="aside-characters__avatar">
                    <span class="aside-characters__name">Dominic Toretto</span>
                </li>
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/src/img/tej.jpg" alt="Tej Parker" class="aside-characters__avatar">
                    <span class="aside-characters__name">Tej Parker</span>
                </li>
            </ul>
        </div>

    </aside>
    <main class="chat">
            <!-- Header del chat -->
            <div class="chat__header">
                <div class="chat__user">
                <img src="${window.location.origin}/src/img/brian.webp" alt="Usuario" class="chat__avatar">
                <span class="chat__name">Brian O'Conner</span>
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
        `;
}