export const typescriptChallenges = [
  {
    id: "ts-typed-profile-card",
    editorType: "react-ts",
    title: "Challenge 1 — Typed Profile Card",
    difficulty: "Easy",
    category: "TypeScript + React",
    goal:
      "Create a small React card with typed props so the component shape is clear from the start.",
    requirements: [
      "Create a type or interface for the card props",
      "Pass typed props into a React component",
      "Render a heading and a paragraph",
      "Return valid JSX from the Challenge component",
    ],
    tips: [
      "Start by naming the shape of the props.",
      "Typed props are one of the most common TypeScript wins in real React work.",
      "Keep the UI simple so the type shape is the main lesson.",
    ],
    concepts: ["TypeScript", "typed props", "interfaces", "components"],
    suggestedApproach: [
      "Write a type or interface for the card props.",
      "Create the component with typed props.",
      "Render the component from Challenge with real values.",
      "Check that the UI still feels like normal React, just safer.",
    ],
    commonMistakes: [
      "Typing the data but not the component props",
      "Returning JSX without passing any typed values",
      "Making the UI more complex than the lesson needs",
    ],
    expectedOutcome:
      "A simple card component that clearly shows how typed props protect component inputs.",
    starter: {
      html: ``,
      css: `.ts-card {\n  padding: 16px;\n  border: 1px solid #dbe3ef;\n  border-radius: 16px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <section></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.ts-card {\n  padding: 16px;\n  border: 1px solid #dbe3ef;\n  border-radius: 16px;\n  background: white;\n}\n\n.ts-card h2,\n.ts-card p {\n  margin: 0;\n}\n\n.ts-card p {\n  margin-top: 8px;\n  color: #475569;\n}`,
      js: `interface ProfileCardProps {\n  name: string;\n  role: string;\n}\n\nfunction ProfileCard({ name, role }: ProfileCardProps) {\n  return (\n    <article className="ts-card">\n      <h2>{name}</h2>\n      <p>{role}</p>\n    </article>\n  );\n}\n\nfunction Challenge() {\n  return <ProfileCard name="Mila" role="Junior frontend developer" />;\n}`,
    },
  },
  {
    id: "ts-interface-feature-list",
    editorType: "react-ts",
    title: "Challenge 2 — Interface Feature List",
    difficulty: "Easy",
    category: "TypeScript + Data",
    goal:
      "Use an interface to describe list data and render typed cards from an array.",
    requirements: [
      "Create an interface for the main data",
      "Create a typed array of objects",
      "Use map() to render the items",
      "Show visible text from the typed data",
    ],
    tips: [
      "Interfaces are useful when several objects share the same shape.",
      "Typed arrays make map() work with clearer property names.",
      "Keep the data realistic, like lessons, products, or features.",
    ],
    concepts: ["TypeScript", "interfaces", "arrays", "map()", "typed data"],
    suggestedApproach: [
      "Define the interface first.",
      "Create the typed array.",
      "Render the array with map().",
      "Use the typed fields in the JSX.",
    ],
    commonMistakes: [
      "Writing an interface but not using it on the array",
      "Rendering static markup instead of typed data",
      "Forgetting a key in the mapped output",
    ],
    expectedOutcome:
      "A small typed list that feels like everyday product or dashboard data.",
    starter: {
      html: ``,
      css: `.ts-grid {\n  display: grid;\n  gap: 12px;\n}\n\n.ts-item {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <section className="ts-grid"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.ts-grid {\n  display: grid;\n  gap: 12px;\n}\n\n.ts-item {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}\n\n.ts-item h2,\n.ts-item p {\n  margin: 0;\n}\n\n.ts-item p {\n  margin-top: 6px;\n  color: #475569;\n}`,
      js: `interface Lesson {\n  id: number;\n  title: string;\n  focus: string;\n}\n\nconst lessons: Lesson[] = [\n  { id: 1, title: "Types", focus: "Start with simple shapes" },\n  { id: 2, title: "Interfaces", focus: "Name repeated object data" },\n  { id: 3, title: "Lists", focus: "Render safe typed UI" },\n];\n\nfunction Challenge() {\n  return (\n    <section className="ts-grid">\n      {lessons.map((lesson) => (\n        <article className="ts-item" key={lesson.id}>\n          <h2>{lesson.title}</h2>\n          <p>{lesson.focus}</p>\n        </article>\n      ))}\n    </section>\n  );\n}`,
    },
  },
  {
    id: "ts-union-status-badge",
    editorType: "react-ts",
    title: "Challenge 3 — Union Status Badge",
    difficulty: "Easy",
    category: "TypeScript + React",
    goal:
      "Use a small union type to model a limited UI state and render the result.",
    requirements: [
      "Create a small union type",
      "Use the union to type a value or state",
      "Render different text or styles based on the current status",
      "Return valid React UI",
    ],
    tips: [
      "A union is perfect when a value can only be one of a few strings.",
      "This is safer than using any random string everywhere.",
      "Keep the badge logic small and readable.",
    ],
    concepts: ["TypeScript", "union types", "conditional rendering", "state"],
    suggestedApproach: [
      "List the allowed status values in a union type.",
      "Use that type for the current status.",
      "Render a label based on the active status.",
      "Add one small style difference if you want.",
    ],
    commonMistakes: [
      "Using plain string instead of the union",
      "Making the union too large for a tiny UI state",
      "Forgetting to connect the union to the rendered badge",
    ],
    expectedOutcome:
      "A typed badge that shows how unions protect small UI state choices.",
    starter: {
      html: ``,
      css: `.badge {\n  display: inline-flex;\n  padding: 10px 14px;\n  border-radius: 999px;\n  font-weight: 700;\n  background: #e2e8f0;\n}`,
      js: `function Challenge() {\n  return <span className="badge"></span>;\n}`,
    },
    solution: {
      html: ``,
      css: `.badge {\n  display: inline-flex;\n  padding: 10px 14px;\n  border-radius: 999px;\n  font-weight: 700;\n}\n\n.badge.ready {\n  background: #dcfce7;\n  color: #166534;\n}\n\n.badge.draft {\n  background: #e2e8f0;\n  color: #334155;\n}\n\n.badge.review {\n  background: #fef3c7;\n  color: #92400e;\n}`,
      js: `type ReviewStatus = "draft" | "review" | "ready";\n\nfunction Challenge() {\n  const status: ReviewStatus = "ready";\n\n  return (\n    <span className={\`badge \${status}\`}>\n      {status === "ready" ? "Ready to submit" : status}\n    </span>\n  );\n}`,
    },
  },
  {
    id: "ts-optional-note-card",
    editorType: "react-ts",
    title: "Challenge 4 — Optional Note Card",
    difficulty: "Easy",
    category: "TypeScript + React",
    goal:
      "Create a typed object with an optional property and render it safely.",
    requirements: [
      "Create a type or interface for the data",
      "Add an optional property to that type",
      "Render the optional value only when it exists",
      "Show a safe fallback or omit the missing note",
    ],
    tips: [
      "Optional properties are marked with a question mark.",
      "Not every card, user, or API response has every field.",
      "The UI should stay calm when optional data is missing.",
    ],
    concepts: [
      "TypeScript",
      "optional properties",
      "conditional rendering",
      "typed data",
    ],
    suggestedApproach: [
      "Create the type with one optional property.",
      "Create an object that uses that type.",
      "Render the required fields first.",
      "Conditionally render the optional note.",
    ],
    commonMistakes: [
      "Forgetting the question mark on the optional field",
      "Trying to render the optional field without checking it",
      "Using fake placeholder data instead of real conditional UI",
    ],
    expectedOutcome:
      "A typed card that shows how optional properties map to real UI conditions.",
    starter: {
      html: ``,
      css: `.note-card {\n  padding: 16px;\n  border: 1px solid #dbe3ef;\n  border-radius: 16px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <article className="note-card"></article>;\n}`,
    },
    solution: {
      html: ``,
      css: `.note-card {\n  padding: 16px;\n  border: 1px solid #dbe3ef;\n  border-radius: 16px;\n  background: white;\n}\n\n.note-card h2,\n.note-card p {\n  margin: 0;\n}\n\n.note-card p + p {\n  margin-top: 8px;\n  color: #475569;\n}`,
      js: `interface ReviewNote {\n  title: string;\n  owner: string;\n  note?: string;\n}\n\nconst item: ReviewNote = {\n  title: "Accessibility pass",\n  owner: "Leah",\n  note: "Focus states still need stronger contrast.",\n};\n\nfunction Challenge() {\n  return (\n    <article className="note-card">\n      <h2>{item.title}</h2>\n      <p>{item.owner}</p>\n      {item.note ? <p>{item.note}</p> : null}\n    </article>\n  );\n}`,
    },
  },
  {
    id: "ts-typed-click-counter",
    editorType: "react-ts",
    title: "Challenge 5 — Typed Click Counter",
    difficulty: "Easy",
    category: "TypeScript + React",
    goal:
      "Use typed state and a typed click handler for a tiny interactive feature.",
    requirements: [
      "Use typed state in React",
      "Add a typed event handler",
      "Update the count when the button is clicked",
      "Render the current value in the UI",
    ],
    tips: [
      "You can type the state explicitly even if TypeScript can infer it.",
      "Typed event handlers help you know what element fired the event.",
      "Keep the interaction tiny so the type lesson stays visible.",
    ],
    concepts: ["TypeScript", "typed state", "typed events", "useState"],
    suggestedApproach: [
      "Create the typed count state.",
      "Write a typed click handler.",
      "Connect the handler to the button.",
      "Render the count on screen.",
    ],
    commonMistakes: [
      "Leaving the handler completely untyped",
      "Updating state but forgetting to render it",
      "Overcomplicating a very small example",
    ],
    expectedOutcome:
      "A tiny but real interaction that shows how TypeScript fits everyday React state.",
    starter: {
      html: ``,
      css: `.counter-card {\n  display: grid;\n  gap: 12px;\n  max-width: 260px;\n}\n\nbutton {\n  padding: 12px 14px;\n  border: none;\n  border-radius: 12px;\n  background: #0f172a;\n  color: white;\n  font-weight: 700;\n}`,
      js: `function Challenge() {\n  return <section className="counter-card"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.counter-card {\n  display: grid;\n  gap: 12px;\n  max-width: 260px;\n}\n\n.counter-card p {\n  margin: 0;\n  color: #475569;\n}\n\nbutton {\n  padding: 12px 14px;\n  border: none;\n  border-radius: 12px;\n  background: #0f172a;\n  color: white;\n  font-weight: 700;\n}`,
      js: `function Challenge() {\n  const [count, setCount] = React.useState<number>(0);\n\n  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {\n    event.currentTarget.blur();\n    setCount((currentCount) => currentCount + 1);\n  }\n\n  return (\n    <section className="counter-card">\n      <p>Clicks: {count}</p>\n      <button type="button" onClick={handleClick}>\n        Add one\n      </button>\n    </section>\n  );\n}`,
    },
  },
  {
    id: "ts-controlled-booking-form",
    editorType: "react-ts",
    title: "Challenge 6 — Typed Booking Form",
    difficulty: "Medium",
    category: "TypeScript + Forms",
    goal:
      "Build a typed controlled form with typed inputs, typed state, and a typed submit event.",
    requirements: [
      "Use typed state in React",
      "Use a typed change event or typed submit event",
      "Create a controlled form",
      "Show a success or error message after submit",
    ],
    tips: [
      "FormEvent and ChangeEvent are two of the most common React event types.",
      "Typed forms still behave like normal React forms, just with more guidance.",
      "Keep validation simple and clear.",
    ],
    concepts: [
      "TypeScript",
      "controlled forms",
      "typed events",
      "typed state",
    ],
    suggestedApproach: [
      "Create typed state for the input values and message.",
      "Type the submit handler and stop the default reload.",
      "Validate a simple field such as name or email.",
      "Show feedback in the UI.",
    ],
    commonMistakes: [
      "Using uncontrolled inputs when the goal is controlled form flow",
      "Typing state but not the submit event",
      "Submitting without any visible feedback",
    ],
    expectedOutcome:
      "A small typed booking form that feels like real React product work.",
    starter: {
      html: ``,
      css: `.ts-form {\n  display: grid;\n  gap: 12px;\n  max-width: 320px;\n}\n\ninput,\nbutton {\n  padding: 12px;\n  border-radius: 12px;\n}\n\ninput {\n  border: 1px solid #dbe3ef;\n}\n\nbutton {\n  border: none;\n  background: #7c3aed;\n  color: white;\n  font-weight: 700;\n}`,
      js: `function Challenge() {\n  return <form className="ts-form"></form>;\n}`,
    },
    solution: {
      html: ``,
      css: `.ts-form {\n  display: grid;\n  gap: 12px;\n  max-width: 320px;\n}\n\n.ts-form p {\n  margin: 0;\n  color: #475569;\n}\n\ninput,\nbutton {\n  padding: 12px;\n  border-radius: 12px;\n}\n\ninput {\n  border: 1px solid #dbe3ef;\n}\n\nbutton {\n  border: none;\n  background: #7c3aed;\n  color: white;\n  font-weight: 700;\n}`,
      js: `function Challenge() {\n  const [name, setName] = React.useState<string>("");\n  const [email, setEmail] = React.useState<string>("");\n  const [message, setMessage] = React.useState<string>("");\n\n  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n    event.preventDefault();\n\n    if (!name.trim() || !email.trim()) {\n      setMessage("Please complete both fields.");\n      return;\n    }\n\n    setMessage("Booking draft saved.");\n    setName("");\n    setEmail("");\n  }\n\n  return (\n    <form className="ts-form" onSubmit={handleSubmit}>\n      <input\n        value={name}\n        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>\n          setName(event.target.value)\n        }\n        placeholder="Guest name"\n      />\n      <input\n        value={email}\n        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>\n          setEmail(event.target.value)\n        }\n        placeholder="Email"\n      />\n      <button type="submit">Save booking</button>\n      <p>{message}</p>\n    </form>\n  );\n}`,
    },
  },
  {
    id: "ts-narrowing-feedback-panel",
    editorType: "react-ts",
    title: "Challenge 7 — Narrowing Feedback Panel",
    difficulty: "Medium",
    category: "TypeScript + React",
    goal:
      "Use a union and narrowing so the UI behaves differently depending on the data shape.",
    requirements: [
      "Create a union type",
      "Use narrowing in the component logic",
      "Render different UI for the different cases",
      "Return a visible result on the page",
    ],
    tips: [
      "Narrowing means TypeScript learns more after a check like typeof or in.",
      "This is useful when one state can take different valid shapes.",
      "Keep the union small and readable.",
    ],
    concepts: ["TypeScript", "union types", "narrowing", "conditional UI"],
    suggestedApproach: [
      "Create a small union type.",
      "Use a check such as typeof or in.",
      "Render one message for each narrowed case.",
      "Keep the display very clear.",
    ],
    commonMistakes: [
      "Creating a union but never narrowing it",
      "Using any instead of a real union shape",
      "Rendering the same UI for every case",
    ],
    expectedOutcome:
      "A tiny panel that shows how TypeScript can guide safer branching in UI.",
    starter: {
      html: ``,
      css: `.feedback-panel {\n  padding: 16px;\n  border: 1px solid #dbe3ef;\n  border-radius: 16px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <section className="feedback-panel"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.feedback-panel {\n  padding: 16px;\n  border: 1px solid #dbe3ef;\n  border-radius: 16px;\n  background: white;\n}\n\n.feedback-panel p {\n  margin: 0;\n  color: #475569;\n}`,
      js: `type Feedback = string | { title: string; detail: string };\n\nfunction Challenge() {\n  const feedback: Feedback = {\n    title: "Review needed",\n    detail: "Add a clearer loading state before shipping.",\n  };\n\n  return (\n    <section className="feedback-panel">\n      {typeof feedback === "string" ? (\n        <p>{feedback}</p>\n      ) : (\n        <>\n          <h2>{feedback.title}</h2>\n          <p>{feedback.detail}</p>\n        </>\n      )}\n    </section>\n  );\n}`,
    },
  },
  {
    id: "ts-filtered-directory",
    editorType: "react-ts",
    title: "Challenge 8 — Typed Filtered Directory",
    difficulty: "Medium",
    category: "TypeScript + Data",
    goal:
      "Build a typed filtered list with a union filter and visible derived results.",
    requirements: [
      "Create a type or interface for the data",
      "Use a small union type for the filter",
      "Use typed state in React",
      "Use filter() to render the visible items",
    ],
    tips: [
      "This is one of the most realistic junior React + TypeScript patterns.",
      "Type the data first, then type the filter state.",
      "Derived UI is a good place to practise reading TypeScript calmly.",
    ],
    concepts: [
      "TypeScript",
      "typed state",
      "union types",
      "filter()",
      "data flow",
    ],
    suggestedApproach: [
      "Create the item type.",
      "Create the filter union type.",
      "Use typed state for the active filter.",
      "Render only the matching rows.",
    ],
    commonMistakes: [
      "Using string instead of a small union for the filter",
      "Filtering correctly but rendering the wrong list",
      "Forgetting to show the current state in the UI",
    ],
    expectedOutcome:
      "A typed directory that feels much closer to search and admin UI work.",
    starter: {
      html: ``,
      css: `.directory {\n  display: grid;\n  gap: 12px;\n}\n\nselect {\n  padding: 12px;\n  border-radius: 12px;\n}\n\n.card {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <section className="directory"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.directory {\n  display: grid;\n  gap: 12px;\n}\n\nselect {\n  padding: 12px;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.card {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}\n\n.card h2,\n.card p {\n  margin: 0;\n}\n\n.card p {\n  margin-top: 6px;\n  color: #475569;\n}`,
      js: `type Track = "All" | "UI" | "React";\n\ninterface Candidate {\n  id: number;\n  name: string;\n  track: Exclude<Track, "All">;\n}\n\nconst candidates: Candidate[] = [\n  { id: 1, name: "Ada", track: "UI" },\n  { id: 2, name: "Noah", track: "React" },\n  { id: 3, name: "Sofia", track: "UI" },\n];\n\nfunction Challenge() {\n  const [track, setTrack] = React.useState<Track>("All");\n\n  const visibleCandidates = candidates.filter((candidate) => {\n    return track === "All" || candidate.track === track;\n  });\n\n  return (\n    <section className="directory">\n      <select\n        value={track}\n        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>\n          setTrack(event.target.value as Track)\n        }\n      >\n        <option>All</option>\n        <option>UI</option>\n        <option>React</option>\n      </select>\n\n      {visibleCandidates.map((candidate) => (\n        <article className="card" key={candidate.id}>\n          <h2>{candidate.name}</h2>\n          <p>{candidate.track}</p>\n        </article>\n      ))}\n    </section>\n  );\n}`,
    },
  },
  {
    id: "ts-spread-settings-panel",
    editorType: "react-ts",
    title: "Challenge 9 — Spread Settings Panel",
    difficulty: "Medium",
    category: "TypeScript + React",
    goal:
      "Update a typed settings object with the spread operator so state stays safe and predictable.",
    requirements: [
      "Create a type or interface for the settings object",
      "Use typed state in React",
      "Use the spread operator to update the object",
      "Render the updated values in the UI",
    ],
    tips: [
      "This is a very common real React + TypeScript pattern.",
      "Spread updates help keep state immutable.",
      "Use checkboxes or buttons to change the settings object.",
    ],
    concepts: [
      "TypeScript",
      "typed state",
      "spread operator",
      "objects",
      "immutable updates",
    ],
    suggestedApproach: [
      "Type the settings object first.",
      "Store it in typed state.",
      "Update one field with a spread copy.",
      "Render the current values clearly.",
    ],
    commonMistakes: [
      "Mutating the object directly instead of using spread",
      "Typing the object but not the state",
      "Updating the data without showing the result",
    ],
    expectedOutcome:
      "A typed settings panel that shows how TypeScript and spread updates work together.",
    starter: {
      html: ``,
      css: `.settings-panel {\n  display: grid;\n  gap: 12px;\n  max-width: 340px;\n}\n\nbutton {\n  padding: 12px;\n  border: none;\n  border-radius: 12px;\n  background: #0f172a;\n  color: white;\n}`,
      js: `function Challenge() {\n  return <section className="settings-panel"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.settings-panel {\n  display: grid;\n  gap: 12px;\n  max-width: 340px;\n}\n\n.settings-panel p {\n  margin: 0;\n  color: #475569;\n}\n\nbutton {\n  padding: 12px;\n  border: none;\n  border-radius: 12px;\n  background: #0f172a;\n  color: white;\n}`,
      js: `interface ViewSettings {\n  compact: boolean;\n  highlightTips: boolean;\n}\n\nfunction Challenge() {\n  const [settings, setSettings] = React.useState<ViewSettings>({\n    compact: false,\n    highlightTips: true,\n  });\n\n  function toggleCompact() {\n    setSettings((currentSettings) => ({\n      ...currentSettings,\n      compact: !currentSettings.compact,\n    }));\n  }\n\n  return (\n    <section className="settings-panel">\n      <p>Compact view: {settings.compact ? "On" : "Off"}</p>\n      <p>Highlight tips: {settings.highlightTips ? "On" : "Off"}</p>\n      <button type="button" onClick={toggleCompact}>\n        Toggle compact mode\n      </button>\n    </section>\n  );\n}`,
    },
  },
  {
    id: "ts-fetch-menu-board",
    editorType: "react-ts",
    title: "Challenge 10 — Typed Async Menu Board",
    difficulty: "Medium",
    category: "TypeScript + Async",
    goal:
      "Load typed mock data with async/await and show clear loading and success states.",
    requirements: [
      "Create a type or interface for the data",
      "Use async or await for the loading flow",
      "Use typed state in React",
      "Show a loading state and the loaded content",
    ],
    tips: [
      "The point is not a real API. The point is typed async thinking.",
      "Start by typing the data shape, then type the state that depends on it.",
      "A small loading message is enough for this challenge.",
    ],
    concepts: [
      "TypeScript",
      "async/await",
      "typed state",
      "useEffect",
      "loading state",
    ],
    suggestedApproach: [
      "Create the typed menu item shape.",
      "Create typed state for items and loading.",
      "Load the data in an async function inside useEffect.",
      "Render loading first, then the list.",
    ],
    commonMistakes: [
      "Typing the data but not the state",
      "Loading data without any visible loading state",
      "Using async code but never rendering the result",
    ],
    expectedOutcome:
      "A typed async board that looks much more like real frontend product code.",
    starter: {
      html: ``,
      css: `.menu-board {\n  display: grid;\n  gap: 12px;\n}\n\n.menu-card {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <section className="menu-board"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.menu-board {\n  display: grid;\n  gap: 12px;\n}\n\n.menu-board p {\n  margin: 0;\n  color: #475569;\n}\n\n.menu-card {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}\n\n.menu-card h2,\n.menu-card p {\n  margin: 0;\n}\n\n.menu-card p {\n  margin-top: 6px;\n}`,
      js: `interface MenuItem {\n  id: number;\n  title: string;\n  price: number;\n}\n\nconst mockMenu: MenuItem[] = [\n  { id: 1, title: "Roasted tomato pasta", price: 14 },\n  { id: 2, title: "Lemon chicken", price: 18 },\n];\n\nfunction Challenge() {\n  const [items, setItems] = React.useState<MenuItem[]>([]);\n  const [loading, setLoading] = React.useState<boolean>(true);\n\n  React.useEffect(() => {\n    async function loadMenu() {\n      const data = await Promise.resolve(mockMenu);\n      setItems(data);\n      setLoading(false);\n    }\n\n    loadMenu();\n  }, []);\n\n  return (\n    <section className="menu-board">\n      {loading ? <p>Loading menu...</p> : null}\n\n      {!loading\n        ? items.map((item) => (\n            <article className="menu-card" key={item.id}>\n              <h2>{item.title}</h2>\n              <p>£{item.price}</p>\n            </article>\n          ))\n        : null}\n    </section>\n  );\n}`,
    },
  },
  {
    id: "ts-favourites-toggle-list",
    editorType: "react-ts",
    title: "Challenge 11 — Typed Favourites Toggle",
    difficulty: "Medium",
    category: "TypeScript + React",
    goal:
      "Use a typed array of ids in state and toggle favourites safely from the UI.",
    requirements: [
      "Use typed state in React",
      "Render cards from typed data",
      "Toggle a saved or favourite state",
      "Show visible feedback in the UI",
    ],
    tips: [
      "A number[] state is a common pattern for saved ids.",
      "Spread and filter work well together for toggles.",
      "Show the saved state clearly on the card.",
    ],
    concepts: [
      "TypeScript",
      "typed state",
      "arrays",
      "filter()",
      "spread operator",
    ],
    suggestedApproach: [
      "Create the typed card data.",
      "Store favourite ids in typed state.",
      "Toggle ids in and out of the array.",
      "Render a label so the result is obvious.",
    ],
    commonMistakes: [
      "Using untyped ids in state",
      "Mutating the array instead of returning a new one",
      "Toggling the data but not the visible UI",
    ],
    expectedOutcome:
      "A typed toggle pattern that feels like real saved-item or wishlist behavior.",
    starter: {
      html: ``,
      css: `.fav-grid {\n  display: grid;\n  gap: 12px;\n}\n\n.fav-card {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <section className="fav-grid"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.fav-grid {\n  display: grid;\n  gap: 12px;\n}\n\n.fav-card {\n  display: grid;\n  gap: 8px;\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}\n\nbutton {\n  width: fit-content;\n  padding: 10px 12px;\n  border: none;\n  border-radius: 12px;\n  background: #0f172a;\n  color: white;\n}`,
      js: `interface Resource {\n  id: number;\n  title: string;\n}\n\nconst resources: Resource[] = [\n  { id: 1, title: "State patterns" },\n  { id: 2, title: "Async UI review" },\n];\n\nfunction Challenge() {\n  const [savedIds, setSavedIds] = React.useState<number[]>([]);\n\n  function toggleSaved(id: number) {\n    setSavedIds((currentIds) =>\n      currentIds.includes(id)\n        ? currentIds.filter((currentId) => currentId !== id)\n        : [...currentIds, id]\n    );\n  }\n\n  return (\n    <section className="fav-grid">\n      {resources.map((resource) => {\n        const saved = savedIds.includes(resource.id);\n\n        return (\n          <article className="fav-card" key={resource.id}>\n            <h2>{resource.title}</h2>\n            <p>{saved ? "Saved" : "Not saved"}</p>\n            <button type="button" onClick={() => toggleSaved(resource.id)}>\n              {saved ? "Remove" : "Save"}\n            </button>\n          </article>\n        );\n      })}\n    </section>\n  );\n}`,
    },
  },
  {
    id: "ts-typed-search-results",
    editorType: "react-ts",
    title: "Challenge 12 — Typed Search Results",
    difficulty: "Medium",
    category: "TypeScript + Forms",
    goal:
      "Type the search state, filter typed data, and render visible results from that typed flow.",
    requirements: [
      "Use typed state in React",
      "Use a typed change event",
      "Use filter() to search the data",
      "Render the matching results",
    ],
    tips: [
      "This is the same frontend pattern you already know, now made safer with types.",
      "Type the input state as a string and the list as an array of objects.",
      "Keep the search case-insensitive.",
    ],
    concepts: [
      "TypeScript",
      "typed events",
      "typed state",
      "filter()",
      "search UI",
    ],
    suggestedApproach: [
      "Create the typed item shape and data.",
      "Store the search term in typed state.",
      "Use a typed change event on the input.",
      "Filter and render the matching rows.",
    ],
    commonMistakes: [
      "Typing the data but leaving the event untyped",
      "Filtering the list but rendering the original array",
      "Ignoring case-insensitive matching",
    ],
    expectedOutcome:
      "A familiar typed search flow that helps the learner trust TypeScript in real UI work.",
    starter: {
      html: ``,
      css: `.search-board {\n  display: grid;\n  gap: 12px;\n}\n\ninput {\n  padding: 12px;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.result-item {\n  padding: 12px;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <section className="search-board"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.search-board {\n  display: grid;\n  gap: 12px;\n}\n\ninput {\n  padding: 12px;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.result-item {\n  padding: 12px;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n  background: white;\n}`,
      js: `interface Topic {\n  id: number;\n  title: string;\n}\n\nconst topics: Topic[] = [\n  { id: 1, title: "Props and state" },\n  { id: 2, title: "TypeScript unions" },\n  { id: 3, title: "Async UI" },\n];\n\nfunction Challenge() {\n  const [search, setSearch] = React.useState<string>("");\n\n  const visibleTopics = topics.filter((topic) =>\n    topic.title.toLowerCase().includes(search.toLowerCase())\n  );\n\n  return (\n    <section className="search-board">\n      <input\n        value={search}\n        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>\n          setSearch(event.target.value)\n        }\n        placeholder="Search topics"\n      />\n\n      {visibleTopics.map((topic) => (\n        <article className="result-item" key={topic.id}>\n          {topic.title}\n        </article>\n      ))}\n    </section>\n  );\n}`,
    },
  },
  {
    id: "ts-refactor-feedback-board",
    editorType: "react-ts",
    title: "Challenge 13 — Refactor a Feedback Board to TypeScript",
    difficulty: "Hard",
    category: "TypeScript + React",
    goal:
      "Refactor a small React screen so the main data, state, and events all have safer TypeScript shapes.",
    requirements: [
      "Create a type or interface for the main data",
      "Use typed state in React",
      "Use a typed event handler",
      "Use a small union type for the active filter or mode",
      "Render visible filtered content",
    ],
    tips: [
      "This is closer to real junior work: adding safety to an everyday feature.",
      "You do not need advanced TypeScript. Simple named shapes are enough.",
      "Focus on the data, the filter, and the event flow.",
    ],
    concepts: [
      "TypeScript",
      "typed state",
      "typed events",
      "union types",
      "refactoring",
    ],
    suggestedApproach: [
      "Type the data first.",
      "Type the filter state and event flow.",
      "Render the filtered cards from the typed data.",
      "Keep the UI small but realistic.",
    ],
    commonMistakes: [
      "Adding a few types but leaving the core flow untyped",
      "Using plain string everywhere instead of a union",
      "Refactoring the data but forgetting the event handlers",
    ],
    expectedOutcome:
      "A realistic mini feature that feels closer to the work many teams expect today.",
    starter: {
      html: ``,
      css: `.feedback-board {\n  display: grid;\n  gap: 12px;\n}\n\nselect {\n  padding: 12px;\n  border-radius: 12px;\n}\n\n.feedback-card {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <section className="feedback-board"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.feedback-board {\n  display: grid;\n  gap: 12px;\n}\n\nselect {\n  padding: 12px;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.feedback-card {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}\n\n.feedback-card h2,\n.feedback-card p {\n  margin: 0;\n}\n\n.feedback-card p {\n  margin-top: 6px;\n  color: #475569;\n}`,
      js: `type BoardFilter = "All" | "Bug" | "Praise";\n\ninterface FeedbackItem {\n  id: number;\n  title: string;\n  type: Exclude<BoardFilter, "All">;\n}\n\nconst feedbackItems: FeedbackItem[] = [\n  { id: 1, title: "Navbar overflows on mobile", type: "Bug" },\n  { id: 2, title: "Booking flow feels clear", type: "Praise" },\n  { id: 3, title: "Filter labels need more contrast", type: "Bug" },\n];\n\nfunction Challenge() {\n  const [filter, setFilter] = React.useState<BoardFilter>("All");\n\n  const visibleItems = feedbackItems.filter((item) => {\n    return filter === "All" || item.type === filter;\n  });\n\n  function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {\n    setFilter(event.target.value as BoardFilter);\n  }\n\n  return (\n    <section className="feedback-board">\n      <select value={filter} onChange={handleFilterChange}>\n        <option>All</option>\n        <option>Bug</option>\n        <option>Praise</option>\n      </select>\n\n      {visibleItems.map((item) => (\n        <article className="feedback-card" key={item.id}>\n          <h2>{item.title}</h2>\n          <p>{item.type}</p>\n        </article>\n      ))}\n    </section>\n  );\n}`,
    },
  },
  {
    id: "ts-reducer-task-board",
    editorType: "react-ts",
    title: "Challenge 14 — Typed Reducer Task Board",
    difficulty: "Hard",
    category: "TypeScript + React",
    goal:
      "Use a typed reducer and typed action union so UI state changes stay explicit and safer as the feature grows.",
    requirements: [
      "Create a typed state shape for the tasks",
      "Create a union type for the reducer actions",
      "Use React.useReducer",
      "Dispatch an action from the UI",
      "Render updated task state on screen",
    ],
    tips: [
      "Reducers become useful when one feature has several related state changes.",
      "The action union should make it obvious which updates are allowed.",
      "Keep the task board small so the reducer idea stays easy to follow.",
    ],
    concepts: [
      "TypeScript",
      "union types",
      "state management",
      "typed state",
    ],
    suggestedApproach: [
      "Start with the task type and initial data.",
      "Create one reducer action union for the allowed updates.",
      "Use React.useReducer to manage the task array.",
      "Render the count and task rows from the reducer state.",
    ],
    commonMistakes: [
      "Creating a reducer but leaving the action shape too loose",
      "Updating the state directly instead of returning new arrays",
      "Dispatching actions but forgetting to render the changed state",
    ],
    expectedOutcome:
      "A compact reducer example that feels much closer to real app state than a single isolated useState value.",
    starter: {
      html: ``,
      css: `.task-board {\n  display: grid;\n  gap: 12px;\n}\n\n.task-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <section className="task-board"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.task-board {\n  display: grid;\n  gap: 12px;\n}\n\n.task-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n  background: white;\n}\n\n.task-row p {\n  margin: 0;\n}\n\n.task-row.done {\n  border-color: #86efac;\n  background: #f0fdf4;\n}`,
      js: `interface Task {\n  id: number;\n  title: string;\n  done: boolean;\n}\n\ntype Action =\n  | { type: "toggle"; id: number }\n  | { type: "markAllDone" };\n\nconst initialTasks: Task[] = [\n  { id: 1, title: "Type the props", done: true },\n  { id: 2, title: "Refactor the form state", done: false },\n  { id: 3, title: "Explain the API shape", done: false },\n];\n\nfunction taskReducer(state: Task[], action: Action): Task[] {\n  switch (action.type) {\n    case "toggle":\n      return state.map((task) =>\n        task.id === action.id ? { ...task, done: !task.done } : task\n      );\n    case "markAllDone":\n      return state.map((task) => ({ ...task, done: true }));\n    default:\n      return state;\n  }\n}\n\nfunction Challenge() {\n  const [tasks, dispatch] = React.useReducer(taskReducer, initialTasks);\n  const doneCount = tasks.filter((task) => task.done).length;\n\n  return (\n    <section className="task-board">\n      <p>\n        {doneCount} of {tasks.length} tasks complete\n      </p>\n      <button type="button" onClick={() => dispatch({ type: "markAllDone" })}>\n        Mark all done\n      </button>\n\n      {tasks.map((task) => (\n        <article className={\`task-row \${task.done ? "done" : ""}\`} key={task.id}>\n          <p>{task.title}</p>\n          <button\n            type="button"\n            onClick={() => dispatch({ type: "toggle", id: task.id })}\n          >\n            {task.done ? "Undo" : "Complete"}\n          </button>\n        </article>\n      ))}\n    </section>\n  );\n}`,
    },
  },
  {
    id: "ts-context-theme-panel",
    editorType: "react-ts",
    title: "Challenge 15 — Typed Context Theme Panel",
    difficulty: "Hard",
    category: "TypeScript + React",
    goal:
      "Create a typed context value so a small shared UI setting can be read safely by nested components.",
    requirements: [
      "Create a typed context value",
      "Use React.createContext and React.useContext",
      "Store the current theme in typed state",
      "Read the shared value inside a child component",
      "Let the user toggle the theme",
    ],
    tips: [
      "Context works best when several nested parts need the same shared value.",
      "The context type should describe both the current value and the action that updates it.",
      "Keep the UI small and readable.",
    ],
    concepts: [
      "TypeScript",
      "Context API",
      "typed state",
      "components",
    ],
    suggestedApproach: [
      "Create a theme union and a typed context shape.",
      "Create the provider in the Challenge component.",
      "Read the context from a nested child component.",
      "Use one button to toggle the theme value.",
    ],
    commonMistakes: [
      "Creating the context without typing the shared value",
      "Reading the context before checking whether it exists",
      "Keeping the theme only in one child instead of the shared provider",
    ],
    expectedOutcome:
      "A small typed context example that helps learners explain when shared state should move beyond local props.",
    starter: {
      html: ``,
      css: `.theme-shell {\n  padding: 18px;\n  border: 1px solid #dbe3ef;\n  border-radius: 18px;\n  background: white;\n}\n\n.theme-shell[data-theme="dark"] {\n  background: #0f172a;\n  color: white;\n}`,
      js: `function Challenge() {\n  return <section className="theme-shell"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.theme-shell {\n  display: grid;\n  gap: 12px;\n  padding: 18px;\n  border: 1px solid #dbe3ef;\n  border-radius: 18px;\n  background: white;\n}\n\n.theme-shell[data-theme="dark"] {\n  background: #0f172a;\n  color: white;\n}\n\n.theme-shell p {\n  margin: 0;\n}\n\nbutton {\n  width: fit-content;\n  padding: 12px 14px;\n  border: none;\n  border-radius: 12px;\n  background: #2563eb;\n  color: white;\n  font-weight: 700;\n}`,
      js: `type Theme = "light" | "dark";\n\ninterface ThemeContextValue {\n  theme: Theme;\n  toggleTheme: () => void;\n}\n\nconst ThemeContext = React.createContext<ThemeContextValue | null>(null);\n\nfunction ThemeSummary() {\n  const context = React.useContext(ThemeContext);\n\n  if (!context) {\n    return null;\n  }\n\n  return (\n    <>\n      <p>Current theme: {context.theme}</p>\n      <button type="button" onClick={context.toggleTheme}>\n        Toggle theme\n      </button>\n    </>\n  );\n}\n\nfunction Challenge() {\n  const [theme, setTheme] = React.useState<Theme>("light");\n\n  const value: ThemeContextValue = {\n    theme,\n    toggleTheme: () =>\n      setTheme((currentTheme) =>\n        currentTheme === "light" ? "dark" : "light"\n      ),\n  };\n\n  return (\n    <ThemeContext.Provider value={value}>\n      <section className="theme-shell" data-theme={theme}>\n        <h2>Study preferences</h2>\n        <ThemeSummary />\n      </section>\n    </ThemeContext.Provider>\n  );\n}`,
    },
  },
  {
    id: "ts-discriminated-async-panel",
    editorType: "react-ts",
    title: "Challenge 16 — Discriminated Async State Panel",
    difficulty: "Hard",
    category: "TypeScript + Async",
    goal:
      "Model loading, success, and error states with a discriminated union so async UI branches stay explicit.",
    requirements: [
      "Create a union type for the async state",
      "Store the async state in typed React state",
      "Use async or await to load mock data",
      "Render different UI for loading, success, and error",
      "Show at least one typed success branch with rendered data",
    ],
    tips: [
      "This is one of the best TypeScript habits for real async UI.",
      "The shared status field helps TypeScript narrow each branch safely.",
      "Use a small fake request so the state model stays easy to read.",
    ],
    concepts: [
      "TypeScript",
      "union types",
      "typed state",
      "async/await",
      "error handling",
    ],
    suggestedApproach: [
      "Define the different async state shapes first.",
      "Create one fake request helper.",
      "Update the state to loading before the request and success or error after it.",
      "Render one clear branch for each status.",
    ],
    commonMistakes: [
      "Using a plain string for status but leaving the data shape loose",
      "Trying to read success data inside the loading or error branch",
      "Forgetting to handle the error path cleanly",
    ],
    expectedOutcome:
      "A typed async panel that looks much closer to production frontend state than a single loose loading boolean.",
    starter: {
      html: ``,
      css: `.async-panel {\n  display: grid;\n  gap: 12px;\n}\n\n.lesson-row {\n  padding: 12px;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <section className="async-panel"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.async-panel {\n  display: grid;\n  gap: 12px;\n}\n\n.actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.lesson-row {\n  padding: 12px;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n  background: white;\n}\n\nbutton {\n  padding: 12px 14px;\n  border: none;\n  border-radius: 12px;\n  background: #0f172a;\n  color: white;\n  font-weight: 700;\n}`,
      js: `interface Lesson {\n  id: number;\n  title: string;\n}\n\ntype AsyncState =\n  | { status: "idle" }\n  | { status: "loading" }\n  | { status: "success"; items: Lesson[] }\n  | { status: "error"; message: string };\n\nconst lessons: Lesson[] = [\n  { id: 1, title: "Typed props pass" },\n  { id: 2, title: "Reducer action review" },\n  { id: 3, title: "Async UI state walkthrough" },\n];\n\nfunction loadLessons(shouldFail: boolean): Promise<Lesson[]> {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (shouldFail) {\n        reject(new Error("Lesson request failed."));\n        return;\n      }\n\n      resolve(lessons);\n    }, 500);\n  });\n}\n\nfunction Challenge() {\n  const [view, setView] = React.useState<AsyncState>({ status: "idle" });\n\n  async function handleLoad(shouldFail: boolean) {\n    setView({ status: "loading" });\n\n    try {\n      const items = await loadLessons(shouldFail);\n      setView({ status: "success", items });\n    } catch (error) {\n      setView({\n        status: "error",\n        message:\n          error instanceof Error ? error.message : "Something went wrong.",\n      });\n    }\n  }\n\n  return (\n    <section className="async-panel">\n      <div className="actions">\n        <button type="button" onClick={() => handleLoad(false)}>\n          Load lessons\n        </button>\n        <button type="button" onClick={() => handleLoad(true)}>\n          Simulate error\n        </button>\n      </div>\n\n      {view.status === "idle" ? <p>Choose a request to start.</p> : null}\n      {view.status === "loading" ? <p>Loading typed lessons...</p> : null}\n      {view.status === "error" ? <p>{view.message}</p> : null}\n\n      {view.status === "success"\n        ? view.items.map((lesson) => (\n            <article className="lesson-row" key={lesson.id}>\n              {lesson.title}\n            </article>\n          ))\n        : null}\n    </section>\n  );\n}`,
    },
  },
  {
    id: "ts-typed-route-details",
    editorType: "react-ts",
    title: "Challenge 17 — Typed Route Details",
    difficulty: "Hard",
    category: "TypeScript + React",
    goal:
      "Use React Router with typed data and a route param lookup so the learner practices a common real app pattern in TypeScript.",
    requirements: [
      "Use HashRouter, Routes, Route, and Link",
      "Render links from typed data",
      "Use useParams in the detail screen",
      "Find the matching typed item from the route param",
      "Show a clear fallback when no item is found",
    ],
    tips: [
      "This is a realistic pattern for lessons, products, jobs, and user profile screens.",
      "Type the data first, then look up the item from the route param.",
      "Keep the layout small so the route idea stays central.",
    ],
    concepts: [
      "TypeScript",
      "routing",
      "dynamic routes",
      "typed data",
    ],
    suggestedApproach: [
      "Create the typed lesson data.",
      "Build a list screen with links.",
      "Read the route param in the detail screen.",
      "Render the matching lesson or a fallback message.",
    ],
    commonMistakes: [
      "Using routes but not typed data for the lookup",
      "Assuming the route param always matches a real item",
      "Rendering links without a detail route to receive them",
    ],
    expectedOutcome:
      "A typed route flow that feels much closer to actual frontend app work than a static page exercise.",
    starter: {
      html: ``,
      css: `.route-board {\n  display: grid;\n  gap: 12px;\n}\n\n.route-card {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <section className="route-board"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.route-board {\n  display: grid;\n  gap: 12px;\n}\n\n.route-card {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}\n\n.route-card h2,\n.route-card p {\n  margin: 0;\n}\n\n.route-card p {\n  margin-top: 6px;\n  color: #475569;\n}`,
      js: `const { HashRouter, Routes, Route, Link, useParams } = ReactRouterDOM;\n\ninterface Lesson {\n  id: string;\n  title: string;\n  summary: string;\n}\n\nconst typedLessons: Lesson[] = [\n  { id: "props", title: "Typed props", summary: "Protect component inputs." },\n  { id: "async", title: "Typed async state", summary: "Model loading and error branches." },\n  { id: "routes", title: "Typed routes", summary: "Connect params to real data." },\n];\n\nfunction LessonList() {\n  return (\n    <section className="route-board">\n      {typedLessons.map((lesson) => (\n        <article className="route-card" key={lesson.id}>\n          <h2>{lesson.title}</h2>\n          <p>{lesson.summary}</p>\n          <Link to={\`/lesson/\${lesson.id}\`}>Open details</Link>\n        </article>\n      ))}\n    </section>\n  );\n}\n\nfunction LessonDetails() {\n  const params = useParams<{ lessonId: string }>();\n  const lesson = typedLessons.find((item) => item.id === params.lessonId);\n\n  if (!lesson) {\n    return <p>Lesson not found.</p>;\n  }\n\n  return (\n    <article className="route-card">\n      <h2>{lesson.title}</h2>\n      <p>{lesson.summary}</p>\n      <Link to="/">Back to list</Link>\n    </article>\n  );\n}\n\nfunction Challenge() {\n  return (\n    <HashRouter>\n      <Routes>\n        <Route path="/" element={<LessonList />} />\n        <Route path="/lesson/:lessonId" element={<LessonDetails />} />\n      </Routes>\n    </HashRouter>\n  );\n}`,
    },
  },
  {
    id: "ts-typed-localstorage-hook",
    editorType: "react-ts",
    title: "Challenge 18 — Typed localStorage Hook",
    difficulty: "Hard",
    category: "TypeScript + React",
    goal:
      "Create a small typed custom hook that syncs one value with localStorage and reuse it in the UI.",
    requirements: [
      "Create a reusable hook function",
      "Use typed state inside the hook",
      "Read from localStorage on first render",
      "Write back to localStorage when the value changes",
      "Use the hook from the Challenge component",
    ],
    tips: [
      "A custom hook is a good place to hide repeat storage logic.",
      "Keep the stored value simple so the hook stays readable.",
      "Use JSON.parse and JSON.stringify so the stored value stays safe.",
    ],
    concepts: [
      "TypeScript",
      "typed state",
      "useEffect",
      "localStorage",
    ],
    suggestedApproach: [
      "Create the hook with a typed generic or a typed value shape.",
      "Read the stored value in the initial state function.",
      "Write the value back with useEffect.",
      "Use the hook to power a view-mode toggle in the UI.",
    ],
    commonMistakes: [
      "Reading from localStorage on every render instead of once",
      "Saving the value but not restoring it on reload",
      "Creating the hook but still duplicating storage logic in the component",
    ],
    expectedOutcome:
      "A reusable typed storage hook that feels like the kind of helper many teams write in real apps.",
    starter: {
      html: ``,
      css: `.view-board {\n  display: grid;\n  gap: 12px;\n}\n\n.view-card {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}`,
      js: `function Challenge() {\n  return <section className="view-board"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.view-board {\n  display: grid;\n  gap: 12px;\n}\n\n.view-card {\n  padding: 14px;\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  background: white;\n}\n\nbutton {\n  width: fit-content;\n  padding: 12px 14px;\n  border: none;\n  border-radius: 12px;\n  background: #2563eb;\n  color: white;\n  font-weight: 700;\n}`,
      js: `type ViewMode = "grid" | "list";\n\nfunction useStoredPreference<T>(key: string, initialValue: T) {\n  const [value, setValue] = React.useState<T>(() => {\n    try {\n      const raw = localStorage.getItem(key);\n      return raw ? (JSON.parse(raw) as T) : initialValue;\n    } catch (error) {\n      return initialValue;\n    }\n  });\n\n  React.useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n\n  return [value, setValue] as const;\n}\n\nfunction Challenge() {\n  const [viewMode, setViewMode] = useStoredPreference<ViewMode>(\n    "ts-view-mode",\n    "grid"\n  );\n\n  return (\n    <section className="view-board">\n      <button\n        type="button"\n        onClick={() =>\n          setViewMode((currentMode) =>\n            currentMode === "grid" ? "list" : "grid"\n          )\n        }\n      >\n        Toggle view mode\n      </button>\n\n      <article className="view-card">\n        <h2>Saved preference</h2>\n        <p>Current view: {viewMode}</p>\n      </article>\n    </section>\n  );\n}`,
    },
  },
  {
    id: "ts-all-in-one-dashboard-capstone",
    editorType: "react-ts",
    title: "Challenge 14 — TypeScript All-in-One Dashboard",
    difficulty: "Hard",
    category: "TypeScript + Capstone",
    goal:
      "Build one typed React dashboard that combines typed data, union filters, derived results, a controlled form, and clear feedback.",
    requirements: [
      "Create a type or interface for the main data",
      "Use a small union type for the filter",
      "Use typed state in React",
      "Render filtered data from typed arrays",
      "Add a controlled form with a typed submit event",
      "Show a clear success or error message",
    ],
    tips: [
      "This capstone is about everyday TypeScript confidence, not advanced syntax tricks.",
      "Start with the data model, then type the filter and form states.",
      "Keep the UI polished but calm.",
    ],
    concepts: [
      "TypeScript",
      "typed state",
      "typed forms",
      "union types",
      "typed data",
      "capstone",
    ],
    suggestedApproach: [
      "Create the main data type and typed array.",
      "Add a union filter and derive the visible rows.",
      "Create a small controlled form with typed state.",
      "Finish with clear feedback and organized layout.",
    ],
    commonMistakes: [
      "Typing only one part of the feature",
      "Using string everywhere instead of a focused union",
      "Leaving the form or feedback flow untyped",
    ],
    expectedOutcome:
      "A realistic typed dashboard that proves the learner can use TypeScript in modern junior React work.",
    starter: {
      html: ``,
      css: `.ts-capstone {\n  display: grid;\n  gap: 16px;\n}\n\n.ts-toolbar,\n.ts-goal-form,\n.ts-card-grid {\n  display: grid;\n  gap: 12px;\n}\n`,
      js: `type TrackFilter = "All" | "Frontend" | "React" | "Testing";\n\nfunction Challenge() {\n  return <section className="ts-capstone"></section>;\n}`,
    },
    solution: {
      html: ``,
      css: `.ts-capstone {\n  display: grid;\n  gap: 16px;\n}\n\n.ts-toolbar {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.ts-card-grid {\n  display: grid;\n  gap: 12px;\n}\n\n.ts-card,\n.ts-goal-form {\n  padding: 16px;\n  border: 1px solid #dbe3ef;\n  border-radius: 16px;\n  background: white;\n}\n\n.ts-card h2,\n.ts-card p,\n.ts-goal-form p {\n  margin: 0;\n}\n\n.ts-card p,\n.ts-goal-form p {\n  color: #475569;\n}\n\n.ts-goal-form {\n  max-width: 360px;\n}\n\ninput,\nselect,\nbutton {\n  padding: 12px;\n  border-radius: 12px;\n}\n\ninput,\nselect {\n  border: 1px solid #dbe3ef;\n}\n\nbutton {\n  border: none;\n  background: #0f172a;\n  color: white;\n  font-weight: 700;\n}`,
      js: `type TrackFilter = "All" | "Frontend" | "React" | "Testing";\n\ninterface SkillCard {\n  id: number;\n  title: string;\n  track: Exclude<TrackFilter, "All">;\n  ready: boolean;\n}\n\ninterface GoalFormState {\n  goal: string;\n}\n\nconst skillCards: SkillCard[] = [\n  { id: 1, title: "Navbar accessibility pass", track: "Frontend", ready: true },\n  { id: 2, title: "Movie search refactor", track: "React", ready: false },\n  { id: 3, title: "Loading state tests", track: "Testing", ready: true },\n  { id: 4, title: "Typed filter workflow", track: "React", ready: true },\n];\n\nfunction Challenge() {\n  const [filter, setFilter] = React.useState<TrackFilter>("All");\n  const [form, setForm] = React.useState<GoalFormState>({ goal: "" });\n  const [message, setMessage] = React.useState<string>("");\n\n  const visibleCards = skillCards.filter((card) => {\n    return filter === "All" || card.track === filter;\n  });\n\n  const readyCount = visibleCards.filter((card) => card.ready).length;\n\n  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n    event.preventDefault();\n\n    if (!form.goal.trim()) {\n      setMessage("Add one study goal before saving.");\n      return;\n    }\n\n    setMessage("Typed study goal saved.");\n    setForm({ goal: "" });\n  }\n\n  return (\n    <section className="ts-capstone">\n      <div className="ts-toolbar">\n        <select\n          value={filter}\n          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>\n            setFilter(event.target.value as TrackFilter)\n          }\n        >\n          <option>All</option>\n          <option>Frontend</option>\n          <option>React</option>\n          <option>Testing</option>\n        </select>\n        <p>\n          Showing {visibleCards.length} cards · {readyCount} ready\n        </p>\n      </div>\n\n      <section className="ts-card-grid">\n        {visibleCards.map((card) => (\n          <article className="ts-card" key={card.id}>\n            <h2>{card.title}</h2>\n            <p>{card.track}</p>\n            <p>{card.ready ? "Ready" : "Needs more work"}</p>\n          </article>\n        ))}\n      </section>\n\n      <form className="ts-goal-form" onSubmit={handleSubmit}>\n        <input\n          value={form.goal}\n          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>\n            setForm({ goal: event.target.value })\n          }\n          placeholder="Add your next TypeScript goal"\n        />\n        <button type="submit">Save goal</button>\n        <p>{message}</p>\n      </form>\n    </section>\n  );\n}`,
    },
  },
];
