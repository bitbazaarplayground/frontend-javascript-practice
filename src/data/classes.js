const classPhaseMap = {
  "class-01": "phase-01",
  "class-02": "phase-01",
  "class-03": "phase-01",
  "class-04": "phase-01",
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
};

const roadmapPhases = [
  {
    id: "phase-01",
    title: {
      en: "Phase 1 - Foundations",
      es: "Fase 1 - Fundamentos",
    },
    duration: {
      en: "2-3 weeks",
      es: "2-3 semanas",
    },
    summary: {
      en: "Learn the visual language of the web: structure, layout, forms, responsive sections, and the first small interactions.",
      es: "Aprende el lenguaje visual de la web: estructura, layout, formularios, secciones responsive y primeras interacciones.",
    },
    focus: {
      en: [
        "HTML and CSS confidence",
        "Visual polish and spacing",
        "Beginner-friendly portfolio pieces",
      ],
      es: [
        "Confianza con HTML y CSS",
        "Pulido visual y espaciado",
        "Primeras piezas para portfolio",
      ],
    },
    classIds: ["class-01", "class-02", "class-03", "class-04", "class-15"],
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
      en: "Build portfolio-grade React features with routing, auth flows, persistence, accessibility, composition, and capstones.",
      es: "Construye funcionalidades de React para portfolio con routing, auth, persistencia, accesibilidad, composicion y capstones.",
    },
    focus: {
      en: [
        "Larger React flows",
        "Routing and protected screens",
        "Portfolio-ready capstones",
      ],
      es: [
        "Flujos React mas grandes",
        "Routing y pantallas protegidas",
        "Capstones listos para portfolio",
      ],
    },
    classIds: ["class-12", "class-13", "class-14", "class-17"],
  },
  {
    id: "phase-06",
    title: {
      en: "Phase 6 - Interview and Job Tests",
      es: "Fase 6 - Entrevistas y pruebas tecnicas",
    },
    duration: {
      en: "2-4 weeks",
      es: "2-4 semanas",
    },
    summary: {
      en: "Practice take-homes, accessibility checks, TypeScript, shipping quality, and several bug-fix drills that feel much closer to real hiring.",
      es: "Practica take-homes, accesibilidad, TypeScript, calidad de envio y varias pruebas de depuracion mucho mas cercanas a una contratacion real.",
    },
    focus: {
      en: [
        "Interview-style builds",
        "Debugging and repair work",
        "Quality-focused decision making",
      ],
      es: [
        "Builds tipo entrevista",
        "Depuracion y trabajo de reparacion",
        "Toma de decisiones centrada en calidad",
      ],
    },
    classIds: [
      "class-18",
      "class-19",
      "class-20",
      "class-21",
      "class-22",
      "class-23",
      "class-24",
      "class-25",
      "class-26",
      "class-27",
    ],
  },
];

const classSections = {
  "class-05": [
    {
      title: {
        en: "Toggle patterns",
        es: "Patrones toggle",
      },
      challengeIds: [
        "toggle-message",
        "toggle-background-color",
        "toggle-button-label",
        "toggle-card-class",
        "theme-toggle-saved",
        "faq-toggle",
      ],
    },
    {
      title: {
        en: "Counters and live text",
        es: "Contadores y texto en vivo",
      },
      challengeIds: [
        "character-counter",
        "counter-with-reset",
        "button-click-counter",
      ],
    },
    {
      title: {
        en: "Search basics",
        es: "Busqueda basica",
      },
      challengeIds: [
        "live-search-filter",
        "fruit-partial-match-list",
        "city-search-list",
        "movie-search-list",
        "case-insensitive-book-search",
        "username-search-filter",
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
        "password-visibility-toggle",
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
        en: "Validation basics",
        es: "Validacion basica",
      },
      challengeIds: [
        "simple-form-validation",
        "contact-form-validation",
        "password-strength-checker",
        "password-rules-validation",
      ],
    },
    {
      title: {
        en: "Lists and mutations",
        es: "Listas y cambios",
      },
      challengeIds: [
        "prevent-duplicate-items",
        "add-item-to-list",
        "add-goal-to-list",
        "remove-item-from-list",
        "remove-saved-item",
        "todo-complete-toggle",
      ],
    },
    {
      title: {
        en: "Sorting, filtering, and tabs",
        es: "Ordenacion, filtros y tabs",
      },
      challengeIds: [
        "sort-products",
        "filter-products",
        "tab-switcher",
        "restaurant-tabs-panel",
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
      ],
    },
    {
      title: {
        en: "Data responses and transforms",
        es: "Respuestas y transformaciones de datos",
      },
      challengeIds: [
        "shopping-cart-total",
        "mock-product-search",
        "promise-all-user-posts",
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
  "class-09": [
    {
      title: {
        en: "Core JavaScript foundations",
        es: "Fundamentos de JavaScript",
      },
      challengeIds: [
        "destructure-profile-card",
        "spread-settings-merge",
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
      challengeIds: ["try-catch-json-parser"],
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
        "react-custom-data-hook",
        "react-sort-products",
        "react-toggle-favourites",
      ],
    },
    {
      title: {
        en: "Persistence and async polish",
        es: "Persistencia y pulido async",
      },
      challengeIds: [
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
};

const classModules = [
  {
    id: "class-01",
    number: "01",
    modeId: "rookie",
    challengeIds: [
      "styled-heading",
      "styled-button",
      "centered-box",
      "styled-info-badge",
      "intro-block-capstone",
    ],
    title: {
      en: "HTML structure and visual foundations",
      es: "Estructura HTML y bases visuales",
    },
    summary: {
      en: "Students learn how a page is built, how elements are selected, and how CSS changes the visual result.",
      es: "El alumnado aprende como se construye una pagina, como seleccionar elementos y como CSS cambia el resultado visual.",
    },
    outcomes: {
      en: [
        "Write valid HTML elements",
        "Connect classes to CSS rules",
        "Use spacing, borders, and color intentionally",
      ],
      es: [
        "Escribir elementos HTML validos",
        "Conectar clases con reglas CSS",
        "Usar espaciado, bordes y color con intencion",
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
      "profile-card",
      "simple-navbar",
      "center-circle",
      "two-column-layout",
      "hero-copy-stack",
      "landing-header-capstone",
    ],
    title: {
      en: "Layout, cards, and navigation",
      es: "Layout, tarjetas y navegacion",
    },
    summary: {
      en: "A practical pass through flexbox, reusable sections, page rhythm, and common UI building blocks.",
      es: "Un recorrido practico por flexbox, secciones reutilizables, ritmo visual y bloques habituales de UI.",
    },
    outcomes: {
      en: [
        "Center content with flexbox",
        "Build cards and navbars",
        "Create simple responsive structures",
      ],
      es: [
        "Centrar contenido con flexbox",
        "Crear tarjetas y barras de navegacion",
        "Construir estructuras responsive sencillas",
      ],
    },
    project: {
      en: "A profile card landing section",
      es: "Una seccion inicial con tarjeta de perfil",
    },
  },
  {
    id: "class-03",
    number: "03",
    modeId: "rookie",
    challengeIds: [
      "login-form-ui",
      "product-card",
      "toggle-theme",
      "counter-app",
      "show-hide-password",
      "newsletter-signup-ui",
      "one-page-site-capstone",
    ],
    title: {
      en: "Forms, product UI, and first interactions",
      es: "Formularios, UI de producto y primeras interacciones",
    },
    summary: {
      en: "Students move from static UI into forms and small JavaScript-powered interactions.",
      es: "El alumnado pasa de UI estatica a formularios e interacciones pequenas con JavaScript.",
    },
    outcomes: {
      en: [
        "Build usable form layouts",
        "Understand button-driven UI changes",
        "Connect simple JavaScript to the page",
      ],
      es: [
        "Crear formularios usables",
        "Entender cambios de UI activados por botones",
        "Conectar JavaScript sencillo con la pagina",
      ],
    },
    project: {
      en: "A sign-in and product card interface",
      es: "Una interfaz de login y tarjeta de producto",
    },
  },
  {
    id: "class-04",
    number: "04",
    modeId: "rookie",
    challengeIds: [
      "semantic-article-layout",
      "accessible-form-labels",
      "css-grid-gallery",
      "responsive-card-grid",
      "dashboard-stats-layout",
      "responsive-feature-strip",
      "portfolio-section-capstone",
    ],
    title: {
      en: "Responsive CSS, accessibility, and portfolio sections",
      es: "CSS responsive, accesibilidad y secciones de portfolio",
    },
    summary: {
      en: "A job-readiness bridge from basic layouts into semantic, accessible, responsive sections a portfolio can actually use.",
      es: "Un puente hacia empleabilidad con secciones semanticas, accesibles y responsive que pueden vivir en un portfolio real.",
    },
    outcomes: {
      en: [
        "Use semantic HTML for real content",
        "Build accessible forms and focus states",
        "Create responsive portfolio and dashboard sections",
      ],
      es: [
        "Usar HTML semantico para contenido real",
        "Crear formularios accesibles y estados focus",
        "Construir secciones responsive de portfolio y dashboard",
      ],
    },
    project: {
      en: "A responsive portfolio work section",
      es: "Una seccion responsive de trabajos para portfolio",
    },
  },
  {
    id: "class-15",
    number: "05",
    modeId: "rookie",
    challengeIds: ["rookie-all-in-one-restaurant-site"],
    title: {
      en: "Rookie all-in-one build",
      es: "Proyecto integrador Rookie",
    },
    summary: {
      en: "Students bring the full Rookie path together in one polished multi-section website with navigation, cards, forms, responsive layout, and one small interaction.",
      es: "El alumnado une todo Rookie en una web pulida con navegacion, tarjetas, formularios, layout responsive y una pequena interaccion.",
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
      en: "A restaurant website all-in-one project",
      es: "Un proyecto integrador de web de restaurante",
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
      "fruit-partial-match-list",
      "city-search-list",
      "movie-search-list",
      "case-insensitive-book-search",
      "username-search-filter",
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
      "interactive-settings-capstone",
    ],
    title: {
      en: "DOM events and live feedback",
      es: "Eventos del DOM y feedback en vivo",
    },
    summary: {
      en: "The first serious JavaScript class: selecting elements, listening to events, updating content, and building lots of small search and feedback patterns.",
      es: "La primera clase fuerte de JavaScript: seleccionar elementos, escuchar eventos, actualizar contenido y construir muchos patrones pequenos de busqueda y feedback.",
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
      "prevent-duplicate-items",
      "add-item-to-list",
      "add-goal-to-list",
      "remove-item-from-list",
      "remove-saved-item",
      "sort-products",
      "filter-products",
      "todo-complete-toggle",
      "password-strength-checker",
      "password-rules-validation",
      "tab-switcher",
      "restaurant-tabs-panel",
      "product-list-manager-capstone",
    ],
    title: {
      en: "Forms, arrays, and reusable UI logic",
      es: "Formularios, arrays y logica reutilizable de UI",
    },
    summary: {
      en: "Students practice the core patterns used in real frontends: validation, rendering lists, filtering, sorting, and tabs.",
      es: "El alumnado practica patrones reales de frontend: validacion, renderizado de listas, filtros, ordenacion y pestanas.",
    },
    outcomes: {
      en: [
        "Validate user input",
        "Render arrays into the DOM",
        "Refactor repeated UI updates into functions",
      ],
      es: [
        "Validar datos del usuario",
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
      "shopping-cart-total",
      "mock-product-search",
      "promise-all-user-posts",
      "filter-sort-products",
      "save-load-todos-localstorage",
      "async-dashboard-capstone",
    ],
    title: {
      en: "Async JavaScript and browser storage",
      es: "JavaScript asincrono y almacenamiento del navegador",
    },
    summary: {
      en: "A job-readiness bridge into promises, async/await, loading states, retry flows, and localStorage.",
      es: "Un puente hacia empleabilidad con promesas, async/await, estados de carga, reintentos y localStorage.",
    },
    outcomes: {
      en: [
        "Handle loading, error, and success states",
        "Use promises and async/await",
        "Persist small pieces of app data",
      ],
      es: [
        "Manejar estados de carga, error y exito",
        "Usar promesas y async/await",
        "Persistir pequenos datos de la app",
      ],
    },
    project: {
      en: "A mini dashboard fed by mock data",
      es: "Un mini dashboard con datos simulados",
    },
  },
  {
    id: "class-08",
    number: "08",
    modeId: "builder",
    challengeIds: [
      "render-users-from-array",
      "event-delegation-todo-actions",
      "form-data-preview",
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
      en: "Students practice the patterns that show up in junior frontend tasks: rendering from data, delegated events, form objects, async search, pagination, and KPI calculations.",
      es: "El alumnado practica patrones habituales en tareas junior: renderizar desde datos, eventos delegados, objetos de formulario, busqueda asincrona, paginacion y KPIs.",
    },
    outcomes: {
      en: [
        "Render interfaces from structured data",
        "Handle scalable UI events",
        "Build dashboard and table interactions",
      ],
      es: [
        "Renderizar interfaces desde datos estructurados",
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
      "switch-role-permissions",
      "try-catch-json-parser",
      "closure-counter-factory",
      "event-loop-order",
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
      en: "This section focuses on state ownership, reusable components, effects, custom hooks, and resilient async UI.",
      es: "Esta seccion se centra en propiedad del estado, componentes reutilizables, efectos, hooks propios y UI asincrona robusta.",
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
      "react-custom-data-hook",
      "react-sort-products",
      "react-toggle-favourites",
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
      en: "The final class connects filtering, sorting, favorites, debouncing, pagination, and polished submission states.",
      es: "La clase final conecta filtros, ordenacion, favoritos, debounce, paginacion y estados de envio pulidos.",
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
      en: "The final React block combines reducers, context, accessibility, optimistic UI, persistence, composition, and a job-board take-home project.",
      es: "El bloque final de React combina reducers, context, accesibilidad, UI optimista, persistencia, composicion y un proyecto tipo prueba tecnica.",
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
        "Protect routes with authentication state",
      ],
      es: [
        "Crear experiencias React multipagina con React Router",
        "Usar parametros de URL para paginas de detalle",
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
    id: "class-18",
    number: "01",
    modeId: "interview",
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
    id: "class-23",
    number: "06",
    modeId: "interview",
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
    number: "07",
    modeId: "interview",
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
    number: "08",
    modeId: "interview",
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
    number: "09",
    modeId: "interview",
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
    id: "class-27",
    number: "10",
    modeId: "interview",
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
  const isSingleCapstone = module.challengeIds.length === 1 && !isInterview;

  if (language === "es") {
    if (isInterview) return "60-120 min";
    if (isSingleCapstone) return "2-4 horas";
    if (module.challengeIds.length <= 6) return "60-90 min";
    if (module.challengeIds.length <= 10) return "90-120 min";
    if (module.challengeIds.length <= 14) return "2-3 horas";
    if (module.challengeIds.length <= 18) return "3-4 horas";
    return "4-6 horas";
  }

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
  const isSingleCapstone = module.challengeIds.length === 1 && !isInterview;

  if (language === "es") {
    if (isInterview) return "Prueba tecnica";
    if (isSingleCapstone) return "Capstone";
    return "Bloque guiado";
  }

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
  return classModules.map((module) => ({
    ...module,
    title: pickLocalized(module.title, language),
    summary: pickLocalized(module.summary, language),
    outcomes: pickLocalized(module.outcomes, language),
    project: pickLocalized(module.project, language),
    phaseId: classPhaseMap[module.id],
    sections: localizeSections(classSections[module.id] || [], language),
    estimatedTime: getEstimatedTime(module, language),
    formatLabel: getFormatLabel(module, language),
  }));
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
