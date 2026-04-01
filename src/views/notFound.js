export function renderNotFound() {
    const app = document.querySelector('.app');
    app.innerHTML = `
        <h1 class="not-found-title">404 - Página no encontrada</h1>
        <p class="not-found-description">Lo sentimos, la página que estás buscando no existe.</p>
    `;
}