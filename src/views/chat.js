export function renderChat() {
    const app = document.querySelector('#app');
    if (!app) return;
    app.innerHTML = `
    <aside class="aside-characters">
        <div>
            <h2 class="aside-characters__title">Personajes</h2>
            <ul class="aside-characters__list">
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/src/img/brian.webp" alt="Brian O'Conner" class="aside-characters__avatar">
                    <span class="aside-characters__name">Brian O'Conner</span>
                </li>
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/src/img/dominic.avif" alt="Dominic Toretto" class="aside-characters__avatar">
                    <span class="aside-characters__name">Dominic Toretto</span>
                </li>
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/src/img/tej.jpg" alt="Tej Parker" class="aside-characters__avatar">
                    <span class="aside-characters__name">Tej Parker</span>
                </li>
                <li class="aside-characters__item">
                    <img src="${window.location.origin}/src/img/roman.webp" alt="Tej Parker" class="aside-characters__avatar">
                    <span class="aside-characters__name">Roman Pearce</span>
                </li>
            </ul>
        </div>

    </aside>
    <main id="chat" class="chat"></main>
        `;
}