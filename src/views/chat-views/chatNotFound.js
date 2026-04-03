export function chatRenderNotFound() {
    const app = document.querySelector('#chat');
    if (!app) return;
    app.innerHTML = `
        <h2 class="not-found-title">404 - Chat no encontrado</h2>
        <p class="not-found-description">Lo sentimos, la página que estás buscando no existe.</p>
    `;
}