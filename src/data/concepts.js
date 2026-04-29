const conceptLibrary = {
  variables: {
    title: "Variables",
    summary:
      "Variables store values so your program can remember and reuse information.",
    why:
      "Every frontend feature uses values that change: form text, selected filters, loaded data, errors, and UI state.",
  },
  functions: {
    title: "Functions",
    summary:
      "Functions package logic into reusable steps. Arrow functions are a shorter modern syntax for writing them.",
    why:
      "Functions help you avoid repetition and make features easier to test, debug, and change.",
  },
  arrays: {
    title: "Arrays",
    summary:
      "Arrays store ordered lists of data. Frontends often render arrays into lists, cards, rows, and menus.",
    why:
      "Search, filters, tables, product grids, users, todos, and API results usually start as arrays.",
  },
  objects: {
    title: "Objects",
    summary:
      "Objects group related data using named properties, such as user.name or product.price.",
    why:
      "APIs usually return objects, and React props/state often hold object-shaped data.",
  },
  map: {
    title: "map()",
    summary:
      "map() transforms every item in an array into something new, often UI elements.",
    why:
      "Rendering lists in JavaScript and React depends heavily on mapping data into visible UI.",
  },
  filter: {
    title: "filter()",
    summary:
      "filter() creates a new array containing only the items that match a condition.",
    why:
      "Search bars, category filters, dashboards, and admin tables rely on filtering data.",
  },
  loops: {
    title: "Loops",
    summary:
      "Loops repeat work for each item in a collection. In frontend code, for loops, map(), filter(), and reduce() are all common.",
    why:
      "Rendering lists, calculating totals, validating groups of inputs, and transforming API data all depend on loops.",
  },
  conditionals: {
    title: "Conditionals",
    summary:
      "Conditionals let your code choose different paths with if, else, switch, or ternary expressions.",
    why:
      "UI needs decisions: show errors, hide loading states, change button text, and render empty states.",
  },
  destructuring: {
    title: "Destructuring",
    summary:
      "Destructuring pulls values out of arrays or objects into named variables.",
    why:
      "Modern React code uses destructuring constantly for props, state, API responses, and form values.",
  },
  spread: {
    title: "Spread operator",
    summary:
      "The spread operator copies array or object values into a new array or object.",
    why:
      "React state should be updated immutably; spread is one of the most common ways to do that.",
  },
  trycatch: {
    title: "try/catch",
    summary:
      "try/catch lets your code handle errors instead of crashing immediately.",
    why:
      "Real apps must handle failed parsing, failed requests, invalid data, and unexpected states gracefully.",
  },
  closures: {
    title: "Closures",
    summary:
      "A closure happens when a function remembers variables from the scope where it was created.",
    why:
      "Closures explain event handlers, callbacks, hooks, timers, and many confusing JavaScript interview questions.",
  },
  scope: {
    title: "Scope",
    summary:
      "Scope controls where variables can be accessed in your code.",
    why:
      "Understanding scope prevents bugs where code reads the wrong value or cannot access a value at all.",
  },
  eventloop: {
    title: "Event loop",
    summary:
      "The event loop is how JavaScript handles delayed work like timers, promises, and user events.",
    why:
      "A basic event loop model helps you understand why async code runs later than nearby synchronous code.",
  },
  fetch: {
    title: "fetch()",
    summary:
      "fetch() asks another URL for data or sends data to a server.",
    why:
      "Most real frontend work depends on loading data from APIs and reacting to success or failure.",
  },
  promises: {
    title: "Promises",
    summary:
      "A Promise represents work that will finish later, either successfully or with an error.",
    why:
      "Promises are the foundation of API calls, async/await, loading states, and request error handling.",
  },
  asyncawait: {
    title: "async/await",
    summary:
      "async/await is a readable way to write promise-based asynchronous code.",
    why:
      "Junior developers stand out when they can write clear async code with loading, success, and error states.",
  },
  api: {
    title: "APIs",
    summary:
      "An API is a contract for how one piece of software asks another for data or actions.",
    why:
      "Frontend developers constantly connect UI to APIs for users, products, orders, authentication, and content.",
  },
  rest: {
    title: "REST",
    summary:
      "REST is a common API style built around URLs and HTTP methods like GET, POST, PUT, and DELETE.",
    why:
      "Understanding REST makes it easier to read API docs and build real data-driven interfaces.",
  },
  json: {
    title: "JSON",
    summary:
      "JSON is a text format for sending structured data such as objects and arrays.",
    why:
      "Most frontend API responses arrive as JSON, so you need to parse and understand it confidently.",
  },
  queryparameters: {
    title: "Query parameters",
    summary:
      "Query parameters add extra values to a URL, usually after a question mark.",
    why:
      "Search, filtering, pagination, and sorting often travel through query parameters.",
  },
  headers: {
    title: "Headers",
    summary:
      "Headers are metadata sent with HTTP requests or responses.",
    why:
      "Authentication tokens, JSON content type, caching, and API limits are often controlled with headers.",
  },
  statuscodes: {
    title: "Status codes",
    summary:
      "Status codes tell you whether an HTTP request succeeded or failed.",
    why:
      "Good apps respond differently to 200 success, 404 not found, 401 unauthorized, and 500 server errors.",
  },
  loadingstate: {
    title: "Loading state",
    summary:
      "A loading state tells the user that async work is happening and the UI has not frozen.",
    why:
      "Loading, success, empty, and error states make API-driven interfaces feel trustworthy and professional.",
  },
  raceconditions: {
    title: "Race conditions",
    summary:
      "A race condition happens when async work finishes in an order you did not expect.",
    why:
      "Search boxes, filters, and route changes can show stale data unless older requests are ignored or cancelled.",
  },
  components: {
    title: "Components",
    summary:
      "Components are reusable pieces of UI that can receive data and manage behavior.",
    why:
      "React applications are built by composing components into pages and features.",
  },
  props: {
    title: "Props",
    summary:
      "Props pass data from a parent component into a child component.",
    why:
      "Props are central to reusable components, clean data flow, and predictable React code.",
  },
  state: {
    title: "State",
    summary:
      "State is data that changes over time and causes the UI to update.",
    why:
      "Forms, filters, modals, loading indicators, and selected items are all state problems.",
  },
  useeffect: {
    title: "useEffect",
    summary:
      "useEffect synchronizes React components with external systems such as APIs, timers, or browser storage.",
    why:
      "Effects are needed for data loading, subscriptions, persistence, and side effects.",
  },
  controlledforms: {
    title: "Controlled forms",
    summary:
      "A controlled input stores its value in state and updates through onChange.",
    why:
      "Controlled forms make validation, previews, submission, and reset behavior predictable.",
  },
  liftingstate: {
    title: "Lifting state",
    summary:
      "Lifting state means moving shared state up to the closest common parent component.",
    why:
      "It helps multiple components stay in sync without duplicating data.",
  },
  dataflow: {
    title: "State and data flow",
    summary:
      "Data flow describes where state lives, which component owns it, and how values move through props and events.",
    why:
      "Good data flow keeps React apps predictable and helps you decide when to split or combine components.",
  },
  context: {
    title: "Context API",
    summary:
      "Context shares values with nested components without manually passing props at every level.",
    why:
      "Theme, auth, language, and app settings are common context use cases.",
  },
  semantichtml: {
    title: "Semantic HTML",
    summary:
      "Semantic HTML uses meaningful elements such as nav, main, article, section, header, and footer.",
    why:
      "It improves accessibility, SEO, maintainability, and professional code quality.",
  },
  flexbox: {
    title: "Flexbox",
    summary:
      "Flexbox is a CSS layout system for aligning and distributing items in one direction.",
    why:
      "It solves everyday layout problems like navbars, button rows, centered content, and card actions.",
  },
  cssgrid: {
    title: "CSS Grid",
    summary:
      "CSS Grid is a two-dimensional layout system for rows and columns.",
    why:
      "It is ideal for galleries, dashboards, card grids, and page-level layouts.",
  },
  responsivedesign: {
    title: "Responsive design",
    summary:
      "Responsive design makes layouts adapt to different screen sizes and devices.",
    why:
      "Professional frontend work must be usable on phones, tablets, laptops, and large screens.",
  },
  routing: {
    title: "Routing",
    summary:
      "Routing maps URLs to different screens in a single-page app.",
    why:
      "Real apps need navigation between pages such as dashboard, settings, user details, and login.",
  },
  dynamicroutes: {
    title: "Dynamic routes",
    summary:
      "Dynamic routes use URL placeholders like /users/:id to show detail pages for different items.",
    why:
      "Product pages, profile pages, order details, and blog posts all use this pattern.",
  },
  auth: {
    title: "Authentication flow",
    summary:
      "Authentication checks who the user is and controls which parts of the app they can access.",
    why:
      "Even frontend developers need to build login states, protected routes, logout flows, and API requests with auth headers.",
  },
  debugging: {
    title: "Debugging",
    summary:
      "Debugging is the process of finding, understanding, and fixing problems in code.",
    why:
      "Employers need developers who can keep moving when something breaks instead of getting stuck.",
  },
  devtools: {
    title: "DevTools",
    summary:
      "Browser DevTools help inspect HTML, CSS, console output, network requests, and runtime errors.",
    why:
      "DevTools are essential for diagnosing layout issues, API failures, JavaScript bugs, and performance problems.",
  },
  eventhandling: {
    title: "Event handling",
    summary:
      "Event handling connects user actions, such as clicks and typing, to code that updates the UI.",
    why:
      "Most interactive features start with events: forms, menus, filters, modals, counters, and buttons.",
  },
  backend: {
    title: "Backend awareness",
    summary:
      "The backend is the server-side part of an app that handles data, business rules, auth, and persistence.",
    why:
      "Frontend developers work better when they understand what servers, databases, endpoints, and API errors mean.",
  },
  express: {
    title: "Node and Express",
    summary:
      "Node runs JavaScript outside the browser, and Express is a common library for building HTTP endpoints.",
    why:
      "Frontend developers often read backend routes, debug request payloads, and talk clearly with backend teams.",
  },
  problemsolving: {
    title: "Problem solving",
    summary:
      "Problem solving means breaking work into smaller steps, testing each step, and debugging carefully.",
    why:
      "Most junior frontend work is not LeetCode; it is calmly turning messy requirements into working UI.",
  },
};

const localizedConceptCopy = {
  es: {
    variables: {
      title: "Variables",
      summary:
        "Las variables guardan valores para que tu programa pueda recordar y reutilizar informacion.",
      why:
        "Casi toda feature frontend usa valores que cambian: texto de formularios, filtros, datos cargados, errores y estado de UI.",
    },
    functions: {
      title: "Funciones",
      summary:
        "Las funciones agrupan pasos de logica reutilizable. Las arrow functions son una sintaxis moderna y mas corta.",
      why:
        "Ayudan a evitar repeticion y hacen que una feature sea mas facil de probar, depurar y cambiar.",
    },
    arrays: {
      title: "Arrays",
      summary:
        "Los arrays guardan listas ordenadas de datos. En frontend suelen convertirse en listas, tarjetas, filas y menus.",
      why:
        "Busquedas, filtros, tablas, productos, usuarios, todos y resultados de APIs suelen empezar como arrays.",
    },
    objects: {
      title: "Objetos",
      summary:
        "Los objetos agrupan datos relacionados usando propiedades con nombre, como user.name o product.price.",
      why:
        "Las APIs suelen devolver objetos, y props/state en React a menudo tienen forma de objeto.",
    },
    map: {
      title: "map()",
      summary:
        "map() transforma cada item de un array en algo nuevo, muchas veces elementos de UI.",
      why:
        "Renderizar listas en JavaScript y React depende mucho de convertir datos en interfaz visible.",
    },
    filter: {
      title: "filter()",
      summary:
        "filter() crea un nuevo array solo con los items que cumplen una condicion.",
      why:
        "Buscadores, filtros de categoria, dashboards y tablas administrativas dependen de filtrar datos.",
    },
    loops: {
      title: "Bucles",
      summary:
        "Los bucles repiten trabajo para cada item de una coleccion. for, map(), filter() y reduce() son muy comunes en frontend.",
      why:
        "Renderizar listas, calcular totales, validar grupos de inputs y transformar datos de APIs depende de bucles.",
    },
    conditionals: {
      title: "Condicionales",
      summary:
        "Los condicionales permiten que tu codigo elija caminos distintos con if, else, switch o ternarios.",
      why:
        "La UI toma decisiones constantemente: mostrar errores, ocultar carga, cambiar texto de botones y renderizar estados vacios.",
    },
    destructuring: {
      title: "Destructuring",
      summary:
        "Destructuring extrae valores de arrays u objetos y los coloca en variables con nombre.",
      why:
        "El React moderno lo usa constantemente para props, state, respuestas de APIs y valores de formularios.",
    },
    spread: {
      title: "Spread operator",
      summary:
        "El spread operator copia valores de arrays u objetos dentro de un array u objeto nuevo.",
      why:
        "El estado de React debe actualizarse sin mutar el valor anterior; spread es una forma comun de hacerlo.",
    },
    trycatch: {
      title: "try/catch",
      summary:
        "try/catch permite manejar errores en lugar de dejar que el codigo falle sin control.",
      why:
        "Las apps reales deben manejar parseos fallidos, requests fallidos, datos invalidos y estados inesperados.",
    },
    closures: {
      title: "Closures",
      summary:
        "Una closure ocurre cuando una funcion recuerda variables del scope donde fue creada.",
      why:
        "Explica event handlers, callbacks, hooks, timers y muchas preguntas clasicas de entrevistas JavaScript.",
    },
    scope: {
      title: "Scope",
      summary:
        "El scope controla desde donde se puede acceder a una variable dentro del codigo.",
      why:
        "Entender scope evita bugs donde el codigo lee el valor equivocado o no puede acceder a un valor.",
    },
    eventloop: {
      title: "Event loop",
      summary:
        "El event loop es como JavaScript coordina trabajo retrasado como timers, promises y eventos del usuario.",
      why:
        "Un modelo basico del event loop ayuda a entender por que el codigo asincrono se ejecuta despues.",
    },
    fetch: {
      title: "fetch()",
      summary:
        "fetch() pide datos a otra URL o envia datos a un servidor.",
      why:
        "La mayoria del trabajo frontend real depende de cargar datos de APIs y responder a exito o error.",
    },
    promises: {
      title: "Promises",
      summary:
        "Una Promise representa trabajo que terminara mas tarde, con exito o con error.",
      why:
        "Las promises son la base de llamadas a APIs, async/await, estados de carga y manejo de errores.",
    },
    asyncawait: {
      title: "async/await",
      summary:
        "async/await es una forma legible de escribir codigo asincrono basado en promises.",
      why:
        "Un junior destaca cuando puede escribir async claro con estados de carga, exito y error.",
    },
    api: {
      title: "APIs",
      summary:
        "Una API es un contrato que define como una parte de software pide datos o acciones a otra.",
      why:
        "Los frontends conectan UI con APIs para usuarios, productos, pedidos, autenticacion y contenido.",
    },
    rest: {
      title: "REST",
      summary:
        "REST es un estilo comun de API basado en URLs y metodos HTTP como GET, POST, PUT y DELETE.",
      why:
        "Entender REST ayuda a leer documentacion de APIs y crear interfaces conectadas a datos reales.",
    },
    json: {
      title: "JSON",
      summary:
        "JSON es un formato de texto para enviar datos estructurados como objetos y arrays.",
      why:
        "La mayoria de respuestas de API llegan como JSON, asi que necesitas leerlo y parsearlo con confianza.",
    },
    queryparameters: {
      title: "Query parameters",
      summary:
        "Los query parameters anaden valores extra a una URL, normalmente despues de un signo de interrogacion.",
      why:
        "Busqueda, filtros, paginacion y ordenacion suelen viajar mediante query parameters.",
    },
    headers: {
      title: "Headers",
      summary:
        "Los headers son metadatos enviados con requests o responses HTTP.",
      why:
        "Tokens de autenticacion, content type JSON, cache y limites de API suelen controlarse con headers.",
    },
    statuscodes: {
      title: "Codigos de estado",
      summary:
        "Los status codes indican si una request HTTP tuvo exito o fallo.",
      why:
        "Buenas apps responden distinto a 200 success, 404 not found, 401 unauthorized y 500 server error.",
    },
    loadingstate: {
      title: "Estado de carga",
      summary:
        "Un estado de carga muestra al usuario que hay trabajo asincrono en marcha y que la UI no se ha congelado.",
      why:
        "Loading, success, empty y error hacen que una interfaz conectada a APIs se sienta profesional.",
    },
    raceconditions: {
      title: "Race conditions",
      summary:
        "Una race condition pasa cuando trabajo asincrono termina en un orden que no esperabas.",
      why:
        "Buscadores, filtros y cambios de ruta pueden mostrar datos antiguos si no se ignoran requests anteriores.",
    },
    components: {
      title: "Componentes",
      summary:
        "Los componentes son piezas reutilizables de UI que pueden recibir datos y manejar comportamiento.",
      why:
        "Las aplicaciones React se construyen componiendo componentes en paginas y features.",
    },
    props: {
      title: "Props",
      summary:
        "Las props pasan datos desde un componente padre hacia un componente hijo.",
      why:
        "Son clave para componentes reutilizables, data flow claro y codigo React predecible.",
    },
    state: {
      title: "Estado",
      summary:
        "El estado es informacion que cambia con el tiempo y hace que la UI se actualice.",
      why:
        "Formularios, filtros, modales, loaders y elementos seleccionados son problemas de estado.",
    },
    useeffect: {
      title: "useEffect",
      summary:
        "useEffect sincroniza componentes React con sistemas externos como APIs, timers o storage del navegador.",
      why:
        "Los efectos se usan para cargar datos, suscripciones, persistencia y side effects.",
    },
    controlledforms: {
      title: "Formularios controlados",
      summary:
        "Un input controlado guarda su valor en estado y se actualiza con onChange.",
      why:
        "Hacen que validacion, previews, envio y reset sean mas predecibles.",
    },
    liftingstate: {
      title: "Lifting state",
      summary:
        "Lifting state significa mover estado compartido al padre comun mas cercano.",
      why:
        "Permite que varios componentes se mantengan sincronizados sin duplicar datos.",
    },
    dataflow: {
      title: "Estado y data flow",
      summary:
        "Data flow describe donde vive el estado, que componente lo controla y como los valores viajan por props y eventos.",
      why:
        "Un buen data flow mantiene apps React predecibles y ayuda a decidir cuando dividir componentes.",
    },
    context: {
      title: "Context API",
      summary:
        "Context comparte valores con componentes internos sin pasar props manualmente por cada nivel.",
      why:
        "Theme, auth, idioma y ajustes de app son casos comunes para context.",
    },
    semantichtml: {
      title: "HTML semantico",
      summary:
        "HTML semantico usa elementos con significado como nav, main, article, section, header y footer.",
      why:
        "Mejora accesibilidad, SEO, mantenimiento y calidad profesional del codigo.",
    },
    flexbox: {
      title: "Flexbox",
      summary:
        "Flexbox es un sistema CSS para alinear y distribuir elementos en una direccion.",
      why:
        "Resuelve layouts diarios como navbars, filas de botones, contenido centrado y acciones de tarjetas.",
    },
    cssgrid: {
      title: "CSS Grid",
      summary:
        "CSS Grid es un sistema de layout en dos dimensiones para filas y columnas.",
      why:
        "Es ideal para galerias, dashboards, grids de tarjetas y layouts de pagina.",
    },
    responsivedesign: {
      title: "Diseno responsive",
      summary:
        "El diseno responsive hace que los layouts se adapten a distintos tamanos de pantalla y dispositivos.",
      why:
        "El frontend profesional debe funcionar en moviles, tablets, portatiles y pantallas grandes.",
    },
    routing: {
      title: "Routing",
      summary:
        "Routing conecta URLs con distintas pantallas dentro de una single-page app.",
      why:
        "Las apps reales necesitan navegacion entre dashboard, ajustes, detalles de usuario y login.",
    },
    dynamicroutes: {
      title: "Rutas dinamicas",
      summary:
        "Las rutas dinamicas usan placeholders en la URL, como /users/:id, para mostrar paginas de detalle.",
      why:
        "Productos, perfiles, pedidos y posts suelen usar este patron.",
    },
    auth: {
      title: "Flujo de autenticacion",
      summary:
        "La autenticacion comprueba quien es el usuario y controla a que partes de la app puede acceder.",
      why:
        "Incluso en frontend hay que construir login, rutas protegidas, logout y requests con auth headers.",
    },
    debugging: {
      title: "Depuracion",
      summary:
        "Depurar es encontrar, entender y arreglar problemas en el codigo.",
      why:
        "Las empresas valoran personas que pueden avanzar cuando algo falla sin quedarse bloqueadas.",
    },
    devtools: {
      title: "DevTools",
      summary:
        "Browser DevTools ayuda a inspeccionar HTML, CSS, consola, requests de red y errores en runtime.",
      why:
        "Es esencial para diagnosticar layout, fallos de API, bugs JavaScript y problemas de rendimiento.",
    },
    eventhandling: {
      title: "Manejo de eventos",
      summary:
        "El manejo de eventos conecta acciones del usuario, como clicks y escritura, con codigo que actualiza la UI.",
      why:
        "La mayoria de features interactivas empiezan con eventos: formularios, menus, filtros, modales y botones.",
    },
    backend: {
      title: "Conciencia de backend",
      summary:
        "El backend es la parte del servidor que maneja datos, reglas de negocio, autenticacion y persistencia.",
      why:
        "Frontend trabaja mejor cuando entiende servidores, bases de datos, endpoints y errores de API.",
    },
    express: {
      title: "Node y Express",
      summary:
        "Node ejecuta JavaScript fuera del navegador, y Express es una libreria comun para crear endpoints HTTP.",
      why:
        "Frontend suele leer rutas backend, depurar payloads y hablar claramente con equipos backend.",
    },
    problemsolving: {
      title: "Resolucion de problemas",
      summary:
        "Resolver problemas significa dividir el trabajo en pasos pequenos, probar cada paso y depurar con calma.",
      why:
        "La mayoria del trabajo junior no es LeetCode; es convertir requisitos desordenados en UI funcional.",
    },
  },
};

const aliases = {
  "variables": "variables",
  "let": "variables",
  "const": "variables",
  "functions": "functions",
  "function components": "components",
  "arrow functions": "functions",
  "arrays": "arrays",
  "arrays of objects": "objects",
  "objects": "objects",
  "map()": "map",
  "filter()": "filter",
  "for": "loops",
  "for loop": "loops",
  "for loops": "loops",
  "loops": "loops",
  "reduce()": "loops",
  "conditional logic": "conditionals",
  "conditional rendering": "conditionals",
  "conditions": "conditionals",
  "switch": "conditionals",
  "switch statements": "conditionals",
  "destructuring": "destructuring",
  "spread operator": "spread",
  "immutable updates": "spread",
  "try/catch": "trycatch",
  "error handling": "trycatch",
  "closures": "closures",
  "scope": "scope",
  "event loop": "eventloop",
  "fetch()": "fetch",
  "fetch": "fetch",
  "promise": "promises",
  "promises": "promises",
  ".then()": "promises",
  "then()": "promises",
  "async/await": "asyncawait",
  "async await": "asyncawait",
  "apis": "api",
  "api": "api",
  "rest": "rest",
  "get": "rest",
  "post": "rest",
  "put": "rest",
  "delete": "rest",
  "json": "json",
  "json.parse()": "json",
  "json.stringify()": "json",
  "query parameters": "queryparameters",
  "urlsearchparams": "queryparameters",
  "headers": "headers",
  "status codes": "statuscodes",
  "loading state": "loadingstate",
  "race conditions": "raceconditions",
  "components": "components",
  "component reuse": "components",
  "component design": "components",
  "component structure": "components",
  "composition": "components",
  "props": "props",
  "state": "state",
  "state updates": "state",
  "useState": "state",
  "state management": "dataflow",
  "state ownership": "dataflow",
  "state composition": "dataflow",
  "data flow": "dataflow",
  "where state lives": "dataflow",
  "useEffect": "useeffect",
  "effects": "useeffect",
  "controlled input": "controlledforms",
  "controlled inputs": "controlledforms",
  "controlled components": "controlledforms",
  "lifting state": "liftingstate",
  "lift state": "liftingstate",
  "context": "context",
  "context api": "context",
  "semantic html": "semantichtml",
  "semantic HTML": "semantichtml",
  "flexbox": "flexbox",
  "css grid": "cssgrid",
  "CSS Grid": "cssgrid",
  "basic grid": "cssgrid",
  "responsive layout": "responsivedesign",
  "responsive design": "responsivedesign",
  "routing": "routing",
  "routes": "routing",
  "protected routes": "auth",
  "auth": "auth",
  "authentication": "auth",
  "links": "routing",
  "dynamic routes": "dynamicroutes",
  "url params": "dynamicroutes",
  "useParams": "dynamicroutes",
  "debugging": "debugging",
  "console logs": "debugging",
  "devtools": "devtools",
  "DevTools": "devtools",
  "event handling": "eventhandling",
  "event handlers": "eventhandling",
  "event listeners": "eventhandling",
  "input events": "eventhandling",
  "backend": "backend",
  "server": "backend",
  "database": "backend",
  "node.js": "express",
  "node": "express",
  "express": "express",
  "express basics": "express",
  "problem solving": "problemsolving",
  "titulos html": "semantichtml",
  "titulo html": "semantichtml",
  "formularios": "controlledforms",
  "validacion": "controlledforms",
  "depuracion": "debugging",
  "estado": "state",
  "estado de carga": "loadingstate",
  "codigos de estado": "statuscodes",
  "rutas": "routing",
  "rutas dinamicas": "dynamicroutes",
  "parametros de url": "dynamicroutes",
  "eventos": "eventhandling",
  "manejo de eventos": "eventhandling",
  "bucles": "loops",
  "condicionales": "conditionals",
  "objetos": "objects",
  "funciones": "functions",
  "componentes": "components",
  "diseno responsive": "responsivedesign",
  "html semantico": "semantichtml",
  "accesibilidad": "semantichtml",
  "backend awareness": "backend",
  "servidor": "backend",
  "base de datos": "backend",
  "resolucion de problemas": "problemsolving",
};

function normalizeConcept(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function localizeConcept(key, language) {
  return {
    ...conceptLibrary[key],
    ...(localizedConceptCopy[language]?.[key] || {}),
  };
}

export function getConcept(concept, language = "en") {
  const directKey = aliases[concept] || aliases[concept.toLowerCase()];
  if (directKey) return localizeConcept(directKey, language);

  const normalized = normalizeConcept(concept);
  const matchedAlias = Object.entries(aliases).find(
    ([alias]) => normalizeConcept(alias) === normalized
  );

  if (!matchedAlias) return null;

  return localizeConcept(matchedAlias[1], language);
}
