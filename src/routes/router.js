import { renderChat } from "../views/chat.js";
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
    const path = window.location.pathname;
    const render = routes[path] || renderNotFound;
    render();
}

export function navigateTo(path) {
    history.pushState(null, null, path);
    router();
}