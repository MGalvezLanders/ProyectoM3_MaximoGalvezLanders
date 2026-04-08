async function sendMessage(message, characterName) {
    try {
        const response = await fetch("/api/chatServer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message, character: characterName }) // pasás el personaje
        });
        const data = await response.json();
        console.log("Respuesta del servidor:", data);
        if (!response.ok) {
            return data.error || "Error en el servidor";
        }
        return data.reply;
    } catch (error) {
        console.log("Error en fetch:", error);
        return "Error de conexión";
    }
}

export function renderChat() {
    const app = document.querySelector('#app');
    if (!app) return;
    app.innerHTML = `
    <aside class="aside-characters">
        <div>
            <h2 class="aside-characters__title">Personajes</h2>
            <ul class="aside-characters__list">
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/img/brian.webp" alt="Brian O'Conner" class="aside-characters__avatar">
                    <span class="aside-characters__name">Brian O'Conner</span>
                    <a href="/chat/brian" class="chat__link">Chatear</a>
                </li>
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/img/dominic.avif" alt="Dominic Toretto" class="aside-characters__avatar">
                    <span class="aside-characters__name">Dominic Toretto</span>
                    <a href="/chat/toretto" class="chat__link">Chatear</a>
                </li>
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/img/tej.jpg" alt="Tej Parker" class="aside-characters__avatar">
                    <span class="aside-characters__name">Tej Parker</span>
                    <a href="/chat/tj" class="chat__link">Chatear</a>
                </li>
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/img/roman.webp" alt="Roman Pearce" class="aside-characters__avatar">
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
                <img src="${window.location.origin}/img/${character.img}" alt="${character.name}" class="chat__avatar">
                <span class="chat__name">${character.name}</span>
            </div>
        </div>
        <div class="chat__messages"></div>
        <div class="chat__input" id="chat">
            <input
                type="text"
                class="chat__field"
                placeholder="Escribí un mensaje..."
                id="input"
            >
            <button class="chat__button" id="send">Enviar</button>
            </div>
            `;
            const input = document.querySelector("#input");
            const button = document.querySelector("#send");
            const messagesContainer = document.querySelector(".chat__messages");
            
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") button.click();
            });
    button.addEventListener("click", async () => {
        const userText = input.value;
        input.value = "";

        messagesContainer.innerHTML += `<p class="chat__message--sent"> ${userText}</p>`;

        const botReply = await sendMessage(userText, characterName);

        messagesContainer.innerHTML += `<p class="chat__message--received"> ${botReply}</p>`;

    });
}


