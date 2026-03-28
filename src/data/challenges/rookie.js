export const rookieChallenges = [
  {
    id: "styled-heading",
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
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<h1 class="title">Welcome to Frontend Practice Lab</h1>`,
      css: `body {
          margin: 0;
          font-family: Arial, sans-serif;
          padding: 40px;
        }
        
        .title {
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
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<button class="main-btn">Click Me</button>`,
      css: `body {
          margin: 0;
          font-family: Arial, sans-serif;
          padding: 40px;
        }
        
        .main-btn {
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
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="page">
          <div class="box"></div>
        </div>`,
      css: `body {
          margin: 0;
          font-family: Arial, sans-serif;
        }
        
        .page {
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
      css: `body {
          margin: 0;
          font-family: Arial, sans-serif;
        }
        
        .navbar {
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
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<div class="page">
          <div class="circle"></div>
        </div>`,
      css: `body {
          margin: 0;
          font-family: Arial, sans-serif;
        }
        
        .page {
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
    id: "product-card",
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
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
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
  {
    id: "counter-app",
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
      css: `body {
          margin: 0;
          min-height: 100vh;
          display: grid;
          place-items: center;
          font-family: Arial, sans-serif;
          background: #f8fafc;
        }
        
        .counter-card {
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
      css: `body {
          margin: 0;
          min-height: 100vh;
          display: grid;
          place-items: center;
          font-family: Arial, sans-serif;
          background: #f8fafc;
        }
        
        .password-box {
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
