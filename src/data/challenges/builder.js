export const builderChallenges = [
  {
    id: "two-column-layout",
    title: "Challenge 1 — Two Column Layout",
    difficulty: "Builder",
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
    starter: { html: ``, css: ``, js: `` },
    solution: {
      html: `<div class="layout">
    <div class="box">Left</div>
    <div class="box">Right</div>
  </div>`,
      css: `body {
    margin: 0;
    font-family: Arial, sans-serif;
    padding: 40px;
  }
  
  .layout {
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
    title: "Challenge 2 — Login Form UI",
    difficulty: "Builder",
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
    starter: { html: ``, css: ``, js: `` },
    solution: {
      html: `<div class="page">
    <form class="login-form">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Sign In</button>
    </form>
  </div>`,
      css: `body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f8fafc;
  }
  
  .page {
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
    id: "toggle-theme",
    title: "Challenge 3 — Toggle Theme Button",
    difficulty: "Builder",
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
    starter: { html: ``, css: ``, js: `` },
    solution: {
      html: `<div class="page light" id="page">
    <button id="themeBtn">Dark Mode</button>
  </div>`,
      css: `body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  .page {
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
];
