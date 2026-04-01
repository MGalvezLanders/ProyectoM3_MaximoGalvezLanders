export function renderContact() {
    const app = document.querySelector('#app');
    if (!app) return;
    app.innerHTML = `
        <h2>Contactos</h2>
        <p>Contactanos ante cualquier consulta o inquietud</p>
        `;
}