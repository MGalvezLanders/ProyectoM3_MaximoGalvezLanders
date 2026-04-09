import { renderChat, renderCharacterChat } from "../views/chat.js";
import { renderHome } from "../views/home.js";
import { renderAbout } from "../views/about.js";
import { renderNotFound } from "../views/notFound.js";

// routes mapping
const routes = {
    '/': renderHome,
    '/chat': renderChat,
    '/about': renderAbout
}

export function router() {
    let path = window.location.pathname;

    // Normalizar acceso directo desde Live Server (/src/index.html)
    if (path.endsWith('/index.html') || path === '/src' || path === '/src/') {
        path = '/';
    }
    
    // Detectar rutas dinámicas /chat/:character
    if (path.startsWith('/chat/')) {
        const characterName = path.split('/')[2];
        if (characterName) {
            document.body.classList.add('chat-active');
            renderChat(true); // con main
        } else {
            document.body.classList.remove('chat-active');
            renderChat(false); // sin main
        }
        renderCharacterChat(characterName);
        return;
    }
    
    document.body.classList.remove('chat-active');
    const render = routes[path] || renderNotFound;
    render();
}

export function navigateTo(path) {
    history.pushState(null, null, path);
    router();
}