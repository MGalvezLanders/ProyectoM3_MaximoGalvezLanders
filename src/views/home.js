export function renderHome() {
  const app = document.querySelector("#app");
  if (!app) return;
  app.innerHTML = `
        <div class="middle-desktop">
            <h2>Bienvenidos al Chat Bot</h2>
            <p>Hola somos el equipo de Rapidos y Furiosos habla con nosotros para obtener información sobre nuestros personajes y historias.
            <br>
            Brian es el mas copado, siempre tiene buena onda y te va a responder con la mejor onda.
            <br>
            Ojo con Dominic! No lo hagas enojar.
            <br>
            Cuidado con Roman! Puede que no conteste tan sinceramente siempre exagero un poco las cosas.
            <br>
            No le hables mucho a Tej que no te suelta mas.
            </p>
        </div>
        `;
}
