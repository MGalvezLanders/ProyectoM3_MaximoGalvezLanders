export function renderNotFound() {
  const app = document.querySelector("#app");
  if (!app) return;
  app.innerHTML = `
        <div class="chat-not-found">
            <h2 class="not-found-title">404 - Paguina no encontrada</h2>
            <p class="not-found-description">Lo sentimos, la página que estás buscando no existe.</p>
        </div>
    `;
}
