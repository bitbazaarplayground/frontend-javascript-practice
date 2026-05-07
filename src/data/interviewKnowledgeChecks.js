const knowledgeCheck = {
  title: {
    en: "Knowledge check",
    es: "Prueba de conocimientos",
  },
  intro: {
    en: "Use this short test to check whether the concepts are really sticking. It mixes direct questions with tiny code-completion prompts.",
    es: "Usa esta prueba corta para comprobar si los conceptos realmente se estan quedando. Mezcla preguntas directas con pequenos ejercicios de completar codigo.",
  },
  coachLine: {
    en: "Try to answer without scrolling back up. That is where the real learning happens.",
    es: "Intenta responder sin volver arriba. Ahi es donde ocurre el aprendizaje de verdad.",
  },
  questions: [
    {
      id: "quiz-semantic-html",
      type: "multiple-choice",
      category: {
        en: "HTML & CSS",
        es: "HTML y CSS",
      },
      prompt: {
        en: "Which option is the best example of semantic HTML for the main content of a page?",
        es: "Que opcion es el mejor ejemplo de HTML semantico para el contenido principal de una pagina?",
      },
      options: [
        {
          id: "a",
          label: {
            en: "<div class=\"main-content\">...</div>",
            es: "<div class=\"main-content\">...</div>",
          },
        },
        {
          id: "b",
          label: {
            en: "<main>...</main>",
            es: "<main>...</main>",
          },
        },
        {
          id: "c",
          label: {
            en: "<span>...</span>",
            es: "<span>...</span>",
          },
        },
        {
          id: "d",
          label: {
            en: "<b>...</b>",
            es: "<b>...</b>",
          },
        },
      ],
      correctOptionId: "b",
      explanation: {
        en: "main is the semantic element meant for the page's primary content area.",
        es: "main es el elemento semantico pensado para la zona principal de contenido de la pagina.",
      },
      interviewTip: {
        en: "Good interview answer: semantic HTML gives meaning to the structure, not just styling hooks.",
        es: "Buena respuesta de entrevista: el HTML semantico da significado a la estructura, no solo ganchos para estilos.",
      },
    },
    {
      id: "quiz-flexbox",
      type: "multiple-choice",
      category: {
        en: "HTML & CSS",
        es: "HTML y CSS",
      },
      prompt: {
        en: "Which tool is usually the best first choice for aligning items in a single row navigation bar?",
        es: "Que herramienta suele ser la mejor primera opcion para alinear elementos en una barra de navegacion de una sola fila?",
      },
      options: [
        {
          id: "a",
          label: {
            en: "Flexbox",
            es: "Flexbox",
          },
        },
        {
          id: "b",
          label: {
            en: "Grid with six columns",
            es: "Grid con seis columnas",
          },
        },
        {
          id: "c",
          label: {
            en: "z-index",
            es: "z-index",
          },
        },
        {
          id: "d",
          label: {
            en: "position: absolute",
            es: "position: absolute",
          },
        },
      ],
      correctOptionId: "a",
      explanation: {
        en: "Flexbox is usually the simplest tool for alignment in one direction, like a row navigation.",
        es: "Flexbox suele ser la herramienta mas simple para alineacion en una sola direccion, como una navegacion en fila.",
      },
      interviewTip: {
        en: "A clear answer mentions one-axis layout for Flexbox and two-dimensional layout for Grid.",
        es: "Una respuesta clara menciona layout en un eje para Flexbox y layout en dos dimensiones para Grid.",
      },
    },
    {
      id: "quiz-array-find",
      type: "multiple-choice",
      category: {
        en: "JavaScript",
        es: "JavaScript",
      },
      prompt: {
        en: "Which array method returns the first matching item instead of a whole new list?",
        es: "Que metodo de array devuelve el primer elemento coincidente en vez de una lista nueva completa?",
      },
      options: [
        {
          id: "a",
          label: {
            en: "filter",
            es: "filter",
          },
        },
        {
          id: "b",
          label: {
            en: "map",
            es: "map",
          },
        },
        {
          id: "c",
          label: {
            en: "find",
            es: "find",
          },
        },
        {
          id: "d",
          label: {
            en: "forEach",
            es: "forEach",
          },
        },
      ],
      correctOptionId: "c",
      explanation: {
        en: "find returns one matching item, while filter returns a new array of all matches.",
        es: "find devuelve un elemento coincidente, mientras que filter devuelve un array nuevo con todas las coincidencias.",
      },
      interviewTip: {
        en: "It sounds strong when you explain not only which method is right, but why the others are different.",
        es: "Suena fuerte cuando explicas no solo que metodo es correcto, sino por que los otros son diferentes.",
      },
    },
    {
      id: "quiz-fetch-state",
      type: "multiple-choice",
      category: {
        en: "APIs & Async",
        es: "APIs y asincronia",
      },
      prompt: {
        en: "When loading API data, which three UI states should you always think about first?",
        es: "Al cargar datos desde una API, en que tres estados de interfaz deberias pensar primero?",
      },
      options: [
        {
          id: "a",
          label: {
            en: "Bold, italic, underline",
            es: "Negrita, cursiva, subrayado",
          },
        },
        {
          id: "b",
          label: {
            en: "Loading, success, error",
            es: "Carga, exito, error",
          },
        },
        {
          id: "c",
          label: {
            en: "Click, hover, focus",
            es: "Click, hover, focus",
          },
        },
        {
          id: "d",
          label: {
            en: "Map, filter, reduce",
            es: "Map, filter, reduce",
          },
        },
      ],
      correctOptionId: "b",
      explanation: {
        en: "Those states cover waiting, successful data, and failure. Many apps also add an empty state.",
        es: "Esos estados cubren la espera, los datos correctos y el fallo. Muchas apps tambien anaden un estado vacio.",
      },
      interviewTip: {
        en: "A good answer mentions that async UI is not only about the happy path.",
        es: "Una buena respuesta menciona que una interfaz async no trata solo del camino feliz.",
      },
    },
    {
      id: "quiz-state-react",
      type: "multiple-choice",
      category: {
        en: "React",
        es: "React",
      },
      prompt: {
        en: "Which statement best describes React state?",
        es: "Que frase describe mejor el state de React?",
      },
      options: [
        {
          id: "a",
          label: {
            en: "It is styling that only works inside React components",
            es: "Es un estilo que solo funciona dentro de componentes React",
          },
        },
        {
          id: "b",
          label: {
            en: "It is data that can change and update the UI",
            es: "Es informacion que puede cambiar y actualizar la interfaz",
          },
        },
        {
          id: "c",
          label: {
            en: "It is another word for props",
            es: "Es otra palabra para props",
          },
        },
        {
          id: "d",
          label: {
            en: "It is only used for API requests",
            es: "Solo se usa para peticiones API",
          },
        },
      ],
      correctOptionId: "b",
      explanation: {
        en: "State holds changing data, and React re-renders when that data changes.",
        es: "El state guarda datos que cambian y React vuelve a renderizar cuando esos datos cambian.",
      },
      interviewTip: {
        en: "A strong answer often adds an example, like input text, a modal open state, or a selected tab.",
        es: "Una respuesta fuerte suele anadir un ejemplo, como el texto de un input, el estado de un modal o una tab seleccionada.",
      },
    },
    {
      id: "quiz-react-keys",
      type: "multiple-choice",
      category: {
        en: "React",
        es: "React",
      },
      prompt: {
        en: "Why do React lists need keys?",
        es: "Por que las listas de React necesitan keys?",
      },
      options: [
        {
          id: "a",
          label: {
            en: "To make the CSS load faster",
            es: "Para que el CSS cargue mas rapido",
          },
        },
        {
          id: "b",
          label: {
            en: "To help React track item identity when the list changes",
            es: "Para ayudar a React a seguir la identidad de cada elemento cuando la lista cambia",
          },
        },
        {
          id: "c",
          label: {
            en: "To make JavaScript arrays immutable",
            es: "Para hacer inmutables los arrays de JavaScript",
          },
        },
        {
          id: "d",
          label: {
            en: "To stop props from changing",
            es: "Para evitar que cambien las props",
          },
        },
      ],
      correctOptionId: "b",
      explanation: {
        en: "Keys help React reconcile list updates correctly, especially when items are added, removed, or moved.",
        es: "Las keys ayudan a React a reconciliar bien las actualizaciones de listas, sobre todo cuando se anaden, eliminan o mueven elementos.",
      },
      interviewTip: {
        en: "Good follow-up detail: use stable ids when possible instead of array indexes.",
        es: "Buen detalle extra: usa ids estables cuando sea posible en vez del indice del array.",
      },
    },
    {
      id: "quiz-typescript-union",
      type: "multiple-choice",
      category: {
        en: "TypeScript",
        es: "TypeScript",
      },
      prompt: {
        en: "When is a union type especially useful in frontend UI work?",
        es: "Cuando es especialmente util un union type en trabajo de UI frontend?",
      },
      options: [
        {
          id: "a",
          label: {
            en: "When a value should only be one of a few allowed options",
            es: "Cuando un valor solo deberia ser una de unas pocas opciones permitidas",
          },
        },
        {
          id: "b",
          label: {
            en: "When you want to make CSS load faster",
            es: "Cuando quieres que el CSS cargue mas rapido",
          },
        },
        {
          id: "c",
          label: {
            en: "When every value should become any",
            es: "Cuando todos los valores deberian convertirse en any",
          },
        },
        {
          id: "d",
          label: {
            en: "When you only need plain HTML",
            es: "Cuando solo necesitas HTML simple",
          },
        },
      ],
      correctOptionId: "a",
      explanation: {
        en: "Union types are perfect for values like loading, success, error, tab ids, or filter modes where only a small set of options should exist.",
        es: "Los union types son perfectos para valores como loading, success, error, ids de tabs o modos de filtro donde solo deberia existir un conjunto pequeno de opciones.",
      },
      interviewTip: {
        en: "A strong answer connects unions to predictable UI state, not only to TypeScript syntax.",
        es: "Una respuesta fuerte conecta los unions con un estado de UI predecible, no solo con sintaxis de TypeScript.",
      },
    },
    {
      id: "quiz-accessibility-focus",
      type: "multiple-choice",
      category: {
        en: "Accessibility",
        es: "Accesibilidad",
      },
      prompt: {
        en: "Why are visible focus states important?",
        es: "Por que son importantes los focus states visibles?",
      },
      options: [
        {
          id: "a",
          label: {
            en: "They make gradients brighter",
            es: "Hacen que los gradientes se vean mas brillantes",
          },
        },
        {
          id: "b",
          label: {
            en: "They show keyboard users where they currently are",
            es: "Muestran a quienes usan teclado donde estan en ese momento",
          },
        },
        {
          id: "c",
          label: {
            en: "They prevent JavaScript errors",
            es: "Evitan errores de JavaScript",
          },
        },
        {
          id: "d",
          label: {
            en: "They are only useful for buttons",
            es: "Solo sirven para botones",
          },
        },
      ],
      correctOptionId: "b",
      explanation: {
        en: "Without visible focus, keyboard users can get lost because they cannot see which element is active.",
        es: "Sin focus visible, las personas que usan teclado pueden perderse porque no ven que elemento esta activo.",
      },
      interviewTip: {
        en: "Interviewers like hearing that accessibility is about usable behavior, not only passing a checklist.",
        es: "A quienes entrevistan les gusta oir que la accesibilidad trata de comportamiento util, no solo de cumplir una lista.",
      },
    },
    {
      id: "quiz-testing-behavior",
      type: "multiple-choice",
      category: {
        en: "Testing",
        es: "Testing",
      },
      prompt: {
        en: "What is usually the better testing habit in frontend UI work?",
        es: "Cual suele ser el mejor habito al hacer testing de interfaz frontend?",
      },
      options: [
        {
          id: "a",
          label: {
            en: "Test behavior the user sees",
            es: "Probar el comportamiento que ve la persona usuaria",
          },
        },
        {
          id: "b",
          label: {
            en: "Test only variable names inside the component",
            es: "Probar solo los nombres de variables dentro del componente",
          },
        },
        {
          id: "c",
          label: {
            en: "Avoid testing loading or errors",
            es: "Evitar probar cargas o errores",
          },
        },
        {
          id: "d",
          label: {
            en: "Only test CSS colors",
            es: "Probar solo los colores CSS",
          },
        },
      ],
      correctOptionId: "a",
      explanation: {
        en: "Behavior-based tests stay closer to real user value and often survive refactors better.",
        es: "Las pruebas basadas en comportamiento estan mas cerca del valor real para la persona usuaria y suelen sobrevivir mejor a los refactors.",
      },
      interviewTip: {
        en: "A strong answer often mentions that implementation details change, but user-visible behavior is what matters most.",
        es: "Una respuesta fuerte suele mencionar que los detalles internos cambian, pero el comportamiento visible es lo que mas importa.",
      },
    },
    {
      id: "quiz-code-toggle",
      type: "code-fill",
      category: {
        en: "JavaScript",
        es: "JavaScript",
      },
      prompt: {
        en: "What method is missing if you want to add or remove the active class when the button is clicked?",
        es: "Que metodo falta si quieres anadir o quitar la clase active al hacer click en el boton?",
      },
      snippet: `button.addEventListener("click", () => {\n  card.classList.___ ("active");\n});`,
      acceptableAnswers: ["toggle"],
      inputPlaceholder: {
        en: "Type the missing method",
        es: "Escribe el metodo que falta",
      },
      explanation: {
        en: "classList.toggle adds the class if it is missing and removes it if it is already there.",
        es: "classList.toggle anade la clase si falta y la quita si ya esta ahi.",
      },
      interviewTip: {
        en: "Nice interview phrasing: on click, I toggle a class so the UI can switch between two visual states.",
        es: "Buena forma de decirlo en entrevista: al hacer click, hago toggle de una clase para que la interfaz cambie entre dos estados visuales.",
      },
    },
    {
      id: "quiz-code-submit",
      type: "code-fill",
      category: {
        en: "Forms",
        es: "Formularios",
      },
      prompt: {
        en: "What is missing if you want to stop the browser from refreshing when the form is submitted?",
        es: "Que falta si quieres evitar que el navegador recargue la pagina al enviar el formulario?",
      },
      snippet: `form.addEventListener("submit", (event) => {\n  event.___();\n});`,
      acceptableAnswers: ["preventDefault"],
      inputPlaceholder: {
        en: "Type the missing method",
        es: "Escribe el metodo que falta",
      },
      explanation: {
        en: "preventDefault stops the browser's default submit action so your JavaScript can validate or handle the form first.",
        es: "preventDefault detiene la accion de envio por defecto del navegador para que tu JavaScript pueda validar o manejar el formulario antes.",
      },
      interviewTip: {
        en: "A clean answer is: I prevent the default submit so I can control validation and the user flow myself.",
        es: "Una respuesta limpia es: detengo el envio por defecto para poder controlar yo la validacion y el flujo de la persona usuaria.",
      },
    },
    {
      id: "quiz-code-grid",
      type: "code-fill",
      category: {
        en: "HTML & CSS",
        es: "HTML y CSS",
      },
      prompt: {
        en: "Which display value is missing if this layout should behave like a grid?",
        es: "Que valor de display falta si este layout debe comportarse como una cuadricula?",
      },
      snippet: `.cards {\n  display: ___;\n  grid-template-columns: repeat(3, 1fr);\n}`,
      acceptableAnswers: ["grid"],
      inputPlaceholder: {
        en: "Type the missing value",
        es: "Escribe el valor que falta",
      },
      explanation: {
        en: "The grid-template-columns property only makes sense once display is set to grid.",
        es: "La propiedad grid-template-columns solo tiene sentido cuando display esta en grid.",
      },
      interviewTip: {
        en: "A practical answer is: I choose Grid because I want rows and columns together, not only one axis.",
        es: "Una respuesta practica es: elijo Grid porque quiero filas y columnas juntas, no solo un eje.",
      },
    },
    {
      id: "quiz-code-json",
      type: "code-fill",
      category: {
        en: "APIs & Async",
        es: "APIs y asincronia",
      },
      prompt: {
        en: "What method is missing if you want to turn the fetch response into usable JSON data?",
        es: "Que metodo falta si quieres convertir la respuesta de fetch en datos JSON utilizables?",
      },
      snippet: `const response = await fetch("/api/menu");\nconst data = await response.___();`,
      acceptableAnswers: ["json"],
      inputPlaceholder: {
        en: "Type the missing method",
        es: "Escribe el metodo que falta",
      },
      explanation: {
        en: "response.json() reads the response body and parses it into JavaScript data.",
        es: "response.json() lee el cuerpo de la respuesta y lo convierte en datos de JavaScript.",
      },
      interviewTip: {
        en: "A strong answer mentions the whole flow: fetch returns a response, then json() turns the body into data I can render.",
        es: "Una respuesta fuerte menciona el flujo completo: fetch devuelve una respuesta y luego json() convierte el body en datos que puedo renderizar.",
      },
    },
    {
      id: "quiz-code-state",
      type: "code-fill",
      category: {
        en: "React",
        es: "React",
      },
      prompt: {
        en: "Which React hook is missing if this component needs a changing count value?",
        es: "Que hook de React falta si este componente necesita un contador que cambia?",
      },
      snippet: `const [count, setCount] = ___(0);`,
      acceptableAnswers: ["useState"],
      inputPlaceholder: {
        en: "Type the missing hook",
        es: "Escribe el hook que falta",
      },
      explanation: {
        en: "useState creates state and a setter so the UI can update when the value changes.",
        es: "useState crea state y una funcion para actualizarlo, de modo que la interfaz cambie cuando el valor cambie.",
      },
      interviewTip: {
        en: "A nice answer is: I use useState when the UI needs to remember a value that changes over time.",
        es: "Una buena respuesta es: uso useState cuando la interfaz necesita recordar un valor que cambia con el tiempo.",
      },
    },
    {
      id: "quiz-code-typescript-state",
      type: "code-fill",
      category: {
        en: "TypeScript",
        es: "TypeScript",
      },
      prompt: {
        en: "Which type is missing if this React state should store a number?",
        es: "Que tipo falta si este state de React debe guardar un numero?",
      },
      snippet: `const [count, setCount] = useState<___>(0);`,
      acceptableAnswers: ["number"],
      inputPlaceholder: {
        en: "Type the missing type",
        es: "Escribe el tipo que falta",
      },
      explanation: {
        en: "useState<number>(0) makes the expected state shape explicit.",
        es: "useState<number>(0) hace explicita la forma esperada del state.",
      },
      interviewTip: {
        en: "A good answer is: I type state when I want the value shape to stay clear and safe as the component grows.",
        es: "Una buena respuesta es: tipo el state cuando quiero que la forma del valor siga clara y segura mientras el componente crece.",
      },
    },
    {
      id: "quiz-code-typescript-optional",
      type: "code-fill",
      category: {
        en: "TypeScript",
        es: "TypeScript",
      },
      prompt: {
        en: "What symbol is missing if the note field should be optional?",
        es: "Que simbolo falta si el campo note debe ser opcional?",
      },
      snippet: `interface ReviewItem {\n  title: string;\n  note___: string;\n}`,
      acceptableAnswers: ["?"],
      inputPlaceholder: {
        en: "Type the missing symbol",
        es: "Escribe el simbolo que falta",
      },
      explanation: {
        en: "A question mark marks the property as optional, so objects can exist without that field.",
        es: "Un signo de interrogacion marca la propiedad como opcional, asi que los objetos pueden existir sin ese campo.",
      },
      interviewTip: {
        en: "Clean interview phrasing: optional properties model data that may exist sometimes but not always.",
        es: "Forma limpia de decirlo en entrevista: las propiedades opcionales modelan datos que a veces existen y otras veces no.",
      },
    },
    {
      id: "quiz-code-tab",
      type: "code-fill",
      category: {
        en: "Accessibility",
        es: "Accesibilidad",
      },
      prompt: {
        en: "Which ARIA attribute is missing if the button should expose whether the menu is open or closed?",
        es: "Que atributo ARIA falta si el boton debe exponer si el menu esta abierto o cerrado?",
      },
      snippet: `<button ___="false" aria-controls="menu-panel">Menu</button>`,
      acceptableAnswers: ["aria-expanded"],
      inputPlaceholder: {
        en: "Type the missing attribute",
        es: "Escribe el atributo que falta",
      },
      explanation: {
        en: "aria-expanded communicates the open or closed state of a related control.",
        es: "aria-expanded comunica el estado abierto o cerrado de un control relacionado.",
      },
      interviewTip: {
        en: "This sounds strong in interviews: I add ARIA state when native HTML alone does not communicate enough meaning.",
        es: "Esto suena fuerte en entrevistas: anado estado ARIA cuando el HTML nativo por si solo no comunica suficiente significado.",
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
    ...question,
    category: getLocalizedField(question.category, language),
    prompt: getLocalizedField(question.prompt, language),
    explanation: getLocalizedField(question.explanation, language),
    interviewTip: getLocalizedField(question.interviewTip, language),
    inputPlaceholder: getLocalizedField(question.inputPlaceholder, language),
    options: question.options?.map((option) => ({
      ...option,
      label: getLocalizedField(option.label, language),
    })),
  };
}

export function getInterviewKnowledgeCheck(language = "en") {
  return {
    title: getLocalizedField(knowledgeCheck.title, language),
    intro: getLocalizedField(knowledgeCheck.intro, language),
    coachLine: getLocalizedField(knowledgeCheck.coachLine, language),
    questions: knowledgeCheck.questions.map((question) =>
      localizeQuestion(question, language)
    ),
  };
}
