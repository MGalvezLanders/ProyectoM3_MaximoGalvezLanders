export function renderAbout() {
    const app = document.querySelector('#app');
    if (!app) return;
    app.innerHTML = `
        <div class="middle-desktop">
            <h2>Contactos</h2>
            <p>Contactanos ante cualquier consulta o inquietud.
            <br>
            Sabes que siempre estamos aca para vos ;)</p>
        </div>    
        `;
}