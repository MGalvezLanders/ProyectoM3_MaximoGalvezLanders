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
                    <a href="/chat/brian" class="chat__link">Chatear</a>
                </li>
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/src/img/dominic.avif" alt="Dominic Toretto" class="aside-characters__avatar">
                    <span class="aside-characters__name">Dominic Toretto</span>
                    <a href="/chat/toretto" class="chat__link">Chatear</a>
                </li>
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/src/img/tej.jpg" alt="Tej Parker" class="aside-characters__avatar">
                    <span class="aside-characters__name">Tej Parker</span>
                    <a href="/chat/tj" class="chat__link">Chatear</a>
                </li>
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/src/img/roman.webp" alt="Roman Pearce" class="aside-characters__avatar">
                    <span class="aside-characters__name">Roman Pearce</span>
                    <a href="/chat/roman" class="chat__link">Chatear</a>
                </li>
            </ul>
        </div>

    </aside>
    <main id="chat" class="chat"></main>
        `;
}

export function renderCharacterChat(characterName) {
    const chatMain = document.querySelector('#chat');
    if (!chatMain) return;

    // Mapeo de personajes
    const characters = {
        brian: { name: 'Brian O\'Conner', img: 'brian.webp' },
        toretto: { name: 'Dominic Toretto', img: 'dominic.avif' },
        tj: { name: 'Tej Parker', img: 'tej.jpg' },
        roman: { name: 'Roman Pearce', img: 'roman.webp' }
    };

    const character = characters[characterName];
    if (!character) return;

    chatMain.innerHTML = `
        <div class="chat__header">
            <div class="chat__user">
                <img src="${window.location.origin}/src/img/${character.img}" alt="${character.name}" class="chat__avatar">
                <span class="chat__name">${character.name}</span>
            </div>
        </div>
        <div class="chat__messages"></div>
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