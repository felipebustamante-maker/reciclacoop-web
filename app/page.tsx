const organizationTypes = ["Empresa", "Municipio", "Colegio", "Comunidad", "Otro"];

const solutions = [
  {
    number: "01",
    title: "Empresas",
    text: "Educación ambiental para empresas, activaciones internas, voluntariado corporativo y reportabilidad de impacto.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=82",
  },
  {
    number: "02",
    title: "Municipios",
    text: "Educación ambiental territorial, campañas comunales, activación comunitaria y reciclaje inclusivo.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=82",
  },
  {
    number: "03",
    title: "Colegios",
    text: "Talleres, reciclaje escolar, formación de eco-líderes, huertos y programas educativos.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=82",
  },
  {
    number: "04",
    title: "Comunidades y condominios",
    text: "Separación en origen, activación de salas de reciclaje, talleres prácticos y hábitos sostenibles.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=82",
  },
];

const advantages = [
  ["Educación territorial", "Diseñamos actividades adaptadas a cada comunidad, empresa o institución."],
  ["Reciclaje inclusivo", "Promovemos una economía circular que dignifica el trabajo y genera oportunidades locales."],
  ["Reportabilidad e impacto", "Medimos, comunicamos y reportamos resultados ambientales y sociales."],
  ["Alianza con Revivo", "Integramos educación, comunidad, operación, trazabilidad y logística para aumentar el impacto."],
];

const services = [
  ["Educación ambiental para empresas", "Diseño e implementación de programas ambientales para empresas que buscan fortalecer su cultura interna, alcanzar objetivos de sostenibilidad y comunicar impacto."],
  ["Educación ambiental territorial", "Talleres, charlas, campañas y experiencias formativas para colegios, comunidades, empresas y organizaciones."],
  ["Activación de puntos de reciclaje", "Acompañamiento en la implementación, uso correcto y participación comunitaria en puntos de reciclaje y salas de separación."],
  ["Reportabilidad e impacto", "Registro de actividades, indicadores, evidencia fotográfica y reportes para clientes, comunidades y aliados."],
];

const programs = [
  {
    title: "Un punto, un árbol",
    tag: "Regeneración territorial",
    text: "Integramos reciclaje, educación ambiental y plantación de árboles nativos para regenerar espacios y activar comunidades.",
  },
  {
    title: "Comunidad Circular",
    tag: "Participación comunitaria",
    text: "Programa para condominios, barrios y organizaciones que quieren implementar separación en origen, educación y participación.",
  },
  {
    title: "Empresa con Impacto",
    tag: "Cultura ambiental corporativa",
    text: "Programa de educación ambiental para empresas que buscan educar, activar a sus equipos y financiar impacto territorial medible.",
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brandLight" : ""}`} href="#inicio" aria-label="Reciclacoop, volver al inicio">
      <span className="brandCrop">
        <img src="/reciclacoop-logo.png" alt="Reciclacoop" />
      </span>
    </a>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="inicio">
      <header className="siteHeader">
        <div className="shell headerInner">
          <Brand />
          <nav className="desktopNav" aria-label="Navegación principal">
            <a href="#inicio">Inicio</a>
            <a href="#soluciones">Soluciones</a>
            <a href="#servicios">Servicios</a>
            <a href="#impacto">Impacto</a>
            <a href="#revivo">Revivo</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a className="button buttonSmall" href="#contacto">Solicitar diagnóstico <Arrow /></a>
          <details className="mobileMenu">
            <summary aria-label="Abrir menú"><span /><span /></summary>
            <nav aria-label="Navegación móvil">
              <a href="#soluciones">Soluciones</a><a href="#servicios">Servicios</a>
              <a href="#impacto">Impacto</a><a href="#revivo">Revivo</a><a href="#contacto">Contacto</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero">
        <div className="heroOrb" />
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow"><span /> Cooperativa ambiental · Desde 2020</p>
            <h1>Educación ambiental e impacto medible que activan <em>comunidades, empresas y municipios.</em></h1>
            <p className="heroLead">Diseñamos e implementamos soluciones territoriales que educan, reciclan y generan impacto medible.</p>
            <div className="heroActions">
              <a className="button" href="#contacto">Solicitar diagnóstico <Arrow /></a>
              <a className="button buttonOutline" href="#soluciones">Ver soluciones <span aria-hidden="true">↓</span></a>
            </div>
            <div className="trustLine">
              <span className="trustAvatars" aria-hidden="true"><i>R</i><i>C</i><i>+</i></span>
              <p><strong>Impacto que se ve y se mide.</strong><br />Territorio, educación y operación conectados.</p>
            </div>
          </div>

          <div className="heroVisual" aria-label="Educación ambiental y acción comunitaria">
            <div className="photo photoMain">
              <img src="/hero-voluntario-reciclacoop.png" alt="Voluntario de Reciclacoop participando en una actividad ambiental" />
              <span className="photoLabel">Activación territorial <Arrow /></span>
            </div>
            <div className="photo photoSmall">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=88" alt="Manos plantando un árbol joven" />
            </div>
            <div className="impactBadge"><strong>+300</strong><span>árboles<br />plantados</span></div>
          </div>

          <form className="leadForm" id="contacto" action="mailto:cooperativareciclacoop@gmail.com" method="post" encType="text/plain">
            <div className="formHeading">
              <div><span>CONVERSEMOS</span><h2>Hablemos de tu proyecto</h2></div>
              <span className="formArrow" aria-hidden="true">↘</span>
            </div>
            <div className="formGrid">
              <label><span>Nombre completo</span><input name="Nombre" type="text" placeholder="Tu nombre" required /></label>
              <label><span>Organización</span><input name="Organización" type="text" placeholder="Nombre de la organización" required /></label>
              <label><span>Correo electrónico</span><input name="Correo" type="email" placeholder="nombre@organizacion.cl" required /></label>
              <label><span>Teléfono</span><input name="Teléfono" type="tel" placeholder="+56 9 0000 0000" required /></label>
              <label className="fullField"><span>Tipo de organización</span>
                <select name="Tipo de organización" defaultValue="" required>
                  <option value="" disabled>Selecciona una opción</option>
                  {organizationTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
            </div>
            <button className="button formButton" type="submit">Solicitar diagnóstico <Arrow /></button>
            <p className="formNote">Sin compromiso. Te contactaremos para entender tu necesidad.</p>
          </form>
        </div>
      </section>

      <section className="impactStrip" id="impacto" aria-label="Impacto de Reciclacoop">
        <div className="shell metrics">
          <div><strong>+222</strong><span>toneladas desviadas<br />del vertedero</span></div>
          <div><strong>+300</strong><span>comunidades<br />beneficiadas</span></div>
          <div><strong>+20</strong><span>comunas con<br />presencia</span></div>
          <div><strong>+300</strong><span>árboles<br />plantados</span></div>
        </div>
      </section>

      <section className="section solutionsSection" id="soluciones">
        <div className="shell">
          <div className="sectionHeading splitHeading">
            <div><p className="eyebrow"><span /> Soluciones a la medida</p><h2>Una solución para cada organización.</h2></div>
            <p>Convertimos objetivos ambientales en programas concretos, participativos y medibles.</p>
          </div>
          <div className="solutionsGrid">
            {solutions.map((item) => (
              <article className="solutionCard" key={item.title}>
                <img src={item.image} alt="" />
                <div className="solutionShade" />
                <span className="cardNumber">{item.number}</span>
                <div className="cardCopy"><h3>{item.title}</h3><p>{item.text}</p><a href="#contacto">Ver solución <Arrow /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section whySection">
        <div className="shell whyGrid">
          <div className="whyIntro">
            <p className="eyebrow eyebrowLight"><span /> Nuestro diferencial</p>
            <h2>Más que reciclar.<br /><em>Activamos cambios.</em></h2>
            <p>Conectamos educación, participación y operación para que el impacto ambiental se transforme en cultura.</p>
            <a className="textLink lightLink" href="#servicios">Conoce lo que hacemos <Arrow /></a>
          </div>
          <div className="advantages">
            {advantages.map(([title, text], index) => (
              <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section servicesSection" id="servicios">
        <div className="shell">
          <div className="sectionHeading centeredHeading"><p className="eyebrow"><span /> Servicios principales</p><h2>Capacidades que convierten<br />propósito en resultados.</h2></div>
          <div className="serviceList">
            {services.map(([title, text], index) => (
              <article key={title}>
                <span className="serviceIndex">0{index + 1}</span>
                <h3>{title}</h3><p>{text}</p>
                <a className="roundArrow" href="#contacto" aria-label={`Conocer más sobre ${title}`}><Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section processSection">
        <div className="shell">
          <div className="sectionHeading splitHeading"><div><p className="eyebrow"><span /> Nuestro proceso</p><h2>Cómo trabajamos.</h2></div><p>Un modelo simple, trazable y adaptable a la realidad de cada territorio.</p></div>
          <div className="processLine">
            {[
              ["Diagnóstico", "Entendemos tu contexto, necesidades y objetivos."],
              ["Diseño", "Creamos un programa a la medida con actividades, metas e indicadores."],
              ["Implementación", "Ejecutamos talleres, campañas y activaciones en terreno."],
              ["Medición", "Entregamos evidencia, indicadores y resultados comunicables."],
            ].map(([title, text], index) => <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section programsSection">
        <div className="shell">
          <div className="sectionHeading splitHeading"><div><p className="eyebrow"><span /> Programas destacados</p><h2>Listos para generar impacto.</h2></div><p>Programas diseñados para pasar de la intención a la acción con una propuesta clara.</p></div>
          <div className="programGrid">
            {programs.map((program, index) => (
              <article key={program.title} className={index === 0 ? "featuredProgram" : ""}>
                <div className="programTop"><span>{program.tag}</span><b>0{index + 1}</b></div>
                <h3>{program.title}</h3><p>{program.text}</p>
                <a href="#contacto">Solicitar propuesta <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section allianceSection" id="revivo">
        <div className="shell allianceGrid">
          <div className="allianceCopy">
            <p className="eyebrow"><span /> Alianza estratégica con Revivo</p>
            <h2>Educación, territorio y operación trabajando juntos.</h2>
            <p>Reciclacoop aporta educación ambiental, comunidad, activación territorial, formación e impacto social. Revivo aporta infraestructura, logística, tecnología, trazabilidad y operación de reciclaje. Juntos permiten implementar programas circulares con impacto real y resultados medibles.</p>
          </div>
          <div className="allianceDiagram">
            <div className="partner partnerRevivo"><span>OPERACIÓN</span><h3>REVIVO</h3><ul><li>Infraestructura</li><li>Logística</li><li>Tecnología</li><li>Trazabilidad</li><li>Operación</li></ul></div>
            <div className="plus" aria-hidden="true">+</div>
            <div className="partner partnerCoop"><span>ACTIVACIÓN</span><h3>RECICLACOOP</h3><ul><li>Educación</li><li>Comunidad</li><li>Activación territorial</li><li>Formación</li><li>Impacto social</li></ul></div>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="ctaShape" />
        <div className="shell ctaInner">
          <p className="eyebrow eyebrowLight"><span /> Comencemos</p>
          <h2>Transformemos tu organización<br />en un <em>agente de cambio.</em></h2>
          <p>Solicita un diagnóstico y diseñemos juntos un programa de educación ambiental, reciclaje e impacto medible para tu empresa, municipio, colegio o comunidad.</p>
          <a className="button" href="#contacto">Solicitar diagnóstico <Arrow /></a>
          <small>Sin compromiso. Respuesta en menos de 48 horas.</small>
        </div>
      </section>

      <footer>
        <div className="shell footerTop">
          <div className="footerBrand"><Brand light /><p>Educación ambiental, economía circular e impacto comunitario desde 2020.</p></div>
          <div><span className="footerLabel">Contacto</span><a href="mailto:cooperativareciclacoop@gmail.com">cooperativareciclacoop@gmail.com</a><a href="https://www.instagram.com/Reciclacoop" target="_blank" rel="noreferrer">Instagram · @Reciclacoop</a></div>
          <div><span className="footerLabel">Equipo</span><p>María Elena Ortiz<br /><small>Gerente general</small></p><p>Felipe Bustamante<br /><small>Encargado de operaciones</small></p></div>
          <div><span className="footerLabel">Explora</span><a href="#soluciones">Soluciones</a><a href="#servicios">Servicios</a><a href="#impacto">Impacto</a><a href="#contacto">Contacto</a></div>
        </div>
        <div className="shell footerBottom"><span>© 2026 Reciclacoop</span><div><a href="#">Política de privacidad</a><a href="#">Términos y condiciones</a></div></div>
      </footer>
    </main>
  );
}
