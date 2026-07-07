const classPhaseMap = {
  "class-01": "phase-01",
  "class-02": "phase-01",
  "class-03": "phase-01",
  "class-04": "phase-01",
  "class-28": "phase-01",
  "class-15": "phase-01",
  "class-05": "phase-02",
  "class-06": "phase-02",
  "class-07": "phase-03",
  "class-08": "phase-03",
  "class-09": "phase-03",
  "class-16": "phase-03",
  "class-10": "phase-04",
  "class-11": "phase-04",
  "class-12": "phase-05",
  "class-13": "phase-05",
  "class-14": "phase-05",
  "class-17": "phase-05",
  "class-36": "phase-05",
  "class-37": "phase-05",
  "class-38": "phase-05",
  "class-40": "phase-05",
  "class-39": "phase-05",
  "class-18": "phase-06",
  "class-19": "phase-06",
  "class-20": "phase-06",
  "class-21": "phase-06",
  "class-22": "phase-06",
  "class-23": "phase-06",
  "class-24": "phase-06",
  "class-25": "phase-06",
  "class-26": "phase-06",
  "class-27": "phase-06",
  "class-29": "phase-06",
  "class-30": "phase-06",
  "class-31": "phase-06",
  "class-32": "phase-06",
  "class-33": "phase-06",
  "class-34": "phase-06",
  "class-35": "phase-06",
  "class-41": "phase-07",
};

const roadmapPhases = [
  {
    id: "phase-01",
    title: {
      en: "Phase 1 - Foundations",
      es: "Fase 1 - Fundamentos",
    },
    duration: {
      en: "5-7 weeks",
      es: "5-7 semanas",
    },
    summary: {
      en: "Learn the visual language of the web from selectors and the box model through flexbox, grid, responsive design, forms, and the first small UI patterns.",
      es: "Aprende el lenguaje visual de la web desde selectores y modelo de caja hasta flexbox, grid, diseno responsive, formularios y los primeros patrones pequenos de UI.",
    },
    focus: {
      en: [
        "Selectors, spacing, and layout confidence",
        "Responsive sections that look more professional",
        "Beginner-friendly UI pieces, bug-fixing, and portfolio blocks",
      ],
      es: [
        "Confianza con selectores, espaciado y layout",
        "Secciones responsive con mejor aspecto",
        "Primeras piezas de UI, correccion de bugs y bloques para portfolio",
      ],
    },
    classIds: ["class-01", "class-02", "class-03", "class-04", "class-28", "class-15"],
  },
  {
    id: "phase-02",
    title: {
      en: "Phase 2 - JavaScript UI",
      es: "Fase 2 - UI con JavaScript",
    },
    duration: {
      en: "3-5 weeks",
      es: "3-5 semanas",
    },
    summary: {
      en: "Build repetition into DOM work with toggles, search, forms, arrays, reusable logic, and interface feedback.",
      es: "Construye repeticion en trabajo DOM con toggles, busqueda, formularios, arrays, logica reutilizable y feedback.",
    },
    focus: {
      en: [
        "Event handling patterns",
        "Rendering and filtering data",
        "First product-like JavaScript features",
      ],
      es: [
        "Patrones de manejo de eventos",
        "Renderizado y filtros de datos",
        "Primeras funcionalidades de JavaScript tipo producto",
      ],
    },
    classIds: ["class-05", "class-06"],
  },
  {
    id: "phase-03",
    title: {
      en: "Phase 3 - Async, APIs, and Debugging",
      es: "Fase 3 - Async, APIs y depuracion",
    },
    duration: {
      en: "4-6 weeks",
      es: "4-6 semanas",
    },
    summary: {
      en: "Move from toy UI to realistic frontend work: async states, persistence, API thinking, backend awareness, and bug fixing.",
      es: "Pasa de UI de practica a trabajo realista: estados asincronos, persistencia, pensamiento API, backend awareness y correccion de bugs.",
    },
    focus: {
      en: [
        "Loading, error, and retry flows",
        "Request and storage habits",
        "Calm debugging under pressure",
      ],
      es: [
        "Flujos de carga, error y reintento",
        "Habitos de requests y almacenamiento",
        "Depuracion con calma bajo presion",
      ],
    },
    classIds: ["class-07", "class-08", "class-09", "class-16"],
  },
  {
    id: "phase-04",
    title: {
      en: "Phase 4 - React Foundations",
      es: "Fase 4 - Fundamentos de React",
    },
    duration: {
      en: "3-5 weeks",
      es: "3-5 semanas",
    },
    summary: {
      en: "Translate DOM skills into components, props, state, controlled inputs, effects, and resilient React UI.",
      es: "Traduce habilidades del DOM a componentes, props, estado, inputs controlados, effects y UI React resistente.",
    },
    focus: {
      en: [
        "Component thinking",
        "State ownership and effects",
        "React-ready explanation skills",
      ],
      es: [
        "Pensamiento por componentes",
        "Propiedad del estado y effects",
        "Capacidad de explicar React con claridad",
      ],
    },
    classIds: ["class-10", "class-11"],
  },
  {
    id: "phase-05",
    title: {
      en: "Phase 5 - Real Apps and Routing",
      es: "Fase 5 - Apps reales y routing",
    },
    duration: {
      en: "4-6 weeks",
      es: "4-6 semanas",
    },
    summary: {
      en: "Build portfolio-grade React features with routing, auth flows, persistence, accessibility, composition, TypeScript foundations, and capstones.",
      es: "Construye funcionalidades de React para portfolio con routing, auth, persistencia, accesibilidad, composicion, fundamentos de TypeScript y capstones.",
    },
    focus: {
      en: [
        "Larger React flows",
        "Routing and protected screens",
        "Typed frontend habits with TypeScript",
        "Portfolio-ready capstones",
      ],
      es: [
        "Flujos React mas grandes",
        "Routing y pantallas protegidas",
        "Habitos de frontend tipado con TypeScript",
        "Capstones listos para portfolio",
      ],
    },
    classIds: [
      "class-12",
      "class-13",
      "class-14",
      "class-17",
      "class-36",
      "class-37",
      "class-38",
      "class-40",
      "class-39",
    ],
  },
  {
    id: "phase-06",
    title: {
      en: "Phase 6 - Interview and Job Tests",
      es: "Fase 6 - Entrevistas y pruebas tecnicas",
    },
    duration: {
      en: "3-6 weeks",
      es: "3-6 semanas",
    },
    summary: {
      en: "Practice take-homes, accessibility work, testing, TypeScript, shipping quality, and several bug-fix drills that feel much closer to real hiring.",
      es: "Practica take-homes, accesibilidad, testing, TypeScript, calidad de envio y varias pruebas de depuracion mucho mas cercanas a una contratacion real.",
    },
    focus: {
      en: [
        "Interview-style builds",
        "Accessibility, testing, and debugging under pressure",
        "Quality-focused decision making",
      ],
      es: [
        "Builds tipo entrevista",
        "Accesibilidad, testing y depuracion bajo presion",
        "Toma de decisiones centrada en calidad",
      ],
    },
    classIds: [
      "class-18",
      "class-19",
      "class-20",
      "class-21",
      "class-22",
      "class-29",
      "class-30",
      "class-23",
      "class-24",
      "class-25",
      "class-26",
      "class-31",
      "class-32",
      "class-33",
      "class-34",
      "class-35",
      "class-27",
    ],
  },
  {
    id: "phase-07",
    title: {
      en: "Phase 7 - Police Assessment Preparation",
      es: "Fase 7 - Preparacion para assessment policial",
    },
    duration: {
      en: "As needed",
      es: "Segun necesidad",
    },
    summary: {
      en: "A separate preparation area for police recruitment judgement practice, CVF awareness, and confidence before online sift or interview stages.",
      es: "Un area separada para practicar juicio en seleccion policial, conciencia del CVF y confianza antes de sift online o entrevistas.",
    },
    focus: {
      en: [
        "Situational judgement practice",
        "Police values and behaviour explanations",
        "Score review by focus area",
      ],
      es: [
        "Practica de juicio situacional",
        "Valores policiales y explicaciones de comportamiento",
        "Revision de puntuacion por area",
      ],
    },
    classIds: ["class-41"],
  },
];

const classSections = {
  "class-01": [
    {
      title: {
        en: "Selectors in action",
        es: "Selectores en accion",
      },
      summary: {
        en: "Learn how CSS points at the right element with simple selector patterns.",
        es: "Aprende como CSS apunta al elemento correcto con patrones de selectores sencillos.",
      },
      challengeIds: [
        "styled-heading",
        "styled-button",
        "selector-playground-card",
        "nav-link-hover-styles",
      ],
    },
    {
      title: {
        en: "Box model control",
        es: "Control del modelo de caja",
      },
      summary: {
        en: "Practice inner space, outer space, borders, size, and calmer box sizing.",
        es: "Practica espacio interior, espacio exterior, bordes, tamano y un box sizing mas claro.",
      },
      challengeIds: [
        "box-model-profile-tile",
        "border-box-info-panel",
        "centered-box",
        "styled-info-badge",
      ],
    },
    {
      title: {
        en: "Mini build",
        es: "Mini build",
      },
      summary: {
        en: "Put the basics together in one small styled section.",
        es: "Une lo basico en una pequena seccion estilizada.",
      },
      challengeIds: ["intro-block-capstone"],
    },
  ],
  "class-02": [
    {
      title: {
        en: "Display and alignment",
        es: "Display y alineacion",
      },
      summary: {
        en: "See how small elements behave in a row, a block, or disappear from the page.",
        es: "Comprende como se comportan elementos pequenos en fila, en bloque o cuando desaparecen de la pagina.",
      },
      challengeIds: [
        "display-mode-announcement",
        "center-circle",
      ],
    },
    {
      title: {
        en: "Flexbox patterns",
        es: "Patrones de flexbox",
      },
      summary: {
        en: "Use flexbox to center, share space, and wrap repeated UI pieces.",
        es: "Usa flexbox para centrar, repartir espacio y envolver piezas repetidas de UI.",
      },
      challengeIds: [
        "two-column-layout",
        "flex-service-row",
        "flex-wrap-chip-row",
      ],
    },
    {
      title: {
        en: "Common UI blocks",
        es: "Bloques comunes de UI",
      },
      summary: {
        en: "Build the kinds of cards, navbars, and hero copy sections learners see on real sites.",
        es: "Construye los tipos de tarjetas, navbars y heroes de texto que se ven en webs reales.",
      },
      challengeIds: ["profile-card", "simple-navbar", "hero-copy-stack"],
    },
    {
      title: {
        en: "Section build",
        es: "Build de seccion",
      },
      summary: {
        en: "Combine the patterns into one landing-style header section.",
        es: "Combina estos patrones en una seccion inicial tipo landing.",
      },
      challengeIds: ["landing-header-capstone"],
    },
  ],
  "class-03": [
    {
      title: {
        en: "Grid and responsive structure",
        es: "Grid y estructura responsive",
      },
      summary: {
        en: "Move from fixed rows into card boards, galleries, and layouts that adapt to screen size.",
        es: "Pasa de filas fijas a tableros, galerias y layouts que se adaptan al tamano de pantalla.",
      },
      challengeIds: [
        "grid-feature-board",
        "css-grid-gallery",
        "responsive-card-grid",
        "media-query-stack-layout",
        "fluid-container-shell",
        "dashboard-stats-layout",
      ],
    },
    {
      title: {
        en: "Visual polish",
        es: "Pulido visual",
      },
      summary: {
        en: "Add the finishing layer that makes beginner projects feel more professional.",
        es: "Anade la capa final que hace que los proyectos de principiante se vean mas profesionales.",
      },
      challengeIds: [
        "polished-pricing-card",
        "gradient-hero-callout",
        "responsive-feature-strip",
      ],
    },
    {
      title: {
        en: "Portfolio-ready build",
        es: "Build listo para portfolio",
      },
      summary: {
        en: "Use responsive layout and polish in one section that could live in a portfolio.",
        es: "Usa layout responsive y pulido en una seccion que podria vivir en un portfolio.",
      },
      challengeIds: ["portfolio-section-capstone"],
    },
  ],
  "class-04": [
    {
      title: {
        en: "Forms and content blocks",
        es: "Formularios y bloques de contenido",
      },
      summary: {
        en: "Build readable forms, content cards, and semantic sections that feel useful.",
        es: "Construye formularios legibles, tarjetas de contenido y secciones semanticas que se sientan utiles.",
      },
      challengeIds: [
        "semantic-article-layout",
        "login-form-ui",
        "product-card",
        "accessible-form-labels",
        "newsletter-signup-ui",
      ],
    },
    {
      title: {
        en: "First UI patterns",
        es: "Primeros patrones de UI",
      },
      summary: {
        en: "Use tiny interactions to see how buttons can change what the user sees.",
        es: "Usa interacciones pequenas para ver como los botones cambian lo que el usuario ve.",
      },
      challengeIds: ["toggle-theme", "counter-app", "show-hide-password"],
    },
    {
      title: {
        en: "All-in-one page",
        es: "Pagina integradora",
      },
      summary: {
        en: "Finish the block with a one-page build that combines layout, forms, and a first interaction.",
        es: "Termina el bloque con una web de una pagina que combina layout, formularios y una primera interaccion.",
      },
      challengeIds: ["one-page-site-capstone"],
    },
  ],
  "class-28": [
    {
      title: {
        en: "CSS bug-fix drills",
        es: "Retos de correccion de bugs CSS",
      },
      summary: {
        en: "Repair broken card, navbar, and responsive layout styles the way a junior often has to during an interview or a first real job.",
        es: "Repara estilos rotos de tarjetas, navbars y layouts responsive como suele tocar en entrevistas o en un primer trabajo junior.",
      },
      challengeIds: [
        "debug-broken-profile-card-css",
        "debug-broken-navbar-layout",
        "debug-broken-responsive-grid",
      ],
    },
    {
      title: {
        en: "Mock layout copy tests",
        es: "Pruebas de copiar layouts desde un brief",
      },
      summary: {
        en: "Practice brief-driven layout work with two interview-style tasks that feel closer to assessment-day frontend work.",
        es: "Practica trabajo de layout guiado por brief con dos tareas estilo entrevista mas cercanas a una prueba tecnica real.",
      },
      challengeIds: [
        "copy-mock-pricing-section",
        "copy-mock-dashboard-overview",
      ],
    },
  ],
  "class-05": [
    {
      title: {
        en: "Toggle foundations",
        es: "Bases de toggles",
      },
      challengeIds: [
        "toggle-message",
        "toggle-background-color",
        "toggle-button-label",
        "toggle-card-class",
      ],
    },
    {
      title: {
        en: "Live input, first filters, and event variations",
        es: "Input en vivo, primeros filtros y variaciones de eventos",
      },
      challengeIds: [
        "character-counter",
        "live-search-filter",
        "filter-lessons-with-filter-method",
        "select-preview-change-event",
        "checkbox-summary-panel",
        "range-slider-live-preview",
        "keydown-enter-add-tag",
      ],
    },
    {
      title: {
        en: "Search variations and feedback",
        es: "Variaciones de busqueda y feedback",
      },
      challengeIds: [
        "no-results-search-state",
        "clear-search-button",
        "bold-matching-fruits",
        "search-cards-layout",
        "filter-products-name-price",
      ],
    },
    {
      title: {
        en: "More event patterns",
        es: "Mas patrones de eventos",
      },
      challengeIds: [
        "faq-toggle",
        "theme-toggle-saved",
        "counter-with-reset",
        "password-visibility-toggle",
        "button-click-counter",
      ],
    },
    {
      title: {
        en: "Core interaction repetitions",
        es: "Repeticiones de interacciones clave",
      },
      challengeIds: [
        "search-filter-count-reset",
        "class-toggle-alert-panel",
        "limited-step-counter",
        "multi-faq-accordion",
        "modal-open-close",
      ],
    },
    {
      title: {
        en: "Interview-style mini builds",
        es: "Mini builds estilo entrevista",
      },
      challengeIds: [
        "mini-build-textarea-counter-card",
        "mini-build-searchable-topics-list",
        "mini-build-bold-search-clear-list",
        "mini-build-card-search-empty-state",
        "mini-build-feedback-form-preview",
      ],
    },
    {
      title: {
        en: "Integrated mini build",
        es: "Mini build integrado",
      },
      challengeIds: ["interactive-settings-capstone"],
    },
  ],
  "class-06": [
    {
      title: {
        en: "Validation and submit basics",
        es: "Validacion y bases de envio",
      },
      challengeIds: [
        "simple-form-validation",
        "contact-form-validation",
        "login-form-submit-object",
        "booking-form-reset",
      ],
    },
    {
      title: {
        en: "Form objects and submission flows",
        es: "Objetos de formulario y flujos de envio",
      },
      challengeIds: [
        "reservation-form-summary",
        "form-data-preview",
      ],
    },
    {
      title: {
        en: "Lists and mutations",
        es: "Listas y cambios",
      },
      challengeIds: [
        "add-item-to-list",
        "add-goal-to-list",
        "prevent-duplicate-items",
        "remove-item-from-list",
        "remove-saved-item",
      ],
    },
    {
      title: {
        en: "Sorting, filtering, and UI state",
        es: "Ordenacion, filtros y estado de UI",
      },
      challengeIds: [
        "filter-products",
        "data-driven-lesson-search",
        "sort-products",
        "todo-complete-toggle",
        "password-strength-checker",
        "password-rules-validation",
        "tab-switcher",
        "restaurant-tabs-panel",
        "profile-tabs-active-state",
      ],
    },
    {
      title: {
        en: "All-in-one class build",
        es: "Build integrador del bloque",
      },
      challengeIds: ["product-list-manager-capstone"],
    },
  ],
  "class-07": [
    {
      title: {
        en: "Async request basics",
        es: "Bases de requests async",
      },
      challengeIds: [
        "mock-fetch-loading",
        "mock-fetch-error-retry",
        "promise-chain-practice",
        "await-user-card",
        "async-save-button",
      ],
    },
    {
      title: {
        en: "Persistence practice",
        es: "Practica de persistencia",
      },
      challengeIds: [
        "save-notes-localstorage",
        "save-load-todos-localstorage",
        "saved-favourites-localstorage",
        "cart-items-localstorage",
        "dark-mode-preference-localstorage",
        "saved-form-draft-localstorage",
        "recently-viewed-products-localstorage",
        "todo-completed-filter-localstorage",
      ],
    },
    {
      title: {
        en: "Fetch mini apps",
        es: "Mini apps con fetch",
      },
      challengeIds: [
        "mock-product-search",
        "github-profile-finder",
        "weather-search-panel",
        "recipe-search-app",
        "promise-all-user-posts",
        "fetch-posts-loading-error-list",
        "fetch-users-filter-after-load",
      ],
    },
    {
      title: {
        en: "Data responses and transforms",
        es: "Respuestas y transformaciones de datos",
      },
      challengeIds: [
        "shopping-cart-total",
        "filter-sort-products",
      ],
    },
    {
      title: {
        en: "Async dashboard checkpoint",
        es: "Checkpoint de dashboard async",
      },
      challengeIds: ["async-dashboard-capstone"],
    },
  ],
  "class-08": [
    {
      title: {
        en: "Array method confidence",
        es: "Confianza con metodos de array",
      },
      challengeIds: [
        "map-product-cards",
        "filter-available-sessions",
        "find-selected-mentor",
        "some-stock-warning",
        "sort-students-by-score",
      ],
    },
    {
      title: {
        en: "Rendering and event patterns",
        es: "Patrones de renderizado y eventos",
      },
      challengeIds: [
        "render-users-from-array",
        "event-delegation-todo-actions",
        "dropdown-menu-toggle",
      ],
    },
    {
      title: {
        en: "Async search and tables",
        es: "Busqueda asincrona y tablas",
      },
      challengeIds: [
        "async-product-search",
        "paginated-table",
        "kpi-dashboard-calculator",
      ],
    },
    {
      title: {
        en: "Admin checkpoint",
        es: "Checkpoint administrativo",
      },
      challengeIds: ["admin-dashboard-capstone"],
    },
  ],
  "class-09": [
    {
      title: {
        en: "Core JavaScript foundations",
        es: "Fundamentos de JavaScript",
      },
      challengeIds: [
        "destructure-profile-card",
        "spread-settings-merge",
        "find-priority-ticket",
        "switch-role-permissions",
        "closure-counter-factory",
        "event-loop-order",
      ],
    },
    {
      title: {
        en: "Debugging and parsing",
        es: "Depuracion y parsing",
      },
      challengeIds: [
        "debug-broken-form-validation",
        "try-catch-json-parser",
        "debug-broken-localstorage-todos",
        "debug-broken-async-search",
      ],
    },
    {
      title: {
        en: "Requests and API habits",
        es: "Requests y habitos con APIs",
      },
      challengeIds: [
        "fetch-users-status-codes",
        "post-json-with-headers",
        "query-param-search",
      ],
    },
    {
      title: {
        en: "Race conditions and backend flow",
        es: "Race conditions y flujo backend",
      },
      challengeIds: [
        "request-race-condition-guard",
        "backend-request-flow",
        "api-toolkit-capstone",
      ],
    },
  ],
  "class-10": [
    {
      title: {
        en: "First components and props",
        es: "Primeros componentes y props",
      },
      challengeIds: [
        "first-react-component",
        "reuse-component",
        "props-card-component",
        "render-list-map",
        "list-keys",
        "conditional-status-badge",
      ],
    },
    {
      title: {
        en: "State and controlled inputs",
        es: "Estado e inputs controlados",
      },
      challengeIds: [
        "react-counter-usestate",
        "react-toggle-section",
        "react-toggle-button-label",
        "controlled-input",
        "react-character-counter",
      ],
    },
    {
      title: {
        en: "Search and filter thinking",
        es: "Pensamiento de busqueda y filtros",
      },
      challengeIds: [
        "react-search-filter",
        "react-category-filter",
        "react-component-directory-capstone",
      ],
    },
  ],
  "class-11": [
    {
      title: {
        en: "State ownership and reuse",
        es: "Propiedad del estado y reutilizacion",
      },
      challengeIds: [
        "lift-state-up",
        "reusable-button-component",
        "react-form-validation",
        "react-booking-form-app",
        "react-modal-component",
        "react-accordion-item",
        "react-tabs-component",
      ],
    },
    {
      title: {
        en: "Effects and async UI",
        es: "Effects y UI async",
      },
      challengeIds: [
        "react-mock-fetch-useeffect",
        "loading-error-empty-states",
        "custom-hook-localstorage",
        "react-load-users",
        "react-retry-request",
        "react-async-search",
        "react-empty-state",
      ],
    },
    {
      title: {
        en: "Block project",
        es: "Proyecto del bloque",
      },
      challengeIds: ["react-users-dashboard-capstone"],
    },
  ],
  "class-12": [
    {
      title: {
        en: "Filtering and sorting flows",
        es: "Flujos de filtros y ordenacion",
      },
      challengeIds: [
        "react-loaded-category-filter",
        "react-sort-products",
        "react-movie-search-app",
        "react-toggle-favourites",
      ],
    },
    {
      title: {
        en: "Persistence and async polish",
        es: "Persistencia y pulido async",
      },
      challengeIds: [
        "react-custom-data-hook",
        "react-theme-localstorage",
        "react-disable-submit-loading",
        "react-debounced-search",
        "react-paginated-list",
      ],
    },
    {
      title: {
        en: "Derived UI and capstone",
        es: "UI derivada y capstone",
      },
      challengeIds: [
        "react-multi-filter-products",
        "react-results-summary",
        "react-product-browser-capstone",
      ],
    },
  ],
  "class-13": [
    {
      title: {
        en: "Advanced state patterns",
        es: "Patrones avanzados de estado",
      },
      challengeIds: [
        "react-usereducer-todos",
        "react-contact-manager",
        "react-context-theme",
        "react-view-mode-context",
      ],
    },
    {
      title: {
        en: "Accessible and resilient UX",
        es: "UX accesible y resistente",
      },
      challengeIds: [
        "react-accessible-form-errors",
        "react-optimistic-favourites",
        "react-saved-filter-state",
      ],
    },
    {
      title: {
        en: "Composition and take-home build",
        es: "Composicion y build tipo take-home",
      },
      challengeIds: [
        "react-dashboard-composition",
        "react-job-board-capstone",
      ],
    },
  ],
  "class-14": [
    {
      title: {
        en: "Routes and navigation",
        es: "Rutas y navegacion",
      },
      challengeIds: [
        "react-router-basic-pages",
        "react-route-tab-navigation",
        "react-router-dynamic-user",
        "react-router-product-detail",
      ],
    },
    {
      title: {
        en: "Protected app flow",
        es: "Flujo de app protegida",
      },
      challengeIds: [
        "react-auth-guard-state",
        "react-routed-directory-capstone",
      ],
    },
  ],
  "class-36": [
    {
      title: {
        en: "Typed shapes first",
        es: "Primero, formas tipadas",
      },
      summary: {
        en: "Start with the core habit: describe your UI data shape before you render it.",
        es: "Empieza con el habito central: describe la forma de tus datos antes de renderizarlos.",
      },
      challengeIds: [
        "ts-typed-profile-card",
        "ts-interface-feature-list",
        "ts-union-status-badge",
        "ts-optional-note-card",
      ],
    },
  ],
  "class-37": [
    {
      title: {
        en: "Typed events and forms",
        es: "Eventos y formularios tipados",
      },
      summary: {
        en: "Use TypeScript in the places where juniors often feel shaky: clicks, inputs, submit handlers, and narrowing unclear values.",
        es: "Usa TypeScript en los puntos donde mucha gente junior duda: clicks, inputs, submit handlers y narrowing de valores poco claros.",
      },
      challengeIds: [
        "ts-typed-click-counter",
        "ts-controlled-booking-form",
        "ts-narrowing-feedback-panel",
        "ts-filtered-directory",
      ],
    },
  ],
  "class-38": [
    {
      title: {
        en: "Typed data flows",
        es: "Flujos de datos tipados",
      },
      summary: {
        en: "Practice updating objects safely, fetching typed data, and rendering realistic UI from known shapes.",
        es: "Practica actualizar objetos con seguridad, cargar datos tipados y renderizar UI realista desde formas conocidas.",
      },
      challengeIds: [
        "ts-spread-settings-panel",
        "ts-fetch-menu-board",
        "ts-favourites-toggle-list",
        "ts-typed-search-results",
        "ts-refactor-feedback-board",
      ],
    },
  ],
  "class-40": [
    {
      title: {
        en: "Shared typed state",
        es: "Estado tipado compartido",
      },
      summary: {
        en: "Move beyond small inputs into reducers and context, where TypeScript starts protecting larger UI patterns.",
        es: "Ve mas alla de inputs pequenos hacia reducers y context, donde TypeScript empieza a proteger patrones de UI mas grandes.",
      },
      challengeIds: [
        "ts-reducer-task-board",
        "ts-context-theme-panel",
      ],
    },
    {
      title: {
        en: "Typed app wiring",
        es: "Cableado tipado de apps",
      },
      summary: {
        en: "Model async states, typed routes, and reusable persistence helpers like the kind teams often expect in real apps.",
        es: "Modela estados async, rutas tipadas y helpers reutilizables de persistencia como los que muchos equipos esperan en apps reales.",
      },
      challengeIds: [
        "ts-discriminated-async-panel",
        "ts-typed-route-details",
        "ts-typed-localstorage-hook",
      ],
    },
  ],
  "class-39": [
    {
      title: {
        en: "TypeScript capstone",
        es: "Capstone de TypeScript",
      },
      summary: {
        en: "Bring typed props, state, data rendering, filters, and async UI together in one practical dashboard.",
        es: "Une props tipadas, estado, renderizado de datos, filtros y UI asincrona en un dashboard practico.",
      },
      challengeIds: ["ts-all-in-one-dashboard-capstone"],
    },
  ],
  "class-41": [
    {
      title: {
        en: "Police SJT learning zone",
        es: "Zona de aprendizaje SJT policial",
      },
      summary: {
        en: "Understand the rating model, assessment stages, and judgement patterns before starting the mock tests.",
        es: "Entiende el modelo de valoracion, las fases de assessment y los patrones de juicio antes de empezar los mocks.",
      },
      challengeIds: ["police-learning-zone"],
    },
    {
      title: {
        en: "PDF-style SJT mock tests",
        es: "Mocks SJT estilo PDF",
      },
      summary: {
        en: "Practise the original PDF set, then continue with the updated 2024 National Sift mock questions without duplicate scenarios.",
        es: "Practica el set PDF original y continua con las preguntas actualizadas National Sift 2024 sin escenarios duplicados.",
      },
      challengeIds: [
        "essex-police-sjt-mock-01",
        "essex-police-sjt-mock-02",
        "essex-police-sjt-mock-03",
        "essex-police-sjt-mock-04",
        "essex-police-sjt-mock-05",
        "essex-police-sjt-final-review",
        "national-sift-2024-mock-01",
        "national-sift-2024-mock-02",
        "national-sift-2024-mock-03",
        "national-sift-2024-mock-04",
      ],
    },
  ],
};

const classModules = [
  {
    id: "class-01",
    number: "01",
    modeId: "rookie",
    challengeIds: [
      "styled-heading",
      "styled-button",
      "selector-playground-card",
      "nav-link-hover-styles",
      "box-model-profile-tile",
      "border-box-info-panel",
      "styled-info-badge",
      "centered-box",
      "intro-block-capstone",
    ],
    title: {
      en: "Selectors, box model, and first layout wins",
      es: "Selectores, modelo de caja y primeras victorias de layout",
    },
    summary: {
      en: "Students learn how CSS finds elements, how boxes take up space, and how a few simple layout rules create a visible result quickly.",
      es: "El alumnado aprende como CSS encuentra elementos, como las cajas ocupan espacio y como unas pocas reglas de layout ya crean un resultado visible.",
    },
    outcomes: {
      en: [
        "Use element, class, and id selectors on purpose",
        "Understand margin, padding, border, and box-sizing",
        "Create clean early UI blocks with spacing and color",
      ],
      es: [
        "Usar selectores de elemento, clase e id con intencion",
        "Entender margin, padding, border y box-sizing",
        "Crear bloques de UI limpios con espaciado y color",
      ],
    },
    project: {
      en: "A styled intro block",
      es: "Un bloque de presentacion estilizado",
    },
  },
  {
    id: "class-02",
    number: "02",
    modeId: "rookie",
    challengeIds: [
      "display-mode-announcement",
      "center-circle",
      "two-column-layout",
      "flex-service-row",
      "flex-wrap-chip-row",
      "profile-card",
      "simple-navbar",
      "hero-copy-stack",
      "landing-header-capstone",
    ],
    title: {
      en: "Display, flexbox, and common UI patterns",
      es: "Display, flexbox y patrones comunes de UI",
    },
    summary: {
      en: "A practical pass through display rules, flexbox alignment, repeated card patterns, and the kinds of layout pieces beginners see on real websites.",
      es: "Un recorrido practico por reglas de display, alineacion con flexbox, patrones repetidos de tarjetas y piezas de layout que se ven en webs reales.",
    },
    outcomes: {
      en: [
        "Understand block, inline-block, and flexible rows",
        "Build cards, navbars, and repeated service layouts",
        "Use flexbox to center, align, wrap, and share space",
      ],
      es: [
        "Entender block, inline-block y filas flexibles",
        "Crear tarjetas, navbars y layouts repetidos de servicios",
        "Usar flexbox para centrar, alinear, envolver y repartir espacio",
      ],
    },
    project: {
      en: "A small landing header section",
      es: "Una pequena seccion inicial de landing",
    },
  },
  {
    id: "class-03",
    number: "03",
    modeId: "rookie",
    challengeIds: [
      "grid-feature-board",
      "css-grid-gallery",
      "responsive-card-grid",
      "media-query-stack-layout",
      "fluid-container-shell",
      "dashboard-stats-layout",
      "polished-pricing-card",
      "gradient-hero-callout",
      "responsive-feature-strip",
      "portfolio-section-capstone",
    ],
    title: {
      en: "Grid, responsive design, and CSS polish",
      es: "Grid, diseno responsive y pulido CSS",
    },
    summary: {
      en: "Students move from simple rows into grids, responsive sections, container patterns, and the visual polish that makes beginner work feel more professional.",
      es: "El alumnado pasa de filas sencillas a grids, secciones responsive, patrones de contenedor y el pulido visual que hace que el trabajo se vea mas profesional.",
    },
    outcomes: {
      en: [
        "Use Grid for boards, galleries, and card sections",
        "Make layouts adapt across desktop, tablet, and mobile",
        "Apply polish with shadow, hover, focus, and gradients",
      ],
      es: [
        "Usar Grid para tableros, galerias y secciones de tarjetas",
        "Hacer que los layouts se adapten a escritorio, tablet y movil",
        "Aplicar pulido con sombras, hover, focus y gradientes",
      ],
    },
    project: {
      en: "A polished portfolio section",
      es: "Una seccion de portfolio pulida",
    },
  },
  {
    id: "class-04",
    number: "04",
    modeId: "rookie",
    challengeIds: [
      "semantic-article-layout",
      "login-form-ui",
      "product-card",
      "newsletter-signup-ui",
      "accessible-form-labels",
      "toggle-theme",
      "counter-app",
      "show-hide-password",
      "one-page-site-capstone",
    ],
    title: {
      en: "Forms, content sections, and first UI patterns",
      es: "Formularios, secciones de contenido y primeros patrones de UI",
    },
    summary: {
      en: "A bridge from polished CSS into usable forms, semantic content blocks, and the first tiny JavaScript-powered UI changes.",
      es: "Un puente desde CSS pulido hacia formularios usables, bloques de contenido semantico y los primeros cambios pequenos de UI con JavaScript.",
    },
    outcomes: {
      en: [
        "Build forms and card-based content sections",
        "Use semantic HTML and accessible labels",
        "Understand the first small button-driven UI changes",
      ],
      es: [
        "Crear formularios y secciones de contenido basadas en tarjetas",
        "Usar HTML semantico y labels accesibles",
        "Entender los primeros pequenos cambios de UI activados por botones",
      ],
    },
    project: {
      en: "A one-page practice website",
      es: "Una web de practica de una pagina",
    },
  },
  {
    id: "class-28",
    number: "05",
    modeId: "rookie",
    challengeIds: [
      "debug-broken-profile-card-css",
      "debug-broken-navbar-layout",
      "debug-broken-responsive-grid",
      "copy-mock-pricing-section",
      "copy-mock-dashboard-overview",
    ],
    title: {
      en: "Debugging broken CSS and mock assessments",
      es: "Depurar CSS roto y practicar layouts de entrevista",
    },
    summary: {
      en: "A final HTML/CSS interview-prep block focused on bug fixing and layout-copy tasks that feel much closer to what juniors are often asked to do.",
      es: "Un bloque final de preparacion HTML/CSS para entrevistas centrado en corregir bugs y copiar layouts, mucho mas cercano a lo que suelen pedir a un junior.",
    },
    outcomes: {
      en: [
        "Read broken CSS calmly and repair the smallest real cause",
        "Copy a structured layout from a brief instead of from memory",
        "Explain layout decisions the way a junior would in an assessment",
      ],
      es: [
        "Leer CSS roto con calma y reparar la causa real mas pequena",
        "Copiar un layout estructurado desde un brief y no solo de memoria",
        "Explicar decisiones de layout como lo haria un junior en una prueba",
      ],
    },
    project: {
      en: "Two mock interview layouts and three bug-fix drills",
      es: "Dos layouts tipo entrevista y tres retos de correccion",
    },
  },
  {
    id: "class-15",
    number: "06",
    modeId: "rookie",
    challengeIds: [
      "rookie-all-in-one-restaurant-site",
      "rookie-all-in-one-portfolio-site",
      "rookie-all-in-one-event-page",
    ],
    title: {
      en: "Rookie all-in-one build",
      es: "Proyecto integrador Rookie",
    },
    summary: {
      en: "Students bring the full Rookie path together across polished multi-section builds with navigation, cards, forms, responsive layout, and one small interaction.",
      es: "El alumnado une todo Rookie en varios builds pulidos con navegacion, tarjetas, formularios, layout responsive y una pequena interaccion.",
    },
    outcomes: {
      en: [
        "Combine layout, cards, and forms in one page",
        "Show responsive thinking in a full build",
        "Finish a beginner portfolio-ready website",
      ],
      es: [
        "Combinar layout, tarjetas y formularios en una pagina",
        "Mostrar criterio responsive en un build completo",
        "Terminar una web inicial lista para portfolio",
      ],
    },
    project: {
      en: "Three full-page Rookie builds",
      es: "Tres builds integradores Rookie",
    },
  },
  {
    id: "class-05",
    number: "05",
    modeId: "builder",
    challengeIds: [
      "toggle-message",
      "toggle-background-color",
      "toggle-button-label",
      "toggle-card-class",
      "character-counter",
      "live-search-filter",
      "filter-lessons-with-filter-method",
      "select-preview-change-event",
      "checkbox-summary-panel",
      "range-slider-live-preview",
      "keydown-enter-add-tag",
      "no-results-search-state",
      "clear-search-button",
      "bold-matching-fruits",
      "search-cards-layout",
      "filter-products-name-price",
      "faq-toggle",
      "theme-toggle-saved",
      "counter-with-reset",
      "password-visibility-toggle",
      "button-click-counter",
      "search-filter-count-reset",
      "class-toggle-alert-panel",
      "limited-step-counter",
      "multi-faq-accordion",
      "modal-open-close",
      "mini-build-textarea-counter-card",
      "mini-build-searchable-topics-list",
      "mini-build-bold-search-clear-list",
      "mini-build-card-search-empty-state",
      "mini-build-feedback-form-preview",
      "interactive-settings-capstone",
    ],
    title: {
      en: "DOM events and live feedback",
      es: "Eventos del DOM y feedback en vivo",
    },
    summary: {
      en: "The first serious JavaScript class: selecting elements, listening to events, updating content, repeating core UI patterns, and then combining HTML, CSS, and DOM logic in interview-style mini builds.",
      es: "La primera clase fuerte de JavaScript: seleccionar elementos, escuchar eventos, actualizar contenido, repetir patrones clave de UI y luego combinar HTML, CSS y logica DOM en mini builds estilo entrevista.",
    },
    outcomes: {
      en: [
        "Use query selectors confidently",
        "Handle click and input events",
        "Update the DOM based on state",
        "Recognize repeatable search and live-feedback patterns",
      ],
      es: [
        "Usar selectores con confianza",
        "Manejar eventos click e input",
        "Actualizar el DOM segun el estado",
        "Reconocer patrones repetibles de busqueda y feedback en vivo",
      ],
    },
    project: {
      en: "An interactive settings and search panel",
      es: "Un panel interactivo de ajustes y busqueda",
    },
  },
  {
    id: "class-06",
    number: "06",
    modeId: "builder",
    challengeIds: [
      "simple-form-validation",
      "contact-form-validation",
      "login-form-submit-object",
      "booking-form-reset",
      "reservation-form-summary",
      "form-data-preview",
      "add-item-to-list",
      "add-goal-to-list",
      "prevent-duplicate-items",
      "remove-item-from-list",
      "remove-saved-item",
      "filter-products",
      "data-driven-lesson-search",
      "sort-products",
      "todo-complete-toggle",
      "password-strength-checker",
      "password-rules-validation",
      "tab-switcher",
      "restaurant-tabs-panel",
      "profile-tabs-active-state",
      "product-list-manager-capstone",
    ],
    title: {
      en: "Forms, arrays, and reusable UI logic",
      es: "Formularios, arrays y logica reutilizable de UI",
    },
    summary: {
      en: "Students practice the core patterns used in real frontends: validation, turning form input into objects, list updates, filtering, sorting, and tabs.",
      es: "El alumnado practica patrones reales de frontend: validacion, convertir formularios en objetos, actualizar listas, filtrar, ordenar y usar pestanas.",
    },
    outcomes: {
      en: [
        "Validate user input",
        "Turn submitted form values into useful objects",
        "Render arrays into the DOM",
        "Refactor repeated UI updates into functions",
      ],
      es: [
        "Validar datos del usuario",
        "Convertir valores enviados en objetos utiles",
        "Renderizar arrays en el DOM",
        "Refactorizar actualizaciones repetidas en funciones",
      ],
    },
    project: {
      en: "A searchable product list",
      es: "Una lista de productos con busqueda",
    },
  },
  {
    id: "class-07",
    number: "07",
    modeId: "builder",
    challengeIds: [
      "mock-fetch-loading",
      "mock-fetch-error-retry",
      "promise-chain-practice",
      "await-user-card",
      "async-save-button",
      "save-notes-localstorage",
      "save-load-todos-localstorage",
      "saved-favourites-localstorage",
      "cart-items-localstorage",
      "dark-mode-preference-localstorage",
      "saved-form-draft-localstorage",
      "recently-viewed-products-localstorage",
      "todo-completed-filter-localstorage",
      "mock-product-search",
      "github-profile-finder",
      "weather-search-panel",
      "recipe-search-app",
      "promise-all-user-posts",
      "fetch-posts-loading-error-list",
      "fetch-users-filter-after-load",
      "shopping-cart-total",
      "filter-sort-products",
      "async-dashboard-capstone",
    ],
    title: {
      en: "Async JavaScript, APIs, and browser storage",
      es: "JavaScript asincrono, APIs y almacenamiento del navegador",
    },
    summary: {
      en: "A job-readiness bridge into promises, async/await, loading states, fetch mini apps, saved browser data, and state-shaped localStorage practice.",
      es: "Un puente hacia empleabilidad con promesas, async/await, estados de carga, mini apps con fetch, datos guardados y practica de localStorage con forma de estado.",
    },
    outcomes: {
      en: [
        "Handle loading, error, and success states",
        "Use promises and async/await",
        "Persist useful pieces of app data",
        "Explain how fetch-driven UI updates happen step by step",
      ],
      es: [
        "Manejar estados de carga, error y exito",
        "Usar promesas y async/await",
        "Persistir datos utiles de la app",
        "Explicar paso a paso como una UI se actualiza tras fetch",
      ],
    },
    project: {
      en: "A mini dashboard with async and saved state",
      es: "Un mini dashboard con async y estado guardado",
    },
  },
  {
    id: "class-08",
    number: "08",
    modeId: "builder",
    challengeIds: [
      "map-product-cards",
      "filter-available-sessions",
      "find-selected-mentor",
      "some-stock-warning",
      "sort-students-by-score",
      "render-users-from-array",
      "event-delegation-todo-actions",
      "dropdown-menu-toggle",
      "async-product-search",
      "paginated-table",
      "kpi-dashboard-calculator",
      "admin-dashboard-capstone",
    ],
    title: {
      en: "Professional JavaScript UI patterns",
      es: "Patrones profesionales de UI con JavaScript",
    },
    summary: {
      en: "Students practice the patterns that show up in junior frontend tasks: array methods, rendering from data, delegated events, menu interactions, async search, pagination, and KPI calculations.",
      es: "El alumnado practica patrones habituales en tareas junior: metodos de arrays, renderizar desde datos, eventos delegados, interacciones de menu, busqueda asincrona, paginacion y KPIs.",
    },
    outcomes: {
      en: [
        "Render interfaces from structured data",
        "Choose between map(), filter(), find(), some(), and sort()",
        "Handle scalable UI events",
        "Build dashboard and table interactions",
      ],
      es: [
        "Renderizar interfaces desde datos estructurados",
        "Elegir entre map(), filter(), find(), some() y sort()",
        "Manejar eventos de UI escalables",
        "Crear interacciones de dashboards y tablas",
      ],
    },
    project: {
      en: "A data-driven admin dashboard",
      es: "Un dashboard administrativo basado en datos",
    },
  },
  {
    id: "class-09",
    number: "09",
    modeId: "builder",
    challengeIds: [
      "destructure-profile-card",
      "spread-settings-merge",
      "find-priority-ticket",
      "switch-role-permissions",
      "closure-counter-factory",
      "event-loop-order",
      "debug-broken-form-validation",
      "try-catch-json-parser",
      "debug-broken-localstorage-todos",
      "debug-broken-async-search",
      "fetch-users-status-codes",
      "post-json-with-headers",
      "query-param-search",
      "request-race-condition-guard",
      "backend-request-flow",
      "api-toolkit-capstone",
    ],
    title: {
      en: "Core JS, APIs, debugging, and backend awareness",
      es: "JS esencial, APIs, depuracion y backend",
    },
    summary: {
      en: "A focused job-readiness block for modern JavaScript syntax, error handling, request lifecycles, race conditions, and how frontend work connects to servers.",
      es: "Un bloque enfocado en empleabilidad con sintaxis moderna de JavaScript, errores, ciclo de peticiones, race conditions y conexion con servidores.",
    },
    outcomes: {
      en: [
        "Use destructuring, spread, closures, scope, and switch statements",
        "Handle fetch, JSON, headers, status codes, and query parameters",
        "Debug async issues and understand basic backend flow",
      ],
      es: [
        "Usar destructuring, spread, closures, scope y switch",
        "Manejar fetch, JSON, headers, codigos de estado y query parameters",
        "Depurar problemas asincronos y entender el flujo basico de backend",
      ],
    },
    project: {
      en: "An API-aware admin toolkit",
      es: "Un toolkit administrativo orientado a APIs",
    },
  },
  {
    id: "class-16",
    number: "10",
    modeId: "builder",
    challengeIds: ["builder-all-in-one-practice-lab"],
    title: {
      en: "Builder all-in-one project",
      es: "Proyecto integrador Builder",
    },
    summary: {
      en: "The full Builder path comes together in one interactive practice lab with search, filters, local state, validation, and saved preferences.",
      es: "Toda la ruta Builder se une en un laboratorio interactivo con busqueda, filtros, estado local, validacion y preferencias guardadas.",
    },
    outcomes: {
      en: [
        "Connect multiple DOM behaviors in one interface",
        "Manage filtered data and UI state together",
        "Finish a larger JavaScript feature with product-like polish",
      ],
      es: [
        "Conectar varios comportamientos del DOM en una interfaz",
        "Gestionar datos filtrados y estado de UI juntos",
        "Terminar una funcionalidad JavaScript mas grande con acabado de producto",
      ],
    },
    project: {
      en: "An all-in-one JavaScript practice lab",
      es: "Un laboratorio integrador de JavaScript",
    },
  },
  {
    id: "class-10",
    number: "10",
    modeId: "react",
    challengeIds: [
      "first-react-component",
      "reuse-component",
      "props-card-component",
      "render-list-map",
      "list-keys",
      "conditional-status-badge",
      "react-counter-usestate",
      "react-toggle-section",
      "react-toggle-button-label",
      "controlled-input",
      "react-character-counter",
      "react-search-filter",
      "react-category-filter",
      "react-component-directory-capstone",
    ],
    title: {
      en: "React components, props, and state",
      es: "Componentes, props y estado en React",
    },
    summary: {
      en: "Students translate their DOM instincts into React components, props, list rendering, conditions, and controlled inputs.",
      es: "El alumnado transforma su intuicion del DOM en componentes, props, listas, condiciones e inputs controlados en React.",
    },
    outcomes: {
      en: [
        "Create reusable components",
        "Pass and render props",
        "Use state for interactive UI",
      ],
      es: [
        "Crear componentes reutilizables",
        "Pasar y mostrar props",
        "Usar estado para UI interactiva",
      ],
    },
    project: {
      en: "A component-based filter interface",
      es: "Una interfaz de filtros basada en componentes",
    },
  },
  {
    id: "class-11",
    number: "11",
    modeId: "react",
    challengeIds: [
      "lift-state-up",
      "reusable-button-component",
      "react-form-validation",
      "react-booking-form-app",
      "react-modal-component",
      "react-accordion-item",
      "react-tabs-component",
      "react-mock-fetch-useeffect",
      "loading-error-empty-states",
      "custom-hook-localstorage",
      "react-load-users",
      "react-retry-request",
      "react-async-search",
      "react-empty-state",
      "react-users-dashboard-capstone",
    ],
    title: {
      en: "React app patterns and effects",
      es: "Patrones de app y efectos en React",
    },
    summary: {
      en: "This section focuses on state ownership, reusable components, practical form flows, effects, custom hooks, and resilient async UI.",
      es: "Esta seccion se centra en propiedad del estado, componentes reutilizables, formularios utiles, efectos, hooks propios y UI asincrona robusta.",
    },
    outcomes: {
      en: [
        "Lift state to the right component",
        "Use effects for data loading",
        "Design empty, loading, and error states",
      ],
      es: [
        "Subir el estado al componente correcto",
        "Usar efectos para cargar datos",
        "Disenar estados vacios, de carga y de error",
      ],
    },
    project: {
      en: "A resilient users interface",
      es: "Una interfaz de usuarios robusta",
    },
  },
  {
    id: "class-12",
    number: "12",
    modeId: "react",
    challengeIds: [
      "react-loaded-category-filter",
      "react-sort-products",
      "react-movie-search-app",
      "react-toggle-favourites",
      "react-custom-data-hook",
      "react-theme-localstorage",
      "react-disable-submit-loading",
      "react-debounced-search",
      "react-paginated-list",
      "react-multi-filter-products",
      "react-results-summary",
      "react-product-browser-capstone",
    ],
    title: {
      en: "Portfolio-grade React workflows",
      es: "Flujos React con nivel de portfolio",
    },
    summary: {
      en: "The final class connects filtering, sorting, movie-search style apps, favorites, debouncing, pagination, and polished submission states.",
      es: "La clase final conecta filtros, ordenacion, apps tipo busqueda de peliculas, favoritos, debounce, paginacion y estados de envio pulidos.",
    },
    outcomes: {
      en: [
        "Compose multiple filters and derived views",
        "Make UI feel responsive under async work",
        "Prepare a capstone project brief",
      ],
      es: [
        "Componer varios filtros y vistas derivadas",
        "Hacer que la UI responda bien durante trabajo asincrono",
        "Preparar el brief de un proyecto final",
      ],
    },
    project: {
      en: "A polished product browser capstone",
      es: "Un explorador de productos pulido como proyecto final",
    },
  },
  {
    id: "class-13",
    number: "13",
    modeId: "react",
    challengeIds: [
      "react-usereducer-todos",
      "react-contact-manager",
      "react-context-theme",
      "react-view-mode-context",
      "react-accessible-form-errors",
      "react-optimistic-favourites",
      "react-saved-filter-state",
      "react-dashboard-composition",
      "react-job-board-capstone",
    ],
    title: {
      en: "Job-ready React capstones",
      es: "Capstones de React para empleabilidad",
    },
    summary: {
      en: "The final React block combines reducers, contact-style CRUD, context, accessibility, optimistic UI, persistence, composition, and a job-board take-home project.",
      es: "El bloque final de React combina reducers, CRUD tipo agenda de contactos, context, accesibilidad, UI optimista, persistencia, composicion y un proyecto tipo prueba tecnica.",
    },
    outcomes: {
      en: [
        "Use advanced React state patterns",
        "Build accessible and persistent UI",
        "Complete a realistic take-home style project",
      ],
      es: [
        "Usar patrones avanzados de estado en React",
        "Crear UI accesible y persistente",
        "Completar un proyecto realista tipo prueba tecnica",
      ],
    },
    project: {
      en: "A job board take-home challenge",
      es: "Una prueba tecnica de job board",
    },
  },
  {
    id: "class-14",
    number: "14",
    modeId: "react",
    challengeIds: [
      "react-router-basic-pages",
      "react-route-tab-navigation",
      "react-router-dynamic-user",
      "react-router-product-detail",
      "react-auth-guard-state",
      "react-routed-directory-capstone",
    ],
    title: {
      en: "Routing, auth, and app navigation",
      es: "Routing, auth y navegacion de apps",
    },
    summary: {
      en: "Students finish with real app navigation: routes, links, dynamic detail pages, protected screens, auth state, and a routed filter capstone.",
      es: "El alumnado termina con navegacion real: rutas, links, paginas dinamicas, pantallas protegidas, estado de auth y un capstone con filtros.",
    },
    outcomes: {
      en: [
        "Build multi-page React experiences with React Router",
        "Use URL params for detail pages",
        "Explain how one route pattern can render many items",
        "Protect routes with authentication state",
      ],
      es: [
        "Crear experiencias React multipagina con React Router",
        "Usar parametros de URL para paginas de detalle",
        "Explicar como una ruta puede renderizar muchos items",
        "Proteger rutas con estado de autenticacion",
      ],
    },
    project: {
      en: "A routed product directory with auth patterns",
      es: "Un directorio de productos con rutas y patrones de auth",
    },
  },
  {
    id: "class-17",
    number: "15",
    modeId: "react",
    challengeIds: ["react-all-in-one-restaurant-app"],
    title: {
      en: "React all-in-one app",
      es: "App integradora de React",
    },
    summary: {
      en: "Students close the React path with one routed app that combines filters, saved favourites, localStorage, and a controlled form.",
      es: "El alumnado cierra React con una app con rutas que combina filtros, favoritos guardados, localStorage y un formulario controlado.",
    },
    outcomes: {
      en: [
        "Combine routing, state, and derived data in one app",
        "Persist useful UI state locally",
        "Finish a realistic portfolio-grade React build",
      ],
      es: [
        "Combinar rutas, estado y datos derivados en una app",
        "Persistir estado util de UI localmente",
        "Terminar un build de React realista para portfolio",
      ],
    },
    project: {
      en: "A routed restaurant app in React",
      es: "Una app de restaurante con rutas en React",
    },
  },
  {
    id: "class-36",
    number: "01",
    modeId: "typescript",
    challengeIds: [
      "ts-typed-profile-card",
      "ts-interface-feature-list",
      "ts-union-status-badge",
      "ts-optional-note-card",
    ],
    title: {
      en: "TypeScript foundations for React UI",
      es: "Fundamentos de TypeScript para UI con React",
    },
    summary: {
      en: "Students begin by naming data shapes clearly with interfaces, simple types, unions, and optional properties before the UI grows.",
      es: "El alumnado empieza nombrando bien las formas de los datos con interfaces, tipos sencillos, unions y propiedades opcionales antes de que la UI crezca.",
    },
    outcomes: {
      en: [
        "Describe simple UI data with type aliases or interfaces",
        "Use unions for small state choices",
        "Understand why optional properties matter in real UI",
      ],
      es: [
        "Describir datos sencillos de UI con type aliases o interfaces",
        "Usar unions para pequenas decisiones de estado",
        "Entender por que las propiedades opcionales importan en UI real",
      ],
    },
    project: {
      en: "A typed UI starter kit",
      es: "Un kit inicial de UI tipada",
    },
  },
  {
    id: "class-37",
    number: "02",
    modeId: "typescript",
    challengeIds: [
      "ts-typed-click-counter",
      "ts-controlled-booking-form",
      "ts-narrowing-feedback-panel",
      "ts-filtered-directory",
    ],
    title: {
      en: "Typed state, events, and form flow",
      es: "Estado, eventos y flujo de formularios tipados",
    },
    summary: {
      en: "This block makes TypeScript feel practical by typing state, event handlers, and form logic that juniors actually use.",
      es: "Este bloque hace que TypeScript se sienta practico tipando estado, event handlers y logica de formularios que una persona junior de verdad usa.",
    },
    outcomes: {
      en: [
        "Type everyday React state with confidence",
        "Use typed events for click, change, and submit flows",
        "Apply narrowing when data is not fully known yet",
      ],
      es: [
        "Tipar con confianza el estado cotidiano de React",
        "Usar eventos tipados en flujos de click, cambio y envio",
        "Aplicar narrowing cuando los datos aun no estan del todo claros",
      ],
    },
    project: {
      en: "A typed booking and feedback flow",
      es: "Un flujo tipado de reserva y feedback",
    },
  },
  {
    id: "class-38",
    number: "03",
    modeId: "typescript",
    challengeIds: [
      "ts-spread-settings-panel",
      "ts-fetch-menu-board",
      "ts-favourites-toggle-list",
      "ts-typed-search-results",
      "ts-refactor-feedback-board",
    ],
    title: {
      en: "Typed data, async work, and safer updates",
      es: "Datos tipados, trabajo async y actualizaciones mas seguras",
    },
    summary: {
      en: "Students move beyond toy examples into typed updates, typed fetch flows, search rendering, and refactoring unsafe UI into clearer code.",
      es: "El alumnado pasa de ejemplos pequenos a actualizaciones tipadas, flujos fetch tipados, renderizado con busqueda y refactor de UI insegura a codigo mas claro.",
    },
    outcomes: {
      en: [
        "Update objects and arrays without losing data shape",
        "Type fetched data before rendering it",
        "Refactor JavaScript habits into safer TypeScript habits",
      ],
      es: [
        "Actualizar objetos y arrays sin perder la forma de los datos",
        "Tipar datos cargados antes de renderizarlos",
        "Convertir habitos de JavaScript en habitos de TypeScript mas seguros",
      ],
    },
    project: {
      en: "A typed data workspace",
      es: "Un workspace de datos tipados",
    },
  },
  {
    id: "class-40",
    number: "04",
    modeId: "typescript",
    challengeIds: [
      "ts-reducer-task-board",
      "ts-context-theme-panel",
      "ts-discriminated-async-panel",
      "ts-typed-route-details",
      "ts-typed-localstorage-hook",
    ],
    title: {
      en: "TypeScript app patterns and architecture",
      es: "Patrones y arquitectura de apps con TypeScript",
    },
    summary: {
      en: "This block brings TypeScript into reducers, context, typed async models, routing, and reusable hooks so the path feels much closer to modern team code.",
      es: "Este bloque lleva TypeScript a reducers, context, modelos async tipados, routing y hooks reutilizables para que la ruta se parezca mucho mas al codigo de equipos reales.",
    },
    outcomes: {
      en: [
        "Use TypeScript with reducers and shared context",
        "Model async state with safer unions",
        "Type practical app wiring like routes and storage helpers",
      ],
      es: [
        "Usar TypeScript con reducers y context compartido",
        "Modelar estado async con unions mas seguras",
        "Tipar cableado practico de app como rutas y helpers de storage",
      ],
    },
    project: {
      en: "A typed app patterns workshop",
      es: "Un taller de patrones de app tipados",
    },
  },
  {
    id: "class-39",
    number: "05",
    modeId: "typescript",
    challengeIds: ["ts-all-in-one-dashboard-capstone"],
    title: {
      en: "TypeScript all-in-one capstone",
      es: "Capstone integrador de TypeScript",
    },
    summary: {
      en: "The learner closes the path with one realistic dashboard that combines typed props, state, filters, async rendering, and calmer frontend decisions.",
      es: "La persona cierra la ruta con un dashboard realista que combina props tipadas, estado, filtros, renderizado async y decisiones de frontend mas tranquilas.",
    },
    outcomes: {
      en: [
        "Combine typed UI patterns in one practical feature",
        "Keep async, filtering, and state logic understandable",
        "Finish with a portfolio-grade typed React build",
      ],
      es: [
        "Combinar patrones de UI tipada en una sola funcionalidad practica",
        "Mantener comprensible la logica async, de filtros y de estado",
        "Terminar con un build tipado de React listo para portfolio",
      ],
    },
    project: {
      en: "A typed operations dashboard",
      es: "Un dashboard de operaciones tipado",
    },
  },
  {
    id: "class-18",
    number: "01",
    modeId: "interview",
    timeLimitMinutes: 75,
    challengeIds: ["interview-html-css-build-test"],
    title: {
      en: "Interview test 1: responsive build",
      es: "Prueba 1: build responsive",
    },
    summary: {
      en: "A layout-focused test brief that checks page structure, card rhythm, responsive behavior, and professional visual organization.",
      es: "Una prueba centrada en layout que evalua estructura, ritmo de tarjetas, comportamiento responsive y organizacion visual profesional.",
    },
    outcomes: {
      en: [
        "Read a brief and turn it into a complete page",
        "Use spacing and sections with intention",
        "Deliver a responsive screen under interview pressure",
      ],
      es: [
        "Leer un brief y convertirlo en una pagina completa",
        "Usar espaciado y secciones con intencion",
        "Entregar una pantalla responsive bajo presion de entrevista",
      ],
    },
    project: {
      en: "A responsive restaurant landing page",
      es: "Una landing page responsive de restaurante",
    },
  },
  {
    id: "class-19",
    number: "02",
    modeId: "interview",
    timeLimitMinutes: 60,
    challengeIds: ["interview-dom-logic-test"],
    title: {
      en: "Interview test 2: DOM logic",
      es: "Prueba 2: logica del DOM",
    },
    summary: {
      en: "A DOM-heavy interview brief that checks search, empty states, clear actions, and interactive help cards working together.",
      es: "Una prueba de DOM que evalua busqueda, estados vacios, acciones de limpiar y tarjetas interactivas funcionando juntas.",
    },
    outcomes: {
      en: [
        "Build a small product-like interface without frameworks",
        "Handle multiple event-driven UI behaviors together",
        "Keep the interface understandable while logic grows",
      ],
      es: [
        "Construir una pequena interfaz tipo producto sin frameworks",
        "Manejar varios comportamientos de UI dirigidos por eventos",
        "Mantener la interfaz comprensible mientras crece la logica",
      ],
    },
    project: {
      en: "A support workspace test",
      es: "Una prueba de workspace de soporte",
    },
  },
  {
    id: "class-20",
    number: "03",
    modeId: "interview",
    timeLimitMinutes: 75,
    challengeIds: ["interview-async-api-test"],
    title: {
      en: "Interview test 3: async dashboard",
      es: "Prueba 3: dashboard asincrono",
    },
    summary: {
      en: "An async interview brief that checks loading, errors, retry logic, filtering, and saved notes in a small operations dashboard.",
      es: "Una prueba asincrona que evalua carga, errores, reintentos, filtros y notas guardadas en un pequeno dashboard de operaciones.",
    },
    outcomes: {
      en: [
        "Handle async lifecycle states clearly",
        "Filter loaded data without breaking the UI",
        "Explain request flow and user feedback choices",
      ],
      es: [
        "Manejar con claridad estados del ciclo asincrono",
        "Filtrar datos cargados sin romper la UI",
        "Explicar el flujo de peticiones y decisiones de feedback",
      ],
    },
    project: {
      en: "An operations dashboard take-home",
      es: "Una prueba tecnica de dashboard de operaciones",
    },
  },
  {
    id: "class-21",
    number: "04",
    modeId: "interview",
    timeLimitMinutes: 90,
    challengeIds: ["interview-react-takehome-test"],
    title: {
      en: "Interview test 4: React take-home",
      es: "Prueba 4: take-home de React",
    },
    summary: {
      en: "A final interview path project that combines routing, filtered lists, saved items, localStorage, and a small application flow in React.",
      es: "Un proyecto final de entrevista que combina rutas, listas filtradas, guardados, localStorage y un pequeno flujo de aplicacion en React.",
    },
    outcomes: {
      en: [
        "Deliver a realistic React take-home style app",
        "Combine routing, filters, and persistence in one flow",
        "Practice the kind of project candidates often discuss in interviews",
      ],
      es: [
        "Entregar una app realista tipo take-home en React",
        "Combinar rutas, filtros y persistencia en un mismo flujo",
        "Practicar el tipo de proyecto que suele discutirse en entrevistas",
      ],
    },
    project: {
      en: "A routed hiring app in React",
      es: "Una app de contratacion con rutas en React",
    },
  },
  {
    id: "class-22",
    number: "05",
    modeId: "interview",
    timeLimitMinutes: 60,
    challengeIds: ["interview-accessibility-qa-test"],
    title: {
      en: "Interview test 5: accessibility and QA",
      es: "Prueba 5: accesibilidad y QA",
    },
    summary: {
      en: "A quality-focused interview brief that checks labels, focus states, validation, and whether the form feels safe to ship.",
      es: "Una prueba centrada en calidad que evalua labels, focus states, validacion y si el formulario parece listo para enviar.",
    },
    outcomes: {
      en: [
        "Build forms with accessibility in mind",
        "Show clear error and success feedback",
        "Treat keyboard and focus states as part of the feature",
      ],
      es: [
        "Construir formularios pensando en accesibilidad",
        "Mostrar feedback claro de error y exito",
        "Tratar teclado y focus como parte de la funcionalidad",
      ],
    },
    project: {
      en: "An accessible reservation request flow",
      es: "Un flujo accesible de solicitud de reserva",
    },
  },
  {
    id: "class-29",
    number: "06",
    modeId: "interview",
    timeLimitMinutes: 45,
    challengeIds: ["interview-accessible-modal-test"],
    title: {
      en: "Interview test 6: accessible modal",
      es: "Prueba 6: modal accesible",
    },
    summary: {
      en: "A keyboard-first modal brief that checks ARIA, focus movement, Escape handling, and visible focus styling.",
      es: "Una prueba de modal pensada para teclado que evalua ARIA, movimiento de foco, cierre con Escape y estilos focus visibles.",
    },
    outcomes: {
      en: [
        "Build a modal that works without a mouse",
        "Move focus intentionally on open and close",
        "Explain why dialog accessibility is product quality, not decoration",
      ],
      es: [
        "Construir un modal usable sin raton",
        "Mover el foco con intencion al abrir y cerrar",
        "Explicar por que la accesibilidad del dialogo es calidad de producto",
      ],
    },
    project: {
      en: "An accessible support modal",
      es: "Un modal accesible de soporte",
    },
  },
  {
    id: "class-30",
    number: "07",
    modeId: "interview",
    timeLimitMinutes: 45,
    challengeIds: ["interview-accessible-tabs-test"],
    title: {
      en: "Interview test 7: accessible tabs",
      es: "Prueba 7: tabs accesibles",
    },
    summary: {
      en: "A tabs challenge that checks ARIA roles, keyboard navigation, visible focus, and whether the right panel is shown at the right time.",
      es: "Una prueba de tabs que evalua roles ARIA, navegacion por teclado, focus visible y si el panel correcto aparece en el momento correcto.",
    },
    outcomes: {
      en: [
        "Build a practical ARIA tabs pattern",
        "Support keyboard-only navigation",
        "Keep UI state and accessibility state aligned",
      ],
      es: [
        "Construir un patron practico de tabs con ARIA",
        "Dar soporte a navegacion solo con teclado",
        "Mantener alineados estado visual y estado accesible",
      ],
    },
    project: {
      en: "An accessible restaurant info tabs UI",
      es: "Una UI accesible de tabs informativos",
    },
  },
  {
    id: "class-23",
    number: "08",
    modeId: "interview",
    timeLimitMinutes: 60,
    challengeIds: ["interview-debug-dom-test"],
    title: {
      en: "Interview test 6: debug DOM logic",
      es: "Prueba 6: depurar logica DOM",
    },
    summary: {
      en: "A realistic bug-fix exercise where the learner has to repair search, clear, and no-results behavior instead of building from scratch.",
      es: "Una prueba realista de correccion de bugs donde el alumno repara busqueda, limpiar y no-resultados en lugar de construir desde cero.",
    },
    outcomes: {
      en: [
        "Read broken DOM code calmly",
        "Repair event-driven UI behavior",
        "Explain the bug and the fix clearly",
      ],
      es: [
        "Leer codigo DOM roto con calma",
        "Reparar comportamiento de UI dirigido por eventos",
        "Explicar el bug y la solucion con claridad",
      ],
    },
    project: {
      en: "A repaired resource filter workspace",
      es: "Un workspace reparado de filtros de recursos",
    },
  },
  {
    id: "class-24",
    number: "09",
    modeId: "interview",
    timeLimitMinutes: 60,
    challengeIds: ["interview-debug-async-test"],
    title: {
      en: "Interview test 7: debug async state",
      es: "Prueba 7: depurar estado asincrono",
    },
    summary: {
      en: "An async debugging brief that checks whether the learner can repair loading, retry, filtering, and persistence without deleting product behavior.",
      es: "Una prueba de depuracion asincrona que evalua si el alumno puede reparar carga, reintento, filtros y persistencia sin borrar comportamiento de producto.",
    },
    outcomes: {
      en: [
        "Repair async lifecycle bugs",
        "Keep render logic and request logic separate",
        "Debug persistence and UI state together",
      ],
      es: [
        "Reparar bugs del ciclo asincrono",
        "Mantener separadas logica de render y de request",
        "Depurar persistencia y estado de UI a la vez",
      ],
    },
    project: {
      en: "A repaired async operations dashboard",
      es: "Un dashboard asincrono de operaciones reparado",
    },
  },
  {
    id: "class-25",
    number: "10",
    modeId: "interview",
    timeLimitMinutes: 60,
    challengeIds: ["interview-typescript-react-test"],
    title: {
      en: "Interview test 8: TypeScript React",
      es: "Prueba 8: React con TypeScript",
    },
    summary: {
      en: "A typed React assignment that checks whether the learner can move beyond plain JavaScript into the stack many teams expect today.",
      es: "Una prueba de React tipado que evalua si el alumno puede ir mas alla de JavaScript plano hacia el stack que muchos equipos esperan hoy.",
    },
    outcomes: {
      en: [
        "Type data and state in React",
        "Use unions and typed event handlers",
        "Discuss how TypeScript reduces common UI mistakes",
      ],
      es: [
        "Tipar datos y estado en React",
        "Usar unions y handlers tipados",
        "Explicar como TypeScript reduce errores comunes de UI",
      ],
    },
    project: {
      en: "A typed hiring board in React",
      es: "Un tablero de contratacion tipado en React",
    },
  },
  {
    id: "class-26",
    number: "11",
    modeId: "interview",
    timeLimitMinutes: 75,
    challengeIds: ["interview-debug-react-test"],
    title: {
      en: "Interview test 9: debug React state",
      es: "Prueba 9: depurar estado en React",
    },
    summary: {
      en: "A React bug-fix exercise that checks derived data, localStorage, toggle logic, and empty states under interview pressure.",
      es: "Una prueba de correccion de bugs en React que evalua datos derivados, localStorage, toggles y estados vacios bajo presion de entrevista.",
    },
    outcomes: {
      en: [
        "Repair saved-state logic in React",
        "Debug derived lists instead of duplicating state",
        "Talk through the reasoning behind the fix",
      ],
      es: [
        "Reparar logica de estado guardado en React",
        "Depurar listas derivadas en lugar de duplicar estado",
        "Explicar el razonamiento detras del arreglo",
      ],
    },
    project: {
      en: "A repaired React resource dashboard",
      es: "Un dashboard de recursos en React reparado",
    },
  },
  {
    id: "class-31",
    number: "12",
    modeId: "interview",
    timeLimitMinutes: 60,
    challengeIds: ["interview-debug-routing-test"],
    title: {
      en: "Interview test 12: debug React routing",
      es: "Prueba 12: depurar routing en React",
    },
    summary: {
      en: "A routing repair task that checks whether the learner can fix links, params, detail lookup, and fallback behavior without rebuilding the whole app.",
      es: "Una prueba de reparacion de routing que evalua si el alumno puede arreglar links, params, detalle y fallbacks sin rehacer toda la app.",
    },
    outcomes: {
      en: [
        "Repair broken route configuration calmly",
        "Use URL params to render the correct detail screen",
        "Explain the relationship between links, paths, and data lookup",
      ],
      es: [
        "Reparar con calma una configuracion de rutas rota",
        "Usar params de URL para mostrar el detalle correcto",
        "Explicar la relacion entre links, rutas y busqueda de datos",
      ],
    },
    project: {
      en: "A repaired routed lesson board",
      es: "Un tablero con rutas reparadas",
    },
  },
  {
    id: "class-32",
    number: "13",
    modeId: "interview",
    timeLimitMinutes: 45,
    challengeIds: ["interview-unit-tests-foundations-test"],
    title: {
      en: "Interview test 13: unit test foundations",
      es: "Prueba 13: bases de unit tests",
    },
    summary: {
      en: "A first testing brief where the learner writes focused tests around small helpers instead of only building UI.",
      es: "Una primera prueba de testing donde el alumno escribe tests enfocados sobre helpers pequenos en lugar de solo construir UI.",
    },
    outcomes: {
      en: [
        "Write small tests with clear intent",
        "Cover both normal and edge cases",
        "Explain what behavior a unit test is protecting",
      ],
      es: [
        "Escribir tests pequenos con intencion clara",
        "Cubrir casos normales y algunos edge cases",
        "Explicar que comportamiento protege un unit test",
      ],
    },
    project: {
      en: "A tested helper utilities file",
      es: "Un archivo de utilidades con tests",
    },
  },
  {
    id: "class-33",
    number: "14",
    modeId: "interview",
    timeLimitMinutes: 45,
    challengeIds: ["interview-rtl-interaction-test"],
    title: {
      en: "Interview test 14: Testing Library interactions",
      es: "Prueba 14: interacciones con Testing Library",
    },
    summary: {
      en: "A React Testing Library exercise that checks whether the learner can render UI, query it accessibly, and test a real interaction.",
      es: "Una prueba con React Testing Library que evalua si el alumno puede renderizar UI, consultarla de forma accesible y probar una interaccion real.",
    },
    outcomes: {
      en: [
        "Render a component in a test harness",
        "Query UI using roles and visible text",
        "Simulate user interaction and assert the result",
      ],
      es: [
        "Renderizar un componente dentro de un test",
        "Consultar la UI por roles y texto visible",
        "Simular una interaccion y comprobar el resultado",
      ],
    },
    project: {
      en: "A tested save interaction panel",
      es: "Un panel de guardado probado con tests",
    },
  },
  {
    id: "class-34",
    number: "15",
    modeId: "interview",
    timeLimitMinutes: 60,
    challengeIds: ["interview-form-validation-tests-test"],
    title: {
      en: "Interview test 15: form validation tests",
      es: "Prueba 15: tests de validacion de formularios",
    },
    summary: {
      en: "A test-writing exercise focused on validation rules, submission flow, and user-facing error or success messages.",
      es: "Una prueba de escritura de tests centrada en reglas de validacion, flujo de envio y mensajes visibles de error o exito.",
    },
    outcomes: {
      en: [
        "Test a form like a user would fill and submit it",
        "Protect validation feedback with assertions",
        "Explain the difference between form logic and form tests",
      ],
      es: [
        "Probar un formulario como lo rellenaria y enviaria una persona usuaria",
        "Proteger el feedback de validacion con asserts",
        "Explicar la diferencia entre logica de formulario y tests de formulario",
      ],
    },
    project: {
      en: "A tested signup form",
      es: "Un formulario de registro cubierto por tests",
    },
  },
  {
    id: "class-35",
    number: "16",
    modeId: "interview",
    timeLimitMinutes: 60,
    challengeIds: ["interview-loading-error-tests-test"],
    title: {
      en: "Interview test 16: loading and error tests",
      es: "Prueba 16: tests de carga y error",
    },
    summary: {
      en: "A final testing brief that checks whether the learner can test loading, success, and error states in async React UI.",
      es: "Una prueba final de testing que evalua si el alumno puede probar estados de carga, exito y error en una UI React asincrona.",
    },
    outcomes: {
      en: [
        "Test async UI without racing the DOM",
        "Use waitFor for delayed updates",
        "Talk clearly about loading, success, and error coverage",
      ],
      es: [
        "Probar UI asincrona sin correr contra el DOM",
        "Usar waitFor para actualizaciones retrasadas",
        "Explicar con claridad cobertura de carga, exito y error",
      ],
    },
    project: {
      en: "An async board covered by tests",
      es: "Un panel asincrono cubierto por tests",
    },
  },
  {
    id: "class-27",
    number: "17",
    modeId: "interview",
    timeLimitMinutes: 60,
    challengeIds: ["interview-shipping-readiness-test"],
    title: {
      en: "Interview test 10: shipping readiness",
      es: "Prueba 10: listo para enviar",
    },
    summary: {
      en: "A final quality-focused test that checks whether the learner can build a submit flow with clear states, disabled actions, and reliable feedback.",
      es: "Una prueba final centrada en calidad que evalua si el alumno puede construir un flujo de envio con estados claros, acciones desactivadas y feedback fiable.",
    },
    outcomes: {
      en: [
        "Model UI as clear states",
        "Handle loading, error, and success with intention",
        "Finish a feature in a way that feels shippable",
      ],
      es: [
        "Modelar la UI como estados claros",
        "Manejar carga, error y exito con intencion",
        "Terminar una funcionalidad con sensacion de lista para enviar",
      ],
    },
    project: {
      en: "A shipping-ready submission flow",
      es: "Un flujo de envio listo para enviar",
    },
  },
  {
    id: "class-41",
    number: "01",
    modeId: "police",
    timeLimitMinutes: 200,
    challengeIds: [
      "police-learning-zone",
      "essex-police-sjt-mock-01",
      "essex-police-sjt-mock-02",
      "essex-police-sjt-mock-03",
      "essex-police-sjt-mock-04",
      "essex-police-sjt-mock-05",
      "essex-police-sjt-final-review",
      "national-sift-2024-mock-01",
      "national-sift-2024-mock-02",
      "national-sift-2024-mock-03",
      "national-sift-2024-mock-04",
    ],
    title: {
      en: "Police SJT preparation: learning zone and expanded PDF set",
      es: "Preparacion SJT policial: learning zone y set PDF ampliado",
    },
    summary: {
      en: "A structured study zone plus 137 SJT practice questions from the supplied PDFs, split into mocks with duplicate scenarios removed.",
      es: "Una zona de estudio estructurada mas 137 preguntas SJT de los PDFs aportados, divididas en mocks y sin escenarios duplicados.",
    },
    outcomes: {
      en: [
        "Practise the Counterproductive to Efficient rating scale",
        "Understand what stronger police judgement tends to protect",
        "Review weaker areas before online sift, interview, written, or briefing preparation",
      ],
      es: [
        "Practicar la escala de Counterproductive a Efficient",
        "Entender que protege un juicio policial mas fuerte",
        "Revisar areas debiles antes del sift online, entrevista, escrito o briefing",
      ],
    },
    project: {
      en: "A saved police SJT preparation path",
      es: "Una ruta guardada de preparacion SJT policial",
    },
  },
];

function pickLocalized(value, language) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return value;
  return value[language] || value.en;
}

function localizeSections(sections = [], language) {
  return sections.map((section) => ({
    ...section,
    title: pickLocalized(section.title, language),
    summary: pickLocalized(section.summary, language),
  }));
}

function getEstimatedTime(module, language = "en") {
  const isInterview = module.modeId === "interview";
  const isPolice = module.modeId === "police";
  const isSingleCapstone = module.challengeIds.length === 1 && !isInterview;
  const timedLabel = module.timeLimitMinutes;

  if (language === "es") {
    if (isPolice && timedLabel) return `Mock de ${timedLabel} min`;
    if (isPolice) return "15-30 min";
    if (isInterview && timedLabel) return `Prueba de ${timedLabel} min`;
    if (isInterview) return "60-120 min";
    if (isSingleCapstone) return "2-4 horas";
    if (module.challengeIds.length <= 6) return "60-90 min";
    if (module.challengeIds.length <= 10) return "90-120 min";
    if (module.challengeIds.length <= 14) return "2-3 horas";
    if (module.challengeIds.length <= 18) return "3-4 horas";
    return "4-6 horas";
  }

  if (isPolice && timedLabel) return `${timedLabel} min mock`;
  if (isPolice) return "15-30 min";
  if (isInterview && timedLabel) return `${timedLabel} min assessment`;
  if (isInterview) return "60-120 min";
  if (isSingleCapstone) return "2-4 hours";
  if (module.challengeIds.length <= 6) return "60-90 min";
  if (module.challengeIds.length <= 10) return "90-120 min";
  if (module.challengeIds.length <= 14) return "2-3 hours";
  if (module.challengeIds.length <= 18) return "3-4 hours";
  return "4-6 hours";
}

function getFormatLabel(module, language = "en") {
  const isInterview = module.modeId === "interview";
  const isPolice = module.modeId === "police";
  const isSingleCapstone = module.challengeIds.length === 1 && !isInterview;

  if (language === "es") {
    if (isPolice) return "Mock SJT";
    if (isInterview) return "Prueba tecnica";
    if (isSingleCapstone) return "Capstone";
    return "Bloque guiado";
  }

  if (isPolice) return "SJT mock";
  if (isInterview) return "Interview test";
  if (isSingleCapstone) return "Capstone";
  return "Guided block";
}

export function getLearningRoadmap(language = "en") {
  return roadmapPhases.map((phase) => ({
    ...phase,
    title: pickLocalized(phase.title, language),
    duration: pickLocalized(phase.duration, language),
    summary: pickLocalized(phase.summary, language),
    focus: pickLocalized(phase.focus, language),
  }));
}

export function getClassModules(language = "en") {
  const modeCounts = {};

  return classModules.map((module) => {
    modeCounts[module.modeId] = (modeCounts[module.modeId] || 0) + 1;

    return {
      ...module,
      title: pickLocalized(module.title, language),
      summary: pickLocalized(module.summary, language),
      outcomes: pickLocalized(module.outcomes, language),
      project: pickLocalized(module.project, language),
      phaseId: classPhaseMap[module.id],
      sections: localizeSections(classSections[module.id] || [], language),
      estimatedTime: getEstimatedTime(module, language),
      formatLabel: getFormatLabel(module, language),
      trackNumber: String(modeCounts[module.modeId]).padStart(2, "0"),
    };
  });
}

export function getClassStats(module, challengeProgress = {}) {
  const total = module.challengeIds.length;
  const completed = module.challengeIds.filter(
    (id) => challengeProgress[id] === "completed"
  ).length;
  const inProgress = module.challengeIds.filter(
    (id) => challengeProgress[id] === "in-progress"
  ).length;

  return {
    total,
    completed,
    inProgress,
    percentage: total === 0 ? 0 : Math.round((completed / total) * 100),
  };
}
