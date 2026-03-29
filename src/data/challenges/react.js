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
      js: `function Challenge() {
    return (
      
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
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
  
  function Challenge() {
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
  
  function Challenge() {
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
  
  function Challenge() {
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
  
  function Challenge() {
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
      js: `function Challenge() {
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
      js: `function Challenge() {
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
      js: `function Challenge() {
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
      js: `function Challenge() {
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
      js: `function Challenge() {
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
      js: `function Challenge() {
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
    goal: "Build a simple counter using React state.",
    requirements: [
      "Use React.useState",
      "Display the current count",
      "Add a button to increase the count",
    ],
    tips: [
      "React.useState lets you store values that can change.",
      "It returns an array: [value, setValue].",
      "Call the setter function to update the value.",
    ],
    concepts: ["useState", "state updates", "event handling", "interactive UI"],
    suggestedApproach: [
      "Create count state using React.useState.",
      "Render the count inside your JSX.",
      "Add a button.",
      "Update the count when the button is clicked.",
    ],
    commonMistakes: [
      "Trying to change the state variable directly (count = count + 1)",
      "Forgetting to use the setter function",
      "Not rendering the count value in the JSX",
    ],
    expectedOutcome: "A counter that increases when the button is clicked.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [count, setCount] = React.useState(0);
  
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
      js: `function Challenge() {
    const [showInfo, setShowInfo] = React.useState(false);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [showInfo, setShowInfo] = React.useState(false);
  
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
      js: `function Challenge() {
    const [name, setName] = React.useState("");
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [name, setName] = React.useState("");
  
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
      js: `function Challenge() {
    const [text, setText] = React.useState("");
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [text, setText] = React.useState("");
  
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
      js: `function Challenge() {
    const [search, setSearch] = React.useState("");
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
      js: `function Challenge() {
    const [search, setSearch] = React.useState("");
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
      js: `function Challenge() {
    const [activeCategory, setActiveCategory] = React.useState("All");
  
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
      js: `function Challenge() {
    const [activeCategory, setActiveCategory] = React.useState("All");
  
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
      js: `function Display() {
    return <p></p>;
  }
  
  function Controls() {
    return <button>Increase</button>;
  }
  
  function Challenge() {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Display({ count }) {
    return <p>Count: {count}</p>;
  }
  
  function Controls({ onIncrease }) {
    return <button onClick={onIncrease}>Increase</button>;
  }
  
  function Challenge() {
    const [count, setCount] = React.useState(0);
  
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
  
  function Challenge() {
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
  
  function Challenge() {
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
    title: "Challenge 15 — Email Validation in React",
    difficulty: "Medium",
    category: "React",
    goal: "Validate an email field in React and show an error or success message.",
    requirements: [
      "Create a controlled email input",
      "Handle form submission",
      "Show an error if the field is empty",
      "Show an error if the email does not contain @",
      "Show a success message if the email is valid",
    ],
    tips: [
      "Use onSubmit on the form.",
      "Call preventDefault() in the submit handler.",
      "Trim the email before checking it.",
      "Start with simple validation rules first.",
    ],
    concepts: [
      "controlled forms",
      "form submission",
      "validation",
      "React state",
    ],
    suggestedApproach: [
      "Create state for the email value.",
      "Create state for the feedback message.",
      "Handle the submit event.",
      "Check for an empty field first, then check whether the email contains @.",
    ],
    commonMistakes: [
      "Forgetting preventDefault()",
      "Checking the wrong state value",
      "Not trimming the input",
      "Only checking for empty input and forgetting the @ rule",
    ],
    expectedOutcome:
      "A React form that shows an error when the email is empty or invalid, and a success message when the email passes the simple validation.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
  
      
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
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
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
  
      const trimmedEmail = email.trim();
  
      if (trimmedEmail === "") {
        setMessage("Please enter your email.");
      } else if (!trimmedEmail.includes("@")) {
        setMessage("Please enter a valid email address.");
      } else {
        setMessage("Form submitted successfully.");
      }
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
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
      js: `function Challenge() {
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [isOpen, setIsOpen] = React.useState(false);
  
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
      js: `function Challenge() {
    const [activeTab, setActiveTab] = React.useState("overview");
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [activeTab, setActiveTab] = React.useState("overview");
  
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
      js: `function Challenge() {
    const [user, setUser] = React.useState(null);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [user, setUser] = React.useState(null);
  
    React.useEffect(() => {
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
      js: `function Challenge() {
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
      js: `function Challenge() {
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
      js: `function useStoredValue(key, initialValue) {
    
  }
  
  function Challenge() {
    return <div></div>;
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function useStoredValue(key, initialValue) {
    const [value, setValue] = React.useState(() => {
      const savedValue = localStorage.getItem(key);
      return savedValue !== null ? savedValue : initialValue;
    });
  
    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [key, value]);
  
    return [value, setValue];
  }
  
  function Challenge() {
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
  {
    id: "react-load-users",
    editorType: "react",
    title: "Challenge 21 — Load Mock Users",
    difficulty: "Medium",
    category: "React + Async",
    goal: "Load mock users asynchronously and show loading and success states.",
    requirements: [
      "Use React state",
      "Load users asynchronously",
      "Show a loading message while waiting",
      "Render the users after loading",
    ],
    tips: [
      "Use React.useEffect to load data on mount.",
      "Use React.useState for users and loading.",
      "Start by rendering loading text first.",
    ],
    concepts: ["useEffect", "async loading", "state", "conditional rendering"],
    suggestedApproach: [
      "Create state for users and loading.",
      "Use React.useEffect to simulate a request.",
      "Set the users after a timeout.",
      "Render the users in a list.",
    ],
    commonMistakes: [
      "Forgetting the dependency array",
      "Trying to render the data before it exists",
      "Not handling loading state separately",
    ],
    expectedOutcome:
      "A component that first shows loading text and then renders a list of users.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [users, setUsers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
    React.useEffect(() => {
      
      
    }, []);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [users, setUsers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setUsers([
          { id: 1, name: "Nico" },
          { id: 2, name: "Sara" },
          { id: 3, name: "Alex" },
        ]);
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) {
      return <p>Loading users...</p>;
    }
  
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
    id: "react-retry-request",
    editorType: "react",
    title: "Challenge 22 — Retry a Failed Request",
    difficulty: "Medium",
    category: "React + Async",
    goal: "Simulate a request that can fail and let the user retry.",
    requirements: [
      "Show loading state",
      "Show an error message if the request fails",
      "Add a retry button",
      "Show success content if the request works",
    ],
    tips: [
      "Use state for loading, error, and data.",
      "Put the request logic in a reusable function.",
      "Clear old error text before retrying.",
    ],
    concepts: ["error state", "retry pattern", "async UI", "React state"],
    suggestedApproach: [
      "Create states for loading, error, and data.",
      "Write a function that simulates a request.",
      "Call that function when the button is clicked.",
      "Render different UI based on the current state.",
    ],
    commonMistakes: [
      "Not clearing old error state",
      "Retry button not re-running the request",
      "Mixing loading and success UI together",
    ],
    expectedOutcome:
      "A component that can fail, show an error, and successfully retry.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");
  
    function loadData() {
      
    }
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");
  
    function loadData() {
      setIsLoading(true);
      setError("");
      setData(null);
  
      setTimeout(() => {
        const success = Math.random() > 0.5;
  
        if (success) {
          setData("Data loaded successfully.");
          setIsLoading(false);
        } else {
          setError("Request failed. Please try again.");
          setIsLoading(false);
        }
      }, 1000);
    }
  
    return (
      <div>
        <button onClick={loadData}>Load Data</button>
  
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && <p>{data}</p>}
      </div>
    );
  }`,
    },
  },
  {
    id: "react-async-search",
    editorType: "react",
    title: "Challenge 23 — Async Search Filter",
    difficulty: "Medium",
    category: "React + Async",
    goal: "Search mock items asynchronously and render matching results.",
    requirements: [
      "Add a controlled input",
      "Search items asynchronously",
      "Show loading while waiting",
      "Render matching results",
    ],
    tips: [
      "The available topics are React, JavaScript, CSS, and HTML.",
      "Use state for the search text and results.",
      "Use setTimeout to simulate an API request.",
      "Filter the items before setting the result.",
    ],
    concepts: [
      "controlled input",
      "async search",
      "loading state",
      "filtering",
    ],
    suggestedApproach: [
      "Create state for search text, results, and loading.",
      "Write a fake search function.",
      "Run it when the button is clicked.",
      "Render the results after the delay.",
    ],
    commonMistakes: [
      "Not clearing previous results",
      "Trying to render before loading finishes",
      "Forgetting lowercase comparison",
    ],
    expectedOutcome:
      "A searchable list that loads matching results from these topics: React, JavaScript, CSS, and HTML.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [search, setSearch] = React.useState("");
    const [results, setResults] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
  
    const items = ["React", "JavaScript", "CSS", "HTML"];
  
    function handleSearch() {
      
      
    }
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [search, setSearch] = React.useState("");
    const [results, setResults] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
  
    const items = ["React", "JavaScript", "CSS", "HTML"];
  
    function handleSearch() {
      setIsLoading(true);
      setResults([]);
  
      setTimeout(() => {
        const filteredItems = items.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        );
  
        setResults(filteredItems);
        setIsLoading(false);
      }, 800);
    }
  
    return (
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search topics"
        />
        <button onClick={handleSearch}>Search</button>
  
        {isLoading && <p>Loading...</p>}
  
        {!isLoading && (
          <ul>
            {results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }`,
    },
  },
  {
    id: "react-empty-state",
    editorType: "react",
    title: "Challenge 24 — Empty State After Loading",
    difficulty: "Medium",
    category: "React + Async",
    goal: "Show a loading state first, then an empty state if no data is returned.",
    requirements: [
      "Show loading text first",
      "Simulate async loading",
      "Render an empty state when there are no items",
    ],
    tips: [
      "Use separate state for loading and items.",
      "After loading finishes, check items.length.",
      "Return different UI for each state.",
    ],
    concepts: [
      "empty state",
      "loading state",
      "conditional rendering",
      "async UI",
    ],
    suggestedApproach: [
      "Create state for items and loading.",
      "Simulate loading in React.useEffect.",
      "Set items to an empty array after the delay.",
      "Render an empty message when no items exist.",
    ],
    commonMistakes: [
      "Showing empty state before loading finishes",
      "Not checking items.length",
      "Rendering multiple states at once",
    ],
    expectedOutcome:
      "A component that shows loading first and then shows a no items message.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
    React.useEffect(() => {
      
      
    }, []);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setItems([]);
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) {
      return <p>Loading items...</p>;
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
    id: "react-loaded-category-filter",
    editorType: "react",
    title: "Challenge 25 — Filter Loaded Products by Category",
    difficulty: "Medium",
    category: "React + Async",
    goal: "Load products and filter them by category.",
    requirements: [
      "Load products asynchronously",
      "Store the active category in state",
      "Filter the rendered products by category",
    ],
    tips: [
      "The product categories are Tech and Home.",
      "Load the products once in React.useEffect.",
      "Use derived data for the filtered list.",
      "Add an All button.",
    ],
    concepts: ["async data", "filtering", "derived values", "React state"],
    suggestedApproach: [
      "Create state for products, loading, and category.",
      "Load the products after a short delay.",
      "Filter the products based on the selected category.",
      "Render the filtered list.",
    ],
    commonMistakes: [
      "Filtering before the data loads",
      "Changing category but still rendering all products",
      "Not including an All category",
    ],
    expectedOutcome:
      "A product list that loads first and then filters these products by category: Laptop and Phone in Tech, Chair in Home.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [products, setProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [activeCategory, setActiveCategory] = React.useState("All");
  
    React.useEffect(() => {
      
      
    }, []);
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [products, setProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [activeCategory, setActiveCategory] = React.useState("All");
  
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setProducts([
          { id: 1, name: "Laptop", category: "Tech" },
          { id: 2, name: "Chair", category: "Home" },
          { id: 3, name: "Phone", category: "Tech" },
        ]);
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    const filteredProducts =
      activeCategory === "All"
        ? products
        : products.filter((product) => product.category === activeCategory);
  
    if (isLoading) {
      return <p>Loading products...</p>;
    }
  
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
    id: "react-custom-data-hook",
    editorType: "react",
    title: "Challenge 26 — Custom Hook for Loading Data",
    difficulty: "Medium",
    category: "React + Hooks",
    goal: "Create a custom hook that loads data and returns loading state.",
    requirements: [
      "Create a custom hook",
      "Use React.useState inside the hook",
      "Use React.useEffect inside the hook",
      "Render the returned data in a component",
    ],
    tips: [
      "Custom hooks usually start with use.",
      "Return both the data and the loading state.",
      "Use the custom hook inside the Challenge component.",
    ],
    concepts: ["custom hooks", "useEffect", "useState", "reusable logic"],
    suggestedApproach: [
      "Create a hook called useUsers.",
      "Load users after a delay inside the hook.",
      "Return users and isLoading.",
      "Use that hook in the Challenge component.",
    ],
    commonMistakes: [
      "Forgetting to return values from the hook",
      "Writing the hook logic in the component instead",
      "Not using React.useEffect inside the hook",
    ],
    expectedOutcome:
      "A reusable custom hook that loads users and exposes loading state.",
    starter: {
      html: ``,
      css: ``,
      js: `function useUsers() {
    
  }
  
  function Challenge() {
    return <div></div>;
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function useUsers() {
    const [users, setUsers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setUsers([
          { id: 1, name: "Nico" },
          { id: 2, name: "Sara" },
        ]);
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return { users, isLoading };
  }
  
  function Challenge() {
    const { users, isLoading } = useUsers();
  
    if (isLoading) {
      return <p>Loading users...</p>;
    }
  
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
    id: "react-sort-products",
    editorType: "react",
    title: "Challenge 27 — Sort Products by Price",
    difficulty: "Medium",
    category: "React + Data",
    goal: "Sort a list of products by price using React state.",
    requirements: [
      "Render a list of products",
      "Add a button to sort products by price",
      "Update the rendered order after sorting",
    ],
    tips: [
      "The available products are Laptop (£899), Chair (£120), and Phone (£699).",
      "Use React state to store the products.",
      "Create a new sorted array instead of mutating state directly.",
    ],
    concepts: [
      "arrays of objects",
      "sorting",
      "React state",
      "rendering lists",
    ],
    suggestedApproach: [
      "Create product state with name and price values.",
      "Render the products in a list.",
      "Add a button that sorts the products from lowest to highest price.",
      "Update the state with the sorted array.",
    ],
    commonMistakes: [
      "Mutating the original array directly",
      "Sorting correctly but not updating state",
      "Rendering the old order instead of the sorted one",
    ],
    expectedOutcome:
      "A product list that changes from its original order to price order when the user clicks the sort button.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [products, setProducts] = React.useState([
      { id: 1, name: "Laptop", price: 899 },
      { id: 2, name: "Chair", price: 120 },
      { id: 3, name: "Phone", price: 699 },
    ]);
  
    function handleSort() {
      
    }
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [products, setProducts] = React.useState([
      { id: 1, name: "Laptop", price: 899 },
      { id: 2, name: "Chair", price: 120 },
      { id: 3, name: "Phone", price: 699 },
    ]);
  
    function handleSort() {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    }
  
    return (
      <div>
        <button onClick={handleSort}>Sort by Price</button>
  
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - £{product.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }`,
    },
  },
  {
    id: "react-toggle-favourites",
    editorType: "react",
    title: "Challenge 28 — Toggle Favourite Products",
    difficulty: "Medium",
    category: "React + State",
    goal: "Let the user mark products as favourites and update the UI.",
    requirements: [
      "Render a list of products",
      "Add a button to toggle favourite status",
      "Update the text when a product is favourited or unfavourited",
    ],
    tips: [
      "The available products are Laptop, Chair, and Phone.",
      "Store the products in state.",
      "Use map() to update the correct product.",
    ],
    concepts: ["state updates", "arrays of objects", "event handling", "map()"],
    suggestedApproach: [
      "Create state for the products list.",
      "Add an isFavourite property to each product.",
      "Write a function that toggles the clicked product.",
      "Render different button text based on favourite status.",
    ],
    commonMistakes: [
      "Mutating the original object directly",
      "Updating the wrong product",
      "Changing state without using setProducts",
    ],
    expectedOutcome:
      "A list of products where each item can be marked or unmarked as a favourite.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [products, setProducts] = React.useState([
      { id: 1, name: "Laptop", isFavourite: false },
      { id: 2, name: "Chair", isFavourite: false },
      { id: 3, name: "Phone", isFavourite: false },
    ]);
  
    function handleToggleFavourite(productId) {
      
    }
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [products, setProducts] = React.useState([
      { id: 1, name: "Laptop", isFavourite: false },
      { id: 2, name: "Chair", isFavourite: false },
      { id: 3, name: "Phone", isFavourite: false },
    ]);
  
    function handleToggleFavourite(productId) {
      const updatedProducts = products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            isFavourite: !product.isFavourite,
          };
        }
  
        return product;
      });
  
      setProducts(updatedProducts);
    }
  
    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => handleToggleFavourite(product.id)}>
              {product.isFavourite ? "Unfavourite" : "Favourite"}
            </button>
          </li>
        ))}
      </ul>
    );
  }`,
    },
  },
  {
    id: "react-theme-localstorage",
    editorType: "react",
    title: "Challenge 29 — Save Theme in localStorage",
    difficulty: "Medium",
    category: "React + localStorage",
    goal: "Let the user toggle a theme and save the preference in localStorage.",
    requirements: [
      "Store the theme in React state",
      "Add a button to toggle between light and dark",
      "Save the selected theme in localStorage",
      "Load the saved theme on first render",
    ],
    tips: [
      "Use React.useState with a function for the initial value.",
      "Use localStorage.getItem() and setItem().",
      "Use React.useEffect to save changes.",
    ],
    concepts: ["localStorage", "useEffect", "state persistence", "UI state"],
    suggestedApproach: [
      "Create theme state with an initial value from localStorage.",
      "Add a button to toggle the theme.",
      "Use React.useEffect to save the theme whenever it changes.",
      "Render text showing the current theme.",
    ],
    commonMistakes: [
      "Saving to localStorage but not reading from it",
      "Reading the wrong localStorage key",
      "Not updating the UI after toggling",
    ],
    expectedOutcome:
      "A theme toggle that remembers the user's last selected mode after refresh.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [theme, setTheme] = React.useState("light");
  
    React.useEffect(() => {
      
      
    }, [theme]);
  
    function handleToggleTheme() {
      
    }
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [theme, setTheme] = React.useState(() => {
      return localStorage.getItem("theme") || "light";
    });
  
    React.useEffect(() => {
      localStorage.setItem("theme", theme);
    }, [theme]);
  
    function handleToggleTheme() {
      setTheme((currentTheme) =>
        currentTheme === "light" ? "dark" : "light"
      );
    }
  
    return (
      <div>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
        <p>Current theme: {theme}</p>
      </div>
    );
  }`,
    },
  },
  {
    id: "react-disable-submit-loading",
    editorType: "react",
    title: "Challenge 30 — Disable Submit While Loading",
    difficulty: "Medium",
    category: "React + Forms",
    goal: "Disable the submit button while a fake form submission is in progress.",
    requirements: [
      "Create a controlled input",
      "Handle form submission",
      "Disable the submit button while loading",
      "Show a success message after the delay",
    ],
    tips: [
      "Use state for the input, loading status, and message.",
      "Disable the button with the disabled prop.",
      "Use setTimeout to simulate a request.",
    ],
    concepts: [
      "controlled forms",
      "loading state",
      "disabled buttons",
      "async UI",
    ],
    suggestedApproach: [
      "Create state for the input value.",
      "Create state for loading and feedback.",
      "Start loading when the form submits.",
      "Re-enable the button after the fake request finishes.",
    ],
    commonMistakes: [
      "Forgetting preventDefault()",
      "Not disabling the button during loading",
      "Leaving the button disabled forever",
    ],
    expectedOutcome:
      "A form where the submit button becomes disabled during submission and a success message appears afterward.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [name, setName] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
  
      
    }
  
    return (
      <form onSubmit={handleSubmit}>
        
      </form>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [name, setName] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
  
      setIsLoading(true);
      setMessage("");
  
      setTimeout(() => {
        setMessage("Form submitted successfully.");
        setIsLoading(false);
      }, 1000);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        <p>{message}</p>
      </form>
    );
  }`,
    },
  },
  {
    id: "react-debounced-search",
    editorType: "react",
    title: "Challenge 31 — Debounced Search Input",
    difficulty: "Hard",
    category: "React + Performance",
    goal: "Only update the search results after the user stops typing for a short delay.",
    requirements: [
      "Create a controlled input",
      "Store the search value in state",
      "Wait before applying the search",
      "Render matching results after the debounce delay",
    ],
    tips: [
      "The available topics are React, JavaScript, CSS, HTML, and TypeScript.",
      "Use React.useEffect with setTimeout.",
      "Clear the previous timer when the user types again.",
    ],
    concepts: ["debouncing", "useEffect", "cleanup", "derived UI"],
    suggestedApproach: [
      "Create state for the input value and the debounced value.",
      "Use React.useEffect to delay updating the debounced value.",
      "Filter the list using the debounced value.",
      "Render the filtered results.",
    ],
    commonMistakes: [
      "Forgetting to clearTimeout in the cleanup function",
      "Filtering with the wrong value",
      "Updating results on every keystroke instead of after a delay",
    ],
    expectedOutcome:
      "A search field where results update only after the user pauses typing.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [search, setSearch] = React.useState("");
    const [debouncedSearch, setDebouncedSearch] = React.useState("");
  
    const topics = ["React", "JavaScript", "CSS", "HTML", "TypeScript"];
  
    React.useEffect(() => {
      
      
    }, [search]);
  
    const filteredTopics = topics.filter((topic) =>
      topic.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [search, setSearch] = React.useState("");
    const [debouncedSearch, setDebouncedSearch] = React.useState("");
  
    const topics = ["React", "JavaScript", "CSS", "HTML", "TypeScript"];
  
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedSearch(search);
      }, 500);
  
      return () => clearTimeout(timer);
    }, [search]);
  
    const filteredTopics = topics.filter((topic) =>
      topic.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search topics"
        />
        <p>Showing results for: {debouncedSearch || "all topics"}</p>
        <ul>
          {filteredTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    );
  }`,
    },
  },
  {
    id: "react-paginated-list",
    editorType: "react",
    title: "Challenge 32 — Paginated List",
    difficulty: "Hard",
    category: "React + Data",
    goal: "Render a paginated list and let the user move between pages.",
    requirements: [
      "Render a list of items",
      "Show only a few items per page",
      "Add Next and Previous buttons",
      "Prevent moving beyond the first or last page",
    ],
    tips: [
      "The available items are 8 frontend topics.",
      "Use currentPage state.",
      "Use slice() to get the items for the active page.",
    ],
    concepts: ["pagination", "slice()", "state", "derived values"],
    suggestedApproach: [
      "Create a list of items and currentPage state.",
      "Choose how many items to show per page.",
      "Use slice() to get the visible items.",
      "Disable the buttons when the user reaches the start or end.",
    ],
    commonMistakes: [
      "Using the wrong slice indexes",
      "Not disabling the buttons correctly",
      "Showing all items instead of the current page only",
    ],
    expectedOutcome:
      "A list that shows a limited number of items per page with working navigation buttons.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [currentPage, setCurrentPage] = React.useState(1);
  
    const topics = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Accessibility",
      "Testing",
      "Performance",
    ];
  
    const itemsPerPage = 3;
  
    return (
      <div>
        
      </div>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [currentPage, setCurrentPage] = React.useState(1);
  
    const topics = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Accessibility",
      "Testing",
      "Performance",
    ];
  
    const itemsPerPage = 3;
    const totalPages = Math.ceil(topics.length / itemsPerPage);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleTopics = topics.slice(startIndex, startIndex + itemsPerPage);
  
    return (
      <div>
        <ul>
          {visibleTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
  
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
  
        <span> Page {currentPage} of {totalPages} </span>
  
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  }`,
    },
  },
  {
    id: "react-multi-filter-products",
    editorType: "react",
    title: "Challenge 33 — Multi-Filter Product List",
    difficulty: "Hard",
    category: "React + Data",
    goal: "Filter products by both category and search text at the same time.",
    requirements: [
      "Store the selected category in state",
      "Store the search text in state",
      "Filter the products using both conditions",
      "Render only matching products",
    ],
    tips: [
      "The products are Laptop (Tech), Phone (Tech), Chair (Home), Lamp (Home), and Keyboard (Tech).",
      "Use one state for the category and one for the search.",
      "Apply both filters before rendering.",
    ],
    concepts: [
      "multiple filters",
      "controlled input",
      "derived values",
      "state-driven UI",
    ],
    suggestedApproach: [
      "Create a products array.",
      "Create state for category and search text.",
      "Use filter() with both conditions.",
      "Render the filtered result list.",
    ],
    commonMistakes: [
      "Only applying one of the filters",
      "Using the original array instead of the filtered one",
      "Forgetting lowercase comparison for search",
    ],
    expectedOutcome:
      "A product list that updates based on both selected category and typed search text.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [search, setSearch] = React.useState("");
    const [category, setCategory] = React.useState("All");
  
    const products = [
      { id: 1, name: "Laptop", category: "Tech" },
      { id: 2, name: "Phone", category: "Tech" },
      { id: 3, name: "Chair", category: "Home" },
      { id: 4, name: "Lamp", category: "Home" },
      { id: 5, name: "Keyboard", category: "Tech" },
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
      js: `function Challenge() {
    const [search, setSearch] = React.useState("");
    const [category, setCategory] = React.useState("All");
  
    const products = [
      { id: 1, name: "Laptop", category: "Tech" },
      { id: 2, name: "Phone", category: "Tech" },
      { id: 3, name: "Chair", category: "Home" },
      { id: 4, name: "Lamp", category: "Home" },
      { id: 5, name: "Keyboard", category: "Tech" },
    ];
  
    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
  
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
  
      return matchesCategory && matchesSearch;
    });
  
    return (
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search products"
        />
  
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Tech")}>Tech</button>
        <button onClick={() => setCategory("Home")}>Home</button>
  
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.category}
            </li>
          ))}
        </ul>
      </div>
    );
  }`,
    },
  },
];
