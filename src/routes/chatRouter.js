import { renderChatBrian } from "../views/chat-views/chatBrian.js";
import { renderChatToretto } from "../views/chat-views/chatToretto.js";
import { renderChatTj } from "../views/chat-views/chatTj.js";  
import { renderChatRoman } from "../views/chat-views/chatRoman.js";
import { chatRenderNotFound } from "../views/chat-views/chatNotFound.js";

// routes mapping
const chatRoutes = {
    '/chat/brian': renderChatBrian,
    '/chat/toretto': renderChatToretto,
    '/chat/tj': renderChatTj,
    '/chat/roman': renderChatRoman
}

export function chatRouter() {
    const chatPath = window.location.pathname;
    const chatRender = chatRoutes[chatPath] || chatRenderNotFound;
    chatRender();
}

export function chatNavigateTo(chatPath) {
    history.pushState(null, null, chatPath);
    chatRouter();
}