export const rookieChallenges = [
  {
    id: "styled-heading",
    editorType: "web",
    title: "Challenge 1 — Styled Heading",
    difficulty: "Easy",
    category: "HTML + CSS",
    goal: "Create an h1 heading with a red background, rounded corners, and a 1px black border.",
    requirements: [
      "Add an h1 element",
      "Give it a red background",
      "Add a 1px solid black border",
      "Round the corners",
      "Add some padding so it looks neat",
    ],
    tips: [
      "You need an h1 element in the HTML.",
      "Use background or background-color for the red background.",
      "Use border-radius to round the corners.",
      "Padding will make the heading look much better.",
    ],
    concepts: [
      "HTML headings",
      "background-color",
      "border",
      "border-radius",
      "padding",
    ],
    suggestedApproach: [
      "Start by creating an h1 element in the HTML.",
      "Give the heading a class name.",
      "Use CSS to add a red background and black border.",
      "Finish by adding border-radius and padding.",
    ],
    commonMistakes: [
      "Using text color instead of background color",
      "Forgetting padding",
      "Adding rounded corners but forgetting the border",
    ],
    expectedOutcome:
      "A clear heading with a red background, black border, rounded corners, and enough padding to look neat.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<h1 class="title">Welcome to Frontend Practice Lab</h1>`,
      css: `.title {
  display: inline-block;
  background: red;
  border: 1px solid black;
  border-radius: 16px;
  padding: 16px 24px;
}`,
      js: ``,
    },
  },
  {
    id: "styled-button",
    editorType: "web",
    title: "Challenge 2 — Styled Button",
    difficulty: "Easy",
    category: "HTML + CSS",
    goal: "Create a button with padding, rounded corners, and a hover effect.",
    requirements: [
      "Add a button",
      "Add padding",
      "Round the corners",
      "Give it a background color",
      "Add a hover effect",
    ],
    tips: [
      "Start by creating a button element.",
      "Padding makes buttons feel clickable.",
      "Use :hover to change the style when the mouse is over the button.",
    ],
    concepts: [
      "button elements",
      "padding",
      "border-radius",
      "background-color",
      "hover states",
    ],
    suggestedApproach: [
      "Start with a button element in the HTML.",
      "Give it a class name so you can style it.",
      "Add padding, background color, and rounded corners.",
      "Use :hover to create a simple interaction.",
    ],
    commonMistakes: [
      "Forgetting the hover state",
      "Using too little padding",
      "Leaving the button with default browser styling only",
    ],
    expectedOutcome:
      "A button that feels clickable, has spacing inside, rounded corners, a visible background, and a hover effect.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button class="main-btn">Click Me</button>`,
      css: `.main-btn {
  padding: 14px 22px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease;
}

.main-btn:hover {
  background: #1d4ed8;
}`,
      js: ``,
    },
  },
  {
    id: "centered-box",
    editorType: "web",
    title: "Challenge 3 — Centered Box",
    difficulty: "Easy",
    category: "HTML + CSS",
    goal: "Create a box centered in the middle of the screen.",
    requirements: [
      "Create one box",
      "Center it horizontally and vertically",
      "Give it width and height",
      "Add a background color",
    ],
    tips: [
      "You can center things with flexbox.",
      "The page container will need full height.",
      "Use align-items and justify-content.",
    ],
    concepts: [
      "flexbox",
      "align-items",
      "justify-content",
      "height",
      "background-color",
    ],
    suggestedApproach: [
      "Create a wrapper element for the page.",
      "Add one box inside the wrapper.",
      "Use flexbox on the wrapper to center the box.",
      "Set a width, height, and background color on the box.",
    ],
    commonMistakes: [
      "Centering only horizontally but not vertically",
      "Forgetting to give the parent full height",
      "Not setting width and height on the box",
    ],
    expectedOutcome:
      "A single box displayed exactly in the middle of the screen with a visible size and background color.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="page">
  <div class="box"></div>
</div>`,
      css: `.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  width: 180px;
  height: 180px;
  background: #8b5cf6;
  border-radius: 20px;
}`,
      js: ``,
    },
  },
  {
    id: "profile-card",
    editorType: "web",
    title: "Challenge 4 — Profile Card",
    difficulty: "Easy",
    category: "HTML + CSS",
    goal: "Build a simple profile card with a name and short description.",
    requirements: [
      "Create a card container",
      "Add a title",
      "Add a short paragraph",
      "Add padding and rounded corners",
      "Center the card on the page",
    ],
    tips: [
      "Wrap your content in a div for the card.",
      "Add padding so the content has breathing room.",
      "A border-radius helps make the card look modern.",
    ],
    concepts: [
      "containers",
      "headings",
      "paragraphs",
      "padding",
      "border-radius",
    ],
    suggestedApproach: [
      "Create a page wrapper and a card container.",
      "Add a heading for the name.",
      "Add a paragraph for the description.",
      "Use CSS to center the card and style it with spacing.",
    ],
    commonMistakes: [
      "Forgetting to center the card",
      "Putting text directly on the page without a card container",
      "Not adding enough padding inside the card",
    ],
    expectedOutcome:
      "A neat card centered on the page with a clear name, a short description, and comfortable spacing.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="page">
  <div class="card">
    <h2>Nico</h2>
    <p>Frontend developer in training, building projects and improving every day.</p>
  </div>
</div>`,
      css: `.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 320px;
  background: white;
  padding: 24px;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.card h2 {
  margin-top: 0;
}`,
      js: ``,
    },
  },
  {
    id: "simple-navbar",
    editorType: "web",
    title: "Challenge 5 — Simple Navbar",
    difficulty: "Easy",
    category: "HTML + CSS",
    goal: "Create a navbar with a logo on the left and links on the right.",
    requirements: [
      "Add a navigation bar",
      "Place a logo/title on the left",
      "Place at least 3 links on the right",
      "Use flexbox for layout",
    ],
    tips: [
      "A nav element is a good choice here.",
      "Flexbox is useful for spacing items apart.",
      "Use gap to create space between links.",
    ],
    concepts: ["nav elements", "flexbox", "links", "gap", "layout alignment"],
    suggestedApproach: [
      "Create a nav element.",
      "Add a logo section on the left.",
      "Add a links wrapper on the right with at least 3 links.",
      "Use flexbox to space the two sides apart.",
    ],
    commonMistakes: [
      "Not using flexbox for alignment",
      "Forgetting spacing between links",
      "Placing all content on one side instead of left and right",
    ],
    expectedOutcome:
      "A simple horizontal navbar with a logo on the left and clearly spaced links on the right.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<nav class="navbar">
  <div class="logo">MySite</div>
  <div class="links">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`,
      css: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  background: #0f172a;
}

.logo {
  color: white;
  font-weight: bold;
  font-size: 20px;
}

.links {
  display: flex;
  gap: 20px;
}

.links a {
  color: white;
  text-decoration: none;
}`,
      js: ``,
    },
  },
  {
    id: "center-circle",
    editorType: "web",
    title: "Challenge 6 — Centered Circle",
    difficulty: "Easy",
    category: "HTML + CSS",
    goal: "Create a circle in the exact center of the screen.",
    requirements: [
      "The circle should be centered vertically and horizontally",
      "The circle should be 120px by 120px",
      "It should be perfectly round",
      "Use clean CSS layout",
    ],
    tips: [
      "You may want to use flexbox on the page container.",
      "A circle can be made with border-radius: 50%.",
      "Give the parent a full viewport height.",
      "You will probably need a container div and a circle div.",
    ],
    concepts: [
      "flexbox",
      "border-radius: 50%",
      "height and width",
      "viewport height",
      "centering",
    ],
    suggestedApproach: [
      "Create a page wrapper and a circle element.",
      "Use flexbox on the wrapper to center the circle.",
      "Set equal width and height on the circle.",
      "Use border-radius: 50% to make it round.",
    ],
    commonMistakes: [
      "Using different width and height values",
      "Forgetting border-radius: 50%",
      "Not centering vertically and horizontally",
    ],
    expectedOutcome:
      "A perfectly round 120px circle placed exactly in the center of the screen.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="page">
  <div class="circle"></div>
</div>`,
      css: `.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f172a;
}

.circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #38bdf8, #8b5cf6);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}`,
      js: ``,
    },
  },
  {
    id: "two-column-layout",
    editorType: "web",
    title: "Challenge 7 — Two Column Layout",
    difficulty: "Easy",
    category: "HTML + CSS",
    goal: "Create a page with two boxes side by side.",
    requirements: [
      "Create 2 boxes",
      "Show them side by side",
      "Add spacing between them",
      "Give both boxes equal width",
    ],
    tips: [
      "Use a parent wrapper around both boxes.",
      "Flexbox is a good choice for side-by-side layouts.",
      "Gap can help create spacing.",
    ],
    concepts: [
      "flexbox",
      "side-by-side layout",
      "gap",
      "equal width",
      "wrappers",
    ],
    suggestedApproach: [
      "Create a parent layout wrapper.",
      "Place two box elements inside it.",
      "Use display: flex on the wrapper.",
      "Use gap and flex values so both boxes share the space evenly.",
    ],
    commonMistakes: [
      "Forgetting the parent wrapper",
      "Not adding spacing between the boxes",
      "Giving one box a different width by mistake",
    ],
    expectedOutcome:
      "Two equal-sized boxes displayed next to each other with clear spacing between them.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="layout">
  <div class="box">Left</div>
  <div class="box">Right</div>
</div>`,
      css: `.layout {
  display: flex;
  gap: 20px;
}

.box {
  flex: 1;
  min-height: 180px;
  background: #e2e8f0;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
      js: ``,
    },
  },
  {
    id: "login-form-ui",
    editorType: "web",
    title: "Challenge 8 — Login Form UI",
    difficulty: "Medium",
    category: "HTML + CSS",
    goal: "Build a login form with email input, password input, and a submit button.",
    requirements: [
      "Add an email input",
      "Add a password input",
      "Add a button",
      "Wrap them inside a card or form container",
    ],
    tips: [
      "Use a form element or a div wrapper.",
      "Input fields should usually take full width.",
      "Spacing between fields makes forms easier to read.",
    ],
    concepts: ["forms", "input elements", "buttons", "form layout", "spacing"],
    suggestedApproach: [
      "Create a wrapper or page container.",
      "Add a form or card container.",
      "Place the email input, password input, and button inside it.",
      "Use spacing and padding to make the form clean and readable.",
    ],
    commonMistakes: [
      "Placing the fields without a container",
      "Forgetting one of the required inputs",
      "Not spacing the form elements properly",
    ],
    expectedOutcome:
      "A simple, clean login form with an email field, password field, and submit button grouped together in a card-like layout.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="page">
  <form class="login-form">
    <h2>Login</h2>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button type="submit">Sign In</button>
  </form>
</div>`,
      css: `.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  width: 320px;
  background: white;
  padding: 24px;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.login-form input,
.login-form button {
  padding: 12px;
  font-size: 16px;
}`,
      js: ``,
    },
  },
  {
    id: "product-card",
    editorType: "web",
    title: "Challenge 9 — Product Card",
    difficulty: "Medium",
    category: "HTML + CSS",
    goal: "Create a product card with a title, description, price, and buy button.",
    requirements: [
      "Create a card container",
      "Add a product title",
      "Add a short description",
      "Add a price",
      "Add a button",
    ],
    tips: [
      "Think of this as a reusable e-commerce UI card.",
      "Use spacing between each section.",
      "Buttons should be visually different from text.",
    ],
    concepts: [
      "card layout",
      "typography",
      "buttons",
      "spacing",
      "pricing display",
    ],
    suggestedApproach: [
      "Create a product card wrapper.",
      "Add a title and short description.",
      "Add a separate price element so it stands out.",
      "Finish with a buy button and style the spacing clearly.",
    ],
    commonMistakes: [
      "Not making the price stand out visually",
      "Adding text but forgetting the button",
      "Crowding the card with too little spacing",
    ],
    expectedOutcome:
      "A clear product card with a product title, description, visible price, and a buy button that stands out.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="page">
  <div class="product-card">
    <h2>Wireless Headphones</h2>
    <p>Comfortable headphones with clean sound and long battery life.</p>
    <div class="price">£79.99</div>
    <button>Buy Now</button>
  </div>
</div>`,
      css: `.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card {
  width: 340px;
  background: white;
  padding: 24px;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.price {
  margin: 16px 0;
  font-size: 24px;
  font-weight: bold;
}

button {
  padding: 12px 18px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}`,
      js: ``,
    },
  },
  {
    id: "toggle-theme",
    editorType: "web",
    title: "Challenge 10 — Toggle Theme Button",
    difficulty: "Medium",
    category: "HTML + CSS + JS",
    goal: "Build a button that toggles the page between light mode and dark mode.",
    requirements: [
      "Add a button",
      "Change the page background color when clicked",
      "Change the text from Light Mode to Dark Mode",
    ],
    tips: [
      "Use document.body or a wrapper element.",
      "You can toggle a class with classList.toggle().",
      "You can also update button text after each click.",
      "You will likely need a wrapper element, a button, and a click event.",
    ],
    concepts: [
      "event listeners",
      "class toggling",
      "button text updates",
      "dark mode",
      "DOM selection",
    ],
    suggestedApproach: [
      "Create a wrapper element and a button.",
      "Select both elements in JavaScript.",
      "Add a click event listener to the button.",
      "Toggle classes and update the button text each time it is clicked.",
    ],
    commonMistakes: [
      "Changing the background but forgetting the button text",
      "Selecting the wrong element in JavaScript",
      "Using JS without adding a click event listener",
    ],
    expectedOutcome:
      "A page that switches between light and dark backgrounds when the button is clicked, while the button text updates to match the current mode.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="page light" id="page">
  <button id="themeBtn">Dark Mode</button>
</div>`,
      css: `.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  transition: 0.3s ease;
}

.page.light {
  background: #f8fafc;
}

.page.dark {
  background: #0f172a;
}

button {
  padding: 14px 22px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  background: #2563eb;
  color: white;
}`,
      js: `const page = document.getElementById("page");
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  page.classList.toggle("dark");
  page.classList.toggle("light");

  if (page.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});`,
    },
  },
  {
    id: "counter-app",
    editorType: "web",
    title: "Challenge 11 — Counter App",
    difficulty: "Medium",
    category: "HTML + CSS + JS",
    goal: "Build a counter with increase and decrease buttons.",
    requirements: [
      "Show a number on the page",
      "Add an increase button",
      "Add a decrease button",
      "Update the number when buttons are clicked",
    ],
    tips: [
      "You need an element to display the number.",
      "JavaScript can update text with textContent.",
      "You will need a variable to store the current count.",
    ],
    concepts: [
      "variables",
      "event listeners",
      "textContent",
      "DOM selection",
      "state changes",
    ],
    suggestedApproach: [
      "Add an element to display the current count.",
      "Add increase and decrease buttons.",
      "Create a variable to store the count.",
      "Use click event listeners to update the value and display it.",
    ],
    commonMistakes: [
      "Updating the variable but not the text on the page",
      "Forgetting one of the two buttons",
      "Using text instead of a number variable for the count",
    ],
    expectedOutcome:
      "A working counter where clicking one button increases the number and the other decreases it, with the displayed value updating immediately.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="counter-card">
  <h1 id="count">0</h1>
  <div class="actions">
    <button id="decreaseBtn">-</button>
    <button id="increaseBtn">+</button>
  </div>
</div>`,
      css: `.counter-card {
  background: white;
  padding: 24px;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

button {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: white;
  font-size: 20px;
  cursor: pointer;
}`,
      js: `const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count -= 1;
  countEl.textContent = count;
});`,
    },
  },
  {
    id: "show-hide-password",
    editorType: "web",
    title: "Challenge 12 — Show / Hide Password",
    difficulty: "Medium",
    category: "HTML + CSS + JS",
    goal: "Build a password input with a button that shows or hides the password.",
    requirements: [
      "Add a password input",
      "Add a button",
      "Toggle input type between password and text",
      "Update the button text",
    ],
    tips: [
      "Input type can be changed with JavaScript.",
      "You can read and update attributes with JS.",
      "Check whether the input type is password or text.",
    ],
    concepts: [
      "input attributes",
      "event listeners",
      "conditional logic",
      "DOM selection",
      "button text updates",
    ],
    suggestedApproach: [
      "Create a password input and a button.",
      "Select both elements in JavaScript.",
      "Add a click event listener to the button.",
      "Check the current input type and switch it between password and text while updating the button label.",
    ],
    commonMistakes: [
      "Changing the button text but not the input type",
      "Checking the wrong input type value",
      "Forgetting to update the button label after toggling",
    ],
    expectedOutcome:
      "A password field with a button that lets the user switch between hidden and visible password text, while the button label updates correctly.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="password-box">
  <input id="passwordInput" type="password" placeholder="Enter password" />
  <button id="togglePasswordBtn">Show Password</button>
</div>`,
      css: `.password-box {
  display: flex;
  gap: 12px;
  background: white;
  padding: 20px;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

input,
button {
  padding: 12px;
  font-size: 16px;
}`,
      js: `const passwordInput = document.getElementById("passwordInput");
const togglePasswordBtn = document.getElementById("togglePasswordBtn");

togglePasswordBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordBtn.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    togglePasswordBtn.textContent = "Show Password";
  }
});`,
    },
  },
];
