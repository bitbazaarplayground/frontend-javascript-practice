const comparePatterns = [
  {
    id: "centering",
    title: {
      en: "Centering content",
      es: "Centrar contenido",
    },
    summary: {
      en: "One layout problem, several valid answers. The key is learning which one fits the job.",
      es: "Un problema de layout, varias respuestas validas. La clave es aprender cual encaja mejor con el trabajo.",
    },
    scenario: {
      en: "You need to center something, but the best method depends on whether you are centering content inside a container, centering one block on the page, or centering in both directions.",
      es: "Necesitas centrar algo, pero el mejor metodo depende de si centras contenido dentro de un contenedor, un solo bloque en la pagina o en ambas direcciones.",
    },
    approaches: [
      {
        label: {
          en: "Flexbox",
          es: "Flexbox",
        },
        code: `.wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`,
        whenToUse: {
          en: "Use Flexbox when you want to center items inside a container and you may also need spacing, direction, or alignment control.",
          es: "Usa Flexbox cuando quieras centrar elementos dentro de un contenedor y ademas puedas necesitar espaciado, direccion o control de alineacion.",
        },
        watchOut: {
          en: "It is usually the most practical choice for UI groups, but it is not the only way to center one simple block.",
          es: "Suele ser la opcion mas practica para grupos de UI, pero no es la unica forma de centrar un bloque sencillo.",
        },
      },
      {
        label: {
          en: "Grid",
          es: "Grid",
        },
        code: `.wrapper {\n  display: grid;\n  place-items: center;\n}`,
        whenToUse: {
          en: "Use Grid when the layout already behaves like a grid or when you want a very short two-axis centering rule.",
          es: "Usa Grid cuando el layout ya se comporta como una cuadricula o cuando quieres una regla muy corta para centrar en dos ejes.",
        },
        watchOut: {
          en: "Grid is elegant for full-card or full-screen centering, but you should still understand when Flexbox is the simpler mental model.",
          es: "Grid es elegante para centrar tarjetas completas o pantallas completas, pero aun asi conviene entender cuando Flexbox es el modelo mental mas simple.",
        },
      },
      {
        label: {
          en: "margin: 0 auto",
          es: "margin: 0 auto",
        },
        code: `.card {\n  width: 320px;\n  margin: 0 auto;\n}`,
        whenToUse: {
          en: "Use margin auto when you only need to center one block horizontally and that block has a width or max-width.",
          es: "Usa margin auto cuando solo necesites centrar un bloque horizontalmente y ese bloque tenga width o max-width.",
        },
        watchOut: {
          en: "This does not center content vertically, and it works best for a single block rather than a group of items.",
          es: "Esto no centra el contenido verticalmente y funciona mejor para un solo bloque que para un grupo de elementos.",
        },
      },
    ],
    takeaway: {
      en: "Interview-ready explanation: I choose the centering method based on the layout job, not because one trick is always best.",
      es: "Explicacion lista para entrevista: elijo el metodo de centrado segun el trabajo del layout, no porque un truco sea siempre el mejor.",
    },
  },
  {
    id: "show-hide-ui",
    title: {
      en: "Showing and hiding UI",
      es: "Mostrar y ocultar UI",
    },
    summary: {
      en: "The same visual result can come from DOM classes, CSS visibility, or React rendering choices.",
      es: "El mismo resultado visual puede venir de clases del DOM, visibilidad CSS o decisiones de render en React.",
    },
    scenario: {
      en: "You want a menu, modal, dropdown, or help panel to appear and disappear.",
      es: "Quieres que un menu, modal, dropdown o panel de ayuda aparezca y desaparezca.",
    },
    approaches: [
      {
        label: {
          en: "Toggle a class",
          es: "Hacer toggle de una clase",
        },
        code: `button.addEventListener("click", () => {\n  panel.classList.toggle("is-open");\n});`,
        whenToUse: {
          en: "Use class toggling in vanilla JavaScript when the UI state is small and the visual behavior lives mostly in CSS.",
          es: "Usa toggle de clases en JavaScript puro cuando el estado de la interfaz es pequeno y el comportamiento visual vive sobre todo en CSS.",
        },
        watchOut: {
          en: "Make sure the visual class change still matches accessibility state where needed, such as aria-expanded.",
          es: "Asegurate de que el cambio visual de clase siga coincidiendo con el estado de accesibilidad cuando haga falta, como aria-expanded.",
        },
      },
      {
        label: {
          en: "Use a hidden/display state",
          es: "Usar un estado hidden/display",
        },
        code: `.panel {\n  display: none;\n}\n\n.panel.is-open {\n  display: block;\n}`,
        whenToUse: {
          en: "Use this when CSS is responsible for the visible state and your JavaScript only needs to switch between styles.",
          es: "Usa esto cuando CSS es responsable del estado visible y tu JavaScript solo necesita cambiar entre estilos.",
        },
        watchOut: {
          en: "Do not treat display changes as enough on their own if keyboard or screen reader behavior also matters.",
          es: "No trates los cambios de display como suficientes por si solos si tambien importa el comportamiento de teclado o lector de pantalla.",
        },
      },
      {
        label: {
          en: "Conditional rendering in React",
          es: "Render condicional en React",
        },
        code: `{isOpen ? <Modal /> : null}`,
        whenToUse: {
          en: "Use conditional rendering when the UI is already modeled through React state and the element should only exist when active.",
          es: "Usa render condicional cuando la interfaz ya este modelada con state de React y el elemento solo deba existir cuando este activo.",
        },
        watchOut: {
          en: "Sometimes you want the element to stay mounted for animation or focus reasons, so think about behavior, not only visual output.",
          es: "A veces quieres que el elemento siga montado por animacion o focus, asi que piensa en el comportamiento, no solo en la salida visual.",
        },
      },
    ],
    takeaway: {
      en: "Interview-ready explanation: I choose between class toggling and conditional rendering based on where the UI state lives and how much behavior the component needs.",
      es: "Explicacion lista para entrevista: elijo entre toggle de clases y render condicional segun donde viva el estado de la interfaz y cuanta logica necesite el componente.",
    },
  },
  {
    id: "async-patterns",
    title: {
      en: "Async patterns",
      es: "Patrones asincronos",
    },
    summary: {
      en: "Several tools can handle async work. Strong juniors know the shape of each one.",
      es: "Varias herramientas pueden manejar trabajo asincrono. Un buen perfil junior conoce la forma de cada una.",
    },
    scenario: {
      en: "You need to fetch data, handle waiting, and explain the flow clearly.",
      es: "Necesitas pedir datos, manejar la espera y explicar bien el flujo.",
    },
    approaches: [
      {
        label: {
          en: ".then() / .catch()",
          es: ".then() / .catch()",
        },
        code: `fetch("/api/menu")\n  .then((response) => response.json())\n  .then((data) => setItems(data))\n  .catch(() => setError(true));`,
        whenToUse: {
          en: "Use promise chains when the flow is small and you want to show clearly that each step depends on the previous promise.",
          es: "Usa cadenas de promises cuando el flujo es pequeno y quieres mostrar con claridad que cada paso depende de la promise anterior.",
        },
        watchOut: {
          en: "Long chains can become harder to read than async/await.",
          es: "Las cadenas largas pueden volverse mas dificiles de leer que async/await.",
        },
      },
      {
        label: {
          en: "async/await",
          es: "async/await",
        },
        code: `async function loadMenu() {\n  try {\n    const response = await fetch("/api/menu");\n    const data = await response.json();\n    setItems(data);\n  } catch (error) {\n    setError(true);\n  }\n}`,
        whenToUse: {
          en: "Use async/await when you want the logic to read top-to-bottom, especially inside React effects or event handlers.",
          es: "Usa async/await cuando quieras que la logica se lea de arriba abajo, sobre todo dentro de effects de React o handlers de eventos.",
        },
        watchOut: {
          en: "Remember that clean syntax still needs loading, error, and empty states around it.",
          es: "Recuerda que una sintaxis limpia sigue necesitando estados de carga, error y vacio a su alrededor.",
        },
      },
      {
        label: {
          en: "Promise.all()",
          es: "Promise.all()",
        },
        code: `const [menuResponse, reviewsResponse] = await Promise.all([\n  fetch("/api/menu"),\n  fetch("/api/reviews"),\n]);`,
        whenToUse: {
          en: "Use Promise.all when several requests can happen in parallel and you do not need to wait for one before starting the next.",
          es: "Usa Promise.all cuando varias peticiones puedan ocurrir en paralelo y no necesites esperar a una antes de empezar la siguiente.",
        },
        watchOut: {
          en: "If one promise fails, the whole Promise.all fails, so think about whether that is the right behavior.",
          es: "Si falla una promise, falla todo el Promise.all, asi que piensa si ese es el comportamiento correcto.",
        },
      },
    ],
    takeaway: {
      en: "Interview-ready explanation: I choose the async pattern that keeps the flow easiest to read while still matching the real data dependency.",
      es: "Explicacion lista para entrevista: elijo el patron async que hace el flujo mas facil de leer y que al mismo tiempo encaja con la dependencia real de los datos.",
    },
  },
  {
    id: "shared-state",
    title: {
      en: "Sharing state in React",
      es: "Compartir state en React",
    },
    summary: {
      en: "The important question is not only how to store state, but where that state should live.",
      es: "La pregunta importante no es solo como guardar state, sino donde deberia vivir.",
    },
    scenario: {
      en: "More than one component needs access to the same value or action.",
      es: "Mas de un componente necesita acceso al mismo valor o a la misma accion.",
    },
    approaches: [
      {
        label: {
          en: "Local state",
          es: "State local",
        },
        code: `const [open, setOpen] = useState(false);`,
        whenToUse: {
          en: "Use local state when one component owns the behavior and no one else needs to read or change it.",
          es: "Usa state local cuando un componente controla el comportamiento y nadie mas necesita leerlo o cambiarlo.",
        },
        watchOut: {
          en: "Do not move state higher unless several components really need it.",
          es: "No subas el state mas arriba a menos que varios componentes lo necesiten de verdad.",
        },
      },
      {
        label: {
          en: "Lift state up",
          es: "Subir el state",
        },
        code: `function App() {\n  const [filter, setFilter] = useState("all");\n  return <Toolbar filter={filter} setFilter={setFilter} />;\n}`,
        whenToUse: {
          en: "Use this when sibling components need one shared source of truth.",
          es: "Usa esto cuando componentes hermanos necesiten una fuente de verdad compartida.",
        },
        watchOut: {
          en: "If you lift state too high too early, the tree can become harder to follow.",
          es: "Si subes el state demasiado pronto y demasiado alto, el arbol puede volverse mas dificil de seguir.",
        },
      },
      {
        label: {
          en: "Context",
          es: "Context",
        },
        code: `const ThemeContext = createContext("light");`,
        whenToUse: {
          en: "Use Context when many nested components need the same shared value and prop drilling becomes noisy.",
          es: "Usa Context cuando muchos componentes anidados necesitan el mismo valor compartido y pasar props se vuelve ruidoso.",
        },
        watchOut: {
          en: "Context is useful, but it should not replace simple local state by default.",
          es: "Context es util, pero no deberia reemplazar por defecto un state local sencillo.",
        },
      },
    ],
    takeaway: {
      en: "Interview-ready explanation: I place state as low as possible, then lift it or move it into Context only when more parts of the app need it.",
      es: "Explicacion lista para entrevista: coloco el state lo mas abajo posible y luego lo subo o lo paso a Context solo cuando mas partes de la app lo necesitan.",
    },
  },
  {
    id: "array-tools",
    title: {
      en: "Choosing array tools",
      es: "Elegir herramientas de arrays",
    },
    summary: {
      en: "map, filter, and find often get taught together because they solve different list problems.",
      es: "map, filter y find suelen ensenarse juntos porque resuelven problemas distintos de listas.",
    },
    scenario: {
      en: "You have an array of items and need to render, narrow, or locate something inside it.",
      es: "Tienes un array de elementos y necesitas renderizar, reducir o localizar algo dentro de el.",
    },
    approaches: [
      {
        label: {
          en: "map()",
          es: "map()",
        },
        code: `products.map((product) => <Card key={product.id} />)`,
        whenToUse: {
          en: "Use map when every item should become something new, such as JSX or a transformed value.",
          es: "Usa map cuando cada elemento deba convertirse en algo nuevo, como JSX o un valor transformado.",
        },
        watchOut: {
          en: "If you do not use the new returned array, map is probably not the right choice.",
          es: "Si no usas el nuevo array devuelto, seguramente map no sea la opcion correcta.",
        },
      },
      {
        label: {
          en: "filter()",
          es: "filter()",
        },
        code: `products.filter((product) => product.price < 20)`,
        whenToUse: {
          en: "Use filter when you want a smaller list that keeps only matching items.",
          es: "Usa filter cuando quieres una lista mas pequena que conserve solo los elementos que coinciden.",
        },
        watchOut: {
          en: "filter always returns an array, even if zero or one item matches.",
          es: "filter siempre devuelve un array, incluso si coinciden cero o un solo elemento.",
        },
      },
      {
        label: {
          en: "find()",
          es: "find()",
        },
        code: `products.find((product) => product.id === targetId)`,
        whenToUse: {
          en: "Use find when you want one matching item, not a whole new filtered list.",
          es: "Usa find cuando quieres un solo elemento coincidente, no toda una lista filtrada nueva.",
        },
        watchOut: {
          en: "find can return undefined, so code should handle the missing case.",
          es: "find puede devolver undefined, asi que el codigo debe manejar el caso en el que falte.",
        },
      },
    ],
    takeaway: {
      en: "Interview-ready explanation: I pick the array method based on whether I need every item transformed, a smaller list, or a single result.",
      es: "Explicacion lista para entrevista: elijo el metodo de array segun si necesito transformar cada elemento, una lista mas pequena o un solo resultado.",
    },
  },
];

function getLocalizedField(value, language) {
  if (typeof value === "string") return value;
  return value?.[language] || value?.en || "";
}

export function getComparePatterns(language = "en") {
  return comparePatterns.map((pattern) => ({
    id: pattern.id,
    title: getLocalizedField(pattern.title, language),
    summary: getLocalizedField(pattern.summary, language),
    scenario: getLocalizedField(pattern.scenario, language),
    takeaway: getLocalizedField(pattern.takeaway, language),
    approaches: pattern.approaches.map((approach) => ({
      label: getLocalizedField(approach.label, language),
      code: approach.code,
      whenToUse: getLocalizedField(approach.whenToUse, language),
      watchOut: getLocalizedField(approach.watchOut, language),
    })),
  }));
}
