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
    id: "toggle-background-color",
    editorType: "web",
    title: "Challenge 0 — Toggle Background Color",
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
    title: "Challenge 0 — Toggle Button Label",
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
    title: "Challenge 0 — Toggle Card Class",
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
    id: "fruit-partial-match-list",
    editorType: "web",
    title: "Challenge 0 — Search 10 Fruits with Partial Matches",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Search a longer fruit list and keep items visible when the typed text matches only part of the word.",
    requirements: [
      "Add a search input",
      "Show 10 fruits in a list",
      "Search the list as the user types",
      "Support partial matches",
    ],
    tips: [
      "includes() helps with partial matches.",
      "Convert both values to lowercase before comparing.",
      "A longer list helps the learner see the pattern more clearly.",
    ],
    concepts: ["input events", "string matching", "includes()", "DOM filtering"],
    suggestedApproach: [
      "Create one input and a list of 10 fruits.",
      "Select the input and list items.",
      "Read the search value on every input event.",
      "Hide items that do not include the typed text.",
    ],
    commonMistakes: [
      "Only matching full words instead of partial text",
      "Forgetting lowercase comparison",
      "Filtering only once instead of on every keystroke",
    ],
    expectedOutcome:
      "A fruit list that responds well even when the user types only part of the fruit name.",
    starter: {
      html: `<input id="fruitSearchInput" type="text" placeholder="Search fruits..." />
<ul id="fruitSearchList">
  <li>Apple</li>
  <li>Apricot</li>
  <li>Banana</li>
  <li>Blueberry</li>
  <li>Cherry</li>
  <li>Grapes</li>
  <li>Kiwi</li>
  <li>Mango</li>
  <li>Orange</li>
  <li>Pineapple</li>
</ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="fruitSearchInput" type="text" placeholder="Search fruits..." />
<ul id="fruitSearchList">
  <li>Apple</li>
  <li>Apricot</li>
  <li>Banana</li>
  <li>Blueberry</li>
  <li>Cherry</li>
  <li>Grapes</li>
  <li>Kiwi</li>
  <li>Mango</li>
  <li>Orange</li>
  <li>Pineapple</li>
</ul>`,
      css: ``,
      js: `const fruitSearchInput = document.getElementById("fruitSearchInput");
const fruitSearchItems = document.querySelectorAll("#fruitSearchList li");

fruitSearchInput.addEventListener("input", () => {
  const query = fruitSearchInput.value.toLowerCase();

  fruitSearchItems.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query)
      ? "list-item"
      : "none";
  });
});`,
    },
  },
  {
    id: "city-search-list",
    editorType: "web",
    title: "Challenge 0 — Search a List of Cities",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Search a list of city names and show only the matching cities.",
    requirements: [
      "Add a search input",
      "Show a list of cities",
      "Update the visible cities as the user types",
    ],
    tips: [
      "This is the same search pattern in a new context.",
      "Keep the code calm: read the input, compare text, show or hide items.",
      "Cities are a useful real-world list type.",
    ],
    concepts: ["input events", "DOM filtering", "string matching", "textContent"],
    suggestedApproach: [
      "Create one input and a short city list.",
      "Select the input and all list items.",
      "Listen for the input event.",
      "Show cities that include the typed text and hide the others.",
    ],
    commonMistakes: [
      "Using the wrong selector for the list items",
      "Not updating the list on every keystroke",
      "Comparing the raw strings without normalizing them",
    ],
    expectedOutcome:
      "A city list that filters instantly while the user types.",
    starter: {
      html: `<input id="citySearchInput" type="text" placeholder="Search cities..." />
<ul id="cityList">
  <li>London</li>
  <li>Madrid</li>
  <li>Paris</li>
  <li>Rome</li>
  <li>Tokyo</li>
</ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="citySearchInput" type="text" placeholder="Search cities..." />
<ul id="cityList">
  <li>London</li>
  <li>Madrid</li>
  <li>Paris</li>
  <li>Rome</li>
  <li>Tokyo</li>
</ul>`,
      css: ``,
      js: `const citySearchInput = document.getElementById("citySearchInput");
const cityItems = document.querySelectorAll("#cityList li");

citySearchInput.addEventListener("input", () => {
  const query = citySearchInput.value.toLowerCase();

  cityItems.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query)
      ? "list-item"
      : "none";
  });
});`,
    },
  },
  {
    id: "movie-search-list",
    editorType: "web",
    title: "Challenge 0 — Search a List of Movies",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Search a list of movie titles and show only the matching results.",
    requirements: [
      "Add a search input",
      "Show a list of movies",
      "Search the list while the user types",
    ],
    tips: [
      "Movies are another good way to repeat the same search pattern.",
      "The key idea is still input -> compare text -> update UI.",
      "Use includes() so partial titles still work.",
    ],
    concepts: ["input events", "includes()", "DOM filtering", "live feedback"],
    suggestedApproach: [
      "Create a movie list and search input.",
      "Listen for input changes.",
      "Compare the typed query against each movie title.",
      "Hide titles that do not match.",
    ],
    commonMistakes: [
      "Matching only exact titles",
      "Forgetting to update the UI after the comparison",
      "Typing logic that works for one movie but not the full list",
    ],
    expectedOutcome:
      "A simple movie search list that responds immediately to typing.",
    starter: {
      html: `<input id="movieSearchInput" type="text" placeholder="Search movies..." />
<ul id="movieList">
  <li>Inception</li>
  <li>Interstellar</li>
  <li>Arrival</li>
  <li>Whiplash</li>
  <li>Parasite</li>
</ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="movieSearchInput" type="text" placeholder="Search movies..." />
<ul id="movieList">
  <li>Inception</li>
  <li>Interstellar</li>
  <li>Arrival</li>
  <li>Whiplash</li>
  <li>Parasite</li>
</ul>`,
      css: ``,
      js: `const movieSearchInput = document.getElementById("movieSearchInput");
const movieItems = document.querySelectorAll("#movieList li");

movieSearchInput.addEventListener("input", () => {
  const query = movieSearchInput.value.toLowerCase();

  movieItems.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query)
      ? "list-item"
      : "none";
  });
});`,
    },
  },
  {
    id: "case-insensitive-book-search",
    editorType: "web",
    title: "Challenge 0 — Case-Insensitive Search",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Search book titles even when the user types with a different letter case.",
    requirements: [
      "Add a search input",
      "Show a list of books with mixed capital letters",
      "Make the search case-insensitive",
      "Update the visible results as the user types",
    ],
    tips: [
      "toLowerCase() on both values usually solves this cleanly.",
      "This challenge makes the rule explicit so learners notice it.",
      "Mixed-case titles are useful for testing.",
    ],
    concepts: ["toLowerCase()", "string matching", "DOM filtering", "input events"],
    suggestedApproach: [
      "Create the input and mixed-case book titles.",
      "Read the query on the input event.",
      "Lowercase both the query and each title before comparing.",
      "Hide non-matching books.",
    ],
    commonMistakes: [
      "Lowercasing only the input but not the item text",
      "Keeping a case-sensitive comparison by accident",
      "Testing only one word and assuming the logic works for all titles",
    ],
    expectedOutcome:
      "A book search that still works whether the user types uppercase, lowercase, or a mix of both.",
    starter: {
      html: `<input id="bookSearchInput" type="text" placeholder="Search books..." />
<ul id="bookList">
  <li>The Hobbit</li>
  <li>clean Code</li>
  <li>JavaScript: The Good Parts</li>
  <li>Atomic Habits</li>
  <li>deep Work</li>
</ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="bookSearchInput" type="text" placeholder="Search books..." />
<ul id="bookList">
  <li>The Hobbit</li>
  <li>clean Code</li>
  <li>JavaScript: The Good Parts</li>
  <li>Atomic Habits</li>
  <li>deep Work</li>
</ul>`,
      css: ``,
      js: `const bookSearchInput = document.getElementById("bookSearchInput");
const bookItems = document.querySelectorAll("#bookList li");

bookSearchInput.addEventListener("input", () => {
  const query = bookSearchInput.value.toLowerCase();

  bookItems.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query)
      ? "list-item"
      : "none";
  });
});`,
    },
  },
  {
    id: "username-search-filter",
    editorType: "web",
    title: "Challenge 0 — Search Users by Username",
    difficulty: "Easy",
    category: "JavaScript + DOM",
    goal: "Search a list of usernames and show only the matching users.",
    requirements: [
      "Add a search input",
      "Show usernames in the UI",
      "Search by username while the user types",
      "Make the matching case-insensitive",
    ],
    tips: [
      "Usernames feel closer to a real product than generic words.",
      "You can show them in list items or small cards.",
      "Keep the comparison case-insensitive for a better user experience.",
    ],
    concepts: ["input events", "username search", "case-insensitive matching", "DOM updates"],
    suggestedApproach: [
      "Create the input and a short user list.",
      "Listen for the input event.",
      "Compare the typed value against each username.",
      "Hide usernames that do not match the current query.",
    ],
    commonMistakes: [
      "Searching the wrong text instead of the username value",
      "Forgetting lowercase matching",
      "Updating the logic but not the rendered visibility",
    ],
    expectedOutcome:
      "A username search that feels like the first step toward a real admin or community interface.",
    starter: {
      html: `<input id="userSearchInput" type="text" placeholder="Search usernames..." />
<ul id="userSearchList">
  <li>@maria_dev</li>
  <li>@frontend_lee</li>
  <li>@sofiacodes</li>
  <li>@nico_ui</li>
  <li>@buildwithana</li>
</ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="userSearchInput" type="text" placeholder="Search usernames..." />
<ul id="userSearchList">
  <li>@maria_dev</li>
  <li>@frontend_lee</li>
  <li>@sofiacodes</li>
  <li>@nico_ui</li>
  <li>@buildwithana</li>
</ul>`,
      css: ``,
      js: `const userSearchInput = document.getElementById("userSearchInput");
const userItems = document.querySelectorAll("#userSearchList li");

userSearchInput.addEventListener("input", () => {
  const query = userSearchInput.value.toLowerCase();

  userItems.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query)
      ? "list-item"
      : "none";
  });
});`,
    },
  },
  {
    id: "no-results-search-state",
    editorType: "web",
    title: "Challenge 0 — No Results Found State",
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
    title: "Challenge 0 — Clear the Search",
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
    title: "Challenge 0 — Make Matching Fruits Bold",
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
    title: "Challenge 0 — Search Cards Instead of List Items",
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
    title: "Challenge 0 — Filter Products by Name and Price",
    difficulty: "Medium",
    category: "JavaScript + DOM",
    goal: "Filter a product list using both a search input and a maximum price input.",
    requirements: [
      "Add a name search input",
      "Add a maximum price input",
      "Filter products by name and price",
      "Render the filtered products on the page",
    ],
    tips: [
      "This is the first mini step from simple search toward multi-filter UI.",
      "Use an array of product objects and derive the visible products from the filters.",
      "Render again whenever either input changes.",
    ],
    concepts: ["arrays", "filter()", "input events", "rendering data"],
    suggestedApproach: [
      "Create a products array with name and price.",
      "Add the two inputs and one output area.",
      "Write a render function that filters the products array.",
      "Call render whenever either input value changes.",
    ],
    commonMistakes: [
      "Filtering by name but forgetting the price check",
      "Comparing the price input as a string instead of a number",
      "Updating the data but not re-rendering the visible products",
    ],
    expectedOutcome:
      "A small but realistic multi-filter product search interface.",
    starter: {
      html: `<input id="productNameInput" type="text" placeholder="Search products..." />
<input id="maxPriceInput" type="number" placeholder="Max price" />
<ul id="filteredProductList"></ul>`,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<input id="productNameInput" type="text" placeholder="Search products..." />
<input id="maxPriceInput" type="number" placeholder="Max price" />
<ul id="filteredProductList"></ul>`,
      css: ``,
      js: `const productNameInput = document.getElementById("productNameInput");
const maxPriceInput = document.getElementById("maxPriceInput");
const filteredProductList = document.getElementById("filteredProductList");

const lessonProducts = [
  { name: "Keyboard", price: 40 },
  { name: "Monitor", price: 180 },
  { name: "Mouse", price: 25 },
  { name: "Laptop Stand", price: 55 },
];

function renderFilteredProducts() {
  const query = productNameInput.value.toLowerCase();
  const maxPrice = Number(maxPriceInput.value) || Infinity;

  const visibleProducts = lessonProducts.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(query);
    const matchesPrice = product.price <= maxPrice;

    return matchesName && matchesPrice;
  });

  filteredProductList.innerHTML = visibleProducts
    .map((product) => "<li>" + product.name + " - £" + product.price + "</li>")
    .join("");
}

productNameInput.addEventListener("input", renderFilteredProducts);
maxPriceInput.addEventListener("input", renderFilteredProducts);

renderFilteredProducts();`,
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
    id: "password-visibility-toggle",
    editorType: "web",
    title: "Challenge 0 — Password Show / Hide",
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
    title: "Challenge 0 — Button Click Counter",
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
    id: "prevent-duplicate-items",
    editorType: "web",
    title: "Challenge 0 — Prevent Duplicate Items",
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
      "Render the list again after each valid change.",
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
  itemList.innerHTML = topics.map((topic) => "<li>" + topic + "</li>").join("");
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
    title: "Challenge 0 — Simple Contact Form Validation",
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
    id: "add-goal-to-list",
    editorType: "web",
    title: "Challenge 0 — Add Item to a List",
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
    id: "remove-saved-item",
    editorType: "web",
    title: "Challenge 0 — Remove Item from a List",
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
    id: "password-rules-validation",
    editorType: "web",
    title: "Challenge 0 — Password Validation Rules",
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
    id: "restaurant-tabs-panel",
    editorType: "web",
    title: "Challenge 0 — Tabs: About / Menu / Contact",
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
    id: "async-save-button",
    editorType: "web",
    title: "Challenge 0 — Async Save Button",
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
    id: "render-users-from-array",
    editorType: "web",
    title: "Challenge 25 — Render Users from an Array",
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
    title: "Challenge 26 — Todo Actions with Event Delegation",
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
    id: "form-data-preview",
    editorType: "web",
    title: "Challenge 27 — Form Data Preview",
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
    id: "dropdown-menu-toggle",
    editorType: "web",
    title: "Challenge 0 — Dropdown Menu Toggle",
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
    title: "Challenge 28 — Async Product Search",
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
    title: "Challenge 29 — Paginated Table",
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
    title: "Challenge 30 — KPI Dashboard Calculator",
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
    title: "Challenge 31 — Destructure a Profile Card",
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
    title: "Challenge 0 — Merge Settings with Spread",
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
    id: "switch-role-permissions",
    editorType: "web",
    title: "Challenge 32 — Role Permissions with switch",
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
    id: "try-catch-json-parser",
    editorType: "web",
    title: "Challenge 33 — Safe JSON Parser",
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
    id: "closure-counter-factory",
    editorType: "web",
    title: "Challenge 34 — Closure Counter Factory",
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
    title: "Challenge 35 — Event Loop Order",
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
    id: "fetch-users-status-codes",
    editorType: "web",
    title: "Challenge 36 — Fetch Users and Check Status",
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
    title: "Challenge 37 — POST JSON with Headers",
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
    title: "Challenge 38 — Build Query Parameters",
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
    title: "Challenge 39 — Guard Against Stale Search Results",
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
    title: "Challenge 40 — Backend Request Flow",
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
