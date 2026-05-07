const lessonOverrides = {
  en: {
    "styled-heading": {
      title: "Why headings matter",
      summary:
        "Headings are the signposts of a page. Users scan them first, and search engines and screen readers use them to understand what the page is about.",
      why:
        "Learning to style a heading teaches you how HTML gives content meaning while CSS controls how important content feels visually.",
      learnMore:
        "A heading is not just big text. It creates page structure. In real websites, headings introduce hero sections, product areas, blog posts, cards, dashboards, and forms. CSS then helps the heading match the brand with color, spacing, borders, and shape.",
      examples: [
        "A restaurant page might use an h1 for the restaurant name.",
        "A portfolio page might use an h2 for each project section.",
        "A dashboard might use headings to separate reports, tasks, and settings.",
      ],
    },
    "styled-button": {
      title: "Why buttons matter",
      summary:
        "Buttons are how users take action. Buying, saving, submitting, deleting, opening a menu, and logging in all usually start with a button.",
      why:
        "A good frontend developer makes buttons obvious, comfortable to click, and responsive when a user interacts with them.",
      learnMore:
        "Buttons need more than color. Padding gives the user a bigger target, border-radius affects the visual style, and hover states tell the user the interface is alive. Later you will also learn focus states, disabled states, loading states, and accessible button labels.",
      examples: [
        "An ecommerce site uses buttons for Add to cart and Checkout.",
        "A booking app uses buttons for Confirm booking and Cancel.",
        "A dashboard uses buttons for Save changes and Export report.",
      ],
    },
    "centered-box": {
      title: "Why centering matters",
      summary:
        "Centering is one of the first layout problems every developer meets. Login forms, empty states, modals, loaders, and feature cards often need to sit neatly in the middle of a screen or section.",
      why:
        "This challenge teaches how a parent controls the position of a child, which is a key idea behind most professional layouts.",
      learnMore:
        "With flexbox, the parent becomes responsible for alignment. justify-content controls the main direction, align-items controls the cross direction, and min-height: 100vh gives the parent enough height to center inside the viewport. Once this clicks, many layout problems become calmer.",
      examples: [
        "A login screen often centers a sign-in card.",
        "A loading screen often centers a spinner or message.",
        "An empty dashboard state often centers an illustration and call to action.",
      ],
    },
    "profile-card": {
      title: "Why cards matter",
      summary:
        "Cards are one of the most common UI patterns on the web. They group related information so users can scan people, products, posts, jobs, courses, and dashboard stats quickly.",
      why:
        "Learning cards teaches you how to wrap content, create visual hierarchy, and make information feel organized instead of floating randomly on the page.",
      learnMore:
        "A card usually has a container, a heading, supporting text, and spacing. The container creates boundaries, padding gives the content breathing room, and border-radius or shadows help the card feel separate from the page. Later, cards can include images, buttons, tags, prices, and API-driven data.",
      examples: [
        "A portfolio uses cards to show projects.",
        "A shop uses cards to show products.",
        "A hiring platform uses cards to show job listings or candidate profiles.",
      ],
    },
    "simple-navbar": {
      title: "Why navbars matter",
      summary:
        "Most websites use navbars because users need a reliable way to move around. On mobile, many navbars become burger menus, which we will learn later.",
      why:
        "A key part of building websites professionally is helping users understand where they are and where they can go next.",
      learnMore:
        'Navbars come in many forms, from very simple restaurant menus to high-tech product dashboards. For now, focus on a basic navbar: a logo or site name on the left, and links on the right. Restaurant websites often use links like Home, About us, and Menu. Links are created with anchor elements, for example <a href="#menu">Menu</a>.',
      examples: [
        "A restaurant navbar might show a logo, Home, About us, and Menu.",
        "A portfolio navbar might show Work, About, and Contact.",
        "A SaaS navbar might show Product, Pricing, Docs, and Login.",
      ],
    },
  },
  es: {
    "styled-heading": {
      title: "Por que importan los titulos",
      summary:
        "Los titulos son las senales de una pagina. Los usuarios los escanean primero, y los buscadores y lectores de pantalla los usan para entender de que trata el contenido.",
      why:
        "Aprender a dar estilo a un titulo ensena como HTML da significado al contenido y como CSS controla la importancia visual.",
      learnMore:
        "Un titulo no es solo texto grande. Crea estructura. En webs reales, los titulos introducen heroes, productos, articulos, tarjetas, dashboards y formularios. CSS ayuda a que el titulo encaje con la marca usando color, espacio, bordes y forma.",
      examples: [
        "Una web de restaurante puede usar un h1 para el nombre del restaurante.",
        "Un portfolio puede usar h2 para cada seccion de proyectos.",
        "Un dashboard puede usar titulos para separar informes, tareas y ajustes.",
      ],
    },
    "styled-button": {
      title: "Por que importan los botones",
      summary:
        "Los botones son la forma en la que el usuario toma accion. Comprar, guardar, enviar, borrar, abrir un menu o iniciar sesion suele empezar con un boton.",
      why:
        "Un buen frontend hace que los botones sean claros, comodos de pulsar y respondan cuando el usuario interactua.",
      learnMore:
        "Un boton necesita mas que color. El padding aumenta el area clicable, el border-radius cambia el estilo visual y el hover comunica que la interfaz esta viva. Mas adelante veras focus, disabled, loading y etiquetas accesibles.",
      examples: [
        "Un ecommerce usa botones como Anadir al carrito y Pagar.",
        "Una app de reservas usa Confirmar reserva y Cancelar.",
        "Un dashboard usa Guardar cambios y Exportar informe.",
      ],
    },
    "centered-box": {
      title: "Por que importa centrar elementos",
      summary:
        "Centrar elementos es uno de los primeros problemas reales de layout. Formularios de login, estados vacios, modales, loaders y tarjetas suelen necesitar estar bien centrados.",
      why:
        "Este reto ensena como un padre controla la posicion de un hijo, una idea clave en la mayoria de layouts profesionales.",
      learnMore:
        "Con flexbox, el padre se encarga de la alineacion. justify-content controla una direccion, align-items la otra, y min-height: 100vh da altura suficiente para centrar dentro de la pantalla. Cuando esto encaja, muchos layouts se vuelven mas faciles.",
      examples: [
        "Una pantalla de login suele centrar la tarjeta de acceso.",
        "Una pantalla de carga suele centrar un spinner o mensaje.",
        "Un dashboard vacio suele centrar una explicacion y un boton.",
      ],
    },
    "profile-card": {
      title: "Por que importan las tarjetas",
      summary:
        "Las tarjetas son uno de los patrones de UI mas comunes. Agrupan informacion relacionada para que el usuario pueda escanear personas, productos, posts, empleos, cursos o metricas rapidamente.",
      why:
        "Aprender tarjetas ensena a envolver contenido, crear jerarquia visual y hacer que la informacion parezca organizada en lugar de suelta en la pagina.",
      learnMore:
        "Una tarjeta suele tener contenedor, titulo, texto de apoyo y espacio interior. El contenedor crea limites, el padding da aire al contenido y el border-radius o la sombra separan la tarjeta del fondo. Mas adelante las tarjetas pueden incluir imagenes, botones, etiquetas, precios y datos de APIs.",
      examples: [
        "Un portfolio usa tarjetas para mostrar proyectos.",
        "Una tienda usa tarjetas para mostrar productos.",
        "Una plataforma de empleo usa tarjetas para ofertas o candidatos.",
      ],
    },
    "simple-navbar": {
      title: "Por que importan las barras de navegacion",
      summary:
        "La mayoria de webs usan navbars porque los usuarios necesitan una forma fiable de moverse. En movil, muchas navbars se convierten en menus burger, que aprenderemos mas adelante.",
      why:
        "Una parte clave de crear webs profesionalmente es ayudar al usuario a entender donde esta y a donde puede ir despues.",
      learnMore:
        'Las navbars existen de muchas formas: desde menus simples de restaurantes hasta dashboards avanzados. Por ahora, enfocate en una navbar basica: logo o nombre del sitio a la izquierda y links a la derecha. Una web de restaurante suele usar Home, Sobre nosotros y Menu. Los links se crean con elementos anchor, por ejemplo <a href="#menu">Menu</a>.',
      examples: [
        "Una navbar de restaurante puede mostrar logo, Home, Sobre nosotros y Menu.",
        "Un portfolio puede mostrar Proyectos, Sobre mi y Contacto.",
        "Un SaaS puede mostrar Producto, Precios, Docs y Login.",
      ],
    },
  },
};

const topicTemplates = {
  en: {
    selectors: {
      title: "Why selectors matter",
      summary:
        "Selectors are how CSS knows what to style. If HTML is the skeleton, selectors are the labels that tell CSS where to put the clothes.",
      why:
        "A lot of beginner CSS bugs happen because the style rule is fine, but it is pointing at the wrong element.",
      learnMore:
        "You will use a few selector patterns again and again: p styles every paragraph, .card styles any element with class card, #main styles one special element, .nav-links a styles only links inside nav-links, and .button:hover styles the button when the mouse is over it.",
      examples: [
        "A site logo can be styled with a class like .logo.",
        "All paragraph text can be softened with p { color: ... }.",
        "A menu link can change color with .nav-links a:hover.",
      ],
    },
    boxModel: {
      title: "Why the box model matters",
      summary:
        "Every element on a page is a box. The box model explains why something looks too tight, too big, too far away, or strangely misaligned.",
      why:
        "Once a learner understands margin, padding, border, width, height, and box-sizing, layouts stop feeling random.",
      learnMore:
        "Padding is space inside the box. Margin is space outside the box. Border is the visible edge. Width and height control size. box-sizing: border-box keeps the math easier because padding and border stay inside the width you set.",
      examples: [
        "A card uses padding so the text does not touch the edge.",
        "A button uses border-radius and padding to feel clickable.",
        "A profile tile may need margin-top so it is not glued to the header.",
      ],
    },
    display: {
      title: "Why display matters",
      summary:
        "The display property decides how an element behaves in the line-up of the page: full row, small inline piece, flexible box, grid cell, or fully hidden.",
      why:
        "This helps beginners understand why one element suddenly jumps to a new line while another sits next to text.",
      learnMore:
        "Block elements usually take the full row. Inline elements sit inside a line of text. Inline-block lets you keep them in a row while still giving them width and padding. Flex and Grid are for layout systems. display: none hides an element completely.",
      examples: [
        "A heading is usually block-level and starts on a new line.",
        "A tag or badge can use inline-block to keep padding neatly.",
        "A helper note can be hidden with display: none.",
      ],
    },
    flexbox: {
      title: "Why flexbox matters",
      summary:
        "Flexbox is the easiest way to line things up in one direction: rows, columns, navbars, centered sections, and card strips.",
      why:
        "Junior developers use flexbox constantly because so many real interfaces are just boxes that need to align, space out, wrap, or center cleanly.",
      learnMore:
        "Think of flexbox as a team manager for a group of boxes. flex-direction chooses the direction, justify-content controls spacing in that direction, align-items controls the cross direction, gap adds breathing room, flex-wrap lets items move to a new line, and flex: 1 helps boxes share space evenly.",
      examples: [
        "A navbar uses flexbox to split logo and links.",
        "A hero section can use flexbox to center content.",
        "A row of feature cards can wrap on smaller screens.",
      ],
    },
    grid: {
      title: "Why grid matters",
      summary:
        "Grid is useful when the page needs rows and columns at the same time. It feels a bit like placing cards on graph paper.",
      why:
        "As soon as a learner needs a gallery, feature board, project list, or dashboard cards, Grid becomes very helpful.",
      learnMore:
        "With Grid, you define columns on the parent and let the children snap into place. repeat(3, 1fr) gives three equal columns. repeat(auto-fit, minmax(250px, 1fr)) creates a layout that can shrink and reflow more naturally on smaller screens.",
      examples: [
        "A project gallery can use three columns on desktop.",
        "A features section can auto-fit into fewer columns on mobile.",
        "A dashboard can line up stat cards without awkward spacing.",
      ],
    },
    responsive: {
      title: "Why responsive design matters",
      summary:
        "Responsive design means the same page still works when the screen gets bigger or smaller.",
      why:
        "Being job-ready means thinking beyond your own laptop. Recruiters and teams expect the page to behave well on phones, tablets, and desktop screens.",
      learnMore:
        "A good starting pattern is a centered container with width: 90%, max-width: 1100px, and margin: 0 auto. Then use media queries, flexible units like rem, and responsive layouts so sections can stack, shrink, or wrap instead of breaking.",
      examples: [
        "A two-column section stacks into one column on mobile.",
        "A grid changes from three cards to one card per row.",
        "A page wrapper stays readable instead of stretching too wide.",
      ],
    },
    polish: {
      title: "Why CSS polish matters",
      summary:
        "Polish is what makes a page feel finished instead of looking like a homework draft.",
      why:
        "Small styling choices such as radius, shadow, hover, focus, and motion are often what make a beginner project start looking professional.",
      learnMore:
        "border-radius softens shapes, box-shadow lifts elements off the page, transition makes changes feel smoother, transform adds movement, :hover and :focus communicate interaction, opacity softens secondary text, and linear-gradient can add energy when used carefully.",
      examples: [
        "A pricing card lifts slightly on hover.",
        "A form field shows a clear focus ring for keyboard users.",
        "A callout banner uses a gentle gradient background.",
      ],
    },
    layout: {
      title: "Why layout skills matter",
      summary:
        "Layout is how a developer turns scattered content into a screen that feels intentional, readable, and usable.",
      why:
        "Professional frontend work depends on spacing, alignment, and responsive structure because users judge quality very quickly.",
      learnMore:
        "When explaining layout work, talk about the parent container, the children inside it, and the rule that controls their relationship. Flexbox is usually best for one direction, Grid is stronger for rows and columns, and responsive rules help the same interface work on phones and desktops.",
      examples: [
        "A marketing page needs sections that align cleanly.",
        "A dashboard needs columns, cards, and predictable spacing.",
        "A mobile view needs content to stack without breaking.",
      ],
    },
    cards: {
      title: "Why reusable UI blocks matter",
      summary:
        "Many interfaces are built from repeated blocks: cards, list rows, panels, tiles, and summaries.",
      why:
        "If you can build one clean block, you can later render many of them from data, which is how real apps are usually built.",
      learnMore:
        "A strong UI block has clear structure, spacing, hierarchy, and actions. In interviews, explain that you are grouping related data so the user can compare items quickly.",
      examples: [
        "Product grids are repeated product cards.",
        "Job boards are repeated job cards.",
        "Dashboards are repeated metric cards.",
      ],
    },
    forms: {
      title: "Why forms matter",
      summary:
        "Forms are how users give information to an app: login details, bookings, contact messages, searches, settings, and payments.",
      why:
        "A developer who understands forms can collect data clearly, validate it, and give feedback when something needs attention.",
      learnMore:
        "Good forms are not just inputs. They need labels, structure, validation, error messages, keyboard support, and a clear submit action. In real products, forms are often connected to APIs, authentication, email, payments, or databases.",
      examples: [
        "A contact form sends a sales enquiry.",
        "A checkout form collects payment and delivery details.",
        "A settings form saves user preferences.",
      ],
    },
    accessibility: {
      title: "Why accessibility matters",
      summary:
        "Accessibility is not an extra layer after the feature. It is part of whether the feature actually works for real people.",
      why:
        "Teams trust frontend developers more when they think about labels, keyboard access, focus states, readable structure, and clear feedback from the start.",
      learnMore:
        "In interviews, explain accessibility as making the experience understandable and usable for more people. Start with semantic HTML, real labels, buttons instead of generic divs, visible focus states, and clear status text. These are practical quality signals, not theory for theory's sake.",
      examples: [
        "A booking form needs labels and clear error feedback.",
        "A modal needs keyboard focus to stay predictable.",
        "A submit flow should show messages users can notice and understand.",
      ],
    },
    testing: {
      title: "Why testing matters",
      summary:
        "Testing is how a developer proves that a feature still behaves correctly when someone clicks, types, submits, or waits for data.",
      why:
        "Teams trust junior developers more when they can write a focused test, explain what it protects, and catch regressions before users do.",
      learnMore:
        "Good tests are small and behavior-focused. A simple way to explain them is: render the UI, do what the user would do, then check what should appear, disappear, or change.",
      examples: [
        "A save button changes label after a click.",
        "A form shows an error when the email is missing.",
        "A dashboard shows loading first, then data or an error.",
      ],
    },
    interactions: {
      title: "Why interactions matter",
      summary:
        "Interactions make a page respond to the user. Clicking, typing, toggling, opening, closing, and updating text are the first steps toward real app behavior.",
      why:
        "This is where HTML and CSS become a product experience instead of a static page.",
      learnMore:
        "Most interactions follow the same pattern: select the element, listen for an event, update state or the DOM, then show feedback. Being able to explain this flow is important because it appears in almost every frontend task.",
      examples: [
        "A FAQ opens when the user clicks a question.",
        "A password field toggles between hidden and visible.",
        "A counter updates when a user clicks a button.",
      ],
    },
    dataUi: {
      title: "Why data-driven UI matters",
      summary:
        "Real apps rarely hardcode every item by hand. They render products, users, jobs, orders, messages, and reports from data.",
      why:
        "Learning to search, filter, sort, paginate, and calculate from data prepares you for everyday junior frontend work.",
      learnMore:
        "When explaining data UI, describe the source data, the transformation, and the rendered result. For example: take an array of products, filter it by category, then map it into cards. This is a core pattern in JavaScript and React.",
      examples: [
        "A shop filters products by category.",
        "An admin table sorts users by status.",
        "A dashboard calculates totals from orders.",
      ],
    },
    asyncApi: {
      title: "Why async and APIs matter",
      summary:
        "Modern frontends constantly talk to APIs. Data may arrive late, fail, return empty, or change while the user is interacting.",
      why:
        "Juniors stand out when they can handle loading, success, empty, and error states without freezing or confusing the user.",
      learnMore:
        "Async work means your code starts a task now and receives the result later. In real products this usually means fetch, promises, async/await, status codes, JSON, headers, and careful error handling. Explain the lifecycle: request starts, UI shows loading, response arrives, UI updates or shows an error.",
      examples: [
        "A weather app fetches the latest forecast.",
        "A product page loads stock and price from an API.",
        "A form sends JSON to create a new record.",
      ],
    },
    debugging: {
      title: "Why debugging matters",
      summary:
        "Debugging is the skill that keeps a developer moving when something breaks, which happens every day in real work.",
      why:
        "Companies value developers who can read errors, isolate the cause, and explain the fix clearly.",
      learnMore:
        "Good debugging is calm and systematic: reproduce the issue, read the error, inspect the data, test one assumption at a time, then fix the smallest cause. Console logs and DevTools are not beginner tricks; professionals use them constantly.",
      examples: [
        "A JSON parser shows a helpful error instead of crashing.",
        "DevTools reveals why CSS is not being applied.",
        "Console output confirms what data an API returned.",
      ],
    },
    quality: {
      title: "Why shipping quality matters",
      summary:
        "A feature is not really done when it only works in the happy path. It needs loading, disabled, error, success, and empty states that make sense.",
      why:
        "Interviewers often use these details to separate someone who can code from someone who can ship work safely.",
      learnMore:
        "Quality-minded frontend work means asking what happens before submit, during submit, after success, and after failure. A reliable submit flow usually validates early, disables risky repeated actions, explains what is happening, and recovers cleanly from errors.",
      examples: [
        "A submit button becomes disabled while a request is running.",
        "A failed save shows a useful error instead of silently doing nothing.",
        "A list view explains clearly when no results match the filters.",
      ],
    },
    typescript: {
      title: "Why TypeScript matters",
      summary:
        "TypeScript helps frontend developers make assumptions explicit, which reduces bugs as screens, props, and data grow more complex.",
      why:
        "Many teams now expect junior React developers to at least read and write basic TypeScript because it makes collaboration safer.",
      learnMore:
        "TypeScript is most useful when it describes real UI shapes: props, API data, filters, form state, and event handlers. You do not need to start with advanced generics. Start with types and interfaces that explain what the screen expects and what state is allowed to become.",
      examples: [
        "A candidate card can require a typed candidate object.",
        "A filter can be a union like All, Frontend, or React.",
        "A form handler can type the submit event and state values clearly.",
      ],
    },
    persistence: {
      title: "Why saved state matters",
      summary:
        "Users expect apps to remember useful things: themes, filters, notes, carts, drafts, and preferences.",
      why:
        "Persistence makes interfaces feel reliable because the user does not have to repeat the same setup every time.",
      learnMore:
        "Browser storage is a simple first step toward persistence. Later, the same idea expands to databases and accounts. Explain it as: read saved value, show it in the UI, update it when the user changes something.",
      examples: [
        "A theme toggle remembers dark mode.",
        "A todo app remembers saved tasks.",
        "A product filter remembers the last category.",
      ],
    },
    state: {
      title: "Why state and data flow matter",
      summary:
        "State is the memory of an interface. It tracks what changed: input text, selected filters, loading status, open panels, saved items, and logged-in users.",
      why:
        "Understanding where state lives helps you build apps that are predictable instead of tangled.",
      learnMore:
        "In React, explain state by saying: this value can change, and when it changes the UI should update. Higher-level challenges add lifting state, reducers, context, optimistic updates, and derived values, which are all ways of keeping data flow clear as an app grows.",
      examples: [
        "Search text lives in state and filters a list.",
        "Auth state decides whether a dashboard is visible.",
        "Reducer state manages complex todo actions.",
      ],
    },
    components: {
      title: "Why components matter",
      summary:
        "Components let developers break a screen into understandable, reusable pieces.",
      why:
        "This is how modern teams build large interfaces without every file becoming impossible to understand.",
      learnMore:
        "A component should have a clear job. Props pass data in, events send decisions back out, and composition connects small pieces into bigger features. Being able to explain component boundaries is a strong job-ready skill.",
      examples: [
        "A Button component can be reused across a dashboard.",
        "A ProductCard receives product data through props.",
        "A Modal component can wrap many kinds of content.",
      ],
    },
    effects: {
      title: "Why effects and hooks matter",
      summary:
        "Effects connect React components to the outside world: APIs, timers, browser storage, subscriptions, and document changes.",
      why:
        "Real React apps need effects because not everything happens only inside JSX.",
      learnMore:
        "useEffect runs after render and is used for side effects. Explain when it runs, what it synchronizes with, and how cleanup prevents stale timers or subscriptions. Custom hooks then package repeated state/effect logic into reusable tools.",
      examples: [
        "Load users when a component mounts.",
        "Save a theme preference to localStorage.",
        "Clean up a timer after a component unmounts.",
      ],
    },
    routing: {
      title: "Why routing matters",
      summary:
        "Routing gives a single-page app real screens and URLs: home, dashboard, settings, product details, login, and not-found pages.",
      why:
        "Companies expect frontend developers to build navigation that users can bookmark, share, and understand.",
      learnMore:
        "A route maps a URL to UI. Dynamic routes, such as /users/:id, let one component show many detail pages. Protected routes combine routing with auth state so only allowed users can see certain screens.",
      examples: [
        "A job board has list and job-detail routes.",
        "A shop has product detail routes.",
        "A dashboard protects admin-only pages.",
      ],
    },
    auth: {
      title: "Why auth flows matter",
      summary:
        "Authentication controls who the user is and what they are allowed to see or do.",
      why:
        "Even frontend developers need to understand login state, protected screens, logout, and how auth connects to APIs.",
      learnMore:
        "Frontend auth is about user experience and state, not real security by itself. Real security also lives on the server. Explain the flow as: user logs in, app stores/receives auth state, protected routes check that state, and API calls include the right credentials.",
      examples: [
        "A course platform protects paid lessons.",
        "A dashboard shows account data only after login.",
        "A checkout may require a verified user session.",
      ],
    },
    backend: {
      title: "Why backend awareness matters",
      summary:
        "Frontend work does not exist alone. Servers, databases, APIs, auth, emails, and payments usually sit behind the interface.",
      why:
        "A frontend developer who understands the request flow can debug faster and communicate better with backend teams.",
      learnMore:
        "You do not need to be a backend expert to be job-ready for frontend, but you should understand that the browser sends a request, the server validates it, the database stores or reads data, and the response comes back as JSON or an error.",
      examples: [
        "A form sends data to an Express endpoint.",
        "A database stores users, orders, and subscriptions.",
        "A failed request may be caused by auth, validation, or server errors.",
      ],
    },
  },
  es: {
    selectors: {
      title: "Por que importan los selectores",
      summary:
        "Los selectores son la forma en la que CSS sabe que elemento debe estilizar. Si HTML es el esqueleto, los selectores son las etiquetas que le dicen a CSS donde poner la ropa.",
      why:
        "Muchos errores de CSS al empezar no vienen de una regla mala, sino de estar apuntando al elemento equivocado.",
      learnMore:
        "Hay unos cuantos patrones que usaras mucho: p estiliza todos los parrafos, .card estiliza cualquier elemento con clase card, #main estiliza un elemento especial, .nav-links a estiliza solo los links dentro de nav-links y .button:hover cambia el boton cuando el raton esta encima.",
      examples: [
        "Un logo puede recibir estilo con una clase como .logo.",
        "Todos los parrafos pueden suavizarse con p { color: ... }.",
        "Un link de menu puede cambiar de color con .nav-links a:hover.",
      ],
    },
    boxModel: {
      title: "Por que importa el modelo de caja",
      summary:
        "Cada elemento de una pagina es una caja. El modelo de caja explica por que algo se ve muy apretado, demasiado grande, muy separado o mal alineado.",
      why:
        "Cuando una persona entiende margin, padding, border, width, height y box-sizing, los layouts dejan de parecer aleatorios.",
      learnMore:
        "El padding es espacio dentro de la caja. El margin es espacio fuera de la caja. El border es el borde visible. Width y height controlan tamano. box-sizing: border-box hace la cuenta mas sencilla porque el padding y el borde quedan dentro del ancho que defines.",
      examples: [
        "Una tarjeta usa padding para que el texto no toque el borde.",
        "Un boton usa border-radius y padding para sentirse clicable.",
        "Una tarjeta de perfil puede necesitar margin-top para no pegarse al header.",
      ],
    },
    display: {
      title: "Por que importa display",
      summary:
        "La propiedad display decide como se comporta un elemento en la pagina: ocupa toda la fila, se queda dentro de una linea, funciona como caja flexible, como grid o queda oculto.",
      why:
        "Esto ayuda a entender por que un elemento salta a una nueva linea mientras otro se queda junto al texto.",
      learnMore:
        "Los elementos block suelen ocupar toda la fila. Los inline viven dentro de una linea de texto. Inline-block permite mantenerlos en fila y aun asi darles ancho y padding. Flex y Grid son sistemas de layout. display: none oculta un elemento por completo.",
      examples: [
        "Un titulo suele ser block y empieza en una nueva linea.",
        "Un badge puede usar inline-block para mantener un padding limpio.",
        "Una nota de ayuda puede ocultarse con display: none.",
      ],
    },
    flexbox: {
      title: "Por que importa flexbox",
      summary:
        "Flexbox es la forma mas sencilla de alinear cosas en una direccion: filas, columnas, navbars, secciones centradas y filas de tarjetas.",
      why:
        "Los junior developers usan flexbox constantemente porque muchas interfaces reales son cajas que necesitan alinearse, separarse, envolverse o centrarse con limpieza.",
      learnMore:
        "Piensa en flexbox como un manager de un grupo de cajas. flex-direction elige la direccion, justify-content controla el espacio en esa direccion, align-items controla la direccion cruzada, gap da aire, flex-wrap permite saltar a otra linea y flex: 1 ayuda a repartir el espacio de forma pareja.",
      examples: [
        "Una navbar usa flexbox para separar logo y links.",
        "Una hero section puede usar flexbox para centrar contenido.",
        "Una fila de tarjetas puede envolver en pantallas pequenas.",
      ],
    },
    grid: {
      title: "Por que importa grid",
      summary:
        "Grid es util cuando la pagina necesita filas y columnas al mismo tiempo. Se parece un poco a colocar tarjetas sobre papel cuadriculado.",
      why:
        "En cuanto alguien necesita una galeria, un tablero de funcionalidades, una lista de proyectos o metricas, Grid se vuelve muy util.",
      learnMore:
        "Con Grid defines columnas en el contenedor padre y los hijos se colocan en su sitio. repeat(3, 1fr) crea tres columnas iguales. repeat(auto-fit, minmax(250px, 1fr)) crea un layout que se adapta mejor cuando el espacio se reduce.",
      examples: [
        "Una galeria de proyectos puede usar tres columnas en escritorio.",
        "Una seccion de funcionalidades puede pasar a menos columnas en movil.",
        "Un dashboard puede alinear metricas sin espacios raros.",
      ],
    },
    responsive: {
      title: "Por que importa el diseno responsive",
      summary:
        "Responsive significa que la misma pagina sigue funcionando cuando la pantalla se hace grande o pequena.",
      why:
        "Estar listo para un trabajo significa pensar mas alla de tu propio portatil. Los equipos esperan que la pagina funcione en movil, tablet y escritorio.",
      learnMore:
        "Un buen patron inicial es un contenedor centrado con width: 90%, max-width: 1100px y margin: 0 auto. Luego usa media queries, unidades flexibles como rem y layouts responsive para que las secciones se apilen, se encojan o se envuelvan sin romperse.",
      examples: [
        "Una seccion de dos columnas pasa a una columna en movil.",
        "Un grid cambia de tres tarjetas a una sola por fila.",
        "Un wrapper de pagina sigue legible en lugar de hacerse demasiado ancho.",
      ],
    },
    polish: {
      title: "Por que importa el pulido visual",
      summary:
        "El pulido es lo que hace que una pagina se sienta terminada en lugar de parecer una tarea a medio hacer.",
      why:
        "Detalles pequenos como radius, sombra, hover, focus y movimiento son los que suelen hacer que un proyecto principiante empiece a verse profesional.",
      learnMore:
        "border-radius suaviza formas, box-shadow levanta elementos sobre la pagina, transition hace los cambios mas suaves, transform anade movimiento, :hover y :focus comunican interaccion, opacity suaviza el texto secundario y linear-gradient puede dar energia cuando se usa con cuidado.",
      examples: [
        "Una tarjeta de precio se eleva un poco al hacer hover.",
        "Un campo de formulario muestra un focus claro para teclado.",
        "Un banner de llamada a la accion usa un fondo con gradiente suave.",
      ],
    },
    layout: {
      title: "Por que importan los layouts",
      summary:
        "El layout convierte contenido suelto en una pantalla intencional, legible y usable.",
      why:
        "El trabajo profesional de frontend depende de espaciado, alineacion y estructura responsive porque los usuarios juzgan la calidad muy rapido.",
      learnMore:
        "Para explicar un layout, habla del contenedor padre, los hijos y la regla que controla su relacion. Flexbox suele servir para una direccion, Grid para filas y columnas, y las reglas responsive hacen que la interfaz funcione en movil y escritorio.",
      examples: [
        "Una landing necesita secciones alineadas con claridad.",
        "Un dashboard necesita columnas, tarjetas y espaciado predecible.",
        "Una vista movil necesita apilar contenido sin romperse.",
      ],
    },
    cards: {
      title: "Por que importan los bloques reutilizables",
      summary:
        "Muchas interfaces se construyen con bloques repetidos: tarjetas, filas, paneles, tiles y resumenes.",
      why:
        "Si puedes crear un bloque limpio, despues puedes renderizar muchos desde datos, que es como suelen funcionar las apps reales.",
      learnMore:
        "Un buen bloque de UI tiene estructura clara, espaciado, jerarquia y acciones. En una entrevista, explicalo como agrupar datos relacionados para que el usuario pueda comparar elementos rapidamente.",
      examples: [
        "Una tienda usa tarjetas de producto.",
        "Un job board usa tarjetas de empleo.",
        "Un dashboard usa tarjetas de metricas.",
      ],
    },
    forms: {
      title: "Por que importan los formularios",
      summary:
        "Los formularios son la forma en que los usuarios dan informacion a una app: login, reservas, mensajes, busquedas, ajustes y pagos.",
      why:
        "Un developer que entiende formularios puede recoger datos con claridad, validarlos y dar feedback cuando algo necesita atencion.",
      learnMore:
        "Un buen formulario no son solo inputs. Necesita labels, estructura, validacion, errores, soporte de teclado y una accion clara. En productos reales, los formularios se conectan con APIs, auth, email, pagos o bases de datos.",
      examples: [
        "Un formulario de contacto envia una consulta comercial.",
        "Un checkout recoge pago y direccion.",
        "Un formulario de ajustes guarda preferencias.",
      ],
    },
    accessibility: {
      title: "Por que importa la accesibilidad",
      summary:
        "La accesibilidad no es una capa extra despues de la funcionalidad. Es parte de que la funcionalidad realmente sirva a personas reales.",
      why:
        "Los equipos confian mas en frontend developers que piensan desde el principio en labels, teclado, focus, estructura legible y feedback claro.",
      learnMore:
        "En entrevistas, explica accesibilidad como hacer la experiencia mas entendible y usable para mas personas. Empieza por HTML semantico, labels reales, botones de verdad, focus visible y textos de estado claros. Son senales practicas de calidad, no teoria vacia.",
      examples: [
        "Un formulario de reserva necesita labels y feedback de error claro.",
        "Un modal necesita foco de teclado predecible.",
        "Un flujo de submit debe mostrar mensajes faciles de notar y entender.",
      ],
    },
    testing: {
      title: "Por que importa el testing",
      summary:
        "Testing es como un developer demuestra que una funcionalidad sigue comportandose bien cuando alguien hace click, escribe, envia o espera datos.",
      why:
        "Los equipos confian mas en perfiles junior que pueden escribir un test enfocado, explicar que protege y detectar regresiones antes de que lleguen a usuarios.",
      learnMore:
        "Los buenos tests son pequenos y van al comportamiento. Una forma sencilla de explicarlos es: renderiza la UI, haz lo que haria la persona usuaria y comprueba que aparece, desaparece o cambia lo correcto.",
      examples: [
        "Un boton de guardar cambia de texto despues de un click.",
        "Un formulario muestra error cuando falta el email.",
        "Un dashboard muestra carga y despues datos o error.",
      ],
    },
    interactions: {
      title: "Por que importan las interacciones",
      summary:
        "Las interacciones hacen que una pagina responda al usuario. Clicks, texto, toggles, abrir, cerrar y actualizar contenido son los primeros pasos hacia una app real.",
      why:
        "Aqui HTML y CSS pasan de ser una pagina estatica a una experiencia de producto.",
      learnMore:
        "Casi toda interaccion sigue el mismo patron: seleccionar el elemento, escuchar un evento, actualizar estado o DOM y mostrar feedback. Saber explicar este flujo es importante porque aparece en casi cualquier tarea frontend.",
      examples: [
        "Un FAQ se abre cuando el usuario pulsa una pregunta.",
        "Un password cambia entre oculto y visible.",
        "Un contador actualiza el numero al pulsar un boton.",
      ],
    },
    dataUi: {
      title: "Por que importa la UI basada en datos",
      summary:
        "Las apps reales casi nunca escriben cada elemento a mano. Renderizan productos, usuarios, empleos, pedidos, mensajes e informes desde datos.",
      why:
        "Aprender busqueda, filtros, ordenacion, paginacion y calculos desde datos prepara para trabajo junior real.",
      learnMore:
        "Para explicar UI con datos, habla del origen de datos, la transformacion y el resultado renderizado. Por ejemplo: tomar un array de productos, filtrarlo por categoria y convertirlo en tarjetas. Es un patron clave en JavaScript y React.",
      examples: [
        "Una tienda filtra productos por categoria.",
        "Una tabla admin ordena usuarios por estado.",
        "Un dashboard calcula totales desde pedidos.",
      ],
    },
    asyncApi: {
      title: "Por que importan async y APIs",
      summary:
        "Los frontends modernos hablan constantemente con APIs. Los datos pueden llegar tarde, fallar, venir vacios o cambiar mientras el usuario interactua.",
      why:
        "Un junior destaca cuando maneja estados de carga, exito, vacio y error sin confundir al usuario.",
      learnMore:
        "Trabajo asincrono significa empezar una tarea ahora y recibir el resultado despues. En productos reales suele incluir fetch, promises, async/await, codigos de estado, JSON, headers y errores. Explica el ciclo: empieza request, UI muestra carga, llega respuesta, UI actualiza o muestra error.",
      examples: [
        "Una app del tiempo pide el pronostico actual.",
        "Una pagina de producto carga stock y precio desde una API.",
        "Un formulario envia JSON para crear un registro.",
      ],
    },
    debugging: {
      title: "Por que importa depurar",
      summary:
        "Depurar es la habilidad que mantiene a un developer avanzando cuando algo se rompe, y eso pasa todos los dias.",
      why:
        "Las empresas valoran developers que leen errores, aislan la causa y explican el arreglo con claridad.",
      learnMore:
        "Depurar bien es hacerlo con calma: reproducir el problema, leer el error, inspeccionar datos, probar una hipotesis cada vez y arreglar la causa mas pequena. Console logs y DevTools no son trucos de principiante; los profesionales los usan constantemente.",
      examples: [
        "Un parser JSON muestra un error util en lugar de romper la app.",
        "DevTools revela por que CSS no se aplica.",
        "La consola confirma que datos devolvio una API.",
      ],
    },
    quality: {
      title: "Por que importa la calidad al enviar",
      summary:
        "Una funcionalidad no esta terminada de verdad si solo funciona en el happy path. Necesita carga, disabled, error, exito y estados vacios con sentido.",
      why:
        "En entrevistas, estos detalles suelen separar a quien solo puede programar de quien puede enviar trabajo con seguridad.",
      learnMore:
        "Pensar en calidad en frontend significa preguntar que pasa antes del submit, durante el submit, despues del exito y despues del fallo. Un flujo fiable valida pronto, desactiva acciones repetidas peligrosas, explica que ocurre y se recupera bien de errores.",
      examples: [
        "Un boton submit se desactiva mientras corre una request.",
        "Un guardado fallido muestra un error util en lugar de no hacer nada.",
        "Una lista explica con claridad cuando ningun resultado coincide.",
      ],
    },
    typescript: {
      title: "Por que importa TypeScript",
      summary:
        "TypeScript ayuda a hacer explicitas las suposiciones del frontend, lo que reduce bugs cuando pantallas, props y datos crecen.",
      why:
        "Muchos equipos esperan hoy que un junior de React al menos pueda leer y escribir TypeScript basico porque hace la colaboracion mas segura.",
      learnMore:
        "TypeScript es mas util cuando describe formas reales de UI: props, datos de API, filtros, estado de formularios y handlers de eventos. No hace falta empezar con generics avanzados. Empieza con types e interfaces que expliquen que espera la pantalla y en que puede convertirse el estado.",
      examples: [
        "Una tarjeta de candidato puede exigir un objeto candidate tipado.",
        "Un filtro puede ser una union como All, Frontend o React.",
        "Un handler de formulario puede tipar con claridad el evento y el estado.",
      ],
    },
    persistence: {
      title: "Por que importa guardar estado",
      summary:
        "Los usuarios esperan que las apps recuerden cosas utiles: temas, filtros, notas, carrito, borradores y preferencias.",
      why:
        "La persistencia hace que una interfaz sea mas fiable porque el usuario no repite la misma configuracion cada vez.",
      learnMore:
        "El almacenamiento del navegador es el primer paso hacia persistencia. Mas adelante la misma idea se expande a bases de datos y cuentas. Explicalo como: leer valor guardado, mostrarlo en UI y actualizarlo cuando el usuario cambia algo.",
      examples: [
        "Un toggle recuerda el modo oscuro.",
        "Una app de tareas recuerda tareas guardadas.",
        "Un filtro de productos recuerda la ultima categoria.",
      ],
    },
    state: {
      title: "Por que importan estado y flujo de datos",
      summary:
        "El estado es la memoria de una interfaz. Guarda lo que cambia: texto, filtros, carga, paneles abiertos, favoritos y usuarios logueados.",
      why:
        "Entender donde vive el estado ayuda a crear apps predecibles en lugar de enredadas.",
      learnMore:
        "En React, explica el estado asi: este valor puede cambiar y cuando cambia la UI debe actualizarse. Retos avanzados agregan lifting state, reducers, context, optimistic UI y valores derivados, que mantienen claro el flujo de datos cuando la app crece.",
      examples: [
        "El texto de busqueda vive en estado y filtra una lista.",
        "El estado de auth decide si se ve un dashboard.",
        "Un reducer maneja acciones complejas de tareas.",
      ],
    },
    components: {
      title: "Por que importan los componentes",
      summary:
        "Los componentes permiten dividir una pantalla en piezas entendibles y reutilizables.",
      why:
        "Asi los equipos modernos construyen interfaces grandes sin que cada archivo sea imposible de entender.",
      learnMore:
        "Un componente debe tener una responsabilidad clara. Las props pasan datos hacia dentro, los eventos comunican decisiones hacia fuera y la composicion une piezas pequenas en features grandes. Explicar limites de componentes es una habilidad muy empleable.",
      examples: [
        "Un componente Button se reutiliza en un dashboard.",
        "Un ProductCard recibe datos por props.",
        "Un Modal puede envolver muchos tipos de contenido.",
      ],
    },
    effects: {
      title: "Por que importan effects y hooks",
      summary:
        "Los effects conectan componentes React con el mundo exterior: APIs, timers, localStorage, suscripciones y cambios del documento.",
      why:
        "Las apps React reales necesitan effects porque no todo ocurre solo dentro del JSX.",
      learnMore:
        "useEffect corre despues del render y se usa para efectos secundarios. Explica cuando corre, con que se sincroniza y como cleanup evita timers o suscripciones antiguas. Los custom hooks empaquetan logica repetida de estado/effects.",
      examples: [
        "Cargar usuarios cuando monta un componente.",
        "Guardar una preferencia de tema en localStorage.",
        "Limpiar un timer cuando un componente se desmonta.",
      ],
    },
    routing: {
      title: "Por que importa routing",
      summary:
        "Routing da pantallas y URLs reales a una SPA: home, dashboard, settings, detalle de producto, login y paginas 404.",
      why:
        "Las empresas esperan que frontend cree navegacion que se pueda guardar, compartir y entender.",
      learnMore:
        "Una ruta conecta una URL con UI. Las rutas dinamicas, como /users/:id, permiten que un componente muestre muchas paginas de detalle. Las rutas protegidas combinan routing con auth para controlar pantallas privadas.",
      examples: [
        "Un job board tiene lista y detalle de empleo.",
        "Una tienda tiene rutas de detalle de producto.",
        "Un dashboard protege paginas solo para admin.",
      ],
    },
    auth: {
      title: "Por que importan los flujos de auth",
      summary:
        "La autenticacion controla quien es el usuario y que puede ver o hacer.",
      why:
        "Incluso frontend necesita entender login state, pantallas protegidas, logout y como auth conecta con APIs.",
      learnMore:
        "Auth en frontend trata de experiencia y estado, no de seguridad real por si sola. La seguridad real tambien vive en servidor. Explica el flujo asi: usuario inicia sesion, la app recibe estado de auth, rutas protegidas revisan ese estado y las APIs reciben credenciales.",
      examples: [
        "Una plataforma de cursos protege lecciones pagadas.",
        "Un dashboard muestra datos solo tras login.",
        "Un checkout puede requerir una sesion verificada.",
      ],
    },
    backend: {
      title: "Por que importa entender backend",
      summary:
        "Frontend no existe solo. Servidores, bases de datos, APIs, auth, emails y pagos suelen estar detras de la interfaz.",
      why:
        "Un frontend que entiende el flujo de requests depura mas rapido y se comunica mejor con backend.",
      learnMore:
        "No necesitas ser experto backend para estar listo para frontend, pero debes entender que el navegador envia un request, el servidor valida, la base de datos lee o guarda datos, y la respuesta vuelve como JSON o error.",
      examples: [
        "Un formulario envia datos a un endpoint Express.",
        "Una base de datos guarda usuarios, pedidos y suscripciones.",
        "Un request fallido puede venir de auth, validacion o errores de servidor.",
      ],
    },
  },
};

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ");
}

function lessonFromChallenge(challenge, language) {
  const localized = challenge.lesson?.[language];
  if (localized) return localized;

  if (language === "en" && challenge.lesson?.title) return challenge.lesson;

  return null;
}

function inferTopic(challenge) {
  const text = normalize(
    [
      challenge.id,
      challenge.title,
      challenge.category,
      challenge.goal,
      ...(challenge.concepts || []),
      ...(challenge.requirements || []),
    ].join(" ")
  );

  if (text.includes("auth") || text.includes("protected")) return "auth";
  if (text.includes("typescript")) return "typescript";
  if (
    text.includes("selector") ||
    text.includes("class selector") ||
    text.includes("id selector") ||
    text.includes("hover selector") ||
    text.includes("nav links a")
  ) {
    return "selectors";
  }
  if (
    text.includes("box model") ||
    text.includes("box sizing") ||
    text.includes("box sizing border box") ||
    text.includes("margin") ||
    text.includes("padding") ||
    text.includes("border box")
  ) {
    return "boxModel";
  }
  if (
    text.includes("display inline") ||
    text.includes("display block") ||
    text.includes("inline block") ||
    text.includes("display none")
  ) {
    return "display";
  }
  if (
    text.includes("flexbox") ||
    text.includes("display flex") ||
    text.includes("flex direction") ||
    text.includes("justify content") ||
    text.includes("align items") ||
    text.includes("flex wrap") ||
    text.includes("flex 1")
  ) {
    return "flexbox";
  }
  if (
    text.includes("css grid") ||
    text.includes("grid template") ||
    text.includes("minmax") ||
    text.includes("auto fit")
  ) {
    return "grid";
  }
  if (
    text.includes("responsive") ||
    text.includes("media query") ||
    text.includes("max width") ||
    text.includes("width 100") ||
    text.includes("tablet") ||
    text.includes("mobile")
  ) {
    return "responsive";
  }
  if (
    text.includes("box shadow") ||
    text.includes("transition") ||
    text.includes("transform") ||
    text.includes("linear gradient") ||
    text.includes("focus state") ||
    text.includes("hover state") ||
    text.includes("opacity")
  ) {
    return "polish";
  }
  if (text.includes("accessibility") || text.includes("aria") || text.includes("focus states") || text.includes("keyboard")) {
    return "accessibility";
  }
  if (
    text.includes("unit test") ||
    text.includes("unit tests") ||
    text.includes("testing") ||
    text.includes("testing library") ||
    text.includes("form validation tests") ||
    text.includes("loading and error tests") ||
    text.includes("screen.") ||
    text.includes("fireevent") ||
    text.includes("waitfor")
  ) {
    return "testing";
  }
  if (text.includes("qa") || text.includes("shipping ready") || text.includes("disabled submit")) {
    return "quality";
  }
  if (text.includes("route") || text.includes("router") || text.includes("url params")) {
    return "routing";
  }
  if (text.includes("backend") || text.includes("server") || text.includes("database") || text.includes("express")) {
    return "backend";
  }
  if (text.includes("fetch") || text.includes("api") || text.includes("promise") || text.includes("async") || text.includes("loading") || text.includes("status codes") || text.includes("headers")) {
    return "asyncApi";
  }
  if (text.includes("debug") || text.includes("try catch") || text.includes("json parser") || text.includes("devtools")) {
    return "debugging";
  }
  if (text.includes("localstorage") || text.includes("persist") || text.includes("save")) {
    return "persistence";
  }
  if (text.includes("component") || text.includes("props") || text.includes("composition")) {
    return "components";
  }
  if (text.includes("effect") || text.includes("hook")) return "effects";
  if (text.includes("state") || text.includes("reducer") || text.includes("context") || text.includes("favourite")) {
    return "state";
  }
  if (text.includes("form") || text.includes("input") || text.includes("password") || text.includes("validation")) {
    return "forms";
  }
  if (text.includes("filter") || text.includes("sort") || text.includes("search") || text.includes("table") || text.includes("dashboard") || text.includes("pagination") || text.includes("kpi") || text.includes("array")) {
    return "dataUi";
  }
  if (text.includes("card") || text.includes("product") || text.includes("portfolio") || text.includes("profile")) {
    return "cards";
  }
  if (text.includes("event") || text.includes("toggle") || text.includes("counter") || text.includes("click") || text.includes("faq")) {
    return "interactions";
  }

  return "layout";
}

function getLevelLine(challenge, language) {
  const isReact =
    challenge.modeId === "react" ||
    challenge.editorType === "react" ||
    challenge.editorType === "react-ts" ||
    challenge.editorType === "react-test";
  const isBuilder = challenge.modeId === "builder";

  if (language === "es") {
    if (isReact) {
      return "En este nivel, intenta poder explicarlo como lo harias en una entrevista: que problema resuelve, donde vive el estado o los datos, y como cambia la UI.";
    }

    if (isBuilder) {
      return "En este nivel, intenta explicar el flujo: que dato entra, que logica se ejecuta y que cambia para el usuario.";
    }

    return "En este nivel, lo importante es crear una base visual clara y poder decir por que cada elemento existe.";
  }

  if (isReact) {
    return "At this level, try to explain it like you would in an interview: what problem it solves, where state or data lives, and how the UI changes.";
  }

  if (isBuilder) {
    return "At this level, try to explain the flow: what data comes in, what logic runs, and what changes for the user.";
  }

  return "At this level, the important part is building a clear visual foundation and being able to say why each element exists.";
}

export function getChallengeLesson(challenge, language = "en") {
  const currentLanguage = language === "es" ? "es" : "en";
  const override = lessonOverrides[currentLanguage]?.[challenge.id];
  const existingLesson = lessonFromChallenge(challenge, currentLanguage);

  if (override) return override;
  if (existingLesson) return existingLesson;

  const topic = inferTopic(challenge);
  const template =
    topicTemplates[currentLanguage][topic] || topicTemplates[currentLanguage].layout;
  const levelLine = getLevelLine(challenge, currentLanguage);

  return {
    ...template,
    why: `${template.why} ${levelLine}`,
  };
}
