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
    "css-grid-gallery": {
      title: "Why Grid starts with the parent",
      summary:
        "In earlier layouts, flexbox helped you line items up in one direction. This challenge switches to CSS Grid, where the parent creates columns and the children fill those columns.",
      why:
        "A gallery is a perfect Grid exercise because you are arranging repeated items across rows and columns, not just pushing boxes along one line.",
      learnMore:
        "Put display: grid on the gallery container, then define the column pattern with grid-template-columns. The pattern repeat(auto-fit, minmax(160px, 1fr)) means: create as many columns as fit, never let a column shrink below 160px, and share leftover space evenly.",
      examples: [
        "A project gallery can show several tiles per row on desktop.",
        "The same gallery can collapse naturally on mobile.",
        "Gap belongs on the grid parent because it controls space between all grid cells.",
      ],
    },
    "grid-feature-board": {
      title: "Why three-column Grid matters",
      summary:
        "This challenge introduces the basic Grid move: make the parent a grid container, then tell it how many columns to create.",
      why:
        "Before responsive layouts get clever, learners need to see the direct relationship between display: grid and grid-template-columns.",
      learnMore:
        "display: grid turns the parent into a grid formatting context. grid-template-columns: repeat(3, 1fr) creates three equal columns, and gap controls the space between the child cards.",
      examples: [
        "A features board can show three benefits side by side.",
        "A pricing comparison can start as three equal plan cards.",
        "A dashboard row can use the same equal-column idea for stats.",
      ],
    },
    "responsive-card-grid": {
      title: "Why responsive card grids matter",
      summary:
        "Card grids are everywhere: services, projects, products, lessons, and team members. The goal is to create one repeated card pattern and let Grid decide how many fit per row.",
      why:
        "This is where learners move from manually placing boxes to describing a layout rule the browser can reuse at different widths.",
      learnMore:
        "Use display: grid on the card-grid parent and grid-template-columns with repeat(auto-fit, minmax(220px, 1fr)). The cards stay consistent because each article uses the same inner structure: title, supporting text, and link.",
      examples: [
        "A portfolio can use the pattern for three featured projects.",
        "A course page can use it for lesson cards.",
        "A product page can use it for related items.",
      ],
    },
    "media-query-stack-layout": {
      title: "Why media queries matter",
      summary:
        "Responsive design is not only flexible units. Sometimes you deliberately change the layout at a specific screen width.",
      why:
        "This challenge teaches the breakpoint pattern: two columns can be useful on desktop, but the same content should stack when the screen gets narrow.",
      learnMore:
        "Use flexbox for the two-column desktop layout, then add @media (max-width: 700px) and change flex-direction to column. That tells the browser when the layout rule should change.",
      examples: [
        "A promo image and text block can sit side by side on desktop.",
        "The same block stacks on mobile to avoid cramped text.",
        "Forms, hero sections, and product layouts often use this pattern.",
      ],
    },
    "fluid-container-shell": {
      title: "Why containers matter",
      summary:
        "A page container keeps content readable. Without one, text and sections can stretch awkwardly across large screens.",
      why:
        "This challenge focuses on the outer page shell: width controls small screens, max-width controls large screens, and margin auto keeps the content centered.",
      learnMore:
        "The pattern width: 90%; max-width: 1100px; margin: 0 auto; is a dependable beginner container. It gives the layout side breathing room while preventing the content from becoming too wide.",
      examples: [
        "A blog uses a container so paragraphs stay readable.",
        "A portfolio uses a container to align sections.",
        "A dashboard may use a container to keep cards from spreading too far apart.",
      ],
    },
    "dashboard-stats-layout": {
      title: "Why dashboard stats use Grid",
      summary:
        "Dashboard stats are repeated boxes that need to line up evenly. Flexbox can place boxes in a row, but Grid lets you say exactly how many columns the row should have.",
      why:
        "Challenge 17 is about changing approach: instead of relying on display: flex, use display: grid plus grid-template-columns to create three equal stat cards.",
      learnMore:
        "Set the parent to display: grid, then use grid-template-columns: repeat(3, minmax(0, 1fr)). That gives three equal columns. Add a media query that changes the columns to 1fr on small screens, so the same cards stack cleanly.",
      examples: [
        "A sales dashboard might show revenue, users, and orders.",
        "An admin panel might show tickets, response time, and satisfaction.",
        "A portfolio case study might show visits, conversions, and performance.",
      ],
    },
    "polished-pricing-card": {
      title: "Why polish needs states",
      summary:
        "Visual polish is more than making a box pretty. Real UI elements should respond when users hover, focus, and prepare to click.",
      why:
        "This challenge teaches the difference between static styling and interaction polish: shadow, radius, transition, transform, hover, and focus all work together.",
      learnMore:
        "A small transform on hover makes the card feel interactive. A transition prevents the motion from snapping. A visible focus outline keeps the action usable for keyboard users.",
      examples: [
        "A pricing card can lift slightly on hover.",
        "A checkout button needs a visible focus state.",
        "A settings panel can use shadow and radius to feel finished.",
      ],
    },
    "gradient-hero-callout": {
      title: "Why gradients need restraint",
      summary:
        "A gradient can make a section feel energetic, but the layout still depends on readable text, contrast, spacing, and a clear action.",
      why:
        "This challenge teaches learners to put the visual effect on the wrapper while keeping the content hierarchy clean.",
      learnMore:
        "Use linear-gradient as the background on the callout, then use padding and border-radius to frame it. Keep the heading, paragraph, and action readable instead of adding extra decoration.",
      examples: [
        "A course announcement can use a gradient callout.",
        "A product page can highlight a trial offer.",
        "A portfolio can use a gradient banner for a featured section.",
      ],
    },
    "responsive-feature-strip": {
      title: "Why repeatable Grid sections matter",
      summary:
        "A feature strip is a repeated card pattern. Grid lets the browser place those repeated cards cleanly as the screen changes.",
      why:
        "This reinforces the responsive Grid pattern after learners have seen it in galleries and card grids.",
      learnMore:
        "Use display: grid on the feature-strip parent and repeat(auto-fit, minmax(220px, 1fr)) for the columns. Each card should keep the same structure, spacing, and visual weight.",
      examples: [
        "A landing page can show three product benefits.",
        "A course page can show three learning steps.",
        "A service page can show three ways to work together.",
      ],
    },
    "portfolio-section-capstone": {
      title: "Why this section combines the block",
      summary:
        "The portfolio capstone pulls this class together: semantic section structure, repeated cards, responsive Grid, tags, links, and visual polish.",
      why:
        "A portfolio section is a realistic beginner deliverable because it needs to look good, scan quickly, and adapt across screen sizes.",
      learnMore:
        "Build the section header first, then create exactly three project cards. The project grid should use display: grid and responsive grid-template-columns. Tags and links make each card feel like real portfolio content instead of placeholder boxes.",
      examples: [
        "A recruiter can scan project titles, summaries, tags, and links.",
        "A mobile visitor sees the projects stacked cleanly.",
        "A desktop visitor sees a polished multi-card section.",
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

function createBeginnerGuide(title, intro, steps, code) {
  return {
    title,
    intro,
    steps,
    ...(code ? { code } : {}),
  };
}

const beginnerGuideLibrary = {
  en: {
    displayBasics: createBeginnerGuide(
      "Think of display as element behavior",
      "Before Flexbox and Grid, display answers a simpler question: should this element take the whole row, sit next to others, or disappear?",
      [
        "The outer section can stay as a normal block element, so it naturally creates one clear wrapper.",
        "Small links start inline, which is why they feel awkward when you try to add padding or pill styling.",
        "display: inline-block lets the small item stay in a row while still accepting padding, width, and rounded corners.",
        "display: none removes an element from the layout completely, so it is the clean way to hide helper text.",
      ],
      `.pill {\n  display: inline-block;\n  padding: 8px 14px;\n}\n\n.helper {\n  display: none;\n}`
    ),
    flexCenter: createBeginnerGuide(
      "Let the parent do the centering",
      "When something needs to sit in the middle, think about the parent first. The parent decides where the child lives.",
      [
        "Create one wrapper that covers the screen or section.",
        "Put display: flex on the wrapper, not on the circle itself.",
        "Use justify-content and align-items to move the child into the middle.",
        "Give the circle equal width and height, then border-radius: 50% to make it round.",
      ],
      `.page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.circle {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n}`
    ),
    flexRow: createBeginnerGuide(
      "One parent, two children, one row rule",
      "A two-column layout becomes easier when you stop styling each box alone and start giving the parent one layout job.",
      [
        "Create one wrapper around both boxes.",
        "Turn the wrapper into a flex container.",
        "Use gap on the wrapper so the spacing stays consistent.",
        "Give both children flex: 1 so they share the row evenly.",
      ],
      `.layout {\n  display: flex;\n  gap: 20px;\n}\n\n.box {\n  flex: 1;\n}`
    ),
    flexCards: createBeginnerGuide(
      "Flexbox is great for repeated cards in one row",
      "This pattern appears everywhere: service cards, pricing cards, stat cards, feature cards. The trick is to make one rule and repeat it.",
      [
        "Build one parent row and repeat the same child structure three times.",
        "Use display: flex on the parent so the cards sit next to each other.",
        "Use gap for spacing instead of margins on random cards.",
        "Use flex: 1 on each card so they all share the space fairly.",
      ],
      `.service-row {\n  display: flex;\n  gap: 16px;\n}\n\n.service-row article {\n  flex: 1;\n}`
    ),
    flexWrap: createBeginnerGuide(
      "Wrap means move to a new line instead of overflowing",
      "Tags, chips, skills, and filters often look small, but the layout idea is important: the row should adapt when space runs out.",
      [
        "Create one wrapper for all the chips.",
        "Use display: flex so the chips line up in a row.",
        "Add flex-wrap: wrap so the row can continue onto a new line.",
        "Keep the chip styling repeated so the row feels like one system.",
      ],
      `.chip-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}`
    ),
    cardStructure: createBeginnerGuide(
      "A card is just a clear content box",
      "Beginners sometimes think cards are complex. Really, a card is a wrapper, a title, supporting text, and good spacing.",
      [
        "Start with one container for related content.",
        "Add the title first because it tells the user what the card is about.",
        "Use padding inside the card so the content can breathe.",
        "Use border-radius, background, and spacing to separate the card from the page.",
      ]
    ),
    navbar: createBeginnerGuide(
      "A navbar is usually two groups in one row",
      "Most simple navbars follow the same structure: brand on one side, links on the other side.",
      [
        "Create one outer header or nav wrapper.",
        "Put the logo or site name in one child and the links in another child.",
        "Use display: flex on the main nav row.",
        "Use justify-content: space-between to push the two groups apart and gap inside the links row.",
      ],
      `.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.links {\n  display: flex;\n  gap: 20px;\n}`
    ),
    heroStack: createBeginnerGuide(
      "Hero copy is a vertical stack with hierarchy",
      "A hero text block should read in a simple order: title first, supporting text second, action third.",
      [
        "Wrap the heading, paragraph, and button inside one hero container.",
        "Stack the content vertically with flex-direction: column or clear spacing rules.",
        "Keep the text width under control with max-width so the paragraph stays readable.",
        "Make sure the button feels connected to the message, not floating far away.",
      ],
      `.hero-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 560px;\n}`
    ),
    landingHeader: createBeginnerGuide(
      "Build big sections in layers",
      "For a landing header, do not style everything at once. Build it in layers: section, nav, hero, then spacing and polish.",
      [
        "Create the outer section first so the whole header has one background and one padding system.",
        "Build the navbar inside that section.",
        "Build the hero copy block after the navbar.",
        "Only after the structure works should you add spacing, alignment, and button styling.",
      ]
    ),
    basicGrid: createBeginnerGuide(
      "Grid starts at the parent",
      "Grid is not about styling each card one by one. The important move is telling the parent how many columns should exist.",
      [
        "Create one parent wrapper and the repeated cards inside it.",
        "Put display: grid on the parent.",
        "Use grid-template-columns to describe the column pattern.",
        "Use gap on the grid parent so every space stays consistent.",
      ],
      `.board {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}`
    ),
    autoFitGrid: createBeginnerGuide(
      "Let the browser decide how many columns fit",
      "This is one of the most useful beginner Grid patterns because it saves you from hardcoding every row size by hand.",
      [
        "Build one repeated card pattern first.",
        "Turn the parent into a grid container.",
        "Use repeat(auto-fit, minmax(...)) so the browser chooses how many columns fit.",
        "Think of minmax as a promise: each card can shrink, but not below the readable minimum.",
      ],
      `.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 20px;\n}`
    ),
    mediaQuery: createBeginnerGuide(
      "A media query is a rule change at a breakpoint",
      "Responsive design is not magic. It usually means the layout follows one rule, then switches to a simpler rule when the screen gets smaller.",
      [
        "Start with the desktop or wider layout first so you can see the two-column structure.",
        "Add one breakpoint with @media (max-width: ...).",
        "Inside that breakpoint, change the layout rule, often from row to column.",
        "Keep the HTML the same. Only the CSS rule changes.",
      ],
      `.promo {\n  display: flex;\n  gap: 20px;\n}\n\n@media (max-width: 700px) {\n  .promo {\n    flex-direction: column;\n  }\n}`
    ),
    container: createBeginnerGuide(
      "A container protects readability",
      "Without a container, content can stretch too wide and feel hard to scan. A container gives the page side breathing room.",
      [
        "Use width or percentage so the content can shrink on small screens.",
        "Use max-width so the content stops growing on large screens.",
        "Use margin: 0 auto to center the container.",
        "Think of the container as the page shell that many sections can share.",
      ],
      `.container {\n  width: 90%;\n  max-width: 1100px;\n  margin: 0 auto;\n}`
    ),
    dashboardGrid: createBeginnerGuide(
      "Dashboards often need even, repeatable columns",
      "Stat cards should feel balanced. Grid is useful here because you can say exactly how many columns you want.",
      [
        "Put all the stat cards inside one wrapper.",
        "Use Grid to create equal columns on wider screens.",
        "Add a media query so the cards stack on narrow screens.",
        "Keep the inner card spacing and typography consistent so the row feels professional.",
      ],
      `.stats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}`
    ),
    cssPolish: createBeginnerGuide(
      "Polish is small details repeated consistently",
      "A card starts to feel professional when it has soft corners, space, shadow, and gentle motion instead of harsh edges and random spacing.",
      [
        "Start with the base card: background, padding, border-radius, and shadow.",
        "Add transition so hover changes feel smooth instead of jumpy.",
        "Use transform or shadow on hover to suggest interactivity.",
        "Do not forget focus states, because keyboard users also need a clear signal.",
      ],
      `.card {\n  border-radius: 18px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s ease;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n}`
    ),
    gradientCallout: createBeginnerGuide(
      "Put the visual effect on the wrapper",
      "A gradient should support the message, not fight it. The content still needs clear hierarchy and breathing room.",
      [
        "Create one outer callout wrapper.",
        "Add the gradient background to that wrapper, not to every child element.",
        "Use padding and border-radius so the section feels framed and intentional.",
        "Keep the heading, paragraph, and button readable with good contrast.",
      ],
      `.callout {\n  padding: 24px;\n  border-radius: 20px;\n  background: linear-gradient(135deg, #2563eb, #8b5cf6);\n}`
    ),
    featureStrip: createBeginnerGuide(
      "One repeated card pattern can power a whole section",
      "A feature strip is a great beginner exercise because it repeats one idea cleanly and still needs to adapt across screen sizes.",
      [
        "Build one feature card structure first.",
        "Repeat the same structure for the rest of the cards.",
        "Use responsive Grid on the parent so the browser decides how many fit.",
        "Keep spacing and text hierarchy consistent across all cards.",
      ]
    ),
    portfolioGrid: createBeginnerGuide(
      "Think of this as one real portfolio section",
      "This capstone matters because it feels like work you could actually show. The goal is not random boxes. The goal is one coherent section.",
      [
        "Build the section title and short intro first.",
        "Create the repeated project card structure second.",
        "Use responsive Grid on the project list so the layout adapts.",
        "Finish with tags, links, spacing, and polish so the whole section feels intentional.",
      ]
    ),
    searchCards: createBeginnerGuide(
      "The search pattern is still the same on cards",
      "It does not matter whether the visible items are list items or cards. The logic is still: read the search text, compare it, then show or hide each item.",
      [
        "Select the input and all the cards.",
        "Listen for the input event so the UI updates while the user types.",
        "Turn the typed value and the card text into lowercase so the comparison is easier.",
        "Show matching cards and hide the rest.",
      ],
      `const query = input.value.toLowerCase();\n\ncards.forEach((card) => {\n  const matches = card.textContent.toLowerCase().includes(query);\n  card.style.display = matches ? "block" : "none";\n});`
    ),
    multiFilter: createBeginnerGuide(
      "Two filters means two conditions",
      "A product should stay visible only if it passes both checks. This is the first step from simple search into more real product filtering.",
      [
        "Read the text filter and the price filter separately.",
        "Convert the price input into a number before comparing it.",
        "Inside filter(), check both conditions: name match and price match.",
        "Render the filtered list again whenever either input changes.",
      ],
      `const visibleProducts = products.filter((product) => {\n  const matchesName = product.name.toLowerCase().includes(query);\n  const matchesPrice = product.price <= maxPrice;\n  return matchesName && matchesPrice;\n});`
    ),
    faqToggle: createBeginnerGuide(
      "A toggle is just a tiny state switch",
      "FAQ items look small, but they teach an important product idea: one user action changes one part of the UI from closed to open or back again.",
      [
        "Create one trigger and one answer element.",
        "Hide the answer at the start so there is a visible before-and-after state.",
        "Listen for the click on the trigger.",
        "Check the current state, then swap to the opposite state.",
      ]
    ),
    savedTheme: createBeginnerGuide(
      "Persistence means remember something after refresh",
      "This challenge is not only about toggling colors. It is about teaching the browser to remember the user's last choice.",
      [
        "Choose two clear theme states, such as light and dark.",
        "On click, update the page class so the UI changes immediately.",
        "Save the chosen theme in localStorage as a string.",
        "When the script starts, read the saved value and apply it before the user clicks again.",
      ],
      `const savedTheme = localStorage.getItem("theme");\n\nif (savedTheme) {\n  page.className = "page " + savedTheme;\n}\n\nlocalStorage.setItem("theme", "dark");`
    ),
    counter: createBeginnerGuide(
      "The real count lives in JavaScript",
      "A counter looks simple, but it teaches a very important idea: the page displays a value, while JavaScript owns the changing value.",
      [
        "Keep the current number in a variable.",
        "Create one small render function that copies that variable into the DOM.",
        "Each button changes the variable in a different way.",
        "After every change, call the render function again.",
      ],
      `let count = 0;\n\nfunction renderCount() {\n  countEl.textContent = count;\n}`
    ),
    passwordVisibility: createBeginnerGuide(
      "You are not changing the password, only the input type",
      "This is a nice beginner challenge because it shows that one small attribute change can create a very real UX feature.",
      [
        "Select the password input and the toggle button.",
        "On click, inspect the current input type.",
        "If the type is password, switch it to text. Otherwise switch it back.",
        "Update the button label so the user knows the next action.",
      ],
      `const isHidden = passwordInput.type === "password";\npasswordInput.type = isHidden ? "text" : "password";\npasswordToggleBtn.textContent = isHidden ? "Hide" : "Show";`
    ),
    clickCounter: createBeginnerGuide(
      "Count in JavaScript, render in HTML",
      "This is one of the clearest beginner state exercises because every click changes one number and the result is easy to see.",
      [
        "Create one variable to store the total.",
        "Listen for button clicks.",
        "Increase the variable by one on each click.",
        "Render the new value into the page right away.",
      ]
    ),
    formValidation: createBeginnerGuide(
      "Submit is the moment to stop and check the data",
      "Forms try to reload the page by default. In JavaScript, the first job is usually to pause that behavior and inspect the values.",
      [
        "Listen for the submit event on the form, not just the button click.",
        "Use event.preventDefault() so the page stays in place.",
        "Read the input value and trim it before checking it.",
        "Show either an error message or a success message based on the result.",
      ],
      `form.addEventListener("submit", (event) => {\n  event.preventDefault();\n\n  if (input.value.trim() === "") {\n    feedback.textContent = "Please complete the field.";\n  }\n});`
    ),
    duplicateItems: createBeginnerGuide(
      "The array is the source of truth",
      "This challenge feels more real because it is not enough to update the DOM. You also need one place in JavaScript that knows which items already exist.",
      [
        "Keep the saved items inside an array.",
        "Trim the new input value before checking it.",
        "Use includes() to detect duplicates in the array.",
        "Only push the new value and re-render when it passes both checks.",
      ],
      `if (!value) return;\nif (topics.includes(value)) return;\n\ntopics.push(value);\nrenderTopics();`
    ),
    contactValidation: createBeginnerGuide(
      "Check one rule at a time",
      "When forms have more than one field, the cleanest beginner approach is to read the values once and then validate them in a simple order.",
      [
        "Read and trim the name and email values inside the submit handler.",
        "Check the first rule and return early if it fails.",
        "Check the next rule after that, such as whether the email includes @.",
        "Only show success after all rules pass.",
      ]
    ),
    formObject: createBeginnerGuide(
      "A successful submit often becomes one object",
      "This is a very real junior pattern: collect the values, validate them, turn them into one object, then show or send that object.",
      [
        "Read the form values inside the submit event.",
        "Validate them before building anything.",
        "Create one object with clear property names.",
        "Render the object preview and reset the form only after success.",
      ],
      `const user = {\n  email,\n  password,\n};\n\npreview.textContent = JSON.stringify(user, null, 2);`
    ),
    bookingFlow: createBeginnerGuide(
      "Real form flow is validate, build, render, then reset",
      "Booking forms are a good product example because they show that success is more than a message. The user should see what was submitted.",
      [
        "Read the current form values first.",
        "Validate each required field before moving on.",
        "Build one booking object after the data is valid.",
        "Render a clear summary card, then reset the form.",
      ]
    ),
    formDataSummary: createBeginnerGuide(
      "FormData reads named fields from one form",
      "FormData is useful when a form has several related fields and you want to collect them together after one submit action.",
      [
        "Make sure each field has a name attribute.",
        "Create new FormData(form) inside the submit handler.",
        "Read each value with formData.get(...).",
        "Build one object or one summary card from those values.",
      ],
      `const formData = new FormData(reservationForm);\nconst reservation = {\n  name: String(formData.get("name") || "").trim(),\n  time: String(formData.get("time") || ""),\n};`
    ),
    formDataPreview: createBeginnerGuide(
      "Previewing submitted data makes forms easier to understand",
      "For a beginner, this is helpful because the result is visible. The user can see exactly what the submit action collected.",
      [
        "Give the fields name attributes so FormData can read them.",
        "Prevent the default submit behavior.",
        "Collect the values with FormData.",
        "Render the submitted data into one preview card.",
      ]
    ),
    addListItem: createBeginnerGuide(
      "This is the create, append, clear pattern",
      "Adding one item to a list is a small exercise, but it teaches how UI can grow after the page has already loaded.",
      [
        "Read the current input value.",
        "Stop if the value is empty.",
        "Create a new li element and put the text inside it.",
        "Append it to the list, then clear the input.",
      ],
      `const li = document.createElement("li");\nli.textContent = value;\nitemList.appendChild(li);\nitemInput.value = "";`
    ),
    removeListItem: createBeginnerGuide(
      "Remove the whole item, not just the button",
      "When a remove button sits inside a list item, the real target is usually the parent item around that button.",
      [
        "Add a remove button to each visible item.",
        "Listen for the click on each button.",
        "Use parentElement or a close wrapper selector to reach the full item.",
        "Remove that full item from the page.",
      ],
      `button.addEventListener("click", () => {\n  button.parentElement.remove();\n});`
    ),
    removeWithEmptyState: createBeginnerGuide(
      "After removal, check if anything is left",
      "Real interfaces usually do one more thing after deleting: they explain what the empty screen means instead of leaving a blank area.",
      [
        "Remove the clicked item first.",
        "Count how many list items are still in the DOM.",
        "If none remain, reveal the empty message.",
        "If items still exist, keep the empty message hidden.",
      ]
    ),
    sortArray: createBeginnerGuide(
      "Sort the data first, then render it again",
      "Sorting is easier when you separate the data from the UI. JavaScript changes the order of the data, and the render function draws the result.",
      [
        "Store the products in an array of objects.",
        "Write one render function that shows the current array.",
        "Use sort() when the user clicks the button.",
        "Call render again so the new order appears on the page.",
      ],
      `products.sort((a, b) => a.price - b.price);\nrenderProducts();`
    ),
    filterArray: createBeginnerGuide(
      "filter() creates a smaller array of matches",
      "This is one of the most important frontend data patterns. You keep the original data, then create a smaller visible version of it.",
      [
        "Store the full product array once.",
        "Create a render function that accepts the items you want to show.",
        "When a filter button is clicked, use filter() to make a new array of matches.",
        "Pass that new array into the render function.",
      ],
      `const techItems = products.filter((product) => {\n  return product.category === "Tech";\n});\n\nrenderProducts(techItems);`
    ),
    todoToggle: createBeginnerGuide(
      "Completed state is often just one class change",
      "This is a good lesson in UI state. The todo still exists, but its visual state changes from normal to completed.",
      [
        "Create the todo items and their buttons.",
        "Add a click listener to each button.",
        "Toggle a class on the related list item.",
        "Let CSS decide how a completed item should look.",
      ]
    ),
    passwordStrength: createBeginnerGuide(
      "Live feedback means react while the user types",
      "This is not a submit problem. The UI should update during typing, which is why the input event matters here.",
      [
        "Select the password input and feedback text.",
        "Listen for the input event.",
        "Check a simple rule, such as the current length.",
        "Update the feedback message every time the value changes.",
      ]
    ),
    passwordRules: createBeginnerGuide(
      "Check each rule separately",
      "A checklist is clearer than one vague message because the user can see exactly what is already correct and what is still missing.",
      [
        "Create one visible row for each password rule.",
        "Listen for the input event on the password field.",
        "Run each rule check separately, such as length, number, and uppercase.",
        "Update each rule row on its own so the feedback stays specific.",
      ],
      `lengthRule.classList.toggle("is-valid", value.length >= 8);\nnumberRule.classList.toggle("is-valid", /\\d/.test(value));\nupperRule.classList.toggle("is-valid", /[A-Z]/.test(value));`
    ),
    tabBasics: createBeginnerGuide(
      "Tabs are just show one and hide the others",
      "The important idea is that only one content panel should feel active at a time.",
      [
        "Create the tab buttons and their matching content panels.",
        "Choose one panel to be visible at the start.",
        "On click, hide the old panel and show the new one.",
        "Keep the rule simple: one active tab, one visible content area.",
      ]
    ),
    restaurantTabs: createBeginnerGuide(
      "One shared panel keeps tab code cleaner",
      "Instead of building three full sections and showing or hiding all of them, you can keep one output area and swap the content inside it.",
      [
        "Create three tab buttons and one shared output area.",
        "Store the About, Menu, and Contact text in JavaScript.",
        "On click, replace the output area content with the matching entry.",
        "Update the active button style so the user knows where they are.",
      ]
    ),
    productManager: createBeginnerGuide(
      "This capstone is many small patterns working together",
      "Do not try to solve the whole capstone in one jump. Break it into small pieces you already know.",
      [
        "Build the HTML structure for the form, filters, feedback, and output list first.",
        "Make the add or submit flow work before worrying about sorting or filtering.",
        "Add the data logic next: arrays, render function, filter or sort helpers.",
        "Finish with reset states, messages, and polish so the UI feels complete.",
      ]
    ),
  },
  es: {
    displayBasics: createBeginnerGuide(
      "Piensa en display como el comportamiento del elemento",
      "Antes de Flexbox y Grid, display responde una pregunta mas simple: este elemento debe ocupar toda la fila, quedarse junto a otros o desaparecer?",
      [
        "La seccion exterior puede quedarse como un bloque normal, asi que crea un envoltorio claro.",
        "Los enlaces pequenos empiezan como inline, por eso se sienten incomodos cuando intentas darles padding o forma de pill.",
        "display: inline-block deja que el elemento pequeno siga en fila pero tambien acepte padding, ancho y bordes redondeados.",
        "display: none quita el elemento del layout por completo, asi que es la forma limpia de ocultar texto auxiliar.",
      ],
      `.pill {\n  display: inline-block;\n  padding: 8px 14px;\n}\n\n.helper {\n  display: none;\n}`
    ),
    flexCenter: createBeginnerGuide(
      "Deja que el padre haga el centrado",
      "Cuando algo debe ir en el medio, piensa primero en el padre. El padre decide donde vive el hijo.",
      [
        "Crea un envoltorio que cubra la pantalla o la seccion.",
        "Pon display: flex en el envoltorio, no en el circulo.",
        "Usa justify-content y align-items para mover el hijo al centro.",
        "Da al circulo el mismo ancho y alto, y luego border-radius: 50% para hacerlo redondo.",
      ],
      `.page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.circle {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n}`
    ),
    flexRow: createBeginnerGuide(
      "Un padre, dos hijos, una regla de fila",
      "Un layout de dos columnas se vuelve mas facil cuando dejas de estilizar cada caja por separado y das al padre un solo trabajo de layout.",
      [
        "Crea un envoltorio alrededor de ambas cajas.",
        "Convierte ese envoltorio en un contenedor flex.",
        "Usa gap en el envoltorio para que el espacio sea consistente.",
        "Da a las dos cajas flex: 1 para que compartan la fila por igual.",
      ],
      `.layout {\n  display: flex;\n  gap: 20px;\n}\n\n.box {\n  flex: 1;\n}`
    ),
    flexCards: createBeginnerGuide(
      "Flexbox va genial para tarjetas repetidas en una fila",
      "Este patron aparece en todas partes: servicios, precios, metricas, beneficios. La clave es escribir una regla y repetirla.",
      [
        "Construye una fila padre y repite la misma estructura de hijo tres veces.",
        "Usa display: flex en el padre para que las tarjetas se sienten una al lado de la otra.",
        "Usa gap para el espacio en vez de margenes aleatorios.",
        "Usa flex: 1 en cada tarjeta para que compartan el espacio con justicia.",
      ],
      `.service-row {\n  display: flex;\n  gap: 16px;\n}\n\n.service-row article {\n  flex: 1;\n}`
    ),
    flexWrap: createBeginnerGuide(
      "Wrap significa pasar a una nueva linea en vez de desbordar",
      "Las etiquetas, skills y filtros parecen pequenas, pero la idea de layout es importante: la fila debe adaptarse cuando se acaba el espacio.",
      [
        "Crea un envoltorio para todos los chips.",
        "Usa display: flex para alinearlos en una fila.",
        "Anade flex-wrap: wrap para que puedan seguir en una nueva linea.",
        "Manten el mismo estilo en todos los chips para que la fila se sienta como un solo sistema.",
      ],
      `.chip-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}`
    ),
    cardStructure: createBeginnerGuide(
      "Una tarjeta es solo una caja de contenido clara",
      "A veces parece que una card es algo complejo. En realidad suele ser un envoltorio, un titulo, texto de apoyo y buen espaciado.",
      [
        "Empieza con un contenedor para contenido relacionado.",
        "Anade primero el titulo porque dice de que trata la tarjeta.",
        "Usa padding dentro de la tarjeta para que el contenido respire.",
        "Usa border-radius, fondo y espacio para separar la tarjeta de la pagina.",
      ]
    ),
    navbar: createBeginnerGuide(
      "Una navbar suele ser dos grupos en una fila",
      "La mayoria de navbars simples siguen la misma estructura: marca a un lado, enlaces al otro.",
      [
        "Crea un envoltorio exterior con header o nav.",
        "Pon el logo o nombre del sitio en un hijo y los enlaces en otro hijo.",
        "Usa display: flex en la fila principal.",
        "Usa justify-content: space-between para separar los dos grupos y gap dentro de la fila de enlaces.",
      ],
      `.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.links {\n  display: flex;\n  gap: 20px;\n}`
    ),
    heroStack: createBeginnerGuide(
      "El texto hero es una pila vertical con jerarquia",
      "Un bloque hero debe leerse en un orden simple: titulo primero, texto de apoyo segundo, accion tercera.",
      [
        "Envuelve el titulo, el parrafo y el boton dentro de un contenedor hero.",
        "Apila el contenido en vertical con flex-direction: column o reglas claras de espaciado.",
        "Controla el ancho del texto con max-width para que el parrafo siga siendo legible.",
        "Haz que el boton se sienta conectado al mensaje, no flotando lejos.",
      ],
      `.hero-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 560px;\n}`
    ),
    landingHeader: createBeginnerGuide(
      "Construye secciones grandes por capas",
      "Para un encabezado de landing, no intentes estilizar todo a la vez. Construyelo por capas: seccion, nav, hero y luego espaciado y acabado.",
      [
        "Crea primero la seccion exterior para que todo el header comparta un fondo y un sistema de padding.",
        "Construye la navbar dentro de esa seccion.",
        "Construye el bloque hero despues de la navbar.",
        "Solo cuando la estructura funcione anade espaciado, alineacion y estilo de botones.",
      ]
    ),
    basicGrid: createBeginnerGuide(
      "Grid empieza en el padre",
      "Grid no va de estilizar cada tarjeta una por una. El movimiento importante es decirle al padre cuantas columnas deben existir.",
      [
        "Crea un envoltorio padre y las tarjetas repetidas dentro.",
        "Pon display: grid en el padre.",
        "Usa grid-template-columns para describir el patron de columnas.",
        "Usa gap en el padre para que todos los espacios sean consistentes.",
      ],
      `.board {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}`
    ),
    autoFitGrid: createBeginnerGuide(
      "Deja que el navegador decida cuantas columnas caben",
      "Este es uno de los patrones Grid mas utiles para principiantes porque evita fijar a mano cada tamano de fila.",
      [
        "Construye primero un patron de tarjeta repetida.",
        "Convierte el padre en un contenedor grid.",
        "Usa repeat(auto-fit, minmax(...)) para que el navegador elija cuantas columnas caben.",
        "Piensa en minmax como una promesa: la tarjeta puede encogerse, pero no por debajo del minimo legible.",
      ],
      `.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 20px;\n}`
    ),
    mediaQuery: createBeginnerGuide(
      "Una media query es un cambio de regla en un breakpoint",
      "El responsive no es magia. Normalmente significa que el layout sigue una regla y luego cambia a una regla mas simple cuando la pantalla se hace pequena.",
      [
        "Empieza por el layout de escritorio o pantalla amplia para ver la estructura de dos columnas.",
        "Anade un breakpoint con @media (max-width: ...).",
        "Dentro de ese breakpoint, cambia la regla de layout, muchas veces de fila a columna.",
        "Mantiene el mismo HTML. Solo cambia la regla CSS.",
      ],
      `.promo {\n  display: flex;\n  gap: 20px;\n}\n\n@media (max-width: 700px) {\n  .promo {\n    flex-direction: column;\n  }\n}`
    ),
    container: createBeginnerGuide(
      "Un contenedor protege la legibilidad",
      "Sin un contenedor, el contenido puede estirarse demasiado y resultar dificil de escanear. El contenedor da aire a los lados.",
      [
        "Usa width o porcentaje para que el contenido pueda encogerse en pantallas pequenas.",
        "Usa max-width para que el contenido deje de crecer en pantallas grandes.",
        "Usa margin: 0 auto para centrar el contenedor.",
        "Piensa en el contenedor como la carcasa de pagina que muchas secciones pueden compartir.",
      ],
      `.container {\n  width: 90%;\n  max-width: 1100px;\n  margin: 0 auto;\n}`
    ),
    dashboardGrid: createBeginnerGuide(
      "Los dashboards suelen necesitar columnas parejas y repetibles",
      "Las tarjetas de metricas deben sentirse equilibradas. Grid ayuda porque puedes decir exactamente cuantas columnas quieres.",
      [
        "Pon todas las tarjetas de estadisticas dentro de un solo envoltorio.",
        "Usa Grid para crear columnas iguales en pantallas amplias.",
        "Anade una media query para que las tarjetas se apilen en pantallas estrechas.",
        "Mantiene consistente el espaciado interior y la tipografia para que la fila se vea profesional.",
      ],
      `.stats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}`
    ),
    cssPolish: createBeginnerGuide(
      "El acabado son pequenos detalles repetidos con consistencia",
      "Una tarjeta empieza a sentirse profesional cuando tiene esquinas suaves, espacio, sombra y movimiento suave en vez de bordes duros y espaciado aleatorio.",
      [
        "Empieza con la base de la tarjeta: fondo, padding, border-radius y sombra.",
        "Anade transition para que los cambios de hover sean suaves en vez de bruscos.",
        "Usa transform o sombra en hover para sugerir interaccion.",
        "No olvides los focus states, porque el teclado tambien necesita una senal clara.",
      ],
      `.card {\n  border-radius: 18px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s ease;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n}`
    ),
    gradientCallout: createBeginnerGuide(
      "Pon el efecto visual en el envoltorio",
      "Un degradado debe apoyar el mensaje, no pelearse con el. El contenido sigue necesitando jerarquia clara y aire.",
      [
        "Crea un envoltorio exterior para el callout.",
        "Anade el fondo con degradado a ese envoltorio, no a cada hijo.",
        "Usa padding y border-radius para que la seccion se sienta enmarcada e intencional.",
        "Mantiene el titulo, parrafo y boton legibles con buen contraste.",
      ],
      `.callout {\n  padding: 24px;\n  border-radius: 20px;\n  background: linear-gradient(135deg, #2563eb, #8b5cf6);\n}`
    ),
    featureStrip: createBeginnerGuide(
      "Un patron de tarjeta repetido puede sostener una seccion entera",
      "Una franja de beneficios es un gran ejercicio principiante porque repite una sola idea de forma limpia y aun asi debe adaptarse a distintos anchos.",
      [
        "Construye primero una tarjeta de beneficio.",
        "Repite la misma estructura para el resto.",
        "Usa Grid responsive en el padre para que el navegador decida cuantas caben.",
        "Mantiene consistente el espaciado y la jerarquia del texto en todas las tarjetas.",
      ]
    ),
    portfolioGrid: createBeginnerGuide(
      "Piensa en esto como una seccion real de portfolio",
      "Este capstone importa porque se parece a trabajo que si podrias mostrar. La meta no son cajas aleatorias. La meta es una seccion coherente.",
      [
        "Construye primero el titulo de la seccion y una introduccion corta.",
        "Crea despues la estructura repetida de las tarjetas de proyecto.",
        "Usa Grid responsive en la lista de proyectos para que el layout se adapte.",
        "Termina con tags, enlaces, espaciado y acabado para que todo se sienta intencional.",
      ]
    ),
    searchCards: createBeginnerGuide(
      "El patron de busqueda sigue siendo el mismo en cards",
      "No importa si los elementos visibles son li o cards. La logica sigue siendo: leer el texto de busqueda, compararlo y luego mostrar u ocultar cada item.",
      [
        "Selecciona el input y todas las cards.",
        "Escucha el evento input para que la UI se actualice mientras la persona escribe.",
        "Convierte el valor escrito y el texto de la card a minusculas para comparar mas facil.",
        "Muestra las cards coincidentes y oculta el resto.",
      ],
      `const query = input.value.toLowerCase();\n\ncards.forEach((card) => {\n  const matches = card.textContent.toLowerCase().includes(query);\n  card.style.display = matches ? "block" : "none";\n});`
    ),
    multiFilter: createBeginnerGuide(
      "Dos filtros significan dos condiciones",
      "Un producto solo debe seguir visible si pasa ambas comprobaciones. Este es el primer paso desde una busqueda simple hacia filtros mas reales.",
      [
        "Lee por separado el filtro de texto y el filtro de precio.",
        "Convierte el input de precio en numero antes de compararlo.",
        "Dentro de filter(), revisa ambas condiciones: nombre y precio.",
        "Renderiza de nuevo la lista filtrada cada vez que cambie cualquiera de los dos inputs.",
      ],
      `const visibleProducts = products.filter((product) => {\n  const matchesName = product.name.toLowerCase().includes(query);\n  const matchesPrice = product.price <= maxPrice;\n  return matchesName && matchesPrice;\n});`
    ),
    faqToggle: createBeginnerGuide(
      "Un toggle es un cambio pequeno de estado",
      "Los FAQ parecen pequenos, pero ensenan una idea importante de producto: una accion cambia una parte de la UI de cerrada a abierta y viceversa.",
      [
        "Crea un disparador y un elemento de respuesta.",
        "Oculta la respuesta al principio para que exista un antes y un despues claro.",
        "Escucha el click en el disparador.",
        "Revisa el estado actual y cambialo por el contrario.",
      ]
    ),
    savedTheme: createBeginnerGuide(
      "Persistencia significa recordar algo tras refrescar",
      "Este reto no va solo de cambiar colores. Va de ensenar al navegador a recordar la ultima eleccion de la persona usuaria.",
      [
        "Elige dos estados de tema claros, como light y dark.",
        "En el click, actualiza la clase de la pagina para que la UI cambie al instante.",
        "Guarda el tema elegido en localStorage como texto.",
        "Cuando empiece el script, lee ese valor guardado y aplicalo antes de que la persona vuelva a hacer click.",
      ],
      `const savedTheme = localStorage.getItem("theme");\n\nif (savedTheme) {\n  page.className = "page " + savedTheme;\n}\n\nlocalStorage.setItem("theme", "dark");`
    ),
    counter: createBeginnerGuide(
      "El numero real vive primero en JavaScript",
      "Un contador parece simple, pero ensena una idea muy importante: la pagina muestra un valor, mientras JavaScript guarda el valor que cambia.",
      [
        "Guarda el numero actual en una variable.",
        "Crea una funcion pequena de render que copie esa variable al DOM.",
        "Cada boton cambia la variable de una forma distinta.",
        "Despues de cada cambio, llama otra vez a la funcion de render.",
      ],
      `let count = 0;\n\nfunction renderCount() {\n  countEl.textContent = count;\n}`
    ),
    passwordVisibility: createBeginnerGuide(
      "No cambias la password, cambias el tipo del input",
      "Es un buen reto principiante porque muestra que un cambio pequeno en un atributo puede crear una funcionalidad de UX muy real.",
      [
        "Selecciona el input de password y el boton toggle.",
        "En el click, revisa el tipo actual del input.",
        "Si el tipo es password, cambialo a text. Si no, vuelvelo a password.",
        "Actualiza el texto del boton para que la persona sepa la siguiente accion.",
      ],
      `const isHidden = passwordInput.type === "password";\npasswordInput.type = isHidden ? "text" : "password";\npasswordToggleBtn.textContent = isHidden ? "Hide" : "Show";`
    ),
    clickCounter: createBeginnerGuide(
      "Cuenta en JavaScript y pinta en HTML",
      "Este es uno de los ejercicios de estado mas claros para empezar porque cada click cambia un numero y el resultado se ve enseguida.",
      [
        "Crea una variable para guardar el total.",
        "Escucha los clicks del boton.",
        "Suma uno a la variable en cada click.",
        "Pinta el nuevo valor en la pagina inmediatamente.",
      ]
    ),
    formValidation: createBeginnerGuide(
      "Submit es el momento de parar y revisar los datos",
      "Los formularios intentan recargar la pagina por defecto. En JavaScript, el primer trabajo suele ser pausar eso y revisar los valores.",
      [
        "Escucha el evento submit del formulario, no solo el click del boton.",
        "Usa event.preventDefault() para que la pagina no se recargue.",
        "Lee el valor del input y haz trim antes de revisarlo.",
        "Muestra error o exito segun el resultado.",
      ],
      `form.addEventListener("submit", (event) => {\n  event.preventDefault();\n\n  if (input.value.trim() === "") {\n    feedback.textContent = "Please complete the field.";\n  }\n});`
    ),
    duplicateItems: createBeginnerGuide(
      "El array es la fuente de verdad",
      "Este reto se siente mas real porque no basta con tocar el DOM. Tambien necesitas un lugar en JavaScript que sepa que items ya existen.",
      [
        "Guarda los items actuales dentro de un array.",
        "Haz trim al nuevo valor antes de revisarlo.",
        "Usa includes() para detectar duplicados dentro del array.",
        "Solo haz push del nuevo valor y vuelve a renderizar cuando pase ambas comprobaciones.",
      ],
      `if (!value) return;\nif (topics.includes(value)) return;\n\ntopics.push(value);\nrenderTopics();`
    ),
    contactValidation: createBeginnerGuide(
      "Revisa una regla cada vez",
      "Cuando un formulario tiene mas de un campo, el enfoque mas limpio para empezar es leer los valores una sola vez y validarlos en orden.",
      [
        "Lee y haz trim al nombre y email dentro del submit.",
        "Revisa la primera regla y haz return pronto si falla.",
        "Despues revisa la siguiente regla, por ejemplo si el email incluye @.",
        "Solo muestra exito cuando todas las reglas pasen.",
      ]
    ),
    formObject: createBeginnerGuide(
      "Un submit correcto suele convertirse en un objeto",
      "Este es un patron muy real de junior: recoger valores, validarlos, convertirlos en un objeto y luego mostrar o enviar ese objeto.",
      [
        "Lee los valores dentro del evento submit.",
        "Validalos antes de construir nada.",
        "Crea un objeto con nombres de propiedad claros.",
        "Pinta la vista previa del objeto y resetea el formulario solo tras exito.",
      ],
      `const user = {\n  email,\n  password,\n};\n\npreview.textContent = JSON.stringify(user, null, 2);`
    ),
    bookingFlow: createBeginnerGuide(
      "El flujo real de formulario es validar, construir, pintar y resetear",
      "Los formularios de reserva son un buen ejemplo de producto porque el exito no es solo un mensaje. La persona debe ver que datos se han enviado.",
      [
        "Lee primero los valores actuales del formulario.",
        "Valida cada campo obligatorio antes de seguir.",
        "Construye un objeto booking cuando los datos sean validos.",
        "Pinta un resumen claro y luego resetea el formulario.",
      ]
    ),
    formDataSummary: createBeginnerGuide(
      "FormData lee campos con name desde un solo formulario",
      "FormData es util cuando un formulario tiene varios campos relacionados y quieres recogerlos juntos tras una sola accion de envio.",
      [
        "Asegurate de que cada campo tenga atributo name.",
        "Crea new FormData(form) dentro del submit.",
        "Lee cada valor con formData.get(...).",
        "Construye un objeto o una card resumen con esos valores.",
      ],
      `const formData = new FormData(reservationForm);\nconst reservation = {\n  name: String(formData.get("name") || "").trim(),\n  time: String(formData.get("time") || ""),\n};`
    ),
    formDataPreview: createBeginnerGuide(
      "Ver los datos enviados ayuda a entender mejor los formularios",
      "Para alguien que empieza, esto ayuda mucho porque el resultado es visible. La persona puede ver exactamente lo que el submit ha recogido.",
      [
        "Da atributos name a los campos para que FormData pueda leerlos.",
        "Evita el submit por defecto.",
        "Recoge los valores con FormData.",
        "Pinta esos datos dentro de una card de preview.",
      ]
    ),
    addListItem: createBeginnerGuide(
      "Este es el patron crear, anadir y limpiar",
      "Anadir un item a una lista es un ejercicio pequeno, pero ensena como una UI puede crecer despues de que la pagina ya haya cargado.",
      [
        "Lee el valor actual del input.",
        "Detente si el valor esta vacio.",
        "Crea un nuevo li y coloca el texto dentro.",
        "Anadelo a la lista y luego limpia el input.",
      ],
      `const li = document.createElement("li");\nli.textContent = value;\nitemList.appendChild(li);\nitemInput.value = "";`
    ),
    removeListItem: createBeginnerGuide(
      "Quita el item completo, no solo el boton",
      "Cuando un boton remove esta dentro de un item de lista, el objetivo real suele ser el elemento padre que envuelve ese boton.",
      [
        "Anade un boton remove a cada item visible.",
        "Escucha el click en cada boton.",
        "Usa parentElement o un selector cercano para llegar al item completo.",
        "Elimina ese item completo de la pagina.",
      ],
      `button.addEventListener("click", () => {\n  button.parentElement.remove();\n});`
    ),
    removeWithEmptyState: createBeginnerGuide(
      "Despues de borrar, revisa si queda algo",
      "Las interfaces reales suelen hacer una cosa mas despues de borrar: explicar que significa la pantalla vacia en vez de dejar un hueco sin contexto.",
      [
        "Elimina primero el item pulsado.",
        "Cuenta cuantos li siguen quedando en el DOM.",
        "Si no queda ninguno, muestra el mensaje vacio.",
        "Si aun quedan items, manten oculto ese mensaje.",
      ]
    ),
    sortArray: createBeginnerGuide(
      "Ordena los datos primero y luego vuelve a pintar",
      "Ordenar es mas facil cuando separas los datos de la UI. JavaScript cambia el orden de los datos y la funcion render dibuja el resultado.",
      [
        "Guarda los productos en un array de objetos.",
        "Escribe una funcion render que muestre el array actual.",
        "Usa sort() cuando la persona pulse el boton.",
        "Llama de nuevo a render para que aparezca el nuevo orden.",
      ],
      `products.sort((a, b) => a.price - b.price);\nrenderProducts();`
    ),
    filterArray: createBeginnerGuide(
      "filter() crea un array mas pequeno con los elementos que coinciden",
      "Este es uno de los patrones de datos mas importantes en frontend. Mantienes los datos originales y creas una version visible mas pequena.",
      [
        "Guarda una sola vez el array completo de productos.",
        "Crea una funcion render que reciba los items que quieres mostrar.",
        "Cuando se pulse un boton de filtro, usa filter() para crear un nuevo array con los coincidientes.",
        "Pasa ese nuevo array a la funcion render.",
      ],
      `const techItems = products.filter((product) => {\n  return product.category === "Tech";\n});\n\nrenderProducts(techItems);`
    ),
    todoToggle: createBeginnerGuide(
      "El estado completado suele ser solo un cambio de clase",
      "Es una buena leccion sobre estado visual. La tarea sigue existiendo, pero su apariencia cambia de normal a completada.",
      [
        "Crea los items y sus botones.",
        "Anade un click listener a cada boton.",
        "Haz toggle de una clase en el item correspondiente.",
        "Deja que CSS decida como se ve un item completado.",
      ]
    ),
    passwordStrength: createBeginnerGuide(
      "Feedback en vivo significa reaccionar mientras la persona escribe",
      "Esto no es un problema de submit. La UI debe actualizarse durante la escritura, por eso aqui importa el evento input.",
      [
        "Selecciona el input de password y el texto de feedback.",
        "Escucha el evento input.",
        "Revisa una regla simple, como la longitud actual.",
        "Actualiza el mensaje cada vez que cambie el valor.",
      ]
    ),
    passwordRules: createBeginnerGuide(
      "Revisa cada regla por separado",
      "Una checklist es mas clara que un mensaje vago porque la persona ve exactamente que ya esta bien y que sigue faltando.",
      [
        "Crea una fila visible para cada regla de password.",
        "Escucha el evento input del campo de password.",
        "Ejecuta cada comprobacion por separado, como longitud, numero y mayuscula.",
        "Actualiza cada fila por su cuenta para que el feedback sea especifico.",
      ],
      `lengthRule.classList.toggle("is-valid", value.length >= 8);\nnumberRule.classList.toggle("is-valid", /\\d/.test(value));\nupperRule.classList.toggle("is-valid", /[A-Z]/.test(value));`
    ),
    tabBasics: createBeginnerGuide(
      "Los tabs son mostrar uno y ocultar los demas",
      "La idea importante es que solo un panel de contenido debe sentirse activo a la vez.",
      [
        "Crea los botones de tab y sus paneles de contenido.",
        "Elige un panel visible al principio.",
        "En el click, oculta el panel anterior y muestra el nuevo.",
        "Mantiene la regla simple: un tab activo, un area de contenido visible.",
      ]
    ),
    restaurantTabs: createBeginnerGuide(
      "Un panel compartido mantiene el codigo de tabs mas limpio",
      "En vez de construir tres secciones completas y mostrarlas u ocultarlas todas, puedes mantener un area de salida y cambiar su contenido.",
      [
        "Crea tres botones y un area de salida compartida.",
        "Guarda el texto de About, Menu y Contact dentro de JavaScript.",
        "En el click, reemplaza el contenido del panel con la entrada correcta.",
        "Actualiza el estilo activo del boton para que la persona sepa donde esta.",
      ]
    ),
    productManager: createBeginnerGuide(
      "Este capstone son muchos patrones pequenos trabajando juntos",
      "No intentes resolver el capstone entero de un salto. Rompelo en piezas pequenas que ya conoces.",
      [
        "Construye primero la estructura HTML del formulario, filtros, feedback y lista.",
        "Haz funcionar el flujo de anadir o enviar antes de preocuparte por ordenar o filtrar.",
        "Anade luego la logica de datos: arrays, funcion render y helpers de filtro u orden.",
        "Termina con estados de reset, mensajes y acabado para que la UI se sienta completa.",
      ]
    ),
  },
};

function applyLessonGuides(language, guideMap) {
  Object.entries(guideMap).forEach(([challengeId, beginnerGuide]) => {
    lessonOverrides[language][challengeId] = {
      ...(lessonOverrides[language][challengeId] || {}),
      beginnerGuide,
    };
  });
}

applyLessonGuides("en", {
  "display-mode-announcement": beginnerGuideLibrary.en.displayBasics,
  "center-circle": beginnerGuideLibrary.en.flexCenter,
  "two-column-layout": beginnerGuideLibrary.en.flexRow,
  "flex-service-row": beginnerGuideLibrary.en.flexCards,
  "flex-wrap-chip-row": beginnerGuideLibrary.en.flexWrap,
  "profile-card": beginnerGuideLibrary.en.cardStructure,
  "simple-navbar": beginnerGuideLibrary.en.navbar,
  "hero-copy-stack": beginnerGuideLibrary.en.heroStack,
  "landing-header-capstone": beginnerGuideLibrary.en.landingHeader,
  "grid-feature-board": beginnerGuideLibrary.en.basicGrid,
  "css-grid-gallery": beginnerGuideLibrary.en.autoFitGrid,
  "responsive-card-grid": beginnerGuideLibrary.en.autoFitGrid,
  "media-query-stack-layout": beginnerGuideLibrary.en.mediaQuery,
  "fluid-container-shell": beginnerGuideLibrary.en.container,
  "dashboard-stats-layout": beginnerGuideLibrary.en.dashboardGrid,
  "polished-pricing-card": beginnerGuideLibrary.en.cssPolish,
  "gradient-hero-callout": beginnerGuideLibrary.en.gradientCallout,
  "responsive-feature-strip": beginnerGuideLibrary.en.featureStrip,
  "portfolio-section-capstone": beginnerGuideLibrary.en.portfolioGrid,
  "search-cards-layout": beginnerGuideLibrary.en.searchCards,
  "filter-products-name-price": beginnerGuideLibrary.en.multiFilter,
  "faq-toggle": beginnerGuideLibrary.en.faqToggle,
  "theme-toggle-saved": beginnerGuideLibrary.en.savedTheme,
  "counter-with-reset": beginnerGuideLibrary.en.counter,
  "password-visibility-toggle": beginnerGuideLibrary.en.passwordVisibility,
  "button-click-counter": beginnerGuideLibrary.en.clickCounter,
  "simple-form-validation": beginnerGuideLibrary.en.formValidation,
  "prevent-duplicate-items": beginnerGuideLibrary.en.duplicateItems,
  "contact-form-validation": beginnerGuideLibrary.en.contactValidation,
  "login-form-submit-object": beginnerGuideLibrary.en.formObject,
  "booking-form-reset": beginnerGuideLibrary.en.bookingFlow,
  "reservation-form-summary": beginnerGuideLibrary.en.formDataSummary,
  "form-data-preview": beginnerGuideLibrary.en.formDataPreview,
  "add-item-to-list": beginnerGuideLibrary.en.addListItem,
  "add-goal-to-list": beginnerGuideLibrary.en.addListItem,
  "remove-item-from-list": beginnerGuideLibrary.en.removeListItem,
  "remove-saved-item": beginnerGuideLibrary.en.removeWithEmptyState,
  "sort-products": beginnerGuideLibrary.en.sortArray,
  "filter-products": beginnerGuideLibrary.en.filterArray,
  "todo-complete-toggle": beginnerGuideLibrary.en.todoToggle,
  "password-strength-checker": beginnerGuideLibrary.en.passwordStrength,
  "password-rules-validation": beginnerGuideLibrary.en.passwordRules,
  "tab-switcher": beginnerGuideLibrary.en.tabBasics,
  "restaurant-tabs-panel": beginnerGuideLibrary.en.restaurantTabs,
  "product-list-manager-capstone": beginnerGuideLibrary.en.productManager,
});

applyLessonGuides("es", {
  "display-mode-announcement": beginnerGuideLibrary.es.displayBasics,
  "center-circle": beginnerGuideLibrary.es.flexCenter,
  "two-column-layout": beginnerGuideLibrary.es.flexRow,
  "flex-service-row": beginnerGuideLibrary.es.flexCards,
  "flex-wrap-chip-row": beginnerGuideLibrary.es.flexWrap,
  "profile-card": beginnerGuideLibrary.es.cardStructure,
  "simple-navbar": beginnerGuideLibrary.es.navbar,
  "hero-copy-stack": beginnerGuideLibrary.es.heroStack,
  "landing-header-capstone": beginnerGuideLibrary.es.landingHeader,
  "grid-feature-board": beginnerGuideLibrary.es.basicGrid,
  "css-grid-gallery": beginnerGuideLibrary.es.autoFitGrid,
  "responsive-card-grid": beginnerGuideLibrary.es.autoFitGrid,
  "media-query-stack-layout": beginnerGuideLibrary.es.mediaQuery,
  "fluid-container-shell": beginnerGuideLibrary.es.container,
  "dashboard-stats-layout": beginnerGuideLibrary.es.dashboardGrid,
  "polished-pricing-card": beginnerGuideLibrary.es.cssPolish,
  "gradient-hero-callout": beginnerGuideLibrary.es.gradientCallout,
  "responsive-feature-strip": beginnerGuideLibrary.es.featureStrip,
  "portfolio-section-capstone": beginnerGuideLibrary.es.portfolioGrid,
  "search-cards-layout": beginnerGuideLibrary.es.searchCards,
  "filter-products-name-price": beginnerGuideLibrary.es.multiFilter,
  "faq-toggle": beginnerGuideLibrary.es.faqToggle,
  "theme-toggle-saved": beginnerGuideLibrary.es.savedTheme,
  "counter-with-reset": beginnerGuideLibrary.es.counter,
  "password-visibility-toggle": beginnerGuideLibrary.es.passwordVisibility,
  "button-click-counter": beginnerGuideLibrary.es.clickCounter,
  "simple-form-validation": beginnerGuideLibrary.es.formValidation,
  "prevent-duplicate-items": beginnerGuideLibrary.es.duplicateItems,
  "contact-form-validation": beginnerGuideLibrary.es.contactValidation,
  "login-form-submit-object": beginnerGuideLibrary.es.formObject,
  "booking-form-reset": beginnerGuideLibrary.es.bookingFlow,
  "reservation-form-summary": beginnerGuideLibrary.es.formDataSummary,
  "form-data-preview": beginnerGuideLibrary.es.formDataPreview,
  "add-item-to-list": beginnerGuideLibrary.es.addListItem,
  "add-goal-to-list": beginnerGuideLibrary.es.addListItem,
  "remove-item-from-list": beginnerGuideLibrary.es.removeListItem,
  "remove-saved-item": beginnerGuideLibrary.es.removeWithEmptyState,
  "sort-products": beginnerGuideLibrary.es.sortArray,
  "filter-products": beginnerGuideLibrary.es.filterArray,
  "todo-complete-toggle": beginnerGuideLibrary.es.todoToggle,
  "password-strength-checker": beginnerGuideLibrary.es.passwordStrength,
  "password-rules-validation": beginnerGuideLibrary.es.passwordRules,
  "tab-switcher": beginnerGuideLibrary.es.tabBasics,
  "restaurant-tabs-panel": beginnerGuideLibrary.es.restaurantTabs,
  "product-list-manager-capstone": beginnerGuideLibrary.es.productManager,
});

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
  const override = lessonOverrides[currentLanguage]?.[challenge.id] || null;
  const existingLesson = lessonFromChallenge(challenge, currentLanguage);

  const topic = inferTopic(challenge);
  const template =
    topicTemplates[currentLanguage][topic] || topicTemplates[currentLanguage].layout;
  const levelLine = getLevelLine(challenge, currentLanguage);
  const baseLesson = existingLesson || {
    ...template,
    why: `${template.why} ${levelLine}`,
  };

  if (!override) return baseLesson;

  return {
    ...baseLesson,
    ...override,
    examples: override.examples || baseLesson.examples,
    beginnerGuide: override.beginnerGuide || baseLesson.beginnerGuide,
  };
}
