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
  typescript: {
    title: "TypeScript",
    summary:
      "TypeScript adds a type system on top of JavaScript so you can describe what shape your data should have before the app runs.",
    why:
      "It catches many frontend mistakes earlier, especially with props, forms, API data, and state updates.",
  },
  interfaces: {
    title: "Interfaces",
    summary:
      "Interfaces name the shape of an object so repeated data stays clear and consistent.",
    why:
      "They are common in React props, API responses, forms, and any UI that reuses the same data shape.",
  },
  typealiases: {
    title: "Type aliases",
    summary:
      "A type alias gives a reusable name to a type, such as a union, object shape, or function signature.",
    why:
      "Type aliases make TypeScript code easier to read when the same kind of value appears in several places.",
  },
  typedprops: {
    title: "Typed props",
    summary:
      "Typed props tell a React component exactly what data it expects from its parent.",
    why:
      "This protects reusable components from missing values, wrong field names, and unclear contracts.",
  },
  uniontypes: {
    title: "Union types",
    summary:
      "A union type limits a value to one of a small set of allowed options.",
    why:
      "They are great for UI states like loading, success, error, draft, or ready.",
  },
  optionalproperties: {
    title: "Optional properties",
    summary:
      "Optional properties mark fields that may exist sometimes, but not always.",
    why:
      "Real API data and product data often have missing fields, so the UI needs to handle that safely.",
  },
  typedstate: {
    title: "Typed state",
    summary:
      "Typed state makes it clear what kind of value React state should hold over time.",
    why:
      "It helps prevent state bugs where a value changes into a shape the rest of the UI was not expecting.",
  },
  typedevents: {
    title: "Typed events",
    summary:
      "Typed events describe what kind of element triggered an event like click, change, or submit.",
    why:
      "They make forms and interactions easier to write because you know what properties are safe to read.",
  },
  narrowing: {
    title: "Type narrowing",
    summary:
      "Narrowing is how TypeScript figures out a more specific type after you check a value.",
    why:
      "It is important when data could be one of several shapes and the UI should only use safe fields.",
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
    example: `const button = document.getElementById("saveBtn");

button.addEventListener("click", () => {
  console.log("The user clicked");
});`,
  },
  domselection: {
    title: "DOM selection",
    summary:
      "DOM selection means finding an HTML element from JavaScript so your code can read it or change it.",
    why:
      "Before JavaScript can update a button, message, input, card, or list item, it needs a reference to that element.",
    example: `const message = document.getElementById("message");
const cards = document.querySelectorAll(".card");`,
  },
  domupdates: {
    title: "DOM updates",
    summary:
      "DOM updates are changes JavaScript makes to the visible page after the user does something.",
    why:
      "Interactive UI only feels alive when the HTML on screen changes after clicks, typing, filtering, or submitting.",
    example: `message.textContent = "Saved";
message.hidden = false;`,
  },
  styleupdates: {
    title: "Style updates",
    summary:
      "Style updates change the visual look of an element from JavaScript, often by changing inline styles or toggling classes.",
    why:
      "They let the page respond visually, such as hiding a message, highlighting a card, or showing an active state.",
    example: `message.style.display = "none";
card.classList.toggle("is-active");`,
  },
  textcontent: {
    title: "textContent",
    summary:
      "textContent reads or replaces the text inside an HTML element.",
    why:
      "Counters, feedback messages, button labels, and status text all need JavaScript to update visible words.",
    example: `count.textContent = 3;
button.textContent = "Hide details";`,
  },
  classlist: {
    title: "classList",
    summary:
      "classList lets JavaScript add, remove, or toggle CSS classes on an element.",
    why:
      "This keeps styling in CSS while JavaScript decides when a visual state should turn on or off.",
    example: `card.classList.add("is-active");
card.classList.toggle("is-highlighted");`,
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
  testing: {
    title: "Testing",
    summary:
      "Testing checks that a feature behaves the way a user expects before bugs reach production.",
    why:
      "Frontend tests protect buttons, forms, async states, and critical flows from silently breaking later.",
  },
  rtl: {
    title: "React Testing Library",
    summary:
      "React Testing Library renders components and helps you test them the way a user experiences them.",
    why:
      "It encourages behavior-focused tests instead of brittle tests that depend on internal implementation details.",
  },
  render: {
    title: "render()",
    summary:
      "render() mounts a component into a test environment so you can inspect and interact with it.",
    why:
      "Without render(), there is no UI on screen for a test to query or click through.",
  },
  screen: {
    title: "screen",
    summary:
      "screen is a shared way to query the rendered UI by text, role, label, and other user-facing signals.",
    why:
      "Queries like getByRole and getByLabelText make tests feel closer to real accessibility and user behavior.",
  },
  fireevent: {
    title: "fireEvent",
    summary:
      "fireEvent simulates clicks, typing, submits, and key presses during a test.",
    why:
      "A feature is only proven when your test drives it through the same interactions a real user would trigger.",
  },
  waitfor: {
    title: "waitFor",
    summary:
      "waitFor retries an expectation until async UI finishes updating or the test times out.",
    why:
      "Loading and error states often change after a promise resolves, so tests need a way to wait for the final result.",
  },
  aria: {
    title: "ARIA",
    summary:
      "ARIA adds accessible meaning and relationships when plain HTML alone is not enough.",
    why:
      "Dialogs, tabs, status messages, and more advanced widgets often need ARIA to communicate clearly to assistive technology.",
  },
  focusmanagement: {
    title: "Focus management",
    summary:
      "Focus management controls where keyboard focus moves when UI opens, closes, or changes.",
    why:
      "Modals, menus, and tabs feel broken to keyboard users when focus gets lost or returns to the wrong place.",
  },
  keyboardaccess: {
    title: "Keyboard access",
    summary:
      "Keyboard access means a user can move through and operate the feature without a mouse.",
    why:
      "Real accessibility depends on predictable keyboard movement, visible focus, and controls that can actually be triggered.",
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
    typescript: {
      title: "TypeScript",
      summary:
        "TypeScript anade un sistema de tipos sobre JavaScript para describir la forma de los datos antes de que la app se ejecute.",
      why:
        "Detecta muchos errores de frontend antes, sobre todo en props, formularios, datos de API y actualizaciones de estado.",
    },
    interfaces: {
      title: "Interfaces",
      summary:
        "Las interfaces nombran la forma de un objeto para que los datos repetidos sean claros y consistentes.",
      why:
        "Son muy comunes en props de React, respuestas de API, formularios y cualquier UI que reutiliza la misma forma de datos.",
    },
    typealiases: {
      title: "Type aliases",
      summary:
        "Un type alias da un nombre reutilizable a un tipo, como una union, una forma de objeto o una firma de funcion.",
      why:
        "Los type aliases hacen que el codigo TypeScript sea mas legible cuando el mismo tipo aparece en varios lugares.",
    },
    typedprops: {
      title: "Props tipadas",
      summary:
        "Las props tipadas le dicen a un componente React exactamente que datos espera recibir del padre.",
      why:
        "Protegen los componentes reutilizables frente a valores que faltan, nombres de campos incorrectos y contratos poco claros.",
    },
    uniontypes: {
      title: "Union types",
      summary:
        "Un union type limita un valor a un pequeno conjunto de opciones permitidas.",
      why:
        "Van muy bien para estados de UI como loading, success, error, draft o ready.",
    },
    optionalproperties: {
      title: "Propiedades opcionales",
      summary:
        "Las propiedades opcionales marcan campos que a veces existen y otras veces no.",
      why:
        "Los datos reales de APIs y producto suelen traer campos ausentes, asi que la UI debe manejarlo con seguridad.",
    },
    typedstate: {
      title: "Estado tipado",
      summary:
        "El estado tipado deja claro que clase de valor debe guardar el state de React con el paso del tiempo.",
      why:
        "Ayuda a prevenir bugs donde el estado cambia a una forma que el resto de la UI no esperaba.",
    },
    typedevents: {
      title: "Eventos tipados",
      summary:
        "Los eventos tipados describen que clase de elemento dispara un evento como click, change o submit.",
      why:
        "Hacen que formularios e interacciones sean mas faciles de escribir porque sabes que propiedades puedes leer con seguridad.",
    },
    narrowing: {
      title: "Narrowing de tipos",
      summary:
        "El narrowing es como TypeScript descubre un tipo mas especifico despues de comprobar un valor.",
      why:
        "Es importante cuando los datos pueden tener varias formas y la UI solo debe usar campos seguros.",
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
      example: `const button = document.getElementById("saveBtn");

button.addEventListener("click", () => {
  console.log("La persona hizo click");
});`,
    },
    domselection: {
      title: "Seleccion del DOM",
      summary:
        "Seleccionar el DOM significa encontrar un elemento HTML desde JavaScript para poder leerlo o cambiarlo.",
      why:
        "Antes de actualizar un boton, mensaje, input, tarjeta o lista, JavaScript necesita una referencia a ese elemento.",
      example: `const message = document.getElementById("message");
const cards = document.querySelectorAll(".card");`,
    },
    domupdates: {
      title: "Actualizaciones del DOM",
      summary:
        "Actualizar el DOM significa que JavaScript cambia lo que se ve en la pagina despues de una accion.",
      why:
        "La UI solo se siente interactiva cuando el HTML visible cambia despues de clicks, escritura, filtros o submits.",
      example: `message.textContent = "Guardado";
message.hidden = false;`,
    },
    styleupdates: {
      title: "Cambios de estilo",
      summary:
        "Los cambios de estilo modifican el aspecto visual de un elemento desde JavaScript, con estilos inline o clases.",
      why:
        "Permiten que la pagina responda visualmente, por ejemplo ocultando un mensaje o resaltando una tarjeta.",
      example: `message.style.display = "none";
card.classList.toggle("is-active");`,
    },
    textcontent: {
      title: "textContent",
      summary:
        "textContent lee o reemplaza el texto dentro de un elemento HTML.",
      why:
        "Contadores, mensajes, labels de botones y estados necesitan actualizar texto visible.",
      example: `count.textContent = 3;
button.textContent = "Ocultar detalles";`,
    },
    classlist: {
      title: "classList",
      summary:
        "classList permite anadir, quitar o alternar clases CSS en un elemento.",
      why:
        "Asi el estilo vive en CSS y JavaScript decide cuando activar o desactivar un estado visual.",
      example: `card.classList.add("is-active");
card.classList.toggle("is-highlighted");`,
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
    testing: {
      title: "Testing",
      summary:
        "Testing comprueba que una funcionalidad se comporta como espera la persona usuaria antes de que el bug llegue a produccion.",
      why:
        "Los tests protegen botones, formularios, estados asincronos y flujos importantes de romperse sin avisar.",
    },
    rtl: {
      title: "React Testing Library",
      summary:
        "React Testing Library renderiza componentes y ayuda a probarlos como los vive una persona usuaria.",
      why:
        "Empuja a escribir tests centrados en comportamiento en lugar de tests fragiles pegados a detalles internos.",
    },
    render: {
      title: "render()",
      summary:
        "render() monta un componente en un entorno de test para que puedas inspeccionarlo e interactuar con el.",
      why:
        "Sin render(), no hay UI en pantalla que el test pueda consultar o sobre la que pueda hacer click.",
    },
    screen: {
      title: "screen",
      summary:
        "screen es una forma comun de consultar la UI renderizada por texto, rol, label y otras senales visibles para la persona usuaria.",
      why:
        "Consultas como getByRole y getByLabelText hacen que los tests se acerquen mas a accesibilidad y uso real.",
    },
    fireevent: {
      title: "fireEvent",
      summary:
        "fireEvent simula clicks, escritura, submits y pulsaciones de teclado durante un test.",
      why:
        "Una funcionalidad se demuestra de verdad cuando el test la empuja con las mismas interacciones que haria alguien usandola.",
    },
    waitfor: {
      title: "waitFor",
      summary:
        "waitFor repite una comprobacion hasta que la UI asincrona termina de actualizarse o se agota el tiempo.",
      why:
        "Los estados de carga y error suelen cambiar despues de una promesa, asi que los tests necesitan esperar el resultado final.",
    },
    aria: {
      title: "ARIA",
      summary:
        "ARIA anade significado accesible y relaciones cuando HTML por si solo no es suficiente.",
      why:
        "Dialogs, tabs, mensajes de estado y widgets mas avanzados suelen necesitar ARIA para ser claros con tecnologia asistiva.",
    },
    focusmanagement: {
      title: "Gestion del focus",
      summary:
        "La gestion del focus controla a donde va el foco del teclado cuando una UI se abre, se cierra o cambia.",
      why:
        "Modales, menus y tabs se sienten rotos para usuarios de teclado cuando el foco se pierde o vuelve al lugar incorrecto.",
    },
    keyboardaccess: {
      title: "Acceso por teclado",
      summary:
        "Acceso por teclado significa que una persona puede recorrer y usar la funcionalidad sin raton.",
      why:
        "La accesibilidad real depende de movimiento de teclado predecible, focus visible y controles que de verdad se puedan activar.",
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
  "click events": "eventhandling",
  "input events": "eventhandling",
  "dom selection": "domselection",
  "DOM selection": "domselection",
  "query selectors": "domselection",
  "dom updates": "domupdates",
  "DOM updates": "domupdates",
  "dom manipulation": "domupdates",
  "DOM manipulation": "domupdates",
  "style updates": "styleupdates",
  "style changes": "styleupdates",
  "class toggling": "classlist",
  "classList.toggle": "classlist",
  "classList.toggle()": "classlist",
  "textContent": "textcontent",
  "textcontent": "textcontent",
  "typescript": "typescript",
  "typed props": "typedprops",
  "typed prop": "typedprops",
  "interface": "interfaces",
  "interfaces": "interfaces",
  "type alias": "typealiases",
  "type aliases": "typealiases",
  "union type": "uniontypes",
  "union types": "uniontypes",
  "unions": "uniontypes",
  "optional property": "optionalproperties",
  "optional properties": "optionalproperties",
  "typed state": "typedstate",
  "typed events": "typedevents",
  "typed event": "typedevents",
  "narrowing": "narrowing",
  "typed data": "interfaces",
  "backend": "backend",
  "server": "backend",
  "database": "backend",
  "node.js": "express",
  "node": "express",
  "express": "express",
  "express basics": "express",
  "testing": "testing",
  "tests": "testing",
  "unit tests": "testing",
  "react testing library": "rtl",
  "testing library": "rtl",
  "render()": "render",
  "screen": "screen",
  "fireevent": "fireevent",
  "waitfor": "waitfor",
  "aria": "aria",
  "focus management": "focusmanagement",
  "focus states": "focusmanagement",
  "keyboard access": "keyboardaccess",
  "keyboard navigation": "keyboardaccess",
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
  "seleccion del dom": "domselection",
  "actualizaciones del dom": "domupdates",
  "cambios de estilo": "styleupdates",
  "props tipadas": "typedprops",
  "interfaces tipadas": "interfaces",
  "tipos union": "uniontypes",
  "propiedad opcional": "optionalproperties",
  "propiedades opcionales": "optionalproperties",
  "estado tipado": "typedstate",
  "eventos tipados": "typedevents",
  "narrowing de tipos": "narrowing",
  "bucles": "loops",
  "condicionales": "conditionals",
  "objetos": "objects",
  "funciones": "functions",
  "componentes": "components",
  "diseno responsive": "responsivedesign",
  "html semantico": "semantichtml",
  "accesibilidad": "semantichtml",
  "backend awareness": "backend",
  "tests de interfaz": "testing",
  "acceso por teclado": "keyboardaccess",
  "gestion del focus": "focusmanagement",
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
