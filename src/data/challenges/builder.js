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
    id: "character-counter",
    editorType: "web",
    title: "Challenge 2 — Character Counter",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Update a live character counter as the user types.",
    requirements: [
      "Add a textarea or input",
      "Add an element to show the count",
      "Update the count on every input change",
    ],
    tips: [
      "Use the input event.",
      "You can read the current text with value.",
      "Use textContent to update the counter display.",
    ],
    concepts: ["input events", "DOM updates", "string length", "textContent"],
    suggestedApproach: [
      "Create an input or textarea and a counter element.",
      "Select both elements in JavaScript.",
      "Listen for the input event.",
      "Update the counter with the text length.",
    ],
    commonMistakes: [
      "Using click instead of input",
      "Forgetting to read input.value.length",
      "Updating the variable but not the page text",
    ],
    expectedOutcome:
      "A text field with a live counter that changes as the user types.",
    starter: {
      html: `<textarea id="messageInput" placeholder="Type here..."></textarea>
<p>Characters: <span id="count">0</span></p>`,
      css: `textarea {
  width: 100%;
  min-height: 120px;
}`,
      js: ``,
    },
    solution: {
      html: `<textarea id="messageInput" placeholder="Type here..."></textarea>
<p>Characters: <span id="count">0</span></p>`,
      css: `textarea {
  width: 100%;
  min-height: 120px;
}`,
      js: `const messageInput = document.getElementById("messageInput");
const count = document.getElementById("count");

messageInput.addEventListener("input", () => {
  count.textContent = messageInput.value.length;
});`,
    },
  },
  {
    id: "live-search-filter",
    editorType: "web",
    title: "Challenge 3 — Live Search Filter",
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
    id: "faq-toggle",
    editorType: "web",
    title: "Challenge 4 — FAQ Toggle",
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
    title: "Challenge 5 — Theme Toggle with Saved Preference",
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
    title: "Challenge 6 — Counter with Reset",
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
    id: "simple-form-validation",
    editorType: "web",
    title: "Challenge 7 — Simple Form Validation",
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
    id: "add-item-to-list",
    editorType: "web",
    title: "Challenge 8 — Add Item to List",
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
    id: "remove-item-from-list",
    editorType: "web",
    title: "Challenge 9 — Remove Item from List",
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
    id: "sort-products",
    editorType: "web",
    title: "Challenge 10 — Sort Products",
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
    title: "Challenge 11 — Filter Products by Category",
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
    id: "todo-complete-toggle",
    editorType: "web",
    title: "Challenge 12 — Todo Complete Toggle",
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
    title: "Challenge 13 — Password Strength Checker",
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
    id: "tab-switcher",
    editorType: "web",
    title: "Challenge 14 — Tab Switcher",
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
    id: "mock-fetch-loading",
    editorType: "web",
    title: "Challenge 15 — Mock Fetch with Loading State",
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
    title: "Challenge 16 — Mock Fetch Error and Retry",
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
    title: "Challenge 17 — Promise Chain Practice",
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
    title: "Challenge 18 — Async Await User Card",
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
    id: "save-notes-localstorage",
    editorType: "web",
    title: "Challenge 19 — Save Notes in localStorage",
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
    id: "shopping-cart-total",
    editorType: "web",
    title: "Challenge 20 — Shopping Cart Total",
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
    id: "mock-product-search",
    editorType: "web",
    title: "Challenge 21 — Mock Product Search",
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
    id: "promise-all-user-posts",
    editorType: "web",
    title: "Challenge 22 — Load User and Posts with Promise.all",
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
    id: "filter-sort-products",
    editorType: "web",
    title: "Challenge 23 — Filter and Sort Products",
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
    id: "save-load-todos-localstorage",
    editorType: "web",
    title: "Challenge 24 — Save and Load Todos with localStorage",
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
  
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  
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
];
