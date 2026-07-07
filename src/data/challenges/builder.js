export const builderChallenges = [
  {
    id: "toggle-message",
    editorType: "web",
    title: "Challenge 1 — Toggle Message",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Show and hide a message when a button is clicked.",
    requirements: [
      "Add a button",
      "Add a message element",
      "Hide or show the message when the button is clicked",
      "Use JavaScript to control the visibility",
    ],
    tips: [
      "You can use textContent, classList, or style.display.",
      "Start by selecting the button and the message.",
      "Use addEventListener to respond to clicks.",
    ],
    concepts: [
      "DOM selection",
      "event listeners",
      "conditional logic",
      "style updates",
    ],
    suggestedApproach: [
      "Create a button and a paragraph or div for the message.",
      "Select both elements in JavaScript.",
      "Add a click event listener to the button.",
      "Toggle the message between visible and hidden.",
    ],
    commonMistakes: [
      "Selecting the wrong element",
      "Adding the button but forgetting the click event",
      "Changing a variable without updating the DOM",
    ],
    expectedOutcome:
      "A button that lets the user show and hide a message on the page.",
    beginnerGuide: {
      en: {
        title: "Show me how to think about the JavaScript",
        intro:
          "This first Builder challenge is not about memorising code. It is about learning the basic interaction pattern: select the elements, listen for a click, check the current state, then update the page.",
        steps: [
          "The button is the thing the user interacts with, so JavaScript needs a variable for it.",
          "The message is the thing that changes, so JavaScript needs a variable for that too.",
          "addEventListener() says: when this button is clicked, run this function.",
          "The if statement checks whether the message is hidden right now.",
          "The two branches update message.style.display so the change is visible in the preview.",
        ],
        code: `// Find the button element in the HTML
// and store it inside the variable "toggleBtn"
const toggleBtn = document.getElementById("toggleBtn");

// Find the paragraph/message element in the HTML
// and store it inside the variable "message"
const message = document.getElementById("message");

// Listen for a click on the button
toggleBtn.addEventListener("click", () => {
  // Check if the message is currently hidden
  if (message.style.display === "none") {
    // If hidden, show the message
    message.style.display = "block";
  } else {
    // Otherwise, hide the message
    message.style.display = "none";
  }
});`,
      },
      es: {
        title: "Ver como pensar el JavaScript",
        intro:
          "Este primer reto Builder no va de memorizar codigo. Va de aprender el patron basico de interaccion: seleccionar elementos, escuchar un click, revisar el estado actual y actualizar la pagina.",
        steps: [
          "El boton es lo que usa la persona, asi que JavaScript necesita una variable para guardarlo.",
          "El mensaje es lo que cambia, asi que JavaScript tambien necesita una variable para guardarlo.",
          "addEventListener() significa: cuando este boton reciba click, ejecuta esta funcion.",
          "El if revisa si el mensaje esta oculto ahora mismo.",
          "Las dos ramas actualizan message.style.display para que el cambio se vea en el preview.",
        ],
        code: `// Encuentra el boton en el HTML
// y guardalo dentro de la variable "toggleBtn"
const toggleBtn = document.getElementById("toggleBtn");

// Encuentra el mensaje en el HTML
// y guardalo dentro de la variable "message"
const message = document.getElementById("message");

// Escucha un click en el boton
toggleBtn.addEventListener("click", () => {
  // Revisa si el mensaje esta oculto ahora mismo
  if (message.style.display === "none") {
    // Si esta oculto, muestra el mensaje
    message.style.display = "block";
  } else {
    // Si no, oculta el mensaje
    message.style.display = "none";
  }
});`,
      },
    },
    starter: {
      html: `<button id="toggleBtn">Toggle Message</button>
<p id="message">Hello! I can be shown or hidden.</p>`,
      css: `#message {
  margin-top: 16px;
}`,
      js: ``,
    },
    solution: {
      html: `<button id="toggleBtn">Toggle Message</button>
<p id="message">Hello! I can be shown or hidden.</p>`,
      css: `#message {
  margin-top: 16px;
}`,
      js: `const toggleBtn = document.getElementById("toggleBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});`,
    },
  },
  {
    id: "toggle-background-color",
    editorType: "web",
    title: "Challenge 2 — Toggle Background Color",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Change a preview card background color when the button is clicked.",
    requirements: [
      "Add a button",
      "Add a preview card or box",
      "Toggle the background color on click",
      "Use JavaScript to control the change",
    ],
    tips: [
      "This is the same click pattern as toggle message, but the thing changing is the style.",
      "classList.toggle() is a clean way to switch styles.",
      "Keep one visual area so the change is obvious.",
    ],
    concepts: [
      "event listeners",
      "classList.toggle",
      "style changes",
      "DOM selection",
    ],
    suggestedApproach: [
      "Create a button and a preview card.",
      "Add a CSS class with the alternate background color.",
      "Select the button and card in JavaScript.",
      "Toggle the class inside a click handler.",
    ],
    commonMistakes: [
      "Changing a variable without changing the DOM class or style",
      "Toggling the class on the wrong element",
      "Using a color change that is too subtle to notice",
    ],
    expectedOutcome:
      "A preview card that switches between two clear background styles when the user clicks.",
    starter: {
      html: `<button id="colorBtn">Toggle Color</button>
<div id="colorCard" class="color-card">Preview card</div>`,
      css: `.color-card {
  margin-top: 16px;
  padding: 24px;
  border-radius: 16px;
  background: #e2e8f0;
}

.color-card.is-active {
  background: #fde68a;
}`,
      js: ``,
    },
    solution: {
      html: `<button id="colorBtn">Toggle Color</button>
<div id="colorCard" class="color-card">Preview card</div>`,
      css: `.color-card {
  margin-top: 16px;
  padding: 24px;
  border-radius: 16px;
  background: #e2e8f0;
}

.color-card.is-active {
  background: #fde68a;
}`,
      js: `const colorBtn = document.getElementById("colorBtn");
const colorCard = document.getElementById("colorCard");

colorBtn.addEventListener("click", () => {
  colorCard.classList.toggle("is-active");
});`,
    },
  },
  {
    id: "toggle-button-label",
    editorType: "web",
    title: "Challenge 3 — Toggle Button Label",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Toggle a details panel and update the button text between Show and Hide.",
    requirements: [
      "Add a button",
      "Add a details element or paragraph",
      "Toggle the content visibility on click",
      "Update the button label after each click",
    ],
    tips: [
      "The main pattern is still click -> change something in the UI.",
      "Check one condition, then update both the text and the visibility together.",
      "Use textContent to swap the button label.",
    ],
    concepts: [
      "event listeners",
      "conditional logic",
      "textContent",
      "toggle behavior",
    ],
    suggestedApproach: [
      "Create a button and a paragraph for the extra details.",
      "Hide the details by default.",
      "On click, show or hide the details.",
      "Update the button label so the user always knows the next action.",
    ],
    commonMistakes: [
      "Changing the visibility but not the button text",
      "Checking the wrong condition",
      "Leaving the label stuck on one value",
    ],
    expectedOutcome:
      "A button that changes from Show details to Hide details while controlling a small content block.",
    starter: {
      html: `<button id="detailsBtn">Show Details</button>
<p id="detailsText" hidden>This extra information is now visible.</p>`,
      css: `#detailsText {
  margin-top: 14px;
}`,
      js: ``,
    },
    solution: {
      html: `<button id="detailsBtn">Show Details</button>
<p id="detailsText" hidden>This extra information is now visible.</p>`,
      css: `#detailsText {
  margin-top: 14px;
}`,
      js: `const detailsBtn = document.getElementById("detailsBtn");
const detailsText = document.getElementById("detailsText");

detailsBtn.addEventListener("click", () => {
  const isHidden = detailsText.hidden;
  detailsText.hidden = !isHidden;
  detailsBtn.textContent = isHidden ? "Hide Details" : "Show Details";
});`,
    },
  },
  {
    id: "toggle-card-class",
    editorType: "web",
    title: "Challenge 4 — Toggle Card Class",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Toggle a highlighted class on a card so it changes appearance when clicked.",
    requirements: [
      "Add a card",
      "Add a button",
      "Create a highlight class in CSS",
      "Toggle the highlight class with JavaScript",
    ],
    tips: [
      "This challenge helps the user see that JavaScript often triggers CSS classes instead of setting every style directly.",
      "Use one class for the active state so the code stays readable.",
      "Box shadow, border, or background are all good visual changes.",
    ],
    concepts: [
      "classList.toggle",
      "event listeners",
      "stateful styling",
      "UI feedback",
    ],
    suggestedApproach: [
      "Create one card and one action button.",
      "Write a CSS class for the highlighted version.",
      "Select the button and card in JavaScript.",
      "Toggle the highlight class inside the click handler.",
    ],
    commonMistakes: [
      "Writing the CSS class but never applying it",
      "Applying the class to the button instead of the card",
      "Using className in a way that removes other needed classes",
    ],
    expectedOutcome:
      "A card that can switch between normal and highlighted states with one click.",
    starter: {
      html: `<article id="planCard" class="plan-card">
  <h2>Starter plan</h2>
  <p>Good for focused daily frontend practice.</p>
</article>
<button id="highlightBtn">Highlight plan</button>`,
      css: `.plan-card {
  margin-bottom: 14px;
  padding: 20px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: white;
}

.plan-card.is-highlighted {
  border-color: #2563eb;
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.18);
}`,
      js: ``,
    },
    solution: {
      html: `<article id="planCard" class="plan-card">
  <h2>Starter plan</h2>
  <p>Good for focused daily frontend practice.</p>
</article>
<button id="highlightBtn">Highlight plan</button>`,
      css: `.plan-card {
  margin-bottom: 14px;
  padding: 20px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: white;
}

.plan-card.is-highlighted {
  border-color: #2563eb;
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.18);
}`,
      js: `const planCard = document.getElementById("planCard");
const highlightBtn = document.getElementById("highlightBtn");

highlightBtn.addEventListener("click", () => {
  planCard.classList.toggle("is-highlighted");
});`,
    },
  },
  {
    id: "character-counter",
    editorType: "web",
    title: "Challenge 5 — Character Counter",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Update a live character counter as the user types, then style the count differently for even and odd numbers.",
    requirements: [
      "Add a textarea or input",
      "Add an element to show the count",
      "Update the count on every input change",
      "Make the count red when the character count is even",
      "Make the count blue when the character count is odd",
    ],
    tips: [
      "Use the input event.",
      "You can read the current text with value.",
      "Use textContent to update the counter display.",
      "Use the remainder operator % to check whether the count is even or odd.",
      "You can set count.style.color directly, or set a CSS class such as red or blue.",
    ],
    concepts: [
      "input events",
      "DOM updates",
      "string length",
      "textContent",
      "modulo",
      "CSS classes",
    ],
    suggestedApproach: [
      "Create an input or textarea and a counter element.",
      "Select both elements in JavaScript.",
      "Listen for the input event.",
      "Update the counter with the text length.",
      "Check whether the length is even or odd.",
      "Apply the red or blue class to the counter.",
    ],
    commonMistakes: [
      "Using click instead of input",
      "Forgetting to read input.value.length",
      "Updating the variable but not the page text",
      "Changing the text but forgetting to update the colour each time",
      "Writing CSS classes but never applying them from JavaScript",
    ],
    expectedOutcome:
      "A text field with a live counter that changes as the user types: even counts appear red and odd counts appear blue.",
    beginnerGuide: {
      en: {
        title: "Two ways to change colour from JavaScript",
        intro:
          "The counter has two jobs: show the current number, then choose a colour based on that number. You can do the colour part directly in JavaScript, or you can let JavaScript choose a CSS class.",
        steps: [
          "Read messageInput.value.length and store it in a variable like total.",
          "Use total % 2 === 0 to ask: is this number even?",
          "Option 1 is inline style: count.style.color = \"red\" or \"blue\".",
          "Option 2 is CSS classes: define .red and .blue in CSS, then set count.className from JavaScript.",
          "The class approach is usually cleaner because CSS owns the visual styling and JavaScript only decides which state is active.",
        ],
        code: `// Option 1: direct inline style
if (total % 2 === 0) {
  count.style.color = "red";
} else {
  count.style.color = "blue";
}

// Option 2: CSS class
// .red { color: red; }
// .blue { color: blue; }
count.className = total % 2 === 0 ? "red" : "blue";`,
      },
      es: {
        title: "Dos formas de cambiar color con JavaScript",
        intro:
          "El contador tiene dos trabajos: mostrar el numero actual y elegir un color segun ese numero. Puedes cambiar el color directamente en JavaScript o usar JavaScript para elegir una clase CSS.",
        steps: [
          "Lee messageInput.value.length y guardalo en una variable como total.",
          "Usa total % 2 === 0 para preguntar: este numero es par?",
          "Opcion 1: estilo directo con count.style.color = \"red\" o \"blue\".",
          "Opcion 2: clases CSS. Define .red y .blue en CSS, y luego cambia count.className desde JavaScript.",
          "El enfoque con clases suele ser mas limpio porque CSS se encarga del estilo visual y JavaScript solo decide que estado esta activo.",
        ],
        code: `// Opcion 1: estilo directo
if (total % 2 === 0) {
  count.style.color = "red";
} else {
  count.style.color = "blue";
}

// Opcion 2: clase CSS
// .red { color: red; }
// .blue { color: blue; }
count.className = total % 2 === 0 ? "red" : "blue";`,
      },
    },
    starter: {
      html: `<textarea id="messageInput" placeholder="Type here..."></textarea>
<p>Characters: <span id="count">0</span></p>`,
      css: `textarea {
  width: 100%;
  min-height: 120px;
}

/* Add red and blue counter classes here. */`,
      js: ``,
    },
    solution: {
      html: `<textarea id="messageInput" placeholder="Type here..."></textarea>
<p>Characters: <span id="count">0</span></p>`,
      css: `textarea {
  width: 100%;
  min-height: 120px;
}

.red {
  color: red;
}

.blue {
  color: blue;
}`,
      js: `const messageInput = document.getElementById("messageInput");
const count = document.getElementById("count");

messageInput.addEventListener("input", () => {
  const total = messageInput.value.length;
  count.textContent = total;

  // This solution uses CSS classes.
  // Another valid option is: count.style.color = "red";
  count.className = total % 2 === 0 ? "red" : "blue";
});`,
    },
  },
  {
    id: "live-search-filter",
    editorType: "web",
    title: "Challenge 6 — Live Search Filter",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Filter a list of items based on what the user types.",
    requirements: [
      "Add an input",
      "Show a list of items",
      "Filter the visible items as the user types",
    ],
    tips: [
      "Convert both values to lowercase before comparing.",
      "Loop through the items and decide whether to show each one.",
      "The includes() method is useful here.",
    ],
    concepts: ["arrays", "string matching", "input events", "DOM filtering"],
    suggestedApproach: [
      "Create an input and a list of items.",
      "Select the input and the list items.",
      "Listen for input changes.",
      "Check which items include the search text and hide the rest.",
    ],
    commonMistakes: [
      "Forgetting lowercase matching",
      "Only filtering once instead of on every keystroke",
      "Hiding all items because of incorrect comparison logic",
    ],
    expectedOutcome:
      "A searchable list where matching items stay visible and non-matching items are hidden.",
    beginnerGuide: {
      en: {
        title: "How to think about live search",
        intro:
          "Live search is the same pattern repeated quickly: listen while the user types, read the current search text, compare it with every item, then update each item's visibility.",
        steps: [
          "Select the input because it contains what the user types.",
          "Select every fruit item because each one may need to show or hide.",
          "Listen for the input event because it fires on every keystroke.",
          "Lowercase both pieces of text so Apple still matches apple.",
          "Use includes() to decide whether each fruit should stay visible.",
        ],
        code: `const searchInput = document.getElementById("searchInput");
// Find the input box

const items = document.querySelectorAll("#fruitList li");
// Find all <li> items inside the element with id="fruitList"

searchInput.addEventListener("input", () => {
  // Every time the user types in the input, run this code

  const searchValue = searchInput.value.toLowerCase();
  // Get what the user typed and make it lowercase

  items.forEach((item) => {
    // Go through each fruit item one by one

    const itemText = item.textContent.toLowerCase();
    // Get the text of the current fruit and make it lowercase

    if (itemText.includes(searchValue)) {
      // If the fruit text includes what the user typed

      item.style.display = "list-item";
      // Show this fruit
    } else {
      // Otherwise

      item.style.display = "none";
      // Hide this fruit
    }
  });
});`,
      },
      es: {
        title: "Como pensar una busqueda en vivo",
        intro:
          "Una busqueda en vivo repite el mismo patron rapidamente: escuchar mientras la persona escribe, leer el texto actual, compararlo con cada item y actualizar la visibilidad.",
        steps: [
          "Selecciona el input porque contiene lo que escribe la persona.",
          "Selecciona cada fruta porque cada una puede necesitar mostrarse u ocultarse.",
          "Escucha el evento input porque se ejecuta con cada tecla.",
          "Convierte ambos textos a minusculas para que Apple tambien coincida con apple.",
          "Usa includes() para decidir si cada fruta debe seguir visible.",
        ],
        code: `const searchInput = document.getElementById("searchInput");
// Encuentra el input de busqueda

const items = document.querySelectorAll("#fruitList li");
// Encuentra todos los <li> dentro del elemento con id="fruitList"

searchInput.addEventListener("input", () => {
  // Cada vez que la persona escribe en el input, ejecuta este codigo

  const searchValue = searchInput.value.toLowerCase();
  // Lee lo que escribio la persona y pasalo a minusculas

  items.forEach((item) => {
    // Recorre cada fruta una por una

    const itemText = item.textContent.toLowerCase();
    // Lee el texto de esta fruta y pasalo a minusculas

    if (itemText.includes(searchValue)) {
      // Si el texto de la fruta incluye lo que se escribio

      item.style.display = "list-item";
      // Muestra esta fruta
    } else {
      // Si no

      item.style.display = "none";
      // Oculta esta fruta
    }
  });
});`,
      },
    },
    starter: {
      html: `<input id="searchInput" type="text" placeholder="Search fruits..." />
<ul id="fruitList">
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
  <li>Grapes</li>
</ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="searchInput" type="text" placeholder="Search fruits..." />
<ul id="fruitList">
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
  <li>Grapes</li>
</ul>`,
      css: ``,
      js: `const searchInput = document.getElementById("searchInput");
const items = document.querySelectorAll("#fruitList li");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  items.forEach((item) => {
    const itemText = item.textContent.toLowerCase();

    if (itemText.includes(searchValue)) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
});`,
    },
  },
  {
    id: "filter-lessons-with-filter-method",
    editorType: "web",
    title: "Challenge 7 — Filter Lesson Names with filter()",
    difficulty: "Easy",
    category: "JavaScript + Arrays",
    goal: "Use filter() on a simple array of strings before combining it with objects, search inputs, or card rendering.",
    requirements: [
      "Create an array of lesson names as strings",
      "Add a Show all button and a JavaScript only button",
      "Use filter() to create a smaller array of JavaScript lessons",
      "Render the current array into a list with forEach()",
      "Update a small count message after each render",
    ],
    tips: [
      "filter() returns a new array. It does not change the original lessons array.",
      "Start with strings so you can focus on the method itself.",
      "Use forEach() to render for now. map() can come later.",
    ],
    concepts: ["filter()", "arrays", "button events", "forEach()", "rendering lists"],
    suggestedApproach: [
      "Create the lesson names array.",
      "Write a renderLessons function that receives an array.",
      "Use forEach() inside the render function to create list items.",
      "Use filter() only inside the JavaScript only button click.",
    ],
    commonMistakes: [
      "Expecting filter() to change the original array",
      "Filtering correctly but still rendering the full array",
      "Using map(), objects, and search logic before filter() feels clear",
    ],
    expectedOutcome:
      "A small lesson list where the learner can explain that filter() creates a smaller array from a bigger one.",
    starter: {
      html: `<section class="lesson-filter">
  <div class="button-row">
    <button id="showAllLessonsBtn" type="button">Show all</button>
    <button id="showJsLessonsBtn" type="button">JavaScript only</button>
  </div>
  <p id="lessonCount">No lessons shown yet</p>
  <ul id="lessonList"></ul>
</section>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section class="lesson-filter">
  <div class="button-row">
    <button id="showAllLessonsBtn" type="button">Show all</button>
    <button id="showJsLessonsBtn" type="button">JavaScript only</button>
  </div>
  <p id="lessonCount">No lessons shown yet</p>
  <ul id="lessonList"></ul>
</section>`,
      css: `.lesson-filter {
  max-width: 520px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.button-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.button-row button {
  padding: 10px 14px;
  border: 0;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

#lessonCount {
  color: #435269;
}

#lessonList {
  padding-left: 20px;
}`,
      js: `const lessons = [
  "HTML structure",
  "CSS layout",
  "JavaScript events",
  "JavaScript arrays",
  "Responsive CSS",
];

const showAllLessonsBtn = document.getElementById("showAllLessonsBtn");
const showJsLessonsBtn = document.getElementById("showJsLessonsBtn");
const lessonCount = document.getElementById("lessonCount");
const lessonList = document.getElementById("lessonList");

function renderLessons(items) {
  lessonList.innerHTML = "";

  items.forEach((lesson) => {
    const listItem = document.createElement("li");
    listItem.textContent = lesson;
    lessonList.appendChild(listItem);
  });

  lessonCount.textContent = items.length + " lesson" + (items.length === 1 ? "" : "s") + " shown";
}

showAllLessonsBtn.addEventListener("click", () => {
  renderLessons(lessons);
});

showJsLessonsBtn.addEventListener("click", () => {
  const jsLessons = lessons.filter((lesson) => {
    return lesson.includes("JavaScript");
  });

  renderLessons(jsLessons);
});

renderLessons(lessons);`,
    },
  },
  {
    id: "select-preview-change-event",
    editorType: "web",
    title: "Challenge 8 — Update a Preview with a Select",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Use a select input and the change event to update a live plan preview.",
    requirements: [
      "Add a select element with at least three options",
      "Listen for the change event",
      "Update a preview heading and description",
      "Change at least one class or visual style when the selected option changes",
    ],
    tips: [
      "The change event is better than input for select controls.",
      "An object can store the preview content for each option.",
      "Use className or classList to make the preview feel different for each option.",
    ],
    concepts: ["change events", "select values", "objects", "class updates"],
    suggestedApproach: [
      "Create a select with three plan values.",
      "Create an object where each value points to preview text.",
      "Read select.value when the change event fires.",
      "Update the preview text and class from the selected data.",
    ],
    commonMistakes: [
      "Using the input event when change is clearer for a select",
      "Reading option text instead of the select value",
      "Updating the text but forgetting the visual state",
    ],
    expectedOutcome:
      "A select-controlled preview that changes content and styling when the user chooses an option.",
    starter: {
      html: `<section class="plan-builder">
  <label for="planSelect">Choose a plan</label>
  <select id="planSelect">
    <option value="starter">Starter</option>
    <option value="team">Team</option>
    <option value="pro">Pro</option>
  </select>

  <article id="planPreview" class="plan-card">
    <h2 id="planTitle">Starter</h2>
    <p id="planDescription">A calm plan for learning the basics.</p>
  </article>
</section>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section class="plan-builder">
  <label for="planSelect">Choose a plan</label>
  <select id="planSelect">
    <option value="starter">Starter</option>
    <option value="team">Team</option>
    <option value="pro">Pro</option>
  </select>

  <article id="planPreview" class="plan-card">
    <h2 id="planTitle">Starter</h2>
    <p id="planDescription">A calm plan for learning the basics.</p>
  </article>
</section>`,
      css: `.plan-builder {
  max-width: 520px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.plan-builder label {
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
}

.plan-builder select {
  width: 100%;
  padding: 12px;
  border: 1px solid #b9c2d0;
  border-radius: 8px;
}

.plan-card {
  margin-top: 18px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #d7deea;
}

.plan-card h2 {
  margin: 0 0 8px;
}

.starter-plan {
  background: #f8fbff;
}

.team-plan {
  background: #f1fff7;
}

.pro-plan {
  background: #fff8ed;
}`,
      js: `const planSelect = document.getElementById("planSelect");
const planPreview = document.getElementById("planPreview");
const planTitle = document.getElementById("planTitle");
const planDescription = document.getElementById("planDescription");

const planDetails = {
  starter: {
    title: "Starter",
    description: "A calm plan for learning the basics.",
    className: "starter-plan",
  },
  team: {
    title: "Team",
    description: "A focused plan for practising with peers.",
    className: "team-plan",
  },
  pro: {
    title: "Pro",
    description: "A stronger plan for interview-level repetition.",
    className: "pro-plan",
  },
};

function updatePlanPreview() {
  const selectedPlan = planDetails[planSelect.value];
  planTitle.textContent = selectedPlan.title;
  planDescription.textContent = selectedPlan.description;
  planPreview.className = "plan-card " + selectedPlan.className;
}

planSelect.addEventListener("change", updatePlanPreview);

updatePlanPreview();`,
    },
  },
  {
    id: "checkbox-summary-panel",
    editorType: "web",
    title: "Challenge 9 — Checkbox Summary Panel",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Use checkbox change events to build a live summary of selected preferences.",
    requirements: [
      "Add at least three checkbox inputs",
      "Listen for the change event on each checkbox",
      "Show how many choices are currently selected",
      "Render the selected choices in a summary list",
      "Show a clear empty state when no checkboxes are selected",
      "Style the checkbox group and summary card so the feedback is easy to scan",
    ],
    tips: [
      "Checkboxes use the checked property, not the value alone.",
      "Use forEach() to check each box one at a time.",
      "The summary should update whenever any checkbox changes.",
    ],
    concepts: ["checkboxes", "change events", "checked", "forEach()", "DOM updates"],
    suggestedApproach: [
      "Create a checkbox group and a summary area.",
      "Select all checkboxes with querySelectorAll.",
      "On change, loop through the checkboxes.",
      "If a checkbox is checked, add its value to the summary list.",
    ],
    commonMistakes: [
      "Checking the value instead of the checked property",
      "Only listening to one checkbox",
      "Not handling the empty state after everything is unchecked",
    ],
    expectedOutcome:
      "A preferences panel where the summary and selected count always match the checked boxes.",
    starter: {
      html: `<section class="preferences">
  <h2>Choose your practice focus</h2>
  <label><input class="preferenceOption" type="checkbox" value="HTML structure" /> HTML structure</label>
  <label><input class="preferenceOption" type="checkbox" value="CSS layout" /> CSS layout</label>
  <label><input class="preferenceOption" type="checkbox" value="DOM events" /> DOM events</label>

  <aside class="summary-card">
    <strong id="selectedCount">0 selected</strong>
    <ul id="selectedList"></ul>
  </aside>
</section>`,
      css: `/* Style the preferences section, checkbox labels, and summary card. */
/* Make the selected count and summary list easy to read. */`,
      js: `// Select the checkboxes, selected count, and selected list.
// Write an updateSummary function.
// In that function, loop through each checkbox and check option.checked.
// Add checked options to the summary list and update the selected count.
// Run updateSummary whenever a checkbox changes.`,
    },
    solution: {
      html: `<section class="preferences">
  <h2>Choose your practice focus</h2>
  <label><input class="preferenceOption" type="checkbox" value="HTML structure" /> HTML structure</label>
  <label><input class="preferenceOption" type="checkbox" value="CSS layout" /> CSS layout</label>
  <label><input class="preferenceOption" type="checkbox" value="DOM events" /> DOM events</label>

  <aside class="summary-card">
    <strong id="selectedCount">0 selected</strong>
    <ul id="selectedList"></ul>
  </aside>
</section>`,
      css: `.preferences {
  max-width: 560px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.preferences h2 {
  margin-top: 0;
}

.preferences label {
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 10px 0;
}

.summary-card {
  margin-top: 18px;
  padding: 16px;
  border: 1px solid #d6deea;
  border-radius: 8px;
  background: #fbfcff;
}

.summary-card ul {
  margin-bottom: 0;
  padding-left: 20px;
}`,
      js: `const preferenceOptions = document.querySelectorAll(".preferenceOption");
const selectedCount = document.getElementById("selectedCount");
const selectedList = document.getElementById("selectedList");

function updateSummary() {
  let selectedTotal = 0;
  selectedList.innerHTML = "";

  preferenceOptions.forEach((option) => {
    if (option.checked) {
      selectedTotal += 1;

      const listItem = document.createElement("li");
      listItem.textContent = option.value;
      selectedList.appendChild(listItem);
    }
  });

  if (selectedTotal === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.textContent = "No focus chosen yet";
    selectedList.appendChild(emptyItem);
  }

  selectedCount.textContent = selectedTotal + " selected";
}

preferenceOptions.forEach((option) => {
  option.addEventListener("change", updateSummary);
});

updateSummary();`,
    },
  },
  {
    id: "range-slider-live-preview",
    editorType: "web",
    title: "Challenge 10 — Range Slider Live Preview",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Use a range input to update a preview card while the user moves the slider.",
    requirements: [
      "Add a range input",
      "Listen for the input event",
      "Show the current range value in the UI",
      "Use the range value to update a preview style",
      "Style the preview so the change is easy to see",
    ],
    tips: [
      "Range inputs usually feel best with the input event because it updates continuously.",
      "The value from an input is a string, but you can still combine it with px for CSS.",
      "Update the text label and the style in the same function.",
    ],
    concepts: ["range inputs", "input events", "inline styles", "live feedback"],
    suggestedApproach: [
      "Create a range input and a preview paragraph.",
      "Read the range value inside an update function.",
      "Write the value into the label.",
      "Apply the value to the preview style.",
    ],
    commonMistakes: [
      "Using change and wondering why the preview updates late",
      "Forgetting to add px when setting fontSize",
      "Updating the style but not the displayed number",
    ],
    expectedOutcome:
      "A slider-controlled preview where the visible value and the card style stay in sync.",
    starter: {
      html: `<section class="text-size-tool">
  <label for="sizeRange">Text size: <span id="sizeValue">20px</span></label>
  <input id="sizeRange" type="range" min="14" max="40" value="20" />

  <article class="preview-card">
    <p id="previewText">Move the slider to resize this preview text.</p>
  </article>
</section>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section class="text-size-tool">
  <label for="sizeRange">Text size: <span id="sizeValue">20px</span></label>
  <input id="sizeRange" type="range" min="14" max="40" value="20" />

  <article class="preview-card">
    <p id="previewText">Move the slider to resize this preview text.</p>
  </article>
</section>`,
      css: `.text-size-tool {
  max-width: 560px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.text-size-tool label {
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
}

.text-size-tool input {
  width: 100%;
}

.preview-card {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #d8deea;
  border-radius: 8px;
  background: #ffffff;
}

.preview-card p {
  margin: 0;
  line-height: 1.4;
}`,
      js: `const sizeRange = document.getElementById("sizeRange");
const sizeValue = document.getElementById("sizeValue");
const previewText = document.getElementById("previewText");

function updatePreviewSize() {
  const size = sizeRange.value;
  sizeValue.textContent = size + "px";
  previewText.style.fontSize = size + "px";
}

sizeRange.addEventListener("input", updatePreviewSize);

updatePreviewSize();`,
    },
  },
  {
    id: "keydown-enter-add-tag",
    editorType: "web",
    title: "Challenge 11 — Add a Tag with Enter",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Use a keyboard event to add tags when the user presses Enter.",
    requirements: [
      "Add a text input for a new tag",
      "Listen for a keydown event",
      "Only add the tag when the Enter key is pressed",
      "Add the new tag to a visible list",
      "Clear the input after a tag is added",
      "Show helpful feedback when the input is empty",
    ],
    tips: [
      "Check event.key to know which key was pressed.",
      "Use trim() so empty spaces do not become tags.",
      "Use createElement() here so you can focus on the keyboard event before adding array state later.",
    ],
    concepts: ["keydown events", "event.key", "trim()", "createElement()", "DOM updates"],
    suggestedApproach: [
      "Create an input, status text, and list.",
      "On keydown, return early unless the key is Enter.",
      "Validate the text.",
      "Create a new list item, append it, clear the input, and update the status.",
    ],
    commonMistakes: [
      "Adding a tag on every key press",
      "Forgetting preventDefault when using Enter",
      "Allowing empty strings into the list",
    ],
    expectedOutcome:
      "A keyboard-driven tag list that behaves like a real form control.",
    starter: {
      html: `<section class="tag-tool">
  <label for="tagInput">Add a skill tag</label>
  <input id="tagInput" type="text" placeholder="Type a tag and press Enter" />
  <p id="tagStatus">No tags yet</p>
  <ul id="tagList" class="tag-list"></ul>
</section>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section class="tag-tool">
  <label for="tagInput">Add a skill tag</label>
  <input id="tagInput" type="text" placeholder="Type a tag and press Enter" />
  <p id="tagStatus">No tags yet</p>
  <ul id="tagList" class="tag-list"></ul>
</section>`,
      css: `.tag-tool {
  max-width: 560px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.tag-tool label {
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
}

.tag-tool input {
  width: 100%;
  padding: 12px;
  border: 1px solid #bac4d2;
  border-radius: 8px;
}

#tagStatus {
  color: #4a5870;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  list-style: none;
}

.tag-list li {
  padding: 6px 10px;
  border-radius: 999px;
  background: #eef5ff;
  color: #27456f;
}`,
      js: `const tagInput = document.getElementById("tagInput");
const tagStatus = document.getElementById("tagStatus");
const tagList = document.getElementById("tagList");

let tagCount = 0;

tagInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();

  const newTag = tagInput.value.trim();

  if (newTag === "") {
    tagStatus.textContent = "Type a tag before pressing Enter.";
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = newTag;
  tagList.appendChild(listItem);

  tagCount += 1;
  tagInput.value = "";
  tagStatus.textContent = tagCount + " tag" + (tagCount === 1 ? "" : "s") + " added";
});`,
    },
  },
  {
    id: "no-results-search-state",
    editorType: "web",
    title: "Challenge 12 — No Results Found State",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Search a list and show a No results found message when nothing matches.",
    requirements: [
      "Add a search input",
      "Show a list of items",
      "Show No results found when nothing matches",
      "Hide the message when matches exist",
    ],
    tips: [
      "Count how many items remain visible after filtering.",
      "A good search experience includes an empty state.",
      "This is a small but very real product behavior.",
    ],
    concepts: ["input events", "empty states", "DOM filtering", "UI feedback"],
    suggestedApproach: [
      "Create the input, list, and no-results message.",
      "Filter the list on every input event.",
      "Track whether at least one item still matches.",
      "Toggle the empty-state message based on the result count.",
    ],
    commonMistakes: [
      "Showing the message even when one item still matches",
      "Never hiding the message after results return",
      "Counting items before updating their visibility",
    ],
    expectedOutcome:
      "A search list with a helpful empty state instead of a confusing blank area.",
    starter: {
      html: `<input id="drinkSearchInput" type="text" placeholder="Search drinks..." />
<p id="noResultsText" hidden>No results found.</p>
<ul id="drinkList">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Juice</li>
  <li>Water</li>
</ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="drinkSearchInput" type="text" placeholder="Search drinks..." />
<p id="noResultsText" hidden>No results found.</p>
<ul id="drinkList">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Juice</li>
  <li>Water</li>
</ul>`,
      css: ``,
      js: `const drinkSearchInput = document.getElementById("drinkSearchInput");
const noResultsText = document.getElementById("noResultsText");
const drinkItems = document.querySelectorAll("#drinkList li");

drinkSearchInput.addEventListener("input", () => {
  const query = drinkSearchInput.value.toLowerCase();
  let matches = 0;

  drinkItems.forEach((item) => {
    const isMatch = item.textContent.toLowerCase().includes(query);
    item.style.display = isMatch ? "list-item" : "none";

    if (isMatch) {
      matches += 1;
    }
  });

  noResultsText.hidden = matches > 0;
});`,
    },
  },
  {
    id: "clear-search-button",
    editorType: "web",
    title: "Challenge 13 — Clear the Search",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Add a clear button that empties the search field and restores all results.",
    requirements: [
      "Add a search input",
      "Add a clear button",
      "Filter the items while typing",
      "Restore all items when the clear button is clicked",
    ],
    tips: [
      "A small helper function makes the filter and reset logic easier to reuse.",
      "The clear button should reset both the input value and the visible list.",
      "This is a very common pattern in apps and dashboards.",
    ],
    concepts: ["input events", "click events", "DOM filtering", "UI reset"],
    suggestedApproach: [
      "Create the input, clear button, and item list.",
      "Write a function that applies the current search query to the list.",
      "Call that function on input.",
      "Set the input to an empty string and call the same function when clear is clicked.",
    ],
    commonMistakes: [
      "Clearing the input value but not the filtered list",
      "Duplicating the filter logic instead of reusing one function",
      "Leaving some items hidden after reset",
    ],
    expectedOutcome:
      "A search interface that can be cleared quickly without refreshing the page.",
    starter: {
      html: `<input id="topicSearchInput" type="text" placeholder="Search topics..." />
<button id="clearSearchBtn" type="button">Clear</button>
<ul id="topicList">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>React</li>
</ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="topicSearchInput" type="text" placeholder="Search topics..." />
<button id="clearSearchBtn" type="button">Clear</button>
<ul id="topicList">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>React</li>
</ul>`,
      css: ``,
      js: `const topicSearchInput = document.getElementById("topicSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const topicItems = document.querySelectorAll("#topicList li");

function filterTopics() {
  const query = topicSearchInput.value.toLowerCase();

  topicItems.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query)
      ? "list-item"
      : "none";
  });
}

topicSearchInput.addEventListener("input", filterTopics);

clearSearchBtn.addEventListener("click", () => {
  topicSearchInput.value = "";
  filterTopics();
});`,
    },
  },
  {
    id: "bold-matching-fruits",
    editorType: "web",
    title: "Challenge 14 — Make Matching Fruits Bold",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Highlight matching fruits by making them bold while the user types.",
    requirements: [
      "Add a search input",
      "Show a list of fruits",
      "Make matching fruits bold",
      "Reset the text style when a fruit no longer matches",
    ],
    tips: [
      "This is a nice variation because not every search needs to hide results.",
      "You can update fontWeight directly or toggle a class.",
      "Check for an empty query so the list resets cleanly.",
    ],
    concepts: ["input events", "style updates", "string matching", "live feedback"],
    suggestedApproach: [
      "Create the input and fruit list.",
      "Listen for the input event.",
      "Compare each fruit against the current query.",
      "Make only the matching fruits bold and reset the others.",
    ],
    commonMistakes: [
      "Leaving fruits bold after they stop matching",
      "Making every item bold regardless of the query",
      "Forgetting to handle the empty input state",
    ],
    expectedOutcome:
      "A search-like interaction where matches are highlighted instead of hidden.",
    starter: {
      html: `<input id="boldFruitInput" type="text" placeholder="Find fruits..." />
<ul id="boldFruitList">
  <li>Apple</li>
  <li>Banana</li>
  <li>Grapes</li>
  <li>Mango</li>
  <li>Orange</li>
</ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="boldFruitInput" type="text" placeholder="Find fruits..." />
<ul id="boldFruitList">
  <li>Apple</li>
  <li>Banana</li>
  <li>Grapes</li>
  <li>Mango</li>
  <li>Orange</li>
</ul>`,
      css: ``,
      js: `const boldFruitInput = document.getElementById("boldFruitInput");
const boldFruitItems = document.querySelectorAll("#boldFruitList li");

boldFruitInput.addEventListener("input", () => {
  const query = boldFruitInput.value.toLowerCase();

  boldFruitItems.forEach((item) => {
    const isMatch =
      query !== "" && item.textContent.toLowerCase().includes(query);
    item.style.fontWeight = isMatch ? "700" : "400";
  });
});`,
    },
  },
  {
    id: "search-cards-layout",
    editorType: "web",
    title: "Challenge 15 — Search Cards Instead of List Items",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Search a group of cards and show only the cards that match the typed text.",
    requirements: [
      "Add a search input",
      "Show content in cards instead of list items",
      "Search the card titles or text",
      "Hide cards that do not match",
    ],
    tips: [
      "The same pattern works on cards, not just lists.",
      "article elements are good for simple cards.",
      "Search the visible text inside each card.",
    ],
    concepts: ["input events", "card UI", "DOM filtering", "text matching"],
    suggestedApproach: [
      "Create the search input and a small grid of cards.",
      "Select the cards in JavaScript.",
      "Read the current input value on each keystroke.",
      "Show matching cards and hide the rest.",
    ],
    commonMistakes: [
      "Searching only one card because of a selector mistake",
      "Hiding the wrong element instead of the full card",
      "Writing logic that only works for exact words",
    ],
    expectedOutcome:
      "A search feature that works across cards, which is closer to many real interfaces.",
    starter: {
      html: `<input id="cardSearchInput" type="text" placeholder="Search lessons..." />
<section class="card-grid">
  <article class="search-card"><h3>Flexbox Basics</h3><p>Learn alignment and spacing.</p></article>
  <article class="search-card"><h3>JavaScript Events</h3><p>Handle clicks and typing.</p></article>
  <article class="search-card"><h3>React State</h3><p>Control interactive UI with state.</p></article>
</section>`,
      css: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.search-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}`,
      js: ``,
    },
    solution: {
      html: `<input id="cardSearchInput" type="text" placeholder="Search lessons..." />
<section class="card-grid">
  <article class="search-card"><h3>Flexbox Basics</h3><p>Learn alignment and spacing.</p></article>
  <article class="search-card"><h3>JavaScript Events</h3><p>Handle clicks and typing.</p></article>
  <article class="search-card"><h3>React State</h3><p>Control interactive UI with state.</p></article>
</section>`,
      css: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.search-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}`,
      js: `const cardSearchInput = document.getElementById("cardSearchInput");
const searchCards = document.querySelectorAll(".search-card");

cardSearchInput.addEventListener("input", () => {
  const query = cardSearchInput.value.toLowerCase();

  searchCards.forEach((card) => {
    card.style.display = card.textContent.toLowerCase().includes(query)
      ? "block"
      : "none";
  });
});`,
    },
  },
  {
    id: "filter-products-name-price",
    editorType: "web",
    title: "Challenge 16 — Filter Product Cards by Name and Price",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Filter existing product cards using a search input, a maximum price input, and DOM updates.",
    requirements: [
      "Add a name search input",
      "Add a maximum price input",
      "Create product cards in the HTML",
      "Store each product price in a data-price attribute",
      "Hide cards that do not match both input values",
      "Show a visible count of matching cards",
    ],
    tips: [
      "This stays DOM-first: the cards already exist in the HTML.",
      "dataset.price lets JavaScript read the data-price attribute.",
      "Use Number() before comparing prices.",
    ],
    concepts: ["input events", "data attributes", "Number()", "DOM filtering"],
    suggestedApproach: [
      "Create the inputs, status text, and product cards.",
      "Select all cards with querySelectorAll.",
      "Read both input values inside one update function.",
      "Loop through the cards and decide whether each one should be visible.",
    ],
    commonMistakes: [
      "Filtering by name but forgetting the price check",
      "Comparing the price input as a string instead of a number",
      "Hiding cards but never showing them again when the input changes",
    ],
    expectedOutcome:
      "A DOM-based product card filter that prepares the learner for later data-driven filtering.",
    starter: {
      html: `<input id="productNameInput" type="text" placeholder="Search products..." />
<input id="maxPriceInput" type="number" placeholder="Max price" />
<p id="productStatus">Showing all products</p>

<section class="product-grid">
  <article class="product-card" data-price="40">
    <h3>Keyboard</h3>
    <p>£40</p>
  </article>
  <article class="product-card" data-price="180">
    <h3>Monitor</h3>
    <p>£180</p>
  </article>
  <article class="product-card" data-price="25">
    <h3>Mouse</h3>
    <p>£25</p>
  </article>
  <article class="product-card" data-price="55">
    <h3>Laptop Stand</h3>
    <p>£55</p>
  </article>
</section>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="productNameInput" type="text" placeholder="Search products..." />
<input id="maxPriceInput" type="number" placeholder="Max price" />
<p id="productStatus">Showing all products</p>

<section class="product-grid">
  <article class="product-card" data-price="40">
    <h3>Keyboard</h3>
    <p>£40</p>
  </article>
  <article class="product-card" data-price="180">
    <h3>Monitor</h3>
    <p>£180</p>
  </article>
  <article class="product-card" data-price="25">
    <h3>Mouse</h3>
    <p>£25</p>
  </article>
  <article class="product-card" data-price="55">
    <h3>Laptop Stand</h3>
    <p>£55</p>
  </article>
</section>`,
      css: `.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin-top: 16px;
}

.product-card {
  padding: 16px;
  border: 1px solid #d8deea;
  border-radius: 8px;
  background: white;
}

.product-card h3,
.product-card p {
  margin: 0 0 6px;
}`,
      js: `const productNameInput = document.getElementById("productNameInput");
const maxPriceInput = document.getElementById("maxPriceInput");
const productStatus = document.getElementById("productStatus");
const productCards = document.querySelectorAll(".product-card");

function updateProductCards() {
  const query = productNameInput.value.toLowerCase();
  const maxPrice = Number(maxPriceInput.value) || Infinity;
  let visibleCount = 0;

  productCards.forEach((card) => {
    const cardName = card.textContent.toLowerCase();
    const cardPrice = Number(card.dataset.price);
    const matchesName = cardName.includes(query);
    const matchesPrice = cardPrice <= maxPrice;
    const shouldShow = matchesName && matchesPrice;

    card.hidden = !shouldShow;

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  productStatus.textContent = visibleCount + " product" + (visibleCount === 1 ? "" : "s") + " shown";
}

productNameInput.addEventListener("input", updateProductCards);
maxPriceInput.addEventListener("input", updateProductCards);

updateProductCards();`,
    },
  },
  {
    id: "faq-toggle",
    editorType: "web",
    title: "Challenge 17 — FAQ Toggle",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Show and hide an FAQ answer when the question is clicked.",
    requirements: [
      "Add a question button or heading",
      "Add an answer element",
      "Show or hide the answer when the question is clicked",
    ],
    tips: [
      "You can start with the answer hidden.",
      "Use a click event listener.",
      "This is similar to an accordion.",
    ],
    concepts: [
      "click events",
      "toggle behavior",
      "DOM manipulation",
      "UI interaction",
    ],
    suggestedApproach: [
      "Create the question and answer elements.",
      "Hide the answer by default.",
      "Add a click event to the question.",
      "Toggle the answer visibility each time it is clicked.",
    ],
    commonMistakes: [
      "Not hiding the answer at the start",
      "Selecting the wrong answer element",
      "Changing JS values without changing the UI",
    ],
    expectedOutcome:
      "A simple FAQ item where clicking the question reveals or hides the answer.",
    starter: {
      html: `<button id="faqBtn">What is JavaScript?</button>
<p id="faqAnswer">JavaScript is a programming language used to make web pages interactive.</p>`,
      css: `#faqAnswer {
  display: none;
  margin-top: 12px;
}`,
      js: ``,
    },
    solution: {
      html: `<button id="faqBtn">What is JavaScript?</button>
<p id="faqAnswer">JavaScript is a programming language used to make web pages interactive.</p>`,
      css: `#faqAnswer {
  display: none;
  margin-top: 12px;
}`,
      js: `const faqBtn = document.getElementById("faqBtn");
const faqAnswer = document.getElementById("faqAnswer");

faqBtn.addEventListener("click", () => {
  if (faqAnswer.style.display === "none") {
    faqAnswer.style.display = "block";
  } else {
    faqAnswer.style.display = "none";
  }
});`,
    },
  },
  {
    id: "theme-toggle-saved",
    editorType: "web",
    title: "Challenge 18 — Theme Toggle with Saved Preference",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Toggle between light and dark mode and save the user's choice in localStorage.",
    requirements: [
      "Add a toggle button",
      "Change the page theme when clicked",
      "Save the selected theme in localStorage",
      "Load the saved theme when the page starts",
    ],
    tips: [
      "localStorage can store strings like 'dark' and 'light'.",
      "Use classList or inline styles for the theme.",
      "Read the saved value when the script runs.",
    ],
    concepts: [
      "localStorage",
      "class toggling",
      "page initialization",
      "event listeners",
    ],
    suggestedApproach: [
      "Add a wrapper and a toggle button.",
      "Choose how you want to represent the theme, such as classes.",
      "Save the current theme to localStorage after each click.",
      "Read the saved theme when the page loads and apply it.",
    ],
    commonMistakes: [
      "Saving the theme but not applying it on load",
      "Using localStorage but forgetting to update the page class",
      "Storing one value and checking for a different one",
    ],
    expectedOutcome:
      "A theme switcher that remembers the user's last selected mode even after refresh.",
    starter: {
      html: `<div id="page" class="page light">
  <button id="themeBtn">Toggle Theme</button>
</div>`,
      css: `.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.page.light {
  background: #f8fafc;
  color: #111827;
}

.page.dark {
  background: #111827;
  color: white;
}`,
      js: ``,
    },
    solution: {
      html: `<div id="page" class="page light">
  <button id="themeBtn">Toggle Theme</button>
</div>`,
      css: `.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.page.light {
  background: #f8fafc;
  color: #111827;
}

.page.dark {
  background: #111827;
  color: white;
}`,
      js: `const page = document.getElementById("page");
const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  page.className = "page " + savedTheme;
}

themeBtn.addEventListener("click", () => {
  if (page.classList.contains("light")) {
    page.className = "page dark";
    localStorage.setItem("theme", "dark");
  } else {
    page.className = "page light";
    localStorage.setItem("theme", "light");
  }
});`,
    },
  },
  {
    id: "counter-with-reset",
    editorType: "web",
    title: "Challenge 19 — Counter with Reset",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Build a counter with increase, decrease, and reset buttons.",
    requirements: [
      "Show the current count",
      "Add increase and decrease buttons",
      "Add a reset button",
      "Update the number when buttons are clicked",
    ],
    tips: [
      "You need one variable to store the current count.",
      "Each button can have its own click event listener.",
      "Reset should set the count back to zero.",
    ],
    concepts: [
      "variables",
      "event listeners",
      "state updates",
      "DOM rendering",
    ],
    suggestedApproach: [
      "Create the display and the 3 buttons.",
      "Store the current number in a variable.",
      "Update the variable based on the clicked button.",
      "Render the new number after every change.",
    ],
    commonMistakes: [
      "Resetting the number on the page but not the variable",
      "Forgetting to update the display after changing count",
      "Using text instead of a numeric variable",
    ],
    expectedOutcome:
      "A small counter app where the user can increase, decrease, and reset the displayed number.",
    starter: {
      html: `<h1 id="count">0</h1>
<button id="decreaseBtn">-</button>
<button id="increaseBtn">+</button>
<button id="resetBtn">Reset</button>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<h1 id="count">0</h1>
<button id="decreaseBtn">-</button>
<button id="increaseBtn">+</button>
<button id="resetBtn">Reset</button>`,
      css: ``,
      js: `const countEl = document.getElementById("count");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

function renderCount() {
  countEl.textContent = count;
}

increaseBtn.addEventListener("click", () => {
  count += 1;
  renderCount();
});

decreaseBtn.addEventListener("click", () => {
  count -= 1;
  renderCount();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  renderCount();
});`,
    },
  },
  {
    id: "password-visibility-toggle",
    editorType: "web",
    title: "Challenge 20 — Password Show / Hide",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Build a password field with a button that shows and hides the password text.",
    requirements: [
      "Add a password input",
      "Add a toggle button",
      "Switch the input type between password and text",
      "Update the button label when the state changes",
    ],
    tips: [
      "This is another click -> change UI pattern.",
      "Check the current input type before switching it.",
      "Keep the button text clear so the user knows the next action.",
    ],
    concepts: [
      "input attributes",
      "event listeners",
      "conditional logic",
      "textContent",
    ],
    suggestedApproach: [
      "Create the password input and toggle button.",
      "Select both elements in JavaScript.",
      "Add a click listener to the button.",
      "Switch the input type and update the label each time it is clicked.",
    ],
    commonMistakes: [
      "Changing the button text but not the input type",
      "Checking the wrong input type value",
      "Leaving the label stuck in one state",
    ],
    expectedOutcome:
      "A password field where the user can switch between hidden and visible text.",
    starter: {
      html: `<div class="password-row">
  <input id="passwordInput" type="password" placeholder="Enter password" />
  <button id="passwordToggleBtn" type="button">Show</button>
</div>`,
      css: `.password-row {
  display: flex;
  gap: 12px;
}`,
      js: ``,
    },
    solution: {
      html: `<div class="password-row">
  <input id="passwordInput" type="password" placeholder="Enter password" />
  <button id="passwordToggleBtn" type="button">Show</button>
</div>`,
      css: `.password-row {
  display: flex;
  gap: 12px;
}`,
      js: `const passwordInput = document.getElementById("passwordInput");
const passwordToggleBtn = document.getElementById("passwordToggleBtn");

passwordToggleBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  passwordToggleBtn.textContent = isHidden ? "Hide" : "Show";
});`,
    },
  },
  {
    id: "button-click-counter",
    editorType: "web",
    title: "Challenge 21 — Button Click Counter",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Count how many times a button has been clicked and show the total on the page.",
    requirements: [
      "Add a button",
      "Add an element to show the count",
      "Increase the number every time the button is clicked",
      "Keep the UI updated after each click",
    ],
    tips: [
      "Store the count in a variable.",
      "Update the visible number after every click.",
      "This is a simple way to practice events plus state.",
    ],
    concepts: [
      "click events",
      "variables",
      "DOM updates",
      "state changes",
    ],
    suggestedApproach: [
      "Create one button and one output element.",
      "Store the current count in a variable.",
      "Add a click listener to the button.",
      "Increase the variable and render the new value.",
    ],
    commonMistakes: [
      "Increasing the number but not updating the DOM",
      "Keeping the value only in the HTML instead of a JavaScript variable",
      "Using text concatenation in a way that breaks the count",
    ],
    expectedOutcome:
      "A button that tracks the total number of clicks and updates immediately.",
    starter: {
      html: `<button id="clickCounterBtn">Click me</button>
<p>Total clicks: <span id="clickCount">0</span></p>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button id="clickCounterBtn">Click me</button>
<p>Total clicks: <span id="clickCount">0</span></p>`,
      css: ``,
      js: `const clickCounterBtn = document.getElementById("clickCounterBtn");
const clickCount = document.getElementById("clickCount");

let totalClicks = 0;

clickCounterBtn.addEventListener("click", () => {
  totalClicks += 1;
  clickCount.textContent = totalClicks;
});`,
    },
  },
  {
    id: "search-filter-count-reset",
    editorType: "web",
    title: "Challenge 22 — Search, Count, and Reset a List",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build a search bar that filters a list, shows the current match count, and resets cleanly.",
    requirements: [
      "Add a search input, clear button, result count, and a list of at least 6 items",
      "Filter the list while the user types",
      "Update the count of visible matches",
      "Show a no-results message when nothing matches",
      "Clear the input and restore the full list when Clear is clicked",
    ],
    tips: [
      "Before coding, decide which element owns the source list and which text explains the current state.",
      "This repeats search, but the count and reset force you to keep UI state in sync.",
      "Use one render function so input and Clear both update the same pieces.",
    ],
    concepts: ["input events", "filtering lists", "live counts", "empty states"],
    suggestedApproach: [
      "Create the controls, count text, empty message, and list.",
      "Select the input, button, count, empty message, and list items.",
      "Write a renderSearch function that checks every item against the query.",
      "Update display, visible count, and empty state inside that function.",
    ],
    commonMistakes: [
      "Filtering the list but forgetting to update the count",
      "Clearing the input without restoring hidden items",
      "Comparing text without lowercasing both sides",
    ],
    expectedOutcome:
      "A search list that behaves like a real UI: live filtering, accurate count, no-results feedback, and a clean reset.",
    starter: {
      html: `<input id="resourceSearch" type="text" placeholder="Search resources..." />
<button id="clearResourceSearch" type="button">Clear</button>
<p id="resultCount">Showing 6 resources</p>
<p id="emptyState" hidden>No resources found.</p>
<ul id="resourceList">
  <li>HTML checklist</li>
  <li>CSS grid guide</li>
  <li>DOM events practice</li>
  <li>Search patterns</li>
  <li>localStorage notes</li>
  <li>React state intro</li>
</ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="resourceSearch" type="text" placeholder="Search resources..." />
<button id="clearResourceSearch" type="button">Clear</button>
<p id="resultCount">Showing 6 resources</p>
<p id="emptyState" hidden>No resources found.</p>
<ul id="resourceList">
  <li>HTML checklist</li>
  <li>CSS grid guide</li>
  <li>DOM events practice</li>
  <li>Search patterns</li>
  <li>localStorage notes</li>
  <li>React state intro</li>
</ul>`,
      css: ``,
      js: `const resourceSearch = document.getElementById("resourceSearch");
const clearResourceSearch = document.getElementById("clearResourceSearch");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const resourceItems = document.querySelectorAll("#resourceList li");

function renderSearch() {
  const query = resourceSearch.value.toLowerCase();
  let visibleCount = 0;

  resourceItems.forEach((item) => {
    const matches = item.textContent.toLowerCase().includes(query);
    item.style.display = matches ? "list-item" : "none";

    if (matches) {
      visibleCount += 1;
    }
  });

  resultCount.textContent =
    "Showing " + visibleCount + " of " + resourceItems.length + " resources";
  emptyState.hidden = visibleCount !== 0;
}

resourceSearch.addEventListener("input", renderSearch);

clearResourceSearch.addEventListener("click", () => {
  resourceSearch.value = "";
  renderSearch();
});

renderSearch();`,
    },
  },
  {
    id: "class-toggle-alert-panel",
    editorType: "web",
    title: "Challenge 23 — Toggle Alert Panel Classes",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Use buttons to switch a panel between info, success, and warning states by toggling classes.",
    requirements: [
      "Add a panel with heading and message text",
      "Add at least 3 state buttons",
      "Use classList to change the panel state",
      "Update the visible message for each state",
      "Make the active state visually clear with CSS",
    ],
    tips: [
      "Before coding, decide which classes are mutually exclusive.",
      "This is a class toggling exercise, not just a textContent exercise.",
      "A small helper function can remove old state classes before adding the next one.",
    ],
    concepts: ["classList", "state classes", "click events", "UI feedback"],
    suggestedApproach: [
      "Create the alert panel and the three state buttons.",
      "Write CSS for info, success, and warning classes.",
      "Write one setAlert function that receives the next state and message.",
      "Call that function from each button click.",
    ],
    commonMistakes: [
      "Adding new classes without removing old state classes",
      "Updating the text but not the visual state",
      "Putting the state class on the wrong element",
    ],
    expectedOutcome:
      "A panel where the visual style and text both change when the user chooses a new state.",
    starter: {
      html: `<section id="alertPanel" class="alert-panel info">
  <h2>Status panel</h2>
  <p id="alertMessage">Choose a state.</p>
</section>
<button id="infoBtn" type="button">Info</button>
<button id="successBtn" type="button">Success</button>
<button id="warningBtn" type="button">Warning</button>`,
      css: `.alert-panel {
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #dbe3ef;
}

.info {
  background: #eff6ff;
}

.success {
  background: #ecfdf5;
}

.warning {
  background: #fffbeb;
}`,
      js: ``,
    },
    solution: {
      html: `<section id="alertPanel" class="alert-panel info">
  <h2>Status panel</h2>
  <p id="alertMessage">Choose a state.</p>
</section>
<button id="infoBtn" type="button">Info</button>
<button id="successBtn" type="button">Success</button>
<button id="warningBtn" type="button">Warning</button>`,
      css: `.alert-panel {
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #dbe3ef;
}

.info {
  background: #eff6ff;
}

.success {
  background: #ecfdf5;
}

.warning {
  background: #fffbeb;
}`,
      js: `const alertPanel = document.getElementById("alertPanel");
const alertMessage = document.getElementById("alertMessage");
const infoBtn = document.getElementById("infoBtn");
const successBtn = document.getElementById("successBtn");
const warningBtn = document.getElementById("warningBtn");

function setAlert(state, message) {
  alertPanel.classList.remove("info", "success", "warning");
  alertPanel.classList.add(state);
  alertMessage.textContent = message;
}

infoBtn.addEventListener("click", () => {
  setAlert("info", "Here is a helpful update.");
});

successBtn.addEventListener("click", () => {
  setAlert("success", "Your changes were saved.");
});

warningBtn.addEventListener("click", () => {
  setAlert("warning", "Check this before continuing.");
});`,
    },
  },
  {
    id: "limited-step-counter",
    editorType: "web",
    title: "Challenge 24 — Limited Step Counter",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build a counter that moves in steps, respects min and max limits, and disables buttons at the edges.",
    requirements: [
      "Show the current count",
      "Add increase, decrease, and reset buttons",
      "Increase and decrease by 2",
      "Do not allow the count below 0 or above 10",
      "Disable buttons when the count reaches a limit",
    ],
    tips: [
      "Before coding, decide what your state variable is and what the limits are.",
      "The UI should reflect the number and button states after every click.",
      "A render function is useful because three buttons can change the same state.",
    ],
    concepts: ["counters", "state variables", "disabled buttons", "render functions"],
    suggestedApproach: [
      "Create one count variable.",
      "Write a render function that updates the text and disabled states.",
      "Update the count in each click handler.",
      "Use Math.min and Math.max or if statements to enforce limits.",
    ],
    commonMistakes: [
      "Changing the number but not disabling the buttons",
      "Letting the count move past the min or max",
      "Resetting the DOM text but not the JavaScript variable",
    ],
    expectedOutcome:
      "A counter that behaves like a real control because it prevents invalid states.",
    starter: {
      html: `<h2 id="stepCount">0</h2>
<button id="decreaseStepBtn" type="button">-2</button>
<button id="increaseStepBtn" type="button">+2</button>
<button id="resetStepBtn" type="button">Reset</button>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<h2 id="stepCount">0</h2>
<button id="decreaseStepBtn" type="button">-2</button>
<button id="increaseStepBtn" type="button">+2</button>
<button id="resetStepBtn" type="button">Reset</button>`,
      css: ``,
      js: `const stepCount = document.getElementById("stepCount");
const decreaseStepBtn = document.getElementById("decreaseStepBtn");
const increaseStepBtn = document.getElementById("increaseStepBtn");
const resetStepBtn = document.getElementById("resetStepBtn");

let count = 0;

function renderCount() {
  stepCount.textContent = count;
  decreaseStepBtn.disabled = count === 0;
  increaseStepBtn.disabled = count === 10;
}

increaseStepBtn.addEventListener("click", () => {
  count = Math.min(count + 2, 10);
  renderCount();
});

decreaseStepBtn.addEventListener("click", () => {
  count = Math.max(count - 2, 0);
  renderCount();
});

resetStepBtn.addEventListener("click", () => {
  count = 0;
  renderCount();
});

renderCount();`,
    },
  },
  {
    id: "multi-faq-accordion",
    editorType: "web",
    title: "Challenge 25 — Multi FAQ Accordion",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build an accordion where clicking one question opens its answer and closes the others.",
    requirements: [
      "Add at least 3 FAQ buttons and answer panels",
      "Hide answers by default",
      "Open the clicked answer",
      "Close the other answers when a new one opens",
      "Update aria-expanded on each button",
    ],
    tips: [
      "Before coding, decide how each button connects to its answer.",
      "This is harder than a single FAQ because old open state must be cleared.",
      "data-target attributes are useful for matching buttons to panels.",
    ],
    concepts: ["accordions", "querySelectorAll", "aria-expanded", "hide/show"],
    suggestedApproach: [
      "Create buttons with data-target values.",
      "Create answer panels whose ids match those target values.",
      "Loop through all buttons on click.",
      "Open the matching panel and close the rest.",
    ],
    commonMistakes: [
      "Opening a panel without closing the previous one",
      "Leaving aria-expanded out of sync",
      "Selecting only the first FAQ item",
    ],
    expectedOutcome:
      "A multi-item FAQ accordion where only one answer is open at a time.",
    starter: {
      html: `<section class="faq-list">
  <button class="faq-question" data-target="answerOne" aria-expanded="false">What is DOM selection?</button>
  <p id="answerOne" hidden>Finding elements so JavaScript can update them.</p>

  <button class="faq-question" data-target="answerTwo" aria-expanded="false">What is an event?</button>
  <p id="answerTwo" hidden>A user action like clicking or typing.</p>

  <button class="faq-question" data-target="answerThree" aria-expanded="false">What is state?</button>
  <p id="answerThree" hidden>The current data that controls the UI.</p>
</section>`,
      css: `.faq-list {
  display: grid;
  gap: 10px;
}`,
      js: ``,
    },
    solution: {
      html: `<section class="faq-list">
  <button class="faq-question" data-target="answerOne" aria-expanded="false">What is DOM selection?</button>
  <p id="answerOne" hidden>Finding elements so JavaScript can update them.</p>

  <button class="faq-question" data-target="answerTwo" aria-expanded="false">What is an event?</button>
  <p id="answerTwo" hidden>A user action like clicking or typing.</p>

  <button class="faq-question" data-target="answerThree" aria-expanded="false">What is state?</button>
  <p id="answerThree" hidden>The current data that controls the UI.</p>
</section>`,
      css: `.faq-list {
  display: grid;
  gap: 10px;
}`,
      js: `const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;

    faqQuestions.forEach((question) => {
      const answer = document.getElementById(question.dataset.target);
      const shouldOpen = question.dataset.target === targetId;

      answer.hidden = !shouldOpen;
      question.setAttribute("aria-expanded", String(shouldOpen));
    });
  });
});`,
    },
  },
  {
    id: "modal-open-close",
    editorType: "web",
    title: "Challenge 26 — Open and Close a Modal",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build a modal that opens from a button and closes from both the close button and the backdrop.",
    requirements: [
      "Add an open modal button",
      "Add a hidden modal with backdrop and dialog content",
      "Show the modal when Open is clicked",
      "Hide the modal when Close is clicked",
      "Hide the modal when the backdrop is clicked",
      "Use a class or hidden attribute to control visibility",
    ],
    tips: [
      "Before coding, decide what element represents the whole modal layer.",
      "Modals are mostly hide/show plus careful event targeting.",
      "Check event.target so backdrop clicks close the modal but dialog clicks do not.",
    ],
    concepts: ["modals", "hide/show", "event.target", "class toggling"],
    suggestedApproach: [
      "Create the open button and a modal overlay.",
      "Place the dialog content inside the overlay.",
      "Write openModal and closeModal functions.",
      "Close only when the user clicks the close button or the overlay itself.",
    ],
    commonMistakes: [
      "Closing the modal when the user clicks inside the dialog",
      "Showing the modal but not giving it a hidden or closed state",
      "Adding listeners before selecting the elements",
    ],
    expectedOutcome:
      "A modal interaction that prepares learners for common product UI and later React component work.",
    starter: {
      html: `<button id="openModalBtn" type="button">Open details</button>

<div id="modalOverlay" class="modal-overlay" hidden>
  <article class="modal-dialog">
    <h2>Project details</h2>
    <p>This modal explains a feature without leaving the page.</p>
    <button id="closeModalBtn" type="button">Close</button>
  </article>
</div>`,
      css: `.modal-overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(15, 23, 42, 0.55);
}

.modal-dialog {
  max-width: 420px;
  padding: 20px;
  border-radius: 8px;
  background: white;
}`,
      js: ``,
    },
    solution: {
      html: `<button id="openModalBtn" type="button">Open details</button>

<div id="modalOverlay" class="modal-overlay" hidden>
  <article class="modal-dialog">
    <h2>Project details</h2>
    <p>This modal explains a feature without leaving the page.</p>
    <button id="closeModalBtn" type="button">Close</button>
  </article>
</div>`,
      css: `.modal-overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(15, 23, 42, 0.55);
}

.modal-dialog {
  max-width: 420px;
  padding: 20px;
  border-radius: 8px;
  background: white;
}`,
      js: `const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");

function openModal() {
  modalOverlay.hidden = false;
}

function closeModal() {
  modalOverlay.hidden = true;
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});`,
    },
  },
  {
    id: "mini-build-textarea-counter-card",
    editorType: "web",
    title: "Challenge 27 — Mini Build: Textarea Counter Card",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build a complete textarea counter card from scratch, including the HTML structure, the CSS styling, and the live JavaScript feedback.",
    requirements: [
      "Build the HTML structure yourself with a textarea, counter text, and clear button",
      "Style it as a neat card with spacing, labels, and a visible warning state",
      "Update the character count while the user types",
      "Show a warning when the message is close to the limit",
      "Clear the textarea and reset the feedback when Clear is clicked",
    ],
    tips: [
      "This combines a form control, a live input event, a little state, and real UI polish.",
      "Use textarea.value.length to calculate the count.",
      "A small render function makes the input and clear button share the same update logic.",
    ],
    concepts: [
      "textarea input",
      "input events",
      "DOM updates",
      "conditional feedback",
      "CSS state classes",
    ],
    suggestedApproach: [
      "Create the card, label, textarea, counter text, hint text, and clear button in HTML.",
      "Write CSS that makes the card readable and gives the warning state a clear style.",
      "Select the textarea, counter, hint, and button in JavaScript.",
      "Write one render function that updates the count and warning message.",
      "Run that function on textarea input and again after the clear button resets the textarea.",
    ],
    commonMistakes: [
      "Counting once on page load but not listening to the input event",
      "Clearing the textarea without resetting the counter and warning text",
      "Leaving the warning style active after the user goes back under the limit",
    ],
    expectedOutcome:
      "A polished counter card where typing updates the count, nearing the limit changes the feedback, and Clear resets the whole UI.",
    starter: {
      html: `<!-- Build a textarea counter card from scratch. -->`,
      css: `/* Style the card, textarea, counter row, and warning state. */`,
      js: `// Select your elements and wire up the live counter here.`,
    },
    solution: {
      html: `<section class="counter-card">
  <label for="feedbackMessage">Interview practice note</label>
  <textarea id="feedbackMessage" maxlength="160" placeholder="Write a short answer..."></textarea>

  <div class="counter-row">
    <p id="counterText">0 / 160 characters</p>
    <button id="clearMessageBtn" type="button">Clear</button>
  </div>

  <p id="limitHint">You have plenty of space.</p>
</section>`,
      css: `.counter-card {
  max-width: 460px;
  display: grid;
  gap: 12px;
  padding: 20px;
  border: 1px solid #d8dee9;
  border-radius: 8px;
  background: #ffffff;
  color: #1f2937;
}

.counter-card label {
  font-weight: 700;
}

.counter-card textarea {
  min-height: 140px;
  padding: 12px;
  border: 1px solid #b9c3d0;
  border-radius: 8px;
  font: inherit;
  resize: vertical;
}

.counter-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.counter-row p,
#limitHint {
  margin: 0;
}

#limitHint.warning {
  color: #b45309;
  font-weight: 700;
}`,
      js: `const feedbackMessage = document.getElementById("feedbackMessage");
const counterText = document.getElementById("counterText");
const clearMessageBtn = document.getElementById("clearMessageBtn");
const limitHint = document.getElementById("limitHint");

const characterLimit = 160;

function renderCounter() {
  const usedCharacters = feedbackMessage.value.length;
  const remainingCharacters = characterLimit - usedCharacters;

  counterText.textContent =
    usedCharacters + " / " + characterLimit + " characters";

  if (remainingCharacters <= 20) {
    limitHint.textContent =
      "Almost at the limit: " + remainingCharacters + " characters left.";
    limitHint.classList.add("warning");
  } else {
    limitHint.textContent = "You have plenty of space.";
    limitHint.classList.remove("warning");
  }
}

feedbackMessage.addEventListener("input", renderCounter);

clearMessageBtn.addEventListener("click", () => {
  feedbackMessage.value = "";
  renderCounter();
});

renderCounter();`,
    },
  },
  {
    id: "mini-build-searchable-topics-list",
    editorType: "web",
    title: "Challenge 28 — Mini Build: Searchable Topics List",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build a searchable list feature from scratch with a clear button, live result count, and no-results message.",
    requirements: [
      "Build the HTML yourself with a search input, clear button, summary text, and a list of at least six items",
      "Style the search area and list so the feature feels like a small interface",
      "Filter the list while the user types",
      "Show how many items are currently visible",
      "Show a no-results message when nothing matches",
      "Reset the search and show every item when Clear is clicked",
    ],
    tips: [
      "This is the same search idea as before, but now you are responsible for the whole feature.",
      "Keep the filtering code in a function so input and Clear can both use it.",
      "Use a visible count so you can explain what your code is doing in an interview.",
    ],
    concepts: [
      "input events",
      "DOM filtering",
      "case-insensitive search",
      "empty states",
      "clear actions",
    ],
    suggestedApproach: [
      "Create the search input, Clear button, summary paragraph, empty message, and list items.",
      "Style the controls and list with spacing, borders, and readable states.",
      "Select the input, button, summary, empty message, and all list items.",
      "Write a filter function that compares each item with the current query.",
      "Update each item's display, the visible count, and the empty message inside that function.",
    ],
    commonMistakes: [
      "Filtering the first item only instead of looping through every item",
      "Forgetting to lowercase both the query and the item text",
      "Clearing the input but leaving old items hidden",
    ],
    expectedOutcome:
      "A complete searchable list that filters live, reports visible results, handles no matches, and resets cleanly.",
    starter: {
      html: `<!-- Build a searchable topics list from scratch. -->`,
      css: `/* Style the search controls, summary, list, and empty state. */`,
      js: `// Select your elements and write the filter logic here.`,
    },
    solution: {
      html: `<section class="topic-search">
  <label for="topicSearchInput">Search topics</label>

  <div class="search-row">
    <input id="topicSearchInput" type="text" placeholder="Try CSS, DOM, React..." />
    <button id="clearTopicSearchBtn" type="button">Clear</button>
  </div>

  <p id="topicSummary">Showing 7 topics</p>
  <p id="topicEmpty" hidden>No topics match that search.</p>

  <ul id="topicList">
    <li>HTML semantics</li>
    <li>CSS layout</li>
    <li>Responsive design</li>
    <li>DOM events</li>
    <li>Live search</li>
    <li>Form validation</li>
    <li>React state</li>
  </ul>
</section>`,
      css: `.topic-search {
  max-width: 520px;
  display: grid;
  gap: 12px;
  padding: 20px;
  border: 1px solid #d9e2ec;
  border-radius: 8px;
  background: #ffffff;
}

.topic-search label {
  font-weight: 700;
}

.search-row {
  display: flex;
  gap: 10px;
}

.search-row input {
  flex: 1;
  padding: 10px;
  border: 1px solid #b9c3d0;
  border-radius: 8px;
}

.topic-search ul {
  display: grid;
  gap: 8px;
  padding-left: 20px;
}

#topicSummary,
#topicEmpty {
  margin: 0;
}

#topicEmpty {
  color: #b91c1c;
  font-weight: 700;
}`,
      js: `const topicSearchInput = document.getElementById("topicSearchInput");
const clearTopicSearchBtn = document.getElementById("clearTopicSearchBtn");
const topicSummary = document.getElementById("topicSummary");
const topicEmpty = document.getElementById("topicEmpty");
const topicItems = document.querySelectorAll("#topicList li");

function renderTopics() {
  const query = topicSearchInput.value.toLowerCase();
  let visibleCount = 0;

  topicItems.forEach((item) => {
    const isMatch = item.textContent.toLowerCase().includes(query);
    item.style.display = isMatch ? "list-item" : "none";

    if (isMatch) {
      visibleCount += 1;
    }
  });

  topicSummary.textContent =
    "Showing " + visibleCount + " of " + topicItems.length + " topics";
  topicEmpty.hidden = visibleCount !== 0;
}

topicSearchInput.addEventListener("input", renderTopics);

clearTopicSearchBtn.addEventListener("click", () => {
  topicSearchInput.value = "";
  renderTopics();
});

renderTopics();`,
    },
  },
  {
    id: "mini-build-bold-search-clear-list",
    editorType: "web",
    title: "Challenge 29 — Mini Build: Bold Match Finder with Clear",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build a list search that keeps every item visible but makes matching items bold, then resets everything with a Clear button.",
    requirements: [
      "Build the HTML yourself with a search input, clear button, status text, and a list of items",
      "Style the list and matching state so the highlighted items are obvious",
      "Keep all list items visible while the user searches",
      "Make matching items bold when the query is present",
      "Show a live message telling the user how many matches were found",
      "Clear the query and remove every highlight when Clear is clicked",
    ],
    tips: [
      "This is not a hide/show filter. It is a highlight feature.",
      "Make the empty-query state explicit so nothing stays highlighted by accident.",
      "A CSS class is easier to explain than many separate inline styles.",
    ],
    concepts: [
      "input events",
      "classList",
      "string matching",
      "live status text",
      "clear actions",
    ],
    suggestedApproach: [
      "Create the input, Clear button, status text, and list in HTML.",
      "Add a CSS class for matching items.",
      "Select every list item with querySelectorAll.",
      "On input, lowercase the query and compare it with each item's text.",
      "Toggle the matching class and update the match count.",
    ],
    commonMistakes: [
      "Hiding non-matches even though this challenge asks you to keep them visible",
      "Leaving old matches bold when the input becomes empty",
      "Updating the styles but forgetting the status message",
    ],
    expectedOutcome:
      "A complete highlight search feature where matches become bold, the match count updates live, and Clear resets the interface.",
    starter: {
      html: `<!-- Build a bold-match finder from scratch. -->`,
      css: `/* Style the list and create a visible .is-match state. */`,
      js: `// Select your elements and highlight matches here.`,
    },
    solution: {
      html: `<section class="skill-finder">
  <label for="skillSearchInput">Find a skill</label>

  <div class="search-row">
    <input id="skillSearchInput" type="text" placeholder="Type a skill..." />
    <button id="clearSkillSearchBtn" type="button">Clear</button>
  </div>

  <p id="matchStatus">Type to highlight matching skills.</p>

  <ul id="skillList">
    <li>Semantic HTML</li>
    <li>CSS Grid</li>
    <li>Flexbox</li>
    <li>DOM events</li>
    <li>Debugging</li>
    <li>React components</li>
  </ul>
</section>`,
      css: `.skill-finder {
  max-width: 520px;
  display: grid;
  gap: 12px;
  padding: 20px;
  border: 1px solid #d9e2ec;
  border-radius: 8px;
  background: #ffffff;
}

.skill-finder label {
  font-weight: 700;
}

.search-row {
  display: flex;
  gap: 10px;
}

.search-row input {
  flex: 1;
  padding: 10px;
  border: 1px solid #b9c3d0;
  border-radius: 8px;
}

#skillList {
  display: grid;
  gap: 8px;
  padding-left: 20px;
}

#matchStatus {
  margin: 0;
}

.is-match {
  font-weight: 700;
  color: #0f766e;
  background: #ccfbf1;
}`,
      js: `const skillSearchInput = document.getElementById("skillSearchInput");
const clearSkillSearchBtn = document.getElementById("clearSkillSearchBtn");
const matchStatus = document.getElementById("matchStatus");
const skillItems = document.querySelectorAll("#skillList li");

function renderMatches() {
  const query = skillSearchInput.value.toLowerCase();
  let matchCount = 0;

  skillItems.forEach((item) => {
    const isMatch =
      query !== "" && item.textContent.toLowerCase().includes(query);

    item.classList.toggle("is-match", isMatch);

    if (isMatch) {
      matchCount += 1;
    }
  });

  if (query === "") {
    matchStatus.textContent = "Type to highlight matching skills.";
  } else {
    matchStatus.textContent = matchCount + " matching skill(s) found.";
  }
}

skillSearchInput.addEventListener("input", renderMatches);

clearSkillSearchBtn.addEventListener("click", () => {
  skillSearchInput.value = "";
  renderMatches();
});

renderMatches();`,
    },
  },
  {
    id: "mini-build-card-search-empty-state",
    editorType: "web",
    title: "Challenge 30 — Mini Build: Searchable Resource Cards",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build a small card directory with search, a clear button, a live summary, and a no-results state.",
    requirements: [
      "Build the HTML yourself with a search input, clear button, summary text, empty state, and several cards",
      "Use CSS Grid or Flexbox to create a neat responsive card layout",
      "Filter cards while the user types",
      "Search across the visible text inside each card",
      "Show a live summary of visible cards",
      "Show a no-results message when every card is hidden",
      "Reset the search and cards when Clear is clicked",
    ],
    tips: [
      "This is closer to a real directory or dashboard than a plain list.",
      "Search the card's textContent so titles and descriptions both count.",
      "Keep the empty state separate from the card grid so it is easy to show and hide.",
    ],
    concepts: [
      "card layouts",
      "DOM filtering",
      "input events",
      "empty states",
      "responsive CSS",
    ],
    suggestedApproach: [
      "Build a section with controls, summary text, empty text, and a grid of article cards.",
      "Style the cards with CSS Grid or Flexbox.",
      "Select all cards in JavaScript.",
      "Loop through cards on input and compare each card's visible text with the query.",
      "Update display, summary, and empty-state visibility together.",
    ],
    commonMistakes: [
      "Searching only the heading and ignoring useful card text",
      "Hiding card content but leaving the card wrapper visible",
      "Showing the empty message while matching cards are still visible",
    ],
    expectedOutcome:
      "A searchable resource-card UI that looks organised, filters live, reports visible cards, and handles no results cleanly.",
    starter: {
      html: `<!-- Build a searchable resource card grid from scratch. -->`,
      css: `/* Style the controls, card grid, cards, and empty state. */`,
      js: `// Select cards and write the live card search here.`,
    },
    solution: {
      html: `<section class="resource-search">
  <label for="resourceSearchInput">Search resources</label>

  <div class="search-row">
    <input id="resourceSearchInput" type="text" placeholder="Search cards..." />
    <button id="clearResourceSearchBtn" type="button">Clear</button>
  </div>

  <p id="resourceSummary">Showing 4 resources</p>
  <p id="resourceEmpty" hidden>No resources match that search.</p>

  <section class="resource-grid">
    <article class="resource-card">
      <h3>CSS Layout Guide</h3>
      <p>Grid and Flexbox patterns for responsive pages.</p>
    </article>
    <article class="resource-card">
      <h3>DOM Events Checklist</h3>
      <p>Practice selecting elements and handling user actions.</p>
    </article>
    <article class="resource-card">
      <h3>Debugging Notes</h3>
      <p>Common mistakes with selectors, strings, and state.</p>
    </article>
    <article class="resource-card">
      <h3>React Preview</h3>
      <p>Components, props, and state for the next stage.</p>
    </article>
  </section>
</section>`,
      css: `.resource-search {
  display: grid;
  gap: 14px;
}

.resource-search label {
  font-weight: 700;
}

.search-row {
  display: flex;
  gap: 10px;
}

.search-row input {
  flex: 1;
  padding: 10px;
  border: 1px solid #b9c3d0;
  border-radius: 8px;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.resource-card {
  padding: 16px;
  border: 1px solid #d9e2ec;
  border-radius: 8px;
  background: #ffffff;
}

.resource-card h3,
.resource-card p,
#resourceSummary,
#resourceEmpty {
  margin: 0;
}

#resourceEmpty {
  color: #b91c1c;
  font-weight: 700;
}`,
      js: `const resourceSearchInput = document.getElementById("resourceSearchInput");
const clearResourceSearchBtn = document.getElementById("clearResourceSearchBtn");
const resourceSummary = document.getElementById("resourceSummary");
const resourceEmpty = document.getElementById("resourceEmpty");
const resourceCards = document.querySelectorAll(".resource-card");

function renderResources() {
  const query = resourceSearchInput.value.toLowerCase();
  let visibleCount = 0;

  resourceCards.forEach((card) => {
    const isMatch = card.textContent.toLowerCase().includes(query);
    card.style.display = isMatch ? "block" : "none";

    if (isMatch) {
      visibleCount += 1;
    }
  });

  resourceSummary.textContent =
    "Showing " + visibleCount + " of " + resourceCards.length + " resources";
  resourceEmpty.hidden = visibleCount !== 0;
}

resourceSearchInput.addEventListener("input", renderResources);

clearResourceSearchBtn.addEventListener("click", () => {
  resourceSearchInput.value = "";
  renderResources();
});

renderResources();`,
    },
  },
  {
    id: "mini-build-feedback-form-preview",
    editorType: "web",
    title: "Challenge 31 — Mini Build: Live Feedback Form Preview",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build a small feedback form that updates a live preview as the user types and shows a status message on submit.",
    requirements: [
      "Build the HTML yourself with a form, name input, message textarea, submit button, clear button, and preview area",
      "Style the form and preview so they work as one polished mini interface",
      "Update the preview while the user types",
      "Show a live character count for the message",
      "Prevent empty form submission and show a helpful status message",
      "Clear the fields and reset the preview when Clear is clicked",
    ],
    tips: [
      "This is a bridge into form work: the DOM event ideas are the same, but the UI feels more realistic.",
      "Use input events for the live preview and a submit event for validation.",
      "preventDefault() lets you handle the form without the page refreshing.",
    ],
    concepts: [
      "forms",
      "input events",
      "submit events",
      "preventDefault",
      "live preview",
    ],
    suggestedApproach: [
      "Create the form fields, buttons, count text, status text, and preview panel.",
      "Style the form and preview with a clear layout.",
      "Write a renderPreview function that reads the input values and updates the preview.",
      "Listen for input events on both fields.",
      "Listen for submit, prevent the page refresh, validate the fields, and show a status message.",
      "Use the Clear button to reset the fields, preview, count, and status.",
    ],
    commonMistakes: [
      "Using a button click but forgetting the form submit event",
      "Letting the page refresh because preventDefault() is missing",
      "Updating the preview but not the character count or status text",
    ],
    expectedOutcome:
      "A complete live-preview form that updates as the user types, validates on submit, and resets cleanly.",
    starter: {
      html: `<!-- Build a live feedback form and preview from scratch. -->`,
      css: `/* Style the form, buttons, preview panel, and status text. */`,
      js: `// Wire up input, submit, validation, preview, and clear behavior here.`,
    },
    solution: {
      html: `<section class="feedback-builder">
  <form id="feedbackForm" class="feedback-form">
    <label>
      Your name
      <input id="visitorName" type="text" placeholder="Alex" />
    </label>

    <label>
      Message
      <textarea id="visitorMessage" maxlength="180" placeholder="Write your feedback..."></textarea>
    </label>

    <p id="messageCount">0 / 180 characters</p>

    <div class="button-row">
      <button type="submit">Send preview</button>
      <button id="resetFeedbackBtn" type="button">Clear</button>
    </div>
  </form>

  <aside class="feedback-preview">
    <p class="preview-label">Live preview</p>
    <h2 id="previewName">Your name</h2>
    <p id="previewMessage">Your message preview will appear here.</p>
    <p id="feedbackStatus" aria-live="polite">Ready for a short message.</p>
  </aside>
</section>`,
      css: `.feedback-builder {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.feedback-form,
.feedback-preview {
  display: grid;
  gap: 12px;
  padding: 20px;
  border: 1px solid #d9e2ec;
  border-radius: 8px;
  background: #ffffff;
}

.feedback-form label {
  display: grid;
  gap: 6px;
  font-weight: 700;
}

.feedback-form input,
.feedback-form textarea {
  padding: 10px;
  border: 1px solid #b9c3d0;
  border-radius: 8px;
  font: inherit;
}

.feedback-form textarea {
  min-height: 120px;
  resize: vertical;
}

.button-row {
  display: flex;
  gap: 10px;
}

.preview-label,
#messageCount,
#feedbackStatus,
#previewMessage {
  margin: 0;
}

#previewName {
  margin: 0;
  color: #0f766e;
}`,
      js: `const feedbackForm = document.getElementById("feedbackForm");
const visitorName = document.getElementById("visitorName");
const visitorMessage = document.getElementById("visitorMessage");
const messageCount = document.getElementById("messageCount");
const previewName = document.getElementById("previewName");
const previewMessage = document.getElementById("previewMessage");
const feedbackStatus = document.getElementById("feedbackStatus");
const resetFeedbackBtn = document.getElementById("resetFeedbackBtn");

const messageLimit = 180;

function renderPreview() {
  const name = visitorName.value.trim();
  const message = visitorMessage.value.trim();

  previewName.textContent = name || "Your name";
  previewMessage.textContent = message || "Your message preview will appear here.";
  messageCount.textContent =
    visitorMessage.value.length + " / " + messageLimit + " characters";
}

visitorName.addEventListener("input", renderPreview);
visitorMessage.addEventListener("input", renderPreview);

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (visitorName.value.trim() === "" || visitorMessage.value.trim() === "") {
    feedbackStatus.textContent = "Please add your name and message before sending.";
    return;
  }

  feedbackStatus.textContent = "Preview submitted successfully.";
});

resetFeedbackBtn.addEventListener("click", () => {
  visitorName.value = "";
  visitorMessage.value = "";
  feedbackStatus.textContent = "Ready for a short message.";
  renderPreview();
});

renderPreview();`,
    },
  },
  {
    id: "simple-form-validation",
    editorType: "web",
    title: "Challenge 33 — Simple Form Validation",
    difficulty: "Medium",
    category: "JavaScript + Forms",
    goal: "Validate a form so the user cannot submit empty fields.",
    requirements: [
      "Add at least one input field",
      "Add a submit button",
      "Show an error message if the field is empty",
      "Show a success message if valid",
    ],
    tips: [
      "Use the submit event on the form.",
      "Call preventDefault() so the page does not reload.",
      "Trim the input value before checking it.",
    ],
    concepts: [
      "form submission",
      "preventDefault",
      "validation",
      "conditional logic",
    ],
    suggestedApproach: [
      "Create a form with an input and submit button.",
      "Add an element to show feedback messages.",
      "Listen for the form submit event.",
      "Check if the input is empty and display the correct message.",
    ],
    commonMistakes: [
      "Forgetting preventDefault()",
      "Checking input without trimming spaces",
      "Showing an error once but never clearing or updating it",
    ],
    expectedOutcome:
      "A form that warns the user when the input is empty and confirms when it is valid.",
    starter: {
      html: `<form id="signupForm">
  <input id="nameInput" type="text" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</form>
<p id="feedback"></p>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<form id="signupForm">
  <input id="nameInput" type="text" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</form>
<p id="feedback"></p>`,
      css: ``,
      js: `const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("nameInput");
const feedback = document.getElementById("feedback");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nameInput.value.trim() === "") {
    feedback.textContent = "Please enter your name.";
  } else {
    feedback.textContent = "Form submitted successfully.";
  }
});`,
    },
  },
  {
    id: "prevent-duplicate-items",
    editorType: "web",
    title: "Challenge 41 — Prevent Duplicate Items",
    difficulty: "Medium",
    category: "JavaScript + Forms",
    goal: "Let the user add items to a list, but stop duplicates from being added twice.",
    requirements: [
      "Add an input and button or form",
      "Store the list items in an array",
      "Prevent empty values",
      "Prevent duplicate items",
      "Show a feedback message to the user",
    ],
    tips: [
      "This builds on add item to list, but adds one more layer of logic.",
      "Trim the value before checking it.",
      "Use includes() on the array to detect duplicates.",
      "Render with forEach() here; map() gets its own focused practice later.",
    ],
    concepts: [
      "form submission",
      "arrays",
      "validation",
      "includes()",
      "rendering lists",
    ],
    suggestedApproach: [
      "Create a form, input, list, and feedback element.",
      "Keep the current items in an array.",
      "Validate the value before pushing it into the array.",
      "Loop through the array with forEach() and render the list again after each valid change.",
    ],
    commonMistakes: [
      "Only checking the DOM instead of the source array",
      "Forgetting to trim the input value",
      "Adding the duplicate warning but still pushing the item into the array",
    ],
    expectedOutcome:
      "A list tool that feels more real because it handles empty values and duplicates properly.",
    starter: {
      html: `<form id="itemForm">
  <input id="itemInput" type="text" placeholder="Add a topic" />
  <button type="submit">Add</button>
</form>
<p id="itemFeedback"></p>
<ul id="itemList"></ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<form id="itemForm">
  <input id="itemInput" type="text" placeholder="Add a topic" />
  <button type="submit">Add</button>
</form>
<p id="itemFeedback"></p>
<ul id="itemList"></ul>`,
      css: ``,
      js: `const itemForm = document.getElementById("itemForm");
const itemInput = document.getElementById("itemInput");
const itemFeedback = document.getElementById("itemFeedback");
const itemList = document.getElementById("itemList");

const topics = ["HTML", "CSS"];

function renderTopics() {
  itemList.innerHTML = "";

  topics.forEach((topic) => {
    const listItem = document.createElement("li");
    listItem.textContent = topic;
    itemList.appendChild(listItem);
  });
}

itemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = itemInput.value.trim();

  if (!value) {
    itemFeedback.textContent = "Please enter a topic first.";
    return;
  }

  if (topics.includes(value)) {
    itemFeedback.textContent = "That topic is already in the list.";
    return;
  }

  topics.push(value);
  itemInput.value = "";
  itemFeedback.textContent = "Topic added successfully.";
  renderTopics();
});

renderTopics();`,
    },
  },
  {
    id: "contact-form-validation",
    editorType: "web",
    title: "Challenge 34 — Simple Contact Form Validation",
    difficulty: "Medium",
    category: "JavaScript + Forms",
    goal: "Validate a small contact form so the user must enter a name and a valid email before success is shown.",
    requirements: [
      "Add a form with name and email fields",
      "Prevent the default submit behavior",
      "Show an error when a field is empty",
      "Check that the email contains @",
      "Show a success message when the form is valid",
    ],
    tips: [
      "This is a stronger version of simple form validation.",
      "Handle one rule at a time so the feedback stays clear.",
      "Trim the input values before validating them.",
    ],
    concepts: [
      "form submission",
      "preventDefault",
      "validation",
      "conditional logic",
      "UI feedback",
    ],
    suggestedApproach: [
      "Create a form, inputs, and a feedback element.",
      "Listen for the submit event.",
      "Read and trim the values.",
      "Show the first relevant error or the success message.",
    ],
    commonMistakes: [
      "Checking the raw input value without trimming it",
      "Showing success before all rules are checked",
      "Forgetting preventDefault() so the page reloads",
    ],
    expectedOutcome:
      "A small contact form that gives clear error feedback and only succeeds when the data is valid.",
    starter: {
      html: `<form id="contactForm">
  <input id="contactName" type="text" placeholder="Your name" />
  <input id="contactEmail" type="email" placeholder="you@example.com" />
  <button type="submit">Send</button>
</form>
<p id="contactFeedback"></p>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<form id="contactForm">
  <input id="contactName" type="text" placeholder="Your name" />
  <input id="contactEmail" type="email" placeholder="you@example.com" />
  <button type="submit">Send</button>
</form>
<p id="contactFeedback"></p>`,
      css: ``,
      js: `const contactForm = document.getElementById("contactForm");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactFeedback = document.getElementById("contactFeedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactName.value.trim();
  const email = contactEmail.value.trim();

  if (!name) {
    contactFeedback.textContent = "Please enter your name.";
    return;
  }

  if (!email || !email.includes("@")) {
    contactFeedback.textContent = "Please enter a valid email address.";
    return;
  }

  contactFeedback.textContent = "Message ready to send.";
});`,
    },
  },
  {
    id: "login-form-submit-object",
    editorType: "web",
    title: "Challenge 35 — Login Form Submit Object",
    difficulty: "Medium",
    category: "JavaScript + Forms",
    goal: "Read login form values, validate them, create a user object, and preview the submitted data.",
    requirements: [
      "Create a form with email and password fields",
      "Prevent the default submit behavior",
      "Validate that both fields have values",
      "Create an object from the submitted form data",
      "Show a success message and preview the object",
      "Clear the form after a valid submit",
    ],
    tips: [
      "This is the pattern juniors use constantly: read values, validate, create an object, update the UI.",
      "Trim the email value before validating it.",
      "Use JSON.stringify() to show the created object clearly.",
    ],
    concepts: [
      "form submission",
      "preventDefault",
      "objects",
      "validation",
      "JSON.stringify()",
    ],
    suggestedApproach: [
      "Create the form, a feedback message, and an output area.",
      "Listen for the submit event.",
      "Read the current email and password values.",
      "If both values are valid, build an object and render it.",
      "Reset the form only after a successful submit.",
    ],
    commonMistakes: [
      "Reading the values but never using them to build the object",
      "Showing success before checking for empty fields",
      "Resetting the form even when validation fails",
    ],
    expectedOutcome:
      "A login form that validates input, creates a user object, previews it on the page, and resets after a valid submit.",
    starter: {
      html: `<form id="loginForm">
  <input id="loginEmail" type="email" placeholder="Email" />
  <input id="loginPassword" type="password" placeholder="Password" />
  <button type="submit">Preview login</button>
</form>
<p id="loginFeedback"></p>
<pre id="loginPreview"></pre>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 360px;
}

pre {
  margin-top: 14px;
  padding: 12px;
  border-radius: 12px;
  background: #0f172a;
  color: #e2e8f0;
  white-space: pre-wrap;
}`,
      js: ``,
    },
    solution: {
      html: `<form id="loginForm">
  <input id="loginEmail" type="email" placeholder="Email" />
  <input id="loginPassword" type="password" placeholder="Password" />
  <button type="submit">Preview login</button>
</form>
<p id="loginFeedback"></p>
<pre id="loginPreview"></pre>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 360px;
}

pre {
  margin-top: 14px;
  padding: 12px;
  border-radius: 12px;
  background: #0f172a;
  color: #e2e8f0;
  white-space: pre-wrap;
}`,
      js: `const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginFeedback = document.getElementById("loginFeedback");
const loginPreview = document.getElementById("loginPreview");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();

  if (!email) {
    loginFeedback.textContent = "Please enter your email.";
    loginPreview.textContent = "";
    return;
  }

  if (!password) {
    loginFeedback.textContent = "Please enter your password.";
    loginPreview.textContent = "";
    return;
  }

  const user = {
    email,
    password,
  };

  loginFeedback.textContent = "Login data captured successfully.";
  loginPreview.textContent = JSON.stringify(user, null, 2);
  loginForm.reset();
});`,
    },
  },
  {
    id: "booking-form-reset",
    editorType: "web",
    title: "Challenge 36 — Booking Form with Reset",
    difficulty: "Medium",
    category: "JavaScript + Forms",
    goal: "Validate a booking form, show a booking summary, and clear the fields after a valid submit.",
    requirements: [
      "Create a form with name, date, and guests fields",
      "Prevent the default submit behavior",
      "Show an error when a field is empty or invalid",
      "Create a booking object after a valid submit",
      "Render a success summary",
      "Clear the form after submit",
    ],
    tips: [
      "This is a more real booking pattern: validate first, then build the object, then reset.",
      "Number() helps you turn the guests field into a real number.",
      "Keep the success summary small and readable.",
    ],
    concepts: [
      "form submission",
      "validation",
      "objects",
      "Number()",
      "form.reset()",
    ],
    suggestedApproach: [
      "Add the form and a summary area.",
      "Read the values inside the submit handler.",
      "Validate empty values and the guests number.",
      "Build one booking object and render it.",
      "Reset the form after success.",
    ],
    commonMistakes: [
      "Treating the guests value like a number before converting it",
      "Resetting the form before using the current values",
      "Showing a success message without rendering the submitted booking",
    ],
    expectedOutcome:
      "A booking form that feels closer to a real product flow because it validates, creates a booking object, shows success, and resets cleanly.",
    starter: {
      html: `<form id="bookingForm">
  <input id="bookingName" type="text" placeholder="Guest name" />
  <input id="bookingDate" type="date" />
  <input id="bookingGuests" type="number" min="1" placeholder="Guests" />
  <button type="submit">Save booking</button>
</form>
<p id="bookingFeedback"></p>
<section id="bookingSummary"></section>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 380px;
}

#bookingSummary {
  margin-top: 16px;
}`,
      js: ``,
    },
    solution: {
      html: `<form id="bookingForm">
  <input id="bookingName" type="text" placeholder="Guest name" />
  <input id="bookingDate" type="date" />
  <input id="bookingGuests" type="number" min="1" placeholder="Guests" />
  <button type="submit">Save booking</button>
</form>
<p id="bookingFeedback"></p>
<section id="bookingSummary"></section>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 380px;
}

#bookingSummary {
  margin-top: 16px;
}

.booking-card {
  padding: 14px;
  border: 1px solid #dbe3ef;
  border-radius: 14px;
  background: white;
}`,
      js: `const bookingForm = document.getElementById("bookingForm");
const bookingName = document.getElementById("bookingName");
const bookingDate = document.getElementById("bookingDate");
const bookingGuests = document.getElementById("bookingGuests");
const bookingFeedback = document.getElementById("bookingFeedback");
const bookingSummary = document.getElementById("bookingSummary");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = bookingName.value.trim();
  const date = bookingDate.value;
  const guests = Number(bookingGuests.value);

  if (!name) {
    bookingFeedback.textContent = "Please enter the guest name.";
    return;
  }

  if (!date) {
    bookingFeedback.textContent = "Please choose a booking date.";
    return;
  }

  if (!guests || guests < 1) {
    bookingFeedback.textContent = "Please choose at least 1 guest.";
    return;
  }

  const booking = {
    name,
    date,
    guests,
  };

  bookingFeedback.textContent = "Booking saved successfully.";
  bookingSummary.innerHTML = \`
    <article class="booking-card">
      <h3>\${booking.name}</h3>
      <p>Date: \${booking.date}</p>
      <p>Guests: \${booking.guests}</p>
    </article>
  \`;
  bookingForm.reset();
});`,
    },
  },
  {
    id: "reservation-form-summary",
    editorType: "web",
    title: "Challenge 37 — Restaurant Reservation Summary",
    difficulty: "Medium",
    category: "JavaScript + Forms",
    goal: "Build a reservation form that turns form data into a clear reservation summary card.",
    requirements: [
      "Create a reservation form with at least 4 fields",
      "Prevent the default submit behavior",
      "Create an object from the submitted form data",
      "Render the reservation details on the page",
      "Show one clear success message",
    ],
    tips: [
      "This challenge helps learners explain forms as data collection, not just inputs on a screen.",
      "FormData is useful when several fields belong to one submit action.",
      "Keep the summary visual so the user can immediately check the result.",
    ],
    concepts: [
      "FormData",
      "objects",
      "submit events",
      "DOM rendering",
      "success feedback",
    ],
    suggestedApproach: [
      "Create a reservation form with named fields.",
      "Handle submit and prevent the page reload.",
      "Use FormData to read the field values.",
      "Build a reservation object and render it in a summary card.",
    ],
    commonMistakes: [
      "Forgetting name attributes and then wondering why FormData is empty",
      "Creating the object but not rendering it for the user",
      "Showing success text with no visible summary of the reservation",
    ],
    expectedOutcome:
      "A small restaurant reservation flow where the user submits details and immediately sees a confirmation summary.",
    starter: {
      html: `<form id="reservationForm">
  <input name="name" placeholder="Guest name" />
  <input name="email" type="email" placeholder="Email" />
  <select name="time">
    <option value="">Choose a time</option>
    <option value="18:00">18:00</option>
    <option value="19:30">19:30</option>
    <option value="21:00">21:00</option>
  </select>
  <input name="guests" type="number" min="1" placeholder="Guests" />
  <button type="submit">Reserve table</button>
</form>
<p id="reservationFeedback"></p>
<section id="reservationCard"></section>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 380px;
}

#reservationCard {
  margin-top: 16px;
}`,
      js: ``,
    },
    solution: {
      html: `<form id="reservationForm">
  <input name="name" placeholder="Guest name" />
  <input name="email" type="email" placeholder="Email" />
  <select name="time">
    <option value="">Choose a time</option>
    <option value="18:00">18:00</option>
    <option value="19:30">19:30</option>
    <option value="21:00">21:00</option>
  </select>
  <input name="guests" type="number" min="1" placeholder="Guests" />
  <button type="submit">Reserve table</button>
</form>
<p id="reservationFeedback"></p>
<section id="reservationCard"></section>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 380px;
}

#reservationCard {
  margin-top: 16px;
}

.reservation-card {
  padding: 16px;
  border-radius: 16px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
}`,
      js: `const reservationForm = document.getElementById("reservationForm");
const reservationFeedback = document.getElementById("reservationFeedback");
const reservationCard = document.getElementById("reservationCard");

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(reservationForm);
  const reservation = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    time: String(formData.get("time") || ""),
    guests: String(formData.get("guests") || "").trim(),
  };

  if (!reservation.name || !reservation.email || !reservation.time || !reservation.guests) {
    reservationFeedback.textContent = "Please complete every reservation field.";
    reservationCard.innerHTML = "";
    return;
  }

  reservationFeedback.textContent = "Reservation ready to confirm.";
  reservationCard.innerHTML = \`
    <article class="reservation-card">
      <h3>\${reservation.name}</h3>
      <p>Email: \${reservation.email}</p>
      <p>Time: \${reservation.time}</p>
      <p>Guests: \${reservation.guests}</p>
    </article>
  \`;
});`,
    },
  },
  {
    id: "form-data-preview",
    editorType: "web",
    title: "Challenge 38 — Form Data Preview",
    difficulty: "Medium",
    category: "JavaScript + Forms",
    goal: "Collect form values and preview the submitted data on the page.",
    requirements: [
      "Create a form with name, email, and role fields",
      "Prevent the default submit behavior",
      "Read the submitted values",
      "Render a preview card with the submitted data",
    ],
    tips: [
      "Use the submit event on the form.",
      "FormData can read values from named inputs.",
      "The preview should update after each submit.",
    ],
    concepts: [
      "submit events",
      "preventDefault",
      "FormData",
      "DOM rendering",
    ],
    suggestedApproach: [
      "Add name attributes to your fields.",
      "Listen for form submit.",
      "Create a FormData object from the form.",
      "Render the values into the preview container.",
    ],
    commonMistakes: [
      "Forgetting name attributes",
      "Reading values before preventDefault",
      "Not updating the preview after submit",
    ],
    expectedOutcome:
      "A form that shows a clean preview of the submitted user data.",
    starter: {
      html: `<form id="profileForm">
  <input name="name" placeholder="Name" />
  <input name="email" placeholder="Email" />
  <select name="role">
    <option>Frontend Developer</option>
    <option>Designer</option>
    <option>Project Manager</option>
  </select>
  <button type="submit">Preview</button>
</form>
<section id="preview"></section>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 360px;
}`,
      js: `const profileForm = document.getElementById("profileForm");
const preview = document.getElementById("preview");`,
    },
    solution: {
      html: `<form id="profileForm">
  <input name="name" placeholder="Name" />
  <input name="email" placeholder="Email" />
  <select name="role">
    <option>Frontend Developer</option>
    <option>Designer</option>
    <option>Project Manager</option>
  </select>
  <button type="submit">Preview</button>
</form>
<section id="preview"></section>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 360px;
}

input,
select,
button {
  padding: 10px;
}

#preview {
  margin-top: 18px;
}`,
      js: `const profileForm = document.getElementById("profileForm");
const preview = document.getElementById("preview");

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(profileForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const role = formData.get("role");

  preview.innerHTML = \`
    <article>
      <h3>\${name}</h3>
      <p>\${email}</p>
      <strong>\${role}</strong>
    </article>
  \`;
});`,
    },
  },
  {
    id: "add-item-to-list",
    editorType: "web",
    title: "Challenge 39 — Add Item to List",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Let the user add new items to a list.",
    requirements: [
      "Add an input",
      "Add a button",
      "Add new list items to the page when the button is clicked",
    ],
    tips: [
      "Create a new li element with createElement.",
      "Append it to the list.",
      "Check for empty input before adding.",
    ],
    concepts: [
      "createElement",
      "appendChild",
      "input handling",
      "list updates",
    ],
    suggestedApproach: [
      "Create the input, button, and list.",
      "Read the user's input when the button is clicked.",
      "Create a new list item element.",
      "Append it to the list and clear the input.",
    ],
    commonMistakes: [
      "Adding empty items",
      "Creating the list item but not appending it",
      "Forgetting to clear the input after adding",
    ],
    expectedOutcome:
      "A simple interactive list where users can add their own items.",
    starter: {
      html: `<input id="itemInput" type="text" placeholder="Add item..." />
<button id="addBtn">Add</button>
<ul id="itemList"></ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="itemInput" type="text" placeholder="Add item..." />
<button id="addBtn">Add</button>
<ul id="itemList"></ul>`,
      css: ``,
      js: `const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

addBtn.addEventListener("click", () => {
  const value = itemInput.value.trim();

  if (value === "") return;

  const li = document.createElement("li");
  li.textContent = value;
  itemList.appendChild(li);

  itemInput.value = "";
});`,
    },
  },
  {
    id: "add-goal-to-list",
    editorType: "web",
    title: "Challenge 40 — Add Item to a List",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Let the user add goals to a list and show how many items have been added.",
    requirements: [
      "Add an input",
      "Add a button",
      "Add new items to a visible list",
      "Update a count after each valid item",
      "Ignore empty values",
    ],
    tips: [
      "This is a repeat challenge on purpose: same pattern, slightly different output.",
      "You can append list items directly or render from an array.",
      "Keep the count in sync with the visible list.",
    ],
    concepts: [
      "createElement",
      "appendChild",
      "click events",
      "DOM updates",
    ],
    suggestedApproach: [
      "Create the input, button, list, and count elements.",
      "Read the current input value when the button is clicked.",
      "If the value is valid, create and append a new list item.",
      "Update the count after each successful add.",
    ],
    commonMistakes: [
      "Adding blank list items",
      "Appending the item but forgetting the count",
      "Updating the count before checking whether the value is valid",
    ],
    expectedOutcome:
      "A small list builder that gives the learner one more full repetition of the add-item pattern.",
    starter: {
      html: `<input id="goalInput" type="text" placeholder="Add a goal..." />
<button id="goalAddBtn">Add goal</button>
<p>Total goals: <span id="goalCount">0</span></p>
<ul id="goalList"></ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="goalInput" type="text" placeholder="Add a goal..." />
<button id="goalAddBtn">Add goal</button>
<p>Total goals: <span id="goalCount">0</span></p>
<ul id="goalList"></ul>`,
      css: ``,
      js: `const goalInput = document.getElementById("goalInput");
const goalAddBtn = document.getElementById("goalAddBtn");
const goalCount = document.getElementById("goalCount");
const goalList = document.getElementById("goalList");

let totalGoals = 0;

goalAddBtn.addEventListener("click", () => {
  const value = goalInput.value.trim();

  if (!value) return;

  const listItem = document.createElement("li");
  listItem.textContent = value;
  goalList.appendChild(listItem);

  totalGoals += 1;
  goalCount.textContent = totalGoals;
  goalInput.value = "";
});`,
    },
  },
  {
    id: "remove-item-from-list",
    editorType: "web",
    title: "Challenge 42 — Remove Item from List",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Allow the user to remove items from a list.",
    requirements: [
      "Show a list of items",
      "Add a remove button for each item",
      "Remove the clicked item from the page",
    ],
    tips: [
      "You can use event listeners on each button.",
      "Use parentElement or remove() to delete the item.",
      "You may create the list directly in HTML to start.",
    ],
    concepts: [
      "DOM traversal",
      "remove()",
      "button events",
      "dynamic UI behavior",
    ],
    suggestedApproach: [
      "Create some list items with remove buttons.",
      "Select all the remove buttons.",
      "Add a click listener to each button.",
      "Remove the related list item when clicked.",
    ],
    commonMistakes: [
      "Removing the button instead of the whole list item",
      "Selecting only one button instead of all buttons",
      "Using the wrong parent element",
    ],
    expectedOutcome:
      "A list where each item can be removed individually by clicking its button.",
    starter: {
      html: `<ul>
  <li>Milk <button class="remove-btn">Remove</button></li>
  <li>Bread <button class="remove-btn">Remove</button></li>
  <li>Eggs <button class="remove-btn">Remove</button></li>
</ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<ul>
  <li>Milk <button class="remove-btn">Remove</button></li>
  <li>Bread <button class="remove-btn">Remove</button></li>
  <li>Eggs <button class="remove-btn">Remove</button></li>
</ul>`,
      css: ``,
      js: `const removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.remove();
  });
});`,
    },
  },
  {
    id: "remove-saved-item",
    editorType: "web",
    title: "Challenge 43 — Remove Item from a List",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Allow the user to remove saved links from a list and show an empty message when none remain.",
    requirements: [
      "Show a list of items",
      "Add a remove button for each item",
      "Remove the clicked item",
      "Show an empty state when the list is empty",
    ],
    tips: [
      "This is another repeat challenge: same remove pattern, one extra UI state.",
      "You can check the number of remaining list items after each remove.",
      "The empty state makes the feature feel more complete.",
    ],
    concepts: [
      "remove()",
      "button events",
      "DOM traversal",
      "empty states",
    ],
    suggestedApproach: [
      "Create a small list of saved links with remove buttons.",
      "Select all remove buttons and add click listeners.",
      "Remove the related item when its button is clicked.",
      "After each remove, check whether the list is now empty.",
    ],
    commonMistakes: [
      "Removing only the button instead of the full list item",
      "Forgetting to show the empty message when nothing remains",
      "Checking the item count before the remove has happened",
    ],
    expectedOutcome:
      "A removable list that feels more like a real saved-items feature.",
    starter: {
      html: `<p id="savedEmpty" hidden>No saved links left.</p>
<ul id="savedList">
  <li>Frontend roadmap <button class="saved-remove-btn">Remove</button></li>
  <li>CSS card patterns <button class="saved-remove-btn">Remove</button></li>
  <li>JS event practice <button class="saved-remove-btn">Remove</button></li>
</ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<p id="savedEmpty" hidden>No saved links left.</p>
<ul id="savedList">
  <li>Frontend roadmap <button class="saved-remove-btn">Remove</button></li>
  <li>CSS card patterns <button class="saved-remove-btn">Remove</button></li>
  <li>JS event practice <button class="saved-remove-btn">Remove</button></li>
</ul>`,
      css: ``,
      js: `const savedList = document.getElementById("savedList");
const savedEmpty = document.getElementById("savedEmpty");
const savedRemoveButtons = document.querySelectorAll(".saved-remove-btn");

function updateSavedEmptyState() {
  const hasItems = savedList.querySelectorAll("li").length > 0;
  savedEmpty.hidden = hasItems;
}

savedRemoveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.remove();
    updateSavedEmptyState();
  });
});

updateSavedEmptyState();`,
    },
  },
  {
    id: "sort-products",
    editorType: "web",
    title: "Challenge 46 — Sort Products",
    difficulty: "Medium",
    category: "JavaScript + Arrays",
    goal: "Sort a small list of products by price.",
    requirements: [
      "Use a JavaScript array of product objects",
      "Display the product names and prices",
      "Add a button to sort the products by price",
    ],
    tips: [
      "Use an array of objects.",
      "The sort() method is useful here.",
      "Re-render the list after sorting.",
    ],
    concepts: [
      "arrays of objects",
      "sort()",
      "rendering data",
      "button events",
    ],
    suggestedApproach: [
      "Create a products array in JavaScript.",
      "Write a render function to show the products on the page.",
      "Add a sort button.",
      "Sort the array and call the render function again.",
    ],
    commonMistakes: [
      "Sorting strings instead of numeric prices",
      "Sorting the data but not updating the DOM",
      "Forgetting to render the list at the start",
    ],
    expectedOutcome:
      "A product list that can be sorted by price when the user clicks a button.",
    starter: {
      html: `<button id="sortBtn">Sort by Price</button>
<ul id="productList"></ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button id="sortBtn">Sort by Price</button>
<ul id="productList"></ul>`,
      css: ``,
      js: `const sortBtn = document.getElementById("sortBtn");
const productList = document.getElementById("productList");

const products = [
  { name: "Keyboard", price: 40 },
  { name: "Mouse", price: 20 },
  { name: "Monitor", price: 150 },
];

function renderProducts() {
  productList.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product.name + " - £" + product.price;
    productList.appendChild(li);
  });
}

sortBtn.addEventListener("click", () => {
  products.sort((a, b) => a.price - b.price);
  renderProducts();
});

renderProducts();`,
    },
  },
  {
    id: "filter-products",
    editorType: "web",
    title: "Challenge 44 — Filter Products by Category",
    difficulty: "Medium",
    category: "JavaScript + Arrays",
    goal: "Show only products from a selected category.",
    requirements: [
      "Use an array of products with category values",
      "Add filter buttons",
      "Render only the matching products when a button is clicked",
    ],
    tips: [
      "Use filter() on the products array.",
      "Render the filtered list instead of the full list.",
      "You can also include an 'All' button.",
    ],
    concepts: [
      "filter()",
      "arrays of objects",
      "event listeners",
      "re-rendering UI",
    ],
    suggestedApproach: [
      "Create a products array with names and categories.",
      "Write a render function that accepts an array.",
      "Add filter buttons for the categories.",
      "Use filter() and pass the result to the render function.",
    ],
    commonMistakes: [
      "Filtering correctly but still rendering the original array",
      "Using the wrong property name for category",
      "Not including a way to show all products again",
    ],
    expectedOutcome:
      "A product list that updates to show only items from the chosen category.",
    starter: {
      html: `<button id="allBtn">All</button>
<button id="techBtn">Tech</button>
<button id="homeBtn">Home</button>
<ul id="productList"></ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button id="allBtn">All</button>
<button id="techBtn">Tech</button>
<button id="homeBtn">Home</button>
<ul id="productList"></ul>`,
      css: ``,
      js: `const allBtn = document.getElementById("allBtn");
const techBtn = document.getElementById("techBtn");
const homeBtn = document.getElementById("homeBtn");
const productList = document.getElementById("productList");

const products = [
  { name: "Laptop", category: "Tech" },
  { name: "Lamp", category: "Home" },
  { name: "Phone", category: "Tech" },
  { name: "Chair", category: "Home" },
];

function renderProducts(items) {
  productList.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    productList.appendChild(li);
  });
}

allBtn.addEventListener("click", () => renderProducts(products));
techBtn.addEventListener("click", () => {
  renderProducts(products.filter((product) => product.category === "Tech"));
});
homeBtn.addEventListener("click", () => {
  renderProducts(products.filter((product) => product.category === "Home"));
});

renderProducts(products);`,
    },
  },
  {
    id: "data-driven-lesson-search",
    editorType: "web",
    title: "Challenge 45 — Data-Driven Lesson Search",
    difficulty: "Medium",
    category: "JavaScript + Arrays + DOM",
    goal: "Combine a search input, an array of lesson objects, filter(), map(), and DOM rendering after practising each idea separately.",
    requirements: [
      "Create an array of lesson objects",
      "Add a search input and a results container",
      "Use filter() to create the matching lessons array",
      "Use map() to create lesson card markup",
      "Render the matching lessons into the page",
      "Show a no-results message when the matching array is empty",
      "Style the results so they look like clear lesson cards",
    ],
    tips: [
      "This is the later version of the simple filter exercise: now the data has shape.",
      "filter() decides which lesson objects remain.",
      "map() turns each remaining lesson object into markup.",
      "The render function should be the only place that writes to innerHTML.",
    ],
    concepts: ["arrays of objects", "filter()", "map()", "input events", "data-driven rendering"],
    suggestedApproach: [
      "Create a lessons array with title, topic, and level fields.",
      "Build a renderLessons function that receives an array.",
      "Use map() inside the render function to create cards.",
      "Use filter() inside the input event to create the visible lessons.",
      "Pass the filtered result into the render function.",
    ],
    commonMistakes: [
      "Using filter() but still rendering the original array",
      "Using map() without join(), which can leave commas in the HTML",
      "Filtering by the wrong object property",
      "Writing render code in several places instead of one reusable function",
    ],
    expectedOutcome:
      "A searchable lesson-card interface that feels close to React-style list rendering while still using plain JavaScript.",
    starter: {
      html: `<section class="lesson-search">
  <label for="lessonSearchInput">Search lessons</label>
  <input id="lessonSearchInput" type="text" placeholder="Try CSS, DOM, or arrays" />
  <p id="lessonStatus">Showing all lessons</p>
  <div id="lessonResults" class="lesson-grid"></div>
</section>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section class="lesson-search">
  <label for="lessonSearchInput">Search lessons</label>
  <input id="lessonSearchInput" type="text" placeholder="Try CSS, DOM, or arrays" />
  <p id="lessonStatus">Showing all lessons</p>
  <div id="lessonResults" class="lesson-grid"></div>
</section>`,
      css: `.lesson-search {
  max-width: 680px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.lesson-search label {
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
}

.lesson-search input {
  width: 100%;
  padding: 12px;
  border: 1px solid #b7c1d1;
  border-radius: 8px;
}

#lessonStatus {
  color: #435269;
  font-size: 0.95rem;
}

.lesson-grid {
  display: grid;
  gap: 12px;
}

.lesson-card {
  padding: 16px;
  border: 1px solid #d7deea;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(39, 52, 78, 0.08);
}

.lesson-card h3 {
  margin: 0 0 6px;
}

.lesson-card p {
  margin: 0;
  color: #58657a;
}`,
      js: `const lessons = [
  { title: "CSS Grid Layout", topic: "CSS", level: "Beginner" },
  { title: "DOM Events", topic: "JavaScript", level: "Beginner" },
  { title: "Array filter()", topic: "JavaScript", level: "Builder" },
  { title: "Responsive Cards", topic: "CSS", level: "Builder" },
  { title: "Form Feedback", topic: "DOM", level: "Builder" },
];

const lessonSearchInput = document.getElementById("lessonSearchInput");
const lessonStatus = document.getElementById("lessonStatus");
const lessonResults = document.getElementById("lessonResults");

function renderLessons(items) {
  if (items.length === 0) {
    lessonStatus.textContent = "No lessons found";
    lessonResults.innerHTML = "<p>No lessons match that search yet.</p>";
    return;
  }

  lessonStatus.textContent = items.length + " lesson" + (items.length === 1 ? "" : "s") + " found";
  lessonResults.innerHTML = items
    .map((lesson) => {
      return '<article class="lesson-card">' +
        "<h3>" + lesson.title + "</h3>" +
        "<p>" + lesson.topic + " - " + lesson.level + "</p>" +
        "</article>";
    })
    .join("");
}

lessonSearchInput.addEventListener("input", () => {
  const query = lessonSearchInput.value.toLowerCase();

  const matchingLessons = lessons.filter((lesson) => {
    return lesson.title.toLowerCase().includes(query) ||
      lesson.topic.toLowerCase().includes(query);
  });

  renderLessons(matchingLessons);
});

renderLessons(lessons);`,
    },
  },
  {
    id: "todo-complete-toggle",
    editorType: "web",
    title: "Challenge 47 — Todo Complete Toggle",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Let the user mark todo items as complete.",
    requirements: [
      "Show a list of todo items",
      "Add a button or clickable area to mark each one complete",
      "Update the style to show completed items",
    ],
    tips: [
      "You can use classList.toggle().",
      "A line-through style works well for completed items.",
      "Each item needs its own event handling.",
    ],
    concepts: [
      "classList.toggle",
      "event listeners",
      "state representation",
      "UI feedback",
    ],
    suggestedApproach: [
      "Create a few todo items on the page.",
      "Add a button or clickable text for each item.",
      "Use click events to toggle a completed class.",
      "Style the completed class in CSS.",
    ],
    commonMistakes: [
      "Toggling the wrong element",
      "Adding JS but forgetting the completed CSS class",
      "Using one button to affect all items",
    ],
    expectedOutcome:
      "A todo list where users can mark items as completed and see the style change.",
    starter: {
      html: `<ul>
  <li><button class="todo-btn">Complete</button> Learn JavaScript</li>
  <li><button class="todo-btn">Complete</button> Practice DOM</li>
</ul>`,
      css: `.done {
  text-decoration: line-through;
  opacity: 0.7;
}`,
      js: ``,
    },
    solution: {
      html: `<ul>
  <li><button class="todo-btn">Complete</button> Learn JavaScript</li>
  <li><button class="todo-btn">Complete</button> Practice DOM</li>
</ul>`,
      css: `.done {
  text-decoration: line-through;
  opacity: 0.7;
}`,
      js: `const todoButtons = document.querySelectorAll(".todo-btn");

todoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("done");
  });
});`,
    },
  },
  {
    id: "password-strength-checker",
    editorType: "web",
    title: "Challenge 48 — Password Strength Checker",
    difficulty: "Medium",
    category: "JavaScript + Forms",
    goal: "Display whether a password is weak or strong as the user types.",
    requirements: [
      "Add a password input",
      "Show feedback below the input",
      "Update the feedback while the user types",
    ],
    tips: [
      "Start with a simple rule, like password length.",
      "Use the input event.",
      "You can extend the logic later with more checks.",
    ],
    concepts: [
      "input events",
      "conditional logic",
      "string length",
      "live feedback",
    ],
    suggestedApproach: [
      "Create a password input and feedback element.",
      "Listen for changes with the input event.",
      "Check the password length.",
      "Display a message like weak or strong based on the rule.",
    ],
    commonMistakes: [
      "Using click instead of input",
      "Checking the wrong length condition",
      "Updating the variable but not the text on screen",
    ],
    expectedOutcome:
      "A password field that gives simple strength feedback as the user types.",
    starter: {
      html: `<input id="passwordInput" type="password" placeholder="Enter password" />
<p id="strengthText"></p>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="passwordInput" type="password" placeholder="Enter password" />
<p id="strengthText"></p>`,
      css: ``,
      js: `const passwordInput = document.getElementById("passwordInput");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length >= 8) {
    strengthText.textContent = "Strong password";
  } else {
    strengthText.textContent = "Weak password";
  }
});`,
    },
  },
  {
    id: "password-rules-validation",
    editorType: "web",
    title: "Challenge 49 — Password Validation Rules",
    difficulty: "Medium",
    category: "JavaScript + Forms",
    goal: "Validate a password against basic rules and show which rules are currently passing.",
    requirements: [
      "Add a password input",
      "Check the password as the user types",
      "Validate at least 3 rules",
      "Show which rules are passing or failing",
      "Update the UI live",
    ],
    tips: [
      "A checklist makes password feedback easier to understand.",
      "Regular expressions help for number and uppercase checks.",
      "This is stronger than a single success or error message.",
    ],
    concepts: [
      "input events",
      "validation",
      "regular expressions",
      "UI feedback",
    ],
    suggestedApproach: [
      "Create one password input and a list of rules.",
      "Listen for the input event.",
      "Check each rule separately.",
      "Update the text or classes for each rule based on the current password.",
    ],
    commonMistakes: [
      "Only checking one rule and calling the password valid",
      "Writing the checks but never updating the visible UI",
      "Using one message when a checklist would be clearer",
    ],
    expectedOutcome:
      "A live password checklist that helps the learner practice validation in a more realistic way.",
    starter: {
      html: `<input id="rulesPasswordInput" type="password" placeholder="Create a password" />
<ul id="rulesList">
  <li id="lengthRule">At least 8 characters</li>
  <li id="numberRule">Contains a number</li>
  <li id="upperRule">Contains an uppercase letter</li>
</ul>`,
      css: `.is-valid {
  color: #15803d;
  font-weight: 700;
}`,
      js: ``,
    },
    solution: {
      html: `<input id="rulesPasswordInput" type="password" placeholder="Create a password" />
<ul id="rulesList">
  <li id="lengthRule">At least 8 characters</li>
  <li id="numberRule">Contains a number</li>
  <li id="upperRule">Contains an uppercase letter</li>
</ul>`,
      css: `.is-valid {
  color: #15803d;
  font-weight: 700;
}`,
      js: `const rulesPasswordInput = document.getElementById("rulesPasswordInput");
const lengthRule = document.getElementById("lengthRule");
const numberRule = document.getElementById("numberRule");
const upperRule = document.getElementById("upperRule");

rulesPasswordInput.addEventListener("input", () => {
  const value = rulesPasswordInput.value;

  lengthRule.classList.toggle("is-valid", value.length >= 8);
  numberRule.classList.toggle("is-valid", /\\d/.test(value));
  upperRule.classList.toggle("is-valid", /[A-Z]/.test(value));
});`,
    },
  },
  {
    id: "tab-switcher",
    editorType: "web",
    title: "Challenge 50 — Tab Switcher",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Switch visible content when the user clicks different tabs.",
    requirements: [
      "Add at least 2 tab buttons",
      "Add at least 2 content sections",
      "Show only the content for the active tab",
    ],
    tips: [
      "Hide non-active panels with display: none.",
      "Use click events on the tab buttons.",
      "A data attribute can help, but you can also keep it simple.",
    ],
    concepts: [
      "conditional rendering",
      "DOM selection",
      "button events",
      "UI state",
    ],
    suggestedApproach: [
      "Create the tab buttons and content panels.",
      "Hide all panels except one at the start.",
      "Add click events to the buttons.",
      "Show the matching panel and hide the others.",
    ],
    commonMistakes: [
      "Showing multiple tabs at once by mistake",
      "Not hiding the old content when opening new content",
      "Selecting the wrong content panel",
    ],
    expectedOutcome:
      "A tab interface where clicking each tab reveals the matching content section.",
    starter: {
      html: `<button id="tab1Btn">Tab 1</button>
<button id="tab2Btn">Tab 2</button>

<div id="tab1Content">This is tab 1 content.</div>
<div id="tab2Content" style="display:none;">This is tab 2 content.</div>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button id="tab1Btn">Tab 1</button>
<button id="tab2Btn">Tab 2</button>

<div id="tab1Content">This is tab 1 content.</div>
<div id="tab2Content" style="display:none;">This is tab 2 content.</div>`,
      css: ``,
      js: `const tab1Btn = document.getElementById("tab1Btn");
const tab2Btn = document.getElementById("tab2Btn");
const tab1Content = document.getElementById("tab1Content");
const tab2Content = document.getElementById("tab2Content");

tab1Btn.addEventListener("click", () => {
  tab1Content.style.display = "block";
  tab2Content.style.display = "none";
});

tab2Btn.addEventListener("click", () => {
  tab1Content.style.display = "none";
  tab2Content.style.display = "block";
});`,
    },
  },
  {
    id: "restaurant-tabs-panel",
    editorType: "web",
    title: "Challenge 51 — Tabs: About / Menu / Contact",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build a restaurant info panel where About, Menu, and Contact buttons switch the visible content.",
    requirements: [
      "Add 3 tab buttons: About, Menu, and Contact",
      "Show one content area",
      "Change the content when a tab is clicked",
      "Make the active tab visually clear",
    ],
    tips: [
      "This is a themed repeat of the tab pattern.",
      "Use one output area and swap the content based on which button is active.",
      "A small data object can help keep the content organized.",
    ],
    concepts: [
      "click events",
      "DOM updates",
      "tab switching",
      "active states",
    ],
    suggestedApproach: [
      "Create three buttons and one shared content panel.",
      "Store the panel text for About, Menu, and Contact in JavaScript.",
      "Add click listeners to each tab button.",
      "Update the content panel and active button when the user switches tabs.",
    ],
    commonMistakes: [
      "Updating the active button but not the content",
      "Rendering all tab content at the same time",
      "Hardcoding too much repeated logic in each click handler",
    ],
    expectedOutcome:
      "A simple restaurant tabs feature that feels like a real UI section instead of an abstract exercise.",
    starter: {
      html: `<div class="tab-row">
  <button class="restaurant-tab is-active" data-tab="about">About</button>
  <button class="restaurant-tab" data-tab="menu">Menu</button>
  <button class="restaurant-tab" data-tab="contact">Contact</button>
</div>
<section id="restaurantPanel"></section>`,
      css: `.tab-row {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.is-active {
  background: #2563eb;
  color: white;
}`,
      js: ``,
    },
    solution: {
      html: `<div class="tab-row">
  <button class="restaurant-tab is-active" data-tab="about">About</button>
  <button class="restaurant-tab" data-tab="menu">Menu</button>
  <button class="restaurant-tab" data-tab="contact">Contact</button>
</div>
<section id="restaurantPanel"></section>`,
      css: `.tab-row {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.is-active {
  background: #2563eb;
  color: white;
}`,
      js: `const restaurantTabs = document.querySelectorAll(".restaurant-tab");
const restaurantPanel = document.getElementById("restaurantPanel");

const restaurantContent = {
  about: "<h2>About us</h2><p>A small neighbourhood restaurant focused on simple seasonal dishes.</p>",
  menu: "<h2>Menu</h2><p>Fresh pasta, grilled vegetables, and homemade desserts every day.</p>",
  contact: "<h2>Contact</h2><p>Call 01234 567890 or visit us on Market Street.</p>",
};

function renderRestaurantTab(tabName) {
  restaurantPanel.innerHTML = restaurantContent[tabName];

  restaurantTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tabName);
  });
}

restaurantTabs.forEach((button) => {
  button.addEventListener("click", () => {
    renderRestaurantTab(button.dataset.tab);
  });
});

renderRestaurantTab("about");`,
    },
  },
  {
    id: "profile-tabs-active-state",
    editorType: "web",
    title: "Challenge 52 — Profile Tabs with Active State",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build a profile card where tabs switch between Bio, Skills, and Contact without duplicating the render logic.",
    requirements: [
      "Add 3 tab buttons",
      "Add one shared output panel",
      "Store the tab content in a JavaScript object",
      "Render the matching content when a tab is clicked",
      "Toggle an active class on the selected tab",
    ],
    tips: [
      "Before coding, decide what changes between tabs and what stays the same.",
      "This is a tabs repeat, but the content object forces a more reusable approach.",
      "If your click handlers look identical, move the repeated work into one function.",
    ],
    concepts: ["tabs", "objects", "classList.toggle", "render functions"],
    suggestedApproach: [
      "Create the three buttons and one panel.",
      "Create a profileSections object with title and text for each tab.",
      "Write a renderProfileTab function.",
      "Loop over buttons and call the render function with the clicked tab id.",
    ],
    commonMistakes: [
      "Writing three long click handlers instead of one reusable function",
      "Changing the active button but not the panel content",
      "Forgetting to render the default tab on page load",
    ],
    expectedOutcome:
      "A tabbed profile panel that repeats the tab pattern in a more data-driven way.",
    starter: {
      html: `<div class="profile-tabs">
  <button class="profile-tab is-active" data-tab="bio">Bio</button>
  <button class="profile-tab" data-tab="skills">Skills</button>
  <button class="profile-tab" data-tab="contact">Contact</button>
</div>
<article id="profilePanel"></article>`,
      css: `.profile-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}

.is-active {
  background: #0f766e;
  color: white;
}`,
      js: ``,
    },
    solution: {
      html: `<div class="profile-tabs">
  <button class="profile-tab is-active" data-tab="bio">Bio</button>
  <button class="profile-tab" data-tab="skills">Skills</button>
  <button class="profile-tab" data-tab="contact">Contact</button>
</div>
<article id="profilePanel"></article>`,
      css: `.profile-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}

.is-active {
  background: #0f766e;
  color: white;
}`,
      js: `const profileTabs = document.querySelectorAll(".profile-tab");
const profilePanel = document.getElementById("profilePanel");

const profileSections = {
  bio: {
    title: "Bio",
    text: "Maya is a junior frontend developer focused on clean UI.",
  },
  skills: {
    title: "Skills",
    text: "HTML, CSS, JavaScript, DOM events, and accessibility basics.",
  },
  contact: {
    title: "Contact",
    text: "Available for interviews and portfolio reviews.",
  },
};

function renderProfileTab(tabName) {
  const section = profileSections[tabName];

  profilePanel.innerHTML =
    "<h2>" + section.title + "</h2>" +
    "<p>" + section.text + "</p>";

  profileTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tabName);
  });
}

profileTabs.forEach((button) => {
  button.addEventListener("click", () => {
    renderProfileTab(button.dataset.tab);
  });
});

renderProfileTab("bio");`,
    },
  },
  {
    id: "mock-fetch-loading",
    editorType: "web",
    title: "Challenge 54 — Mock Fetch with Loading State",
    difficulty: "Medium",
    category: "JavaScript + Async",
    goal: "Simulate loading data with a fake API call and show a loading message first.",
    requirements: [
      "Show a loading message while waiting",
      "Simulate a delayed response with setTimeout",
      "Display the returned data after the delay",
    ],
    tips: [
      "Use a Promise with setTimeout.",
      "Use then() or async/await.",
      "Update the DOM before and after the fake request.",
    ],
    concepts: ["promises", "setTimeout", "loading state", "async thinking"],
    suggestedApproach: [
      "Create a fake function that returns a Promise.",
      "Set a loading message before calling it.",
      "Wait for the Promise to resolve.",
      "Replace the loading text with the returned data.",
    ],
    commonMistakes: [
      "Returning plain data instead of a Promise",
      "Never replacing the loading message",
      "Trying to use the result before the Promise resolves",
    ],
    expectedOutcome:
      "A page that first shows loading text and then displays mock data after a short delay.",
    starter: {
      html: `<button id="loadBtn">Load Profile</button>
<p id="statusText"></p>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button id="loadBtn">Load Profile</button>
<p id="statusText"></p>`,
      css: ``,
      js: `const loadBtn = document.getElementById("loadBtn");
const statusText = document.getElementById("statusText");

function fakeFetchProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Nico - Frontend Developer in Training");
    }, 1500);
  });
}

loadBtn.addEventListener("click", async () => {
  statusText.textContent = "Loading...";

  const result = await fakeFetchProfile();
  statusText.textContent = result;
});`,
    },
  },
  {
    id: "mock-fetch-error-retry",
    editorType: "web",
    title: "Challenge 55 — Mock Fetch Error and Retry",
    difficulty: "Medium",
    category: "JavaScript + Async",
    goal: "Simulate an API request that can fail and show an error message with retry support.",
    requirements: [
      "Show a loading message while waiting",
      "Sometimes show an error message",
      "Allow the user to try again",
    ],
    tips: [
      "Use reject() inside a Promise.",
      "Wrap await calls in try/catch.",
      "You can use Math.random() to simulate success or failure.",
    ],
    concepts: ["promises", "reject()", "try/catch", "error handling"],
    suggestedApproach: [
      "Create a fake API function that sometimes resolves and sometimes rejects.",
      "Show loading text before starting.",
      "Use try/catch around the async call.",
      "Let the button run the same logic again for retry.",
    ],
    commonMistakes: [
      "Forgetting try/catch with async/await",
      "Rejecting the Promise but never showing the error in the UI",
      "Showing loading but not clearing it after failure",
    ],
    expectedOutcome:
      "A fake data loader that sometimes succeeds, sometimes fails, and lets the user retry.",
    starter: {
      html: `<button id="retryBtn">Load Data</button>
<p id="statusText"></p>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button id="retryBtn">Load Data</button>
<p id="statusText"></p>`,
      css: ``,
      js: `const retryBtn = document.getElementById("retryBtn");
const statusText = document.getElementById("statusText");

function fakeFetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        resolve("Data loaded successfully.");
      } else {
        reject(new Error("Something went wrong. Please try again."));
      }
    }, 1200);
  });
}

retryBtn.addEventListener("click", async () => {
  statusText.textContent = "Loading...";

  try {
    const result = await fakeFetchData();
    statusText.textContent = result;
  } catch (error) {
    statusText.textContent = error.message;
  }
});`,
    },
  },
  {
    id: "promise-chain-practice",
    editorType: "web",
    title: "Challenge 56 — Promise Chain Practice",
    difficulty: "Medium",
    category: "JavaScript + Async",
    goal: "Use .then() to handle a Promise and display the result.",
    requirements: [
      "Create a function that returns a Promise",
      "Use .then() to handle the resolved value",
      "Show the result on the page",
    ],
    tips: [
      "This challenge is about promises without async/await.",
      "Resolve a simple string after a delay.",
      "Update the DOM inside .then().",
    ],
    concepts: ["Promise constructor", ".then()", "async flow", "DOM updates"],
    suggestedApproach: [
      "Create a function that returns a Promise.",
      "Resolve a value after a setTimeout delay.",
      "Call the function.",
      "Use .then() to display the result on the page.",
    ],
    commonMistakes: [
      "Forgetting to return the Promise",
      "Trying to use the Promise value outside .then()",
      "Writing the result to the console but not the page",
    ],
    expectedOutcome:
      "A simple Promise example where the result appears on the page after a delay.",
    starter: {
      html: `<button id="runPromiseBtn">Run Promise</button>
<p id="promiseOutput"></p>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button id="runPromiseBtn">Run Promise</button>
<p id="promiseOutput"></p>`,
      css: ``,
      js: `const runPromiseBtn = document.getElementById("runPromiseBtn");
const promiseOutput = document.getElementById("promiseOutput");

function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved successfully.");
    }, 1000);
  });
}

runPromiseBtn.addEventListener("click", () => {
  promiseOutput.textContent = "Loading...";

  getMessage().then((message) => {
    promiseOutput.textContent = message;
  });
});`,
    },
  },
  {
    id: "await-user-card",
    editorType: "web",
    title: "Challenge 57 — Async Await User Card",
    difficulty: "Medium",
    category: "JavaScript + Async",
    goal: "Use async/await to load mock user data and show it in a small card.",
    requirements: [
      "Create a fake async function that returns a user object",
      "Use async/await to call the function",
      "Show the user's name and role in the UI",
    ],
    tips: [
      "Resolve an object, not just a string.",
      "Use await inside an async function.",
      "Update the DOM after the data arrives.",
    ],
    concepts: ["async functions", "await", "objects", "DOM rendering"],
    suggestedApproach: [
      "Create a fake API function returning a Promise with a user object.",
      "Create a button and output area.",
      "Use an async click handler.",
      "Await the user data and render its properties.",
    ],
    commonMistakes: [
      "Forgetting to mark the function as async",
      "Trying to access object properties before awaiting the Promise",
      "Rendering [object Object] instead of specific properties",
    ],
    expectedOutcome:
      "A small user card that appears after loading mock user data with async/await.",
    starter: {
      html: `<button id="loadUserBtn">Load User</button>
<div id="userCard"></div>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button id="loadUserBtn">Load User</button>
<div id="userCard"></div>`,
      css: ``,
      js: `const loadUserBtn = document.getElementById("loadUserBtn");
const userCard = document.getElementById("userCard");

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Nico",
        role: "Frontend Developer in Training",
      });
    }, 1200);
  });
}

loadUserBtn.addEventListener("click", async () => {
  userCard.textContent = "Loading user...";

  const user = await fetchUser();

  userCard.innerHTML = "<h3>" + user.name + "</h3><p>" + user.role + "</p>";
});`,
    },
  },
  {
    id: "async-save-button",
    editorType: "web",
    title: "Challenge 58 — Async Save Button",
    difficulty: "Medium",
    category: "JavaScript + Async",
    goal: "Simulate saving data with a button that shows loading, success, and disabled states.",
    requirements: [
      "Add a save button",
      "Simulate an async delay",
      "Show a loading state while saving",
      "Disable the button during the request",
      "Show a success message when it finishes",
    ],
    tips: [
      "This is a very common real-world UI pattern.",
      "setTimeout inside a Promise is enough to simulate async work.",
      "Remember to re-enable the button after the request finishes.",
    ],
    concepts: [
      "promises",
      "async/await",
      "loading state",
      "disabled button",
      "UI feedback",
    ],
    suggestedApproach: [
      "Create a button and a status message element.",
      "Write a fake save function that resolves after a delay.",
      "Set the button to disabled and show Saving while it runs.",
      "Show the success message after the Promise resolves.",
    ],
    commonMistakes: [
      "Showing a loading message but forgetting to disable the button",
      "Never restoring the button text after saving",
      "Treating the async step like a normal synchronous function",
    ],
    expectedOutcome:
      "A realistic save button that behaves like the user is waiting for a request to finish.",
    starter: {
      html: `<button id="saveBtn">Save settings</button>
<p id="saveMessage"></p>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button id="saveBtn">Save settings</button>
<p id="saveMessage"></p>`,
      css: ``,
      js: `const saveBtn = document.getElementById("saveBtn");
const saveMessage = document.getElementById("saveMessage");

function saveSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Settings saved successfully.");
    }, 1000);
  });
}

saveBtn.addEventListener("click", async () => {
  saveBtn.disabled = true;
  saveBtn.textContent = "Saving...";
  saveMessage.textContent = "Please wait while we save your settings.";

  const result = await saveSettings();

  saveBtn.disabled = false;
  saveBtn.textContent = "Save settings";
  saveMessage.textContent = result;
});`,
    },
  },
  {
    id: "save-notes-localstorage",
    editorType: "web",
    title: "Challenge 59 — Save Notes in localStorage",
    difficulty: "Medium",
    category: "JavaScript + localStorage",
    goal: "Save notes in localStorage so they remain after refresh.",
    requirements: [
      "Add a textarea",
      "Add a save button",
      "Store the note in localStorage",
      "Load the saved note when the page starts",
    ],
    tips: [
      "Use localStorage.setItem() and getItem().",
      "Load the saved value as soon as the script runs.",
      "Use the textarea value directly.",
    ],
    concepts: [
      "localStorage",
      "persisted data",
      "form values",
      "page initialization",
    ],
    suggestedApproach: [
      "Create the textarea and save button.",
      "Load any saved note from localStorage when the page loads.",
      "Save the current textarea value when the button is clicked.",
      "Optionally show a success message after saving.",
    ],
    commonMistakes: [
      "Saving the note but not loading it on startup",
      "Using different localStorage keys for save and load",
      "Reading from the textarea before selecting it correctly",
    ],
    expectedOutcome:
      "A notes box where the user's text stays available even after refreshing the page.",
    starter: {
      html: `<textarea id="noteInput" placeholder="Write your note..."></textarea>
<button id="saveNoteBtn">Save Note</button>
<p id="saveStatus"></p>`,
      css: `textarea {
  width: 100%;
  min-height: 140px;
}`,
      js: ``,
    },
    solution: {
      html: `<textarea id="noteInput" placeholder="Write your note..."></textarea>
<button id="saveNoteBtn">Save Note</button>
<p id="saveStatus"></p>`,
      css: `textarea {
  width: 100%;
  min-height: 140px;
}`,
      js: `const noteInput = document.getElementById("noteInput");
const saveNoteBtn = document.getElementById("saveNoteBtn");
const saveStatus = document.getElementById("saveStatus");

const savedNote = localStorage.getItem("saved-note");

if (savedNote) {
  noteInput.value = savedNote;
}

saveNoteBtn.addEventListener("click", () => {
  localStorage.setItem("saved-note", noteInput.value);
  saveStatus.textContent = "Note saved.";
});`,
    },
  },
  {
    id: "save-load-todos-localstorage",
    editorType: "web",
    title: "Challenge 60 — Save and Load Todos with localStorage",
    difficulty: "Hard",
    category: "JavaScript + localStorage",
    goal: "Let the user add todos, save them in localStorage, and load them on refresh.",
    requirements: [
      "Add a text input and button",
      "Render new todos in a list",
      "Save the todo list to localStorage",
      "Load saved todos when the page starts",
    ],
    tips: [
      "localStorage only stores strings.",
      "Use JSON.stringify() when saving arrays.",
      "Use JSON.parse() when reading arrays back.",
    ],
    concepts: [
      "localStorage",
      "JSON.stringify()",
      "JSON.parse()",
      "DOM rendering",
    ],
    suggestedApproach: [
      "Create an array to store todos.",
      "Render the array into the page.",
      "Save the array after adding a todo.",
      "Load the saved array when the script starts.",
    ],
    commonMistakes: [
      "Saving the array without JSON.stringify()",
      "Forgetting to re-render after adding an item",
      "Using different localStorage keys for save and load",
    ],
    expectedOutcome:
      "A todo list that keeps its items even after the page refreshes.",
    starter: {
      html: `<input id="todoInput" type="text" placeholder="Add a todo..." />
  <button id="addTodoBtn">Add Todo</button>
  <ul id="todoList"></ul>`,
      css: ``,
      js: `const todoInput = document.getElementById("todoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  let todos = [];

  function renderTodos() {

  }

  addTodoBtn.addEventListener("click", () => {

  });`,
    },
    solution: {
      html: `<input id="todoInput" type="text" placeholder="Add a todo..." />
  <button id="addTodoBtn">Add Todo</button>
  <ul id="todoList"></ul>`,
      css: ``,
      js: `const todoInput = document.getElementById("todoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  function readTodos() {
    try {
      const raw = localStorage.getItem("todos");
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  let todos = readTodos();

  function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo;
      todoList.appendChild(li);
    });
  }

  addTodoBtn.addEventListener("click", () => {
    const value = todoInput.value.trim();

    if (value === "") return;

    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();

    todoInput.value = "";
  });

  renderTodos();`,
    },
  },
  {
    id: "saved-favourites-localstorage",
    editorType: "web",
    title: "Challenge 61 — Save Favourites in localStorage",
    difficulty: "Hard",
    category: "JavaScript + localStorage",
    goal: "Let the user save favourite resources and restore them from localStorage on refresh.",
    requirements: [
      "Render a list of resources from JavaScript data",
      "Add a button to save or unsave favourites",
      "Store favourite ids in localStorage",
      "Load saved favourites when the page starts",
      "Show a saved count in the UI",
    ],
    tips: [
      "This is a common real-world pattern for saved articles, liked items, and wishlists.",
      "Store only the ids in localStorage, not the whole DOM.",
      "Re-render after each save so the button text stays honest.",
    ],
    concepts: [
      "localStorage",
      "JSON.stringify()",
      "JSON.parse()",
      "arrays of ids",
      "UI state",
    ],
    suggestedApproach: [
      "Create a resources array in JavaScript.",
      "Read the saved ids from localStorage when the page loads.",
      "Render cards with save buttons.",
      "Toggle the saved ids and store them again after each click.",
      "Update the count every time the UI re-renders.",
    ],
    commonMistakes: [
      "Saving the whole object list when only ids are needed",
      "Updating localStorage but forgetting to update the visible UI",
      "Parsing invalid storage data without a safe fallback",
    ],
    expectedOutcome:
      "A favourites interface that feels more like a real product because saved state survives a refresh.",
    starter: {
      html: `<p>Saved resources: <span id="savedCount">0</span></p>
<section id="resourceGrid"></section>`,
      css: `#resourceGrid {
  display: grid;
  gap: 12px;
}

.resource-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}`,
      js: `const savedCount = document.getElementById("savedCount");
const resourceGrid = document.getElementById("resourceGrid");`,
    },
    solution: {
      html: `<p>Saved resources: <span id="savedCount">0</span></p>
<section id="resourceGrid"></section>`,
      css: `#resourceGrid {
  display: grid;
  gap: 12px;
}

.resource-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}`,
      js: `const savedCount = document.getElementById("savedCount");
const resourceGrid = document.getElementById("resourceGrid");

const resources = [
  { id: 1, title: "DOM events", level: "Builder" },
  { id: 2, title: "Forms and validation", level: "Builder" },
  { id: 3, title: "Async UI states", level: "Builder" },
];

function readSavedIds() {
  try {
    const raw = localStorage.getItem("saved-resource-ids");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

let savedIds = readSavedIds();

function saveIds() {
  localStorage.setItem("saved-resource-ids", JSON.stringify(savedIds));
}

function toggleSaved(resourceId) {
  if (savedIds.includes(resourceId)) {
    savedIds = savedIds.filter((id) => id !== resourceId);
  } else {
    savedIds = [...savedIds, resourceId];
  }

  saveIds();
  renderResources();
}

function renderResources() {
  savedCount.textContent = savedIds.length;
  resourceGrid.innerHTML = resources
    .map((resource) => {
      const isSaved = savedIds.includes(resource.id);

      return \`
        <article class="resource-card">
          <h3>\${resource.title}</h3>
          <p>\${resource.level}</p>
          <button data-id="\${resource.id}">
            \${isSaved ? "Unsave" : "Save"}
          </button>
        </article>
      \`;
    })
    .join("");

  resourceGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      toggleSaved(Number(button.dataset.id));
    });
  });
}

renderResources();`,
    },
  },
  {
    id: "cart-items-localstorage",
    editorType: "web",
    title: "Challenge 62 — Save Cart Items in localStorage",
    difficulty: "Hard",
    category: "JavaScript + localStorage",
    goal: "Build a simple cart that saves added items in localStorage and restores them on refresh.",
    requirements: [
      "Render at least 3 products with Add to cart buttons",
      "Store cart items in localStorage",
      "Load saved cart items on page start",
      "Show the cart count",
      "Render the current cart items in a list",
    ],
    tips: [
      "This is the same persistence idea as favourites, but in a cart context.",
      "Keep the source products separate from the saved cart items.",
      "Use JSON.stringify() and JSON.parse() because localStorage stores strings.",
    ],
    concepts: [
      "localStorage",
      "arrays of objects",
      "rendering lists",
      "UI state",
      "JSON",
    ],
    suggestedApproach: [
      "Create a small products array.",
      "Read the saved cart from localStorage safely.",
      "Add items to the cart when buttons are clicked.",
      "Save and re-render after each change.",
      "Show the cart count and the item names in a list.",
    ],
    commonMistakes: [
      "Saving cart items without parsing them back on load",
      "Updating localStorage but not the count or visible list",
      "Replacing the whole cart accidentally when adding one item",
    ],
    expectedOutcome:
      "A small ecommerce-style cart that proves the user understands saved state in a very common frontend feature.",
    starter: {
      html: `<p>Cart items: <span id="cartCount">0</span></p>
<section id="shopGrid"></section>
<ul id="cartItems"></ul>`,
      css: `#shopGrid {
  display: grid;
  gap: 12px;
  margin-bottom: 16px;
}

.shop-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
}`,
      js: `const cartCount = document.getElementById("cartCount");
const shopGrid = document.getElementById("shopGrid");
const cartItems = document.getElementById("cartItems");`,
    },
    solution: {
      html: `<p>Cart items: <span id="cartCount">0</span></p>
<section id="shopGrid"></section>
<ul id="cartItems"></ul>`,
      css: `#shopGrid {
  display: grid;
  gap: 12px;
  margin-bottom: 16px;
}

.shop-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
}`,
      js: `const cartCount = document.getElementById("cartCount");
const shopGrid = document.getElementById("shopGrid");
const cartItems = document.getElementById("cartItems");

const products = [
  { id: 1, name: "UI Kit" },
  { id: 2, name: "React Notes" },
  { id: 3, name: "API Guide" },
];

function readCart() {
  try {
    const raw = localStorage.getItem("cart-items");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

let cart = readCart();

function saveCart() {
  localStorage.setItem("cart-items", JSON.stringify(cart));
}

function addToCart(product) {
  cart = [...cart, product];
  saveCart();
  renderShop();
}

function renderShop() {
  cartCount.textContent = cart.length;

  shopGrid.innerHTML = products
    .map(
      (product) => \`
        <article class="shop-card">
          <h3>\${product.name}</h3>
          <button data-id="\${product.id}">Add to cart</button>
        </article>
      \`
    )
    .join("");

  cartItems.innerHTML = cart
    .map((item) => "<li>" + item.name + "</li>")
    .join("");

  shopGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const product = products.find((item) => item.id === Number(button.dataset.id));

      if (product) {
        addToCart(product);
      }
    });
  });
}

renderShop();`,
    },
  },
  {
    id: "dark-mode-preference-localstorage",
    editorType: "web",
    title: "Challenge 63 — Dark Mode Preference Card",
    difficulty: "Medium",
    category: "JavaScript + localStorage",
    goal: "Build a theme toggle that saves the selected mode and restores it on page load.",
    requirements: [
      "Add a page card and theme toggle button",
      "Toggle a dark class or data attribute on the card",
      "Save the selected theme in localStorage",
      "Read the saved theme when the page loads",
      "Update the button label to explain the next action",
    ],
    tips: [
      "Before coding, decide whether the saved value should be light or dark.",
      "This repeats dark mode, but the button label and initial load must stay in sync.",
      "localStorage stores strings, so keep your stored values simple.",
    ],
    concepts: ["localStorage", "class toggling", "saved preferences", "initial state"],
    suggestedApproach: [
      "Create the card and button.",
      "Read the saved theme before adding the click listener.",
      "Write a renderTheme function that applies the class and button label.",
      "Save and render whenever the user toggles the theme.",
    ],
    commonMistakes: [
      "Saving the theme but not applying it on page load",
      "Changing the class but leaving the button label wrong",
      "Using one storage key for saving and a different one for loading",
    ],
    expectedOutcome:
      "A theme preference card that remembers the user's choice after refresh.",
    starter: {
      html: `<section id="themeCard" class="theme-card">
  <h2>Practice dashboard</h2>
  <p id="themeStatus">Theme: light</p>
  <button id="themeToggleBtn" type="button">Use dark mode</button>
</section>`,
      css: `.theme-card {
  padding: 20px;
  border-radius: 8px;
  background: #ffffff;
  color: #111827;
}

.theme-card.dark {
  background: #111827;
  color: #f8fafc;
}`,
      js: ``,
    },
    solution: {
      html: `<section id="themeCard" class="theme-card">
  <h2>Practice dashboard</h2>
  <p id="themeStatus">Theme: light</p>
  <button id="themeToggleBtn" type="button">Use dark mode</button>
</section>`,
      css: `.theme-card {
  padding: 20px;
  border-radius: 8px;
  background: #ffffff;
  color: #111827;
}

.theme-card.dark {
  background: #111827;
  color: #f8fafc;
}`,
      js: `const themeCard = document.getElementById("themeCard");
const themeStatus = document.getElementById("themeStatus");
const themeToggleBtn = document.getElementById("themeToggleBtn");

let theme = localStorage.getItem("dashboard-theme") || "light";

function renderTheme() {
  const isDark = theme === "dark";
  themeCard.classList.toggle("dark", isDark);
  themeStatus.textContent = "Theme: " + theme;
  themeToggleBtn.textContent = isDark ? "Use light mode" : "Use dark mode";
}

themeToggleBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("dashboard-theme", theme);
  renderTheme();
});

renderTheme();`,
    },
  },
  {
    id: "saved-form-draft-localstorage",
    editorType: "web",
    title: "Challenge 64 — Saved Form Draft",
    difficulty: "Medium",
    category: "JavaScript + localStorage",
    goal: "Save a form draft while the user types and restore it after refresh.",
    requirements: [
      "Add a name input and message textarea",
      "Save both field values to localStorage on input",
      "Load the saved draft when the page starts",
      "Add a clear draft button",
      "Show a small status message when the draft is saved or cleared",
    ],
    tips: [
      "Before coding, decide whether to save two separate keys or one object.",
      "This is a real form pattern: users expect drafts not to disappear.",
      "Saving on input means the UI persists without a submit button.",
    ],
    concepts: ["localStorage", "form state", "input events", "JSON"],
    suggestedApproach: [
      "Create the inputs, clear button, and status text.",
      "Read the saved draft safely from localStorage.",
      "Write saveDraft and renderDraft helper functions.",
      "Listen for input on both fields and click on the clear button.",
    ],
    commonMistakes: [
      "Saving only one field",
      "Saving an object without JSON.stringify()",
      "Clearing localStorage but leaving old text visible in the fields",
    ],
    expectedOutcome:
      "A form that keeps an unfinished draft after refresh and can clear it on demand.",
    starter: {
      html: `<input id="draftName" type="text" placeholder="Your name" />
<textarea id="draftMessage" placeholder="Write a draft..."></textarea>
<button id="clearDraftBtn" type="button">Clear draft</button>
<p id="draftStatus"></p>`,
      css: `textarea {
  width: 100%;
  min-height: 110px;
}`,
      js: ``,
    },
    solution: {
      html: `<input id="draftName" type="text" placeholder="Your name" />
<textarea id="draftMessage" placeholder="Write a draft..."></textarea>
<button id="clearDraftBtn" type="button">Clear draft</button>
<p id="draftStatus"></p>`,
      css: `textarea {
  width: 100%;
  min-height: 110px;
}`,
      js: `const draftName = document.getElementById("draftName");
const draftMessage = document.getElementById("draftMessage");
const clearDraftBtn = document.getElementById("clearDraftBtn");
const draftStatus = document.getElementById("draftStatus");

function readDraft() {
  try {
    const raw = localStorage.getItem("contact-draft");
    return raw ? JSON.parse(raw) : { name: "", message: "" };
  } catch (error) {
    return { name: "", message: "" };
  }
}

function saveDraft() {
  const draft = {
    name: draftName.value,
    message: draftMessage.value,
  };

  localStorage.setItem("contact-draft", JSON.stringify(draft));
  draftStatus.textContent = "Draft saved.";
}

const savedDraft = readDraft();
draftName.value = savedDraft.name || "";
draftMessage.value = savedDraft.message || "";

draftName.addEventListener("input", saveDraft);
draftMessage.addEventListener("input", saveDraft);

clearDraftBtn.addEventListener("click", () => {
  localStorage.removeItem("contact-draft");
  draftName.value = "";
  draftMessage.value = "";
  draftStatus.textContent = "Draft cleared.";
});`,
    },
  },
  {
    id: "recently-viewed-products-localstorage",
    editorType: "web",
    title: "Challenge 65 — Recently Viewed Items",
    difficulty: "Hard",
    category: "JavaScript + localStorage",
    goal: "Track recently viewed products, keep only the latest three, and restore them after refresh.",
    requirements: [
      "Render product buttons from an array",
      "When a product is clicked, add it to recently viewed",
      "Keep only the latest 3 unique viewed products",
      "Save the recently viewed list to localStorage",
      "Load and render recently viewed items on page start",
    ],
    tips: [
      "Before coding, decide whether new viewed items go at the start or end.",
      "This is a state exercise: the same product should not appear twice.",
      "Use filter() to remove an old duplicate before adding the latest click.",
    ],
    concepts: ["localStorage", "arrays", "filter()", "slice()", "recent state"],
    suggestedApproach: [
      "Create products and recentlyViewed arrays.",
      "Render product buttons and the recent list separately.",
      "On click, remove any existing matching id from recent items.",
      "Add the clicked product to the front and slice the list to 3 items.",
      "Save and render after every click.",
    ],
    commonMistakes: [
      "Allowing duplicate recently viewed items",
      "Saving the list but not loading it on startup",
      "Letting the recent list grow forever",
    ],
    expectedOutcome:
      "A recently viewed feature like the kind used in shops, dashboards, and learning platforms.",
    starter: {
      html: `<section id="productButtons"></section>
<h2>Recently viewed</h2>
<ul id="recentList"></ul>`,
      css: `#productButtons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}`,
      js: ``,
    },
    solution: {
      html: `<section id="productButtons"></section>
<h2>Recently viewed</h2>
<ul id="recentList"></ul>`,
      css: `#productButtons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}`,
      js: `const productButtons = document.getElementById("productButtons");
const recentList = document.getElementById("recentList");

const products = [
  { id: 1, name: "Keyboard" },
  { id: 2, name: "Monitor" },
  { id: 3, name: "Mouse" },
  { id: 4, name: "Laptop stand" },
];

function readRecent() {
  try {
    const raw = localStorage.getItem("recent-products");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

let recentlyViewed = readRecent();

function saveRecent() {
  localStorage.setItem("recent-products", JSON.stringify(recentlyViewed));
}

function renderProducts() {
  productButtons.innerHTML = products
    .map((product) => {
      return "<button data-id='" + product.id + "'>" + product.name + "</button>";
    })
    .join("");

  productButtons.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const product = products.find((item) => item.id === Number(button.dataset.id));
      recentlyViewed = [
        product,
        ...recentlyViewed.filter((item) => item.id !== product.id),
      ].slice(0, 3);
      saveRecent();
      renderRecent();
    });
  });
}

function renderRecent() {
  recentList.innerHTML = recentlyViewed
    .map((product) => "<li>" + product.name + "</li>")
    .join("");
}

renderProducts();
renderRecent();`,
    },
  },
  {
    id: "todo-completed-filter-localstorage",
    editorType: "web",
    title: "Challenge 66 — Saved Todo App with Filter",
    difficulty: "Hard",
    category: "JavaScript + localStorage",
    goal: "Build a simple todo app that saves todos, toggles completed state, and filters between all and active items.",
    requirements: [
      "Add a todo input, add button, filter buttons, and todo list",
      "Store todos as objects with text and completed values",
      "Toggle completed state when a todo button is clicked",
      "Filter between All and Active todos",
      "Save and load todos with localStorage",
    ],
    tips: [
      "Before coding, decide the shape of one todo object.",
      "This is more React-like because the UI is derived from an array of state objects.",
      "Render from the array every time state changes.",
    ],
    concepts: ["localStorage", "arrays of objects", "filter()", "state rendering"],
    suggestedApproach: [
      "Create todos and currentFilter variables.",
      "Write saveTodos and renderTodos functions.",
      "Add a new todo object when the Add button is clicked.",
      "Use event delegation to toggle completed state from the list.",
      "Filter the array before rendering when Active is selected.",
    ],
    commonMistakes: [
      "Saving only todo text instead of completed state",
      "Toggling the DOM class but not updating the array",
      "Filtering the data but rendering the unfiltered array",
    ],
    expectedOutcome:
      "A small persisted todo app that builds confidence with saved state before React.",
    starter: {
      html: `<input id="todoText" type="text" placeholder="Add todo..." />
<button id="addSavedTodoBtn" type="button">Add</button>
<button id="showAllTodosBtn" type="button">All</button>
<button id="showActiveTodosBtn" type="button">Active</button>
<ul id="savedTodoList"></ul>`,
      css: `.completed {
  text-decoration: line-through;
  opacity: 0.6;
}`,
      js: ``,
    },
    solution: {
      html: `<input id="todoText" type="text" placeholder="Add todo..." />
<button id="addSavedTodoBtn" type="button">Add</button>
<button id="showAllTodosBtn" type="button">All</button>
<button id="showActiveTodosBtn" type="button">Active</button>
<ul id="savedTodoList"></ul>`,
      css: `.completed {
  text-decoration: line-through;
  opacity: 0.6;
}`,
      js: `const todoText = document.getElementById("todoText");
const addSavedTodoBtn = document.getElementById("addSavedTodoBtn");
const showAllTodosBtn = document.getElementById("showAllTodosBtn");
const showActiveTodosBtn = document.getElementById("showActiveTodosBtn");
const savedTodoList = document.getElementById("savedTodoList");

function readTodos() {
  try {
    const raw = localStorage.getItem("filtered-todos");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

let todos = readTodos();
let currentFilter = "all";

function saveTodos() {
  localStorage.setItem("filtered-todos", JSON.stringify(todos));
}

function renderTodos() {
  const visibleTodos =
    currentFilter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos;

  savedTodoList.innerHTML = visibleTodos
    .map((todo) => {
      const className = todo.completed ? "completed" : "";
      return (
        "<li class='" + className + "'>" +
        "<button data-id='" + todo.id + "'>Toggle</button> " +
        todo.text +
        "</li>"
      );
    })
    .join("");
}

addSavedTodoBtn.addEventListener("click", () => {
  const text = todoText.value.trim();
  if (text === "") return;

  todos = [...todos, { id: Date.now(), text, completed: false }];
  todoText.value = "";
  saveTodos();
  renderTodos();
});

savedTodoList.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;

  const id = Number(event.target.dataset.id);
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos();
  renderTodos();
});

showAllTodosBtn.addEventListener("click", () => {
  currentFilter = "all";
  renderTodos();
});

showActiveTodosBtn.addEventListener("click", () => {
  currentFilter = "active";
  renderTodos();
});

renderTodos();`,
    },
  },
  {
    id: "mock-product-search",
    editorType: "web",
    title: "Challenge 67 — Mock Product Search",
    difficulty: "Medium",
    category: "JavaScript + Async",
    goal: "Search mock products asynchronously and render the matching results.",
    requirements: [
      "Use an async function",
      "Search products by text",
      "Show a loading message",
      "Render the matching results",
    ],
    tips: [
      "Use a fake request with Promise and setTimeout.",
      "Update the DOM before and after the request.",
      "Filter the products based on the input text.",
    ],
    concepts: ["promises", "async/await", "loading state", "filtering"],
    suggestedApproach: [
      "Create a small products array.",
      "Create a fake async search function.",
      "Show loading text while waiting.",
      "Render the filtered products after the Promise resolves.",
    ],
    commonMistakes: [
      "Trying to return data before awaiting it",
      "Not clearing old results",
      "Forgetting to show loading state",
    ],
    expectedOutcome:
      "A small product search interface that loads mock results asynchronously.",
    starter: {
      html: `<input id="searchInput" type="text" placeholder="Search products..." />
  <button id="searchBtn">Search</button>
  <p id="statusText"></p>
  <ul id="resultsList"></ul>`,
      css: ``,
      js: `const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const statusText = document.getElementById("statusText");
  const resultsList = document.getElementById("resultsList");

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Chair" },
    { id: 3, name: "Phone" },
    { id: 4, name: "Desk Lamp" },
  ];

  function searchProducts(term) {

  }

  searchBtn.addEventListener("click", async () => {

  });`,
    },
    solution: {
      html: `<input id="searchInput" type="text" placeholder="Search products..." />
  <button id="searchBtn">Search</button>
  <p id="statusText"></p>
  <ul id="resultsList"></ul>`,
      css: ``,
      js: `const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const statusText = document.getElementById("statusText");
  const resultsList = document.getElementById("resultsList");

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Chair" },
    { id: 3, name: "Phone" },
    { id: 4, name: "Desk Lamp" },
  ];

  function searchProducts(term) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((product) =>
          product.name.toLowerCase().includes(term.toLowerCase())
        );

        resolve(filteredProducts);
      }, 1000);
    });
  }

  searchBtn.addEventListener("click", async () => {
    statusText.textContent = "Loading...";
    resultsList.innerHTML = "";

    const results = await searchProducts(searchInput.value);

    statusText.textContent = "";

    if (results.length === 0) {
      statusText.textContent = "No products found.";
      return;
    }

    results.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = product.name;
      resultsList.appendChild(li);
    });
  });`,
    },
  },
  {
    id: "github-profile-finder",
    editorType: "web",
    title: "Challenge 68 — GitHub User Finder",
    difficulty: "Hard",
    category: "APIs",
    goal: "Use fetch(), loading state, and search logic to find a GitHub-style user profile by username.",
    requirements: [
      "Create a search input and button",
      "Use fetch() and response.json()",
      "Show a loading state while the request runs",
      "Search the returned profiles by username",
      "Render the matching profile or a no-results message",
    ],
    tips: [
      "This is a familiar app format for junior portfolios and take-home tests.",
      "Fetch the data first, then search inside the returned array.",
      "Keep the profile UI small but informative.",
    ],
    concepts: [
      "fetch()",
      "async/await",
      "loading state",
      "filtering",
      "DOM rendering",
    ],
    suggestedApproach: [
      "Create a small profiles data URL.",
      "Handle the search click with an async function.",
      "Set loading text before the request starts.",
      "Find the matching profile and render it, or show a no-results message.",
    ],
    commonMistakes: [
      "Searching before the async request finishes",
      "Ignoring empty or missing matches",
      "Updating the status text but forgetting to update the profile card",
    ],
    expectedOutcome:
      "A GitHub-style finder that shows juniors how fetch, search, and result rendering connect in one mini app.",
    starter: {
      html: `<input id="profileSearch" placeholder="Search username" />
<button id="profileBtn">Find profile</button>
<p id="profileStatus"></p>
<section id="profileResult"></section>`,
      css: `#profileResult {
  margin-top: 16px;
}`,
      js: ``,
    },
    solution: {
      html: `<input id="profileSearch" placeholder="Search username" />
<button id="profileBtn">Find profile</button>
<p id="profileStatus"></p>
<section id="profileResult"></section>`,
      css: `#profileResult {
  margin-top: 16px;
}

.profile-result-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}`,
      js: `const profileSearch = document.getElementById("profileSearch");
const profileBtn = document.getElementById("profileBtn");
const profileStatus = document.getElementById("profileStatus");
const profileResult = document.getElementById("profileResult");

const profiles = [
  { username: "codeava", name: "Ava", followers: 340, bio: "Frontend learner building UI every day." },
  { username: "reactnoah", name: "Noah", followers: 512, bio: "React, accessibility, and product thinking." },
  { username: "lunalogs", name: "Luna", followers: 214, bio: "Learning async JavaScript and APIs." },
];

const apiUrl =
  "data:application/json," + encodeURIComponent(JSON.stringify(profiles));

profileBtn.addEventListener("click", async () => {
  const query = profileSearch.value.trim().toLowerCase();

  profileStatus.textContent = "Loading profile...";
  profileResult.innerHTML = "";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const profile = data.find((item) =>
      item.username.toLowerCase().includes(query)
    );

    if (!profile) {
      profileStatus.textContent = "No profile found.";
      return;
    }

    profileStatus.textContent = "Profile loaded.";
    profileResult.innerHTML = \`
      <article class="profile-result-card">
        <h3>\${profile.name}</h3>
        <p>@\${profile.username}</p>
        <p>\${profile.bio}</p>
        <strong>\${profile.followers} followers</strong>
      </article>
    \`;
  } catch (error) {
    profileStatus.textContent = "Something went wrong while loading profiles.";
  }
});`,
    },
  },
  {
    id: "weather-search-panel",
    editorType: "web",
    title: "Challenge 69 — Weather Search Panel",
    difficulty: "Hard",
    category: "APIs",
    goal: "Build a weather-style search panel with fetch(), loading state, and a visible result card.",
    requirements: [
      "Create a city input and a search button",
      "Use fetch() and await response.json()",
      "Show a loading message",
      "Render the matching city weather data",
      "Show an error or empty message when nothing matches",
    ],
    tips: [
      "Weather apps are a great way to explain async work: request starts, loading shows, result arrives.",
      "Fetch a small array of city data, then search it.",
      "Keep the final card focused on a few useful fields.",
    ],
    concepts: [
      "fetch()",
      "async/await",
      "loading state",
      "error state",
      "data rendering",
    ],
    suggestedApproach: [
      "Create a weather data URL in JavaScript.",
      "Start the request inside an async click handler.",
      "Show loading text before awaiting the response.",
      "Find the city and render a small weather card or a no-results message.",
    ],
    commonMistakes: [
      "Never clearing the old weather result before loading again",
      "Searching the wrong field or comparing with the wrong case",
      "Leaving the UI stuck on Loading after the request finishes",
    ],
    expectedOutcome:
      "A weather-style mini app that teaches one of the most common async UI patterns in a friendly way.",
    starter: {
      html: `<input id="weatherInput" placeholder="Search city" />
<button id="weatherBtn">Check weather</button>
<p id="weatherStatus"></p>
<section id="weatherCard"></section>`,
      css: `#weatherCard {
  margin-top: 16px;
}`,
      js: ``,
    },
    solution: {
      html: `<input id="weatherInput" placeholder="Search city" />
<button id="weatherBtn">Check weather</button>
<p id="weatherStatus"></p>
<section id="weatherCard"></section>`,
      css: `#weatherCard {
  margin-top: 16px;
}

.weather-card {
  padding: 16px;
  border-radius: 16px;
  background: #ecfeff;
  border: 1px solid #a5f3fc;
}`,
      js: `const weatherInput = document.getElementById("weatherInput");
const weatherBtn = document.getElementById("weatherBtn");
const weatherStatus = document.getElementById("weatherStatus");
const weatherCard = document.getElementById("weatherCard");

const forecastData = [
  { city: "London", temperature: "16C", condition: "Cloudy" },
  { city: "Madrid", temperature: "24C", condition: "Sunny" },
  { city: "Paris", temperature: "18C", condition: "Light rain" },
];

const weatherUrl =
  "data:application/json," + encodeURIComponent(JSON.stringify(forecastData));

weatherBtn.addEventListener("click", async () => {
  const query = weatherInput.value.trim().toLowerCase();

  weatherStatus.textContent = "Loading weather...";
  weatherCard.innerHTML = "";

  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();
    const forecast = data.find((item) =>
      item.city.toLowerCase().includes(query)
    );

    if (!forecast) {
      weatherStatus.textContent = "No weather data found for that city.";
      return;
    }

    weatherStatus.textContent = "Forecast loaded.";
    weatherCard.innerHTML = \`
      <article class="weather-card">
        <h3>\${forecast.city}</h3>
        <p>Temperature: \${forecast.temperature}</p>
        <p>Condition: \${forecast.condition}</p>
      </article>
    \`;
  } catch (error) {
    weatherStatus.textContent = "Something went wrong while loading weather data.";
  }
});`,
    },
  },
  {
    id: "recipe-search-app",
    editorType: "web",
    title: "Challenge 70 — Recipe Search App",
    difficulty: "Hard",
    category: "APIs",
    goal: "Use fetch(), search, and map-style rendering to build a small recipe search app.",
    requirements: [
      "Create a search input and button",
      "Use fetch() and response.json()",
      "Show a loading state",
      "Search recipe data by title or ingredient",
      "Render the matching recipe cards",
      "Show a no-results message when needed",
    ],
    tips: [
      "This is a strong junior portfolio pattern because it mixes async work with visible UI.",
      "You can search recipes by title and by ingredient.",
      "Render the results from JavaScript data, not hardcoded cards.",
    ],
    concepts: [
      "fetch()",
      "async/await",
      "filter()",
      "map()",
      "empty states",
    ],
    suggestedApproach: [
      "Create a recipes data URL.",
      "Start with loading text and clear the old results.",
      "Fetch and parse the data, then filter it using the typed query.",
      "Render cards for the matching recipes or a no-results message.",
    ],
    commonMistakes: [
      "Filtering only the title when the ingredient should also count",
      "Rendering stale results from the last search",
      "Forgetting to show the empty state when nothing matches",
    ],
    expectedOutcome:
      "A recipe search mini app that feels like a real frontend exercise instead of a one-line demo.",
    starter: {
      html: `<input id="recipeSearch" placeholder="Search recipes" />
<button id="recipeBtn">Search recipes</button>
<p id="recipeStatus"></p>
<section id="recipeResults"></section>`,
      css: `#recipeResults {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}`,
      js: ``,
    },
    solution: {
      html: `<input id="recipeSearch" placeholder="Search recipes" />
<button id="recipeBtn">Search recipes</button>
<p id="recipeStatus"></p>
<section id="recipeResults"></section>`,
      css: `#recipeResults {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

.recipe-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}`,
      js: `const recipeSearch = document.getElementById("recipeSearch");
const recipeBtn = document.getElementById("recipeBtn");
const recipeStatus = document.getElementById("recipeStatus");
const recipeResults = document.getElementById("recipeResults");

const recipes = [
  { id: 1, title: "Tomato Pasta", ingredient: "tomato", time: "20 min" },
  { id: 2, title: "Chicken Wrap", ingredient: "chicken", time: "15 min" },
  { id: 3, title: "Mango Smoothie", ingredient: "mango", time: "10 min" },
];

const recipeUrl =
  "data:application/json," + encodeURIComponent(JSON.stringify(recipes));

recipeBtn.addEventListener("click", async () => {
  const query = recipeSearch.value.trim().toLowerCase();

  recipeStatus.textContent = "Loading recipes...";
  recipeResults.innerHTML = "";

  try {
    const response = await fetch(recipeUrl);
    const data = await response.json();
    const matches = data.filter((recipe) => {
      return (
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredient.toLowerCase().includes(query)
      );
    });

    if (matches.length === 0) {
      recipeStatus.textContent = "No recipes found.";
      return;
    }

    recipeStatus.textContent = "Recipes ready.";
    recipeResults.innerHTML = matches
      .map(
        (recipe) => \`
          <article class="recipe-card">
            <h3>\${recipe.title}</h3>
            <p>Main ingredient: \${recipe.ingredient}</p>
            <p>Time: \${recipe.time}</p>
          </article>
        \`
      )
      .join("");
  } catch (error) {
    recipeStatus.textContent = "Something went wrong while loading recipes.";
  }
});`,
    },
  },
  {
    id: "promise-all-user-posts",
    editorType: "web",
    title: "Challenge 71 — Load User and Posts with Promise.all",
    difficulty: "Hard",
    category: "JavaScript + Async",
    goal: "Load mock user and post data at the same time using Promise.all and render both results.",
    requirements: [
      "Create 2 fake async functions",
      "Use Promise.all to wait for both results",
      "Show a loading message first",
      "Render the user and posts after both requests finish",
    ],
    tips: [
      "Use Promise.all([promise1, promise2]).",
      "Both fake functions can use setTimeout.",
      "Only render the results after both promises resolve.",
    ],
    concepts: [
      "Promise.all",
      "async/await",
      "parallel requests",
      "DOM rendering",
    ],
    suggestedApproach: [
      "Create one fake function for the user and another for the posts.",
      "Set loading text before starting.",
      "Await both functions with Promise.all.",
      "Render the user name and the post titles.",
    ],
    commonMistakes: [
      "Awaiting each request separately instead of using Promise.all",
      "Trying to use the results before both promises finish",
      "Forgetting to clear old content before rendering new data",
    ],
    expectedOutcome:
      "A small UI that first shows loading text and then displays one user and a list of post titles.",
    starter: {
      html: `<button id="loadBtn">Load Dashboard</button>
  <p id="statusText"></p>
  <div id="userBox"></div>
  <ul id="postList"></ul>`,
      css: ``,
      js: `const loadBtn = document.getElementById("loadBtn");
  const statusText = document.getElementById("statusText");
  const userBox = document.getElementById("userBox");
  const postList = document.getElementById("postList");

  function fetchUser() {

  }

  function fetchPosts() {

  }

  loadBtn.addEventListener("click", async () => {

  });`,
    },
    solution: {
      html: `<button id="loadBtn">Load Dashboard</button>
  <p id="statusText"></p>
  <div id="userBox"></div>
  <ul id="postList"></ul>`,
      css: ``,
      js: `const loadBtn = document.getElementById("loadBtn");
  const statusText = document.getElementById("statusText");
  const userBox = document.getElementById("userBox");
  const postList = document.getElementById("postList");

  function fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: "Nico" });
      }, 1000);
    });
  }

  function fetchPosts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Getting started with React" },
          { id: 2, title: "Understanding async JavaScript" },
        ]);
      }, 1000);
    });
  }

  loadBtn.addEventListener("click", async () => {
    statusText.textContent = "Loading...";
    userBox.textContent = "";
    postList.innerHTML = "";

    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);

    statusText.textContent = "";
    userBox.textContent = "User: " + user.name;

    posts.forEach((post) => {
      const li = document.createElement("li");
      li.textContent = post.title;
      postList.appendChild(li);
    });
  });`,
    },
  },
  {
    id: "fetch-posts-loading-error-list",
    editorType: "web",
    title: "Challenge 72 — Fetch Posts with Loading and Error UI",
    difficulty: "Hard",
    category: "JavaScript + Fetch",
    goal: "Fetch posts from an API endpoint and render loading, success, and error states clearly.",
    requirements: [
      "Add a Load posts button, status text, and posts list",
      "Use fetch() inside an async function",
      "Show a loading message before awaiting the response",
      "Check response.ok and throw an error if the request fails",
      "Render at least 5 posts when the request succeeds",
      "Show a helpful error message in catch",
    ],
    tips: [
      "Before coding, say the request lifecycle out loud: idle, loading, success, error.",
      "This is a real API version of the mock loading exercises.",
      "Use slice() if the API returns more posts than you want to display.",
    ],
    concepts: ["fetch()", "async/await", "loading state", "error handling"],
    suggestedApproach: [
      "Create the button, status paragraph, and list.",
      "Write an async loadPosts function.",
      "Set loading UI before fetch.",
      "Check response.ok, parse JSON, and render the list.",
      "Use catch to show a readable error.",
    ],
    commonMistakes: [
      "Trying to render before await finishes",
      "Never checking response.ok",
      "Leaving stale results on screen when loading starts",
    ],
    expectedOutcome:
      "A small API-driven list with a clear request lifecycle.",
    starter: {
      html: `<button id="loadPostsBtn" type="button">Load posts</button>
<p id="postsStatus">Ready to load.</p>
<ul id="postsList"></ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button id="loadPostsBtn" type="button">Load posts</button>
<p id="postsStatus">Ready to load.</p>
<ul id="postsList"></ul>`,
      css: ``,
      js: `const loadPostsBtn = document.getElementById("loadPostsBtn");
const postsStatus = document.getElementById("postsStatus");
const postsList = document.getElementById("postsList");

async function loadPosts() {
  postsStatus.textContent = "Loading posts...";
  postsList.innerHTML = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Could not load posts.");
    }

    const posts = await response.json();
    const visiblePosts = posts.slice(0, 5);

    postsStatus.textContent = "Loaded " + visiblePosts.length + " posts.";
    postsList.innerHTML = visiblePosts
      .map((post) => "<li>" + post.title + "</li>")
      .join("");
  } catch (error) {
    postsStatus.textContent = "Error: " + error.message;
  }
}

loadPostsBtn.addEventListener("click", loadPosts);`,
    },
  },
  {
    id: "fetch-users-filter-after-load",
    editorType: "web",
    title: "Challenge 73 — Fetch Users Then Filter Locally",
    difficulty: "Hard",
    category: "JavaScript + Fetch",
    goal: "Fetch users once, store them in a variable, and filter the loaded data with a search input.",
    requirements: [
      "Add a Load users button, search input, status text, and output area",
      "Use fetch() and async/await to load users",
      "Store the loaded users in a JavaScript array variable",
      "Render users after loading",
      "Filter the loaded users when the search input changes",
      "Show an empty state when no loaded users match",
    ],
    tips: [
      "Before coding, decide which data comes from the API and which data comes from the input.",
      "This is important before React because loaded data and filter text are separate pieces of state.",
      "Do not fetch again on every keystroke; filter the array you already loaded.",
    ],
    concepts: ["fetch()", "async/await", "state variables", "filter()", "search"],
    suggestedApproach: [
      "Create a loadedUsers variable that starts as an empty array.",
      "Fetch users when the button is clicked.",
      "Render from loadedUsers inside one renderUsers function.",
      "Read the search input inside that render function and filter locally.",
    ],
    commonMistakes: [
      "Running fetch on every input event",
      "Filtering before the users have been loaded",
      "Updating the data variable but not re-rendering",
    ],
    expectedOutcome:
      "A fetch-and-filter UI that separates remote data from local search state.",
    starter: {
      html: `<button id="loadUsersBtn" type="button">Load users</button>
<input id="userSearchInput" type="text" placeholder="Search loaded users..." />
<p id="usersStatus">No users loaded yet.</p>
<section id="usersOutput"></section>`,
      css: `#usersOutput {
  display: grid;
  gap: 10px;
}`,
      js: ``,
    },
    solution: {
      html: `<button id="loadUsersBtn" type="button">Load users</button>
<input id="userSearchInput" type="text" placeholder="Search loaded users..." />
<p id="usersStatus">No users loaded yet.</p>
<section id="usersOutput"></section>`,
      css: `#usersOutput {
  display: grid;
  gap: 10px;
}

.user-row {
  padding: 10px;
  border: 1px solid #dbe3ef;
  border-radius: 8px;
}`,
      js: `const loadUsersBtn = document.getElementById("loadUsersBtn");
const userSearchInput = document.getElementById("userSearchInput");
const usersStatus = document.getElementById("usersStatus");
const usersOutput = document.getElementById("usersOutput");

let loadedUsers = [];

function renderUsers() {
  const query = userSearchInput.value.toLowerCase();
  const visibleUsers = loadedUsers.filter((user) =>
    user.name.toLowerCase().includes(query)
  );

  if (loadedUsers.length === 0) {
    usersStatus.textContent = "No users loaded yet.";
    usersOutput.innerHTML = "";
    return;
  }

  usersStatus.textContent =
    "Showing " + visibleUsers.length + " of " + loadedUsers.length + " users.";

  usersOutput.innerHTML =
    visibleUsers.length === 0
      ? "<p>No loaded users match that search.</p>"
      : visibleUsers
          .map((user) => {
            return (
              "<article class='user-row'>" +
              "<strong>" + user.name + "</strong>" +
              "<p>" + user.email + "</p>" +
              "</article>"
            );
          })
          .join("");
}

loadUsersBtn.addEventListener("click", async () => {
  usersStatus.textContent = "Loading users...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Could not load users.");
    }

    loadedUsers = await response.json();
    renderUsers();
  } catch (error) {
    usersStatus.textContent = "Error: " + error.message;
  }
});

userSearchInput.addEventListener("input", renderUsers);`,
    },
  },
  {
    id: "shopping-cart-total",
    editorType: "web",
    title: "Challenge 74 — Shopping Cart Total",
    difficulty: "Medium",
    category: "JavaScript + Arrays",
    goal: "Calculate and display the total price of cart items.",
    requirements: [
      "Use an array of cart items with prices",
      "Display the items",
      "Calculate and show the total price",
    ],
    tips: [
      "Use reduce() if you want a modern approach.",
      "You can also use a loop if you prefer.",
      "Render both the items and the final total.",
    ],
    concepts: ["arrays of objects", "reduce()", "rendering lists", "totals"],
    suggestedApproach: [
      "Create a cart array with item names and prices.",
      "Render the items into a list.",
      "Calculate the total of all prices.",
      "Display the total below the list.",
    ],
    commonMistakes: [
      "Adding strings instead of numbers",
      "Calculating the total but never showing it",
      "Using the wrong property name for price",
    ],
    expectedOutcome:
      "A small cart summary showing the items and the total price of everything combined.",
    starter: {
      html: `<ul id="cartList"></ul>
<p id="cartTotal"></p>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<ul id="cartList"></ul>
<p id="cartTotal"></p>`,
      css: ``,
      js: `const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");

const cartItems = [
  { name: "T-shirt", price: 15 },
  { name: "Jeans", price: 35 },
  { name: "Shoes", price: 50 },
];

cartItems.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item.name + " - £" + item.price;
  cartList.appendChild(li);
});

const total = cartItems.reduce((sum, item) => {
  return sum + item.price;
}, 0);

cartTotal.textContent = "Total: £" + total;`,
    },
  },
  {
    id: "filter-sort-products",
    editorType: "web",
    title: "Challenge 75 — Filter and Sort Products",
    difficulty: "Hard",
    category: "JavaScript + Arrays",
    goal: "Filter products by category and sort the visible products by price.",
    requirements: [
      "Use an array of product objects",
      "Add category filter buttons",
      "Add a sort by price button",
      "Render the updated product list",
    ],
    tips: [
      "Keep the original product data in JavaScript.",
      "Use filter() for category changes.",
      "Use sort() on a copied array when sorting.",
    ],
    concepts: ["filter()", "sort()", "arrays of objects", "DOM rendering"],
    suggestedApproach: [
      "Create an array of products with category and price.",
      "Write a render function for the list.",
      "Filter the products when category buttons are clicked.",
      "Sort the currently visible products by price when the sort button is pressed.",
    ],
    commonMistakes: [
      "Sorting the wrong array",
      "Filtering correctly but rendering the old list",
      "Mutating data without understanding the effect",
    ],
    expectedOutcome:
      "A product list that can be filtered by category and sorted by price.",
    starter: {
      html: `<button id="allBtn">All</button>
  <button id="techBtn">Tech</button>
  <button id="homeBtn">Home</button>
  <button id="sortBtn">Sort by Price</button>
  <ul id="productList"></ul>`,
      css: ``,
      js: `const allBtn = document.getElementById("allBtn");
  const techBtn = document.getElementById("techBtn");
  const homeBtn = document.getElementById("homeBtn");
  const sortBtn = document.getElementById("sortBtn");
  const productList = document.getElementById("productList");

  const products = [
    { id: 1, name: "Laptop", category: "Tech", price: 899 },
    { id: 2, name: "Chair", category: "Home", price: 120 },
    { id: 3, name: "Phone", category: "Tech", price: 699 },
    { id: 4, name: "Lamp", category: "Home", price: 35 },
  ];

  let visibleProducts = products;

  function renderProducts(items) {

  }

  allBtn.addEventListener("click", () => {

  });

  techBtn.addEventListener("click", () => {

  });

  homeBtn.addEventListener("click", () => {

  });

  sortBtn.addEventListener("click", () => {

  });

  renderProducts(visibleProducts);`,
    },
    solution: {
      html: `<button id="allBtn">All</button>
  <button id="techBtn">Tech</button>
  <button id="homeBtn">Home</button>
  <button id="sortBtn">Sort by Price</button>
  <ul id="productList"></ul>`,
      css: ``,
      js: `const allBtn = document.getElementById("allBtn");
  const techBtn = document.getElementById("techBtn");
  const homeBtn = document.getElementById("homeBtn");
  const sortBtn = document.getElementById("sortBtn");
  const productList = document.getElementById("productList");

  const products = [
    { id: 1, name: "Laptop", category: "Tech", price: 899 },
    { id: 2, name: "Chair", category: "Home", price: 120 },
    { id: 3, name: "Phone", category: "Tech", price: 699 },
    { id: 4, name: "Lamp", category: "Home", price: 35 },
  ];

  let visibleProducts = products;

  function renderProducts(items) {
    productList.innerHTML = "";

    items.forEach((product) => {
      const li = document.createElement("li");
      li.textContent =
        product.name + " - " + product.category + " - £" + product.price;
      productList.appendChild(li);
    });
  }

  allBtn.addEventListener("click", () => {
    visibleProducts = products;
    renderProducts(visibleProducts);
  });

  techBtn.addEventListener("click", () => {
    visibleProducts = products.filter((product) => product.category === "Tech");
    renderProducts(visibleProducts);
  });

  homeBtn.addEventListener("click", () => {
    visibleProducts = products.filter((product) => product.category === "Home");
    renderProducts(visibleProducts);
  });

  sortBtn.addEventListener("click", () => {
    visibleProducts = [...visibleProducts].sort((a, b) => a.price - b.price);
    renderProducts(visibleProducts);
  });

  renderProducts(visibleProducts);`,
    },
  },
  {
    id: "map-product-cards",
    editorType: "web",
    title: "Challenge 77 — Map Product Cards",
    difficulty: "Medium",
    category: "JavaScript + Arrays",
    goal: "Use map() to transform product data into a grid of cards.",
    requirements: [
      "Create an array of product objects",
      "Use map() to create card markup",
      "Render all cards into a container",
      "Show at least name, category, and price",
      "Use CSS to make the cards readable",
    ],
    tips: [
      "Before coding, decide what one product object should look like.",
      "map() is for turning every item into something new.",
      "This is the data-to-UI pattern React will use constantly.",
    ],
    concepts: ["map()", "arrays of objects", "DOM rendering", "card UI"],
    suggestedApproach: [
      "Create the product data.",
      "Select the grid container.",
      "Use map() to return one card string per product.",
      "Join the strings and assign them to innerHTML.",
    ],
    commonMistakes: [
      "Using forEach() when the challenge asks for map()",
      "Forgetting to join the mapped strings",
      "Rendering object values with the wrong property names",
    ],
    expectedOutcome:
      "A product card grid rendered entirely from array data.",
    starter: {
      html: `<section id="productGrid"></section>`,
      css: `#productGrid {
  display: grid;
  gap: 12px;
}`,
      js: ``,
    },
    solution: {
      html: `<section id="productGrid"></section>`,
      css: `#productGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}

.product-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 8px;
}`,
      js: `const productGrid = document.getElementById("productGrid");

const products = [
  { name: "Keyboard", category: "Tech", price: 40 },
  { name: "Lamp", category: "Home", price: 28 },
  { name: "Notebook", category: "Study", price: 12 },
];

productGrid.innerHTML = products
  .map((product) => {
    return (
      "<article class='product-card'>" +
      "<h2>" + product.name + "</h2>" +
      "<p>" + product.category + "</p>" +
      "<strong>$" + product.price + "</strong>" +
      "</article>"
    );
  })
  .join("");`,
    },
  },
  {
    id: "filter-available-sessions",
    editorType: "web",
    title: "Challenge 78 — Filter Available Sessions",
    difficulty: "Medium",
    category: "JavaScript + Arrays",
    goal: "Use filter() to show only sessions that are currently available.",
    requirements: [
      "Create an array of session objects",
      "Each session should include an available boolean",
      "Add buttons to show all sessions and available sessions",
      "Use filter() for the available view",
      "Render the selected list after each button click",
    ],
    tips: [
      "Before coding, decide which button changes the visible list and which data never changes.",
      "filter() returns a smaller array, not just one item.",
      "Keep the render function separate from the filter decision.",
    ],
    concepts: ["filter()", "arrays of objects", "boolean values", "render functions"],
    suggestedApproach: [
      "Create the sessions data.",
      "Write a renderSessions function that accepts an array.",
      "Render all sessions by default.",
      "Use filter() in the Available button click handler.",
    ],
    commonMistakes: [
      "Filtering correctly but rendering the original array",
      "Mutating the source data when you only need a filtered copy",
      "Checking a string instead of the boolean property",
    ],
    expectedOutcome:
      "A session list that proves the learner understands filter() as a smaller-list tool.",
    starter: {
      html: `<button id="allSessionsBtn" type="button">All sessions</button>
<button id="availableSessionsBtn" type="button">Available only</button>
<ul id="sessionList"></ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button id="allSessionsBtn" type="button">All sessions</button>
<button id="availableSessionsBtn" type="button">Available only</button>
<ul id="sessionList"></ul>`,
      css: ``,
      js: `const allSessionsBtn = document.getElementById("allSessionsBtn");
const availableSessionsBtn = document.getElementById("availableSessionsBtn");
const sessionList = document.getElementById("sessionList");

const sessions = [
  { title: "DOM events", available: true },
  { title: "React state", available: false },
  { title: "CSS Grid", available: true },
  { title: "API practice", available: false },
];

function renderSessions(items) {
  sessionList.innerHTML = items
    .map((session) => {
      const status = session.available ? "Available" : "Full";
      return "<li>" + session.title + " - " + status + "</li>";
    })
    .join("");
}

allSessionsBtn.addEventListener("click", () => {
  renderSessions(sessions);
});

availableSessionsBtn.addEventListener("click", () => {
  const availableSessions = sessions.filter((session) => session.available);
  renderSessions(availableSessions);
});

renderSessions(sessions);`,
    },
  },
  {
    id: "find-selected-mentor",
    editorType: "web",
    title: "Challenge 79 — Find the Selected Mentor",
    difficulty: "Medium",
    category: "JavaScript + Arrays",
    goal: "Use find() to display one selected mentor from an array of objects.",
    requirements: [
      "Create an array of mentor objects with ids",
      "Add a select input with matching ids",
      "Use find() to get the selected mentor",
      "Render one mentor card",
      "Show fallback text if no mentor matches",
    ],
    tips: [
      "Before coding, decide why find() is better than filter() here.",
      "Select values are strings, so compare carefully with numeric ids.",
      "The UI should render one card, not a list.",
    ],
    concepts: ["find()", "arrays of objects", "select inputs", "fallback UI"],
    suggestedApproach: [
      "Create the mentor data.",
      "Read the current select value.",
      "Use find() to locate the matching mentor.",
      "Render the mentor or fallback message.",
    ],
    commonMistakes: [
      "Using filter() and then forgetting it returns an array",
      "Comparing string and number ids without conversion",
      "Finding the mentor but not rendering the result",
    ],
    expectedOutcome:
      "A lookup panel that makes find() feel different from filter().",
    starter: {
      html: `<select id="mentorSelect">
  <option value="1">Maya</option>
  <option value="2">Leo</option>
  <option value="3">Sara</option>
</select>
<article id="mentorCard"></article>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<select id="mentorSelect">
  <option value="1">Maya</option>
  <option value="2">Leo</option>
  <option value="3">Sara</option>
</select>
<article id="mentorCard"></article>`,
      css: `#mentorCard {
  margin-top: 14px;
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 8px;
}`,
      js: `const mentorSelect = document.getElementById("mentorSelect");
const mentorCard = document.getElementById("mentorCard");

const mentors = [
  { id: 1, name: "Maya", specialty: "CSS layout" },
  { id: 2, name: "Leo", specialty: "JavaScript events" },
  { id: 3, name: "Sara", specialty: "React components" },
];

function renderMentor() {
  const selectedId = Number(mentorSelect.value);
  const mentor = mentors.find((item) => item.id === selectedId);

  if (!mentor) {
    mentorCard.textContent = "No mentor found.";
    return;
  }

  mentorCard.innerHTML =
    "<h2>" + mentor.name + "</h2>" +
    "<p>" + mentor.specialty + "</p>";
}

mentorSelect.addEventListener("change", renderMentor);

renderMentor();`,
    },
  },
  {
    id: "some-stock-warning",
    editorType: "web",
    title: "Challenge 80 — Check Stock Warnings with some()",
    difficulty: "Medium",
    category: "JavaScript + Arrays",
    goal: "Use some() to check whether any product is low on stock and show a warning.",
    requirements: [
      "Create an array of product objects with stock numbers",
      "Use some() to check for low stock",
      "Show a warning if any item has stock below 5",
      "Render the product list",
      "Use a different message when stock levels are healthy",
    ],
    tips: [
      "Before coding, decide the yes/no question some() should answer.",
      "some() is for checking whether at least one item passes a test.",
      "This is useful for warnings, badges, and validation checks.",
    ],
    concepts: ["some()", "arrays of objects", "conditional rendering", "warnings"],
    suggestedApproach: [
      "Create product data with stock values.",
      "Use some() to calculate whether low stock exists.",
      "Render the warning message from that boolean.",
      "Render the list so the user can see why the warning appears.",
    ],
    commonMistakes: [
      "Using filter() when a yes/no answer is enough",
      "Checking only the first product",
      "Rendering the list but not the warning state",
    ],
    expectedOutcome:
      "A stock panel that demonstrates some() as an any-match check.",
    starter: {
      html: `<p id="stockWarning"></p>
<ul id="stockList"></ul>`,
      css: `.warning {
  color: #b45309;
  font-weight: 700;
}`,
      js: ``,
    },
    solution: {
      html: `<p id="stockWarning"></p>
<ul id="stockList"></ul>`,
      css: `.warning {
  color: #b45309;
  font-weight: 700;
}`,
      js: `const stockWarning = document.getElementById("stockWarning");
const stockList = document.getElementById("stockList");

const products = [
  { name: "Keyboard", stock: 12 },
  { name: "Mouse", stock: 3 },
  { name: "Monitor", stock: 7 },
];

const hasLowStock = products.some((product) => product.stock < 5);

stockWarning.textContent = hasLowStock
  ? "Some products are low on stock."
  : "All stock levels look healthy.";
stockWarning.classList.toggle("warning", hasLowStock);

stockList.innerHTML = products
  .map((product) => {
    return "<li>" + product.name + " - " + product.stock + " left</li>";
  })
  .join("");`,
    },
  },
  {
    id: "sort-students-by-score",
    editorType: "web",
    title: "Challenge 81 — Sort Students by Score",
    difficulty: "Medium",
    category: "JavaScript + Arrays",
    goal: "Use sort() on a copied array to rank students by score without mutating the original data directly.",
    requirements: [
      "Create an array of student objects with scores",
      "Render the original order first",
      "Add a Sort by score button",
      "Use sort() on a copied array",
      "Render highest scores first after sorting",
    ],
    tips: [
      "Before coding, decide whether you want to mutate the original array.",
      "A copied array with spread keeps the original data safer.",
      "sort() needs a compare function for numbers.",
    ],
    concepts: ["sort()", "spread operator", "arrays of objects", "numeric sorting"],
    suggestedApproach: [
      "Create the student data.",
      "Write a renderStudents function.",
      "Render the original array on load.",
      "In the button handler, create a sorted copy and render it.",
    ],
    commonMistakes: [
      "Sorting numbers like strings",
      "Forgetting to re-render after sorting",
      "Mutating the original array without realizing it",
    ],
    expectedOutcome:
      "A ranked student list that practices safe numeric sorting.",
    starter: {
      html: `<button id="sortStudentsBtn" type="button">Sort by score</button>
<ol id="studentList"></ol>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button id="sortStudentsBtn" type="button">Sort by score</button>
<ol id="studentList"></ol>`,
      css: ``,
      js: `const sortStudentsBtn = document.getElementById("sortStudentsBtn");
const studentList = document.getElementById("studentList");

const students = [
  { name: "Maya", score: 86 },
  { name: "Leo", score: 92 },
  { name: "Sara", score: 78 },
  { name: "Nico", score: 95 },
];

function renderStudents(items) {
  studentList.innerHTML = items
    .map((student) => {
      return "<li>" + student.name + " - " + student.score + "</li>";
    })
    .join("");
}

sortStudentsBtn.addEventListener("click", () => {
  const sortedStudents = [...students].sort((a, b) => b.score - a.score);
  renderStudents(sortedStudents);
});

renderStudents(students);`,
    },
  },
  {
    id: "render-users-from-array",
    editorType: "web",
    title: "Challenge 82 — Render Users from an Array",
    difficulty: "Medium",
    category: "JavaScript + Data Rendering",
    goal: "Render a list of user cards from an array of objects.",
    requirements: [
      "Create an array of user objects",
      "Each user should have a name, role, and status",
      "Render one card per user",
      "Show different status text for active and inactive users",
    ],
    tips: [
      "Start with a users array in JavaScript.",
      "Use forEach() to create DOM elements.",
      "Template strings make card markup easier to read.",
    ],
    concepts: [
      "arrays of objects",
      "DOM rendering",
      "template strings",
      "conditional display",
    ],
    suggestedApproach: [
      "Create a users array.",
      "Select a container element.",
      "Loop over users and build card HTML.",
      "Render the final HTML into the container.",
    ],
    commonMistakes: [
      "Rendering only the first user",
      "Forgetting to clear or set the container content",
      "Mixing up object property names",
    ],
    expectedOutcome:
      "A user list rendered from data instead of hard-coded HTML.",
    starter: {
      html: `<section id="userList"></section>`,
      css: `#userList {
  display: grid;
  gap: 12px;
}`,
      js: `const userList = document.getElementById("userList");

const users = [
  { name: "Nico", role: "Frontend Developer", active: true },
  { name: "Sara", role: "Product Designer", active: false },
  { name: "Alex", role: "QA Engineer", active: true },
];`,
    },
    solution: {
      html: `<section id="userList"></section>`,
      css: `#userList {
  display: grid;
  gap: 12px;
}

.user-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
  background: white;
}`,
      js: `const userList = document.getElementById("userList");

const users = [
  { name: "Nico", role: "Frontend Developer", active: true },
  { name: "Sara", role: "Product Designer", active: false },
  { name: "Alex", role: "QA Engineer", active: true },
];

userList.innerHTML = users
  .map((user) => {
    const status = user.active ? "Active" : "Inactive";

    return \`
      <article class="user-card">
        <h3>\${user.name}</h3>
        <p>\${user.role}</p>
        <strong>\${status}</strong>
      </article>
    \`;
  })
  .join("");`,
    },
  },
  {
    id: "event-delegation-todo-actions",
    editorType: "web",
    title: "Challenge 83 — Todo Actions with Event Delegation",
    difficulty: "Hard",
    category: "JavaScript + DOM",
    goal: "Use event delegation to complete and remove todo items.",
    requirements: [
      "Render a list of todos",
      "Add Complete and Remove buttons to each todo",
      "Use one click listener on the list",
      "Complete should toggle a completed class",
      "Remove should delete the item",
    ],
    tips: [
      "Event delegation means listening on the parent.",
      "Use event.target to find which button was clicked.",
      "data-action attributes can describe the intended action.",
    ],
    concepts: [
      "event delegation",
      "data attributes",
      "classList.toggle",
      "remove()",
    ],
    suggestedApproach: [
      "Create todo list markup with buttons.",
      "Add one click listener to the ul.",
      "Check the clicked button's data-action.",
      "Find the closest li and update or remove it.",
    ],
    commonMistakes: [
      "Adding separate listeners to every button",
      "Removing the button instead of the list item",
      "Not checking whether the click came from a button",
    ],
    expectedOutcome:
      "A todo list where each item can be completed or removed using one parent event listener.",
    starter: {
      html: `<ul id="todoList">
  <li>Review HTML <button data-action="complete">Complete</button> <button data-action="remove">Remove</button></li>
  <li>Practice CSS Grid <button data-action="complete">Complete</button> <button data-action="remove">Remove</button></li>
  <li>Build JS project <button data-action="complete">Complete</button> <button data-action="remove">Remove</button></li>
</ul>`,
      css: `.completed {
  text-decoration: line-through;
  color: #64748b;
}`,
      js: `const todoList = document.getElementById("todoList");`,
    },
    solution: {
      html: `<ul id="todoList">
  <li>Review HTML <button data-action="complete">Complete</button> <button data-action="remove">Remove</button></li>
  <li>Practice CSS Grid <button data-action="complete">Complete</button> <button data-action="remove">Remove</button></li>
  <li>Build JS project <button data-action="complete">Complete</button> <button data-action="remove">Remove</button></li>
</ul>`,
      css: `.completed {
  text-decoration: line-through;
  color: #64748b;
}

li {
  margin-bottom: 10px;
}`,
      js: `const todoList = document.getElementById("todoList");

todoList.addEventListener("click", (event) => {
  const button = event.target;

  if (button.tagName !== "BUTTON") return;

  const item = button.closest("li");
  const action = button.dataset.action;

  if (action === "complete") {
    item.classList.toggle("completed");
  }

  if (action === "remove") {
    item.remove();
  }
});`,
    },
  },
  {
    id: "dropdown-menu-toggle",
    editorType: "web",
    title: "Challenge 84 — Dropdown Menu Toggle",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build a small dropdown menu that opens and closes when the trigger button is clicked.",
    requirements: [
      "Add a trigger button",
      "Add a hidden menu with links or items",
      "Show or hide the menu on click",
      "Update the button label or aria-expanded state",
    ],
    tips: [
      "Dropdowns are a good example of a tiny real product feature.",
      "You can use hidden, classList.toggle(), or a data attribute.",
      "Keep the open and closed states obvious in the UI.",
    ],
    concepts: [
      "toggle behavior",
      "event listeners",
      "classList.toggle",
      "UI state",
    ],
    suggestedApproach: [
      "Create a button and a menu container.",
      "Hide the menu by default.",
      "On click, toggle the menu visibility.",
      "Update the button state so the user knows whether the menu is open.",
    ],
    commonMistakes: [
      "Showing the menu by default when it should start hidden",
      "Changing the button label but not the menu visibility",
      "Toggling the class on the wrong element",
    ],
    expectedOutcome:
      "A reusable dropdown interaction that feels like a real settings or account menu.",
    starter: {
      html: `<div class="menu-shell">
  <button id="menuBtn" aria-expanded="false">Open menu</button>
  <div id="menuPanel" class="menu-panel" hidden>
    <a href="#">Profile</a>
    <a href="#">Billing</a>
    <a href="#">Logout</a>
  </div>
</div>`,
      css: `.menu-shell {
  position: relative;
  display: inline-block;
}

.menu-panel {
  display: grid;
  gap: 8px;
  margin-top: 12px;
  padding: 14px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}`,
      js: ``,
    },
    solution: {
      html: `<div class="menu-shell">
  <button id="menuBtn" aria-expanded="false">Open menu</button>
  <div id="menuPanel" class="menu-panel" hidden>
    <a href="#">Profile</a>
    <a href="#">Billing</a>
    <a href="#">Logout</a>
  </div>
</div>`,
      css: `.menu-shell {
  position: relative;
  display: inline-block;
}

.menu-panel {
  display: grid;
  gap: 8px;
  margin-top: 12px;
  padding: 14px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}`,
      js: `const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");

menuBtn.addEventListener("click", () => {
  const isHidden = menuPanel.hidden;
  menuPanel.hidden = !isHidden;
  menuBtn.textContent = isHidden ? "Close menu" : "Open menu";
  menuBtn.setAttribute("aria-expanded", String(isHidden));
});`,
    },
  },
  {
    id: "async-product-search",
    editorType: "web",
    title: "Challenge 85 — Async Product Search",
    difficulty: "Hard",
    category: "JavaScript + Async",
    goal: "Simulate an async search request with loading and empty states.",
    requirements: [
      "Add a search input and button",
      "Show a loading message while searching",
      "Filter products after a short delay",
      "Show matching products",
      "Show an empty state when nothing matches",
    ],
    tips: [
      "setTimeout can simulate a network delay.",
      "Use async/await with a Promise wrapper.",
      "Render loading, empty, and success states separately.",
    ],
    concepts: [
      "async/await",
      "Promise",
      "loading states",
      "empty states",
      "filter()",
    ],
    suggestedApproach: [
      "Create a function that returns products after a delay.",
      "Set the output to Loading before awaiting.",
      "Filter the products by the search value.",
      "Render either results or an empty message.",
    ],
    commonMistakes: [
      "Rendering results before the async work finishes",
      "Not handling empty results",
      "Forgetting lowercase comparison",
    ],
    expectedOutcome:
      "A search UI that behaves like a real async request and handles loading and empty states.",
    starter: {
      html: `<input id="searchInput" placeholder="Search products..." />
<button id="searchBtn">Search</button>
<div id="results"></div>`,
      css: ``,
      js: `const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");

const products = ["Laptop", "Phone", "Desk", "Chair", "Keyboard"];`,
    },
    solution: {
      html: `<input id="searchInput" placeholder="Search products..." />
<button id="searchBtn">Search</button>
<div id="results"></div>`,
      css: `#results {
  margin-top: 16px;
}`,
      js: `const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");

const products = ["Laptop", "Phone", "Desk", "Chair", "Keyboard"];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function searchProducts(searchValue) {
  await wait(700);

  return products.filter((product) =>
    product.toLowerCase().includes(searchValue.toLowerCase())
  );
}

searchBtn.addEventListener("click", async () => {
  results.textContent = "Loading...";

  const matches = await searchProducts(searchInput.value);

  if (matches.length === 0) {
    results.textContent = "No products found.";
    return;
  }

  results.innerHTML = matches.map((product) => \`<p>\${product}</p>\`).join("");
});`,
    },
  },
  {
    id: "paginated-table",
    editorType: "web",
    title: "Challenge 86 — Paginated Table",
    difficulty: "Hard",
    category: "JavaScript + UI State",
    goal: "Create a simple paginated table for customer data.",
    requirements: [
      "Render customer rows from an array",
      "Show 3 customers per page",
      "Add Previous and Next buttons",
      "Disable buttons when the user cannot move further",
      "Show the current page number",
    ],
    tips: [
      "slice() can get the customers for the current page.",
      "Store the current page in a variable.",
      "Re-render after every page change.",
    ],
    concepts: [
      "pagination",
      "slice()",
      "state variables",
      "button disabling",
      "table rendering",
    ],
    suggestedApproach: [
      "Create customers and currentPage variables.",
      "Write a renderTable function.",
      "Use slice() to get visible customers.",
      "Update currentPage from button clicks.",
    ],
    commonMistakes: [
      "Not disabling buttons at the first or last page",
      "Forgetting to re-render after changing page",
      "Calculating the slice start incorrectly",
    ],
    expectedOutcome:
      "A customer table where users can move through data page by page.",
    starter: {
      html: `<table>
  <tbody id="customerRows"></tbody>
</table>
<button id="prevBtn">Previous</button>
<span id="pageInfo"></span>
<button id="nextBtn">Next</button>`,
      css: `td {
  padding: 8px 12px;
  border-bottom: 1px solid #dbe3ef;
}`,
      js: `const customerRows = document.getElementById("customerRows");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");`,
    },
    solution: {
      html: `<table>
  <tbody id="customerRows"></tbody>
</table>
<button id="prevBtn">Previous</button>
<span id="pageInfo"></span>
<button id="nextBtn">Next</button>`,
      css: `td {
  padding: 8px 12px;
  border-bottom: 1px solid #dbe3ef;
}`,
      js: `const customerRows = document.getElementById("customerRows");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

const customers = [
  "Nico", "Sara", "Alex", "Maya", "Liam", "Ava", "Leo", "Sofia"
];

let currentPage = 1;
const pageSize = 3;
const totalPages = Math.ceil(customers.length / pageSize);

function renderTable() {
  const start = (currentPage - 1) * pageSize;
  const visibleCustomers = customers.slice(start, start + pageSize);

  customerRows.innerHTML = visibleCustomers
    .map((name) => \`<tr><td>\${name}</td></tr>\`)
    .join("");

  pageInfo.textContent = \`Page \${currentPage} of \${totalPages}\`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener("click", () => {
  currentPage -= 1;
  renderTable();
});

nextBtn.addEventListener("click", () => {
  currentPage += 1;
  renderTable();
});

renderTable();`,
    },
  },
  {
    id: "kpi-dashboard-calculator",
    editorType: "web",
    title: "Challenge 87 — KPI Dashboard Calculator",
    difficulty: "Hard",
    category: "JavaScript + Data",
    goal: "Calculate dashboard summary values from an orders array.",
    requirements: [
      "Use an array of order objects",
      "Calculate total revenue",
      "Calculate the number of completed orders",
      "Calculate the average order value",
      "Render the KPI cards to the page",
    ],
    tips: [
      "reduce() is useful for totals.",
      "filter() can count completed orders.",
      "Average order value is revenue divided by number of orders.",
    ],
    concepts: [
      "reduce()",
      "filter()",
      "derived data",
      "dashboard rendering",
      "number formatting",
    ],
    suggestedApproach: [
      "Create the orders array.",
      "Calculate each KPI in separate variables.",
      "Build a small helper for rendering cards.",
      "Insert the KPI cards into the dashboard container.",
    ],
    commonMistakes: [
      "Counting all orders instead of completed orders",
      "Calculating average from the wrong total",
      "Rendering raw numbers without labels",
    ],
    expectedOutcome:
      "A dashboard summary generated from real JavaScript data calculations.",
    starter: {
      html: `<section id="dashboard"></section>`,
      css: `#dashboard {
  display: grid;
  gap: 12px;
}`,
      js: `const dashboard = document.getElementById("dashboard");

const orders = [
  { id: 1, total: 120, status: "completed" },
  { id: 2, total: 80, status: "pending" },
  { id: 3, total: 250, status: "completed" },
  { id: 4, total: 40, status: "completed" },
];`,
    },
    solution: {
      html: `<section id="dashboard"></section>`,
      css: `#dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
}

.kpi-card {
  padding: 16px;
  border-radius: 12px;
  background: white;
  border: 1px solid #dbe3ef;
}`,
      js: `const dashboard = document.getElementById("dashboard");

const orders = [
  { id: 1, total: 120, status: "completed" },
  { id: 2, total: 80, status: "pending" },
  { id: 3, total: 250, status: "completed" },
  { id: 4, total: 40, status: "completed" },
];

const revenue = orders.reduce((sum, order) => sum + order.total, 0);
const completedOrders = orders.filter(
  (order) => order.status === "completed"
).length;
const averageOrder = revenue / orders.length;

const kpis = [
  { label: "Revenue", value: "£" + revenue },
  { label: "Completed", value: completedOrders },
  { label: "Average order", value: "£" + averageOrder.toFixed(2) },
];

dashboard.innerHTML = kpis
  .map(
    (kpi) => \`
      <article class="kpi-card">
        <span>\${kpi.label}</span>
        <h2>\${kpi.value}</h2>
      </article>
    \`
  )
  .join("");`,
    },
  },
  {
    id: "destructure-profile-card",
    editorType: "web",
    title: "Challenge 89 — Destructure a Profile Card",
    difficulty: "Medium",
    category: "Core JavaScript",
    goal: "Render a profile card by destructuring an object and copying data with the spread operator.",
    requirements: [
      "Create a user object with name, role, location, and skills",
      "Use destructuring to read the object values",
      "Use the spread operator to add an available property",
      "Render the data into the card",
    ],
    tips: [
      "Destructuring lets you avoid repeating profile.name, profile.role, and similar paths.",
      "Spread creates a new object instead of changing the original one.",
      "Use map() to render the skills.",
    ],
    concepts: [
      "objects",
      "destructuring",
      "spread operator",
      "map()",
      "DOM rendering",
    ],
    suggestedApproach: [
      "Define the original profile object.",
      "Create a copied object with a new available property.",
      "Destructure the values you need.",
      "Render the card and skills list.",
    ],
    commonMistakes: [
      "Mutating the original object instead of creating a copy",
      "Forgetting to join the mapped skills",
      "Destructuring a property name that does not exist",
    ],
    expectedOutcome:
      "A profile card rendered from object data using modern JavaScript syntax.",
    starter: {
      html: `<article id="profile"></article>`,
      css: `#profile {
  max-width: 320px;
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
}`,
      js: `const profile = {
  name: "Maya Chen",
  role: "Junior Frontend Developer",
  location: "Remote",
  skills: ["HTML", "CSS", "JavaScript"],
};

const profileCard = document.getElementById("profile");`,
    },
    solution: {
      html: `<article id="profile"></article>`,
      css: `#profile {
  max-width: 320px;
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  list-style: none;
}

.skills li {
  padding: 6px 10px;
  border-radius: 999px;
  background: #eef6ff;
}`,
      js: `const profile = {
  name: "Maya Chen",
  role: "Junior Frontend Developer",
  location: "Remote",
  skills: ["HTML", "CSS", "JavaScript"],
};

const updatedProfile = {
  ...profile,
  available: true,
};

const { name, role, location, skills, available } = updatedProfile;
const profileCard = document.getElementById("profile");

profileCard.innerHTML =
  "<h2>" + name + "</h2>" +
  "<p>" + role + "</p>" +
  "<p>" + location + "</p>" +
  "<p>" + (available ? "Available for interviews" : "Not available") + "</p>" +
  "<ul class='skills'>" +
  skills.map((skill) => "<li>" + skill + "</li>").join("") +
  "</ul>";`,
    },
  },
  {
    id: "spread-settings-merge",
    editorType: "web",
    title: "Challenge 90 — Merge Settings with Spread",
    difficulty: "Medium",
    category: "Core JavaScript",
    goal: "Use the spread operator to merge base settings with user overrides and render the result.",
    requirements: [
      "Create a base settings object",
      "Create a second object with overrides",
      "Use the spread operator to merge them",
      "Render the merged values in the UI",
    ],
    tips: [
      "This is a common pattern when apps apply defaults and then user choices.",
      "Spread creates a new object instead of mutating the original.",
      "Render the final object so the learner can see what changed.",
    ],
    concepts: [
      "objects",
      "spread operator",
      "destructuring",
      "DOM rendering",
    ],
    suggestedApproach: [
      "Create the base settings object first.",
      "Create a second object with just the changed values.",
      "Merge them into one new object with spread syntax.",
      "Render the final values into the page.",
    ],
    commonMistakes: [
      "Mutating the base object directly",
      "Forgetting that later spread values replace earlier ones",
      "Rendering the original object instead of the merged one",
    ],
    expectedOutcome:
      "A small settings summary that shows how spread syntax is used in real app configuration work.",
    starter: {
      html: `<section id="settingsCard"></section>`,
      css: `#settingsCard {
  padding: 20px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: white;
}`,
      js: ``,
    },
    solution: {
      html: `<section id="settingsCard"></section>`,
      css: `#settingsCard {
  padding: 20px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: white;
}`,
      js: `const baseSettings = {
  theme: "light",
  language: "English",
  notifications: true,
};

const userOverrides = {
  theme: "dark",
  language: "Spanish",
};

const mergedSettings = {
  ...baseSettings,
  ...userOverrides,
};

const { theme, language, notifications } = mergedSettings;
const settingsCard = document.getElementById("settingsCard");

settingsCard.innerHTML =
  "<h2>Saved settings</h2>" +
  "<p>Theme: " + theme + "</p>" +
  "<p>Language: " + language + "</p>" +
  "<p>Notifications: " + (notifications ? "On" : "Off") + "</p>";`,
    },
  },
  {
    id: "find-priority-ticket",
    editorType: "web",
    title: "Challenge 91 — Find a Priority Ticket",
    difficulty: "Medium",
    category: "Core JavaScript",
    goal: "Use find() on an array of objects and render one matching support ticket in the UI.",
    requirements: [
      "Create an array of ticket objects",
      "Use find() to get the selected ticket",
      "Render one matching ticket card",
      "Show a fallback message if no ticket is found",
    ],
    tips: [
      "find() returns one matching item instead of a whole filtered array.",
      "Use the current select value as the lookup id.",
      "Render a small fallback so the UI still makes sense when nothing matches.",
    ],
    concepts: [
      "arrays",
      "objects",
      "find()",
      "DOM rendering",
    ],
    suggestedApproach: [
      "Create the ticket data first.",
      "Read the current ticket id from the select element.",
      "Use find() to get the matching object.",
      "Render the ticket details or a clear fallback message.",
    ],
    commonMistakes: [
      "Using filter() when you only need one item",
      "Comparing a string select value to a number without converting it",
      "Finding the ticket but not updating the visible UI",
    ],
    expectedOutcome:
      "A small ticket lookup panel that makes the difference between find() and filter() feel practical.",
    starter: {
      html: `<label>
  Priority ticket
  <select id="ticketSelect">
    <option value="101">Ticket 101</option>
    <option value="102">Ticket 102</option>
    <option value="103">Ticket 103</option>
  </select>
</label>

<section id="ticketCard"></section>`,
      css: `label {
  display: grid;
  gap: 8px;
  max-width: 260px;
}

#ticketCard {
  margin-top: 16px;
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 14px;
  background: white;
}`,
      js: `const ticketSelect = document.getElementById("ticketSelect");
const ticketCard = document.getElementById("ticketCard");`,
    },
    solution: {
      html: `<label>
  Priority ticket
  <select id="ticketSelect">
    <option value="101">Ticket 101</option>
    <option value="102">Ticket 102</option>
    <option value="103">Ticket 103</option>
  </select>
</label>

<section id="ticketCard"></section>`,
      css: `label {
  display: grid;
  gap: 8px;
  max-width: 260px;
}

#ticketCard {
  margin-top: 16px;
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 14px;
  background: white;
}

#ticketCard h2,
#ticketCard p {
  margin: 0;
}

#ticketCard p + p {
  margin-top: 6px;
  color: #475569;
}`,
      js: `const ticketSelect = document.getElementById("ticketSelect");
const ticketCard = document.getElementById("ticketCard");

const tickets = [
  { id: 101, title: "Payment button inactive", owner: "Mila", priority: "High" },
  { id: 102, title: "Menu image is stretched", owner: "Jon", priority: "Medium" },
  { id: 103, title: "Search placeholder missing", owner: "Asha", priority: "Low" },
];

function renderTicket() {
  const selectedId = Number(ticketSelect.value);
  const ticket = tickets.find((item) => item.id === selectedId);

  if (!ticket) {
    ticketCard.innerHTML = "<p>No ticket found.</p>";
    return;
  }

  ticketCard.innerHTML =
    "<h2>" + ticket.title + "</h2>" +
    "<p>Owner: " + ticket.owner + "</p>" +
    "<p>Priority: " + ticket.priority + "</p>";
}

ticketSelect.addEventListener("change", renderTicket);
renderTicket();`,
    },
  },
  {
    id: "switch-role-permissions",
    editorType: "web",
    title: "Challenge 92 — Role Permissions with switch",
    difficulty: "Medium",
    category: "Core JavaScript",
    goal: "Use a switch statement to show different dashboard permissions for different user roles.",
    requirements: [
      "Create a role selector",
      "Write a function that receives a role",
      "Use switch to return the correct permissions",
      "Update the page when the selected role changes",
    ],
    tips: [
      "Use the change event on the select element.",
      "Each switch case should return or break.",
      "Add a default case for unknown roles.",
    ],
    concepts: ["switch", "conditionals", "functions", "DOM updates"],
    suggestedApproach: [
      "Create a getPermissions function.",
      "Handle admin, editor, viewer, and default roles.",
      "Render the permissions whenever the select changes.",
    ],
    commonMistakes: [
      "Forgetting break or return inside switch cases",
      "Not handling the default case",
      "Only updating a variable and not the DOM",
    ],
    expectedOutcome:
      "A role selector that updates the visible permissions with clear conditional logic.",
    starter: {
      html: `<label>
  Role
  <select id="role">
    <option value="admin">Admin</option>
    <option value="editor">Editor</option>
    <option value="viewer">Viewer</option>
  </select>
</label>

<ul id="permissions"></ul>`,
      css: `label {
  display: grid;
  gap: 8px;
  max-width: 260px;
}`,
      js: `const roleSelect = document.getElementById("role");
const permissionsList = document.getElementById("permissions");

function getPermissions(role) {

}`,
    },
    solution: {
      html: `<label>
  Role
  <select id="role">
    <option value="admin">Admin</option>
    <option value="editor">Editor</option>
    <option value="viewer">Viewer</option>
  </select>
</label>

<ul id="permissions"></ul>`,
      css: `label {
  display: grid;
  gap: 8px;
  max-width: 260px;
}

li {
  margin: 8px 0;
}`,
      js: `const roleSelect = document.getElementById("role");
const permissionsList = document.getElementById("permissions");

function getPermissions(role) {
  switch (role) {
    case "admin":
      return ["Manage users", "Edit content", "View reports"];
    case "editor":
      return ["Edit content", "View reports"];
    case "viewer":
      return ["View reports"];
    default:
      return ["No permissions found"];
  }
}

function renderPermissions() {
  const permissions = getPermissions(roleSelect.value);

  permissionsList.innerHTML = permissions
    .map((permission) => "<li>" + permission + "</li>")
    .join("");
}

roleSelect.addEventListener("change", renderPermissions);
renderPermissions();`,
    },
  },
  {
    id: "closure-counter-factory",
    editorType: "web",
    title: "Challenge 93 — Closure Counter Factory",
    difficulty: "Medium",
    category: "Core JavaScript",
    goal: "Create independent counters by using closures to remember private values.",
    requirements: [
      "Write a createCounter function",
      "Return a function that increases and returns the count",
      "Create two independent counters",
      "Connect each counter to a different button",
    ],
    tips: [
      "The inner function should remember a count variable from the outer function.",
      "Each call to createCounter gets its own scope.",
      "Render the returned count after every click.",
    ],
    concepts: ["closures", "scope", "functions", "event listeners"],
    suggestedApproach: [
      "Create createCounter with a local count variable.",
      "Return an inner function that increments count.",
      "Create two counters from the factory.",
      "Wire both counters to the DOM.",
    ],
    commonMistakes: [
      "Using one global count for both buttons",
      "Returning the count instead of returning a function",
      "Forgetting to call the returned counter function",
    ],
    expectedOutcome:
      "Two buttons that count independently because each one has its own closure.",
    starter: {
      html: `<button id="likesBtn">Like</button>
<span id="likesCount">0</span>

<button id="savesBtn">Save</button>
<span id="savesCount">0</span>`,
      css: `button {
  margin-right: 8px;
}`,
      js: `function createCounter() {

}`,
    },
    solution: {
      html: `<button id="likesBtn">Like</button>
<span id="likesCount">0</span>

<button id="savesBtn">Save</button>
<span id="savesCount">0</span>`,
      css: `button {
  margin: 8px 8px 8px 0;
}`,
      js: `function createCounter() {
  let count = 0;

  return function increase() {
    count += 1;
    return count;
  };
}

const increaseLikes = createCounter();
const increaseSaves = createCounter();

const likesBtn = document.getElementById("likesBtn");
const likesCount = document.getElementById("likesCount");
const savesBtn = document.getElementById("savesBtn");
const savesCount = document.getElementById("savesCount");

likesBtn.addEventListener("click", () => {
  likesCount.textContent = increaseLikes();
});

savesBtn.addEventListener("click", () => {
  savesCount.textContent = increaseSaves();
});`,
    },
  },
  {
    id: "event-loop-order",
    editorType: "web",
    title: "Challenge 94 — Event Loop Order",
    difficulty: "Medium",
    category: "Async JavaScript",
    goal: "Visualize how synchronous code, promises, and timers run in different phases.",
    requirements: [
      "Add a button to run the demo",
      "Log one synchronous step",
      "Log one Promise.then step",
      "Log one setTimeout step",
      "Render the order on the page",
    ],
    tips: [
      "Synchronous code runs first.",
      "Promise callbacks run before setTimeout callbacks.",
      "Render each step as it happens so the timing is visible.",
    ],
    concepts: ["event loop", "promises", "setTimeout", "async flow"],
    suggestedApproach: [
      "Create a renderStep helper.",
      "Clear the list when the button is clicked.",
      "Render a sync step immediately.",
      "Schedule a promise step and a timeout step.",
    ],
    commonMistakes: [
      "Expecting setTimeout to run before Promise.then",
      "Thinking async code blocks the whole page",
      "Not clearing previous demo output",
    ],
    expectedOutcome:
      "A visible execution order: sync first, promise second, timeout third.",
    starter: {
      html: `<button id="runBtn">Run event loop demo</button>
<ol id="steps"></ol>`,
      css: `li {
  margin: 8px 0;
}`,
      js: `const runBtn = document.getElementById("runBtn");
const steps = document.getElementById("steps");`,
    },
    solution: {
      html: `<button id="runBtn">Run event loop demo</button>
<ol id="steps"></ol>`,
      css: `li {
  margin: 8px 0;
}`,
      js: `const runBtn = document.getElementById("runBtn");
const steps = document.getElementById("steps");

function renderStep(text) {
  const item = document.createElement("li");
  item.textContent = text;
  steps.appendChild(item);
}

runBtn.addEventListener("click", () => {
  steps.innerHTML = "";

  setTimeout(() => {
    renderStep("Timer callback");
  }, 0);

  Promise.resolve().then(() => {
    renderStep("Promise callback");
  });

  renderStep("Synchronous code");
});`,
    },
  },
  {
    id: "debug-broken-form-validation",
    editorType: "web",
    title: "Challenge 95 — Debug Broken Form Validation",
    difficulty: "Medium",
    category: "Debugging",
    goal: "Repair a broken contact form so empty fields show an error and a valid submission shows success.",
    requirements: [
      "Prevent the form from reloading the page",
      "Read the name and email values",
      "Show an error when a field is empty",
      "Show a success message when the form is valid",
    ],
    tips: [
      "A lot of junior debugging work is simple but important form behavior like this.",
      "Check the event first, then the values, then the visible message.",
      "Start by making the empty state work before the success state.",
    ],
    concepts: [
      "form submission",
      "validation",
      "debugging",
      "DOM updates",
    ],
    suggestedApproach: [
      "Read the existing submit handler carefully.",
      "Fix the parts that stop validation from working.",
      "Show one clear error message when fields are empty.",
      "Show one clear success message when the values are valid.",
    ],
    commonMistakes: [
      "Updating the values but forgetting preventDefault()",
      "Checking the wrong variable names",
      "Fixing the logic but not updating the visible message",
    ],
    expectedOutcome:
      "A repaired form that behaves like a very common junior assessment task: validate, submit, and explain the fix.",
    starter: {
      html: `<form id="contactForm">
  <input id="nameInput" placeholder="Name" />
  <input id="emailInput" placeholder="Email" />
  <button type="submit">Send</button>
</form>

<p id="message"></p>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 320px;
}`,
      js: `const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("message");

contactForm.addEventListener("submit", (event) => {
  const name = nameInput.value;
  const email = emailInput.value;

  if (name && email) {
    message.textContent = "Please complete every field.";
    return;
  }

  message.textContent = "Form sent successfully.";
});`,
    },
    solution: {
      html: `<form id="contactForm">
  <input id="nameInput" placeholder="Name" />
  <input id="emailInput" placeholder="Email" />
  <button type="submit">Send</button>
</form>

<p id="message"></p>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 320px;
}`,
      js: `const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    message.textContent = "Please complete every field.";
    return;
  }

  message.textContent = "Form sent successfully.";
});`,
    },
  },
  {
    id: "try-catch-json-parser",
    editorType: "web",
    title: "Challenge 96 — Safe JSON Parser",
    difficulty: "Medium",
    category: "Debugging",
    goal: "Use try/catch to parse JSON and show a helpful error when the input is invalid.",
    requirements: [
      "Add a textarea with JSON text",
      "Add a parse button",
      "Use JSON.parse inside try/catch",
      "Show either formatted JSON or a readable error message",
    ],
    tips: [
      "JSON.parse throws when the text is not valid JSON.",
      "Use error.message to show the user what happened.",
      "Use JSON.stringify(value, null, 2) for readable output.",
    ],
    concepts: ["try/catch", "JSON.parse()", "error handling", "DevTools"],
    suggestedApproach: [
      "Read the textarea value when the button is clicked.",
      "Try to parse the value.",
      "Render formatted data on success.",
      "Render an error message inside catch.",
    ],
    commonMistakes: [
      "Using single quotes inside JSON",
      "Forgetting quotes around object keys",
      "Catching the error but not showing feedback",
    ],
    expectedOutcome:
      "A debugging-friendly JSON parser with success and error states.",
    starter: {
      html: `<textarea id="jsonInput">{ "name": "Ava", "active": true }</textarea>
<button id="parseBtn">Parse JSON</button>
<pre id="result"></pre>`,
      css: `textarea {
  width: 100%;
  min-height: 120px;
}`,
      js: `const input = document.getElementById("jsonInput");
const parseBtn = document.getElementById("parseBtn");
const result = document.getElementById("result");`,
    },
    solution: {
      html: `<textarea id="jsonInput">{ "name": "Ava", "active": true }</textarea>
<button id="parseBtn">Parse JSON</button>
<pre id="result"></pre>`,
      css: `textarea {
  width: 100%;
  min-height: 120px;
}

pre {
  padding: 12px;
  border-radius: 8px;
  background: #111827;
  color: #e5e7eb;
  white-space: pre-wrap;
}`,
      js: `const input = document.getElementById("jsonInput");
const parseBtn = document.getElementById("parseBtn");
const result = document.getElementById("result");

parseBtn.addEventListener("click", () => {
  try {
    const parsed = JSON.parse(input.value);
    result.textContent = JSON.stringify(parsed, null, 2);
  } catch (error) {
    result.textContent = "Invalid JSON: " + error.message;
  }
});`,
    },
  },
  {
    id: "debug-broken-localstorage-todos",
    editorType: "web",
    title: "Challenge 97 — Debug Broken localStorage Todos",
    difficulty: "Hard",
    category: "Debugging",
    goal: "Repair a todo list so saved items render correctly after refresh and new todos stay in sync with localStorage.",
    requirements: [
      "Read saved todos from localStorage safely",
      "Render the todo list on page load",
      "Add new todos to the list",
      "Save the updated todos back to localStorage",
    ],
    tips: [
      "This kind of bug is common because localStorage only stores strings.",
      "Fix the data flow first: read, render, update, save.",
      "Try to keep one render function and one save step.",
    ],
    concepts: [
      "localStorage",
      "JSON.parse()",
      "JSON.stringify()",
      "debugging",
    ],
    suggestedApproach: [
      "Repair the initial load from localStorage.",
      "Keep todos in one JavaScript array.",
      "Render that array after every change.",
      "Save the updated array back with JSON.stringify().",
    ],
    commonMistakes: [
      "Reading localStorage but forgetting to parse the saved string",
      "Saving the updated array but never re-rendering it",
      "Using one key to save and another key to load",
    ],
    expectedOutcome:
      "A repaired persistence flow that feels much closer to real debugging work than a blank-page build.",
    starter: {
      html: `<input id="todoInput" placeholder="New todo" />
<button id="addTodoBtn" type="button">Add todo</button>
<ul id="todoList"></ul>`,
      css: `li {
  margin: 8px 0;
}`,
      js: `const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

let todos = localStorage.getItem("debug-todos") || [];

function renderTodos() {
  todoList.innerHTML = todos
    .map((todo) => "<li>" + todo + "</li>")
    .join("");
}

addTodoBtn.addEventListener("click", () => {
  todos.push(todoInput.value);
  localStorage.setItem("debug-todos", todos);
});

renderTodos();`,
    },
    solution: {
      html: `<input id="todoInput" placeholder="New todo" />
<button id="addTodoBtn" type="button">Add todo</button>
<ul id="todoList"></ul>`,
      css: `li {
  margin: 8px 0;
}`,
      js: `const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

function readTodos() {
  try {
    const raw = localStorage.getItem("debug-todos");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

let todos = readTodos();

function renderTodos() {
  todoList.innerHTML = todos
    .map((todo) => "<li>" + todo + "</li>")
    .join("");
}

addTodoBtn.addEventListener("click", () => {
  const value = todoInput.value.trim();

  if (!value) {
    return;
  }

  todos.push(value);
  localStorage.setItem("debug-todos", JSON.stringify(todos));
  todoInput.value = "";
  renderTodos();
});

renderTodos();`,
    },
  },
  {
    id: "debug-broken-async-search",
    editorType: "web",
    title: "Challenge 98 — Debug Broken Async Search",
    difficulty: "Hard",
    category: "Debugging",
    goal: "Repair a broken async search flow so loading, success, and empty results behave clearly.",
    requirements: [
      "Use async or await in the click handler",
      "Show a loading message while the request is running",
      "Render the matching results after the request finishes",
      "Show a no-results message when nothing matches",
    ],
    tips: [
      "Many async bugs come from treating a promise like finished data.",
      "Check what should happen before, during, and after the request.",
      "Clear the old results when a new search begins.",
    ],
    concepts: [
      "async/await",
      "loading state",
      "debugging",
      "DOM updates",
    ],
    suggestedApproach: [
      "Read the broken search flow from top to bottom.",
      "Fix the click handler so it waits for the promise.",
      "Render loading first, then results or an empty message.",
      "Make sure the old output is cleared between searches.",
    ],
    commonMistakes: [
      "Trying to map a promise instead of the resolved data",
      "Leaving the previous results on screen while loading",
      "Handling success but forgetting the empty state",
    ],
    expectedOutcome:
      "A repaired async search that helps learners explain request timing and UI feedback more confidently.",
    starter: {
      html: `<input id="searchInput" placeholder="Search courses" />
<button id="searchBtn" type="button">Search</button>
<p id="status">Search for a course.</p>
<ul id="results"></ul>`,
      css: `li {
  margin: 8px 0;
}`,
      js: `const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const status = document.getElementById("status");
const results = document.getElementById("results");

const courses = ["HTML Foundations", "React State", "TypeScript Basics"];

function searchCourses(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        courses.filter((course) =>
          course.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 500);
  });
}

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  const matches = searchCourses(query);

  status.textContent = "Search complete.";
  results.innerHTML = matches
    .map((course) => "<li>" + course + "</li>")
    .join("");
});`,
    },
    solution: {
      html: `<input id="searchInput" placeholder="Search courses" />
<button id="searchBtn" type="button">Search</button>
<p id="status">Search for a course.</p>
<ul id="results"></ul>`,
      css: `li {
  margin: 8px 0;
}`,
      js: `const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const status = document.getElementById("status");
const results = document.getElementById("results");

const courses = ["HTML Foundations", "React State", "TypeScript Basics"];

function searchCourses(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        courses.filter((course) =>
          course.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 500);
  });
}

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();

  if (!query) {
    status.textContent = "Search for a course.";
    results.innerHTML = "";
    return;
  }

  status.textContent = "Loading results...";
  results.innerHTML = "";

  const matches = await searchCourses(query);

  if (matches.length === 0) {
    status.textContent = "No results found.";
    return;
  }

  status.textContent = "Search complete.";
  results.innerHTML = matches
    .map((course) => "<li>" + course + "</li>")
    .join("");
});`,
    },
  },
  {
    id: "fetch-users-status-codes",
    editorType: "web",
    title: "Challenge 99 — Fetch Users and Check Status",
    difficulty: "Medium",
    category: "APIs",
    goal: "Use fetch(), async/await, loading state, and response status checks to render API data.",
    requirements: [
      "Create a button that loads users",
      "Use fetch() and await response.json()",
      "Check response.ok before rendering data",
      "Show loading, success, and error messages",
    ],
    tips: [
      "A response can return without being ok.",
      "Throw your own error when response.ok is false.",
      "Use finally to stop loading work that should happen either way.",
    ],
    concepts: [
      "fetch()",
      "async/await",
      "status codes",
      "loading state",
      "error handling",
    ],
    suggestedApproach: [
      "Create a data URL with JSON user data.",
      "Fetch the URL when the button is clicked.",
      "Check response.ok and parse JSON.",
      "Render the users or a useful error message.",
    ],
    commonMistakes: [
      "Calling response.json() without await",
      "Ignoring response.ok",
      "Leaving the UI stuck in a loading state",
    ],
    expectedOutcome:
      "A small API-driven users list with proper loading and status handling.",
    starter: {
      html: `<button id="loadBtn">Load users</button>
<p id="status">Waiting for request.</p>
<ul id="users"></ul>`,
      css: `li {
  margin: 8px 0;
}`,
      js: `const loadBtn = document.getElementById("loadBtn");
const status = document.getElementById("status");
const usersList = document.getElementById("users");`,
    },
    solution: {
      html: `<button id="loadBtn">Load users</button>
<p id="status">Waiting for request.</p>
<ul id="users"></ul>`,
      css: `li {
  margin: 8px 0;
}`,
      js: `const loadBtn = document.getElementById("loadBtn");
const status = document.getElementById("status");
const usersList = document.getElementById("users");

const users = [
  { id: 1, name: "Ava", role: "Designer" },
  { id: 2, name: "Noah", role: "Developer" },
  { id: 3, name: "Luna", role: "Product" },
];

const apiUrl =
  "data:application/json," + encodeURIComponent(JSON.stringify(users));

loadBtn.addEventListener("click", async () => {
  status.textContent = "Loading users...";
  usersList.innerHTML = "";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const data = await response.json();
    status.textContent = "Loaded with status " + response.status;
    usersList.innerHTML = data
      .map((user) => "<li>" + user.name + " — " + user.role + "</li>")
      .join("");
  } catch (error) {
    status.textContent = error.message;
  }
});`,
    },
  },
  {
    id: "post-json-with-headers",
    editorType: "web",
    title: "Challenge 100 — POST JSON with Headers",
    difficulty: "Hard",
    category: "APIs",
    goal: "Send form data to an API with POST, JSON.stringify, headers, and async error handling.",
    requirements: [
      "Create a form with title and body fields",
      "Build a JSON payload from the form",
      "Send the payload with fetch() using method POST",
      "Include the Content-Type header",
      "Render the API response or an error",
    ],
    tips: [
      "Use event.preventDefault() to keep the form from reloading the page.",
      "Headers tell the server what format you are sending.",
      "Always handle request errors for real UI.",
    ],
    concepts: [
      "REST",
      "POST",
      "headers",
      "JSON.stringify()",
      "async/await",
    ],
    suggestedApproach: [
      "Select the form, status, and output elements.",
      "Create a payload object from input values.",
      "Call fetch with method, headers, and body.",
      "Check response.ok and render the JSON result.",
    ],
    commonMistakes: [
      "Forgetting JSON.stringify for the request body",
      "Forgetting the Content-Type header",
      "Not disabling or updating UI while the request is pending",
    ],
    expectedOutcome:
      "A form that sends JSON to a REST endpoint and displays the created resource.",
    starter: {
      html: `<form id="postForm">
  <input id="title" placeholder="Post title" />
  <textarea id="body" placeholder="Post body"></textarea>
  <button>Send post</button>
</form>

<p id="status"></p>
<pre id="output"></pre>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 420px;
}`,
      js: `const form = document.getElementById("postForm");
const status = document.getElementById("status");
const output = document.getElementById("output");`,
    },
    solution: {
      html: `<form id="postForm">
  <input id="title" placeholder="Post title" />
  <textarea id="body" placeholder="Post body"></textarea>
  <button>Send post</button>
</form>

<p id="status"></p>
<pre id="output"></pre>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 420px;
}

pre {
  padding: 12px;
  border-radius: 8px;
  background: #111827;
  color: #e5e7eb;
  white-space: pre-wrap;
}`,
      js: `const form = document.getElementById("postForm");
const status = document.getElementById("status");
const output = document.getElementById("output");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const payload = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
    userId: 1,
  };

  status.textContent = "Sending...";
  output.textContent = "";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const data = await response.json();
    status.textContent = "Created with status " + response.status;
    output.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    status.textContent = error.message;
  }
});`,
    },
  },
  {
    id: "query-param-search",
    editorType: "web",
    title: "Challenge 101 — Build Query Parameters",
    difficulty: "Medium",
    category: "APIs",
    goal: "Create an API URL with query parameters for search, category, sorting, and page number.",
    requirements: [
      "Create controls for search, category, sort, and page",
      "Use URLSearchParams",
      "Render the final API URL",
      "Explain the request as a GET endpoint",
    ],
    tips: [
      "URLSearchParams handles the question mark values for you.",
      "GET requests often use query parameters for filters.",
      "Only append parameters that have values.",
    ],
    concepts: ["query parameters", "REST", "GET", "URLSearchParams"],
    suggestedApproach: [
      "Read values from the controls.",
      "Create a URLSearchParams instance.",
      "Append q, category, sort, and page values.",
      "Render /api/products plus the query string.",
    ],
    commonMistakes: [
      "Manually joining strings without encoding spaces",
      "Forgetting the question mark before the query string",
      "Sending filter values in the wrong parameter names",
    ],
    expectedOutcome:
      "A clear API URL builder that shows how real search and filter requests are shaped.",
    starter: {
      html: `<input id="search" placeholder="Search products" />
<select id="category">
  <option value="">All categories</option>
  <option value="shoes">Shoes</option>
  <option value="bags">Bags</option>
</select>
<select id="sort">
  <option value="price">Price</option>
  <option value="rating">Rating</option>
</select>
<input id="page" type="number" value="1" min="1" />
<button id="buildBtn">Build URL</button>
<code id="url"></code>`,
      css: `body {
  display: grid;
  gap: 10px;
}`,
      js: `const buildBtn = document.getElementById("buildBtn");
const urlOutput = document.getElementById("url");`,
    },
    solution: {
      html: `<input id="search" placeholder="Search products" />
<select id="category">
  <option value="">All categories</option>
  <option value="shoes">Shoes</option>
  <option value="bags">Bags</option>
</select>
<select id="sort">
  <option value="price">Price</option>
  <option value="rating">Rating</option>
</select>
<input id="page" type="number" value="1" min="1" />
<button id="buildBtn">Build URL</button>
<code id="url"></code>`,
      css: `body {
  display: grid;
  gap: 10px;
  max-width: 420px;
}

code {
  display: block;
  padding: 12px;
  border-radius: 8px;
  background: #eef3f8;
  overflow-wrap: anywhere;
}`,
      js: `const buildBtn = document.getElementById("buildBtn");
const urlOutput = document.getElementById("url");

buildBtn.addEventListener("click", () => {
  const params = new URLSearchParams();
  const search = document.getElementById("search").value.trim();
  const category = document.getElementById("category").value;
  const sort = document.getElementById("sort").value;
  const page = document.getElementById("page").value;

  if (search) params.set("q", search);
  if (category) params.set("category", category);
  params.set("sort", sort);
  params.set("page", page);

  urlOutput.textContent = "/api/products?" + params.toString();
});`,
    },
  },
  {
    id: "request-race-condition-guard",
    editorType: "web",
    title: "Challenge 102 — Guard Against Stale Search Results",
    difficulty: "Hard",
    category: "Async JavaScript",
    goal: "Prevent older async search requests from overwriting newer results.",
    requirements: [
      "Create a search input",
      "Simulate async API requests with different delays",
      "Track the latest request id",
      "Only render results for the newest request",
    ],
    tips: [
      "Race conditions happen when responses arrive out of order.",
      "Increment a request id before each async call.",
      "Compare the current id before rendering the result.",
    ],
    concepts: [
      "race conditions",
      "async/await",
      "loading state",
      "state management",
    ],
    suggestedApproach: [
      "Create a fakeSearch function that resolves after a delay.",
      "Increment latestRequestId on every input.",
      "Store the request id for the current search.",
      "Ignore the response if it is no longer the latest request.",
    ],
    commonMistakes: [
      "Rendering every response even if it is stale",
      "Using one global result without checking order",
      "Not clearing the UI for short or empty searches",
    ],
    expectedOutcome:
      "A search UI that keeps the newest result even when older requests finish later.",
    starter: {
      html: `<input id="search" placeholder="Type ava or noah" />
<p id="status">Start typing.</p>
<ul id="results"></ul>`,
      css: `li {
  margin: 8px 0;
}`,
      js: `const searchInput = document.getElementById("search");
const status = document.getElementById("status");
const results = document.getElementById("results");`,
    },
    solution: {
      html: `<input id="search" placeholder="Type ava or noah" />
<p id="status">Start typing.</p>
<ul id="results"></ul>`,
      css: `li {
  margin: 8px 0;
}`,
      js: `const searchInput = document.getElementById("search");
const status = document.getElementById("status");
const results = document.getElementById("results");

const people = ["Ava Patel", "Noah Smith", "Ava Wilson", "Mia Lopez"];
let latestRequestId = 0;

function fakeSearch(query) {
  const delay = query.toLowerCase().includes("ava") ? 700 : 250;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        people.filter((person) =>
          person.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, delay);
  });
}

searchInput.addEventListener("input", async () => {
  const query = searchInput.value.trim();
  latestRequestId += 1;
  const requestId = latestRequestId;

  if (!query) {
    status.textContent = "Start typing.";
    results.innerHTML = "";
    return;
  }

  status.textContent = "Searching...";
  const matches = await fakeSearch(query);

  if (requestId !== latestRequestId) {
    return;
  }

  status.textContent = "Showing results for " + query;
  results.innerHTML = matches
    .map((person) => "<li>" + person + "</li>")
    .join("");
});`,
    },
  },
  {
    id: "backend-request-flow",
    editorType: "web",
    title: "Challenge 103 — Backend Request Flow",
    difficulty: "Medium",
    category: "Backend Awareness",
    goal: "Render a visual explanation of how the browser, server, database, and API response work together.",
    requirements: [
      "Create an array of request flow steps",
      "Render each step as a card",
      "Mention the server and database responsibilities",
      "Include a small Express-style route example",
    ],
    tips: [
      "Frontend developers do not need to become backend experts first.",
      "They do need to understand where API data comes from.",
      "Use structured data to render the explanation cleanly.",
    ],
    concepts: ["backend", "server", "database", "Node.js", "Express"],
    suggestedApproach: [
      "Create a flow array with title and description fields.",
      "Map the array into visible cards.",
      "Add a code block showing a simple GET route.",
      "Keep the wording practical and short.",
    ],
    commonMistakes: [
      "Thinking fetch() talks directly to a database",
      "Confusing frontend routes with backend endpoints",
      "Forgetting that servers also handle auth and validation",
    ],
    expectedOutcome:
      "A clear request-flow reference that helps students understand frontend/backend collaboration.",
    starter: {
      html: `<section id="flow"></section>
<pre id="routeExample"></pre>`,
      css: `#flow {
  display: grid;
  gap: 12px;
}`,
      js: `const flow = document.getElementById("flow");
const routeExample = document.getElementById("routeExample");`,
    },
    solution: {
      html: `<section id="flow"></section>
<pre id="routeExample"></pre>`,
      css: `#flow {
  display: grid;
  gap: 12px;
}

.flow-card {
  padding: 14px;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
}

pre {
  padding: 12px;
  border-radius: 8px;
  background: #111827;
  color: #e5e7eb;
  white-space: pre-wrap;
}`,
      js: `const flow = document.getElementById("flow");
const routeExample = document.getElementById("routeExample");

const steps = [
  {
    title: "1. Browser",
    description: "The frontend sends a GET request with fetch().",
  },
  {
    title: "2. Server",
    description: "Node and Express receive the request and run app logic.",
  },
  {
    title: "3. Database",
    description: "The server reads or writes persistent data.",
  },
  {
    title: "4. JSON response",
    description: "The frontend receives JSON and renders UI from it.",
  },
];

flow.innerHTML = steps
  .map(
    (step) =>
      "<article class='flow-card'><h3>" +
      step.title +
      "</h3><p>" +
      step.description +
      "</p></article>"
  )
  .join("");

routeExample.textContent =
  "app.get('/api/products', async (req, res) => {\\n" +
  "  const products = await database.products.findMany();\\n" +
  "  res.json(products);\\n" +
  "});";`,
    },
  },
  {
    id: "interactive-settings-capstone",
    editorType: "web",
    title: "Capstone — Interactive Settings Panel",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Build an interactive settings panel with live preview, counter controls, and one saved preference.",
    requirements: [
      "Add inputs and buttons",
      "Update visible text when the user types or clicks",
      "Add a click event for one control",
      "Save one preference in localStorage",
      "Show clear status or feedback in the UI",
      "Use a neat card layout",
    ],
    tips: [
      "Think like a product settings page: name preview, theme mode, small controls, and saved preferences.",
      "Keep one render function so all visible values stay in sync.",
      "localStorage is enough for remembering simple UI choices in this challenge.",
    ],
    concepts: [
      "event listeners",
      "DOM updates",
      "localStorage",
      "state changes",
      "UI feedback",
    ],
    suggestedApproach: [
      "Create the panel layout first with a preview area and a controls area.",
      "Store the current values in JavaScript variables.",
      "Connect the inputs and buttons with event listeners.",
      "Save and load one preference from localStorage so the panel feels real.",
    ],
    commonMistakes: [
      "Updating the JavaScript value but forgetting the visible preview",
      "Saving to localStorage but not reading it on page load",
      "Scattering UI updates across too many handlers instead of using one render step",
    ],
    expectedOutcome:
      "A small settings panel that feels like a real product screen rather than an isolated exercise.",
    starter: {
      html: `<section class="settings-panel">
  <div class="preview-card">
    <p>Preview area</p>
  </div>
  <div class="controls-card"></div>
</section>`,
      css: `.settings-panel {
  display: grid;
  gap: 16px;
}`,
      js: ``,
    },
    solution: {
      html: `<section class="settings-panel" id="panel" data-theme="light">
  <div class="preview-card">
    <p class="eyebrow">Live preview</p>
    <h2 id="previewName">Guest</h2>
    <p id="modeStatus">Theme: light</p>
    <p>Seats selected: <strong id="seatCount">1</strong></p>
  </div>

  <div class="controls-card">
    <label>
      Display name
      <input id="nameInput" type="text" placeholder="Type your name" />
    </label>

    <div class="row">
      <button id="themeBtn" type="button">Toggle theme</button>
      <span id="saveStatus">Saved locally</span>
    </div>

    <div class="counter-row">
      <button id="decreaseBtn" type="button">-</button>
      <button id="increaseBtn" type="button">+</button>
    </div>
  </div>
</section>`,
      css: `.settings-panel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.preview-card,
.controls-card {
  padding: 20px;
  border-radius: 18px;
  border: 1px solid #dbe3ef;
  background: #ffffff;
}

.settings-panel[data-theme="dark"] .preview-card,
.settings-panel[data-theme="dark"] .controls-card {
  background: #111827;
  color: white;
}

.eyebrow {
  margin: 0 0 10px;
  color: #2563eb;
  font-weight: 800;
  text-transform: uppercase;
}

label {
  display: grid;
  gap: 8px;
  font-weight: 700;
}

input {
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
}

.row,
.counter-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  flex-wrap: wrap;
}

button {
  padding: 10px 14px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: white;
  font-weight: 700;
}

#saveStatus {
  color: #475569;
  font-weight: 700;
}`,
      js: `const panel = document.getElementById("panel");
const nameInput = document.getElementById("nameInput");
const previewName = document.getElementById("previewName");
const modeStatus = document.getElementById("modeStatus");
const seatCount = document.getElementById("seatCount");
const saveStatus = document.getElementById("saveStatus");
const themeBtn = document.getElementById("themeBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");

let theme = localStorage.getItem("panel-theme") || "light";
let displayName = localStorage.getItem("panel-name") || "";
let count = 1;

function renderPanel() {
  panel.dataset.theme = theme;
  previewName.textContent = displayName.trim() || "Guest";
  modeStatus.textContent = "Theme: " + theme;
  seatCount.textContent = count;
  nameInput.value = displayName;
  localStorage.setItem("panel-theme", theme);
  localStorage.setItem("panel-name", displayName);
  saveStatus.textContent = "Saved locally";
}

nameInput.addEventListener("input", () => {
  displayName = nameInput.value;
  saveStatus.textContent = "Saving...";
  renderPanel();
});

themeBtn.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  renderPanel();
});

decreaseBtn.addEventListener("click", () => {
  count = Math.max(1, count - 1);
  renderPanel();
});

increaseBtn.addEventListener("click", () => {
  count += 1;
  renderPanel();
});

renderPanel();`,
    },
  },
  {
    id: "product-list-manager-capstone",
    editorType: "web",
    title: "Capstone — Product List Manager",
    difficulty: "Medium",
    category: "JavaScript + Forms",
    goal: "Build a mini product list manager with form validation, add-item logic, filters, and sorting.",
    requirements: [
      "Add a form with inputs and button",
      "Validate the form before adding an item",
      "Store products in an array",
      "Render products as cards or list items",
      "Add filter and sort controls",
      "Update the UI after every change",
    ],
    tips: [
      "Treat the products array as the source of truth and derive the visible list from it.",
      "Make validation obvious by showing a clear message to the user.",
      "A render function helps keep form, filters, and output working together.",
    ],
    concepts: [
      "form submission",
      "validation",
      "arrays",
      "filter()",
      "sort()",
      "rendering lists",
    ],
    suggestedApproach: [
      "Create the form fields, controls, and one empty output area.",
      "Store products as objects with name, category, and price.",
      "Validate the form, then push new products into the array.",
      "Render the filtered and sorted products after every update.",
    ],
    commonMistakes: [
      "Appending raw HTML without keeping the data in an array",
      "Validating once but not clearing or updating the message later",
      "Sorting or filtering the wrong array",
    ],
    expectedOutcome:
      "A realistic mini CRUD-style interface that shows the learner can manage data and UI together.",
    starter: {
      html: `<form id="productForm"></form>
<section id="controls"></section>
<section id="productList"></section>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<form id="productForm" class="panel">
  <h2>Add product</h2>
  <input id="nameInput" type="text" placeholder="Product name" />
  <select id="categoryInput">
    <option value="">Category</option>
    <option>Tech</option>
    <option>Home</option>
    <option>Food</option>
  </select>
  <input id="priceInput" type="number" placeholder="Price" />
  <button type="submit">Add product</button>
  <p id="formMessage"></p>
</form>

<section id="controls" class="panel controls">
  <select id="filterSelect">
    <option>All</option>
    <option>Tech</option>
    <option>Home</option>
    <option>Food</option>
  </select>
  <select id="sortSelect">
    <option value="name">Sort by name</option>
    <option value="price">Sort by price</option>
  </select>
</section>

<section id="productList" class="product-grid"></section>`,
      css: `.panel {
  display: grid;
  gap: 12px;
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: #ffffff;
  margin-bottom: 16px;
}

.controls {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

input,
select,
button {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

button {
  border: none;
  background: #2563eb;
  color: white;
  font-weight: 700;
}

#formMessage {
  margin: 0;
  color: #475569;
  font-weight: 700;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
}

.product-card {
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: #f8fafc;
}`,
      js: `const productForm = document.getElementById("productForm");
const nameInput = document.getElementById("nameInput");
const categoryInput = document.getElementById("categoryInput");
const priceInput = document.getElementById("priceInput");
const formMessage = document.getElementById("formMessage");
const filterSelect = document.getElementById("filterSelect");
const sortSelect = document.getElementById("sortSelect");
const productList = document.getElementById("productList");

const products = [
  { name: "Wireless Mouse", category: "Tech", price: 28 },
  { name: "Tea Set", category: "Home", price: 35 },
  { name: "Granola Pack", category: "Food", price: 12 },
];

function renderProducts() {
  const activeCategory = filterSelect.value;
  const activeSort = sortSelect.value;

  const visibleProducts = products
    .filter((product) => {
      return activeCategory === "All" || product.category === activeCategory;
    })
    .sort((a, b) => {
      if (activeSort === "price") return a.price - b.price;
      return a.name.localeCompare(b.name);
    });

  productList.innerHTML = visibleProducts
    .map(
      (product) =>
        "<article class='product-card'><h3>" +
        product.name +
        "</h3><p>" +
        product.category +
        "</p><strong>£" +
        product.price +
        "</strong></article>"
    )
    .join("");
}

productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const category = categoryInput.value;
  const price = Number(priceInput.value);

  if (!name || !category || !price) {
    formMessage.textContent = "Please complete every field before adding a product.";
    return;
  }

  products.push({ name, category, price });
  formMessage.textContent = "Product added successfully.";
  productForm.reset();
  renderProducts();
});

filterSelect.addEventListener("change", renderProducts);
sortSelect.addEventListener("change", renderProducts);

renderProducts();`,
    },
  },
  {
    id: "async-dashboard-capstone",
    editorType: "web",
    title: "Capstone — Async Dashboard",
    difficulty: "Hard",
    category: "JavaScript + DOM",
    goal: "Build a mini async dashboard with loading, error, retry, fetched content, and a saved local note.",
    requirements: [
      "Load mock data with async or await",
      "Show a loading state",
      "Show an error state with retry",
      "Render fetched content from data",
      "Save a short note in localStorage",
      "Update the UI after async work finishes",
    ],
    tips: [
      "Give the dashboard a calm request lifecycle: loading, success, and error.",
      "A retry button should call the same loading function again.",
      "Keep the local note separate from the fetched data so each part stays simple.",
    ],
    concepts: [
      "async/await",
      "loading state",
      "error state",
      "localStorage",
      "content and data",
    ],
    suggestedApproach: [
      "Build the dashboard shell with status text, cards area, retry button, and note area.",
      "Create a fake async function that returns dashboard data after a delay.",
      "Render loading, error, and success states clearly.",
      "Save the learner note to localStorage so it persists after refresh.",
    ],
    commonMistakes: [
      "Leaving old content on the screen while loading new data",
      "Showing an error but not giving the user a way to retry",
      "Saving the note locally but never restoring it on page load",
    ],
    expectedOutcome:
      "A small dashboard that proves the learner can handle async UI states and persistence together.",
    starter: {
      html: `<section id="dashboard"></section>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section class="dashboard-shell">
  <div class="header-row">
    <h2>Performance dashboard</h2>
    <button id="retryBtn" type="button">Retry load</button>
  </div>
  <p id="status">Loading...</p>
  <section id="dashboard" class="card-grid"></section>

  <section class="note-card">
    <h3>Saved note</h3>
    <textarea id="noteInput" placeholder="Write one takeaway from the data"></textarea>
    <button id="saveNoteBtn" type="button">Save note</button>
  </section>
</section>`,
      css: `.dashboard-shell {
  display: grid;
  gap: 16px;
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.metric-card,
.note-card {
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: #ffffff;
}

textarea,
button {
  padding: 12px;
  border-radius: 12px;
}

textarea {
  min-height: 110px;
  border: 1px solid #cbd5e1;
}

button {
  border: none;
  background: #2563eb;
  color: white;
  font-weight: 700;
}`,
      js: `const dashboard = document.getElementById("dashboard");
const status = document.getElementById("status");
const retryBtn = document.getElementById("retryBtn");
const noteInput = document.getElementById("noteInput");
const saveNoteBtn = document.getElementById("saveNoteBtn");

let shouldFail = true;

function getDashboardData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        shouldFail = false;
        reject(new Error("Dashboard request failed. Try again."));
        return;
      }

      resolve([
        { label: "Weekly sales", value: "£4,280" },
        { label: "Bookings", value: "38" },
        { label: "Response time", value: "1.2s" },
      ]);
    }, 700);
  });
}

async function loadDashboard() {
  status.textContent = "Loading...";
  dashboard.innerHTML = "";

  try {
    const metrics = await getDashboardData();
    status.textContent = "Dashboard loaded successfully.";
    dashboard.innerHTML = metrics
      .map(
        (metric) =>
          "<article class='metric-card'><p>" +
          metric.label +
          "</p><h3>" +
          metric.value +
          "</h3></article>"
      )
      .join("");
  } catch (error) {
    status.textContent = error.message;
  }
}

retryBtn.addEventListener("click", loadDashboard);

saveNoteBtn.addEventListener("click", () => {
  localStorage.setItem("dashboard-note", noteInput.value);
  status.textContent = "Note saved locally.";
});

noteInput.value = localStorage.getItem("dashboard-note") || "";

loadDashboard();`,
    },
  },
  {
    id: "admin-dashboard-capstone",
    editorType: "web",
    title: "Capstone — Admin Dashboard",
    difficulty: "Hard",
    category: "JavaScript + Arrays",
    goal: "Build a small admin dashboard with KPI cards, a paginated list, and delegated row actions.",
    requirements: [
      "Render cards from data",
      "Render a table or list from an array",
      "Use event delegation for row actions",
      "Add pagination buttons",
      "Calculate at least one total or KPI",
      "Keep the interface organized with clear sections",
    ],
    tips: [
      "Think like an admin screen: summary first, then detailed rows below.",
      "Pagination can be very small in scope; you only need previous, next, and the current slice.",
      "Event delegation works well when all row buttons live inside one shared parent.",
    ],
    concepts: [
      "rendering data",
      "event delegation",
      "pagination",
      "reduce()",
      "dashboard UI",
    ],
    suggestedApproach: [
      "Create summary cards and one list area inside the page shell.",
      "Calculate the KPI values from the orders array.",
      "Render one page of rows at a time.",
      "Use one click listener on the list wrapper to handle row actions.",
    ],
    commonMistakes: [
      "Calculating totals from only the current page instead of the full data set",
      "Adding separate listeners to every button instead of using delegation",
      "Forgetting to disable pagination at the first or last page",
    ],
    expectedOutcome:
      "A junior-level admin dashboard that shows data rendering, totals, interactions, and layout working together.",
    starter: {
      html: `<section id="kpiGrid"></section>
<section id="ordersTable"></section>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section id="kpiGrid" class="kpi-grid"></section>
<section class="table-card">
  <div class="table-header">
    <h2>Recent orders</h2>
    <p id="rowStatus">Select an action below</p>
  </div>
  <div id="ordersTable"></div>
  <div class="pagination-row">
    <button id="prevBtn" type="button">Previous</button>
    <button id="nextBtn" type="button">Next</button>
  </div>
</section>`,
      css: `.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
  margin-bottom: 16px;
}

.kpi-card,
.table-card {
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: #ffffff;
}

.orders-list {
  display: grid;
  gap: 10px;
}

.order-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 14px;
  border-radius: 14px;
  background: #f8fafc;
}

.pagination-row {
  display: flex;
  gap: 10px;
  margin-top: 14px;
}

button {
  padding: 10px 14px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: white;
  font-weight: 700;
}`,
      js: `const kpiGrid = document.getElementById("kpiGrid");
const ordersTable = document.getElementById("ordersTable");
const rowStatus = document.getElementById("rowStatus");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const orders = [
  { id: 101, customer: "Sara", total: 120, status: "Paid" },
  { id: 102, customer: "Nico", total: 64, status: "Pending" },
  { id: 103, customer: "Leah", total: 88, status: "Paid" },
  { id: 104, customer: "Jade", total: 39, status: "Pending" },
  { id: 105, customer: "Milo", total: 172, status: "Paid" },
  { id: 106, customer: "Ava", total: 58, status: "Paid" },
];

let currentPage = 1;
const perPage = 3;

function renderKpis() {
  const revenue = orders.reduce((sum, order) => sum + order.total, 0);
  const paidOrders = orders.filter((order) => order.status === "Paid").length;

  const cards = [
    { label: "Orders", value: orders.length },
    { label: "Revenue", value: "£" + revenue },
    { label: "Paid", value: paidOrders },
  ];

  kpiGrid.innerHTML = cards
    .map(
      (card) =>
        "<article class='kpi-card'><p>" +
        card.label +
        "</p><h3>" +
        card.value +
        "</h3></article>"
    )
    .join("");
}

function renderOrders() {
  const start = (currentPage - 1) * perPage;
  const pageItems = orders.slice(start, start + perPage);

  ordersTable.innerHTML =
    "<div class='orders-list'>" +
    pageItems
      .map(
        (order) =>
          "<article class='order-row'><div><strong>#" +
          order.id +
          "</strong><p>" +
          order.customer +
          " · " +
          order.status +
          " · £" +
          order.total +
          "</p></div><button data-order='" +
          order.id +
          "' type='button'>View</button></article>"
      )
      .join("") +
    "</div>";

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = start + perPage >= orders.length;
}

ordersTable.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;

  rowStatus.textContent =
    "Viewing order #" + event.target.dataset.order + " from the shared event listener.";
});

prevBtn.addEventListener("click", () => {
  currentPage = Math.max(1, currentPage - 1);
  renderOrders();
});

nextBtn.addEventListener("click", () => {
  const maxPage = Math.ceil(orders.length / perPage);
  currentPage = Math.min(maxPage, currentPage + 1);
  renderOrders();
});

renderKpis();
renderOrders();`,
    },
  },
  {
    id: "api-toolkit-capstone",
    editorType: "web",
    title: "Capstone — API Toolkit",
    difficulty: "Hard",
    category: "JavaScript + Forms",
    goal: "Build an API toolkit screen that previews query parameters, formats JSON safely, and explains the backend request flow.",
    requirements: [
      "Build query parameters from form values",
      "Show a request URL preview",
      "Parse or format JSON safely with try or catch",
      "Show status or error messages",
      "Include a short backend request flow section",
      "Use structured data to render part of the UI",
    ],
    tips: [
      "This challenge is about communicating API thinking clearly, not building a full backend.",
      "URLSearchParams keeps the query string cleaner than manual string building.",
      "A good error message is part of the solution, not just a fallback.",
    ],
    concepts: [
      "query parameters",
      "JSON",
      "try/catch",
      "backend",
      "rendering data",
    ],
    suggestedApproach: [
      "Create a small request form with text and select inputs.",
      "Use URLSearchParams to build the request preview.",
      "Add a textarea for JSON and format it safely with try/catch.",
      "Render the backend flow from an array so the explanation stays structured.",
    ],
    commonMistakes: [
      "Building the URL manually and forgetting separators or encoding",
      "Trying to parse JSON without handling invalid input",
      "Explaining backend flow in one paragraph instead of a scannable structure",
    ],
    expectedOutcome:
      "A toolkit-style screen that helps learners connect frontend forms to API thinking and backend awareness.",
    starter: {
      html: `<section id="toolkit"></section>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section class="toolkit-shell">
  <form id="requestForm" class="tool-card">
    <h2>Request builder</h2>
    <input id="searchInput" type="text" placeholder="Search term" />
    <select id="statusInput">
      <option value="">Any status</option>
      <option value="published">Published</option>
      <option value="draft">Draft</option>
    </select>
    <button type="submit">Build request</button>
    <p id="requestStatus">Ready to build request.</p>
  </form>

  <section class="tool-card">
    <h3>Request URL</h3>
    <pre id="urlPreview"></pre>
  </section>

  <section class="tool-card">
    <h3>JSON formatter</h3>
    <textarea id="jsonInput">{ "title": "Frontend toolkit" }</textarea>
    <button id="formatBtn" type="button">Format JSON</button>
    <pre id="jsonPreview"></pre>
  </section>

  <section class="tool-card">
    <h3>Backend request flow</h3>
    <div id="flowList" class="flow-list"></div>
  </section>
</section>`,
      css: `.toolkit-shell {
  display: grid;
  gap: 16px;
}

.tool-card {
  display: grid;
  gap: 12px;
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: #ffffff;
}

input,
select,
textarea,
button {
  padding: 12px;
  border-radius: 12px;
}

input,
select,
textarea {
  border: 1px solid #cbd5e1;
}

textarea {
  min-height: 120px;
}

button {
  border: none;
  background: #2563eb;
  color: white;
  font-weight: 700;
}

pre {
  margin: 0;
  padding: 14px;
  border-radius: 14px;
  background: #0f172a;
  color: #e2e8f0;
  white-space: pre-wrap;
}

.flow-list {
  display: grid;
  gap: 10px;
}

.flow-step {
  padding: 14px;
  border-radius: 14px;
  background: #f8fafc;
}`,
      js: `const requestForm = document.getElementById("requestForm");
const searchInput = document.getElementById("searchInput");
const statusInput = document.getElementById("statusInput");
const requestStatus = document.getElementById("requestStatus");
const urlPreview = document.getElementById("urlPreview");
const jsonInput = document.getElementById("jsonInput");
const formatBtn = document.getElementById("formatBtn");
const jsonPreview = document.getElementById("jsonPreview");
const flowList = document.getElementById("flowList");

const flowSteps = [
  { title: "Browser", text: "The UI collects filters and sends a request." },
  { title: "Server", text: "The backend reads query params and applies logic." },
  { title: "Database", text: "The server reads or writes persistent data." },
  { title: "JSON response", text: "The frontend receives JSON and renders results." },
];

flowList.innerHTML = flowSteps
  .map(
    (step) =>
      "<article class='flow-step'><strong>" +
      step.title +
      "</strong><p>" +
      step.text +
      "</p></article>"
  )
  .join("");

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const params = new URLSearchParams();

  if (searchInput.value.trim()) {
    params.set("search", searchInput.value.trim());
  }

  if (statusInput.value) {
    params.set("status", statusInput.value);
  }

  urlPreview.textContent = "/api/articles?" + params.toString();
  requestStatus.textContent = "Request preview updated successfully.";
});

formatBtn.addEventListener("click", () => {
  try {
    const parsed = JSON.parse(jsonInput.value);
    jsonPreview.textContent = JSON.stringify(parsed, null, 2);
    requestStatus.textContent = "JSON formatted successfully.";
  } catch (error) {
    jsonPreview.textContent = error.message;
    requestStatus.textContent = "JSON error: " + error.message;
  }
});`,
    },
  },
  {
    id: "builder-all-in-one-practice-lab",
    editorType: "web",
    title: "Capstone — Builder All-in-One Practice Lab",
    difficulty: "Hard",
    category: "JavaScript + UI State",
    goal: "Build an interactive practice dashboard that combines data rendering, live filters, saved cards, validated study goals, and persisted UI state.",
    requirements: [
      "Render cards from a JavaScript array",
      "Add search by name",
      "Add at least one select filter such as category",
      "Show a live results summary",
      "Add a clear filters button",
      "Show a no-results state when nothing matches",
      "Let the user save or pin a resource",
      "Add a small form with validation",
      "Let the user remove a saved goal",
      "Persist one UI preference or study data in localStorage",
    ],
    tips: [
      "This should feel like a small product surface, not one isolated widget.",
      "Use one render function so the UI stays in sync with the current filters and state.",
      "Persisting goals, favourites, or theme is enough to make the experience feel real.",
    ],
    concepts: [
      "arrays",
      "map()",
      "filter()",
      "form validation",
      "localStorage",
      "UI state",
    ],
    suggestedApproach: [
      "Create the static shell with controls, summary text, cards area, empty state, and a small goals form.",
      "Store your source data in an array of objects.",
      "Filter and render the cards based on the current input values.",
      "Add one more interactive layer such as saved cards or removable goals so the lab feels complete.",
    ],
    commonMistakes: [
      "Filtering data without re-rendering the visible cards",
      "Resetting one filter but forgetting the rest",
      "Saving data without restoring it on page load",
    ],
    expectedOutcome:
      "A bigger JavaScript build that proves the learner can connect rendering, state, filtering, validation, and persistence in one working interface.",
    starter: {
      html: `<section class="lab-shell">
  <div class="lab-toolbar">
    <input id="labSearchInput" type="text" placeholder="Search resources..." />
    <select id="labCategorySelect">
      <option>All</option>
      <option>UI</option>
      <option>React</option>
      <option>JavaScript</option>
    </select>
    <button id="labClearBtn" type="button">Clear filters</button>
    <button id="labThemeBtn" type="button">Toggle theme</button>
  </div>

  <p id="labSummary"></p>
  <p id="labEmptyState" hidden>No resources match those filters.</p>
  <section id="labCards"></section>

  <form id="labForm" class="lab-form">
    <input id="labFormName" type="text" placeholder="Add a study goal" />
    <button type="submit">Add goal</button>
  </form>
  <p id="labFormFeedback"></p>
  <ul id="labGoals"></ul>
</section>`,
      css: `.lab-shell {
  display: grid;
  gap: 16px;
}`,
      js: ``,
    },
    solution: {
      html: `<section class="lab-shell" id="labShell" data-theme="light">
  <div class="lab-toolbar">
    <input id="labSearchInput" type="text" placeholder="Search resources..." />
    <select id="labCategorySelect">
      <option>All</option>
      <option>UI</option>
      <option>React</option>
      <option>JavaScript</option>
    </select>
    <button id="labClearBtn" type="button">Clear filters</button>
    <button id="labThemeBtn" type="button">Toggle theme</button>
  </div>

  <p id="labSummary" class="lab-summary"></p>
  <p id="labEmptyState" hidden>No resources match those filters.</p>
  <section id="labCards" class="lab-grid"></section>

  <form id="labForm" class="lab-form">
    <input id="labFormName" type="text" placeholder="Add a study goal" />
    <button type="submit">Add goal</button>
  </form>
  <p id="labFormFeedback"></p>
  <ul id="labGoals" class="lab-goals"></ul>
</section>`,
      css: `.lab-shell {
  display: grid;
  gap: 16px;
}

.lab-toolbar,
.lab-form {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.lab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
}

.lab-card {
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: white;
  display: grid;
  gap: 12px;
}

.lab-shell[data-theme="dark"] .lab-card {
  background: #111827;
  color: white;
}

.lab-shell[data-theme="dark"] {
  color: #e5e7eb;
}

.lab-summary {
  margin: 0;
  font-weight: 700;
}

.lab-card.is-saved {
  border-color: #2563eb;
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.18);
}

.lab-card header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: start;
}

.lab-tag {
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 999px;
  background: #e0e7ff;
  color: #3730a3;
  font-size: 0.85rem;
}

.lab-goals {
  display: grid;
  gap: 10px;
  padding-left: 18px;
}

.lab-goal-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

input,
select,
button {
  padding: 12px;
  border-radius: 12px;
}

input,
select {
  border: 1px solid #cbd5e1;
}

button {
  border: none;
  background: #0f172a;
  color: white;
  font-weight: 700;
}`,
      js: `const labShell = document.getElementById("labShell");
const labSearchInput = document.getElementById("labSearchInput");
const labCategorySelect = document.getElementById("labCategorySelect");
const labClearBtn = document.getElementById("labClearBtn");
const labThemeBtn = document.getElementById("labThemeBtn");
const labSummary = document.getElementById("labSummary");
const labEmptyState = document.getElementById("labEmptyState");
const labCards = document.getElementById("labCards");
const labForm = document.getElementById("labForm");
const labFormName = document.getElementById("labFormName");
const labFormFeedback = document.getElementById("labFormFeedback");
const labGoals = document.getElementById("labGoals");

const labResources = [
  { id: 1, title: "Hero layout", category: "UI", level: "Rookie" },
  { id: 2, title: "Search filters", category: "JavaScript", level: "Builder" },
  { id: 3, title: "React props", category: "React", level: "React" },
  { id: 4, title: "State and forms", category: "React", level: "React" },
  { id: 5, title: "Async loading states", category: "JavaScript", level: "Builder" },
];

function readStoredArray(key) {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

let theme = localStorage.getItem("builder-lab-theme") || "light";
let savedIds = readStoredArray("builder-lab-saved");
let goals = readStoredArray("builder-lab-goals");

function saveLabState() {
  localStorage.setItem("builder-lab-theme", theme);
  localStorage.setItem("builder-lab-saved", JSON.stringify(savedIds));
  localStorage.setItem("builder-lab-goals", JSON.stringify(goals));
}

function renderGoals() {
  if (goals.length === 0) {
    labGoals.innerHTML = "<li>No study goals yet.</li>";
    return;
  }

  labGoals.innerHTML = goals
    .map(
      (goal, index) =>
        "<li class='lab-goal-row'><span>" +
        goal +
        "</span><button type='button' data-goal-index='" +
        index +
        "'>Remove</button></li>"
    )
    .join("");
}

function renderCards() {
  const query = labSearchInput.value.trim().toLowerCase();
  const activeCategory = labCategorySelect.value;
  const visibleResources = labResources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(query);
    const matchesCategory =
      activeCategory === "All" || resource.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  labSummary.textContent =
    "Showing " + visibleResources.length + " of " + labResources.length + " resources";
  labEmptyState.hidden = visibleResources.length > 0;
  labCards.innerHTML = visibleResources
    .map(
      (resource) =>
        "<article class='lab-card" +
        (savedIds.includes(resource.id) ? " is-saved" : "") +
        "'><header><div><h3>" +
        resource.title +
        "</h3><p>" +
        resource.level +
        "</p></div><span class='lab-tag'>" +
        resource.category +
        "</span></header><button type='button' data-save-id='" +
        resource.id +
        "'>" +
        (savedIds.includes(resource.id) ? "Saved" : "Save resource") +
        "</button></article>"
    )
    .join("");

  labShell.dataset.theme = theme;
  labThemeBtn.textContent =
    theme === "dark" ? "Use light theme" : "Use dark theme";
}

labSearchInput.addEventListener("input", renderCards);
labCategorySelect.addEventListener("change", renderCards);

labClearBtn.addEventListener("click", () => {
  labSearchInput.value = "";
  labCategorySelect.value = "All";
  renderCards();
});

labThemeBtn.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  saveLabState();
  renderCards();
});

labCards.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save-id]");

  if (!saveButton) return;

  const resourceId = Number(saveButton.dataset.saveId);
  savedIds = savedIds.includes(resourceId)
    ? savedIds.filter((id) => id !== resourceId)
    : [...savedIds, resourceId];

  saveLabState();
  renderCards();
});

labForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = labFormName.value.trim();

  if (!value) {
    labFormFeedback.textContent = "Please enter a study goal.";
    return;
  }

  if (goals.some((goal) => goal.toLowerCase() === value.toLowerCase())) {
    labFormFeedback.textContent = "That goal is already in your list.";
    return;
  }

  goals.push(value);
  saveLabState();
  labFormName.value = "";
  labFormFeedback.textContent = "Goal added to your practice plan.";
  renderGoals();
});

labGoals.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-goal-index]");

  if (!removeButton) return;

  const goalIndex = Number(removeButton.dataset.goalIndex);
  goals = goals.filter((goal, index) => index !== goalIndex);
  saveLabState();
  renderGoals();
});

saveLabState();
renderCards();
renderGoals();`,
    },
  },
];
