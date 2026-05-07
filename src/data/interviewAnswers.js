const interviewAnswerLibrary = [
  {
    id: "html-css",
    title: {
      en: "HTML & CSS",
      es: "HTML y CSS",
    },
    summary: {
      en: "Structure, layout, responsiveness, and the small CSS details interviewers ask all the time.",
      es: "Estructura, layout, responsive y esos detalles de CSS que suelen salir mucho en entrevistas.",
    },
    questions: [
      {
        id: "semantic-html",
        question: {
          en: "What is semantic HTML?",
          es: "Que es el HTML semantico?",
        },
        shortAnswer: {
          en: "Semantic HTML uses tags that describe the job of the content, like header, nav, main, section, and footer.",
          es: "El HTML semantico usa etiquetas que describen el trabajo del contenido, como header, nav, main, section y footer.",
        },
        easyExplanation: {
          en: "Instead of using div for everything, you choose tags that say what each part of the page really is.",
          es: "En vez de usar div para todo, eliges etiquetas que dicen que es cada parte real de la pagina.",
        },
        tinyExampleCode: `<header>\n  <nav>...</nav>\n</header>\n<main>\n  <section>...</section>\n</main>`,
        tinyExampleNote: {
          en: "The code tells the browser and other developers what each area means.",
          es: "El codigo le dice al navegador y a otras personas desarrolladoras que significa cada zona.",
        },
        interviewAnswer: {
          en: "Semantic HTML means using meaningful tags so the page is easier to read, style, maintain, and navigate with assistive technology.",
          es: "HTML semantico significa usar etiquetas con significado para que la pagina sea mas facil de leer, mantener y navegar con tecnologia asistiva.",
        },
        commonMistake: {
          en: "Thinking semantic HTML is only about SEO. It also helps accessibility, structure, and teamwork.",
          es: "Pensar que el HTML semantico solo sirve para SEO. Tambien ayuda con accesibilidad, estructura y trabajo en equipo.",
        },
      },
      {
        id: "box-model",
        question: {
          en: "What is the box model?",
          es: "Que es el box model?",
        },
        shortAnswer: {
          en: "Every element is a box made of content, padding, border, and margin.",
          es: "Cada elemento es una caja formada por contenido, padding, borde y margin.",
        },
        easyExplanation: {
          en: "The content is the thing itself, padding is the inner space, border wraps it, and margin creates outer space.",
          es: "El contenido es la parte principal, el padding es el espacio interior, el borde lo envuelve y el margin crea espacio por fuera.",
        },
        tinyExampleCode: `.card {\n  width: 280px;\n  padding: 24px;\n  border: 1px solid #d1d5db;\n  margin: 16px;\n}`,
        tinyExampleNote: {
          en: "The card gets inner space from padding and outer space from margin.",
          es: "La tarjeta gana espacio interior con padding y espacio exterior con margin.",
        },
        interviewAnswer: {
          en: "The box model explains how an element takes up space. I think about content first, then inner spacing, border, and the space around the element.",
          es: "El box model explica como un elemento ocupa espacio. Yo pienso primero en el contenido, luego en el espacio interior, el borde y el espacio alrededor del elemento.",
        },
        commonMistake: {
          en: "Mixing up padding and margin or forgetting that borders add to size when box-sizing is not border-box.",
          es: "Confundir padding con margin u olvidar que los bordes suman tamano cuando box-sizing no es border-box.",
        },
      },
      {
        id: "flexbox-vs-grid",
        question: {
          en: "What is the difference between Flexbox and Grid?",
          es: "Cual es la diferencia entre Flexbox y Grid?",
        },
        shortAnswer: {
          en: "Flexbox is great for one direction at a time. Grid is great for rows and columns together.",
          es: "Flexbox va muy bien para una direccion a la vez. Grid va muy bien para filas y columnas juntas.",
        },
        easyExplanation: {
          en: "If you are lining items up in a row or column, Flexbox is usually enough. If you are planning a layout like a board, Grid is often better.",
          es: "Si estas alineando elementos en una fila o columna, Flexbox suele bastar. Si planeas un layout como un tablero, Grid suele ser mejor.",
        },
        tinyExampleCode: `.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}`,
        tinyExampleNote: {
          en: "The nav is a row problem, while the cards area is a rows-and-columns problem.",
          es: "La navegacion es un problema de fila, mientras que la zona de tarjetas es un problema de filas y columnas.",
        },
        interviewAnswer: {
          en: "I use Flexbox for alignment in one axis and Grid for larger two-dimensional layouts. Both can be responsive, but they solve different layout jobs.",
          es: "Uso Flexbox para alineacion en un eje y Grid para layouts mas grandes en dos dimensiones. Ambos pueden ser responsive, pero resuelven trabajos distintos.",
        },
        commonMistake: {
          en: "Treating Grid as always more advanced or always better. Sometimes Flexbox is the simpler and better choice.",
          es: "Tratar Grid como si siempre fuera mas avanzado o mejor. A veces Flexbox es la opcion mas simple y mejor.",
        },
      },
      {
        id: "responsive-design",
        question: {
          en: "What is responsive design?",
          es: "Que es responsive design?",
        },
        shortAnswer: {
          en: "Responsive design means the layout adapts to different screen sizes like phones, tablets, and desktops.",
          es: "Responsive design significa que el layout se adapta a pantallas diferentes como movil, tablet y escritorio.",
        },
        easyExplanation: {
          en: "The same page should still work when the screen gets smaller or larger, not just look good on your laptop.",
          es: "La misma pagina debe seguir funcionando cuando la pantalla se hace mas pequena o mas grande, no solo verse bien en tu portatil.",
        },
        tinyExampleCode: `.container {\n  width: 90%;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n\n@media (max-width: 700px) {\n  .nav {\n    flex-direction: column;\n  }\n}`,
        tinyExampleNote: {
          en: "The container stays readable and the navigation changes shape on small screens.",
          es: "El contenedor sigue siendo legible y la navegacion cambia de forma en pantallas pequenas.",
        },
        interviewAnswer: {
          en: "Responsive design is building layouts that stay usable across screen sizes by combining flexible sizing, good spacing, and media queries when needed.",
          es: "Responsive design es construir layouts que siguen siendo utiles en distintos tamano de pantalla combinando medidas flexibles, buen espaciado y media queries cuando hacen falta.",
        },
        commonMistake: {
          en: "Only shrinking things visually without checking whether the layout is still easy to use on mobile.",
          es: "Solo encoger cosas visualmente sin comprobar si el layout sigue siendo facil de usar en movil.",
        },
      },
      {
        id: "absolute-vs-relative",
        question: {
          en: "What is position: absolute vs relative?",
          es: "Que diferencia hay entre position absolute y relative?",
        },
        shortAnswer: {
          en: "Relative keeps the element in normal flow and creates a positioning reference. Absolute removes the element from normal flow and positions it against the nearest positioned ancestor.",
          es: "Relative mantiene el elemento en el flujo normal y crea una referencia de posicionamiento. Absolute saca el elemento del flujo normal y lo posiciona contra el ancestro posicionado mas cercano.",
        },
        easyExplanation: {
          en: "You often add position: relative to the parent, then use position: absolute on a child that should sit in a specific corner.",
          es: "Muchas veces pones position: relative en el padre y luego position: absolute en un hijo que debe ir en una esquina concreta.",
        },
        tinyExampleCode: `.card {\n  position: relative;\n}\n\n.badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}`,
        tinyExampleNote: {
          en: "The badge sits in the top-right corner of the card, not the whole page.",
          es: "La insignia se coloca en la esquina superior derecha de la tarjeta, no de toda la pagina.",
        },
        interviewAnswer: {
          en: "I use relative when I want an element to stay in flow but act as a positioning anchor, and absolute when a child needs exact placement without taking up layout space.",
          es: "Uso relative cuando quiero que un elemento siga en el flujo pero actue como ancla de posicionamiento, y absolute cuando un hijo necesita una posicion exacta sin ocupar espacio del layout.",
        },
        commonMistake: {
          en: "Using absolute without a positioned parent, which makes the element jump somewhere unexpected.",
          es: "Usar absolute sin un padre posicionado, lo que hace que el elemento salte a un sitio inesperado.",
        },
      },
      {
        id: "z-index",
        question: {
          en: "What is z-index?",
          es: "Que es z-index?",
        },
        shortAnswer: {
          en: "z-index controls which positioned element appears on top when elements overlap.",
          es: "z-index controla que elemento posicionado aparece por encima cuando se solapan.",
        },
        easyExplanation: {
          en: "Think of it like layers in a stack. A bigger z-index can place one layer above another.",
          es: "Piensalo como capas en una pila. Un z-index mayor puede colocar una capa por encima de otra.",
        },
        tinyExampleCode: `.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 40;\n}\n\n.modal {\n  position: fixed;\n  z-index: 50;\n}`,
        tinyExampleNote: {
          en: "The modal should appear above its backdrop, not behind it.",
          es: "El modal debe aparecer por encima de su fondo, no por detras.",
        },
        interviewAnswer: {
          en: "z-index helps manage stacking order when positioned elements overlap, especially with menus, sticky bars, drawers, and modals.",
          es: "z-index ayuda a gestionar el orden de apilado cuando se solapan elementos posicionados, sobre todo con menus, barras sticky, drawers y modales.",
        },
        commonMistake: {
          en: "Adding huge z-index values everywhere instead of understanding the stacking context first.",
          es: "Anadir valores gigantes de z-index por todas partes en vez de entender primero el contexto de apilado.",
        },
      },
      {
        id: "box-sizing-border-box",
        question: {
          en: "Why use box-sizing: border-box?",
          es: "Por que usar box-sizing border-box?",
        },
        shortAnswer: {
          en: "border-box makes width and height include padding and border, which makes sizing easier to predict.",
          es: "border-box hace que width y height incluyan el padding y el borde, lo que vuelve el tamano mas facil de predecir.",
        },
        easyExplanation: {
          en: "Without it, a 300px card can become wider after you add padding and borders. With it, 300px stays 300px.",
          es: "Sin eso, una tarjeta de 300px puede hacerse mas ancha al anadir padding y bordes. Con eso, 300px sigue siendo 300px.",
        },
        tinyExampleCode: `* {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 300px;\n  padding: 24px;\n  border: 1px solid #d1d5db;\n}`,
        tinyExampleNote: {
          en: "The card still fits the width you expected.",
          es: "La tarjeta sigue entrando en el ancho que esperabas.",
        },
        interviewAnswer: {
          en: "I usually set box-sizing: border-box globally because it makes spacing and layout calculations much more predictable.",
          es: "Suelo poner box-sizing: border-box de forma global porque hace mucho mas predecibles los calculos de espaciado y layout.",
        },
        commonMistake: {
          en: "Forgetting it in layouts with fixed widths and then wondering why things overflow.",
          es: "Olvidarlo en layouts con anchos fijos y luego preguntarse por que aparecen desbordamientos.",
        },
      },
      {
        id: "button-vs-link",
        question: {
          en: "What is the difference between a button and a link?",
          es: "Cual es la diferencia entre un button y un link?",
        },
        shortAnswer: {
          en: "A link takes the user somewhere. A button performs an action on the current page.",
          es: "Un link lleva a la persona a otro lugar. Un button ejecuta una accion en la pagina actual.",
        },
        easyExplanation: {
          en: "If it navigates, use an anchor. If it opens a modal, submits a form, or toggles something, use a button.",
          es: "Si navega, usa un anchor. Si abre un modal, envia un formulario o hace un toggle, usa un button.",
        },
        tinyExampleCode: `<a href="/menu">Menu</a>\n<button type="button">Open menu</button>`,
        tinyExampleNote: {
          en: "These look similar, but they have different meaning and behavior.",
          es: "Se pueden ver parecidos, pero tienen distinto significado y comportamiento.",
        },
        interviewAnswer: {
          en: "I choose links for navigation and buttons for UI actions. That keeps the markup semantic and improves accessibility.",
          es: "Elijo links para navegacion y botones para acciones de interfaz. Eso mantiene el marcado semantico y mejora la accesibilidad.",
        },
        commonMistake: {
          en: "Using a div or a link for everything because it is easier to style.",
          es: "Usar un div o un link para todo porque es mas facil de estilizar.",
        },
      },
      {
        id: "max-width",
        question: {
          en: "Why do developers use max-width so often?",
          es: "Por que se usa tanto max-width?",
        },
        shortAnswer: {
          en: "max-width stops content from stretching too wide on large screens while still allowing it to shrink on smaller screens.",
          es: "max-width evita que el contenido se estire demasiado en pantallas grandes y al mismo tiempo permite que se reduzca en pantallas pequenas.",
        },
        easyExplanation: {
          en: "A paragraph that stretches across the whole screen becomes hard to read. max-width keeps it comfortable.",
          es: "Un parrafo que ocupa toda la pantalla se vuelve dificil de leer. max-width lo mantiene comodo.",
        },
        tinyExampleCode: `.container {\n  width: 90%;\n  max-width: 1100px;\n  margin: 0 auto;\n}`,
        tinyExampleNote: {
          en: "The container can shrink, but it will not become too wide.",
          es: "El contenedor puede reducirse, pero no se hara demasiado ancho.",
        },
        interviewAnswer: {
          en: "I use max-width to keep layouts readable and controlled, especially for text content, cards, and main page containers.",
          es: "Uso max-width para mantener los layouts legibles y controlados, sobre todo en texto, tarjetas y contenedores principales de pagina.",
        },
        commonMistake: {
          en: "Setting only a fixed width and making the layout break on smaller devices.",
          es: "Poner solo un ancho fijo y hacer que el layout se rompa en dispositivos pequenos.",
        },
      },
      {
        id: "overflow",
        question: {
          en: "What does overflow do in CSS?",
          es: "Que hace overflow en CSS?",
        },
        shortAnswer: {
          en: "overflow controls what happens when content is bigger than its box.",
          es: "overflow controla que pasa cuando el contenido es mas grande que su caja.",
        },
        easyExplanation: {
          en: "You can let extra content show, hide it, scroll it, or clip it depending on the design.",
          es: "Puedes dejar que el contenido extra se vea, ocultarlo, permitir scroll o recortarlo segun el diseno.",
        },
        tinyExampleCode: `.menu-list {\n  max-height: 280px;\n  overflow-y: auto;\n}`,
        tinyExampleNote: {
          en: "The list can scroll inside its own area instead of breaking the whole layout.",
          es: "La lista puede hacer scroll dentro de su propia zona en vez de romper todo el layout.",
        },
        interviewAnswer: {
          en: "I use overflow when content could exceed its container, for example in dropdowns, long lists, code blocks, or image wrappers.",
          es: "Uso overflow cuando el contenido puede superar su contenedor, por ejemplo en dropdowns, listas largas, bloques de codigo o contenedores de imagen.",
        },
        commonMistake: {
          en: "Hiding overflow to cover a layout bug instead of understanding why the content is escaping.",
          es: "Ocultar overflow para tapar un bug de layout en vez de entender por que el contenido se esta saliendo.",
        },
      },
      {
        id: "specificity",
        question: {
          en: "What is CSS specificity?",
          es: "Que es la especificidad en CSS?",
        },
        shortAnswer: {
          en: "Specificity is the rule the browser uses to decide which CSS selector wins when styles conflict.",
          es: "La especificidad es la regla que usa el navegador para decidir que selector gana cuando hay estilos en conflicto.",
        },
        easyExplanation: {
          en: "A selector like .card is weaker than something like .card .title:hover, so the more specific rule may override the simpler one.",
          es: "Un selector como .card es mas debil que algo como .card .title:hover, asi que la regla mas especifica puede sobrescribir a la simple.",
        },
        tinyExampleCode: `.card p {\n  color: #374151;\n}\n\n.card .warning {\n  color: #dc2626;\n}`,
        tinyExampleNote: {
          en: "The warning class wins for that paragraph because it is more specific.",
          es: "La clase warning gana en ese parrafo porque es mas especifica.",
        },
        interviewAnswer: {
          en: "Specificity matters when styles conflict. I try to keep selectors simple and predictable so I do not need to fight the cascade.",
          es: "La especificidad importa cuando los estilos entran en conflicto. Intento mantener selectores simples y predecibles para no pelearme con la cascada.",
        },
        commonMistake: {
          en: "Jumping straight to !important instead of fixing the selector structure.",
          es: "Ir directamente a !important en vez de arreglar la estructura de selectores.",
        },
      },
    ],
  },
  {
    id: "javascript",
    title: {
      en: "JavaScript",
      es: "JavaScript",
    },
    summary: {
      en: "The core words and patterns behind DOM work, UI changes, and real frontend logic.",
      es: "Las palabras y patrones base detras del trabajo con DOM, cambios de interfaz y logica real de frontend.",
    },
    questions: [
      {
        id: "let-const-var",
        question: {
          en: "What is the difference between let, const, and var?",
          es: "Cual es la diferencia entre let, const y var?",
        },
        shortAnswer: {
          en: "Use const by default, use let when the value must change, and avoid var in modern code.",
          es: "Usa const por defecto, usa let cuando el valor debe cambiar y evita var en codigo moderno.",
        },
        easyExplanation: {
          en: "const is for stable values, let is for values that will be updated, and var is older and more confusing because of how scope works.",
          es: "const es para valores estables, let es para valores que van a cambiar y var es mas antiguo y mas confuso por como funciona el scope.",
        },
        tinyExampleCode: `const apiUrl = "/products";\nlet count = 0;\ncount += 1;`,
        tinyExampleNote: {
          en: "The URL stays the same, but the count changes over time.",
          es: "La URL se mantiene igual, pero el contador cambia con el tiempo.",
        },
        interviewAnswer: {
          en: "In modern JavaScript I prefer const by default, switch to let when reassignment is needed, and avoid var because block scope makes code easier to reason about.",
          es: "En JavaScript moderno prefiero const por defecto, cambio a let cuando necesito reasignar y evito var porque el block scope hace el codigo mas facil de razonar.",
        },
        commonMistake: {
          en: "Thinking const means the value can never change. Objects and arrays inside const can still be mutated.",
          es: "Pensar que const significa que el valor nunca puede cambiar. Los objetos y arrays dentro de const aun pueden mutarse.",
        },
      },
      {
        id: "array",
        question: {
          en: "What is an array?",
          es: "Que es un array?",
        },
        shortAnswer: {
          en: "An array is an ordered list of values.",
          es: "Un array es una lista ordenada de valores.",
        },
        easyExplanation: {
          en: "You use an array when you have many related items, like products, tasks, or user names.",
          es: "Usas un array cuando tienes muchos elementos relacionados, como productos, tareas o nombres de usuario.",
        },
        tinyExampleCode: `const fruits = ["apple", "banana", "orange"];`,
        tinyExampleNote: {
          en: "This keeps several values together in one place.",
          es: "Esto mantiene varios valores juntos en un mismo lugar.",
        },
        interviewAnswer: {
          en: "An array stores a sequence of values and is very common for lists that we loop over, filter, map, and render in the UI.",
          es: "Un array guarda una secuencia de valores y es muy comun para listas que recorremos, filtramos, transformamos y mostramos en la interfaz.",
        },
        commonMistake: {
          en: "Using an array when the data really needs named properties, which is usually a better job for an object.",
          es: "Usar un array cuando los datos necesitan propiedades con nombre, algo que suele encajar mejor con un objeto.",
        },
      },
      {
        id: "object",
        question: {
          en: "What is an object?",
          es: "Que es un objeto?",
        },
        shortAnswer: {
          en: "An object stores related data as key-value pairs.",
          es: "Un objeto guarda datos relacionados como pares clave-valor.",
        },
        easyExplanation: {
          en: "Use an object when you want to describe one thing with named properties, like a user, a product, or a form submission.",
          es: "Usa un objeto cuando quieres describir una sola cosa con propiedades con nombre, como una persona usuaria, un producto o un envio de formulario.",
        },
        tinyExampleCode: `const user = {\n  name: "Nina",\n  email: "nina@example.com"\n};`,
        tinyExampleNote: {
          en: "Each property explains one piece of information about the same user.",
          es: "Cada propiedad explica una parte de informacion sobre la misma persona.",
        },
        interviewAnswer: {
          en: "Objects are useful when the data has named fields. They are common in APIs, form handling, state, and component props.",
          es: "Los objetos son utiles cuando los datos tienen campos con nombre. Son muy comunes en APIs, formularios, estado y props de componentes.",
        },
        commonMistake: {
          en: "Forgetting the shape of the object and trying to read a property that does not exist.",
          es: "Olvidar la forma del objeto e intentar leer una propiedad que no existe.",
        },
      },
      {
        id: "function",
        question: {
          en: "What is a function?",
          es: "Que es una funcion?",
        },
        shortAnswer: {
          en: "A function is reusable logic that can take input and produce output or perform an action.",
          es: "Una funcion es logica reutilizable que puede recibir entrada y producir salida o realizar una accion.",
        },
        easyExplanation: {
          en: "Instead of repeating the same steps again and again, you put them in a function and call it when needed.",
          es: "En vez de repetir los mismos pasos una y otra vez, los metes en una funcion y la llamas cuando haga falta.",
        },
        tinyExampleCode: `function greet(name) {\n  return "Hello, " + name;\n}`,
        tinyExampleNote: {
          en: "The function receives a value and returns a new value.",
          es: "La funcion recibe un valor y devuelve un valor nuevo.",
        },
        interviewAnswer: {
          en: "I use functions to group logic into named, reusable pieces. They help keep code easier to test, explain, and maintain.",
          es: "Uso funciones para agrupar la logica en piezas reutilizables con nombre. Ayudan a que el codigo sea mas facil de probar, explicar y mantener.",
        },
        commonMistake: {
          en: "Writing one giant function that does too many jobs at once.",
          es: "Escribir una sola funcion gigante que hace demasiados trabajos a la vez.",
        },
      },
      {
        id: "scope",
        question: {
          en: "What is scope?",
          es: "Que es scope?",
        },
        shortAnswer: {
          en: "Scope decides where a variable can be accessed.",
          es: "Scope decide desde donde se puede acceder a una variable.",
        },
        easyExplanation: {
          en: "Some variables only exist inside a function or block, while others can be reached from a wider area of the file.",
          es: "Algunas variables solo existen dentro de una funcion o bloque, mientras que otras se pueden usar desde una zona mas amplia del archivo.",
        },
        tinyExampleCode: `if (true) {\n  const message = "hello";\n}\n\n// message is not available here`,
        tinyExampleNote: {
          en: "The variable only lives inside that block.",
          es: "La variable solo vive dentro de ese bloque.",
        },
        interviewAnswer: {
          en: "Scope is about where variables live and where they can be used. Understanding scope helps prevent bugs and accidental name collisions.",
          es: "Scope trata de donde viven las variables y desde donde se pueden usar. Entenderlo ayuda a evitar bugs y choques accidentales de nombres.",
        },
        commonMistake: {
          en: "Expecting a variable created inside a function or block to be available everywhere.",
          es: "Esperar que una variable creada dentro de una funcion o bloque este disponible en todas partes.",
        },
      },
      {
        id: "event-listener",
        question: {
          en: "What is an event listener?",
          es: "Que es un event listener?",
        },
        shortAnswer: {
          en: "An event listener waits for something to happen, like a click or form submit, and then runs code.",
          es: "Un event listener espera a que ocurra algo, como un click o el envio de un formulario, y luego ejecuta codigo.",
        },
        easyExplanation: {
          en: "It is how JavaScript reacts to what the user does in the browser.",
          es: "Es la forma en la que JavaScript reacciona a lo que la persona hace en el navegador.",
        },
        tinyExampleCode: `button.addEventListener("click", () => {\n  card.classList.toggle("active");\n});`,
        tinyExampleNote: {
          en: "When the user clicks the button, the card changes state.",
          es: "Cuando la persona hace click en el boton, la tarjeta cambia de estado.",
        },
        interviewAnswer: {
          en: "Event listeners connect user actions to UI behavior. They are the basis of interactions like toggles, forms, tabs, menus, and filters.",
          es: "Los event listeners conectan las acciones del usuario con el comportamiento de la interfaz. Son la base de interacciones como toggles, formularios, tabs, menus y filtros.",
        },
        commonMistake: {
          en: "Attaching the listener to the wrong element or changing data without updating the UI.",
          es: "Poner el listener en el elemento equivocado o cambiar datos sin actualizar la interfaz.",
        },
      },
      {
        id: "dom",
        question: {
          en: "What is the DOM?",
          es: "Que es el DOM?",
        },
        shortAnswer: {
          en: "The DOM is the browser's JavaScript view of the page structure.",
          es: "El DOM es la vista en JavaScript que tiene el navegador de la estructura de la pagina.",
        },
        easyExplanation: {
          en: "It lets JavaScript find elements, change text, add classes, create new nodes, and respond to user actions.",
          es: "Permite que JavaScript encuentre elementos, cambie texto, anada clases, cree nodos nuevos y responda a acciones del usuario.",
        },
        tinyExampleCode: `const title = document.querySelector("h1");\ntitle.textContent = "New title";`,
        tinyExampleNote: {
          en: "JavaScript finds a page element and updates what the user sees.",
          es: "JavaScript encuentra un elemento de la pagina y actualiza lo que ve la persona.",
        },
        interviewAnswer: {
          en: "The DOM is the page represented as objects that JavaScript can read and update. Most frontend UI work depends on it.",
          es: "El DOM es la pagina representada como objetos que JavaScript puede leer y actualizar. Gran parte del trabajo de frontend depende de ello.",
        },
        commonMistake: {
          en: "Talking about the DOM like it is the same thing as HTML source code. It is the live structure the browser is working with.",
          es: "Hablar del DOM como si fuera lo mismo que el codigo HTML fuente. Es la estructura viva con la que trabaja el navegador.",
        },
      },
      {
        id: "map",
        question: {
          en: "What does map do?",
          es: "Que hace map?",
        },
        shortAnswer: {
          en: "map creates a new array by transforming every item in the original array.",
          es: "map crea un array nuevo transformando cada elemento del array original.",
        },
        easyExplanation: {
          en: "You keep the same number of items, but change what each item becomes.",
          es: "Mantienes la misma cantidad de elementos, pero cambias en que se convierte cada uno.",
        },
        tinyExampleCode: `const prices = [5, 8, 10];\nconst taxed = prices.map((price) => price * 1.2);`,
        tinyExampleNote: {
          en: "Each old value becomes a new one in the new array.",
          es: "Cada valor antiguo se convierte en uno nuevo dentro del nuevo array.",
        },
        interviewAnswer: {
          en: "I use map when I need to transform list data, for example to build markup, change shapes, or render React components from an array.",
          es: "Uso map cuando necesito transformar datos de una lista, por ejemplo para construir markup, cambiar la forma de los datos o renderizar componentes React desde un array.",
        },
        commonMistake: {
          en: "Using map when you are not using the returned array.",
          es: "Usar map cuando no estas usando el array devuelto.",
        },
      },
      {
        id: "filter",
        question: {
          en: "What does filter do?",
          es: "Que hace filter?",
        },
        shortAnswer: {
          en: "filter creates a new array with only the items that match a condition.",
          es: "filter crea un array nuevo solo con los elementos que cumplen una condicion.",
        },
        easyExplanation: {
          en: "It is useful when you want to keep some items and remove the rest, like a search or category filter.",
          es: "Es util cuando quieres quedarte con algunos elementos y quitar el resto, como en un buscador o filtro por categoria.",
        },
        tinyExampleCode: `const openTasks = tasks.filter((task) => !task.done);`,
        tinyExampleNote: {
          en: "Only tasks that are not done stay in the new array.",
          es: "Solo las tareas que no estan hechas se quedan en el nuevo array.",
        },
        interviewAnswer: {
          en: "I use filter to narrow lists down based on a rule, for example search text, price range, active state, or completed status.",
          es: "Uso filter para reducir listas segun una regla, por ejemplo texto de busqueda, rango de precio, estado activo o completado.",
        },
        commonMistake: {
          en: "Expecting filter to return one item instead of a new array.",
          es: "Esperar que filter devuelva un solo elemento en vez de un array nuevo.",
        },
      },
      {
        id: "find",
        question: {
          en: "What does find do?",
          es: "Que hace find?",
        },
        shortAnswer: {
          en: "find returns the first item that matches a condition.",
          es: "find devuelve el primer elemento que cumple una condicion.",
        },
        easyExplanation: {
          en: "Use it when you want one result, not a whole filtered list.",
          es: "Usalo cuando quieres un solo resultado, no toda una lista filtrada.",
        },
        tinyExampleCode: `const product = products.find((item) => item.id === 3);`,
        tinyExampleNote: {
          en: "This looks for one product with the matching id.",
          es: "Esto busca un solo producto con el id que coincide.",
        },
        interviewAnswer: {
          en: "I use find when I need one matching record, for example a selected product, user, or route item.",
          es: "Uso find cuando necesito un solo registro coincidente, por ejemplo un producto seleccionado, una persona usuaria o un item de ruta.",
        },
        commonMistake: {
          en: "Forgetting that find can return undefined when nothing matches.",
          es: "Olvidar que find puede devolver undefined cuando no hay coincidencia.",
        },
      },
      {
        id: "prevent-default",
        question: {
          en: "What does preventDefault do?",
          es: "Que hace preventDefault?",
        },
        shortAnswer: {
          en: "preventDefault stops the browser's built-in action for an event.",
          es: "preventDefault detiene la accion incorporada del navegador para un evento.",
        },
        easyExplanation: {
          en: "In forms, it stops the page from refreshing so your JavaScript can validate or handle the data first.",
          es: "En formularios, evita que la pagina se recargue para que tu JavaScript pueda validar o manejar los datos antes.",
        },
        tinyExampleCode: `form.addEventListener("submit", (event) => {\n  event.preventDefault();\n  saveForm();\n});`,
        tinyExampleNote: {
          en: "The form stays on the page and your code can control what happens next.",
          es: "El formulario se queda en la pagina y tu codigo puede controlar que pasa despues.",
        },
        interviewAnswer: {
          en: "I use preventDefault when I want custom behavior instead of the browser's default, especially with form submits and some link or button interactions.",
          es: "Uso preventDefault cuando quiero un comportamiento personalizado en vez del comportamiento por defecto del navegador, sobre todo en formularios y algunas interacciones de links o botones.",
        },
        commonMistake: {
          en: "Calling it everywhere without understanding whether the default action is actually a problem.",
          es: "Llamarlo en todas partes sin entender si la accion por defecto realmente es un problema.",
        },
      },
      {
        id: "local-storage",
        question: {
          en: "What is localStorage?",
          es: "Que es localStorage?",
        },
        shortAnswer: {
          en: "localStorage is browser storage that lets you keep small pieces of data between page reloads.",
          es: "localStorage es un almacenamiento del navegador que permite guardar pequenos datos entre recargas de pagina.",
        },
        easyExplanation: {
          en: "It is useful for things like saving a theme, a draft, favourites, or todo items in small frontend projects.",
          es: "Es util para guardar cosas como tema, borradores, favoritos o tareas en proyectos pequenos de frontend.",
        },
        tinyExampleCode: `localStorage.setItem("theme", "dark");\nconst theme = localStorage.getItem("theme");`,
        tinyExampleNote: {
          en: "The value stays there even after the tab refreshes.",
          es: "El valor sigue ahi incluso despues de refrescar la pestana.",
        },
        interviewAnswer: {
          en: "I use localStorage for small client-side persistence, but I remember that values are strings and it is not a secure place for sensitive data.",
          es: "Uso localStorage para persistencia pequena en cliente, pero recuerdo que los valores son strings y que no es un lugar seguro para datos sensibles.",
        },
        commonMistake: {
          en: "Trying to store complex data without using JSON.stringify and JSON.parse.",
          es: "Intentar guardar datos complejos sin usar JSON.stringify y JSON.parse.",
        },
      },
      {
        id: "closure",
        question: {
          en: "What is a closure?",
          es: "Que es un closure?",
        },
        shortAnswer: {
          en: "A closure is when a function remembers variables from the place where it was created.",
          es: "Un closure ocurre cuando una funcion recuerda variables del lugar donde fue creada.",
        },
        easyExplanation: {
          en: "Even after the outer function finishes, the inner function can still use those saved values.",
          es: "Incluso despues de que la funcion externa termine, la funcion interna puede seguir usando esos valores guardados.",
        },
        tinyExampleCode: `function makeCounter() {\n  let count = 0;\n\n  return function () {\n    count += 1;\n    return count;\n  };\n}`,
        tinyExampleNote: {
          en: "The inner function keeps access to count between calls.",
          es: "La funcion interna mantiene acceso a count entre llamadas.",
        },
        interviewAnswer: {
          en: "A closure happens when a function keeps access to variables from its outer scope. It is useful in callbacks, factories, and private-like state patterns.",
          es: "Un closure ocurre cuando una funcion mantiene acceso a variables de su scope externo. Es util en callbacks, factorias y patrones parecidos a estado privado.",
        },
        commonMistake: {
          en: "Treating closure like a scary advanced topic when the core idea is simply remembering outer values.",
          es: "Tratar closure como un tema raro y avanzado cuando la idea central es simplemente recordar valores externos.",
        },
      },
    ],
  },
  {
    id: "apis-async",
    title: {
      en: "APIs & Async",
      es: "APIs y asincronia",
    },
    summary: {
      en: "How data travels, why waiting exists in JavaScript, and how to explain real-world fetch flows.",
      es: "Como viajan los datos, por que existe la espera en JavaScript y como explicar flujos reales con fetch.",
    },
    questions: [
      {
        id: "api",
        question: {
          en: "What is an API?",
          es: "Que es una API?",
        },
        shortAnswer: {
          en: "An API is a way for one system to ask another system for data or actions.",
          es: "Una API es una forma de que un sistema le pida datos o acciones a otro sistema.",
        },
        easyExplanation: {
          en: "Your frontend often talks to a server through an API to get products, users, bookings, or other saved data.",
          es: "Tu frontend suele hablar con un servidor mediante una API para obtener productos, usuarios, reservas u otros datos guardados.",
        },
        tinyExampleCode: `fetch("/api/products")\n  .then((response) => response.json())\n  .then((data) => console.log(data));`,
        tinyExampleNote: {
          en: "The page asks another system for product data.",
          es: "La pagina le pide a otro sistema los datos de productos.",
        },
        interviewAnswer: {
          en: "An API is an interface between systems. In frontend work, I usually use APIs to send requests, receive data, and then render that data in the UI.",
          es: "Una API es una interfaz entre sistemas. En frontend, normalmente uso APIs para enviar peticiones, recibir datos y luego mostrar esos datos en la interfaz.",
        },
        commonMistake: {
          en: "Thinking an API is only a third-party service. Your own backend endpoints are APIs too.",
          es: "Pensar que una API solo es un servicio de terceros. Los endpoints de tu propio backend tambien son APIs.",
        },
      },
      {
        id: "promise",
        question: {
          en: "What is a promise?",
          es: "Que es una promise?",
        },
        shortAnswer: {
          en: "A promise represents a value that will be available now, later, or never if it fails.",
          es: "Una promise representa un valor que estara disponible ahora, mas tarde o nunca si falla.",
        },
        easyExplanation: {
          en: "It is JavaScript's way of saying a job is still in progress and will eventually succeed or fail.",
          es: "Es la forma de JavaScript de decir que un trabajo sigue en progreso y finalmente saldra bien o mal.",
        },
        tinyExampleCode: `fetch("/api/menu")\n  .then((response) => response.json())\n  .then((data) => console.log(data))\n  .catch((error) => console.error(error));`,
        tinyExampleNote: {
          en: "The request does not finish instantly, so it gives you a promise first.",
          es: "La peticion no termina al instante, por eso primero te da una promise.",
        },
        interviewAnswer: {
          en: "A promise models asynchronous work. It can be pending, fulfilled, or rejected, which is why we handle success and failure states in UI work.",
          es: "Una promise modela trabajo asincrono. Puede estar pendiente, cumplida o rechazada, por eso gestionamos estados de exito y error en la interfaz.",
        },
        commonMistake: {
          en: "Using async code without handling the rejected case.",
          es: "Usar codigo asincrono sin gestionar el caso rechazado.",
        },
      },
      {
        id: "async-await",
        question: {
          en: "What is async/await?",
          es: "Que es async/await?",
        },
        shortAnswer: {
          en: "async/await is a cleaner way to work with promises.",
          es: "async/await es una forma mas limpia de trabajar con promises.",
        },
        easyExplanation: {
          en: "It lets asynchronous code read more like top-to-bottom code, which is easier to follow.",
          es: "Permite que el codigo asincrono se lea mas como codigo de arriba abajo, lo que suele ser mas facil de seguir.",
        },
        tinyExampleCode: `async function loadMenu() {\n  const response = await fetch("/api/menu");\n  const data = await response.json();\n  return data;\n}`,
        tinyExampleNote: {
          en: "The code waits for each step before moving to the next one.",
          es: "El codigo espera cada paso antes de pasar al siguiente.",
        },
        interviewAnswer: {
          en: "I use async/await to make promise-based code easier to read. I still wrap risky calls in try/catch so errors are handled properly.",
          es: "Uso async/await para que el codigo basado en promises sea mas facil de leer. Aun asi envuelvo las llamadas delicadas en try/catch para manejar bien los errores.",
        },
        commonMistake: {
          en: "Thinking await blocks the whole browser. It pauses only inside that async function.",
          es: "Pensar que await bloquea todo el navegador. Solo pausa dentro de esa funcion async.",
        },
      },
      {
        id: "fetch",
        question: {
          en: "What does fetch do?",
          es: "Que hace fetch?",
        },
        shortAnswer: {
          en: "fetch sends an HTTP request and returns a promise for the response.",
          es: "fetch envia una peticion HTTP y devuelve una promise con la respuesta.",
        },
        easyExplanation: {
          en: "It is the browser tool we often use to get data from an API or send data to an API.",
          es: "Es la herramienta del navegador que solemos usar para obtener datos de una API o enviar datos a una API.",
        },
        tinyExampleCode: `const response = await fetch("/api/products");\nconst products = await response.json();`,
        tinyExampleNote: {
          en: "First you get the response, then you usually turn it into usable data.",
          es: "Primero obtienes la respuesta y luego normalmente la conviertes en datos utilizables.",
        },
        interviewAnswer: {
          en: "fetch is the native browser API for network requests. In frontend tasks I often use it with async/await, loading state, and error handling.",
          es: "fetch es la API nativa del navegador para peticiones de red. En tareas de frontend suelo usarla con async/await, estado de carga y manejo de errores.",
        },
        commonMistake: {
          en: "Forgetting that fetch does not automatically throw on every HTTP error, so you may need to check response.ok.",
          es: "Olvidar que fetch no lanza automaticamente error por cada error HTTP, por lo que a veces hay que comprobar response.ok.",
        },
      },
      {
        id: "get-vs-post",
        question: {
          en: "What is the difference between GET and POST?",
          es: "Cual es la diferencia entre GET y POST?",
        },
        shortAnswer: {
          en: "GET asks for data. POST sends data to create or submit something.",
          es: "GET pide datos. POST envia datos para crear o enviar algo.",
        },
        easyExplanation: {
          en: "If you are loading a list of movies, that is often GET. If you are sending a booking form, that is often POST.",
          es: "Si estas cargando una lista de peliculas, eso suele ser GET. Si envias un formulario de reserva, eso suele ser POST.",
        },
        tinyExampleCode: `await fetch("/api/bookings", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify(formData)\n});`,
        tinyExampleNote: {
          en: "The frontend is sending data instead of only asking for it.",
          es: "El frontend esta enviando datos en vez de solo pedirlos.",
        },
        interviewAnswer: {
          en: "I think of GET as reading data and POST as sending data to create or submit something. The exact backend rules can vary, but that is the common frontend mental model.",
          es: "Pienso en GET como leer datos y en POST como enviar datos para crear o enviar algo. Las reglas exactas del backend pueden variar, pero ese es el modelo mental habitual en frontend.",
        },
        commonMistake: {
          en: "Talking about methods without mentioning what the UI is trying to do with the data.",
          es: "Hablar de metodos sin mencionar que intenta hacer la interfaz con esos datos.",
        },
      },
      {
        id: "json",
        question: {
          en: "What is JSON?",
          es: "Que es JSON?",
        },
        shortAnswer: {
          en: "JSON is a text format for structured data.",
          es: "JSON es un formato de texto para datos estructurados.",
        },
        easyExplanation: {
          en: "It is a common way for servers and frontends to exchange objects and arrays.",
          es: "Es una forma muy comun de que servidores y frontends intercambien objetos y arrays.",
        },
        tinyExampleCode: `{\n  "name": "Pasta",\n  "price": 12\n}`,
        tinyExampleNote: {
          en: "This looks like a JavaScript object, but it is data written as text.",
          es: "Esto se parece a un objeto JavaScript, pero son datos escritos como texto.",
        },
        interviewAnswer: {
          en: "JSON is a lightweight data format used a lot in APIs. In frontend code I often parse JSON responses and sometimes stringify objects before sending them.",
          es: "JSON es un formato ligero de datos muy usado en APIs. En frontend suelo parsear respuestas JSON y a veces convertir objetos a texto antes de enviarlos.",
        },
        commonMistake: {
          en: "Forgetting that JSON is text, not a live JavaScript object yet.",
          es: "Olvidar que JSON es texto, no un objeto JavaScript vivo todavia.",
        },
      },
      {
        id: "loading-error-empty",
        question: {
          en: "What are loading, error, and empty states?",
          es: "Que son los estados de carga, error y vacio?",
        },
        shortAnswer: {
          en: "They are the main UI states around async data: waiting, failed, and no data to show.",
          es: "Son los estados principales de la interfaz alrededor de datos asincronos: esperando, fallando y sin datos para mostrar.",
        },
        easyExplanation: {
          en: "Good apps do not only handle the happy path. They also show something useful while waiting, when something fails, and when the result is empty.",
          es: "Las buenas apps no solo manejan el camino feliz. Tambien muestran algo util mientras esperan, cuando algo falla y cuando el resultado esta vacio.",
        },
        tinyExampleCode: `if (isLoading) return "Loading...";\nif (error) return "Something went wrong.";\nif (items.length === 0) return "No results found.";`,
        tinyExampleNote: {
          en: "The UI tells the user what is happening at each stage.",
          es: "La interfaz le dice a la persona que esta pasando en cada etapa.",
        },
        interviewAnswer: {
          en: "When I build API-driven UI, I try to cover loading, error, success, and empty states so the experience is clear even when the data flow is not perfect.",
          es: "Cuando construyo interfaces guiadas por API, intento cubrir estados de carga, error, exito y vacio para que la experiencia sea clara incluso cuando el flujo de datos no es perfecto.",
        },
        commonMistake: {
          en: "Only rendering the success case and leaving the user with a blank area when things go wrong.",
          es: "Renderizar solo el caso de exito y dejar a la persona con una zona vacia cuando algo falla.",
        },
      },
      {
        id: "try-catch",
        question: {
          en: "Why use try/catch with async code?",
          es: "Por que usar try/catch con codigo async?",
        },
        shortAnswer: {
          en: "try/catch lets you handle failures without crashing the whole flow.",
          es: "try/catch permite manejar fallos sin romper todo el flujo.",
        },
        easyExplanation: {
          en: "Network requests, parsing, and storage can fail. try/catch gives you a place to respond calmly.",
          es: "Las peticiones de red, el parseo y el almacenamiento pueden fallar. try/catch te da un lugar para responder con calma.",
        },
        tinyExampleCode: `try {\n  const response = await fetch("/api/profile");\n  const data = await response.json();\n} catch (error) {\n  setError("Could not load profile.");\n}`,
        tinyExampleNote: {
          en: "The code prepares for the failure path instead of ignoring it.",
          es: "El codigo se prepara para el camino de fallo en vez de ignorarlo.",
        },
        interviewAnswer: {
          en: "I use try/catch around async work when failure is possible and the UI needs a clear fallback, message, or recovery path.",
          es: "Uso try/catch alrededor del trabajo async cuando puede fallar y la interfaz necesita un fallback, mensaje o camino de recuperacion claro.",
        },
        commonMistake: {
          en: "Catching errors but not giving the user or the developer any useful feedback.",
          es: "Capturar errores pero no dar informacion util ni a la persona usuaria ni a la persona desarrolladora.",
        },
      },
    ],
  },
  {
    id: "react",
    title: {
      en: "React",
      es: "React",
    },
    summary: {
      en: "The React concepts that come up most in junior interviews and take-home assessments.",
      es: "Los conceptos de React que mas suelen aparecer en entrevistas junior y pruebas tecnicas.",
    },
    questions: [
      {
        id: "component",
        question: {
          en: "What is a component?",
          es: "Que es un componente?",
        },
        shortAnswer: {
          en: "A component is a reusable piece of UI and logic.",
          es: "Un componente es una pieza reutilizable de interfaz y logica.",
        },
        easyExplanation: {
          en: "Instead of building one giant page file, React lets you split the app into smaller parts like cards, navbars, forms, and buttons.",
          es: "En vez de construir un archivo gigante de pagina, React te deja dividir la app en partes mas pequenas como tarjetas, navbars, formularios y botones.",
        },
        tinyExampleCode: `function Button() {\n  return <button>Book now</button>;\n}`,
        tinyExampleNote: {
          en: "This is one small UI piece that can be reused.",
          es: "Esta es una pieza pequena de interfaz que se puede reutilizar.",
        },
        interviewAnswer: {
          en: "A component is a reusable unit of UI. It helps keep React apps modular, easier to reason about, and easier to maintain.",
          es: "Un componente es una unidad reutilizable de interfaz. Ayuda a que las apps de React sean modulares, faciles de razonar y de mantener.",
        },
        commonMistake: {
          en: "Making components too large and giving one component too many responsibilities.",
          es: "Hacer componentes demasiado grandes y dar demasiadas responsabilidades a uno solo.",
        },
      },
      {
        id: "props",
        question: {
          en: "What are props?",
          es: "Que son las props?",
        },
        shortAnswer: {
          en: "Props are values passed from a parent component to a child component.",
          es: "Las props son valores que un componente padre pasa a un componente hijo.",
        },
        easyExplanation: {
          en: "They let components stay reusable because the parent can change what the child shows or how it behaves.",
          es: "Permiten que los componentes sigan siendo reutilizables porque el padre puede cambiar lo que el hijo muestra o como se comporta.",
        },
        tinyExampleCode: `function UserCard({ name }) {\n  return <p>{name}</p>;\n}`,
        tinyExampleNote: {
          en: "The card does not hardcode the name. It receives it.",
          es: "La tarjeta no fija el nombre. Lo recibe.",
        },
        interviewAnswer: {
          en: "Props are how data flows into a component from the outside. They help keep components flexible and predictable.",
          es: "Las props son la manera en la que los datos entran en un componente desde fuera. Ayudan a que los componentes sean flexibles y predecibles.",
        },
        commonMistake: {
          en: "Mixing up props and state. Props come in from the parent, while state lives inside the component.",
          es: "Confundir props y state. Las props vienen del padre, mientras que el state vive dentro del componente.",
        },
      },
      {
        id: "state",
        question: {
          en: "What is state?",
          es: "Que es state?",
        },
        shortAnswer: {
          en: "State is data that can change over time and update the UI.",
          es: "State es la informacion que puede cambiar con el tiempo y actualizar la interfaz.",
        },
        easyExplanation: {
          en: "If the UI needs to remember something that changes, like input text, open tabs, filters, or counters, that is often state.",
          es: "Si la interfaz necesita recordar algo que cambia, como el texto de un input, tabs abiertas, filtros o contadores, eso suele ser state.",
        },
        tinyExampleCode: `const [count, setCount] = useState(0);`,
        tinyExampleNote: {
          en: "The count can change and React will re-render the UI.",
          es: "El contador puede cambiar y React volvera a renderizar la interfaz.",
        },
        interviewAnswer: {
          en: "State is the component's changing data. When state updates, React re-renders so the UI stays in sync with the current data.",
          es: "State es la informacion cambiante del componente. Cuando el state se actualiza, React vuelve a renderizar para que la interfaz siga sincronizada con los datos actuales.",
        },
        commonMistake: {
          en: "Putting every value in state, even when some values can be derived from existing data.",
          es: "Meter todos los valores en state, incluso cuando algunos se pueden derivar de datos que ya existen.",
        },
      },
      {
        id: "use-effect",
        question: {
          en: "What is useEffect?",
          es: "Que es useEffect?",
        },
        shortAnswer: {
          en: "useEffect runs side effects after React renders.",
          es: "useEffect ejecuta efectos secundarios despues de que React renderiza.",
        },
        easyExplanation: {
          en: "You use it for work that touches the outside world, like fetching data, listening to events, or syncing something after render.",
          es: "Lo usas para trabajo que toca el mundo exterior, como pedir datos, escuchar eventos o sincronizar algo despues del render.",
        },
        tinyExampleCode: `useEffect(() => {\n  fetchProducts();\n}, []);`,
        tinyExampleNote: {
          en: "This runs after the first render to load data.",
          es: "Esto se ejecuta despues del primer render para cargar datos.",
        },
        interviewAnswer: {
          en: "I use useEffect for side effects such as data fetching, subscriptions, or browser APIs. I try not to use it for values that can be derived during render.",
          es: "Uso useEffect para efectos secundarios como peticiones de datos, suscripciones o APIs del navegador. Intento no usarlo para valores que se pueden derivar durante el render.",
        },
        commonMistake: {
          en: "Using useEffect for ordinary calculations that do not need to happen after render.",
          es: "Usar useEffect para calculos normales que no necesitan ocurrir despues del render.",
        },
      },
      {
        id: "keys",
        question: {
          en: "Why do lists need keys in React?",
          es: "Por que las listas necesitan keys en React?",
        },
        shortAnswer: {
          en: "Keys help React track which item is which when a list changes.",
          es: "Las keys ayudan a React a seguir que elemento es cual cuando una lista cambia.",
        },
        easyExplanation: {
          en: "When items move, get added, or get removed, keys help React update the right parts instead of guessing badly.",
          es: "Cuando los elementos se mueven, se anaden o se eliminan, las keys ayudan a React a actualizar las partes correctas en vez de adivinar mal.",
        },
        tinyExampleCode: `items.map((item) => <li key={item.id}>{item.name}</li>)`,
        tinyExampleNote: {
          en: "The id gives each list item a stable identity.",
          es: "El id le da a cada elemento de la lista una identidad estable.",
        },
        interviewAnswer: {
          en: "Keys give list items stable identity so React can reconcile updates correctly. Good keys usually come from real unique ids.",
          es: "Las keys dan identidad estable a los elementos de una lista para que React pueda reconciliar bien las actualizaciones. Las buenas keys suelen venir de ids unicos reales.",
        },
        commonMistake: {
          en: "Using the array index as the first choice even when a stable id exists.",
          es: "Usar el indice del array como primera opcion aunque exista un id estable.",
        },
      },
      {
        id: "conditional-rendering",
        question: {
          en: "What is conditional rendering?",
          es: "Que es conditional rendering?",
        },
        shortAnswer: {
          en: "Conditional rendering means showing different UI based on a condition.",
          es: "Conditional rendering significa mostrar una interfaz diferente segun una condicion.",
        },
        easyExplanation: {
          en: "If the user is logged in, show the dashboard. If not, show the login form. The data decides what appears.",
          es: "Si la persona ha iniciado sesion, muestra el panel. Si no, muestra el formulario de acceso. Los datos deciden que aparece.",
        },
        tinyExampleCode: `{isLoggedIn ? <Dashboard /> : <Login />}`,
        tinyExampleNote: {
          en: "The UI changes depending on the current state.",
          es: "La interfaz cambia segun el estado actual.",
        },
        interviewAnswer: {
          en: "Conditional rendering lets the UI respond to data and state, which is important for loading states, auth, errors, empty results, and feature toggles.",
          es: "Conditional rendering permite que la interfaz responda a los datos y al estado, algo importante para cargas, autenticacion, errores, resultados vacios y feature toggles.",
        },
        commonMistake: {
          en: "Making the conditions so messy that the component becomes hard to read.",
          es: "Hacer las condiciones tan enredadas que el componente se vuelve dificil de leer.",
        },
      },
      {
        id: "controlled-input",
        question: {
          en: "What is a controlled input?",
          es: "Que es un controlled input?",
        },
        shortAnswer: {
          en: "A controlled input is an input whose value is managed by React state.",
          es: "Un controlled input es un input cuyo valor esta controlado por el state de React.",
        },
        easyExplanation: {
          en: "The input shows the value from state, and onChange updates that state, so React stays in charge.",
          es: "El input muestra el valor del state y onChange actualiza ese state, asi que React mantiene el control.",
        },
        tinyExampleCode: `const [name, setName] = useState("");\n<input value={name} onChange={(event) => setName(event.target.value)} />`,
        tinyExampleNote: {
          en: "The input and the state always stay in sync.",
          es: "El input y el state se mantienen siempre sincronizados.",
        },
        interviewAnswer: {
          en: "Controlled inputs make form state predictable because React owns the current value. That helps with validation, previews, and conditional form logic.",
          es: "Los controlled inputs hacen que el estado del formulario sea predecible porque React posee el valor actual. Eso ayuda con validacion, previews y logica condicional del formulario.",
        },
        commonMistake: {
          en: "Forgetting to update state on change, which makes the input feel broken.",
          es: "Olvidar actualizar el state al cambiar, lo que hace que el input parezca roto.",
        },
      },
      {
        id: "lifting-state",
        question: {
          en: "What does lifting state up mean?",
          es: "Que significa lifting state up?",
        },
        shortAnswer: {
          en: "Lifting state up means moving shared state to the closest common parent.",
          es: "Lifting state up significa mover el state compartido al padre comun mas cercano.",
        },
        easyExplanation: {
          en: "If two children need the same data, the parent often becomes the best place to store it and pass it down.",
          es: "Si dos hijos necesitan los mismos datos, el padre suele ser el mejor lugar para guardarlos y pasarlos hacia abajo.",
        },
        tinyExampleCode: `function App() {\n  const [activeTab, setActiveTab] = useState("about");\n  return <Tabs activeTab={activeTab} onChange={setActiveTab} />;\n}`,
        tinyExampleNote: {
          en: "The parent owns the shared data and passes it to children.",
          es: "El padre posee los datos compartidos y se los pasa a los hijos.",
        },
        interviewAnswer: {
          en: "I lift state up when multiple components need the same source of truth. That keeps data flow clearer and avoids duplicated state.",
          es: "Hago lifting state up cuando varios componentes necesitan la misma fuente de verdad. Eso mantiene mas claro el flujo de datos y evita duplicar state.",
        },
        commonMistake: {
          en: "Keeping separate copies of the same state in several children.",
          es: "Mantener copias separadas del mismo state en varios hijos.",
        },
      },
      {
        id: "where-state-lives",
        question: {
          en: "Where should state live?",
          es: "Donde deberia vivir el state?",
        },
        shortAnswer: {
          en: "State should live in the closest place that needs to control it.",
          es: "El state deberia vivir en el lugar mas cercano que necesite controlarlo.",
        },
        easyExplanation: {
          en: "If only one small component needs the data, keep it local. If several parts need it, move it higher.",
          es: "Si solo un componente pequeno necesita los datos, dejalos locales. Si varias partes los necesitan, subelos.",
        },
        tinyExampleCode: `// local state for one form field\nconst [email, setEmail] = useState("");`,
        tinyExampleNote: {
          en: "Not every bit of data needs to be global.",
          es: "No todos los datos necesitan ser globales.",
        },
        interviewAnswer: {
          en: "I try to keep state as close as possible to where it is used, and only move it up when more components need to read or update it.",
          es: "Intento mantener el state lo mas cerca posible de donde se usa y solo lo subo cuando mas componentes necesitan leerlo o actualizarlo.",
        },
        commonMistake: {
          en: "Moving state too high too early and making the app harder to follow.",
          es: "Subir el state demasiado pronto y volver la app mas dificil de seguir.",
        },
      },
      {
        id: "react-router",
        question: {
          en: "What is React Router?",
          es: "Que es React Router?",
        },
        shortAnswer: {
          en: "React Router handles client-side navigation between views in a React app.",
          es: "React Router maneja la navegacion en cliente entre vistas dentro de una app React.",
        },
        easyExplanation: {
          en: "It lets you create page-like experiences such as Home, About, Product Details, or Dashboard without a full browser refresh.",
          es: "Permite crear experiencias tipo pagina como Home, About, Product Details o Dashboard sin una recarga completa del navegador.",
        },
        tinyExampleCode: `<Route path="/" element={<Home />} />\n<Route path="/products/:id" element={<ProductDetails />} />`,
        tinyExampleNote: {
          en: "Different URLs render different components inside the same app.",
          es: "Diferentes URLs renderizan distintos componentes dentro de la misma app.",
        },
        interviewAnswer: {
          en: "React Router manages routes, links, and navigation in React single-page apps. I use it for page structure, nested views, and dynamic route params.",
          es: "React Router gestiona rutas, links y navegacion en apps React de una sola pagina. Lo uso para estructura de paginas, vistas anidadas y parametros dinamicos de ruta.",
        },
        commonMistake: {
          en: "Thinking routing is only about links and forgetting route params, fallback routes, and active navigation states.",
          es: "Pensar que routing solo son links y olvidar parametros de ruta, rutas fallback y estados de navegacion activa.",
        },
      },
    ],
  },
  {
    id: "typescript",
    title: {
      en: "TypeScript",
      es: "TypeScript",
    },
    summary: {
      en: "Short answers for the typed React habits many junior roles now expect.",
      es: "Respuestas cortas para los habitos de React tipado que hoy esperan muchos puestos junior.",
    },
    questions: [
      {
        id: "typescript-what-is",
        question: {
          en: "What is TypeScript?",
          es: "Que es TypeScript?",
        },
        shortAnswer: {
          en: "TypeScript is JavaScript plus a type system.",
          es: "TypeScript es JavaScript con un sistema de tipos.",
        },
        easyExplanation: {
          en: "You still write frontend code much like JavaScript, but now you can describe what shape your data should have before the app runs.",
          es: "Sigues escribiendo frontend parecido a JavaScript, pero ahora puedes describir que forma deben tener los datos antes de que la app se ejecute.",
        },
        tinyExampleCode: `type User = {\n  name: string;\n  score: number;\n};`,
        tinyExampleNote: {
          en: "The type describes what the data should look like.",
          es: "El tipo describe como deberian verse los datos.",
        },
        interviewAnswer: {
          en: "TypeScript is JavaScript with static typing. I use it to make props, state, API data, and function inputs safer and easier to understand.",
          es: "TypeScript es JavaScript con tipado estatico. Lo uso para hacer mas seguros y mas faciles de entender props, state, datos de API y entradas de funciones.",
        },
        commonMistake: {
          en: "Thinking TypeScript changes how the browser runs your app. It helps before runtime, mainly during development.",
          es: "Pensar que TypeScript cambia como el navegador ejecuta la app. Ayuda antes del runtime, sobre todo durante el desarrollo.",
        },
      },
      {
        id: "typescript-why-use",
        question: {
          en: "Why do teams use TypeScript in frontend projects?",
          es: "Por que los equipos usan TypeScript en proyectos frontend?",
        },
        shortAnswer: {
          en: "Teams use TypeScript to catch mistakes earlier and make code easier to understand as the app grows.",
          es: "Los equipos usan TypeScript para detectar errores antes y hacer que el codigo sea mas facil de entender cuando la app crece.",
        },
        easyExplanation: {
          en: "It helps you notice missing fields, wrong value types, and unclear function inputs before the bug reaches the browser.",
          es: "Ayuda a notar campos ausentes, tipos de valor incorrectos y entradas de funciones poco claras antes de que el bug llegue al navegador.",
        },
        tinyExampleCode: `function UserCard({ name }: { name: string }) {\n  return <p>{name}</p>;\n}`,
        tinyExampleNote: {
          en: "The component now makes its expectations very clear.",
          es: "Ahora el componente deja muy claras sus expectativas.",
        },
        interviewAnswer: {
          en: "Teams use TypeScript because it improves confidence in larger codebases. It makes component contracts, API shapes, and refactors much safer.",
          es: "Los equipos usan TypeScript porque mejora la confianza en bases de codigo grandes. Hace mucho mas seguros los contratos de componentes, las formas de API y los refactors.",
        },
        commonMistake: {
          en: "Saying TypeScript removes every bug. It reduces many common bugs, but it does not replace testing or careful thinking.",
          es: "Decir que TypeScript elimina todos los bugs. Reduce muchos errores comunes, pero no sustituye al testing ni al pensamiento cuidadoso.",
        },
      },
      {
        id: "type-vs-interface",
        question: {
          en: "What is the difference between a type and an interface?",
          es: "Cual es la diferencia entre un type y una interface?",
        },
        shortAnswer: {
          en: "Both can describe shapes. Interfaces are often used for object shapes, while type aliases are also great for unions and more flexible combinations.",
          es: "Ambos pueden describir formas. Las interfaces suelen usarse para formas de objeto, mientras que los type aliases tambien van muy bien para unions y combinaciones mas flexibles.",
        },
        easyExplanation: {
          en: "In many React apps they can look similar, but type is especially handy when the type is not just one plain object.",
          es: "En muchas apps React pueden parecerse, pero type es especialmente util cuando el tipo no es solo un objeto simple.",
        },
        tinyExampleCode: `interface User {\n  name: string;\n}\n\ntype Status = "draft" | "ready";`,
        tinyExampleNote: {
          en: "The interface models an object, while the type alias models a union.",
          es: "La interface modela un objeto, mientras que el type alias modela una union.",
        },
        interviewAnswer: {
          en: "I use both. Interfaces are great for reusable object shapes, and type aliases are especially useful for unions, mapped types, and more custom combinations.",
          es: "Uso ambos. Las interfaces van muy bien para formas de objeto reutilizables y los type aliases son especialmente utiles para unions, mapped types y combinaciones mas personalizadas.",
        },
        commonMistake: {
          en: "Treating them like enemies. In most frontend work, the important part is choosing a clear shape and using it consistently.",
          es: "Tratarlos como enemigos. En la mayor parte del frontend, lo importante es elegir una forma clara y usarla con consistencia.",
        },
      },
      {
        id: "union-type",
        question: {
          en: "What is a union type?",
          es: "Que es un union type?",
        },
        shortAnswer: {
          en: "A union type lets a value be one of a few allowed options.",
          es: "Un union type permite que un valor sea una de varias opciones permitidas.",
        },
        easyExplanation: {
          en: "It is useful when a value should stay inside a small safe set, like loading, success, or error.",
          es: "Es util cuando un valor debe mantenerse dentro de un conjunto pequeno y seguro, como loading, success o error.",
        },
        tinyExampleCode: `type Status = "idle" | "loading" | "error";`,
        tinyExampleNote: {
          en: "Now the value cannot become any random string.",
          es: "Ahora el valor no puede convertirse en cualquier string aleatorio.",
        },
        interviewAnswer: {
          en: "A union type limits a value to specific options. I use it for UI states, filters, tab ids, and other values that should stay predictable.",
          es: "Un union type limita un valor a opciones concretas. Lo uso para estados de UI, filtros, ids de tabs y otros valores que deben seguir siendo predecibles.",
        },
        commonMistake: {
          en: "Using plain string everywhere when the value should really be one of only a few known options.",
          es: "Usar string plano en todas partes cuando el valor en realidad deberia ser una de unas pocas opciones conocidas.",
        },
      },
      {
        id: "optional-property",
        question: {
          en: "What is an optional property?",
          es: "Que es una propiedad opcional?",
        },
        shortAnswer: {
          en: "An optional property is a field that may exist, but is not guaranteed to be present.",
          es: "Una propiedad opcional es un campo que puede existir, pero no esta garantizado.",
        },
        easyExplanation: {
          en: "Some users, products, or API responses have extra fields, and others do not. Optional properties describe that honestly.",
          es: "Algunos usuarios, productos o respuestas de API traen campos extra y otros no. Las propiedades opcionales describen eso con honestidad.",
        },
        tinyExampleCode: `interface User {\n  name: string;\n  bio?: string;\n}`,
        tinyExampleNote: {
          en: "The bio might exist, but the UI should not assume it always does.",
          es: "La bio puede existir, pero la UI no deberia asumir que siempre esta.",
        },
        interviewAnswer: {
          en: "An optional property models data that is sometimes missing. In the UI, that usually means I need a conditional render or a safe fallback.",
          es: "Una propiedad opcional modela datos que a veces faltan. En la UI, eso normalmente significa que necesito un render condicional o un fallback seguro.",
        },
        commonMistake: {
          en: "Trying to render an optional field without checking whether it exists first.",
          es: "Intentar renderizar un campo opcional sin comprobar antes si existe.",
        },
      },
      {
        id: "typed-props",
        question: {
          en: "How do you type React props?",
          es: "Como tipas las props de React?",
        },
        shortAnswer: {
          en: "You define the shape of the props with a type or interface, then apply that shape to the component.",
          es: "Defines la forma de las props con un type o una interface y luego aplicas esa forma al componente.",
        },
        easyExplanation: {
          en: "The component says what values it expects, like name, price, or onSave, and TypeScript checks that the parent sends the right data.",
          es: "El componente dice que valores espera, como name, price u onSave, y TypeScript comprueba que el padre envie los datos correctos.",
        },
        tinyExampleCode: `interface CardProps {\n  title: string;\n}\n\nfunction Card({ title }: CardProps) {\n  return <h2>{title}</h2>;\n}`,
        tinyExampleNote: {
          en: "The component contract is now visible in one place.",
          es: "El contrato del componente ahora es visible en un solo lugar.",
        },
        interviewAnswer: {
          en: "I usually create a type or interface for the props and use it in the component signature. That makes reusable components safer and easier to read.",
          es: "Normalmente creo un type o una interface para las props y la uso en la firma del componente. Eso hace que los componentes reutilizables sean mas seguros y faciles de leer.",
        },
        commonMistake: {
          en: "Typing the data object somewhere else but forgetting to type the actual component props.",
          es: "Tipar el objeto de datos en otro sitio pero olvidar tipar las props reales del componente.",
        },
      },
      {
        id: "type-narrowing",
        question: {
          en: "What is type narrowing?",
          es: "Que es el type narrowing?",
        },
        shortAnswer: {
          en: "Type narrowing is when TypeScript learns a more specific type after a check.",
          es: "El type narrowing ocurre cuando TypeScript aprende un tipo mas especifico despues de una comprobacion.",
        },
        easyExplanation: {
          en: "If a value could be more than one thing, checks like typeof or in help TypeScript understand what it safely is at that moment.",
          es: "Si un valor puede ser mas de una cosa, comprobaciones como typeof o in ayudan a TypeScript a entender que es con seguridad en ese momento.",
        },
        tinyExampleCode: `if (typeof value === "string") {\n  console.log(value.toUpperCase());\n}`,
        tinyExampleNote: {
          en: "Inside the if block, TypeScript now knows value is a string.",
          es: "Dentro del bloque if, TypeScript ya sabe que value es un string.",
        },
        interviewAnswer: {
          en: "Narrowing is how I make TypeScript safer around unknown or mixed values. I check the value first, then use only the fields or methods that are valid for that narrower type.",
          es: "El narrowing es como hago que TypeScript sea mas seguro alrededor de valores desconocidos o mezclados. Primero compruebo el valor y luego uso solo los campos o metodos validos para ese tipo mas concreto.",
        },
        commonMistake: {
          en: "Skipping the check and forcing the value with an unsafe cast instead.",
          es: "Saltarse la comprobacion y forzar el valor con un cast inseguro.",
        },
      },
      {
        id: "typed-events",
        question: {
          en: "How do typed events help in React forms and buttons?",
          es: "Como ayudan los eventos tipados en formularios y botones de React?",
        },
        shortAnswer: {
          en: "Typed events tell you what element triggered the event, so reading values and preventing mistakes gets easier.",
          es: "Los eventos tipados te dicen que elemento disparo el evento, asi que leer valores y evitar errores se vuelve mas facil.",
        },
        easyExplanation: {
          en: "A typed submit or change event gives you safer access to the event object instead of guessing what is inside it.",
          es: "Un evento submit o change tipado te da acceso mas seguro al objeto event en lugar de adivinar que hay dentro.",
        },
        tinyExampleCode: `function handleChange(event: React.ChangeEvent<HTMLInputElement>) {\n  setName(event.target.value);\n}`,
        tinyExampleNote: {
          en: "TypeScript now knows the target is an input element.",
          es: "Ahora TypeScript sabe que el target es un elemento input.",
        },
        interviewAnswer: {
          en: "Typed events make forms and interactions clearer because I know what element fired the event and which properties are safe to use.",
          es: "Los eventos tipados hacen que formularios e interacciones sean mas claros porque se que elemento disparo el evento y que propiedades es seguro usar.",
        },
        commonMistake: {
          en: "Leaving every event untyped and then fighting the event object later.",
          es: "Dejar todos los eventos sin tipar y luego pelearse con el objeto event mas tarde.",
        },
      },
    ],
  },
  {
    id: "testing",
    title: {
      en: "Testing",
      es: "Testing",
    },
    summary: {
      en: "Short answers for behavior-driven testing, form checks, and async UI confidence.",
      es: "Respuestas cortas para testing guiado por comportamiento, comprobaciones de formularios y confianza con interfaces async.",
    },
    questions: [
      {
        id: "unit-test",
        question: {
          en: "What is a unit test?",
          es: "Que es un unit test?",
        },
        shortAnswer: {
          en: "A unit test checks one small piece of logic or behavior in isolation.",
          es: "Un unit test comprueba una pieza pequena de logica o comportamiento de forma aislada.",
        },
        easyExplanation: {
          en: "It focuses on one part at a time so you can catch bugs early and change code with more confidence.",
          es: "Se centra en una parte cada vez para detectar bugs antes y cambiar codigo con mas confianza.",
        },
        tinyExampleCode: `expect(formatPrice(12)).toBe("$12.00");`,
        tinyExampleNote: {
          en: "The test checks one small function and one expected result.",
          es: "La prueba comprueba una funcion pequena y un resultado esperado.",
        },
        interviewAnswer: {
          en: "A unit test verifies a small unit of code, such as a function or component behavior, so regressions are easier to catch.",
          es: "Un unit test verifica una unidad pequena de codigo, como una funcion o el comportamiento de un componente, para detectar regresiones con mas facilidad.",
        },
        commonMistake: {
          en: "Writing tests that try to cover too many unrelated behaviors at once.",
          es: "Escribir pruebas que intentan cubrir demasiados comportamientos no relacionados al mismo tiempo.",
        },
      },
      {
        id: "react-testing-library",
        question: {
          en: "What is React Testing Library?",
          es: "Que es React Testing Library?",
        },
        shortAnswer: {
          en: "React Testing Library is a tool for testing React components through what the user sees and does.",
          es: "React Testing Library es una herramienta para probar componentes React a traves de lo que la persona ve y hace.",
        },
        easyExplanation: {
          en: "It encourages you to test the UI the way a real user would use it, instead of poking at internal component details.",
          es: "Te anima a probar la interfaz como la usaria una persona real, en vez de tocar detalles internos del componente.",
        },
        tinyExampleCode: `render(<LoginForm />);\nfireEvent.click(screen.getByRole("button", { name: /submit/i }));`,
        tinyExampleNote: {
          en: "The test interacts with the component like a user would.",
          es: "La prueba interactua con el componente como lo haria una persona usuaria.",
        },
        interviewAnswer: {
          en: "React Testing Library helps me test components from the user's point of view by rendering them and interacting with visible output.",
          es: "React Testing Library me ayuda a probar componentes desde el punto de vista de la persona usuaria renderizandolos e interactuando con la salida visible.",
        },
        commonMistake: {
          en: "Testing internal implementation details instead of real behavior.",
          es: "Probar detalles internos de implementacion en vez del comportamiento real.",
        },
      },
      {
        id: "behavior-over-implementation",
        question: {
          en: "Why test behavior instead of implementation details?",
          es: "Por que probar comportamiento en vez de detalles de implementacion?",
        },
        shortAnswer: {
          en: "Behavior-based tests are more stable because they focus on what the user experiences.",
          es: "Las pruebas basadas en comportamiento son mas estables porque se centran en lo que experimenta la persona usuaria.",
        },
        easyExplanation: {
          en: "If you rename a variable or refactor internal code, the user experience may stay the same. Good tests should survive that.",
          es: "Si renombras una variable o refactorizas codigo interno, la experiencia de usuario puede seguir igual. Las buenas pruebas deberian sobrevivir a eso.",
        },
        tinyExampleCode: `expect(screen.getByText("Saved"))\n  .toBeInTheDocument();`,
        tinyExampleNote: {
          en: "The test cares about visible feedback, not how the component stored it.",
          es: "La prueba se fija en el feedback visible, no en como lo guardo el componente.",
        },
        interviewAnswer: {
          en: "I prefer behavior-focused tests because they better reflect user value and they break less when I refactor internals.",
          es: "Prefiero pruebas centradas en comportamiento porque reflejan mejor el valor para la persona usuaria y se rompen menos cuando refactorizo internals.",
        },
        commonMistake: {
          en: "Writing fragile tests that only pass if the component is built in one exact way.",
          es: "Escribir pruebas fragiles que solo pasan si el componente esta construido de una forma exacta.",
        },
      },
      {
        id: "form-validation-tests",
        question: {
          en: "What should you test in a form?",
          es: "Que deberias probar en un formulario?",
        },
        shortAnswer: {
          en: "Test valid input, invalid input, error messages, submit behavior, and success feedback.",
          es: "Prueba entrada valida, entrada invalida, mensajes de error, comportamiento de envio y feedback de exito.",
        },
        easyExplanation: {
          en: "Forms often fail at the edges, so you want to check what happens when fields are empty, wrong, or correct.",
          es: "Los formularios suelen fallar en los bordes, asi que conviene comprobar que pasa cuando los campos estan vacios, mal o correctos.",
        },
        tinyExampleCode: `fireEvent.click(screen.getByRole("button", { name: /submit/i }));\nexpect(screen.getByText(/email is required/i)).toBeInTheDocument();`,
        tinyExampleNote: {
          en: "The test checks the validation message that the user should see.",
          es: "La prueba comprueba el mensaje de validacion que la persona deberia ver.",
        },
        interviewAnswer: {
          en: "In forms I usually test validation, blocked submits, successful submits, cleared errors, and any visible feedback the user depends on.",
          es: "En formularios suelo probar validacion, envios bloqueados, envios correctos, limpieza de errores y cualquier feedback visible del que dependa la persona usuaria.",
        },
        commonMistake: {
          en: "Only testing the happy path and ignoring invalid states.",
          es: "Probar solo el camino feliz e ignorar los estados invalidos.",
        },
      },
      {
        id: "loading-error-tests",
        question: {
          en: "What should you test in async UI?",
          es: "Que deberias probar en una interfaz async?",
        },
        shortAnswer: {
          en: "Test the loading state, the success state, and the error state.",
          es: "Prueba el estado de carga, el estado de exito y el estado de error.",
        },
        easyExplanation: {
          en: "Async UI is not just about the final data. It also needs to behave well while waiting and when something goes wrong.",
          es: "Una interfaz async no trata solo del dato final. Tambien debe comportarse bien mientras espera y cuando algo sale mal.",
        },
        tinyExampleCode: `expect(screen.getByText(/loading/i)).toBeInTheDocument();\nawait waitFor(() => expect(screen.getByText("Pasta")).toBeInTheDocument());`,
        tinyExampleNote: {
          en: "The test confirms both the waiting stage and the final rendered result.",
          es: "La prueba confirma tanto la etapa de espera como el resultado final renderizado.",
        },
        interviewAnswer: {
          en: "When testing async UI, I want confidence that users see the right feedback while waiting, after success, and after failures.",
          es: "Cuando pruebo interfaces async, quiero confianza en que las personas ven el feedback correcto mientras esperan, despues del exito y despues de los fallos.",
        },
        commonMistake: {
          en: "Waiting only for success and never testing the error path.",
          es: "Esperar solo el exito y no probar nunca el camino de error.",
        },
      },
    ],
  },
  {
    id: "accessibility",
    title: {
      en: "Accessibility",
      es: "Accesibilidad",
    },
    summary: {
      en: "The practical accessibility basics juniors should be able to explain and apply.",
      es: "Las bases practicas de accesibilidad que una persona junior deberia poder explicar y aplicar.",
    },
    questions: [
      {
        id: "keyboard-navigation",
        question: {
          en: "What does keyboard navigation mean?",
          es: "Que significa navegacion por teclado?",
        },
        shortAnswer: {
          en: "Keyboard navigation means people can use the interface without a mouse.",
          es: "La navegacion por teclado significa que las personas pueden usar la interfaz sin raton.",
        },
        easyExplanation: {
          en: "Users should be able to move, activate, and understand the UI with keys like Tab, Enter, Space, and Escape.",
          es: "Las personas deberian poder moverse, activar y entender la interfaz con teclas como Tab, Enter, Space y Escape.",
        },
        tinyExampleCode: `<button type="button">Open menu</button>`,
        tinyExampleNote: {
          en: "A real button already supports keyboard interaction better than a plain div.",
          es: "Un boton real ya soporta mejor la interaccion por teclado que un simple div.",
        },
        interviewAnswer: {
          en: "Keyboard navigation matters because not everyone uses a mouse. I try to build components that can be reached and operated with standard keyboard behavior.",
          es: "La navegacion por teclado importa porque no todo el mundo usa raton. Intento construir componentes a los que se pueda llegar y operar con comportamiento estandar de teclado.",
        },
        commonMistake: {
          en: "Only clicking through the UI with a mouse and never testing Tab order.",
          es: "Recorrer la interfaz solo con raton y no probar nunca el orden de Tab.",
        },
      },
      {
        id: "focus-states",
        question: {
          en: "Why are focus states important?",
          es: "Por que son importantes los focus states?",
        },
        shortAnswer: {
          en: "Focus states show keyboard users where they are on the page.",
          es: "Los focus states muestran a las personas que usan teclado donde estan en la pagina.",
        },
        easyExplanation: {
          en: "If the focus ring disappears, users can get lost because they cannot see which element is active.",
          es: "Si el focus ring desaparece, la persona puede perderse porque no ve que elemento esta activo.",
        },
        tinyExampleCode: `.button:focus-visible {\n  outline: 3px solid #2563eb;\n  outline-offset: 3px;\n}`,
        tinyExampleNote: {
          en: "The focused element becomes obvious to the user.",
          es: "El elemento enfocado se vuelve evidente para la persona.",
        },
        interviewAnswer: {
          en: "Visible focus is a basic accessibility requirement because keyboard users need a clear indicator of their current position.",
          es: "El focus visible es un requisito basico de accesibilidad porque las personas que usan teclado necesitan un indicador claro de su posicion actual.",
        },
        commonMistake: {
          en: "Removing outlines for visual reasons without adding an accessible replacement.",
          es: "Quitar los outlines por razones visuales sin anadir una alternativa accesible.",
        },
      },
      {
        id: "aria",
        question: {
          en: "When should you use ARIA?",
          es: "Cuando deberias usar ARIA?",
        },
        shortAnswer: {
          en: "Use ARIA when native HTML alone cannot express the meaning or state you need.",
          es: "Usa ARIA cuando el HTML nativo por si solo no puede expresar el significado o estado que necesitas.",
        },
        easyExplanation: {
          en: "Good HTML comes first. ARIA helps after that, especially for custom widgets like modals, tabs, or accordions.",
          es: "El buen HTML va primero. ARIA ayuda despues, sobre todo en widgets personalizados como modales, tabs o acordeones.",
        },
        tinyExampleCode: `<button aria-expanded="false" aria-controls="menu-panel">Menu</button>`,
        tinyExampleNote: {
          en: "The button exposes extra state information to assistive technology.",
          es: "El boton expone informacion extra de estado a la tecnologia asistiva.",
        },
        interviewAnswer: {
          en: "I use ARIA to add missing meaning or state when native HTML is not enough, but I try not to replace semantic HTML with ARIA unnecessarily.",
          es: "Uso ARIA para anadir significado o estado cuando el HTML nativo no es suficiente, pero intento no reemplazar HTML semantico con ARIA sin necesidad.",
        },
        commonMistake: {
          en: "Using ARIA everywhere instead of starting with the correct native element.",
          es: "Usar ARIA en todas partes en vez de empezar por el elemento nativo correcto.",
        },
      },
      {
        id: "accessible-forms",
        question: {
          en: "What makes a form accessible?",
          es: "Que hace accesible a un formulario?",
        },
        shortAnswer: {
          en: "Accessible forms have clear labels, usable error messages, keyboard support, and understandable structure.",
          es: "Los formularios accesibles tienen labels claras, mensajes de error utiles, soporte de teclado y una estructura entendible.",
        },
        easyExplanation: {
          en: "Users should know what each field is for, what went wrong, and how to fix it.",
          es: "Las personas deberian saber para que sirve cada campo, que salio mal y como arreglarlo.",
        },
        tinyExampleCode: `<label for="email">Email</label>\n<input id="email" name="email" type="email" />`,
        tinyExampleNote: {
          en: "The label is clearly connected to the input.",
          es: "La etiqueta esta claramente conectada con el input.",
        },
        interviewAnswer: {
          en: "In accessible forms I look for semantic labels, clear validation messages, good focus behavior, and instructions that are easy to understand.",
          es: "En formularios accesibles busco labels semanticas, mensajes de validacion claros, buen comportamiento del focus e instrucciones faciles de entender.",
        },
        commonMistake: {
          en: "Using placeholder text as the only label.",
          es: "Usar el placeholder como unica etiqueta.",
        },
      },
      {
        id: "accessible-modal-tabs",
        question: {
          en: "What makes a modal or tabs accessible?",
          es: "Que hace accesible a un modal o unas tabs?",
        },
        shortAnswer: {
          en: "They need correct semantics, keyboard support, visible focus, and clear state.",
          es: "Necesitan semantica correcta, soporte de teclado, focus visible y estado claro.",
        },
        easyExplanation: {
          en: "A modal should trap focus and close with Escape. Tabs should expose which tab is active and allow keyboard movement between tabs.",
          es: "Un modal deberia atrapar el focus y cerrarse con Escape. Las tabs deberian mostrar cual esta activa y permitir moverse con teclado entre ellas.",
        },
        tinyExampleCode: `<button role="tab" aria-selected="true" aria-controls="panel-about">About</button>`,
        tinyExampleNote: {
          en: "The active tab communicates its state clearly.",
          es: "La tab activa comunica su estado con claridad.",
        },
        interviewAnswer: {
          en: "For custom UI like modals and tabs, accessibility means combining the right roles, labels, focus management, and keyboard behavior.",
          es: "Para interfaces personalizadas como modales y tabs, accesibilidad significa combinar roles correctos, labels, gestion del focus y comportamiento de teclado.",
        },
        commonMistake: {
          en: "Making the widget look correct visually but leaving it unusable with keyboard or screen reader tools.",
          es: "Hacer que el widget se vea correcto visualmente pero dejarlo inutilizable con teclado o lector de pantalla.",
        },
      },
    ],
  },
  {
    id: "debugging",
    title: {
      en: "Debugging",
      es: "Depuracion",
    },
    summary: {
      en: "The interview answers that show you can stay calm, investigate, and fix problems methodically.",
      es: "Las respuestas de entrevista que muestran que puedes mantener la calma, investigar y arreglar problemas de forma metodica.",
    },
    questions: [
      {
        id: "debug-first-step",
        question: {
          en: "What is the first thing you do when a feature breaks?",
          es: "Que es lo primero que haces cuando una funcionalidad falla?",
        },
        shortAnswer: {
          en: "I try to reproduce the problem clearly and shrink it to one small failing behavior.",
          es: "Intento reproducir bien el problema y reducirlo a un comportamiento pequeno que esta fallando.",
        },
        easyExplanation: {
          en: "Before fixing anything, I want to know exactly what is broken, when it happens, and what should have happened instead.",
          es: "Antes de arreglar nada, quiero saber exactamente que esta roto, cuando pasa y que deberia haber pasado en su lugar.",
        },
        tinyExampleCode: `1. Click the filter button\n2. Notice the list does not update\n3. Check if the click handler runs`,
        tinyExampleNote: {
          en: "The bug becomes a concrete, testable problem.",
          es: "El bug se convierte en un problema concreto y comprobable.",
        },
        interviewAnswer: {
          en: "My first step is to reproduce the issue reliably, define the expected behavior, and narrow the problem down before I start changing code.",
          es: "Mi primer paso es reproducir el problema de forma fiable, definir el comportamiento esperado y acotar el problema antes de empezar a cambiar codigo.",
        },
        commonMistake: {
          en: "Guessing and changing random code before understanding the failure.",
          es: "Adivinar y cambiar codigo al azar antes de entender el fallo.",
        },
      },
      {
        id: "debug-console-errors",
        question: {
          en: "How do you read console errors without panicking?",
          es: "Como lees errores de consola sin agobiarte?",
        },
        shortAnswer: {
          en: "Start with the first useful error, read the message slowly, and trace it back to the line or action that triggered it.",
          es: "Empieza por el primer error util, lee el mensaje despacio y rastrealo hasta la linea o accion que lo disparo.",
        },
        easyExplanation: {
          en: "Console errors are clues. They often tell you what is undefined, where the crash happened, or what assumption was wrong.",
          es: "Los errores de consola son pistas. Muchas veces te dicen que es undefined, donde ocurrio el fallo o que suposicion era incorrecta.",
        },
        tinyExampleCode: `Cannot read properties of undefined (reading 'title')`,
        tinyExampleNote: {
          en: "This suggests the code expected an object but did not receive one.",
          es: "Esto sugiere que el codigo esperaba un objeto pero no lo recibio.",
        },
        interviewAnswer: {
          en: "I read the error message carefully, identify the failing line or component, and then check the data shape or event flow that led there.",
          es: "Leo el mensaje de error con cuidado, identifico la linea o componente que falla y luego reviso la forma de los datos o el flujo de eventos que llevo hasta ahi.",
        },
        commonMistake: {
          en: "Ignoring the first real error and getting distracted by later side effects.",
          es: "Ignorar el primer error real y distraerse con efectos secundarios posteriores.",
        },
      },
      {
        id: "debug-css-layout",
        question: {
          en: "How would you debug a CSS layout bug?",
          es: "Como depurarias un bug de layout en CSS?",
        },
        shortAnswer: {
          en: "Inspect the element, check size and spacing, then look at display, positioning, and parent constraints.",
          es: "Inspecciona el elemento, revisa tamano y espaciado, y luego mira display, posicionamiento y restricciones del padre.",
        },
        easyExplanation: {
          en: "A layout bug is often caused by the parent, not only by the broken-looking child.",
          es: "Un bug de layout muchas veces lo causa el padre, no solo el hijo que parece roto.",
        },
        tinyExampleCode: `Check: display, width, max-width, gap, overflow, position, flex/grid settings`,
        tinyExampleNote: {
          en: "These properties often explain why the layout shifted or overflowed.",
          es: "Estas propiedades suelen explicar por que el layout se movio o se desbordo.",
        },
        interviewAnswer: {
          en: "For CSS issues I usually inspect the element in DevTools, check the computed box model, and then trace parent layout rules like flex, grid, width, and overflow.",
          es: "Para problemas de CSS suelo inspeccionar el elemento en DevTools, revisar el box model calculado y luego rastrear reglas del padre como flex, grid, width y overflow.",
        },
        commonMistake: {
          en: "Changing many CSS properties at once so it becomes harder to learn what actually fixed the problem.",
          es: "Cambiar muchas propiedades CSS a la vez, haciendo mas dificil aprender que arreglo realmente el problema.",
        },
      },
      {
        id: "debug-dom-events",
        question: {
          en: "How would you debug a DOM or event bug?",
          es: "Como depurarias un bug de DOM o eventos?",
        },
        shortAnswer: {
          en: "Check that the right element is selected, the event listener is attached, and the handler changes the expected state or DOM.",
          es: "Comprueba que el elemento correcto esta seleccionado, que el event listener esta conectado y que el handler cambia el estado o DOM esperado.",
        },
        easyExplanation: {
          en: "A click bug usually comes from one of three things: wrong selector, missing listener, or logic that runs but changes the wrong thing.",
          es: "Un bug de click suele venir de una de tres cosas: selector incorrecto, listener ausente o logica que se ejecuta pero cambia la cosa equivocada.",
        },
        tinyExampleCode: `console.log(button);\nconsole.log("clicked");\nconsole.log(card.className);`,
        tinyExampleNote: {
          en: "Small logs help confirm each step of the flow.",
          es: "Los logs pequenos ayudan a confirmar cada paso del flujo.",
        },
        interviewAnswer: {
          en: "I debug DOM issues by checking the selector, confirming the event fires, and then verifying that the handler updates the right class, text, or data.",
          es: "Depuro problemas de DOM revisando el selector, confirmando que el evento se dispara y verificando despues que el handler actualiza la clase, texto o dato correcto.",
        },
        commonMistake: {
          en: "Assuming the event is broken when the real issue is a selector mismatch or a CSS state that hides the result.",
          es: "Suponer que el evento esta roto cuando el problema real es un selector que no coincide o un estado CSS que oculta el resultado.",
        },
      },
      {
        id: "debug-async",
        question: {
          en: "How would you debug an async or API bug?",
          es: "Como depurarias un bug async o de API?",
        },
        shortAnswer: {
          en: "Check the request, the response, the loading state, and the place where the data is transformed before render.",
          es: "Comprueba la peticion, la respuesta, el estado de carga y el lugar donde los datos se transforman antes del render.",
        },
        easyExplanation: {
          en: "The failure can happen before the request, during the request, after the response, or while rendering the returned data.",
          es: "El fallo puede pasar antes de la peticion, durante la peticion, despues de la respuesta o al renderizar los datos devueltos.",
        },
        tinyExampleCode: `console.log(response.status);\nconsole.log(data);\nconsole.log(error);`,
        tinyExampleNote: {
          en: "These checks tell you whether the issue is transport, data shape, or UI logic.",
          es: "Estas comprobaciones te dicen si el problema es de transporte, forma de datos o logica de interfaz.",
        },
        interviewAnswer: {
          en: "With async bugs I look at the network request, the response payload, error handling, and the UI states so I can find exactly where the flow breaks.",
          es: "Con bugs async miro la peticion de red, el contenido de la respuesta, el manejo de errores y los estados de interfaz para encontrar exactamente donde se rompe el flujo.",
        },
        commonMistake: {
          en: "Looking only at the final UI and forgetting to inspect the network or the returned data.",
          es: "Mirar solo la interfaz final y olvidar inspeccionar la red o los datos devueltos.",
        },
      },
      {
        id: "debug-react-state",
        question: {
          en: "How would you debug a React state bug?",
          es: "Como depurarias un bug de state en React?",
        },
        shortAnswer: {
          en: "Check where the state lives, what updates it, and what values the component actually receives when it renders.",
          es: "Comprueba donde vive el state, que lo actualiza y que valores recibe realmente el componente cuando renderiza.",
        },
        easyExplanation: {
          en: "A React bug often comes from stale props, duplicated state, wrong dependencies, or updating the wrong source of truth.",
          es: "Un bug de React muchas veces viene de props desactualizadas, state duplicado, dependencias incorrectas o actualizar la fuente de verdad equivocada.",
        },
        tinyExampleCode: `console.log({ search, filteredProducts, products });`,
        tinyExampleNote: {
          en: "Seeing the current values often reveals whether the bug is in state, derivation, or rendering.",
          es: "Ver los valores actuales suele revelar si el bug esta en el state, en la derivacion o en el render.",
        },
        interviewAnswer: {
          en: "For React state issues I trace the data flow: where the state is stored, which event updates it, and how the rendered output depends on that state.",
          es: "Para problemas de state en React rastreo el flujo de datos: donde se guarda el state, que evento lo actualiza y como depende el resultado renderizado de ese state.",
        },
        commonMistake: {
          en: "Adding more state to cover a bug that really comes from poor state structure.",
          es: "Anadir mas state para tapar un bug que en realidad viene de una mala estructura de state.",
        },
      },
    ],
  },
];

const extraInterviewQuestionsByCategory = {
  "html-css": [
    {
      id: "fixed-vs-sticky",
      question: {
        en: "What is the difference between position: fixed and position: sticky?",
        es: "Cual es la diferencia entre position fixed y position sticky?",
      },
      shortAnswer: {
        en: "Fixed stays attached to the viewport. Sticky behaves normally until it reaches a scroll threshold, then it sticks.",
        es: "Fixed se queda pegado al viewport. Sticky se comporta normal hasta que llega a un punto de scroll y entonces se pega.",
      },
      easyExplanation: {
        en: "A fixed header is always on screen. A sticky header starts in the page flow and only sticks when you scroll far enough.",
        es: "Una cabecera fixed siempre esta en pantalla. Una cabecera sticky empieza en el flujo normal y solo se pega cuando haces suficiente scroll.",
      },
      tinyExampleCode: `.header {\n  position: sticky;\n  top: 0;\n}`,
      tinyExampleNote: {
        en: "The header sticks once it reaches the top of the screen.",
        es: "La cabecera se pega una vez que llega a la parte superior de la pantalla.",
      },
      interviewAnswer: {
        en: "I use fixed when an element must stay attached to the viewport, and sticky when I want it to participate in layout first and then stick during scroll.",
        es: "Uso fixed cuando un elemento debe quedar pegado al viewport, y sticky cuando quiero que primero participe en el layout y luego se pegue durante el scroll.",
      },
      commonMistake: {
        en: "Using fixed when sticky would have respected layout and needed less manual spacing work.",
        es: "Usar fixed cuando sticky habria respetado el layout y necesitado menos trabajo manual de espaciado.",
      },
    },
    {
      id: "rem-units",
      question: {
        en: "Why are rem units useful in frontend layouts?",
        es: "Por que son utiles las unidades rem en layouts de frontend?",
      },
      shortAnswer: {
        en: "rem units scale from the root font size, which helps spacing and sizing stay more consistent.",
        es: "Las unidades rem escalan desde el tamano de fuente raiz, lo que ayuda a que el espaciado y el tamano sean mas consistentes.",
      },
      easyExplanation: {
        en: "Instead of hard-coding everything in pixels, rem gives you a sizing system that can adapt more gracefully.",
        es: "En vez de fijarlo todo con pixeles, rem te da un sistema de tamano que puede adaptarse con mas suavidad.",
      },
      tinyExampleCode: `.card {\n  padding: 1.5rem;\n  border-radius: 1rem;\n}`,
      tinyExampleNote: {
        en: "The spacing is tied to the root text size instead of a fixed pixel rule.",
        es: "El espaciado queda ligado al tamano de texto raiz en vez de una regla fija de pixeles.",
      },
      interviewAnswer: {
        en: "I like rem for scalable spacing and sizing because it stays tied to the root text size and often behaves better for consistency and accessibility.",
        es: "Me gusta rem para espaciado y tamano escalables porque queda ligado al tamano de texto raiz y suele comportarse mejor para consistencia y accesibilidad.",
      },
      commonMistake: {
        en: "Mixing units randomly without a clear spacing system.",
        es: "Mezclar unidades al azar sin un sistema claro de espaciado.",
      },
    },
    {
      id: "object-fit",
      question: {
        en: "What does object-fit do for images?",
        es: "Que hace object-fit en imagenes?",
      },
      shortAnswer: {
        en: "object-fit controls how an image fills its box when the box size and image size do not match.",
        es: "object-fit controla como una imagen rellena su caja cuando el tamano de la caja y el de la imagen no coinciden.",
      },
      easyExplanation: {
        en: "It helps you avoid stretched or awkward images inside cards, banners, and fixed image frames.",
        es: "Ayuda a evitar imagenes estiradas o raras dentro de tarjetas, banners y marcos de imagen fijos.",
      },
      tinyExampleCode: `.card img {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n}`,
      tinyExampleNote: {
        en: "The image fills the frame neatly without distortion.",
        es: "La imagen rellena el marco de forma limpia y sin deformarse.",
      },
      interviewAnswer: {
        en: "I use object-fit when media has to fit a fixed box. cover is common when I want a clean crop, and contain is useful when I must keep the whole image visible.",
        es: "Uso object-fit cuando el contenido multimedia debe encajar en una caja fija. cover es comun cuando quiero un recorte limpio y contain es util cuando necesito ver la imagen completa.",
      },
      commonMistake: {
        en: "Setting a fixed height on images without deciding how the image should fit the frame.",
        es: "Poner una altura fija en imagenes sin decidir como deberia encajar la imagen en el marco.",
      },
    },
  ],
  javascript: [
    {
      id: "strict-equality",
      question: {
        en: "What is the difference between == and ===?",
        es: "Cual es la diferencia entre == y ===?",
      },
      shortAnswer: {
        en: "=== checks value and type. == allows type coercion, which can create confusing results.",
        es: "=== comprueba valor y tipo. == permite coercion de tipos, lo que puede crear resultados confusos.",
      },
      easyExplanation: {
        en: "Most modern code uses === because it is more predictable.",
        es: "La mayor parte del codigo moderno usa === porque es mas predecible.",
      },
      tinyExampleCode: `0 == false // true\n0 === false // false`,
      tinyExampleNote: {
        en: "The loose comparison converts types before comparing them.",
        es: "La comparacion flexible convierte tipos antes de compararlos.",
      },
      interviewAnswer: {
        en: "I prefer strict equality because it avoids surprise type conversion and makes comparisons easier to reason about.",
        es: "Prefiero la igualdad estricta porque evita conversiones sorpresa de tipos y hace que las comparaciones sean mas faciles de razonar.",
      },
      commonMistake: {
        en: "Using == without understanding how JavaScript may convert one side before comparing.",
        es: "Usar == sin entender como JavaScript puede convertir un lado antes de comparar.",
      },
    },
    {
      id: "destructuring",
      question: {
        en: "What is destructuring?",
        es: "Que es destructuring?",
      },
      shortAnswer: {
        en: "Destructuring lets you pull values out of objects or arrays into variables.",
        es: "Destructuring te permite sacar valores de objetos o arrays y guardarlos en variables.",
      },
      easyExplanation: {
        en: "Instead of writing user.name and user.email repeatedly, you can unpack the parts you need once.",
        es: "En vez de escribir user.name y user.email una y otra vez, puedes desempaquetar una vez las partes que necesitas.",
      },
      tinyExampleCode: `const { name, email } = user;\nconst [first, second] = items;`,
      tinyExampleNote: {
        en: "The values are pulled into local variables with shorter names.",
        es: "Los valores pasan a variables locales con nombres mas cortos.",
      },
      interviewAnswer: {
        en: "Destructuring is a cleaner way to pull values out of arrays and objects, and it is especially common in React props and API data handling.",
        es: "Destructuring es una forma mas limpia de sacar valores de arrays y objetos, y es muy comun sobre todo en props de React y manejo de datos de API.",
      },
      commonMistake: {
        en: "Trying to destructure from a value that might be undefined.",
        es: "Intentar hacer destructuring de un valor que puede ser undefined.",
      },
    },
    {
      id: "spread-operator",
      question: {
        en: "What does the spread operator do?",
        es: "Que hace el spread operator?",
      },
      shortAnswer: {
        en: "The spread operator copies items out of an array or properties out of an object.",
        es: "El spread operator copia elementos fuera de un array o propiedades fuera de un objeto.",
      },
      easyExplanation: {
        en: "It is useful when you want to build a new array or object from an old one without mutating the original.",
        es: "Es util cuando quieres construir un array u objeto nuevo a partir de otro sin mutar el original.",
      },
      tinyExampleCode: `const nextItems = [...items, newItem];\nconst nextUser = { ...user, name: "Mila" };`,
      tinyExampleNote: {
        en: "These create new values instead of editing the old ones in place.",
        es: "Estos crean valores nuevos en vez de editar los antiguos en el mismo sitio.",
      },
      interviewAnswer: {
        en: "I use the spread operator a lot for immutable updates, especially in React state updates and when merging objects.",
        es: "Uso mucho el spread operator para actualizaciones inmutables, sobre todo en actualizaciones de state de React y al mezclar objetos.",
      },
      commonMistake: {
        en: "Thinking spread deeply clones nested data. It only makes a shallow copy.",
        es: "Pensar que spread clona profundamente los datos anidados. Solo hace una copia superficial.",
      },
    },
    {
      id: "event-loop-basic",
      question: {
        en: "What is the event loop in simple terms?",
        es: "Que es el event loop en palabras simples?",
      },
      shortAnswer: {
        en: "The event loop is how JavaScript handles tasks that finish later, like timers, clicks, and network responses.",
        es: "El event loop es la forma en la que JavaScript maneja tareas que terminan mas tarde, como timers, clicks y respuestas de red.",
      },
      easyExplanation: {
        en: "JavaScript runs one main thing at a time, and the event loop helps queue later work so the browser can keep responding.",
        es: "JavaScript ejecuta una cosa principal a la vez, y el event loop ayuda a poner en cola el trabajo posterior para que el navegador siga respondiendo.",
      },
      tinyExampleCode: `console.log("one");\nsetTimeout(() => console.log("two"), 0);\nconsole.log("three");`,
      tinyExampleNote: {
        en: "The timeout callback runs later, so the output is one, three, two.",
        es: "El callback del timeout corre mas tarde, asi que la salida es one, three, two.",
      },
      interviewAnswer: {
        en: "At a junior level, I explain the event loop as the system that lets JavaScript handle later work such as timers, promises, and user events without freezing the page.",
        es: "A nivel junior, explico el event loop como el sistema que permite a JavaScript manejar trabajo posterior como timers, promises y eventos de usuario sin congelar la pagina.",
      },
      commonMistake: {
        en: "Trying to memorize advanced event loop details before understanding the simple idea of now versus later work.",
        es: "Intentar memorizar detalles avanzados del event loop antes de entender la idea simple de trabajo de ahora frente a trabajo posterior.",
      },
    },
  ],
  "apis-async": [
    {
      id: "status-codes",
      question: {
        en: "What is an HTTP status code?",
        es: "Que es un status code HTTP?",
      },
      shortAnswer: {
        en: "A status code is a number in the server response that tells you how the request went.",
        es: "Un status code es un numero en la respuesta del servidor que te dice como fue la peticion.",
      },
      easyExplanation: {
        en: "For example, 200 usually means success, 404 means not found, and 500 means a server-side failure.",
        es: "Por ejemplo, 200 suele significar exito, 404 significa no encontrado y 500 significa un fallo en el servidor.",
      },
      tinyExampleCode: `if (!response.ok) {\n  throw new Error("Request failed");\n}`,
      tinyExampleNote: {
        en: "The UI can react differently depending on whether the request succeeded.",
        es: "La interfaz puede reaccionar de forma distinta segun si la peticion salio bien o no.",
      },
      interviewAnswer: {
        en: "Status codes are a quick signal about the result of a request. I use them to decide whether to render success, empty, or error feedback.",
        es: "Los status codes son una senal rapida sobre el resultado de una peticion. Los uso para decidir si renderizo feedback de exito, vacio o error.",
      },
      commonMistake: {
        en: "Ignoring response status and assuming every fetch result is valid data.",
        es: "Ignorar el status de la respuesta y asumir que cada resultado de fetch contiene datos validos.",
      },
    },
    {
      id: "query-params",
      question: {
        en: "What are query parameters?",
        es: "Que son los query parameters?",
      },
      shortAnswer: {
        en: "Query parameters are values added to the URL to refine or control a request.",
        es: "Los query parameters son valores anadidos a la URL para refinar o controlar una peticion.",
      },
      easyExplanation: {
        en: "They are common in search, filtering, sorting, and pagination.",
        es: "Son muy comunes en busqueda, filtros, ordenacion y paginacion.",
      },
      tinyExampleCode: `fetch("/api/products?search=pasta&sort=price")`,
      tinyExampleNote: {
        en: "The URL includes extra instructions for the API.",
        es: "La URL incluye instrucciones extra para la API.",
      },
      interviewAnswer: {
        en: "I use query parameters when the frontend needs to pass search terms, filters, sorting, or page numbers without changing the whole endpoint.",
        es: "Uso query parameters cuando el frontend necesita pasar terminos de busqueda, filtros, ordenacion o numeros de pagina sin cambiar todo el endpoint.",
      },
      commonMistake: {
        en: "Building query strings by hand carelessly and forgetting encoding or empty values.",
        es: "Construir query strings a mano sin cuidado y olvidar el encoding o los valores vacios.",
      },
    },
    {
      id: "headers-basic",
      question: {
        en: "What are headers in an API request?",
        es: "Que son los headers en una peticion API?",
      },
      shortAnswer: {
        en: "Headers are extra pieces of request or response information, such as content type or authorization.",
        es: "Los headers son piezas extra de informacion en una peticion o respuesta, como content type o autorizacion.",
      },
      easyExplanation: {
        en: "They tell the server or the browser important details about the data being sent or expected.",
        es: "Le dicen al servidor o al navegador detalles importantes sobre los datos que se envian o se esperan.",
      },
      tinyExampleCode: `fetch("/api/bookings", {\n  headers: {\n    "Content-Type": "application/json"\n  }\n})`,
      tinyExampleNote: {
        en: "The request tells the server what kind of data is being sent.",
        es: "La peticion le dice al servidor que tipo de datos se estan enviando.",
      },
      interviewAnswer: {
        en: "At a junior level, I think of headers as metadata about the request or response, like content type, auth, or caching information.",
        es: "A nivel junior, pienso en los headers como metadatos sobre la peticion o la respuesta, como content type, auth o informacion de cache.",
      },
      commonMistake: {
        en: "Talking about request bodies and headers as if they are the same thing.",
        es: "Hablar del body de la peticion y de los headers como si fueran lo mismo.",
      },
    },
    {
      id: "race-conditions-basic",
      question: {
        en: "What is a race condition in simple frontend terms?",
        es: "Que es una race condition en frontend en terminos simples?",
      },
      shortAnswer: {
        en: "A race condition happens when two async results compete and the wrong one wins.",
        es: "Una race condition ocurre cuando dos resultados async compiten y gana el que no deberia.",
      },
      easyExplanation: {
        en: "For example, a slower old search request might finish after a newer one and overwrite the fresher results.",
        es: "Por ejemplo, una peticion antigua de busqueda mas lenta puede terminar despues de una nueva y sobrescribir los resultados mas recientes.",
      },
      tinyExampleCode: `search for "p"\nsearch for "pasta"\n// the "p" request finishes last and overwrites the UI`,
      tinyExampleNote: {
        en: "The order of responses can break the UI if you do not guard against it.",
        es: "El orden de las respuestas puede romper la interfaz si no la proteges.",
      },
      interviewAnswer: {
        en: "At a junior level, I describe a race condition as older async work arriving later and accidentally replacing newer UI state.",
        es: "A nivel junior, describo una race condition como trabajo async antiguo que llega mas tarde y reemplaza por accidente un estado mas nuevo de la interfaz.",
      },
      commonMistake: {
        en: "Thinking async bugs are always server problems when the timing issue can be in the frontend flow.",
        es: "Pensar que los bugs async siempre son problemas del servidor cuando el problema de tiempo puede estar en el flujo del frontend.",
      },
    },
  ],
  react: [
    {
      id: "props-vs-state",
      question: {
        en: "What is the difference between props and state in React?",
        es: "Cual es la diferencia entre props y state en React?",
      },
      shortAnswer: {
        en: "Props come into a component from the parent. State lives inside the component and can change over time.",
        es: "Las props entran a un componente desde el padre. El state vive dentro del componente y puede cambiar con el tiempo.",
      },
      easyExplanation: {
        en: "Props are like inputs from outside. State is like the component's own changing memory.",
        es: "Las props son como entradas desde fuera. El state es como la memoria cambiante del propio componente.",
      },
      tinyExampleCode: `function UserCard({ name }) {\n  const [liked, setLiked] = useState(false);\n}`,
      tinyExampleNote: {
        en: "The name is received from outside, while liked changes inside the component.",
        es: "El nombre llega desde fuera, mientras que liked cambia dentro del componente.",
      },
      interviewAnswer: {
        en: "I explain props as incoming data and state as local changing data. That distinction helps me decide where data should live.",
        es: "Explico las props como datos entrantes y el state como datos locales que cambian. Esa distincion me ayuda a decidir donde deben vivir los datos.",
      },
      commonMistake: {
        en: "Trying to directly change props instead of updating state or asking the parent to change the data.",
        es: "Intentar cambiar props directamente en vez de actualizar state o pedir al padre que cambie los datos.",
      },
    },
    {
      id: "when-not-useeffect",
      question: {
        en: "When should you not use useEffect?",
        es: "Cuando no deberias usar useEffect?",
      },
      shortAnswer: {
        en: "Do not use useEffect for values you can calculate directly during render.",
        es: "No deberias usar useEffect para valores que puedes calcular directamente durante el render.",
      },
      easyExplanation: {
        en: "If a value can be derived from current props or state, you often do not need an extra effect and extra state for it.",
        es: "Si un valor se puede derivar de las props o el state actuales, muchas veces no necesitas un effect extra ni state extra.",
      },
      tinyExampleCode: `const completedCount = tasks.filter((task) => task.done).length;`,
      tinyExampleNote: {
        en: "This derived value can be calculated directly, not stored through an effect.",
        es: "Este valor derivado se puede calcular directamente, no guardarlo mediante un effect.",
      },
      interviewAnswer: {
        en: "I avoid useEffect when I am only deriving a value from current props or state, because plain render logic is simpler and less error-prone.",
        es: "Evito useEffect cuando solo estoy derivando un valor a partir de props o state actuales, porque la logica de render normal es mas simple y menos propensa a errores.",
      },
      commonMistake: {
        en: "Using useEffect plus extra state for values that never needed their own lifecycle.",
        es: "Usar useEffect mas state extra para valores que nunca necesitaron su propio ciclo de vida.",
      },
    },
    {
      id: "context-basic",
      question: {
        en: "What is Context in React?",
        es: "Que es Context en React?",
      },
      shortAnswer: {
        en: "Context is a way to share data across many components without passing props through every level.",
        es: "Context es una forma de compartir datos entre muchos componentes sin pasar props por cada nivel.",
      },
      easyExplanation: {
        en: "It helps when several parts of the app need the same value, like theme, auth, or view settings.",
        es: "Ayuda cuando varias partes de la app necesitan el mismo valor, como el tema, la autenticacion o ajustes de vista.",
      },
      tinyExampleCode: `const ThemeContext = createContext("light");`,
      tinyExampleNote: {
        en: "Components can read shared data from the context instead of receiving it through long prop chains.",
        es: "Los componentes pueden leer datos compartidos desde el contexto en vez de recibirlos por cadenas largas de props.",
      },
      interviewAnswer: {
        en: "I use Context for shared app-level values when passing props through many layers would become noisy. I still try not to use it for everything.",
        es: "Uso Context para valores compartidos a nivel app cuando pasar props por muchas capas se vuelve ruidoso. Aun asi intento no usarlo para todo.",
      },
      commonMistake: {
        en: "Treating Context as the default home for all state, even when local state would be clearer.",
        es: "Tratar Context como la casa por defecto de todo el state, incluso cuando el state local seria mas claro.",
      },
    },
    {
      id: "useparams-basic",
      question: {
        en: "What does useParams help with in React Router?",
        es: "Para que ayuda useParams en React Router?",
      },
      shortAnswer: {
        en: "useParams lets you read dynamic values from the current route.",
        es: "useParams te permite leer valores dinamicos de la ruta actual.",
      },
      easyExplanation: {
        en: "If the route is /products/:id, useParams helps you get that id inside the component.",
        es: "Si la ruta es /products/:id, useParams te ayuda a obtener ese id dentro del componente.",
      },
      tinyExampleCode: `const { id } = useParams();`,
      tinyExampleNote: {
        en: "The component can now use the id to load or display the right product.",
        es: "El componente ya puede usar el id para cargar o mostrar el producto correcto.",
      },
      interviewAnswer: {
        en: "I use useParams when a route includes dynamic values, such as an id or slug, and the component needs that value to load the right content.",
        es: "Uso useParams cuando una ruta incluye valores dinamicos, como un id o un slug, y el componente necesita ese valor para cargar el contenido correcto.",
      },
      commonMistake: {
        en: "Forgetting that route params arrive as strings and may need conversion.",
        es: "Olvidar que los route params llegan como strings y puede que haya que convertirlos.",
      },
    },
  ],
  testing: [
    {
      id: "waitfor-basic",
      question: {
        en: "What is waitFor used for in frontend tests?",
        es: "Para que sirve waitFor en tests de frontend?",
      },
      shortAnswer: {
        en: "waitFor helps a test wait for async UI changes before asserting.",
        es: "waitFor ayuda a que una prueba espere cambios async en la interfaz antes de comprobarlos.",
      },
      easyExplanation: {
        en: "It is useful when content appears after a request, a timer, or another delayed update.",
        es: "Es util cuando el contenido aparece despues de una peticion, un timer u otra actualizacion retrasada.",
      },
      tinyExampleCode: `await waitFor(() => {\n  expect(screen.getByText("Saved")).toBeInTheDocument();\n});`,
      tinyExampleNote: {
        en: "The test waits for the UI to reach the expected state.",
        es: "La prueba espera a que la interfaz llegue al estado esperado.",
      },
      interviewAnswer: {
        en: "I use waitFor when the UI updates asynchronously and I need the test to wait until the expected result appears.",
        es: "Uso waitFor cuando la interfaz se actualiza de forma asincrona y necesito que la prueba espere hasta que aparezca el resultado esperado.",
      },
      commonMistake: {
        en: "Using waitFor for everything instead of only when the UI genuinely changes later.",
        es: "Usar waitFor para todo en vez de solo cuando la interfaz realmente cambia mas tarde.",
      },
    },
    {
      id: "good-test-characteristics",
      question: {
        en: "What makes a frontend test good?",
        es: "Que hace bueno a un test de frontend?",
      },
      shortAnswer: {
        en: "A good test is clear, focused, and checks behavior that matters to the user.",
        es: "Un buen test es claro, enfocado y comprueba comportamiento que importa a la persona usuaria.",
      },
      easyExplanation: {
        en: "The test should be easy to understand and should fail for a useful reason, not because it depends on internal details.",
        es: "La prueba deberia ser facil de entender y fallar por una razon util, no porque dependa de detalles internos.",
      },
      tinyExampleCode: `expect(screen.getByRole("button", { name: /save/i })).toBeDisabled();`,
      tinyExampleNote: {
        en: "This checks something the user can actually observe.",
        es: "Esto comprueba algo que la persona usuaria realmente puede observar.",
      },
      interviewAnswer: {
        en: "I think a good UI test is readable, focused on one meaningful behavior, and stable enough to survive normal refactors.",
        es: "Pienso que un buen test de interfaz es legible, enfocado en un comportamiento con sentido y lo bastante estable para sobrevivir a refactors normales.",
      },
      commonMistake: {
        en: "Packing many different behaviors into one giant test.",
        es: "Meter muchos comportamientos distintos dentro de un solo test gigante.",
      },
    },
    {
      id: "failing-tests",
      question: {
        en: "Why can failing tests be useful?",
        es: "Por que pueden ser utiles los tests que fallan?",
      },
      shortAnswer: {
        en: "A failing test can reveal a bug, a regression, or a gap in the expected behavior.",
        es: "Un test que falla puede revelar un bug, una regresion o un hueco en el comportamiento esperado.",
      },
      easyExplanation: {
        en: "A good failure gives you a clue about what broke, instead of leaving the problem hidden.",
        es: "Un buen fallo te da una pista sobre lo que se rompio, en vez de dejar el problema escondido.",
      },
      tinyExampleCode: `Expected "Saved" to be in the document`,
      tinyExampleNote: {
        en: "This tells you the UI did not reach the state the user needed.",
        es: "Esto te dice que la interfaz no llego al estado que la persona usuaria necesitaba.",
      },
      interviewAnswer: {
        en: "I see failing tests as useful feedback, because they show where expected behavior and actual behavior no longer match.",
        es: "Veo los tests que fallan como feedback util, porque muestran donde el comportamiento esperado y el real ya no coinciden.",
      },
      commonMistake: {
        en: "Treating every failing test like noise instead of reading what it is trying to tell you.",
        es: "Tratar cada test fallido como ruido en vez de leer lo que intenta decirte.",
      },
    },
  ],
  accessibility: [
    {
      id: "alt-text",
      question: {
        en: "What is alt text and why does it matter?",
        es: "Que es el alt text y por que importa?",
      },
      shortAnswer: {
        en: "Alt text is text that describes an image when the image itself cannot be seen or loaded.",
        es: "El alt text es un texto que describe una imagen cuando la imagen no se puede ver o cargar.",
      },
      easyExplanation: {
        en: "It helps screen reader users understand meaningful images and also helps when images fail to load.",
        es: "Ayuda a las personas que usan lector de pantalla a entender imagenes con significado y tambien ayuda cuando las imagenes no cargan.",
      },
      tinyExampleCode: `<img src="/dish.jpg" alt="Plate of pasta with basil and parmesan" />`,
      tinyExampleNote: {
        en: "The image now has a useful text alternative.",
        es: "La imagen ahora tiene una alternativa de texto util.",
      },
      interviewAnswer: {
        en: "I use alt text to provide a meaningful text alternative for important images. Decorative images can use empty alt instead.",
        es: "Uso alt text para ofrecer una alternativa textual con sentido en imagenes importantes. Las imagenes decorativas pueden usar alt vacio.",
      },
      commonMistake: {
        en: "Writing alt text that repeats obvious words like image of without adding useful meaning.",
        es: "Escribir alt text que repite palabras obvias como imagen de sin aportar significado util.",
      },
    },
    {
      id: "discernible-labels",
      question: {
        en: "Why do buttons and form controls need clear labels?",
        es: "Por que los botones y controles de formulario necesitan etiquetas claras?",
      },
      shortAnswer: {
        en: "Users need to understand what an action or field does before interacting with it.",
        es: "Las personas necesitan entender que hace una accion o un campo antes de interactuar con el.",
      },
      easyExplanation: {
        en: "A control with no clear label is confusing for sighted users and even more confusing for assistive technology users.",
        es: "Un control sin una etiqueta clara confunde a quien ve la pantalla y aun mas a quien usa tecnologia asistiva.",
      },
      tinyExampleCode: `<button type="button">Open booking form</button>`,
      tinyExampleNote: {
        en: "The action is clear without guesswork.",
        es: "La accion queda clara sin tener que adivinar.",
      },
      interviewAnswer: {
        en: "Clear labels improve usability and accessibility because people should understand actions and fields without relying on guesswork or visuals alone.",
        es: "Las etiquetas claras mejoran la usabilidad y la accesibilidad porque las personas deberian entender acciones y campos sin depender de adivinanzas ni solo de lo visual.",
      },
      commonMistake: {
        en: "Using icon-only controls without accessible names or visible context.",
        es: "Usar controles solo con iconos sin nombres accesibles ni contexto visible.",
      },
    },
    {
      id: "tabindex-basic",
      question: {
        en: "What is tabindex and why should you be careful with it?",
        es: "Que es tabindex y por que hay que tener cuidado con el?",
      },
      shortAnswer: {
        en: "tabindex affects keyboard focus order, so using it carelessly can make navigation worse.",
        es: "tabindex afecta al orden del focus por teclado, asi que usarlo sin cuidado puede empeorar la navegacion.",
      },
      easyExplanation: {
        en: "Native focus order is often best. tabindex should solve a real need, not fight the browser.",
        es: "El orden nativo del focus suele ser lo mejor. tabindex deberia resolver una necesidad real, no pelearse con el navegador.",
      },
      tinyExampleCode: `<button tabindex="0">Save</button>`,
      tinyExampleNote: {
        en: "The control can be reached by keyboard, but many native controls already do this by default.",
        es: "Se puede llegar al control con teclado, pero muchos controles nativos ya hacen esto por defecto.",
      },
      interviewAnswer: {
        en: "I try to rely on native focus order first. I use tabindex carefully because custom focus order can confuse keyboard users.",
        es: "Intento apoyarme primero en el orden nativo del focus. Uso tabindex con cuidado porque un orden de focus personalizado puede confundir a quienes usan teclado.",
      },
      commonMistake: {
        en: "Sprinkling positive tabindex values through the UI and creating a strange focus path.",
        es: "Repartir valores positivos de tabindex por la interfaz y crear una ruta de focus rara.",
      },
    },
  ],
  debugging: [
    {
      id: "before-changing-code",
      question: {
        en: "What should you check before changing code to fix a bug?",
        es: "Que deberias comprobar antes de cambiar codigo para arreglar un bug?",
      },
      shortAnswer: {
        en: "Check what should happen, what actually happens, and how to reproduce the gap consistently.",
        es: "Comprueba que deberia pasar, que pasa en realidad y como reproducir esa diferencia de forma consistente.",
      },
      easyExplanation: {
        en: "If you do not understand the bug clearly, you can easily patch the wrong thing.",
        es: "Si no entiendes bien el bug, puedes parchear facilmente la parte equivocada.",
      },
      tinyExampleCode: `Expected: menu opens\nActual: click does nothing\nRepro: click after page load`,
      tinyExampleNote: {
        en: "The problem is now specific enough to investigate calmly.",
        es: "Ahora el problema es lo bastante concreto como para investigarlo con calma.",
      },
      interviewAnswer: {
        en: "Before editing code, I want a reliable reproduction and a clear expected behavior so I know what I am actually fixing.",
        es: "Antes de editar codigo, quiero una reproduccion fiable y un comportamiento esperado claro para saber que estoy arreglando realmente.",
      },
      commonMistake: {
        en: "Starting with code changes before defining the bug properly.",
        es: "Empezar a cambiar codigo antes de definir bien el bug.",
      },
    },
    {
      id: "console-logs-well",
      question: {
        en: "How do you use console logs well when debugging?",
        es: "Como usas bien los console logs al depurar?",
      },
      shortAnswer: {
        en: "Use small, purposeful logs to confirm whether each step of the flow is happening.",
        es: "Usa logs pequenos y con proposito para confirmar si cada paso del flujo esta ocurriendo.",
      },
      easyExplanation: {
        en: "The goal is not to log everything. The goal is to learn exactly where the behavior changes from expected to unexpected.",
        es: "La meta no es loguearlo todo. La meta es descubrir exactamente donde el comportamiento pasa de esperado a inesperado.",
      },
      tinyExampleCode: `console.log("button found", button);\nconsole.log("clicked");\nconsole.log("active?", card.classList.contains("active"));`,
      tinyExampleNote: {
        en: "Each log answers one small question.",
        es: "Cada log responde a una pregunta pequena.",
      },
      interviewAnswer: {
        en: "I use logs to verify assumptions step by step, for example whether the event fires, whether data looks right, and whether the UI state updates.",
        es: "Uso logs para verificar suposiciones paso a paso, por ejemplo si el evento se dispara, si los datos se ven bien y si el estado de la interfaz se actualiza.",
      },
      commonMistake: {
        en: "Printing huge objects everywhere without knowing what question each log is supposed to answer.",
        es: "Imprimir objetos enormes por todas partes sin saber que pregunta debe responder cada log.",
      },
    },
    {
      id: "debug-routing",
      question: {
        en: "How would you debug a routing bug?",
        es: "Como depurarias un bug de routing?",
      },
      shortAnswer: {
        en: "Check the route path, the link target, the dynamic params, and the fallback route behavior.",
        es: "Comprueba la ruta, el destino del link, los parametros dinamicos y el comportamiento de la ruta fallback.",
      },
      easyExplanation: {
        en: "A routing bug often comes from a mismatch between the URL you navigate to and the route pattern the app expects.",
        es: "Un bug de routing suele venir de una falta de coincidencia entre la URL a la que navegas y el patron de ruta que la app espera.",
      },
      tinyExampleCode: `<Route path="/products/:id" element={<ProductDetails />} />`,
      tinyExampleNote: {
        en: "If the route pattern or link is wrong, the right screen may never render.",
        es: "Si el patron de ruta o el link estan mal, puede que la pantalla correcta nunca se renderice.",
      },
      interviewAnswer: {
        en: "For routing issues I verify the route config, the URL, any params, and whether the component is reading those params correctly.",
        es: "Para problemas de routing verifico la configuracion de rutas, la URL, cualquier parametro y si el componente esta leyendo bien esos parametros.",
      },
      commonMistake: {
        en: "Only checking the component and forgetting that the bug may be in the route definition or the link itself.",
        es: "Revisar solo el componente y olvidar que el bug puede estar en la definicion de ruta o en el propio link.",
      },
    },
    {
      id: "devtools-value",
      question: {
        en: "Why are browser DevTools so important for debugging?",
        es: "Por que son tan importantes las DevTools del navegador para depurar?",
      },
      shortAnswer: {
        en: "DevTools let you inspect layout, DOM, network requests, console errors, and runtime behavior in one place.",
        es: "Las DevTools te permiten inspeccionar layout, DOM, peticiones de red, errores de consola y comportamiento en tiempo real en un mismo lugar.",
      },
      easyExplanation: {
        en: "They help you move from guessing to observing what the browser is actually doing.",
        es: "Te ayudan a pasar de adivinar a observar lo que realmente esta haciendo el navegador.",
      },
      tinyExampleCode: `Elements -> inspect layout\nNetwork -> inspect requests\nConsole -> inspect errors`,
      tinyExampleNote: {
        en: "Different panels answer different debugging questions.",
        es: "Distintos paneles responden a distintas preguntas de depuracion.",
      },
      interviewAnswer: {
        en: "DevTools are one of my main debugging tools because they let me inspect the rendered UI, network activity, and runtime errors quickly.",
        es: "Las DevTools son una de mis herramientas principales de depuracion porque me permiten inspeccionar rapidamente la interfaz renderizada, la actividad de red y los errores en tiempo real.",
      },
      commonMistake: {
        en: "Trying to debug everything from the editor without checking what the browser is actually rendering or requesting.",
        es: "Intentar depurarlo todo desde el editor sin comprobar lo que el navegador esta renderizando o pidiendo realmente.",
      },
    },
  ],
};

function getLocalizedField(value, language) {
  if (typeof value === "string") return value;
  return value?.[language] || value?.en || "";
}

function localizeQuestion(question, language) {
  return {
    id: question.id,
    question: getLocalizedField(question.question, language),
    shortAnswer: getLocalizedField(question.shortAnswer, language),
    easyExplanation: getLocalizedField(question.easyExplanation, language),
    tinyExampleCode: question.tinyExampleCode,
    tinyExampleNote: getLocalizedField(question.tinyExampleNote, language),
    interviewAnswer: getLocalizedField(question.interviewAnswer, language),
    commonMistake: getLocalizedField(question.commonMistake, language),
  };
}

export function getInterviewAnswerLibrary(language = "en") {
  return interviewAnswerLibrary.map((category) => ({
    id: category.id,
    title: getLocalizedField(category.title, language),
    summary: getLocalizedField(category.summary, language),
    questions: [
      ...category.questions,
      ...(extraInterviewQuestionsByCategory[category.id] || []),
    ].map((question) =>
      localizeQuestion(question, language)
    ),
  }));
}

export function getInterviewAnswerStats() {
  return interviewAnswerLibrary.reduce(
    (stats, category) => ({
      categories: stats.categories + 1,
      questions:
        stats.questions +
        category.questions.length +
        (extraInterviewQuestionsByCategory[category.id]?.length || 0),
    }),
    { categories: 0, questions: 0 }
  );
}
