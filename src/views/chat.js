import { navigateTo } from "../routes/router.js";
import { buildHistory, isValidMessage } from "../utils/chatUtils.js";

let history = [];

function resetHistory() {
  history = [];
}

async function sendMessage(userMessage, characterName) {
  try {
    const response = await fetch("/api/chatServer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: userMessage,
        character: characterName,
        history: history,
      }), // pasás el personaje
    });
    const data = await response.json();

    history = buildHistory(history, userMessage, data.reply); // Actualizás el historial con el mensaje del usuario y la respuesta del bot

    if (!response.ok) {
      return data.error || "Error en el servidor";
    }

    return data.reply;
  } catch (error) {
    console.log("Error en fetch:", error);
    return "Error de conexión";
  }
}

export function renderChat(withChat = false) {
  const app = document.querySelector("#app");
  if (!app) return;
  app.innerHTML = `
    <aside class="aside-characters">
        <div>
            <h2 class="aside-characters__title">Personajes</h2>
            <ul class="aside-characters__list">
            <a href="/chat/brian">
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/img/brian.webp" alt="Brian O'Conner" class="aside-characters__avatar">
                    <span class="aside-characters__name">Brian O'Conner</span>
                </li>
            </a>
            <a href="/chat/toretto">
                    <li class="aside-characters__item">
                        <img src="${window.location.origin}/img/dominic.avif" alt="Dominic Toretto" class="aside-characters__avatar">
                        <span class="aside-characters__name">Dominic Toretto</span>
                    </li>
                </a>
                <a href="/chat/tj">
                    <li class="aside-characters__item">
                        <img src="${window.location.origin}/img/tej.jpg" alt="Tej Parker" class="aside-characters__avatar">
                        <span class="aside-characters__name">Tej Parker</span>
                    </li>
                </a>
                <a href="/chat/roman">
                    <li class="aside-characters__item">
                        <img src="${window.location.origin}/img/roman.webp" alt="Roman Pearce" class="aside-characters__avatar">
                        <span class="aside-characters__name">Roman Pearce</span>
                    </li>
                </a>
            </ul>
        </div>

    </aside>
    ${withChat ? '<main id="chat" class="chat"></main>' : ""}
        `;
}

export function renderCharacterChat(characterName) {
  const chatMain = document.querySelector("#chat");
  if (!chatMain) return;

  resetHistory(); // Limpiar el historial al cargar un nuevo personaje

  // Mapeo de personajes
  const characters = {
    brian: { name: "Brian O'Conner", img: "brian.webp" },
    toretto: { name: "Dominic Toretto", img: "dominic.avif" },
    tj: { name: "Tej Parker", img: "tej.jpg" },
    roman: { name: "Roman Pearce", img: "roman.webp" },
  };

  const character = characters[characterName];
  if (!character) return;

  chatMain.innerHTML = `
        <div class="chat__header">
            <button class="back-button">← Volver</button>
            <div class="chat__user">
                <img src="${window.location.origin}/img/${character.img}" alt="${character.name}" class="chat__avatar">
                <span class="chat__name">${character.name}</span>
            </div>
        </div>
        <div class="chat__messages">
        <div class="typing-bubble" id="typingIndicator" style="display: none;">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        </div>
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
  const backButton = document.querySelector(".back-button");
  backButton.addEventListener("click", () => navigateTo("/chat"));

  const input = document.querySelector("#input");
  const button = document.querySelector("#send");
  const messagesContainer = document.querySelector(".chat__messages");

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") button.click();
  });

  button.addEventListener("click", async () => {
    const userText = input.value;
    if (!isValidMessage(userText)) return;
    input.value = "";

     const typingIndicator = document.getElementById('typingIndicator');

    const sentMsg = document.createElement('p');
    sentMsg.className = 'chat__message--sent';
    sentMsg.textContent = userText;
    messagesContainer.appendChild(sentMsg);

    messagesContainer.appendChild(typingIndicator);
    typingIndicator.style.display = 'flex';
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // scroll al enviar

    const botReply = await sendMessage(userText, characterName);

    typingIndicator.style.display = 'none';

    const receivedMsg = document.createElement('p');
    receivedMsg.className = 'chat__message--received';
    receivedMsg.textContent = botReply;
    messagesContainer.appendChild(receivedMsg);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // scroll al recibir
  });
}
