export const reactChallenges = [
  {
    id: "first-react-component",
    editorType: "react",
    title: "Challenge 1 — First React Component",
    difficulty: "Easy",
    category: "React",
    goal: "Create your first React component and render a heading and paragraph.",
    requirements: [
      "Create a React component",
      "Return JSX",
      "Render a heading",
      "Render a paragraph",
    ],
    tips: [
      "A React component is a JavaScript function that returns JSX.",
      "JSX looks like HTML, but it is written inside JavaScript.",
      "Wrap multiple elements in one parent element.",
    ],
    concepts: ["components", "JSX", "function components", "returning UI"],
    suggestedApproach: [
      "Create a function component.",
      "Return a div, section, or article.",
      "Add a heading and a paragraph inside it.",
      "Export the component.",
    ],
    commonMistakes: [
      "Returning multiple elements without one parent wrapper",
      "Forgetting to export the component",
      "Writing HTML without using JSX syntax properly",
    ],
    expectedOutcome:
      "A React component that displays a heading and a short paragraph on the page.",
    starter: {
      html: ``,
      css: ``,
      js: `export default function Challenge() {
    return (
      
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `export default function Challenge() {
    return (
      <section>
        <h1>Welcome to React Practice</h1>
        <p>This is my first React component.</p>
      </section>
    );
  }`,
    },
  },
  {
    id: "reuse-component",
    editorType: "react",
    title: "Challenge 2 — Reuse a Component",
    difficulty: "Easy",
    category: "React",
    goal: "Create one reusable component and render it multiple times.",
    requirements: [
      "Create a reusable component",
      "Render it more than once",
      "Show repeated UI on the page",
    ],
    tips: [
      "Reusable components help avoid repeating the same JSX.",
      "You can render the same component many times.",
      "Start with a very simple card or label component.",
    ],
    concepts: ["component reuse", "JSX", "composition", "clean structure"],
    suggestedApproach: [
      "Create a small component such as a card or badge.",
      "Return simple JSX inside that component.",
      "Render the component multiple times in the main component.",
      "Check that the repeated UI appears correctly.",
    ],
    commonMistakes: [
      "Copying and pasting the same markup instead of using a component",
      "Forgetting to use capital letters for component names",
      "Returning invalid JSX",
    ],
    expectedOutcome:
      "The page displays the same reusable component several times.",
    starter: {
      html: ``,
      css: ``,
      js: `function Badge() {
    return <span>Frontend</span>;
  }
  
  export default function Challenge() {
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Badge() {
    return <span>Frontend</span>;
  }
  
  export default function Challenge() {
    return (
      <div>
        <Badge />
        <Badge />
        <Badge />
      </div>
    );
  }`,
    },
  },
  {
    id: "props-card-component",
    editorType: "react",
    title: "Challenge 3 — Card with Props",
    difficulty: "Easy",
    category: "React",
    goal: "Pass props into a card component and display dynamic content.",
    requirements: [
      "Create a reusable card component",
      "Pass props into it",
      "Display at least a title and description",
    ],
    tips: [
      "Props let you send data into a component.",
      "You can access props directly in the function parameters.",
      "Try using title and description props first.",
    ],
    concepts: [
      "props",
      "dynamic content",
      "reusable components",
      "component input",
    ],
    suggestedApproach: [
      "Create a Card component.",
      "Accept props such as title and description.",
      "Render the values inside the JSX.",
      "Use the component more than once with different values.",
    ],
    commonMistakes: [
      "Forgetting to pass the props",
      "Using prop names that do not match",
      "Writing static text instead of rendering the prop values",
    ],
    expectedOutcome:
      "Several cards appear on the page with different content passed through props.",
    starter: {
      html: ``,
      css: ``,
      js: `function Card({ title, description }) {
    return (
      <div>
        
      </div>
    );
  }
  
  export default function Challenge() {
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Card({ title, description }) {
    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  
  export default function Challenge() {
    return (
      <div>
        <Card
          title="React Basics"
          description="Learn components, props, and state."
        />
        <Card
          title="Frontend Projects"
          description="Practice building useful UI."
        />
      </div>
    );
  }`,
    },
  },
  {
    id: "render-list-map",
    editorType: "react",
    title: "Challenge 4 — Render a List with map()",
    difficulty: "Easy",
    category: "React",
    goal: "Render an array of items using map().",
    requirements: [
      "Create an array",
      "Use map() to render the items",
      "Show the list on the page",
    ],
    tips: [
      "map() creates a new array of JSX elements.",
      "You will usually render the items inside a ul or div.",
      "Each rendered item should usually have a key.",
    ],
    concepts: ["arrays", "map()", "rendering lists", "JSX expressions"],
    suggestedApproach: [
      "Create an array of strings or objects.",
      "Use map() inside the JSX.",
      "Return one element for each item.",
      "Render the full list to the page.",
    ],
    commonMistakes: [
      "Forgetting to return JSX inside map()",
      "Trying to use forEach instead of map() for rendering",
      "Not wrapping JavaScript expressions in curly braces",
    ],
    expectedOutcome: "A visible list created from array data using map().",
    starter: {
      html: ``,
      css: ``,
      js: `export default function Challenge() {
    const topics = ["HTML", "CSS", "JavaScript"];
  
    return (
      <ul>
        
      </ul>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `export default function Challenge() {
    const topics = ["HTML", "CSS", "JavaScript"];
  
    return (
      <ul>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    );
  }`,
    },
  },
  {
    id: "list-keys",
    editorType: "react",
    title: "Challenge 5 — Add Keys to a List",
    difficulty: "Easy",
    category: "React",
    goal: "Render a list of objects and give each item a proper key.",
    requirements: [
      "Use an array of objects",
      "Render the objects with map()",
      "Add a key to each rendered element",
    ],
    tips: [
      "Keys help React track list items correctly.",
      "An id is usually the best key.",
      "Avoid using the index unless there is no better option.",
    ],
    concepts: ["keys", "list rendering", "arrays of objects", "React lists"],
    suggestedApproach: [
      "Create an array of objects with id and name.",
      "Use map() to render the objects.",
      "Use the id as the key.",
      "Show the object data on the page.",
    ],
    commonMistakes: [
      "Forgetting the key completely",
      "Using a non-unique key",
      "Displaying the wrong object property",
    ],
    expectedOutcome: "A list of object-based items rendered with stable keys.",
    starter: {
      html: ``,
      css: ``,
      js: `export default function Challenge() {
    const users = [
      { id: 1, name: "Nico" },
      { id: 2, name: "Sara" },
      { id: 3, name: "Alex" },
    ];
  
    return (
      <ul>
        
      </ul>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `export default function Challenge() {
    const users = [
      { id: 1, name: "Nico" },
      { id: 2, name: "Sara" },
      { id: 3, name: "Alex" },
    ];
  
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }`,
    },
  },
  {
    id: "conditional-status-badge",
    editorType: "react",
    title: "Challenge 6 — Conditional Status Badge",
    difficulty: "Easy",
    category: "React",
    goal: "Use conditional rendering to show different status text.",
    requirements: [
      "Create a component with a status value",
      "Show different content based on the value",
      "Use conditional rendering in JSX",
    ],
    tips: [
      "You can use a ternary operator or if logic before the return.",
      "Start with a simple online/offline example.",
      "Keep the condition easy to read.",
    ],
    concepts: [
      "conditional rendering",
      "ternary operator",
      "dynamic UI",
      "React logic",
    ],
    suggestedApproach: [
      "Create a variable such as isOnline.",
      "Render one message when true and another when false.",
      "Place the logic inside JSX or before the return.",
      "Check that the UI changes when the value changes.",
    ],
    commonMistakes: [
      "Using assignment instead of comparison",
      "Making the condition too complicated",
      "Returning invalid JSX",
    ],
    expectedOutcome:
      "A component that shows one status when true and a different one when false.",
    starter: {
      html: ``,
      css: ``,
      js: `export default function Challenge() {
    const isOnline = true;
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `export default function Challenge() {
    const isOnline = true;
  
    return (
      <div>
        {isOnline ? <span>Online</span> : <span>Offline</span>}
      </div>
    );
  }`,
    },
  },
  {
    id: "react-counter-usestate",
    editorType: "react",
    title: "Challenge 7 — Counter with useState",
    difficulty: "Easy",
    category: "React",
    goal: "Build a simple counter using useState.",
    requirements: [
      "Use useState",
      "Display the current count",
      "Add a button to increase the count",
    ],
    tips: [
      "useState stores changing values in React components.",
      "Call the state update function to change the value.",
      "Use the current count inside the JSX.",
    ],
    concepts: ["useState", "state updates", "event handling", "interactive UI"],
    suggestedApproach: [
      "Import useState from React.",
      "Create count state with an initial value.",
      "Render the count.",
      "Add a button that increases the value when clicked.",
    ],
    commonMistakes: [
      "Trying to change the state variable directly",
      "Forgetting to import useState",
      "Not rendering the count value in the JSX",
    ],
    expectedOutcome:
      "A counter that updates on the page when the button is clicked.",
    starter: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  }`,
    },
  },
  {
    id: "react-toggle-section",
    editorType: "react",
    title: "Challenge 8 — Toggle a Section",
    difficulty: "Easy",
    category: "React",
    goal: "Show and hide content with React state.",
    requirements: [
      "Use useState",
      "Add a toggle button",
      "Show and hide content when clicked",
    ],
    tips: [
      "A boolean state is perfect for this.",
      "Use conditional rendering with && or a ternary.",
      "Start with the content visible or hidden.",
    ],
    concepts: [
      "boolean state",
      "conditional rendering",
      "button events",
      "toggle logic",
    ],
    suggestedApproach: [
      "Create a boolean piece of state.",
      "Add a button to change that state.",
      "Conditionally render a block of content.",
      "Make sure the button updates the state correctly.",
    ],
    commonMistakes: [
      "Using text instead of a boolean for visibility",
      "Changing the state in the wrong direction",
      "Rendering the content without a condition",
    ],
    expectedOutcome: "A button that shows and hides a section of content.",
    starter: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [showInfo, setShowInfo] = useState(false);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [showInfo, setShowInfo] = useState(false);
  
    return (
      <div>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "Hide Info" : "Show Info"}
        </button>
  
        {showInfo && <p>This section is now visible.</p>}
      </div>
    );
  }`,
    },
  },
  {
    id: "controlled-input",
    editorType: "react",
    title: "Challenge 9 — Controlled Input",
    difficulty: "Easy",
    category: "React",
    goal: "Create a controlled input field using state.",
    requirements: [
      "Add an input",
      "Store the input value in state",
      "Display the value on the page",
    ],
    tips: [
      "Set the input value prop to the state variable.",
      "Use onChange to update state.",
      "Read the typed value from event.target.value.",
    ],
    concepts: [
      "controlled components",
      "forms in React",
      "useState",
      "input handling",
    ],
    suggestedApproach: [
      "Create state for the input value.",
      "Render the input with value set to the state.",
      "Use onChange to update the state.",
      "Display the current value below the input.",
    ],
    commonMistakes: [
      "Forgetting the value prop",
      "Using onClick instead of onChange",
      "Reading the wrong value from the event",
    ],
    expectedOutcome:
      "A text input whose value is fully controlled by React state.",
    starter: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [name, setName] = useState("");
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [name, setName] = useState("");
  
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
        <p>Hello, {name || "friend"}!</p>
      </div>
    );
  }`,
    },
  },
  {
    id: "react-character-counter",
    editorType: "react",
    title: "Challenge 10 — Character Counter in React",
    difficulty: "Easy",
    category: "React",
    goal: "Count the number of characters typed into a textarea.",
    requirements: [
      "Add a textarea",
      "Store the text in state",
      "Display the character count",
    ],
    tips: [
      "You can derive the character count from the text state.",
      "You do not need separate state for the count.",
      "Use text.length in the JSX.",
    ],
    concepts: [
      "derived values",
      "controlled textarea",
      "state",
      "rendered calculations",
    ],
    suggestedApproach: [
      "Create state for the textarea text.",
      "Render the textarea as a controlled component.",
      "Display the length of the text below it.",
      "Update the state on every change.",
    ],
    commonMistakes: [
      "Creating unnecessary extra state for the count",
      "Forgetting to control the textarea",
      "Using event.target.textContent instead of value",
    ],
    expectedOutcome:
      "A textarea that updates a live character count as the user types.",
    starter: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [text, setText] = useState("");
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [text, setText] = useState("");
  
    return (
      <div>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Type here..."
        />
        <p>Characters: {text.length}</p>
      </div>
    );
  }`,
    },
  },
  {
    id: "react-search-filter",
    editorType: "react",
    title: "Challenge 11 — Search Filter in React",
    difficulty: "Medium",
    category: "React",
    goal: "Filter a list of items based on search text.",
    requirements: [
      "Add a search input",
      "Store the search text in state",
      "Filter the list based on the input value",
    ],
    tips: [
      "Use filter() on the array before rendering.",
      "Convert both strings to lowercase for easier matching.",
      "Render the filtered list, not the original array.",
    ],
    concepts: ["filter()", "controlled input", "derived UI", "list rendering"],
    suggestedApproach: [
      "Create an array of items.",
      "Store the search text in state.",
      "Create a filtered array using filter().",
      "Render the filtered array in the JSX.",
    ],
    commonMistakes: [
      "Filtering the array but still rendering the full list",
      "Forgetting lowercase matching",
      "Using state when a derived value would be enough",
    ],
    expectedOutcome: "A search field that instantly filters the rendered list.",
    starter: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [search, setSearch] = useState("");
    const items = ["React", "JavaScript", "CSS", "HTML"];
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [search, setSearch] = useState("");
    const items = ["React", "JavaScript", "CSS", "HTML"];
  
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search topics"
        />
  
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }`,
    },
  },
  {
    id: "react-category-filter",
    editorType: "react",
    title: "Challenge 12 — Category Filter Buttons",
    difficulty: "Medium",
    category: "React",
    goal: "Filter items by category using buttons and state.",
    requirements: [
      "Create a list of items with categories",
      "Add filter buttons",
      "Show only items from the active category",
    ],
    tips: [
      "Store the current category in state.",
      "Use filter() to create the visible items.",
      "An 'All' button is a good idea.",
    ],
    concepts: [
      "state-driven UI",
      "filter buttons",
      "arrays of objects",
      "conditional list rendering",
    ],
    suggestedApproach: [
      "Create an array of items with categories.",
      "Store the selected category in state.",
      "Filter the items based on that category.",
      "Render the filtered list and update it when buttons are clicked.",
    ],
    commonMistakes: [
      "Not including a way to show all items",
      "Comparing against the wrong category value",
      "Changing the state but not using it in the filter logic",
    ],
    expectedOutcome:
      "A list that changes when the user clicks category buttons.",
    starter: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [activeCategory, setActiveCategory] = useState("All");
  
    const products = [
      { id: 1, name: "Laptop", category: "Tech" },
      { id: 2, name: "Chair", category: "Home" },
      { id: 3, name: "Phone", category: "Tech" },
    ];
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [activeCategory, setActiveCategory] = useState("All");
  
    const products = [
      { id: 1, name: "Laptop", category: "Tech" },
      { id: 2, name: "Chair", category: "Home" },
      { id: 3, name: "Phone", category: "Tech" },
    ];
  
    const filteredProducts =
      activeCategory === "All"
        ? products
        : products.filter((product) => product.category === activeCategory);
  
    return (
      <div>
        <button onClick={() => setActiveCategory("All")}>All</button>
        <button onClick={() => setActiveCategory("Tech")}>Tech</button>
        <button onClick={() => setActiveCategory("Home")}>Home</button>
  
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }`,
    },
  },
  {
    id: "lift-state-up",
    editorType: "react",
    title: "Challenge 13 — Lift State Up",
    difficulty: "Medium",
    category: "React",
    goal: "Share state between components by moving it to a parent component.",
    requirements: [
      "Create at least 2 child components",
      "Store shared state in the parent",
      "Pass state and functions down with props",
    ],
    tips: [
      "If two components need the same data, the parent should often hold it.",
      "Pass the value down as props.",
      "Pass the update function down too if needed.",
    ],
    concepts: [
      "lifting state up",
      "props drilling",
      "shared state",
      "component communication",
    ],
    suggestedApproach: [
      "Create a parent component.",
      "Store the shared state in the parent.",
      "Pass the state to one child for display.",
      "Pass the setter or handler to another child for updates.",
    ],
    commonMistakes: [
      "Putting separate duplicate state in each child",
      "Forgetting to pass the value as props",
      "Trying to update parent state directly from the child without a handler",
    ],
    expectedOutcome:
      "Two child components that stay in sync because their shared state lives in the parent.",
    starter: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  function Display() {
    return <p></p>;
  }
  
  function Controls() {
    return <button>Increase</button>;
  }
  
  export default function Challenge() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  function Display({ count }) {
    return <p>Count: {count}</p>;
  }
  
  function Controls({ onIncrease }) {
    return <button onClick={onIncrease}>Increase</button>;
  }
  
  export default function Challenge() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <Display count={count} />
        <Controls onIncrease={() => setCount(count + 1)} />
      </div>
    );
  }`,
    },
  },
  {
    id: "reusable-button-component",
    editorType: "react",
    title: "Challenge 14 — Reusable Button Component",
    difficulty: "Medium",
    category: "React",
    goal: "Build a reusable button component that accepts props.",
    requirements: [
      "Create a reusable button component",
      "Pass label text as a prop",
      "Pass an onClick handler as a prop",
    ],
    tips: [
      "Reusable UI components are very common in React apps.",
      "Pass both display text and behavior through props.",
      "Start simple and keep the component clean.",
    ],
    concepts: ["props", "reusable UI", "event handlers", "component design"],
    suggestedApproach: [
      "Create a Button component.",
      "Accept label and onClick props.",
      "Render a button using those props.",
      "Use the component multiple times with different values.",
    ],
    commonMistakes: [
      "Calling the function immediately instead of passing it as onClick",
      "Forgetting to render the label prop",
      "Hardcoding the button text",
    ],
    expectedOutcome: "A reusable button component used in more than one place.",
    starter: {
      html: ``,
      css: ``,
      js: `function AppButton({ label, onClick }) {
    return (
      
    );
  }
  
  export default function Challenge() {
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function AppButton({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
  }
  
  export default function Challenge() {
    return (
      <div>
        <AppButton label="Save" onClick={() => alert("Saved")} />
        <AppButton label="Delete" onClick={() => alert("Deleted")} />
      </div>
    );
  }`,
    },
  },
  {
    id: "react-form-validation",
    editorType: "react",
    title: "Challenge 15 — Form Validation in React",
    difficulty: "Medium",
    category: "React",
    goal: "Validate a simple form in React and show an error or success message.",
    requirements: [
      "Create a controlled input",
      "Handle form submission",
      "Show an error if the input is empty",
      "Show a success message if valid",
    ],
    tips: [
      "Use onSubmit on the form.",
      "Call preventDefault() in the submit handler.",
      "Use state for the input and for the message if needed.",
    ],
    concepts: [
      "controlled forms",
      "form submission",
      "validation",
      "React state",
    ],
    suggestedApproach: [
      "Create state for the input value.",
      "Add a form and submit button.",
      "Handle the submit event.",
      "Check if the input is empty and render the right message.",
    ],
    commonMistakes: [
      "Forgetting preventDefault()",
      "Checking the wrong state value",
      "Not trimming the input",
    ],
    expectedOutcome:
      "A React form that gives feedback when submitted with empty or valid input.",
    starter: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    return (
      <form>
        
      </form>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
  
      if (email.trim() === "") {
        setMessage("Please enter your email.");
      } else {
        setMessage("Form submitted successfully.");
      }
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email"
        />
        <button type="submit">Submit</button>
        <p>{message}</p>
      </form>
    );
  }`,
    },
  },
  {
    id: "react-modal-component",
    editorType: "react",
    title: "Challenge 16 — Simple Modal Component",
    difficulty: "Medium",
    category: "React",
    goal: "Create a modal that opens and closes with React state.",
    requirements: [
      "Add a button to open the modal",
      "Show modal content when open",
      "Add a button to close the modal",
    ],
    tips: [
      "A boolean state works well here.",
      "Conditionally render the modal only when open.",
      "Keep the first version simple.",
    ],
    concepts: [
      "conditional rendering",
      "modals",
      "state-driven UI",
      "component visibility",
    ],
    suggestedApproach: [
      "Create a boolean state for modal visibility.",
      "Add a button to open it.",
      "Conditionally render the modal markup.",
      "Add a close button inside the modal.",
    ],
    commonMistakes: [
      "Rendering the modal permanently instead of conditionally",
      "Opening the modal but forgetting the close logic",
      "Using overly complex structure for a first version",
    ],
    expectedOutcome:
      "A modal window that appears when opened and disappears when closed.",
    starter: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
  
        {isOpen && (
          <div>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        )}
      </div>
    );
  }`,
    },
  },
  {
    id: "react-tabs-component",
    editorType: "react",
    title: "Challenge 17 — Tabs Component",
    difficulty: "Medium",
    category: "React",
    goal: "Build a tabs component where the active tab changes the content.",
    requirements: [
      "Add at least 2 tabs",
      "Store the active tab in state",
      "Show the matching content for the active tab",
    ],
    tips: [
      "Store a string like 'overview' or 'details' in state.",
      "Update the active tab when buttons are clicked.",
      "Render content based on the current state value.",
    ],
    concepts: [
      "state",
      "conditional rendering",
      "UI switching",
      "interactive components",
    ],
    suggestedApproach: [
      "Create state for the active tab.",
      "Add tab buttons that update the state.",
      "Render different content based on the active tab.",
      "Keep the first version simple with two tabs.",
    ],
    commonMistakes: [
      "Using separate booleans for many tabs unnecessarily",
      "Updating state but not using it to control the content",
      "Showing all tab content at once",
    ],
    expectedOutcome:
      "A tabs interface where clicking each tab updates the visible content.",
    starter: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [activeTab, setActiveTab] = useState("overview");
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `import { useState } from "react";
  
  export default function Challenge() {
    const [activeTab, setActiveTab] = useState("overview");
  
    return (
      <div>
        <button onClick={() => setActiveTab("overview")}>Overview</button>
        <button onClick={() => setActiveTab("details")}>Details</button>
  
        {activeTab === "overview" && <p>This is the overview tab.</p>}
        {activeTab === "details" && <p>This is the details tab.</p>}
      </div>
    );
  }`,
    },
  },
  {
    id: "react-mock-fetch-useeffect",
    editorType: "react",
    title: "Challenge 18 — Mock Fetch with useEffect",
    difficulty: "Medium",
    category: "React + Async",
    goal: "Load mock data when the component mounts using useEffect.",
    requirements: [
      "Use useEffect",
      "Simulate async data loading",
      "Display the data after it loads",
    ],
    tips: [
      "Use setTimeout to simulate a delayed request.",
      "Store the result in state.",
      "useEffect with an empty dependency array runs on mount.",
    ],
    concepts: [
      "useEffect",
      "async loading",
      "state updates",
      "component lifecycle thinking",
    ],
    suggestedApproach: [
      "Create state for the loaded data.",
      "Use useEffect to simulate loading on mount.",
      "Set the state after a delay.",
      "Render the loaded data in the JSX.",
    ],
    commonMistakes: [
      "Forgetting the empty dependency array",
      "Trying to render data before setting it safely",
      "Putting the loading code directly in the component body",
    ],
    expectedOutcome:
      "Mock data appears after the component loads, using useEffect and state.",
    starter: {
      html: ``,
      css: ``,
      js: `import { useEffect, useState } from "react";
  
  export default function Challenge() {
    const [user, setUser] = useState(null);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `import { useEffect, useState } from "react";
  
  export default function Challenge() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setUser({
          name: "Nico",
          role: "Frontend Developer in Training",
        });
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div>
        {user ? (
          <>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
          </>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
    );
  }`,
    },
  },
  {
    id: "loading-error-empty-states",
    editorType: "react",
    title: "Challenge 19 — Loading, Error, and Empty States",
    difficulty: "Medium",
    category: "React + Async",
    goal: "Display different UI states for loading, error, and empty results.",
    requirements: [
      "Show a loading state",
      "Show an error state if something goes wrong",
      "Show an empty state if there is no data",
      "Show content if data exists",
    ],
    tips: [
      "This challenge is about state design.",
      "You can simulate the different outcomes with hardcoded values first.",
      "Keep the conditions readable.",
    ],
    concepts: [
      "UI states",
      "conditional rendering",
      "state design",
      "real-world frontend patterns",
    ],
    suggestedApproach: [
      "Create state for loading, error, and items.",
      "Simulate a fetch result.",
      "Render one state at a time in the right order.",
      "Check that each state displays the correct message.",
    ],
    commonMistakes: [
      "Rendering multiple states at once",
      "Checking conditions in a confusing order",
      "Not handling the empty array case",
    ],
    expectedOutcome:
      "A component that clearly shows loading, error, empty, or success UI depending on the current state.",
    starter: {
      html: ``,
      css: ``,
      js: `export default function Challenge() {
    const isLoading = false;
    const error = "";
    const items = [];
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `export default function Challenge() {
    const isLoading = false;
    const error = "";
    const items = [];
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (items.length === 0) {
      return <p>No items found.</p>;
    }
  
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }`,
    },
  },
  {
    id: "custom-hook-localstorage",
    editorType: "react",
    title: "Challenge 20 — Custom Hook with localStorage",
    difficulty: "Medium",
    category: "React + Hooks",
    goal: "Create a custom hook that syncs a value with localStorage.",
    requirements: [
      "Create a custom hook",
      "Store and read a value from localStorage",
      "Use the hook inside a component",
    ],
    tips: [
      "Custom hooks usually start with the word use.",
      "You can use useState and useEffect inside a custom hook.",
      "Start with a string value like a username or theme.",
    ],
    concepts: ["custom hooks", "useEffect", "useState", "localStorage"],
    suggestedApproach: [
      "Create a hook like useStoredValue.",
      "Read the initial value from localStorage.",
      "Write the value back whenever it changes.",
      "Use the hook in a component with an input field.",
    ],
    commonMistakes: [
      "Forgetting to return the state and setter from the hook",
      "Using localStorage in the component instead of the hook",
      "Not syncing the changed value back to localStorage",
    ],
    expectedOutcome:
      "A reusable custom hook that keeps a React value in sync with localStorage.",
    starter: {
      html: ``,
      css: ``,
      js: `import { useEffect, useState } from "react";
  
  function useStoredValue(key, initialValue) {
    
  }
  
  export default function Challenge() {
    return <div></div>;
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `import { useEffect, useState } from "react";
  
  function useStoredValue(key, initialValue) {
    const [value, setValue] = useState(() => {
      const savedValue = localStorage.getItem(key);
      return savedValue !== null ? savedValue : initialValue;
    });
  
    useEffect(() => {
      localStorage.setItem(key, value);
    }, [key, value]);
  
    return [value, setValue];
  }
  
  export default function Challenge() {
    const [name, setName] = useStoredValue("username", "");
  
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
        <p>Saved name: {name || "None"}</p>
      </div>
    );
  }`,
    },
  },
];
