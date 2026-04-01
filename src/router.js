import { renderChat } from "./views/chat";
import { renderHome } from "./views/home";
import { renderContact } from "./views/about";
import { renderNotFound } from "./views/notFound";

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
    window.pushSatete(null, '', path);
    router();
}