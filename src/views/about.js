import emailIcon from '../../public/img/envelope-at-fill.svg';
import githubIcon from '../../public/img/github.svg';

export function renderAbout() {
  const app = document.querySelector("#app");
  if (!app) return;
  app.innerHTML = `
        <div class="middle-desktop">
            <h2>Sobre mí</h2>
            <p>Desarrollador web con experiencia en JavaScript, React y Node.js. Apasionado por crear soluciones innovadoras y eficientes.</p>
            <div class="skills-contact">
                <h3>Habilidades</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
                <h3>Contacto</h3>
                <div class="contact-info">
                    <p class="contact-item"><a href="mailto:galvezlandersmaximo@gmail.com"><img src="${emailIcon}" alt="Email"></a></p>
                    <p class="contact-item"><a href="https://github.com/MGalvezLanders" target="_blank"><img src="${githubIcon}" alt="GitHub"></a></p>
                </div>
            </div>
        </div>    
        `;
}
