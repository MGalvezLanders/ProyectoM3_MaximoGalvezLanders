import { renderChat } from "./views/chat.js";
import { renderHome } from "./views/home.js";
import { renderContact } from "./views/about.j";
import { renderNotFound } from "./views/notFound.js";

// routes mapping
const routes = {
    '/': renderHome,
    '/chat': renderChat,
    '/about': renderContact
}

export function router() {
    const path = window.location.pathname;
    const render = routes[path] || renderNotFound;
    render();
}

export function navigateTo(path) {
    window.pushState(null, '', path);
    router();
}