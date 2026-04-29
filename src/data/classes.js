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

export function getClassModules(language = "en") {
  return classModules.map((module) => ({
    ...module,
    title: pickLocalized(module.title, language),
    summary: pickLocalized(module.summary, language),
    outcomes: pickLocalized(module.outcomes, language),
    project: pickLocalized(module.project, language),
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
