function pick(value, language = "en") {
  if (!value || typeof value !== "object" || Array.isArray(value)) return value;
  return value[language] || value.en;
}

const websiteThemes = {
  adventure: {
    id: "adventure",
    title: {
      en: "Creature Quest",
      es: "Creature Quest",
    },
    summary: {
      en: "A playful club site for kids who want to join weekend adventures.",
      es: "Una web divertida para un club infantil de aventuras de fin de semana.",
    },
    palette: {
      accent: "#ff7a18",
      accentSoft: "#fff0e4",
      accentStrong: "#ff5a1f",
      ink: "#1e1b4b",
      surface: "#fff8f2",
    },
    brand: "Creature Quest",
    navLinks: {
      en: ["Home", "Routes", "Contact"],
      es: ["Inicio", "Rutas", "Contacto"],
    },
    heroEyebrow: {
      en: "Your first website mission",
      es: "Tu primera mision web",
    },
    heroTitle: {
      en: "Build a page that welcomes young adventurers.",
      es: "Construye una pagina que reciba a jovenes aventureros.",
    },
    heroText: {
      en: "We are designing a friendly one-page site with a clear top, middle, and bottom so visitors know where to click next.",
      es: "Estamos disenando una web de una sola pagina, clara y amigable, para que las visitas sepan donde hacer clic despues.",
    },
    heroPrimary: {
      en: "See the routes",
      es: "Ver las rutas",
    },
    heroSecondary: {
      en: "Write to the team",
      es: "Escribir al equipo",
    },
    heroCardLabel: {
      en: "Today's build plan",
      es: "Plan de hoy",
    },
    heroCardTitle: {
      en: "A clear page helps users trust your work faster.",
      es: "Una pagina clara ayuda a que la gente confie en tu trabajo mas rapido.",
    },
    heroBullets: {
      en: [
        "A top section with navigation",
        "A middle section that explains the offer",
        "A bottom section with a simple contact form",
      ],
      es: [
        "Una parte superior con navegacion",
        "Una parte central que explica la idea",
        "Una parte inferior con un formulario simple",
      ],
    },
    highlightsEyebrow: {
      en: "Main sections",
      es: "Secciones principales",
    },
    highlightsTitle: {
      en: "Three blocks that make the page feel complete.",
      es: "Tres bloques para que la pagina se sienta completa.",
    },
    highlightsText: {
      en: "Cards help users scan what matters. They also teach you how to repeat the same UI pattern cleanly.",
      es: "Las tarjetas ayudan a escanear lo importante. Tambien te ensenan a repetir el mismo patron visual de forma limpia.",
    },
    cards: {
      en: [
        {
          title: "Safe beginner route",
          text: "Explain one adventure route for first-timers.",
        },
        {
          title: "Friendly mentors",
          text: "Show that the team guides children step by step.",
        },
        {
          title: "Weekend challenge",
          text: "Invite visitors to join the next event.",
        },
      ],
      es: [
        {
          title: "Ruta para empezar",
          text: "Explica una aventura para quienes empiezan.",
        },
        {
          title: "Mentores cercanos",
          text: "Muestra que el equipo acompana paso a paso.",
        },
        {
          title: "Reto del finde",
          text: "Invita a unirse al siguiente evento.",
        },
      ],
    },
    contactEyebrow: {
      en: "Last section",
      es: "Ultima seccion",
    },
    contactTitle: {
      en: "Finish with a form and footer.",
      es: "Termina con un formulario y un footer.",
    },
    contactText: {
      en: "A simple form gives the page a real purpose. The footer closes the layout and makes the site feel complete.",
      es: "Un formulario simple le da un objetivo real a la pagina. El footer cierra el layout y hace que la web se sienta completa.",
    },
    contactBullets: {
      en: [
        "Ask for name, email, and message",
        "Keep spacing calm and easy to scan",
        "Add a short footer line at the end",
      ],
      es: [
        "Pide nombre, email y mensaje",
        "Mantiene un espaciado claro y facil de leer",
        "Anade una linea corta en el footer",
      ],
    },
    labels: {
      en: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send practice message",
      },
      es: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        submit: "Enviar mensaje de practica",
      },
    },
    formPlaceholder: {
      en: "Tell us which route you would like to join.",
      es: "Cuentanos que ruta te gustaria hacer.",
    },
    formSuccess: {
      en: "Nice. Your practice form now reacts like a real page.",
      es: "Muy bien. Tu formulario ya reacciona como una pagina real.",
    },
    footer: {
      en: "Built with Milo during the guided website studio.",
      es: "Creado con Milo durante el taller guiado de paginas web.",
    },
  },
  travel: {
    id: "travel",
    title: {
      en: "Travel Journal",
      es: "Travel Journal",
    },
    summary: {
      en: "A calm travel site for sharing city guides and weekend plans.",
      es: "Una web de viajes tranquila para compartir guias de ciudad y planes de fin de semana.",
    },
    palette: {
      accent: "#0f766e",
      accentSoft: "#e8fbf7",
      accentStrong: "#0b5c56",
      ink: "#11203b",
      surface: "#f7fbfc",
    },
    brand: "Travel Journal",
    navLinks: {
      en: ["Home", "Guides", "Contact"],
      es: ["Inicio", "Guias", "Contacto"],
    },
    heroEyebrow: {
      en: "Your first website mission",
      es: "Tu primera mision web",
    },
    heroTitle: {
      en: "Build a travel page people can scan in seconds.",
      es: "Construye una pagina de viajes que se entienda en segundos.",
    },
    heroText: {
      en: "We are creating a friendly landing page with navigation, a hero, a highlights section, and a contact form.",
      es: "Vamos a crear una landing page amigable con navegacion, hero, seccion de destacados y formulario de contacto.",
    },
    heroPrimary: {
      en: "View city guides",
      es: "Ver guias",
    },
    heroSecondary: {
      en: "Plan a trip",
      es: "Planear un viaje",
    },
    heroCardLabel: {
      en: "Today's build plan",
      es: "Plan de hoy",
    },
    heroCardTitle: {
      en: "Good structure makes even simple websites feel professional.",
      es: "Una buena estructura hace que hasta una web simple parezca profesional.",
    },
    heroBullets: {
      en: [
        "Guide the eye from top to bottom",
        "Repeat content with cards",
        "Finish with a real action area",
      ],
      es: [
        "Guiar la mirada de arriba abajo",
        "Repetir contenido con tarjetas",
        "Terminar con una accion real",
      ],
    },
    highlightsEyebrow: {
      en: "Main sections",
      es: "Secciones principales",
    },
    highlightsTitle: {
      en: "Show three reasons to keep reading.",
      es: "Muestra tres razones para seguir leyendo.",
    },
    highlightsText: {
      en: "Highlight cards are great beginner practice because they teach hierarchy, spacing, and repetition.",
      es: "Las tarjetas de destacados son perfectas para empezar porque ensenan jerarquia, espaciado y repeticion.",
    },
    cards: {
      en: [
        {
          title: "Weekend guide",
          text: "Share one city route for a short trip.",
        },
        {
          title: "Budget tips",
          text: "Show practical advice visitors can use fast.",
        },
        {
          title: "Food stops",
          text: "Recommend one memorable place to eat.",
        },
      ],
      es: [
        {
          title: "Guia de fin de semana",
          text: "Comparte una ruta de ciudad para un viaje corto.",
        },
        {
          title: "Consejos de presupuesto",
          text: "Muestra ideas practicas que se entiendan rapido.",
        },
        {
          title: "Paradas para comer",
          text: "Recomienda un lugar facil de recordar.",
        },
      ],
    },
    contactEyebrow: {
      en: "Last section",
      es: "Ultima seccion",
    },
    contactTitle: {
      en: "Close the page with a form and footer.",
      es: "Cierra la pagina con un formulario y un footer.",
    },
    contactText: {
      en: "Your form gives visitors a next step. Your footer gives the whole page a clean ending.",
      es: "El formulario le da al visitante un siguiente paso. El footer le da a la pagina un cierre limpio.",
    },
    contactBullets: {
      en: [
        "Invite visitors to ask for a guide",
        "Style labels and inputs clearly",
        "Use the footer to repeat the brand",
      ],
      es: [
        "Invita a pedir una guia",
        "Da estilo claro a etiquetas e inputs",
        "Usa el footer para repetir la marca",
      ],
    },
    labels: {
      en: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send travel note",
      },
      es: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        submit: "Enviar nota de viaje",
      },
    },
    formPlaceholder: {
      en: "Tell us which city guide you would like next.",
      es: "Cuentanos que guia de ciudad te gustaria ver despues.",
    },
    formSuccess: {
      en: "Nice. The page now feels more real because the form reacts.",
      es: "Muy bien. La pagina ya se siente mas real porque el formulario responde.",
    },
    footer: {
      en: "Built with Milo during the guided website studio.",
      es: "Creado con Milo durante el taller guiado de paginas web.",
    },
  },
};

function themeCopy(themeId, language = "en") {
  const theme = websiteThemes[themeId] || websiteThemes.adventure;

  return {
    ...theme,
    title: pick(theme.title, language),
    summary: pick(theme.summary, language),
    navLinks: pick(theme.navLinks, language),
    heroEyebrow: pick(theme.heroEyebrow, language),
    heroTitle: pick(theme.heroTitle, language),
    heroText: pick(theme.heroText, language),
    heroPrimary: pick(theme.heroPrimary, language),
    heroSecondary: pick(theme.heroSecondary, language),
    heroCardLabel: pick(theme.heroCardLabel, language),
    heroCardTitle: pick(theme.heroCardTitle, language),
    heroBullets: pick(theme.heroBullets, language),
    highlightsEyebrow: pick(theme.highlightsEyebrow, language),
    highlightsTitle: pick(theme.highlightsTitle, language),
    highlightsText: pick(theme.highlightsText, language),
    cards: pick(theme.cards, language),
    contactEyebrow: pick(theme.contactEyebrow, language),
    contactTitle: pick(theme.contactTitle, language),
    contactText: pick(theme.contactText, language),
    contactBullets: pick(theme.contactBullets, language),
    labels: pick(theme.labels, language),
    formPlaceholder: pick(theme.formPlaceholder, language),
    formSuccess: pick(theme.formSuccess, language),
    footer: pick(theme.footer, language),
  };
}

function buildHtml(themeId, language, stage) {
  const theme = themeCopy(themeId, language);
  const menuLabel = language === "es" ? "Menu" : "Menu";

  const header = `
  <header class="site-header" id="top">
    <nav class="navbar">
      <a class="brand" href="#top">${theme.brand}</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="navLinks">
        ${menuLabel}
      </button>
      <div class="nav-links" id="navLinks">
        <a href="#top">${theme.navLinks[0]}</a>
        <a href="#highlights">${theme.navLinks[1]}</a>
        <a href="#contact">${theme.navLinks[2]}</a>
      </div>
    </nav>
  </header>`;

  const hero =
    stage >= 2
      ? `
    <section class="hero-section">
      <div class="hero-copy">
        <p class="hero-kicker">${theme.heroEyebrow}</p>
        <h1>${theme.heroTitle}</h1>
        <p>${theme.heroText}</p>
        <div class="hero-actions">
          <a class="hero-btn primary" href="#highlights">${theme.heroPrimary}</a>
          <a class="hero-btn secondary" href="#contact">${theme.heroSecondary}</a>
        </div>
      </div>

      <aside class="hero-card">
        <span class="hero-card-label">${theme.heroCardLabel}</span>
        <h2>${theme.heroCardTitle}</h2>
        <ul>
          ${theme.heroBullets.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </aside>
    </section>`
      : "";

  const highlights =
    stage >= 3
      ? `
    <section class="info-section" id="highlights">
      <div class="section-copy">
        <p class="section-kicker">${theme.highlightsEyebrow}</p>
        <h2>${theme.highlightsTitle}</h2>
        <p>${theme.highlightsText}</p>
      </div>

      <div class="card-grid">
        ${theme.cards
          .map(
            (card) => `
          <article class="feature-card">
            <h3>${card.title}</h3>
            <p>${card.text}</p>
          </article>`
          )
          .join("")}
      </div>
    </section>`
      : "";

  const contact =
    stage >= 4
      ? `
    <section class="contact-section" id="contact">
      <div class="contact-copy">
        <p class="section-kicker">${theme.contactEyebrow}</p>
        <h2>${theme.contactTitle}</h2>
        <p>${theme.contactText}</p>
        <ul class="contact-list">
          ${theme.contactBullets.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <form class="contact-form">
        <label>
          ${theme.labels.name}
          <input type="text" name="name" placeholder="${theme.labels.name}" />
        </label>
        <label>
          ${theme.labels.email}
          <input type="email" name="email" placeholder="hello@example.com" />
        </label>
        <label>
          ${theme.labels.message}
          <textarea name="message" rows="4" placeholder="${theme.formPlaceholder}"></textarea>
        </label>
        <button type="submit" class="hero-btn primary">${theme.labels.submit}</button>
        <p class="form-note">${language === "es" ? "Tu mensaje aparecera aqui." : "Your practice message will appear here."}</p>
      </form>
    </section>

    <footer class="site-footer">
      <p>${theme.footer}</p>
    </footer>`
      : "";

  return `<div class="page-shell">
${stage >= 1 ? header : ""}
  <main class="main-stack">
${hero}
${highlights}
${contact}
  </main>
</div>`;
}

function buildCss(themeId, stage) {
  const { palette } = websiteThemes[themeId] || websiteThemes.adventure;

  const base = `:root {
  --guide-accent: ${palette.accent};
  --guide-accent-strong: ${palette.accentStrong};
  --guide-accent-soft: ${palette.accentSoft};
  --guide-ink: ${palette.ink};
  --guide-surface: ${palette.surface};
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background: linear-gradient(180deg, #ffffff, var(--guide-surface));
  color: var(--guide-ink);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
}

.main-stack {
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-bottom: 48px;
}
`;

  const navCss =
    stage >= 1
      ? `
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 18px 24px;
}

.brand {
  font-size: 1.15rem;
  font-weight: 900;
  letter-spacing: 0.02em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-links a {
  font-weight: 700;
}

.menu-toggle {
  display: none;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 999px;
  background: white;
  color: var(--guide-ink);
  padding: 10px 14px;
  font-weight: 800;
}

@media (max-width: 760px) {
  .navbar {
    flex-wrap: wrap;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding-top: 12px;
  }

  .nav-links.is-open {
    display: flex;
  }
}
`
      : "";

  const heroCss =
    stage >= 2
      ? `
.hero-section,
.info-section,
.contact-section {
  max-width: 1120px;
  width: min(100% - 32px, 1120px);
  margin: 0 auto;
}

.hero-section {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 24px;
  align-items: center;
  padding-top: 24px;
}

.hero-kicker,
.section-kicker,
.hero-card-label {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--guide-accent-soft);
  color: var(--guide-accent-strong);
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.hero-copy h1,
.section-copy h2,
.contact-copy h2 {
  margin: 16px 0 12px;
  font-size: clamp(2.3rem, 5vw, 4.2rem);
  line-height: 0.98;
}

.hero-copy p,
.section-copy p,
.contact-copy p,
.feature-card p,
.site-footer p,
.contact-form label,
.contact-list {
  color: rgba(17, 24, 39, 0.8);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 800;
  border: 1px solid transparent;
}

.hero-btn.primary {
  background: var(--guide-accent);
  color: white;
}

.hero-btn.secondary {
  border-color: rgba(15, 23, 42, 0.1);
  background: white;
}

.hero-card {
  padding: 24px;
  border-radius: 24px;
  background: white;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
}

.hero-card h2 {
  margin: 14px 0 12px;
  font-size: 1.5rem;
  line-height: 1.25;
}

.hero-card ul {
  margin: 0;
  padding-left: 18px;
}

@media (max-width: 920px) {
  .hero-section {
    grid-template-columns: 1fr;
  }
}
`
      : "";

  const cardCss =
    stage >= 3
      ? `
.info-section {
  display: grid;
  gap: 20px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.feature-card {
  padding: 22px;
  border-radius: 20px;
  background: white;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.06);
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.15rem;
}

@media (max-width: 820px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
`
      : "";

  const contactCss =
    stage >= 4
      ? `
.contact-section {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 1.05fr);
  gap: 22px;
  align-items: start;
}

.contact-list {
  margin: 18px 0 0;
  padding-left: 18px;
}

.contact-form {
  display: grid;
  gap: 14px;
  padding: 24px;
  border-radius: 24px;
  background: white;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.06);
}

.contact-form label {
  display: grid;
  gap: 8px;
  font-weight: 700;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 16px;
  background: #fbfdff;
  color: var(--guide-ink);
  padding: 13px 14px;
}

.form-note {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
}

.site-footer {
  width: min(100% - 32px, 1120px);
  margin: 0 auto;
  padding: 0 0 18px;
}

@media (max-width: 920px) {
  .contact-section {
    grid-template-columns: 1fr;
  }
}
`
      : "";

  return `${base}${navCss}${heroCss}${cardCss}${contactCss}`;
}

function buildJs(themeId, language, stage) {
  const closeLabel = language === "es" ? "Cerrar" : "Close";
  const menuLabel = language === "es" ? "Menu" : "Menu";
  const theme = themeCopy(themeId, language);

  const menuJs =
    stage >= 1
      ? `const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "${closeLabel}" : "${menuLabel}";
  });
}
`
      : "";

  const formJs =
    stage >= 4
      ? `
const contactForm = document.querySelector(".contact-form");
const formNote = document.querySelector(".form-note");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "${theme.formSuccess}";
  });
}
`
      : "";

  return `${menuJs}${formJs}`.trim();
}

function snippetSet(themeId, language, stepIndex) {
  const theme = themeCopy(themeId, language);
  const menuLabel = language === "es" ? "Menu" : "Menu";

  const snippets = [
    {
      html: `<header class="site-header">
  <nav class="navbar">
    <a class="brand" href="#top">${theme.brand}</a>
    <button class="menu-toggle" type="button">${menuLabel}</button>
    <div class="nav-links">
      <a href="#top">${theme.navLinks[0]}</a>
      <a href="#highlights">${theme.navLinks[1]}</a>
      <a href="#contact">${theme.navLinks[2]}</a>
    </div>
  </nav>
</header>`,
      css: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 760px) {
  .nav-links {
    display: none;
  }

  .nav-links.is-open {
    display: flex;
  }
}`,
      js: `const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
});`,
    },
    {
      html: `<section class="hero-section">
  <div class="hero-copy">
    <p class="hero-kicker">${theme.heroEyebrow}</p>
    <h1>${theme.heroTitle}</h1>
    <p>${theme.heroText}</p>
  </div>
</section>`,
      css: `.hero-section {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 24px;
}

.hero-copy h1 {
  font-size: clamp(2.3rem, 5vw, 4.2rem);
}`,
      js: `// Hero sections usually do not need JavaScript first.
// Keep this step focused on layout and hierarchy.`,
    },
    {
      html: `<section class="info-section" id="highlights">
  <div class="card-grid">
    <article class="feature-card">
      <h3>${theme.cards[0].title}</h3>
      <p>${theme.cards[0].text}</p>
    </article>
  </div>
</section>`,
      css: `.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}`,
      js: `// Still no new JavaScript needed here.
// Repetition and spacing are the main ideas in this step.`,
    },
    {
      html: `<section class="contact-section" id="contact">
  <form class="contact-form">
    <label>${theme.labels.name}
      <input type="text" />
    </label>
    <label>${theme.labels.message}
      <textarea rows="4"></textarea>
    </label>
    <button type="submit" class="hero-btn primary">${theme.labels.submit}</button>
    <p class="form-note">...</p>
  </form>
</section>

<footer class="site-footer">
  <p>${theme.footer}</p>
</footer>`,
      css: `.contact-form {
  display: grid;
  gap: 14px;
}

.site-footer {
  padding-bottom: 18px;
}`,
      js: `const contactForm = document.querySelector(".contact-form");
const formNote = document.querySelector(".form-note");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "${theme.formSuccess}";
});`,
    },
  ];

  return snippets[stepIndex];
}

function explainerSet(themeId, language, stepIndex) {
  const theme = themeCopy(themeId, language);
  const isSpanish = language === "es";

  const explainers = [
    {
      html: [
        {
          line: `<header class="site-header">`,
          explain: isSpanish
            ? "Este es el bloque superior de la web. Aqui vive la navegacion."
            : "This is the top bar of the website. Your navigation lives here.",
        },
        {
          line: `<button class="menu-toggle">Menu</button>`,
          explain: isSpanish
            ? "Este boton aparece en movil para abrir y cerrar el menu."
            : "This button appears on mobile so users can open and close the menu.",
        },
        {
          line: `<div class="nav-links">`,
          explain: isSpanish
            ? "Este contenedor guarda todos los enlaces de navegacion."
            : "This container holds all of the navigation links.",
        },
      ],
      css: [
        {
          line: `.navbar { display: flex; }`,
          explain: isSpanish
            ? "Flex coloca los elementos en una fila y nos ayuda a separarlos."
            : "Flex places the items in a row and helps us separate them cleanly.",
        },
        {
          line: `.nav-links { gap: 16px; }`,
          explain: isSpanish
            ? "Gap deja espacio constante entre enlace y enlace."
            : "Gap gives each link consistent breathing room.",
        },
        {
          line: `@media (max-width: 760px) { ... }`,
          explain: isSpanish
            ? "La media query cambia el layout para pantallas pequenas."
            : "The media query changes the layout for smaller screens.",
        },
      ],
      js: [
        {
          line: `const menuToggle = document.querySelector(".menu-toggle");`,
          explain: isSpanish
            ? "Aqui seleccionas el boton que el usuario va a pulsar."
            : "Here you select the button the user will press.",
        },
        {
          line: `menuToggle.addEventListener("click", () => { ... });`,
          explain: isSpanish
            ? "Escuchas el clic y decides que debe pasar cuando ocurra."
            : "You listen for the click and decide what should happen next.",
        },
        {
          line: `navLinks.classList.toggle("is-open");`,
          explain: isSpanish
            ? "Toggle anade o quita una clase para mostrar u ocultar el menu."
            : "Toggle adds or removes a class to show or hide the menu.",
        },
      ],
    },
    {
      html: [
        {
          line: `<section class="hero-section">`,
          explain: isSpanish
            ? "El hero es la primera gran seccion que explica la pagina."
            : "The hero is the first big section that explains the page.",
        },
        {
          line: `<p class="hero-kicker">...</p>`,
          explain: isSpanish
            ? "El kicker es una frase pequena que prepara el titular."
            : "The kicker is a small line that prepares the main heading.",
        },
        {
          line: `<h1>${theme.heroTitle}</h1>`,
          explain: isSpanish
            ? "El h1 es el mensaje principal. Debe ser lo mas claro y fuerte."
            : "The h1 is the main message. It should be your clearest and strongest line.",
        },
      ],
      css: [
        {
          line: `.hero-section { display: grid; }`,
          explain: isSpanish
            ? "Grid te permite repartir texto y apoyo visual en columnas."
            : "Grid lets you split the hero into clear columns for text and support content.",
        },
        {
          line: `grid-template-columns: 1.15fr 0.85fr;`,
          explain: isSpanish
            ? "Aqui das mas espacio al texto principal que a la tarjeta lateral."
            : "This gives more room to the main copy than to the side card.",
        },
        {
          line: `font-size: clamp(...);`,
          explain: isSpanish
            ? "Clamp hace que el titulo cambie de tamano sin romper el layout."
            : "Clamp helps the heading resize without breaking the layout.",
        },
      ],
      js: [
        {
          line: `// Hero sections usually do not need JavaScript first.`,
          explain: isSpanish
            ? "Esto te recuerda que no toda seccion necesita JS para ser buena."
            : "This reminds learners that not every section needs JavaScript to be good.",
        },
      ],
    },
    {
      html: [
        {
          line: `<section class="info-section" id="highlights">`,
          explain: isSpanish
            ? "Esta nueva seccion agrupa informacion repetida de forma ordenada."
            : "This new section groups repeated information in a clear area.",
        },
        {
          line: `<div class="card-grid">`,
          explain: isSpanish
            ? "Este contenedor organiza varias tarjetas con el mismo patron."
            : "This wrapper organizes multiple cards with the same pattern.",
        },
        {
          line: `<article class="feature-card">`,
          explain: isSpanish
            ? "Cada article es una tarjeta independiente con su propio mensaje."
            : "Each article becomes its own card with a focused message.",
        },
      ],
      css: [
        {
          line: `.card-grid { display: grid; }`,
          explain: isSpanish
            ? "Grid es perfecto para repetir tarjetas con el mismo tamano visual."
            : "Grid is great for repeating cards with a consistent visual rhythm.",
        },
        {
          line: `grid-template-columns: repeat(3, minmax(0, 1fr));`,
          explain: isSpanish
            ? "Repeat crea tres columnas iguales sin escribirlas una por una."
            : "Repeat creates three equal columns without writing each one manually.",
        },
        {
          line: `.feature-card { padding: 22px; }`,
          explain: isSpanish
            ? "El padding hace que el contenido respire dentro de cada tarjeta."
            : "Padding gives the content breathing room inside each card.",
        },
      ],
      js: [
        {
          line: `// Repetition and spacing are the main ideas in this step.`,
          explain: isSpanish
            ? "Aqui aprendemos layout y repeticion. El valor esta en la estructura visual."
            : "This step is mostly about layout and repetition. The learning is visual structure.",
        },
      ],
    },
    {
      html: [
        {
          line: `<form class="contact-form">`,
          explain: isSpanish
            ? "El formulario le da un objetivo real a la pagina."
            : "The form gives the page a real purpose.",
        },
        {
          line: `<label> ... <input /> </label>`,
          explain: isSpanish
            ? "La etiqueta ayuda a que la persona entienda que debe escribir."
            : "The label helps people understand what they should type.",
        },
        {
          line: `<footer class="site-footer">`,
          explain: isSpanish
            ? "El footer cierra la pagina y hace que el proyecto se sienta completo."
            : "The footer closes the page and makes the whole project feel complete.",
        },
      ],
      css: [
        {
          line: `.contact-form { display: grid; gap: 14px; }`,
          explain: isSpanish
            ? "Grid y gap ayudan a alinear cada campo de forma clara."
            : "Grid and gap help each field line up in a calm, readable way.",
        },
        {
          line: `.contact-form input, .contact-form textarea { ... }`,
          explain: isSpanish
            ? "Aqui das estilo coherente a todos los campos del formulario."
            : "Here you give all of the form fields a consistent style.",
        },
        {
          line: `.site-footer { padding-bottom: 18px; }`,
          explain: isSpanish
            ? "Un poco de espacio final hace que la web no termine de golpe."
            : "A little bottom spacing stops the site from ending too abruptly.",
        },
      ],
      js: [
        {
          line: `contactForm.addEventListener("submit", (event) => {`,
          explain: isSpanish
            ? "Ahora escuchas cuando la persona intenta enviar el formulario."
            : "Now you listen for the moment the user tries to submit the form.",
        },
        {
          line: `event.preventDefault();`,
          explain: isSpanish
            ? "Esto evita que la pagina se recargue al enviar."
            : "This stops the page from reloading on submit.",
        },
        {
          line: `formNote.textContent = "${theme.formSuccess}";`,
          explain: isSpanish
            ? "Aqui muestras una respuesta visual para que el usuario vea el efecto."
            : "Here you show feedback so the user can see the interaction happen.",
        },
      ],
    },
  ];

  return explainers[stepIndex];
}

function validateStep(stepIndex, draft, language = "en") {
  const html = (draft?.html || "").toLowerCase();
  const css = (draft?.css || "").toLowerCase();
  const js = (draft?.js || "").toLowerCase();

  const messages = {
    header:
      language === "es"
        ? "Anade un <header> con una navegacion clara."
        : "Add a <header> with a clear navigation area.",
    menu:
      language === "es"
        ? "Incluye un boton de menu para movil y alguna logica con JavaScript."
        : "Include a mobile menu button and some JavaScript logic for it.",
    media:
      language === "es"
        ? "Usa CSS responsive, por ejemplo con un @media para pantallas pequenas."
        : "Use responsive CSS, for example an @media rule for smaller screens.",
    hero:
      language === "es"
        ? "Anade una seccion hero con titulo y texto principal."
        : "Add a hero section with a main title and supporting text.",
    heroStyles:
      language === "es"
        ? "Da estilo al hero con layout, espaciado o botones visibles."
        : "Style the hero with layout, spacing, or visible buttons.",
    cards:
      language === "es"
        ? "Crea una seccion con varias tarjetas o bloques repetidos."
        : "Create a section with multiple repeated cards or content blocks.",
    grid:
      language === "es"
        ? "Usa grid o un layout claro para ordenar las tarjetas."
        : "Use grid or another clear layout to arrange the cards.",
    form:
      language === "es"
        ? "Anade un formulario con inputs utiles y un footer al final."
        : "Add a form with useful inputs and a footer at the end.",
    formJs:
      language === "es"
        ? "Haz que el formulario responda con una pequena interaccion en JavaScript."
        : "Make the form respond with a small JavaScript interaction.",
  };

  const successFeedback = [
    language === "es"
      ? "Muy bien. Esta parte ya se parece a una seccion real de una web."
      : "Nice work. This part now looks like a real website section.",
    language === "es"
      ? "Puedes pasar al siguiente bloque cuando quieras."
      : "You can move to the next part whenever you are ready.",
  ];

  const feedback = [];

  if (stepIndex === 0) {
    if (!html.includes("<header") || !html.includes("<nav")) {
      feedback.push(messages.header);
    }
    if (!html.includes("menu-toggle") || !js.includes("addEventlistener")) {
      feedback.push(messages.menu);
    }
    if (!css.includes("@media")) {
      feedback.push(messages.media);
    }
  }

  if (stepIndex === 1) {
    if (!html.includes("hero-section") || !html.includes("<h1")) {
      feedback.push(messages.hero);
    }
    if (!css.includes(".hero-section") || !css.includes("hero-btn")) {
      feedback.push(messages.heroStyles);
    }
  }

  if (stepIndex === 2) {
    if (!html.includes("feature-card") || !html.includes("card-grid")) {
      feedback.push(messages.cards);
    }
    if (!css.includes("grid-template-columns")) {
      feedback.push(messages.grid);
    }
  }

  if (stepIndex === 3) {
    if (!html.includes("<form") || !html.includes("<footer")) {
      feedback.push(messages.form);
    }
    if (!js.includes("submit") || !js.includes("preventdefault")) {
      feedback.push(messages.formJs);
    }
  }

  if (feedback.length === 0) {
    return {
      status: "success",
      feedback: successFeedback,
    };
  }

  return {
    status: "needs-work",
    feedback,
  };
}

const stepDefinitions = [
  {
    id: "navbar",
    title: {
      en: "Build the navbar",
      es: "Crea la barra de navegacion",
    },
    coachLine: {
      en: "Welcome in. We always start from the top of the page, because visitors need a clear way to move around first.",
      es: "Bienvenido. Siempre empezamos por la parte superior de la pagina, porque la visita necesita una forma clara de moverse desde el principio.",
    },
    whyItMatters: {
      en: "Navigation is one of the most repeated UI patterns in frontend work. If you can build a good navbar, you already understand structure, spacing, and responsive thinking.",
      es: "La navegacion es uno de los patrones mas repetidos en frontend. Si sabes crear una buena barra, ya estas practicando estructura, espaciado y pensamiento responsive.",
    },
    checklist: {
      en: [
        "Add a header and nav",
        "Add one logo or brand name",
        "Add three links",
        "Add a menu button for mobile",
        "Use JavaScript to open and close the mobile links",
      ],
      es: [
        "Anade un header y un nav",
        "Anade un logo o nombre de marca",
        "Anade tres enlaces",
        "Anade un boton de menu para movil",
        "Usa JavaScript para abrir y cerrar los enlaces en movil",
      ],
    },
    tip: {
      en: "Keep the HTML simple first. Then use flexbox to push the brand and links apart.",
      es: "Primero manten el HTML simple. Despues usa flexbox para separar la marca y los enlaces.",
    },
  },
  {
    id: "hero",
    title: {
      en: "Build the hero section",
      es: "Crea la seccion hero",
    },
    coachLine: {
      en: "Great. Now we build the first thing people read. A hero explains the page in seconds.",
      es: "Muy bien. Ahora construimos lo primero que la gente lee. Un hero explica la pagina en pocos segundos.",
    },
    whyItMatters: {
      en: "Hero sections train hierarchy. You decide what is the headline, what supports it, and which action should be easiest to click.",
      es: "Los hero ensenan jerarquia. Tu decides cual es el titular, que texto lo apoya y que accion debe verse primero.",
    },
    checklist: {
      en: [
        "Add a small eyebrow or kicker",
        "Add one strong heading",
        "Add a short supporting paragraph",
        "Add one or two buttons",
        "Use layout so the section feels open and readable",
      ],
      es: [
        "Anade un texto pequeno superior",
        "Anade un titulo principal fuerte",
        "Anade un parrafo corto de apoyo",
        "Anade uno o dos botones",
        "Usa layout para que la seccion respire y se lea bien",
      ],
    },
    tip: {
      en: "Think in layers: small label, big heading, short text, then actions.",
      es: "Piensa en capas: etiqueta pequena, gran titulo, texto corto y despues acciones.",
    },
  },
  {
    id: "highlights",
    title: {
      en: "Build the highlights section",
      es: "Crea la seccion de destacados",
    },
    coachLine: {
      en: "Now let us repeat content on purpose. Repetition is how pages start to look professional.",
      es: "Ahora vamos a repetir contenido a proposito. La repeticion es lo que hace que una pagina empiece a verse profesional.",
    },
    whyItMatters: {
      en: "Cards teach spacing, consistency, and layout repetition. That is a huge part of real frontend work.",
      es: "Las tarjetas ensenan espaciado, consistencia y repeticion de layout. Eso es gran parte del trabajo real en frontend.",
    },
    checklist: {
      en: [
        "Add a new section under the hero",
        "Write a short intro for the section",
        "Create three cards with matching spacing",
        "Use grid or another clear layout",
      ],
      es: [
        "Anade una nueva seccion debajo del hero",
        "Escribe una pequena introduccion para la seccion",
        "Crea tres tarjetas con el mismo espaciado",
        "Usa grid u otro layout claro",
      ],
    },
    tip: {
      en: "Build one card first, then duplicate the pattern and only change the content.",
      es: "Construye primero una tarjeta y luego repite el patron cambiando solo el contenido.",
    },
  },
  {
    id: "contact",
    title: {
      en: "Finish with a form and footer",
      es: "Termina con formulario y footer",
    },
    coachLine: {
      en: "Last step. We close the page with a useful action area so the website feels complete, not cut off.",
      es: "Ultimo paso. Cerramos la pagina con una zona de accion util para que la web se sienta completa y no cortada.",
    },
    whyItMatters: {
      en: "Real pages nearly always end with contact details, forms, or a footer. This is how you move from small exercises to a complete page.",
      es: "Las paginas reales casi siempre terminan con contacto, formularios o footer. Asi pasas de ejercicios sueltos a una pagina completa.",
    },
    checklist: {
      en: [
        "Add a contact section with supporting text",
        "Add a form with labels and inputs",
        "Style the form so it is easy to scan",
        "Add one small JavaScript interaction on submit",
        "Finish with a footer line",
      ],
      es: [
        "Anade una seccion de contacto con texto de apoyo",
        "Anade un formulario con etiquetas e inputs",
        "Da estilo al formulario para que se lea rapido",
        "Anade una pequena interaccion con JavaScript al enviar",
        "Termina con una linea en el footer",
      ],
    },
    tip: {
      en: "A footer is small, but it makes the whole website feel intentional.",
      es: "El footer es pequeno, pero hace que toda la web se sienta intencional.",
    },
  },
];

export function getGuidedBuild(language = "en", themeId = "adventure") {
  const steps = stepDefinitions.map((stepDefinition, index) => ({
    id: stepDefinition.id,
    title: pick(stepDefinition.title, language),
    coachLine: pick(stepDefinition.coachLine, language),
    whyItMatters: pick(stepDefinition.whyItMatters, language),
    checklist: pick(stepDefinition.checklist, language),
    tip: pick(stepDefinition.tip, language),
    snippets: snippetSet(themeId, language, index),
    explainers: explainerSet(themeId, language, index),
    starter: {
      html: buildHtml(themeId, language, index),
      css: buildCss(themeId, index),
      js: buildJs(themeId, language, index),
    },
    solution: {
      html: buildHtml(themeId, language, index + 1),
      css: buildCss(themeId, index + 1),
      js: buildJs(themeId, language, index + 1),
    },
    validate: (draft) => validateStep(index, draft, language),
  }));

  return {
    id: "first-website",
    title:
      language === "es"
        ? "Construye tu primera pagina web"
        : "Build your first website",
    subtitle:
      language === "es"
        ? "Milo te guia paso a paso para crear una pagina completa y visual."
        : "Milo guides you step by step so you build one full, visual website.",
    mentorName: "Milo",
    themes: Object.values(websiteThemes).map((theme) => ({
      id: theme.id,
      title: pick(theme.title, language),
      summary: pick(theme.summary, language),
    })),
    steps,
  };
}
