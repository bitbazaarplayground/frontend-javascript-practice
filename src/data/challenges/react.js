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
    id: "react-toggle-button-label",
    editorType: "react",
    title: "Challenge 0 — Toggle Button Label in React",
    difficulty: "Easy",
    category: "React",
    goal: "Use state to toggle a small note and update the button label at the same time.",
    requirements: [
      "Use React.useState",
      "Add a button",
      "Show and hide a note",
      "Update the button label between two states",
    ],
    tips: [
      "This is the React version of a very common JavaScript pattern.",
      "One piece of state can control both the content and the button label.",
      "Think in terms of state -> UI, not manual DOM updates.",
    ],
    concepts: [
      "useState",
      "conditional rendering",
      "event handling",
      "state-driven UI",
    ],
    suggestedApproach: [
      "Create a boolean state value.",
      "Render a button that flips the state.",
      "Use the state to choose the button label.",
      "Conditionally render the note based on the same state value.",
    ],
    commonMistakes: [
      "Trying to change text manually instead of deriving it from state",
      "Using separate state values when one boolean is enough",
      "Updating the state but not using it to control the visible UI",
    ],
    expectedOutcome:
      "A small React interaction that clearly shows how one state value can drive multiple UI changes.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
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
  const [showNote, setShowNote] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowNote(!showNote)}>
        {showNote ? "Hide note" : "Show note"}
      </button>

      {showNote ? <p>Small repeated patterns are what build confidence.</p> : null}
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
    id: "react-accordion-item",
    editorType: "react",
    title: "Challenge 0 — React Accordion Item",
    difficulty: "Medium",
    category: "React",
    goal: "Build a small FAQ accordion item that opens and closes in React.",
    requirements: [
      "Use React.useState",
      "Add a question button",
      "Show the answer only when open",
      "Update the button label or icon state",
    ],
    tips: [
      "This is another version of the toggle pattern, but in a more product-like UI.",
      "A FAQ item is a good example of conditional rendering.",
      "The open state should control both the answer and the trigger text.",
    ],
    concepts: [
      "useState",
      "conditional rendering",
      "event handling",
      "interactive components",
    ],
    suggestedApproach: [
      "Create one boolean state value for whether the item is open.",
      "Render a button for the question.",
      "Toggle the state when the button is clicked.",
      "Render the answer only when the state is true.",
    ],
    commonMistakes: [
      "Showing the answer all the time instead of conditionally",
      "Changing the label without changing the rendered content",
      "Trying to update the DOM manually instead of using state",
    ],
    expectedOutcome:
      "A simple accordion interaction that feels like a real support or docs interface.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
  return (
    <section>

    </section>
  );
}`,
    },
    solution: {
      html: ``,
      css: `.faq-card {
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: white;
}

button {
  width: 100%;
  text-align: left;
}`,
      js: `function Challenge() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="faq-card">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide answer" : "Show answer"}
      </button>

      <h2>Why repeat small UI patterns?</h2>
      {isOpen ? (
        <p>
          Because small variations help the same idea feel familiar in real work.
        </p>
      ) : null}
    </section>
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
  {
    id: "react-usereducer-todos",
    editorType: "react",
    title: "Challenge 34 — Todo List with useReducer",
    difficulty: "Hard",
    category: "React + State",
    goal: "Manage todo actions with React.useReducer instead of multiple state setters.",
    requirements: [
      "Use React.useReducer",
      "Support adding a todo",
      "Support toggling a todo complete",
      "Support removing a todo",
      "Render todos from reducer state",
    ],
    tips: [
      "A reducer receives state and an action.",
      "Use action.type to decide what to return.",
      "Reducers should return new arrays instead of mutating state.",
    ],
    concepts: [
      "useReducer",
      "actions",
      "immutable updates",
      "state transitions",
      "list rendering",
    ],
    suggestedApproach: [
      "Create a reducer function before the component.",
      "Handle add, toggle, and remove action types.",
      "Use useReducer inside Challenge.",
      "Dispatch actions from buttons and form events.",
    ],
    commonMistakes: [
      "Mutating the todos array directly",
      "Dispatching action types the reducer does not handle",
      "Forgetting to return state in the default case",
    ],
    expectedOutcome:
      "A reducer-powered todo list with predictable add, toggle, and remove behavior.",
    starter: {
      html: ``,
      css: ``,
      js: `function todoReducer(state, action) {
    return state;
  }

  function Challenge() {
    const [todos, dispatch] = React.useReducer(todoReducer, []);
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
      js: `function todoReducer(state, action) {
    if (action.type === "add") {
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    }

    if (action.type === "toggle") {
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }

    if (action.type === "remove") {
      return state.filter((todo) => todo.id !== action.id);
    }

    return state;
  }

  function Challenge() {
    const [todos, dispatch] = React.useReducer(todoReducer, []);
    const [text, setText] = React.useState("");

    function handleSubmit(event) {
      event.preventDefault();
      if (text.trim() === "") return;
      dispatch({ type: "add", text });
      setText("");
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Add todo"
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => dispatch({ type: "toggle", id: todo.id })}>
                Toggle
              </button>
              <button onClick={() => dispatch({ type: "remove", id: todo.id })}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }`,
    },
  },
  {
    id: "react-context-theme",
    editorType: "react",
    title: "Challenge 35 — Theme with Context",
    difficulty: "Hard",
    category: "React + Context",
    goal: "Use React context to share theme state with nested components.",
    requirements: [
      "Create a ThemeContext",
      "Store the current theme in state",
      "Provide theme and toggle function through context",
      "Read the theme inside a nested component",
      "Update UI styles based on theme",
    ],
    tips: [
      "React.createContext creates the context object.",
      "Wrap child components in ThemeContext.Provider.",
      "Use React.useContext inside nested components.",
    ],
    concepts: [
      "context",
      "providers",
      "useContext",
      "shared state",
      "theme toggles",
    ],
    suggestedApproach: [
      "Create ThemeContext outside the component.",
      "Create a nested ThemeCard component.",
      "Read theme and toggleTheme with useContext.",
      "Wrap ThemeCard in the provider.",
    ],
    commonMistakes: [
      "Using context without a provider",
      "Passing only the theme but not the toggle function",
      "Trying to read context outside a component",
    ],
    expectedOutcome:
      "A nested component can read and update shared theme state through context.",
    starter: {
      html: ``,
      css: ``,
      js: `const ThemeContext = React.createContext(null);

  function ThemeCard() {
    return (
      <div>

      </div>
    );
  }

  function Challenge() {
    const [theme, setTheme] = React.useState("light");

    return (
      <ThemeContext.Provider value={{ theme }}>
        <ThemeCard />
      </ThemeContext.Provider>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `const ThemeContext = React.createContext(null);

  function ThemeCard() {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
      <div
        style={{
          padding: "24px",
          borderRadius: "16px",
          background: isDark ? "#111827" : "#f8fafc",
          color: isDark ? "white" : "#111827",
        }}
      >
        <h2>{theme} theme</h2>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
    );
  }

  function Challenge() {
    const [theme, setTheme] = React.useState("light");

    function toggleTheme() {
      setTheme((currentTheme) =>
        currentTheme === "light" ? "dark" : "light"
      );
    }

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeCard />
      </ThemeContext.Provider>
    );
  }`,
    },
  },
  {
    id: "react-view-mode-context",
    editorType: "react",
    title: "Challenge 0 — View Mode with Context",
    difficulty: "Hard",
    category: "React + Context",
    goal: "Use Context to share a grid or list view mode between a toolbar and a content panel.",
    requirements: [
      "Create a context",
      "Store the current view mode in state",
      "Let one component change the view mode",
      "Let another component read and render the current mode",
    ],
    tips: [
      "This is a good way to show where shared state can live.",
      "Context is useful when multiple components need the same value.",
      "Keep the first version simple: grid and list are enough.",
    ],
    concepts: [
      "context",
      "shared state",
      "data flow",
      "component composition",
    ],
    suggestedApproach: [
      "Create a context outside the components.",
      "Store the current view mode in the top-level Challenge component.",
      "Wrap the UI in the provider.",
      "Use one child to change the mode and another child to render it.",
    ],
    commonMistakes: [
      "Creating context but forgetting to wrap the provider around the children",
      "Keeping duplicate copies of the same state in different components",
      "Reading context in a component outside the provider",
    ],
    expectedOutcome:
      "A small interface that shows how shared state can move through an app without prop drilling everything.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
  return (
    <section>

    </section>
  );
}`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `const ViewModeContext = React.createContext();

function Toolbar() {
  const { viewMode, setViewMode } = React.useContext(ViewModeContext);

  return (
    <div>
      <button onClick={() => setViewMode("grid")}>Grid</button>
      <button onClick={() => setViewMode("list")}>List</button>
      <p>Current mode: {viewMode}</p>
    </div>
  );
}

function LibraryPanel() {
  const { viewMode } = React.useContext(ViewModeContext);

  return (
    <section>
      <h2>{viewMode === "grid" ? "Grid view active" : "List view active"}</h2>
      <p>The same shared state is available here too.</p>
    </section>
  );
}

function Challenge() {
  const [viewMode, setViewMode] = React.useState("grid");

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
      <Toolbar />
      <LibraryPanel />
    </ViewModeContext.Provider>
  );
}`,
    },
  },
  {
    id: "react-accessible-form-errors",
    editorType: "react",
    title: "Challenge 36 — Accessible Form Errors",
    difficulty: "Hard",
    category: "React + Forms",
    goal: "Build a form that validates input and shows accessible error messages.",
    requirements: [
      "Create controlled email and password inputs",
      "Validate on submit",
      "Show helpful error messages",
      "Connect errors with aria-describedby",
      "Show a success message when valid",
    ],
    tips: [
      "Store errors in state as an object.",
      "Use aria-invalid when a field has an error.",
      "Use ids so aria-describedby points to the error text.",
    ],
    concepts: [
      "controlled forms",
      "validation",
      "accessibility",
      "aria-invalid",
      "error state",
    ],
    suggestedApproach: [
      "Create state for form values and errors.",
      "Write a validate function.",
      "On submit, prevent default and validate.",
      "Render errors near their fields.",
    ],
    commonMistakes: [
      "Only changing border color without text errors",
      "Not connecting errors to inputs",
      "Showing success while errors still exist",
    ],
    expectedOutcome:
      "A React form that gives clear, accessible validation feedback.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [form, setForm] = React.useState({
      email: "",
      password: "",
    });
    const [errors, setErrors] = React.useState({});

    return (
      <form>

      </form>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [form, setForm] = React.useState({
      email: "",
      password: "",
    });
    const [errors, setErrors] = React.useState({});
    const [success, setSuccess] = React.useState("");

    function updateField(field, value) {
      setForm({ ...form, [field]: value });
    }

    function validate() {
      const nextErrors = {};

      if (!form.email.includes("@")) {
        nextErrors.email = "Enter a valid email address.";
      }

      if (form.password.length < 8) {
        nextErrors.password = "Password must be at least 8 characters.";
      }

      return nextErrors;
    }

    function handleSubmit(event) {
      event.preventDefault();
      const nextErrors = validate();
      setErrors(nextErrors);
      setSuccess(
        Object.keys(nextErrors).length === 0 ? "Account details are valid." : ""
      );
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <p id="email-error">{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={(event) => updateField("password", event.target.value)}
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
        />
        {errors.password && <p id="password-error">{errors.password}</p>}

        <button type="submit">Create account</button>
        {success && <strong>{success}</strong>}
      </form>
    );
  }`,
    },
  },
  {
    id: "react-optimistic-favourites",
    editorType: "react",
    title: "Challenge 37 — Optimistic Favourite Toggle",
    difficulty: "Hard",
    category: "React + Async UI",
    goal: "Toggle a favourite state immediately while simulating an async save.",
    requirements: [
      "Render a list of products",
      "Let users toggle favourite status",
      "Show an updating state for the clicked product",
      "Simulate saving with a Promise",
      "Keep the UI responsive while saving",
    ],
    tips: [
      "Optimistic UI updates first, then confirms later.",
      "Track the id currently saving.",
      "Use setTimeout inside a Promise to simulate a request.",
    ],
    concepts: [
      "optimistic UI",
      "async state",
      "per-item loading",
      "immutable updates",
    ],
    suggestedApproach: [
      "Create product state.",
      "Write a fake save function.",
      "Toggle favourite immediately.",
      "Set and clear a saving id around the async work.",
    ],
    commonMistakes: [
      "Blocking the whole UI for one item",
      "Mutating products directly",
      "Never clearing the saving state",
    ],
    expectedOutcome:
      "A product list where favourite changes feel instant while still showing save feedback.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [products, setProducts] = React.useState([
      { id: 1, name: "Laptop", favourite: false },
      { id: 2, name: "Phone", favourite: false },
      { id: 3, name: "Keyboard", favourite: false },
    ]);

    return (
      <ul>

      </ul>
    );
  }`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `function fakeSave() {
    return new Promise((resolve) => setTimeout(resolve, 700));
  }

  function Challenge() {
    const [products, setProducts] = React.useState([
      { id: 1, name: "Laptop", favourite: false },
      { id: 2, name: "Phone", favourite: false },
      { id: 3, name: "Keyboard", favourite: false },
    ]);
    const [savingId, setSavingId] = React.useState(null);

    async function toggleFavourite(id) {
      setProducts((currentProducts) =>
        currentProducts.map((product) =>
          product.id === id
            ? { ...product, favourite: !product.favourite }
            : product
        )
      );

      setSavingId(id);
      await fakeSave();
      setSavingId(null);
    }

    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => toggleFavourite(product.id)}>
              {product.favourite ? "★" : "☆"}
            </button>
            {savingId === product.id && <span> Saving...</span>}
          </li>
        ))}
      </ul>
    );
  }`,
    },
  },
  {
    id: "react-saved-filter-state",
    editorType: "react",
    title: "Challenge 38 — Save Filter State",
    difficulty: "Hard",
    category: "React + localStorage",
    goal: "Persist a product filter so the UI remembers it after refresh.",
    requirements: [
      "Store selected category in state",
      "Read the initial category from localStorage",
      "Save category changes to localStorage",
      "Filter products by selected category",
      "Include an All category",
    ],
    tips: [
      "The useState initializer can read localStorage once.",
      "React.useEffect can save when category changes.",
      "Keep filteredProducts as a derived value.",
    ],
    concepts: [
      "localStorage",
      "useEffect",
      "derived values",
      "filters",
      "persistent UI state",
    ],
    suggestedApproach: [
      "Create category state with a localStorage initializer.",
      "Save category in an effect.",
      "Filter products from category.",
      "Render buttons and the filtered list.",
    ],
    commonMistakes: [
      "Saving but not loading the value",
      "Creating extra state for filtered products",
      "Forgetting the All option",
    ],
    expectedOutcome:
      "A product filter that stays on the user's last selected category.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [category, setCategory] = React.useState("All");
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
    const [category, setCategory] = React.useState(() => {
      return localStorage.getItem("product-category") || "All";
    });

    const products = [
      { id: 1, name: "Laptop", category: "Tech" },
      { id: 2, name: "Chair", category: "Home" },
      { id: 3, name: "Phone", category: "Tech" },
    ];

    React.useEffect(() => {
      localStorage.setItem("product-category", category);
    }, [category]);

    const filteredProducts =
      category === "All"
        ? products
        : products.filter((product) => product.category === category);

    return (
      <div>
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Tech")}>Tech</button>
        <button onClick={() => setCategory("Home")}>Home</button>

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
    id: "react-dashboard-composition",
    editorType: "react",
    title: "Challenge 39 — Dashboard Component Composition",
    difficulty: "Hard",
    category: "React + Architecture",
    goal: "Build a dashboard from reusable stat, list, and panel components.",
    requirements: [
      "Create at least 3 reusable components",
      "Pass data through props",
      "Render KPI cards from an array",
      "Render activity items from an array",
      "Keep the main Challenge component easy to read",
    ],
    tips: [
      "Good React code is often about component boundaries.",
      "A StatCard component should receive label and value props.",
      "A separate ActivityList component keeps the page organized.",
    ],
    concepts: [
      "composition",
      "props",
      "component boundaries",
      "array rendering",
      "dashboard UI",
    ],
    suggestedApproach: [
      "Create StatCard, ActivityList, and Panel components.",
      "Create arrays for stats and activity.",
      "Map stats into StatCard components.",
      "Render the final dashboard in Challenge.",
    ],
    commonMistakes: [
      "Putting all JSX directly inside Challenge",
      "Hard-coding repeated card markup",
      "Forgetting keys when mapping arrays",
    ],
    expectedOutcome:
      "A small dashboard that demonstrates clean React component composition.",
    starter: {
      html: ``,
      css: ``,
      js: `function StatCard({ label, value }) {
    return (
      <article>

      </article>
    );
  }

  function Challenge() {
    const stats = [
      { label: "Revenue", value: "£12k" },
      { label: "Users", value: "1,240" },
      { label: "Conversion", value: "8.4%" },
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
      js: `function StatCard({ label, value }) {
    return (
      <article>
        <span>{label}</span>
        <h2>{value}</h2>
      </article>
    );
  }

  function ActivityList({ items }) {
    return (
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  function Panel({ title, children }) {
    return (
      <section>
        <h3>{title}</h3>
        {children}
      </section>
    );
  }

  function Challenge() {
    const stats = [
      { label: "Revenue", value: "£12k" },
      { label: "Users", value: "1,240" },
      { label: "Conversion", value: "8.4%" },
    ];
    const activity = ["New signup", "Order completed", "Bug fixed"];

    return (
      <div>
        <Panel title="Stats">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </Panel>

        <Panel title="Activity">
          <ActivityList items={activity} />
        </Panel>
      </div>
    );
  }`,
    },
  },
  {
    id: "react-results-summary",
    editorType: "react",
    title: "Challenge 0 — React Results Summary",
    difficulty: "Hard",
    category: "React + Data",
    goal: "Filter a product list and show a live results summary with count and average price.",
    requirements: [
      "Store the search text in state",
      "Filter a product list from that state",
      "Render a results count",
      "Render an average price from the filtered data",
      "Show an empty state when nothing matches",
    ],
    tips: [
      "This is a good exercise in derived data.",
      "The summary should come from the filtered list, not the original list.",
      "Use reduce() for the average price calculation.",
    ],
    concepts: [
      "derived values",
      "filter()",
      "reduce()",
      "controlled input",
      "state-driven UI",
    ],
    suggestedApproach: [
      "Create a products array with name and price.",
      "Store the search text in state.",
      "Create a filtered array based on the search text.",
      "Derive the results count and average price from that filtered array.",
    ],
    commonMistakes: [
      "Calculating the summary from the full list instead of the filtered one",
      "Forgetting to handle the empty state before dividing for the average",
      "Storing the derived results in state instead of calculating them from the source data",
    ],
    expectedOutcome:
      "A more realistic search feature that not only filters a list but also summarizes the visible result set.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
  return (
    <section>

    </section>
  );
}`,
    },
    solution: {
      html: ``,
      css: ``,
      js: `const products = [
  { id: 1, name: "Desk Lamp", price: 42 },
  { id: 2, name: "Monitor Arm", price: 94 },
  { id: 3, name: "Travel Flask", price: 24 },
  { id: 4, name: "Cable Tray", price: 31 },
];

function Challenge() {
  const [search, setSearch] = React.useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const averagePrice =
    filteredProducts.length === 0
      ? 0
      : filteredProducts.reduce((sum, product) => sum + product.price, 0) /
        filteredProducts.length;

  return (
    <section>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products"
      />

      <p>
        {filteredProducts.length} results · Average price £{averagePrice.toFixed(2)}
      </p>

      {filteredProducts.length === 0 ? (
        <p>No products match that search.</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} · £{product.price}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}`,
    },
  },
  {
    id: "react-component-directory-capstone",
    editorType: "react",
    title: "Challenge 37 — Component Directory Capstone",
    difficulty: "Medium",
    category: "React + State",
    goal: "Build a small component directory with reusable cards, search, category filters, and an empty state.",
    requirements: [
      "Create at least one reusable component",
      "Render cards from an array with map()",
      "Add a controlled search input",
      "Add category filtering",
      "Show an empty state when nothing matches",
      "Keep the layout clean and scannable",
    ],
    tips: [
      "This capstone is about composition: small reusable pieces working together.",
      "Keep the source array fixed and derive the visible list from state.",
      "A component directory is a good way to practice explaining props and reusable UI in interviews.",
    ],
    concepts: [
      "components",
      "props",
      "useState",
      "rendering lists",
      "controlled inputs",
    ],
    suggestedApproach: [
      "Create a components array with name, category, and short description.",
      "Build one reusable card component that receives data through props.",
      "Store search text and active category in state.",
      "Filter the directory before rendering it to the screen.",
    ],
    commonMistakes: [
      "Trying to store the filtered list in state instead of deriving it",
      "Hardcoding repeated card markup instead of creating a reusable component",
      "Forgetting to handle the no-results state",
    ],
    expectedOutcome:
      "A polished React section that shows the learner can split UI into components and manage simple state clearly.",
    starter: {
      html: ``,
      css: `.toolbar {
  display: grid;
  gap: 12px;
}`,
      js: `function Challenge() {
  return (
    <section>

    </section>
  );
}`,
    },
    solution: {
      html: ``,
      css: `.directory-shell {
  display: grid;
  gap: 16px;
}

.toolbar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

input,
button {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

button.active {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
}

.component-card {
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: #ffffff;
}

.tag {
  display: inline-block;
  margin-top: 10px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #eff6ff;
  color: #1d4ed8;
  font-size: 0.85rem;
  font-weight: 700;
}`,
      js: `const componentLibrary = [
  {
    id: 1,
    name: "HeroBanner",
    category: "Marketing",
    description: "Introduces a landing page with headline, copy, and call to action.",
  },
  {
    id: 2,
    name: "ProfileCard",
    category: "UI",
    description: "Displays a person, short bio, and one main action.",
  },
  {
    id: 3,
    name: "StatsPanel",
    category: "Dashboard",
    description: "Shows a short group of metrics for reports or admin views.",
  },
  {
    id: 4,
    name: "ProductTile",
    category: "UI",
    description: "Used in product grids to show image, name, and price.",
  },
];

function FilterButton({ label, current, onSelect }) {
  return (
    <button
      className={current === label ? "active" : ""}
      onClick={() => onSelect(label)}
      type="button"
    >
      {label}
    </button>
  );
}

function ComponentCard({ item }) {
  return (
    <article className="component-card">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <span className="tag">{item.category}</span>
    </article>
  );
}

function Challenge() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const filteredComponents = componentLibrary.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="directory-shell">
      <div className="toolbar">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search a component"
        />
        <FilterButton label="All" current={category} onSelect={setCategory} />
        <FilterButton label="UI" current={category} onSelect={setCategory} />
        <FilterButton
          label="Marketing"
          current={category}
          onSelect={setCategory}
        />
        <FilterButton
          label="Dashboard"
          current={category}
          onSelect={setCategory}
        />
      </div>

      {filteredComponents.length === 0 ? (
        <p>No components match this search yet.</p>
      ) : (
        <div className="card-grid">
          {filteredComponents.map((item) => (
            <ComponentCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}`,
    },
  },
  {
    id: "react-users-dashboard-capstone",
    editorType: "react",
    title: "Challenge 38 — Users Dashboard Capstone",
    difficulty: "Hard",
    category: "React + Effects",
    goal: "Build a users dashboard with async loading, retry, reusable rows, and clear loading, error, and success states.",
    requirements: [
      "Load data with useEffect",
      "Show a loading state",
      "Show an error state with retry",
      "Render users from fetched data",
      "Create at least one reusable child component",
      "Keep the UI organized into clear sections",
    ],
    tips: [
      "Treat this like a realistic admin or CRM screen: a summary area, a status message, and a list.",
      "The same load function can power the first request and the retry button.",
      "A strong async interface always tells the user what is happening.",
    ],
    concepts: [
      "useEffect",
      "loading state",
      "error handling",
      "rendering lists",
      "components",
    ],
    suggestedApproach: [
      "Create one fake async request function outside the component.",
      "Track users, loading, and error in state.",
      "Call the loader inside useEffect when the component mounts.",
      "Render loading, error, and success states clearly before showing the dashboard list.",
    ],
    commonMistakes: [
      "Trying to render user data before the async request finishes",
      "Showing an error message without giving the user a retry action",
      "Mixing loading and error UI together in a confusing way",
    ],
    expectedOutcome:
      "A more job-ready React feature that proves the learner can handle asynchronous data and communicate state clearly.",
    starter: {
      html: ``,
      css: `.dashboard {
  display: grid;
  gap: 14px;
}`,
      js: `function Challenge() {
  return (
    <section>

    </section>
  );
}`,
    },
    solution: {
      html: ``,
      css: `.dashboard {
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

.summary-grid,
.users-list {
  display: grid;
  gap: 12px;
}

.summary-grid {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.summary-card,
.user-row {
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: #ffffff;
}

.user-row {
  display: grid;
  gap: 6px;
}

button {
  padding: 10px 14px;
  border-radius: 12px;
  border: none;
  background: #2563eb;
  color: white;
  font-weight: 700;
}`,
      js: `let firstAttempt = true;

function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstAttempt) {
        firstAttempt = false;
        reject(new Error("The user request failed. Please try again."));
        return;
      }

      resolve([
        { id: 1, name: "Ava", role: "Support", status: "Online" },
        { id: 2, name: "Leo", role: "Sales", status: "Busy" },
        { id: 3, name: "Maya", role: "Product", status: "Offline" },
      ]);
    }, 700);
  });
}

function SummaryCard({ label, value }) {
  return (
    <article className="summary-card">
      <p>{label}</p>
      <h3>{value}</h3>
    </article>
  );
}

function UserRow({ user }) {
  return (
    <article className="user-row">
      <strong>{user.name}</strong>
      <p>{user.role}</p>
      <span>{user.status}</span>
    </article>
  );
}

function Challenge() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  function loadUsers() {
    setLoading(true);
    setError("");

    fetchUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((requestError) => {
        setError(requestError.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  React.useEffect(() => {
    loadUsers();
  }, []);

  const onlineUsers = users.filter((user) => user.status === "Online").length;

  return (
    <section className="dashboard">
      <div className="header-row">
        <h2>Users dashboard</h2>
        <button type="button" onClick={loadUsers}>
          Retry load
        </button>
      </div>

      {loading ? <p>Loading users...</p> : null}
      {!loading && error ? <p>{error}</p> : null}

      {!loading && !error ? (
        <>
          <section className="summary-grid">
            <SummaryCard label="Total users" value={users.length} />
            <SummaryCard label="Online now" value={onlineUsers} />
          </section>

          <section className="users-list">
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </section>
        </>
      ) : null}
    </section>
  );
}`,
    },
  },
  {
    id: "react-product-browser-capstone",
    editorType: "react",
    title: "Challenge 39 — Product Browser Capstone",
    difficulty: "Hard",
    category: "React + Data Flow",
    goal: "Build a product browser with multiple filters, sorting, favourites, and one saved preference.",
    requirements: [
      "Render products from an array",
      "Add at least two filters",
      "Add sorting controls",
      "Allow the user to favourite items",
      "Save one preference in localStorage",
      "Show a clear empty state if no products match",
    ],
    tips: [
      "This is the kind of feature companies actually expect juniors to understand: data in, filters applied, UI out.",
      "Keep the source products array separate from UI state.",
      "Saving the selected category or sort option is enough for the persistence requirement.",
    ],
    concepts: [
      "multiple filters",
      "sort()",
      "saved items",
      "localStorage",
      "state composition",
    ],
    suggestedApproach: [
      "Create products data and decide which preferences belong in state.",
      "Use one state value for search, one for category, one for sort, and one for saved ids.",
      "Persist one preference with localStorage and restore it on load.",
      "Derive the visible products from the state before rendering the product cards.",
    ],
    commonMistakes: [
      "Mutating the original array when sorting instead of copying it first",
      "Only applying one filter and forgetting the others",
      "Saving favourites visually without keeping track of their ids in state",
    ],
    expectedOutcome:
      "A strong React capstone that feels close to a real ecommerce or marketplace feature.",
    starter: {
      html: ``,
      css: `.browser {
  display: grid;
  gap: 16px;
}`,
      js: `function Challenge() {
  return (
    <section>

    </section>
  );
}`,
    },
    solution: {
      html: ``,
      css: `.browser {
  display: grid;
  gap: 16px;
}

.controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
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
  background: #ffffff;
}

input,
select,
button {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

button {
  background: #0f172a;
  color: white;
  border: none;
}`,
      js: `const allProducts = [
  { id: 1, name: "Desk Lamp", category: "Home", price: 42 },
  { id: 2, name: "Standing Mat", category: "Office", price: 58 },
  { id: 3, name: "Travel Flask", category: "Travel", price: 24 },
  { id: 4, name: "Monitor Arm", category: "Office", price: 94 },
];

function ProductCard({ product, isSaved, onToggleSaved }) {
  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>£{product.price}</p>
      <button type="button" onClick={() => onToggleSaved(product.id)}>
        {isSaved ? "Saved" : "Save product"}
      </button>
    </article>
  );
}

function Challenge() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState(
    localStorage.getItem("product-category") || "All"
  );
  const [sortBy, setSortBy] = React.useState("name");
  const [savedIds, setSavedIds] = React.useState([]);

  React.useEffect(() => {
    localStorage.setItem("product-category", category);
  }, [category]);

  function toggleSaved(id) {
    setSavedIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((savedId) => savedId !== id)
        : [...currentIds, id]
    );
  }

  const visibleProducts = allProducts
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    })
    .slice()
    .sort((a, b) => {
      if (sortBy === "price") {
        return a.price - b.price;
      }

      return a.name.localeCompare(b.name);
    });

  return (
    <section className="browser">
      <div className="controls">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search products"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option>All</option>
          <option>Home</option>
          <option>Office</option>
          <option>Travel</option>
        </select>

        <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
          <option value="name">Sort by name</option>
          <option value="price">Sort by price</option>
        </select>
      </div>

      {visibleProducts.length === 0 ? (
        <p>No products match these filters.</p>
      ) : (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSaved={savedIds.includes(product.id)}
              onToggleSaved={toggleSaved}
            />
          ))}
        </div>
      )}
    </section>
  );
}`,
    },
  },
  {
    id: "react-job-board-capstone",
    editorType: "react",
    title: "Challenge 40 — Job Board Capstone",
    difficulty: "Hard",
    category: "React + Capstone",
    goal: "Build a mini job board with search, filters, saved jobs, and empty states.",
    requirements: [
      "Render jobs from an array",
      "Add search by title",
      "Add filter by location",
      "Allow users to save and unsave jobs",
      "Show an empty state when no jobs match",
    ],
    tips: [
      "This combines state, derived values, lists, conditionals, and event handling.",
      "Use one state value for search and one for location.",
      "Store saved job ids in an array.",
    ],
    concepts: [
      "capstone project",
      "multiple filters",
      "saved items",
      "empty states",
      "state composition",
    ],
    suggestedApproach: [
      "Create jobs data.",
      "Create state for search, location, and saved ids.",
      "Derive filteredJobs from state.",
      "Render job cards with save buttons.",
      "Render an empty state when filteredJobs is empty.",
    ],
    commonMistakes: [
      "Trying to store filtered jobs in state",
      "Only applying one filter",
      "Not handling the no-results case",
    ],
    expectedOutcome:
      "A portfolio-worthy React feature that resembles a realistic take-home interview task.",
    starter: {
      html: ``,
      css: ``,
      js: `function Challenge() {
    const [search, setSearch] = React.useState("");
    const [location, setLocation] = React.useState("All");
    const [savedIds, setSavedIds] = React.useState([]);

    const jobs = [
      { id: 1, title: "Frontend Developer", location: "Remote" },
      { id: 2, title: "React Engineer", location: "London" },
      { id: 3, title: "Junior Web Developer", location: "Remote" },
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
    const [location, setLocation] = React.useState("All");
    const [savedIds, setSavedIds] = React.useState([]);

    const jobs = [
      { id: 1, title: "Frontend Developer", location: "Remote" },
      { id: 2, title: "React Engineer", location: "London" },
      { id: 3, title: "Junior Web Developer", location: "Remote" },
    ];

    const filteredJobs = jobs.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesLocation =
        location === "All" || job.location === location;

      return matchesSearch && matchesLocation;
    });

    function toggleSaved(id) {
      setSavedIds((currentIds) =>
        currentIds.includes(id)
          ? currentIds.filter((savedId) => savedId !== id)
          : [...currentIds, id]
      );
    }

    return (
      <div>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search jobs"
        />

        <button onClick={() => setLocation("All")}>All</button>
        <button onClick={() => setLocation("Remote")}>Remote</button>
        <button onClick={() => setLocation("London")}>London</button>

        {filteredJobs.length === 0 ? (
          <p>No jobs match your filters.</p>
        ) : (
          <ul>
            {filteredJobs.map((job) => (
              <li key={job.id}>
                <h3>{job.title}</h3>
                <p>{job.location}</p>
                <button onClick={() => toggleSaved(job.id)}>
                  {savedIds.includes(job.id) ? "Saved" : "Save job"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }`,
    },
  },
  {
    id: "react-router-basic-pages",
    editorType: "react",
    title: "Challenge 41 — React Router Pages",
    difficulty: "Medium",
    category: "React Routing",
    goal: "Build a small single-page app with navigation links and route-based pages.",
    requirements: [
      "Use HashRouter, Routes, Route, and Link",
      "Create Home, Projects, and Contact pages",
      "Add navigation between the pages",
      "Render a not-found route",
    ],
    tips: [
      "Use HashRouter in this lab preview so routing works inside the iframe.",
      "Routes chooses which Route to render.",
      "Link changes the route without reloading the page.",
    ],
    concepts: ["routing", "routes", "links", "navigation", "components"],
    suggestedApproach: [
      "Destructure the router tools from ReactRouterDOM.",
      "Create small page components.",
      "Wrap the app in HashRouter.",
      "Add Routes with a fallback route.",
    ],
    commonMistakes: [
      "Using regular anchor tags instead of Link",
      "Forgetting to wrap Routes in a router",
      "Missing the wildcard route for unknown pages",
    ],
    expectedOutcome:
      "A routed React interface with working navigation and separate page views.",
    starter: {
      html: ``,
      css: `nav {
  display: flex;
  gap: 10px;
}`,
      js: `const { HashRouter, Routes, Route, Link } = ReactRouterDOM;

function Challenge() {
  return (
    <div>

    </div>
  );
}`,
    },
    solution: {
      html: ``,
      css: `nav {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}

a {
  color: #2563eb;
  font-weight: 700;
}

section {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
}`,
      js: `const { HashRouter, Routes, Route, Link } = ReactRouterDOM;

function Home() {
  return <section><h2>Home</h2><p>Welcome to the portfolio app.</p></section>;
}

function Projects() {
  return <section><h2>Projects</h2><p>Three featured frontend projects.</p></section>;
}

function Contact() {
  return <section><h2>Contact</h2><p>Ready for junior developer roles.</p></section>;
}

function NotFound() {
  return <section><h2>Page not found</h2><p>Choose a page from the nav.</p></section>;
}

function Challenge() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}`,
    },
  },
  {
    id: "react-route-tab-navigation",
    editorType: "react",
    title: "Challenge 0 — Routed Tab Navigation",
    difficulty: "Medium",
    category: "React Routing",
    goal: "Build a small settings area with route-based tab navigation.",
    requirements: [
      "Use HashRouter, Routes, Route, and Link",
      "Create at least 3 routed views",
      "Add navigation links between the views",
      "Keep the layout inside one shared settings shell",
    ],
    tips: [
      "This is similar to route pages, but in a more app-like settings context.",
      "Each route can render a small section inside the same shell.",
      "HashRouter works best in this lab preview.",
    ],
    concepts: [
      "routing",
      "links",
      "navigation",
      "components",
    ],
    suggestedApproach: [
      "Create three small page components like Overview, Progress, and Settings.",
      "Wrap the interface in HashRouter.",
      "Add a nav with Link elements.",
      "Render each view with its own Route.",
    ],
    commonMistakes: [
      "Using normal anchor tags instead of Link",
      "Forgetting to wrap the routes in a router",
      "Building separate pages without a shared navigation shell",
    ],
    expectedOutcome:
      "A routed settings UI that feels more like a real app than a basic multi-page demo.",
    starter: {
      html: ``,
      css: `nav {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}`,
      js: `const { HashRouter, Routes, Route, Link } = ReactRouterDOM;

function Challenge() {
  return (
    <HashRouter>

    </HashRouter>
  );
}`,
    },
    solution: {
      html: ``,
      css: `nav {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.panel {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 14px;
}`,
      js: `const { HashRouter, Routes, Route, Link } = ReactRouterDOM;

function Overview() {
  return <section className="panel"><h2>Overview</h2><p>Track your current study focus.</p></section>;
}

function Progress() {
  return <section className="panel"><h2>Progress</h2><p>See completed challenges and streaks.</p></section>;
}

function Preferences() {
  return <section className="panel"><h2>Preferences</h2><p>Choose how you want to study.</p></section>;
}

function Challenge() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Overview</Link>
        <Link to="/progress">Progress</Link>
        <Link to="/preferences">Preferences</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </HashRouter>
  );
}`,
    },
  },
  {
    id: "react-router-dynamic-user",
    editorType: "react",
    title: "Challenge 42 — Dynamic User Route",
    difficulty: "Medium",
    category: "React Routing",
    goal: "Use a dynamic route and URL params to show a different user profile page.",
    requirements: [
      "Create a users array",
      "Render a list of user links",
      "Create a /users/:id route",
      "Use useParams to find the selected user",
      "Show a not-found message for an unknown id",
    ],
    tips: [
      "URL params are strings, so compare ids carefully.",
      "A dynamic route matches many URLs with one route pattern.",
      "Use Link so the router controls navigation.",
    ],
    concepts: [
      "dynamic routes",
      "URL params",
      "useParams",
      "arrays",
      "conditional rendering",
    ],
    suggestedApproach: [
      "Create a Users page that renders links.",
      "Create a UserDetails component.",
      "Read id from useParams inside UserDetails.",
      "Find the matching user and render a fallback if needed.",
    ],
    commonMistakes: [
      "Trying to read params outside the route component",
      "Comparing a number id with a string param without converting",
      "Forgetting the leading slash in Link destinations",
    ],
    expectedOutcome:
      "A user directory where each profile is controlled by the URL.",
    starter: {
      html: ``,
      css: `a {
  display: inline-block;
  margin: 6px 10px 6px 0;
}`,
      js: `const { HashRouter, Routes, Route, Link, useParams } = ReactRouterDOM;

const users = [
  { id: 1, name: "Ava", role: "Designer" },
  { id: 2, name: "Noah", role: "Developer" },
  { id: 3, name: "Luna", role: "Product" },
];

function Challenge() {
  return (
    <HashRouter>

    </HashRouter>
  );
}`,
    },
    solution: {
      html: ``,
      css: `a {
  display: inline-block;
  margin: 6px 10px 6px 0;
  color: #2563eb;
  font-weight: 700;
}

.panel {
  margin-top: 14px;
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
}`,
      js: `const { HashRouter, Routes, Route, Link, useParams } = ReactRouterDOM;

const users = [
  { id: 1, name: "Ava", role: "Designer" },
  { id: 2, name: "Noah", role: "Developer" },
  { id: 3, name: "Luna", role: "Product" },
];

function Users() {
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <Link key={user.id} to={"/users/" + user.id}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}

function UserDetails() {
  const { id } = useParams();
  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    return <div className="panel">User not found.</div>;
  }

  return (
    <article className="panel">
      <h2>{user.name}</h2>
      <p>{user.role}</p>
      <Link to="/">Back to users</Link>
    </article>
  );
}

function Challenge() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </HashRouter>
  );
}`,
    },
  },
  {
    id: "react-auth-guard-state",
    editorType: "react",
    title: "Challenge 43 — Protected Route with Auth State",
    difficulty: "Hard",
    category: "React Routing",
    goal: "Create a simple protected dashboard route controlled by authentication state.",
    requirements: [
      "Track whether the user is logged in with useState",
      "Create a login route",
      "Create a protected dashboard route",
      "Redirect logged-out users to login",
      "Add a logout action",
    ],
    tips: [
      "This is a frontend simulation of auth, not real security.",
      "Real apps also validate auth on the server.",
      "Navigate can redirect users inside route elements.",
    ],
    concepts: [
      "auth",
      "protected routes",
      "state",
      "routing",
      "conditional rendering",
    ],
    suggestedApproach: [
      "Store isLoggedIn in the top-level Challenge component.",
      "Pass login and logout handlers into pages.",
      "Create a ProtectedDashboard component.",
      "Return Navigate when the user is not logged in.",
    ],
    commonMistakes: [
      "Only hiding a link but leaving the route accessible",
      "Putting auth state too deep in the tree",
      "Forgetting to replace the route when redirecting",
    ],
    expectedOutcome:
      "A routed auth flow with login, logout, and a protected dashboard page.",
    starter: {
      html: ``,
      css: `nav {
  display: flex;
  gap: 10px;
}`,
      js: `const { HashRouter, Routes, Route, Link, Navigate } = ReactRouterDOM;

function Challenge() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <HashRouter>

    </HashRouter>
  );
}`,
    },
    solution: {
      html: ``,
      css: `nav {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}

a {
  color: #2563eb;
  font-weight: 700;
}

.panel {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
}

button {
  margin-top: 10px;
}`,
      js: `const { HashRouter, Routes, Route, Link, Navigate } = ReactRouterDOM;

function Login({ onLogin }) {
  return (
    <section className="panel">
      <h2>Login</h2>
      <p>Click to simulate a successful login.</p>
      <button onClick={onLogin}>Log in</button>
    </section>
  );
}

function Dashboard({ onLogout }) {
  return (
    <section className="panel">
      <h2>Dashboard</h2>
      <p>Only logged-in users should see this screen.</p>
      <button onClick={onLogout}>Log out</button>
    </section>
  );
}

function ProtectedDashboard({ isLoggedIn, onLogout }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Dashboard onLogout={onLogout} />;
}

function Challenge() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <HashRouter>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedDashboard
              isLoggedIn={isLoggedIn}
              onLogout={() => setIsLoggedIn(false)}
            />
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </HashRouter>
  );
}`,
    },
  },
  {
    id: "react-routed-directory-capstone",
    editorType: "react",
    title: "Challenge 44 — Routed Product Directory Capstone",
    difficulty: "Hard",
    category: "React Capstone",
    goal: "Build a routed product directory with search, category filtering, list navigation, and detail pages.",
    requirements: [
      "Render products from an array",
      "Add search and category filters",
      "Use routes for the directory and product details",
      "Use URL params for product detail pages",
      "Show an empty state when filters match nothing",
    ],
    tips: [
      "Keep the products array outside the component.",
      "Search and category are state; filteredProducts is derived data.",
      "The detail route should find one product by id.",
    ],
    concepts: [
      "routing",
      "dynamic routes",
      "state",
      "filter()",
      "capstone project",
    ],
    suggestedApproach: [
      "Create Directory and ProductDetails components.",
      "Lift search and category state into Challenge.",
      "Pass filtered products into Directory.",
      "Use useParams in ProductDetails.",
      "Render friendly empty and not-found states.",
    ],
    commonMistakes: [
      "Storing filtered products in state instead of deriving them",
      "Forgetting to handle missing products",
      "Resetting filters accidentally when changing routes",
    ],
    expectedOutcome:
      "A realistic routed React feature that combines navigation, state, filtering, and detail pages.",
    starter: {
      html: ``,
      css: `.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}`,
      js: `const { HashRouter, Routes, Route, Link, useParams } = ReactRouterDOM;

const products = [
  { id: 1, name: "Desk Lamp", category: "Home", price: 42 },
  { id: 2, name: "Running Shoes", category: "Fitness", price: 96 },
  { id: 3, name: "Travel Backpack", category: "Travel", price: 78 },
];

function Challenge() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");

  return (
    <HashRouter>

    </HashRouter>
  );
}`,
    },
    solution: {
      html: ``,
      css: `.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.grid {
  display: grid;
  gap: 12px;
}

.card,
.detail {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
}

a {
  color: #2563eb;
  font-weight: 700;
}`,
      js: `const { HashRouter, Routes, Route, Link, useParams } = ReactRouterDOM;

const products = [
  { id: 1, name: "Desk Lamp", category: "Home", price: 42 },
  { id: 2, name: "Running Shoes", category: "Fitness", price: 96 },
  { id: 3, name: "Travel Backpack", category: "Travel", price: 78 },
];

function Directory({ search, setSearch, category, setCategory, filteredProducts }) {
  return (
    <section>
      <div className="filters">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search products"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option>All</option>
          <option>Home</option>
          <option>Fitness</option>
          <option>Travel</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p>No products match those filters.</p>
      ) : (
        <div className="grid">
          {filteredProducts.map((product) => (
            <article className="card" key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.category} · £{product.price}</p>
              <Link to={"/products/" + product.id}>View details</Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <article className="detail">
      <Link to="/">Back to directory</Link>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: £{product.price}</p>
    </article>
  );
}

function Challenge() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Directory
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              filteredProducts={filteredProducts}
            />
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </HashRouter>
      );
  }`,
    },
  },
  {
    id: "react-all-in-one-restaurant-app",
    editorType: "react",
    title: "Capstone — React All-in-One Restaurant App",
    difficulty: "Hard",
    category: "React Capstone",
    goal: "Build a routed restaurant app with filters, saved favourites, and a simple booking form.",
    requirements: [
      "Use HashRouter, Routes, Route, and Link",
      "Create at least 3 routes such as Home, Menu, and Book",
      "Render menu items from data",
      "Add search and category filters",
      "Allow users to save favourite dishes",
      "Save the favourites in localStorage",
      "Add a controlled booking form with simple validation",
    ],
    tips: [
      "This should feel like a small product, not a disconnected demo.",
      "Keep the data source outside the components and derive the filtered view from state.",
      "The booking form only needs simple validation, but it should still feel complete.",
    ],
    concepts: [
      "routing",
      "state",
      "localStorage",
      "controlled forms",
      "multiple filters",
    ],
    suggestedApproach: [
      "Create the route structure and the shared navigation first.",
      "Build the menu route around search, category filtering, and saved favourites.",
      "Persist the saved ids in localStorage and restore them on first render.",
      "Finish with a controlled form for the booking route.",
    ],
    commonMistakes: [
      "Storing the filtered dishes in state instead of deriving them",
      "Saving favourites visually without persisting the ids",
      "Adding a booking form without validating the main fields",
    ],
    expectedOutcome:
      "A final React build that proves the learner can combine routing, data flow, local state, and user input in one app.",
    starter: {
      html: ``,
      css: `.shell {
  display: grid;
  gap: 16px;
}`,
      js: `const { HashRouter, Routes, Route, Link } = ReactRouterDOM;

function Challenge() {
  return (
    <HashRouter>

    </HashRouter>
  );
}`,
    },
    solution: {
      html: ``,
      css: `.shell {
  display: grid;
  gap: 16px;
}

nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
}

.card,
.panel {
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: white;
}

input,
select,
button {
  padding: 12px;
  border-radius: 12px;
}

button {
  border: none;
  background: #0f172a;
  color: white;
  font-weight: 700;
}`,
      js: `const { HashRouter, Routes, Route, Link } = ReactRouterDOM;

const dishes = [
  { id: 1, name: "Lemon pasta", category: "Dinner" },
  { id: 2, name: "Roasted tomatoes", category: "Lunch" },
  { id: 3, name: "Citrus tart", category: "Dessert" },
];

function Home() {
  return (
    <section className="panel">
      <h2>Oliva House</h2>
      <p>A small routed restaurant app with filters, saved favourites, and booking.</p>
    </section>
  );
}

function Menu({ search, setSearch, category, setCategory, savedIds, onToggleSaved }) {
  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch = dish.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || dish.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section>
      <div className="filters">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search dishes"
        />
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option>All</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
        </select>
      </div>

      {filteredDishes.length === 0 ? (
        <p>No dishes match those filters.</p>
      ) : (
        <div className="grid">
          {filteredDishes.map((dish) => (
            <article className="card" key={dish.id}>
              <h3>{dish.name}</h3>
              <p>{dish.category}</p>
              <button type="button" onClick={() => onToggleSaved(dish.id)}>
                {savedIds.includes(dish.id) ? "Saved" : "Save dish"}
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function Saved({ savedIds }) {
  const savedDishes = dishes.filter((dish) => savedIds.includes(dish.id));

  return (
    <section className="panel">
      <h2>Saved dishes</h2>
      {savedDishes.length === 0 ? (
        <p>No saved dishes yet.</p>
      ) : (
        <ul>
          {savedDishes.map((dish) => (
            <li key={dish.id}>
              {dish.name} · {dish.category}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function Book() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.includes("@")) {
      setStatus("Please enter a name and a valid email.");
      return;
    }

    setStatus("Booking request looks ready.");
  }

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h2>Book a table</h2>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your name"
      />
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
      />
      <button type="submit">Review booking</button>
      <p>{status}</p>
    </form>
  );
}

function readSavedDishIds() {
  try {
    const raw = localStorage.getItem("react-restaurant-saved");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function Challenge() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");
  const [savedIds, setSavedIds] = React.useState(readSavedDishIds);

  React.useEffect(() => {
    localStorage.setItem("react-restaurant-saved", JSON.stringify(savedIds));
  }, [savedIds]);

  function toggleSaved(id) {
    setSavedIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((savedId) => savedId !== id)
        : [...currentIds, id]
    );
  }

  return (
    <HashRouter>
      <div className="shell">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/saved">Saved</Link>
          <Link to="/book">Book</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={
              <Menu
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                savedIds={savedIds}
                onToggleSaved={toggleSaved}
              />
            }
          />
          <Route path="/saved" element={<Saved savedIds={savedIds} />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </div>
    </HashRouter>
  );
}`,
    },
  },
];
