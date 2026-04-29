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
    lesson: {
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
    lesson: {
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
    lesson: {
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
    id: "styled-info-badge",
    editorType: "web",
    title: "Challenge 0 — Styled Info Badge",
    difficulty: "Easy",
    category: "HTML + CSS",
    goal: "Create a small info badge with uppercase text, rounded corners, padding, and a clear background color.",
    requirements: [
      "Add a badge element",
      "Style the badge with padding",
      "Use rounded corners",
      "Give it a visible background color",
      "Make the text look like a label or status tag",
    ],
    tips: [
      "A span works well for a badge.",
      "Small UI pieces still need spacing and hierarchy.",
      "Uppercase text and letter spacing can make labels feel clearer.",
    ],
    concepts: [
      "inline elements",
      "background-color",
      "padding",
      "border-radius",
      "typography",
    ],
    suggestedApproach: [
      "Create one small badge element in the HTML.",
      "Give it a class name so you can target it in CSS.",
      "Add background color, padding, and rounded corners.",
      "Adjust text styling so it feels like a reusable UI label.",
    ],
    commonMistakes: [
      "Leaving the badge with no padding",
      "Using colors with weak contrast",
      "Making the text so large that it stops feeling like a badge",
    ],
    expectedOutcome:
      "A polished badge that could be reused for status labels, tags, or product categories.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<span class="badge">New lesson</span>`,
      css: `.badge {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 999px;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
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
    lesson: {
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
    lesson: {
      title: "Why navbars matter",
      summary:
        "Most websites use navbars because users need a reliable way to move around. On mobile, many navbars become burger menus, which we will learn later.",
      why:
        "A key part of building websites professionally is helping users understand where they are and where they can go next.",
      learnMore:
        "Navbars come in many forms, from very simple restaurant menus to high-tech product dashboards. For now, focus on a basic navbar: a logo or site name on the left, and links on the right. Restaurant websites often use links like Home, About us, and Menu. Links are created with anchor elements, for example <a href=\"#menu\">Menu</a>.",
      examples: [
        "A restaurant navbar might show a logo, Home, About us, and Menu.",
        "A portfolio navbar might show Work, About, and Contact.",
        "A SaaS navbar might show Product, Pricing, Docs, and Login.",
      ],
    },
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
    id: "hero-copy-stack",
    editorType: "web",
    title: "Challenge 0 — Hero Copy Stack",
    difficulty: "Easy",
    category: "HTML + CSS",
    goal: "Build a small hero text block with a heading, paragraph, and button stacked with clean spacing.",
    requirements: [
      "Add a heading",
      "Add a paragraph",
      "Add a button or link button",
      "Stack the content vertically",
      "Use spacing so the section feels intentional",
    ],
    tips: [
      "Use one wrapper for the hero copy.",
      "Vertical layout usually works well with flex-direction: column.",
      "Keep the text width under control so it stays readable.",
    ],
    concepts: [
      "content hierarchy",
      "vertical layout",
      "spacing",
      "buttons",
      "readability",
    ],
    suggestedApproach: [
      "Create one section or div for the hero content.",
      "Add the heading, paragraph, and action.",
      "Use flexbox or margin spacing to separate the elements.",
      "Constrain the width so the copy remains easy to scan.",
    ],
    commonMistakes: [
      "Letting the paragraph stretch too wide",
      "Placing elements without consistent vertical spacing",
      "Making the button look disconnected from the rest of the section",
    ],
    expectedOutcome:
      "A clean hero copy block that could sit inside a landing page or product intro.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section class="hero-copy">
  <h1>Build your first frontend projects with confidence.</h1>
  <p>Practice small challenges, understand the why, and turn repetition into real progress.</p>
  <button>Start learning</button>
</section>`,
      css: `.hero-copy {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;
}

h1,
p {
  margin: 0;
}

p {
  color: #475569;
  line-height: 1.6;
}

button {
  width: fit-content;
  padding: 12px 18px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: white;
  font-weight: 700;
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
  {
    id: "newsletter-signup-ui",
    editorType: "web",
    title: "Challenge 0 — Newsletter Signup UI",
    difficulty: "Medium",
    category: "HTML + CSS",
    goal: "Build a newsletter signup card with a short intro, an email input, and a submit button.",
    requirements: [
      "Add a card or form container",
      "Add a heading and supporting text",
      "Add an email input",
      "Add a submit button",
      "Use spacing so the form looks easy to use",
    ],
    tips: [
      "Even static forms should feel ready for real users.",
      "Inputs usually look better when they share width with the button area.",
      "Short supporting text can explain why the form exists.",
    ],
    concepts: ["forms", "input elements", "buttons", "card layout", "spacing"],
    suggestedApproach: [
      "Start with a form or card wrapper.",
      "Add a heading, paragraph, input, and button.",
      "Use CSS to create breathing room between each element.",
      "Make the whole block feel like one reusable section.",
    ],
    commonMistakes: [
      "Adding the input and button without a clear container",
      "Using uneven spacing between the text and form controls",
      "Making the button too small to feel like a primary action",
    ],
    expectedOutcome:
      "A clean signup card that looks ready for a landing page or product site.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<form class="signup-card">
  <h2>Join the weekly frontend notes</h2>
  <p>One short email each week with practical UI tips and job-ready practice ideas.</p>
  <input type="email" placeholder="you@example.com" />
  <button type="submit">Subscribe</button>
</form>`,
      css: `.signup-card {
  display: grid;
  gap: 14px;
  max-width: 420px;
  padding: 24px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: white;
}

h2,
p {
  margin: 0;
}

p {
  color: #475569;
  line-height: 1.6;
}

input,
button {
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 16px;
}

input {
  border: 1px solid #cbd5e1;
}

button {
  border: none;
  background: #0f172a;
  color: white;
  font-weight: 700;
}`,
      js: ``,
    },
  },
  {
    id: "semantic-article-layout",
    editorType: "web",
    title: "Challenge 13 — Semantic Article Layout",
    difficulty: "Medium",
    category: "HTML + CSS",
    goal: "Build a blog article preview using semantic HTML elements.",
    requirements: [
      "Use an article element",
      "Add a header with a title and author/date metadata",
      "Add a paragraph summary",
      "Add a footer with a Read more link",
      "Style the article so the structure is easy to scan",
    ],
    tips: [
      "Use article for content that can stand on its own.",
      "Small metadata can live inside a header.",
      "Use footer for secondary article actions.",
    ],
    concepts: [
      "semantic HTML",
      "article",
      "header",
      "footer",
      "content hierarchy",
    ],
    suggestedApproach: [
      "Create an article wrapper.",
      "Add a header with h2 and metadata text.",
      "Add a summary paragraph.",
      "Add a footer with a link and style the spacing.",
    ],
    commonMistakes: [
      "Using only generic div elements",
      "Skipping heading hierarchy",
      "Making metadata visually compete with the title",
    ],
    expectedOutcome:
      "A clean article card with semantic structure, clear hierarchy, and a visible link action.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<article class="article-card">
  <header>
    <p class="meta">Frontend Journal • 8 min read</p>
    <h2>How to Think in Components</h2>
  </header>
  <p>
    Learn how to break a user interface into small, reusable pieces before writing code.
  </p>
  <footer>
    <a href="#">Read more</a>
  </footer>
</article>`,
      css: `.article-card {
  max-width: 520px;
  padding: 24px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

.meta {
  margin: 0 0 8px;
  color: #64748b;
  font-size: 14px;
}

h2 {
  margin: 0 0 14px;
}

p {
  line-height: 1.6;
}

a {
  color: #2563eb;
  font-weight: 700;
}`,
      js: ``,
    },
  },
  {
    id: "accessible-form-labels",
    editorType: "web",
    title: "Challenge 14 — Accessible Form Labels",
    difficulty: "Medium",
    category: "HTML + CSS",
    goal: "Create a small contact form where every input has a proper label.",
    requirements: [
      "Add a form element",
      "Add name and email inputs",
      "Add labels connected to their inputs",
      "Add a textarea with a label",
      "Style focus states clearly",
    ],
    tips: [
      "The label for value should match the input id.",
      "Visible labels are easier to use than placeholder-only forms.",
      "Use :focus for keyboard users.",
    ],
    concepts: [
      "forms",
      "labels",
      "id and for attributes",
      "textarea",
      "focus states",
    ],
    suggestedApproach: [
      "Create a form with three field groups.",
      "Give each input an id.",
      "Connect every label using for.",
      "Add spacing and a visible focus outline.",
    ],
    commonMistakes: [
      "Using placeholders instead of labels",
      "Forgetting to connect label and input",
      "Removing focus outlines without replacing them",
    ],
    expectedOutcome:
      "A readable contact form that works well with mouse, keyboard, and assistive technology.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<form class="contact-form">
  <label for="name">Name</label>
  <input id="name" type="text" />

  <label for="email">Email</label>
  <input id="email" type="email" />

  <label for="message">Message</label>
  <textarea id="message"></textarea>

  <button type="submit">Send message</button>
</form>`,
      css: `.contact-form {
  width: min(100%, 420px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  background: white;
  border-radius: 16px;
}

label {
  font-weight: 700;
}

input,
textarea,
button {
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
}

input:focus,
textarea:focus {
  outline: 3px solid #bfdbfe;
  border-color: #2563eb;
}

textarea {
  min-height: 120px;
}

button {
  margin-top: 8px;
  border: none;
  background: #0f766e;
  color: white;
  font-weight: 700;
}`,
      js: ``,
    },
  },
  {
    id: "css-grid-gallery",
    editorType: "web",
    title: "Challenge 15 — CSS Grid Gallery",
    difficulty: "Medium",
    category: "HTML + CSS",
    goal: "Build a responsive image gallery using CSS Grid.",
    requirements: [
      "Create a gallery container",
      "Add at least 6 gallery items",
      "Use CSS Grid",
      "Make the grid responsive",
      "Give every item a consistent height",
    ],
    tips: [
      "repeat(auto-fit, minmax()) is useful for responsive grids.",
      "Use placeholder background colors if you do not have images.",
      "Gap creates clean spacing between items.",
    ],
    concepts: [
      "CSS Grid",
      "responsive layout",
      "repeat()",
      "minmax()",
      "gap",
    ],
    suggestedApproach: [
      "Create a div with class gallery.",
      "Add six child items.",
      "Use grid-template-columns with auto-fit and minmax.",
      "Style each item with height, background, and border-radius.",
    ],
    commonMistakes: [
      "Using fixed columns that break on mobile",
      "Forgetting gap",
      "Letting every item have a different height by accident",
    ],
    expectedOutcome:
      "A responsive gallery that automatically adapts from multiple columns down to one column.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="gallery">
  <div>Project 1</div>
  <div>Project 2</div>
  <div>Project 3</div>
  <div>Project 4</div>
  <div>Project 5</div>
  <div>Project 6</div>
</div>`,
      css: `.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}

.gallery div {
  min-height: 140px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #dbeafe, #ccfbf1);
  color: #0f172a;
  font-weight: 700;
}`,
      js: ``,
    },
  },
  {
    id: "responsive-card-grid",
    editorType: "web",
    title: "Challenge 16 — Responsive Card Grid",
    difficulty: "Medium",
    category: "HTML + CSS",
    goal: "Create a card grid that looks good on mobile and desktop.",
    requirements: [
      "Add at least 3 cards",
      "Use a responsive grid layout",
      "Each card should include a title, text, and link",
      "Cards should stack on small screens",
      "Use consistent spacing",
    ],
    tips: [
      "Use minmax() so cards resize naturally.",
      "Cards need enough padding to feel readable.",
      "Keep links visually distinct.",
    ],
    concepts: [
      "responsive design",
      "card layouts",
      "CSS Grid",
      "spacing",
      "links",
    ],
    suggestedApproach: [
      "Create a section for the card grid.",
      "Add three article cards.",
      "Use grid-template-columns with repeat and minmax.",
      "Style the cards with padding, border, and spacing.",
    ],
    commonMistakes: [
      "Hard-coding widths that overflow mobile screens",
      "Using inconsistent card spacing",
      "Making links look like normal text",
    ],
    expectedOutcome:
      "A responsive set of cards that can be reused for features, services, or portfolio projects.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section class="card-grid">
  <article>
    <h3>HTML</h3>
    <p>Structure pages with meaningful content.</p>
    <a href="#">Practice HTML</a>
  </article>
  <article>
    <h3>CSS</h3>
    <p>Build layouts that adapt across screen sizes.</p>
    <a href="#">Practice CSS</a>
  </article>
  <article>
    <h3>JavaScript</h3>
    <p>Add interaction, state, and data-driven UI.</p>
    <a href="#">Practice JS</a>
  </article>
</section>`,
      css: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

article {
  padding: 22px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}

h3 {
  margin-top: 0;
}

p {
  color: #475569;
  line-height: 1.6;
}

a {
  color: #2563eb;
  font-weight: 700;
}`,
      js: ``,
    },
  },
  {
    id: "dashboard-stats-layout",
    editorType: "web",
    title: "Challenge 17 — Dashboard Stats Layout",
    difficulty: "Medium",
    category: "HTML + CSS",
    goal: "Build a small dashboard row with summary statistic cards.",
    requirements: [
      "Create 4 stat cards",
      "Each card should show a label and number",
      "Use a responsive grid",
      "Make numbers visually prominent",
      "Use consistent alignment and spacing",
    ],
    tips: [
      "Dashboards need clear visual hierarchy.",
      "Use strong typography for numbers.",
      "The same card pattern should work for all stats.",
    ],
    concepts: [
      "dashboard UI",
      "visual hierarchy",
      "responsive grid",
      "typography",
      "card consistency",
    ],
    suggestedApproach: [
      "Create a stats section.",
      "Add four cards with a label and number.",
      "Use grid for layout.",
      "Style numbers larger than labels.",
    ],
    commonMistakes: [
      "Making labels and numbers the same size",
      "Using uneven spacing between cards",
      "Forgetting mobile behavior",
    ],
    expectedOutcome:
      "A dashboard stat row that can be used in admin panels, SaaS dashboards, or portfolio case studies.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section class="stats-grid">
  <article>
    <span>Revenue</span>
    <strong>£12.4k</strong>
  </article>
  <article>
    <span>Users</span>
    <strong>1,280</strong>
  </article>
  <article>
    <span>Orders</span>
    <strong>342</strong>
  </article>
  <article>
    <span>Conversion</span>
    <strong>8.7%</strong>
  </article>
</section>`,
      css: `.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}

article {
  padding: 20px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}

span {
  display: block;
  margin-bottom: 10px;
  color: #64748b;
  font-size: 14px;
  font-weight: 700;
}

strong {
  font-size: 30px;
}`,
      js: ``,
    },
  },
  {
    id: "responsive-feature-strip",
    editorType: "web",
    title: "Challenge 0 — Responsive Feature Strip",
    difficulty: "Medium",
    category: "HTML + CSS",
    goal: "Build a responsive strip of feature cards that wraps cleanly on smaller screens.",
    requirements: [
      "Create 3 feature cards",
      "Each card should have a heading and short description",
      "Use grid or flexbox for the layout",
      "Make the section adapt on smaller screens",
      "Keep spacing and alignment consistent",
    ],
    tips: [
      "This is a good place to practice repeatable card structure.",
      "Grid with minmax() makes responsive behavior easier.",
      "Treat all cards like part of the same design system.",
    ],
    concepts: [
      "responsive grid",
      "feature cards",
      "repeatable UI",
      "spacing consistency",
      "layout structure",
    ],
    suggestedApproach: [
      "Create one section wrapper and three cards inside it.",
      "Add heading and paragraph content to each card.",
      "Use CSS grid or flexbox to place the cards side by side.",
      "Add responsive rules so the layout still works on narrow screens.",
    ],
    commonMistakes: [
      "Using different spacing in each card",
      "Forgetting to test the layout on a narrower width",
      "Making the text hierarchy too weak to scan quickly",
    ],
    expectedOutcome:
      "A polished feature section that could sit below a landing page hero or service intro.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section class="feature-strip">
  <article>
    <h3>Understand</h3>
    <p>Learn the key idea in a short and clear way.</p>
  </article>
  <article>
    <h3>Repeat</h3>
    <p>Practice the same skill in a few small variations.</p>
  </article>
  <article>
    <h3>Build</h3>
    <p>Turn the pattern into a feature that feels real.</p>
  </article>
</section>`,
      css: `.feature-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

article {
  padding: 20px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: white;
}

h3,
p {
  margin: 0;
}

h3 {
  margin-bottom: 10px;
}

p {
  color: #475569;
  line-height: 1.6;
}`,
      js: ``,
    },
  },
  {
    id: "portfolio-section-capstone",
    editorType: "web",
    title: "Challenge 18 — Portfolio Section Capstone",
    difficulty: "Hard",
    category: "HTML + CSS",
    goal: "Build a polished portfolio project section with responsive cards.",
    requirements: [
      "Create a section with a heading and intro text",
      "Add at least 3 project cards",
      "Each project should include title, description, tags, and a link",
      "Use responsive layout",
      "Make the section look portfolio-ready",
    ],
    tips: [
      "This should combine semantic structure, card layout, and responsive CSS.",
      "Use tags to show technologies.",
      "Think about how a recruiter would scan the section.",
    ],
    concepts: [
      "portfolio UI",
      "responsive cards",
      "semantic sections",
      "tags",
      "capstone layout",
    ],
    suggestedApproach: [
      "Create a section with a header.",
      "Build one project card first.",
      "Duplicate the pattern for three projects.",
      "Use responsive grid and polished spacing.",
    ],
    commonMistakes: [
      "Only listing project names without context",
      "Forgetting technology tags",
      "Building a layout that only works at one screen size",
    ],
    expectedOutcome:
      "A professional portfolio section that could become part of a real developer portfolio.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<section class="portfolio-section">
  <header>
    <p>Selected work</p>
    <h2>Frontend projects</h2>
  </header>

  <div class="project-grid">
    <article>
      <h3>Learning Dashboard</h3>
      <p>A dashboard for tracking course progress and completed lessons.</p>
      <div class="tags">
        <span>HTML</span>
        <span>CSS</span>
      </div>
      <a href="#">View project</a>
    </article>
    <article>
      <h3>Product Cards</h3>
      <p>A responsive ecommerce card layout with clear pricing and actions.</p>
      <div class="tags">
        <span>Grid</span>
        <span>Responsive</span>
      </div>
      <a href="#">View project</a>
    </article>
    <article>
      <h3>Contact Form</h3>
      <p>An accessible form layout with labels, focus states, and clean spacing.</p>
      <div class="tags">
        <span>Forms</span>
        <span>A11y</span>
      </div>
      <a href="#">View project</a>
    </article>
  </div>
</section>`,
      css: `.portfolio-section {
  padding: 32px;
  background: #f8fafc;
}

header p {
  margin: 0 0 8px;
  color: #0f766e;
  font-weight: 800;
  text-transform: uppercase;
}

h2 {
  margin: 0 0 24px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

article {
  padding: 22px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 16px 0;
}

.tags span {
  padding: 6px 10px;
  border-radius: 999px;
  background: #e0f2fe;
  font-size: 13px;
  font-weight: 700;
}

a {
  color: #2563eb;
  font-weight: 800;
}`,
      js: ``,
    },
  },
  {
    id: "intro-block-capstone",
    editorType: "web",
    title: "Capstone — Styled Intro Block",
    difficulty: "Easy",
    category: "HTML + CSS",
    goal: "Build a polished intro block with a heading, paragraph, and call-to-action button inside a styled section.",
    requirements: [
      "Use a semantic section",
      "Add a heading and paragraph",
      "Add a button",
      "Use padding and rounded corners",
      "Add a background color",
      "Center or frame the block neatly on the page",
    ],
    tips: [
      "Think of this as a mini hero card for a portfolio or landing page.",
      "Start with the section structure before styling the inside content.",
      "Use spacing to make the text and button feel intentional.",
    ],
    concepts: [
      "semantic HTML",
      "headings",
      "paragraphs",
      "button elements",
      "padding",
      "border-radius",
    ],
    suggestedApproach: [
      "Create a page wrapper and one semantic section.",
      "Add a heading, paragraph, and button inside the section.",
      "Use CSS to center the section and give it spacing, background, and rounded corners.",
      "Adjust typography and spacing until the block feels clean and readable.",
    ],
    commonMistakes: [
      "Adding the content without a clear wrapper",
      "Using too little spacing so the block feels cramped",
      "Styling the button and forgetting the section container",
    ],
    expectedOutcome:
      "A clean intro block that could sit at the top of a landing page or portfolio.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<main class="page">
  <section class="intro-block">
    <p class="eyebrow">Frontend practice</p>
    <h1>Build stronger layout instincts</h1>
    <p>
      Learn how structure, spacing, and styling work together by building small
      sections that feel real.
    </p>
    <button>Start learning</button>
  </section>
</main>`,
      css: `.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #eef4ff;
}

.intro-block {
  max-width: 560px;
  padding: 32px;
  border-radius: 24px;
  background: white;
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.12);
}

.eyebrow {
  margin: 0 0 12px;
  color: #2563eb;
  font-weight: 800;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 14px;
}

p {
  margin: 0 0 18px;
  line-height: 1.6;
}

button {
  padding: 12px 18px;
  border: none;
  border-radius: 999px;
  background: #2563eb;
  color: white;
  font-weight: 700;
}`,
      js: ``,
    },
  },
  {
    id: "landing-header-capstone",
    editorType: "web",
    title: "Capstone — Landing Header Section",
    difficulty: "Easy",
    category: "HTML + CSS",
    goal: "Build a landing header with a navbar, hero copy, call-to-action button, and feature cards.",
    requirements: [
      "Add a navigation bar",
      "Add a heading, paragraph, and button",
      "Add at least 2 cards",
      "Use flexbox or grid for layout",
      "Add spacing between sections",
      "Keep the layout responsive",
    ],
    tips: [
      "Build the navbar, hero, and card area as separate layout blocks.",
      "Use one main wrapper to control spacing and max width.",
      "Grid is a simple way to keep the cards tidy on different screen sizes.",
    ],
    concepts: [
      "nav elements",
      "flexbox",
      "CSS Grid",
      "cards",
      "responsive design",
      "buttons",
    ],
    suggestedApproach: [
      "Create a page wrapper with a nav, hero section, and cards section.",
      "Use flexbox for the navbar and hero alignment.",
      "Use grid for the cards so they can stack cleanly on smaller screens.",
      "Finish with consistent spacing, clear typography, and one strong button.",
    ],
    commonMistakes: [
      "Making the hero and cards feel disconnected",
      "Forgetting spacing between navigation links or cards",
      "Using fixed widths that break on smaller screens",
    ],
    expectedOutcome:
      "A landing section that looks like the opening screen of a small product or service website.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="landing-page">
  <nav class="navbar">
    <strong>Pixel Studio</strong>
    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">Work</a>
      <a href="#">Contact</a>
    </div>
  </nav>

  <section class="hero">
    <div>
      <p class="eyebrow">Launch faster</p>
      <h1>Design cleaner frontend sections with confidence</h1>
      <p>
        Combine layout, spacing, cards, and navigation into one polished
        section that feels portfolio-ready.
      </p>
      <button>Book a project call</button>
    </div>
  </section>

  <section class="feature-grid">
    <article>
      <h3>Clear navigation</h3>
      <p>Guide users with simple and predictable top-level links.</p>
    </article>
    <article>
      <h3>Readable layout</h3>
      <p>Use spacing, hierarchy, and alignment to reduce visual noise.</p>
    </article>
    <article>
      <h3>Reusable cards</h3>
      <p>Group features into small blocks that are easy to scan.</p>
    </article>
  </section>
</div>`,
      css: `.landing-page {
  max-width: 1040px;
  margin: 0 auto;
  padding: 24px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 40px;
}

.nav-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.nav-links a {
  text-decoration: none;
  color: #0f172a;
  font-weight: 700;
}

.hero {
  padding: 32px;
  border-radius: 24px;
  background: #eff6ff;
  margin-bottom: 24px;
}

.eyebrow {
  color: #2563eb;
  font-weight: 800;
  text-transform: uppercase;
}

.hero h1 {
  margin: 10px 0 14px;
  max-width: 640px;
}

.hero p {
  line-height: 1.6;
  max-width: 620px;
}

button {
  margin-top: 8px;
  padding: 12px 18px;
  border: none;
  border-radius: 999px;
  background: #2563eb;
  color: white;
  font-weight: 700;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.feature-grid article {
  padding: 20px;
  border-radius: 18px;
  background: white;
  border: 1px solid #dbe3ef;
}

@media (max-width: 700px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }
}`,
      js: ``,
    },
  },
  {
    id: "one-page-site-capstone",
    editorType: "web",
    title: "Capstone — One Page Website",
    difficulty: "Medium",
    category: "HTML + CSS + JS",
    goal: "Build a simple one-page website with a navbar, hero section, card, login form, footer, and one small JavaScript interaction.",
    requirements: [
      "Add a navigation bar",
      "Add a heading and paragraph in the hero section",
      "Add a card or promo block",
      "Add a form with inputs and button",
      "Use a click event for one small interaction",
      "Add a footer and keep the layout responsive",
    ],
    tips: [
      "This challenge should feel like your first full mini website, not just one isolated component.",
      "Build each section first, then connect them with spacing and visual hierarchy.",
      "Use a small interaction, such as a password toggle or message preview, to show basic JavaScript confidence.",
    ],
    concepts: [
      "nav elements",
      "forms",
      "cards",
      "responsive design",
      "event listeners",
      "UI interaction",
    ],
    suggestedApproach: [
      "Create the page structure with nav, main content, form, and footer.",
      "Style each section so the page feels cohesive instead of disconnected.",
      "Add one simple JavaScript interaction to the form or hero section.",
      "Check the layout on smaller screens and reduce anything that feels too cramped.",
    ],
    commonMistakes: [
      "Treating each section like a separate challenge instead of one page",
      "Adding JavaScript but not showing a visible UI change",
      "Forgetting a footer or leaving the form visually disconnected from the rest of the page",
    ],
    expectedOutcome:
      "A simple but believable one-page site that combines the main HTML, CSS, and beginner JavaScript skills from the Rookie path.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="site-shell">
  <nav class="navbar">
    <strong>North Cafe</strong>
    <div class="nav-links">
      <a href="#menu">Menu</a>
      <a href="#booking">Booking</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <main>
    <section class="hero">
      <div>
        <p class="eyebrow">Neighbourhood brunch spot</p>
        <h1>Simple food, warm space, easy booking</h1>
        <p>
          Build your first complete page by combining navigation, hierarchy,
          form layout, cards, and one small interaction.
        </p>
      </div>
      <article class="promo-card" id="menu">
        <h2>Weekend menu</h2>
        <p>Fresh pastries, seasonal plates, and coffee served all day.</p>
      </article>
    </section>

    <section class="booking-section" id="booking">
      <form class="booking-form">
        <h2>Book a table</h2>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <div class="password-row">
            <input id="passwordInput" type="password" placeholder="Create a password" />
            <button id="togglePasswordBtn" type="button">Show</button>
          </div>
        </label>
        <button class="submit-btn" type="submit">Join waitlist</button>
      </form>
    </section>
  </main>

  <footer id="contact">
    <p>North Cafe · Open daily · hello@northcafe.dev</p>
  </footer>
</div>`,
      css: `.site-shell {
  max-width: 1080px;
  margin: 0 auto;
  padding: 24px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
}

.nav-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.nav-links a {
  color: #0f172a;
  font-weight: 700;
  text-decoration: none;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(260px, 0.7fr);
  gap: 18px;
  align-items: start;
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #2563eb;
  font-weight: 800;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0 0 14px;
}

.hero p,
footer p {
  line-height: 1.6;
}

.promo-card,
.booking-form {
  padding: 22px;
  border-radius: 20px;
  background: #f8fafc;
  border: 1px solid #dbe3ef;
}

.booking-form {
  display: grid;
  gap: 14px;
}

.booking-form label {
  display: grid;
  gap: 8px;
  font-weight: 700;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
}

.password-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
}

.password-row button,
.submit-btn {
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: white;
  font-weight: 700;
}

footer {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid #dbe3ef;
}

@media (max-width: 760px) {
  .navbar,
  .hero {
    grid-template-columns: 1fr;
    display: grid;
  }
}`,
      js: `const passwordInput = document.getElementById("passwordInput");
const togglePasswordBtn = document.getElementById("togglePasswordBtn");

togglePasswordBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";

  passwordInput.type = isHidden ? "text" : "password";
  togglePasswordBtn.textContent = isHidden ? "Hide" : "Show";
});`,
    },
  },
  {
    id: "rookie-all-in-one-restaurant-site",
    editorType: "web",
    title: "Capstone — Rookie All-in-One Restaurant Website",
    difficulty: "Hard",
    category: "HTML + CSS + JS",
    goal: "Build a polished beginner-friendly restaurant website that combines layout, cards, forms, and one small interaction.",
    requirements: [
      "Create a nav bar with at least 2 links such as About and Menu",
      "Add a hero section with a heading, paragraph, and call to action",
      "Add an About section",
      "Add a Menu section with at least 3 cards",
      "Add a booking or contact form with name, email, and password input",
      "Add one small interaction such as show or hide password",
      "Add a footer",
      "Make the layout responsive",
    ],
    tips: [
      "This should feel like a complete beginner portfolio piece, not a disconnected exercise.",
      "Build the structure first, then repeat your card styles and spacing patterns.",
      "Use your small JavaScript interaction to prove the page is not just static.",
    ],
    concepts: [
      "navigation",
      "semantic sections",
      "cards",
      "forms",
      "responsive design",
    ],
    suggestedApproach: [
      "Create the main sections: nav, hero, about, menu, form, and footer.",
      "Use a repeated card pattern for the menu items.",
      "Style the layout for desktop first, then add a mobile-friendly media query.",
      "Finish by wiring one small JavaScript interaction into the form area.",
    ],
    commonMistakes: [
      "Treating each section like a separate design instead of one website",
      "Forgetting to make the page adapt on smaller screens",
      "Adding JavaScript that is disconnected from the page content",
    ],
    expectedOutcome:
      "A cohesive restaurant website that proves the learner can combine multiple beginner skills into one final build.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<main class="site-shell">
  <header class="hero-shell">
    <nav class="navbar">
      <strong>Oliva House</strong>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#book">Book</a>
      </div>
    </nav>

    <section class="hero">
      <div>
        <p class="eyebrow">Neighbourhood kitchen</p>
        <h1>Simple food, warm light, and a calm booking experience.</h1>
        <p>
          This final Rookie project combines structure, layout, cards, forms,
          and one small JavaScript interaction in one page.
        </p>
        <a class="hero-btn" href="#menu">See the menu</a>
      </div>
      <div class="hero-card">
        <h2>Tonight's focus</h2>
        <p>Seasonal pasta, grilled vegetables, and citrus desserts.</p>
      </div>
    </section>
  </header>

  <section id="about" class="content-band">
    <h2>About us</h2>
    <p>
      Oliva House is a small modern restaurant built around approachable
      seasonal menus and a clear, easy-to-scan website experience.
    </p>
  </section>

  <section id="menu" class="menu-grid">
    <article>
      <h3>Lunch plate</h3>
      <p>Fresh salad, pasta, and dessert.</p>
    </article>
    <article>
      <h3>Chef tasting</h3>
      <p>Five courses built around seasonal ingredients.</p>
    </article>
    <article>
      <h3>Weekend brunch</h3>
      <p>Shared dishes, coffee, and house pastries.</p>
    </article>
  </section>

  <section id="book" class="content-band">
    <h2>Book a table</h2>
    <form class="booking-form">
      <label>
        Name
        <input type="text" placeholder="Your name" />
      </label>
      <label>
        Email
        <input type="email" placeholder="you@example.com" />
      </label>
      <label>
        Password
        <div class="password-row">
          <input id="finalPasswordInput" type="password" placeholder="Create a booking password" />
          <button id="finalTogglePasswordBtn" type="button">Show</button>
        </div>
      </label>
      <button class="submit-btn" type="submit">Request booking</button>
    </form>
    <footer>
      <small>27 Willow Street · Open Tuesday to Sunday</small>
    </footer>
  </section>
</main>`,
      css: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
  color: #0f172a;
}

.site-shell {
  display: grid;
  gap: 24px;
  padding: 24px;
}

.hero-shell,
.content-band {
  padding: 24px;
  border: 1px solid #dbe3ef;
  border-radius: 20px;
  background: white;
}

.navbar,
.hero {
  display: grid;
  gap: 18px;
}

.navbar {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.hero {
  grid-template-columns: minmax(0, 1.4fr) minmax(220px, 0.8fr);
  align-items: center;
}

.hero-card,
.menu-grid article {
  padding: 20px;
  border-radius: 18px;
  background: #eff6ff;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.booking-form {
  display: grid;
  gap: 14px;
}

.booking-form label {
  display: grid;
  gap: 8px;
  font-weight: 700;
}

.password-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
}

input,
.hero-btn,
button {
  padding: 12px 14px;
  border-radius: 12px;
}

input {
  border: 1px solid #cbd5e1;
}

.hero-btn,
button {
  border: none;
  background: #2563eb;
  color: white;
  font-weight: 700;
  text-decoration: none;
}

.eyebrow {
  margin: 0 0 10px;
  color: #2563eb;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
}

footer {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid #dbe3ef;
}

@media (max-width: 760px) {
  .navbar,
  .hero {
    grid-template-columns: 1fr;
  }
}`,
      js: `const finalPasswordInput = document.getElementById("finalPasswordInput");
const finalTogglePasswordBtn = document.getElementById("finalTogglePasswordBtn");

finalTogglePasswordBtn.addEventListener("click", () => {
  const isHidden = finalPasswordInput.type === "password";

  finalPasswordInput.type = isHidden ? "text" : "password";
  finalTogglePasswordBtn.textContent = isHidden ? "Hide" : "Show";
});`,
    },
  },
];
