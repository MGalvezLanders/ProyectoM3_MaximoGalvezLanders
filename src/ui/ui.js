const buttonChat = document.querySelector('.aside-characters__item');

export function chatEvent() {
    if (!buttonChat) return;
    buttonChat.addEventListener('click', () => {
        window.location.hash = '#/chat';
    });
}
