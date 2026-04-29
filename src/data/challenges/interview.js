export const interviewChallenges = [
  {
    id: "interview-html-css-build-test",
    editorType: "web",
    title: "Challenge 1 — Interview Test: Responsive Restaurant Build",
    difficulty: "Hard",
    category: "HTML + CSS",
    goal: "Build a polished restaurant landing page from a take-home style brief.",
    requirements: [
      "Create a nav bar with brand and links",
      "Add a hero section with heading, paragraph, and call to action",
      "Add at least 3 feature or menu cards",
      "Add one supporting section such as testimonials, story, or booking info",
      "Add a footer",
      "Make the layout responsive",
    ],
    tips: [
      "Think like a junior take-home task: structure first, polish second.",
      "Use semantic sections and repeatable cards.",
      "A clean responsive layout matters as much as the visual styling.",
    ],
    concepts: [
      "semantic HTML",
      "responsive layout",
      "cards",
      "navigation",
      "visual hierarchy",
    ],
    suggestedApproach: [
      "Start with the page sections and semantic structure.",
      "Build the hero and supporting content with consistent spacing.",
      "Create the card pattern once and reuse it.",
      "Finish with responsive rules so the layout still scans well on smaller screens.",
    ],
    commonMistakes: [
      "Jumping into styling before the page structure is clear",
      "Using inconsistent spacing between sections",
      "Forgetting to adapt the layout on smaller screens",
    ],
    expectedOutcome:
      "A recruiter-ready landing page that feels like a small but complete client build.",
    starter: {
      html: ``,
      css: ``,
      js: ``,
    },
    solution: {
      html: `<main class="page-shell">
  <header class="site-header">
    <nav class="navbar">
      <strong class="brand">Marina Table</strong>
      <div class="nav-links">
        <a href="#story">Story</a>
        <a href="#menu">Menu</a>
        <a href="#visit">Visit</a>
      </div>
    </nav>

    <section class="hero">
      <div>
        <p class="eyebrow">Seasonal tasting menu</p>
        <h1>Modern coastal dining with calm, simple details.</h1>
        <p class="hero-copy">
          A polished restaurant site should help visitors scan the offer quickly,
          trust the brand, and decide what to do next.
        </p>
        <a class="hero-btn" href="#menu">Explore the menu</a>
      </div>
      <div class="hero-panel">
        <h2>Tonight</h2>
        <p>Fresh pasta, grilled fish, and a small dessert tasting.</p>
      </div>
    </section>
  </header>

  <section id="menu" class="feature-grid">
    <article>
      <h3>Lunch set</h3>
      <p>Two courses, fast service, and a rotating seasonal menu.</p>
    </article>
    <article>
      <h3>Chef specials</h3>
      <p>Plates designed for evening bookings and tasting menus.</p>
    </article>
    <article>
      <h3>Private dining</h3>
      <p>Small event packages for teams, birthdays, and celebrations.</p>
    </article>
  </section>

  <section id="story" class="story-band">
    <div>
      <p class="eyebrow">Why this matters</p>
      <h2>Interview tasks usually test structure, rhythm, and restraint.</h2>
    </div>
    <p>
      A strong frontend solution does not just place content on the page. It
      creates clear sections, sensible spacing, and obvious next actions.
    </p>
  </section>

  <section id="visit" class="visit-panel">
    <div>
      <h2>Visit Marina Table</h2>
      <p>Open Tuesday to Sunday on Market Quay, with reservations from 6pm.</p>
    </div>
    <footer>
      <small>27 Market Quay · London · Reservations recommended</small>
    </footer>
  </section>
</main>`,
      css: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f8fafc;
  color: #0f172a;
  font-family: Arial, sans-serif;
}

.page-shell {
  display: grid;
  gap: 28px;
  padding: 24px;
}

.site-header,
.story-band,
.visit-panel {
  padding: 24px;
  border: 1px solid #dbe3ef;
  border-radius: 20px;
  background: white;
}

.navbar,
.hero,
.story-band {
  display: grid;
  gap: 20px;
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

.brand,
.hero h1,
.hero h2,
.feature-grid h3,
.story-band h2,
.visit-panel h2 {
  margin: 0;
}

.hero {
  grid-template-columns: minmax(0, 1.6fr) minmax(240px, 0.8fr);
  align-items: stretch;
}

.hero-copy,
.feature-grid p,
.story-band p,
.visit-panel p {
  line-height: 1.6;
  color: #475569;
}

.hero-panel {
  padding: 20px;
  border-radius: 18px;
  background: #eff6ff;
}

.hero-btn {
  display: inline-flex;
  margin-top: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  background: #0f172a;
  color: white;
  font-weight: 700;
  text-decoration: none;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.feature-grid article {
  padding: 20px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: white;
}

.eyebrow {
  margin: 0 0 10px;
  color: #2563eb;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
}

footer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #dbe3ef;
}

@media (max-width: 760px) {
  .navbar,
  .hero,
  .story-band {
    grid-template-columns: 1fr;
  }
}`,
      js: ``,
    },
  },
  {
    id: "interview-dom-logic-test",
    editorType: "web",
    title: "Challenge 2 — Interview Test: DOM Support Workspace",
    difficulty: "Hard",
    category: "JavaScript + DOM",
    goal: "Build an interactive support workspace with search, clear, no-results, and expandable FAQ cards.",
    requirements: [
      "Add a search input",
      "Add a clear button",
      "Render help cards or FAQ cards",
      "Filter the cards while typing",
      "Show a no-results state when nothing matches",
      "Allow users to expand and collapse one answer",
    ],
    tips: [
      "This is a realistic DOM exercise because multiple small behaviors need to work together.",
      "Use one render step for the filtered cards if you want the logic to stay tidy.",
      "A clear button and empty state make the feature feel much more complete.",
    ],
    concepts: [
      "event listeners",
      "DOM filtering",
      "empty states",
      "toggle behavior",
      "UI feedback",
    ],
    suggestedApproach: [
      "Create the shell with search controls and one output area.",
      "Store the support cards in an array of objects.",
      "Filter the data from the input value and render the cards from that result.",
      "Attach toggle behavior to the rendered card buttons.",
    ],
    commonMistakes: [
      "Filtering the data but forgetting to re-render the cards",
      "Showing the no-results state at the wrong time",
      "Adding toggle logic that breaks after the cards are re-rendered",
    ],
    expectedOutcome:
      "A help center interface that feels like a realistic junior frontend assignment.",
    starter: {
      html: `<section class="workspace">
  <div class="toolbar">
    <input id="supportSearchInput" type="text" placeholder="Search help articles..." />
    <button id="supportClearBtn" type="button">Clear</button>
  </div>
  <p id="supportEmptyState" hidden>No results found.</p>
  <section id="supportCards"></section>
</section>`,
      css: `.workspace {
  display: grid;
  gap: 16px;
}

.toolbar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}`,
      js: ``,
    },
    solution: {
      html: `<section class="workspace">
  <div class="toolbar">
    <input id="supportSearchInput" type="text" placeholder="Search help articles..." />
    <button id="supportClearBtn" type="button">Clear</button>
  </div>
  <p id="supportEmptyState" hidden>No results found.</p>
  <section id="supportCards" class="support-grid"></section>
</section>`,
      css: `.workspace {
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
}

input {
  border: 1px solid #cbd5e1;
}

button {
  border: none;
  background: #0f172a;
  color: white;
  font-weight: 700;
}

.support-grid {
  display: grid;
  gap: 14px;
}

.support-card {
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: white;
}

.support-card button {
  width: 100%;
  text-align: left;
  background: #eff6ff;
  color: #1d4ed8;
}`,
      js: `const supportSearchInput = document.getElementById("supportSearchInput");
const supportClearBtn = document.getElementById("supportClearBtn");
const supportEmptyState = document.getElementById("supportEmptyState");
const supportCards = document.getElementById("supportCards");

const supportArticles = [
  {
    id: 1,
    title: "Reset password",
    body: "Use the forgot password flow and confirm the email link before trying again.",
  },
  {
    id: 2,
    title: "Billing invoice",
    body: "Invoices live in the billing area and can be downloaded as PDF files.",
  },
  {
    id: 3,
    title: "Update profile",
    body: "Profile settings let users change their name, role, and notification choices.",
  },
];

let openId = null;

function renderSupportCards() {
  const query = supportSearchInput.value.toLowerCase();
  const visibleArticles = supportArticles.filter((article) => {
    return (
      article.title.toLowerCase().includes(query) ||
      article.body.toLowerCase().includes(query)
    );
  });

  supportEmptyState.hidden = visibleArticles.length > 0;

  supportCards.innerHTML = visibleArticles
    .map((article) => {
      const isOpen = article.id === openId;

      return (
        "<article class='support-card'>" +
        "<button type='button' data-id='" +
        article.id +
        "'>" +
        (isOpen ? "Hide" : "Show") +
        " - " +
        article.title +
        "</button>" +
        (isOpen ? "<p>" + article.body + "</p>" : "") +
        "</article>"
      );
    })
    .join("");
}

supportSearchInput.addEventListener("input", renderSupportCards);

supportClearBtn.addEventListener("click", () => {
  supportSearchInput.value = "";
  renderSupportCards();
});

supportCards.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const cardId = Number(button.dataset.id);
  openId = openId === cardId ? null : cardId;
  renderSupportCards();
});

renderSupportCards();`,
    },
  },
  {
    id: "interview-async-api-test",
    editorType: "web",
    title: "Challenge 3 — Interview Test: Async Operations Dashboard",
    difficulty: "Hard",
    category: "JavaScript + Async",
    goal: "Build a small async dashboard with loading, error, retry, status filtering, and a saved reviewer note.",
    requirements: [
      "Load data asynchronously",
      "Show a loading state",
      "Show an error state with retry",
      "Render data cards after loading",
      "Filter the visible data by status",
      "Save one reviewer note in localStorage",
    ],
    tips: [
      "Interview async tasks are usually about lifecycle management, not raw complexity.",
      "Keep one function responsible for loading and one for rendering.",
      "Remember the note and the async data are two separate concerns.",
    ],
    concepts: [
      "async/await",
      "loading state",
      "error state",
      "filter()",
      "localStorage",
    ],
    suggestedApproach: [
      "Create the shell for status, controls, cards, and note area.",
      "Write a fake async request that fails once and then succeeds.",
      "Render loading, error, and success states clearly.",
      "Apply the selected status filter to the loaded data before rendering.",
    ],
    commonMistakes: [
      "Not resetting the status before retrying the request",
      "Filtering the wrong array or not re-rendering after the select changes",
      "Saving the note locally but not restoring it on page load",
    ],
    expectedOutcome:
      "A realistic async dashboard that shows the learner can handle data lifecycle and interface state together.",
    starter: {
      html: `<section class="ops-dashboard">
  <div class="toolbar">
    <button id="retryOpsBtn" type="button">Retry load</button>
    <select id="opsStatusFilter">
      <option value="All">All</option>
      <option value="Open">Open</option>
      <option value="Blocked">Blocked</option>
    </select>
  </div>
  <p id="opsStatusText">Loading...</p>
  <section id="opsCards"></section>
  <textarea id="opsNoteInput" placeholder="Write a reviewer note"></textarea>
  <button id="opsSaveNoteBtn" type="button">Save note</button>
</section>`,
      css: `.ops-dashboard {
  display: grid;
  gap: 16px;
}`,
      js: ``,
    },
    solution: {
      html: `<section class="ops-dashboard">
  <div class="toolbar">
    <button id="retryOpsBtn" type="button">Retry load</button>
    <select id="opsStatusFilter">
      <option value="All">All</option>
      <option value="Open">Open</option>
      <option value="Blocked">Blocked</option>
    </select>
  </div>
  <p id="opsStatusText">Loading...</p>
  <section id="opsCards" class="ops-grid"></section>
  <textarea id="opsNoteInput" placeholder="Write a reviewer note"></textarea>
  <button id="opsSaveNoteBtn" type="button">Save note</button>
</section>`,
      css: `.ops-dashboard {
  display: grid;
  gap: 16px;
}

.toolbar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.ops-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.ops-card {
  padding: 18px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: white;
}

textarea,
button,
select {
  padding: 12px;
  border-radius: 12px;
}

textarea {
  min-height: 110px;
  border: 1px solid #cbd5e1;
}

button {
  border: none;
  background: #0f172a;
  color: white;
  font-weight: 700;
}`,
      js: `const retryOpsBtn = document.getElementById("retryOpsBtn");
const opsStatusFilter = document.getElementById("opsStatusFilter");
const opsStatusText = document.getElementById("opsStatusText");
const opsCards = document.getElementById("opsCards");
const opsNoteInput = document.getElementById("opsNoteInput");
const opsSaveNoteBtn = document.getElementById("opsSaveNoteBtn");

let failOnce = true;
let dashboardItems = [];

function loadOperations() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (failOnce) {
        failOnce = false;
        reject(new Error("The dashboard request failed. Try again."));
        return;
      }

      resolve([
        { id: 1, title: "Review invoices", status: "Open" },
        { id: 2, title: "Fix onboarding bug", status: "Blocked" },
        { id: 3, title: "Reply to leads", status: "Open" },
      ]);
    }, 700);
  });
}

function renderOperations() {
  const activeStatus = opsStatusFilter.value;
  const visibleItems = dashboardItems.filter((item) => {
    return activeStatus === "All" || item.status === activeStatus;
  });

  opsCards.innerHTML = visibleItems
    .map(
      (item) =>
        "<article class='ops-card'><h3>" +
        item.title +
        "</h3><p>Status: " +
        item.status +
        "</p></article>"
    )
    .join("");
}

async function hydrateDashboard() {
  opsStatusText.textContent = "Loading...";
  opsCards.innerHTML = "";

  try {
    dashboardItems = await loadOperations();
    opsStatusText.textContent = "Dashboard loaded successfully.";
    renderOperations();
  } catch (error) {
    opsStatusText.textContent = error.message;
  }
}

retryOpsBtn.addEventListener("click", hydrateDashboard);
opsStatusFilter.addEventListener("change", renderOperations);

opsSaveNoteBtn.addEventListener("click", () => {
  localStorage.setItem("interview-ops-note", opsNoteInput.value);
  opsStatusText.textContent = "Reviewer note saved locally.";
});

opsNoteInput.value = localStorage.getItem("interview-ops-note") || "";

hydrateDashboard();`,
    },
  },
  {
    id: "interview-react-takehome-test",
    editorType: "react",
    title: "Challenge 4 — Interview Test: React Take-Home App",
    difficulty: "Hard",
    category: "React Capstone",
    goal: "Build a small routed hiring app with search, filters, saved roles, and an application screen.",
    requirements: [
      "Use HashRouter, Routes, Route, and Link",
      "Build at least 3 routes",
      "Render a list of jobs from data",
      "Add search and location filters",
      "Allow users to save and unsave roles",
      "Save the saved roles in localStorage",
      "Add an application screen with a simple controlled form",
    ],
    tips: [
      "This is close to a real junior take-home: routing, state, derived lists, and one form.",
      "Keep the source data outside the component and derive the visible list from state.",
      "A small application form is enough; the goal is the flow, not backend integration.",
    ],
    concepts: [
      "routing",
      "useState",
      "localStorage",
      "controlled forms",
      "multiple filters",
    ],
    suggestedApproach: [
      "Create the jobs data and the route structure first.",
      "Store search, location, and saved ids in state.",
      "Save the saved ids to localStorage and restore them on load.",
      "Create a small application page with controlled inputs and a success message.",
    ],
    commonMistakes: [
      "Storing the filtered list in state instead of deriving it",
      "Saving jobs visually without keeping the ids in state",
      "Forgetting to wrap the routes in a router",
    ],
    expectedOutcome:
      "A realistic React take-home style app that feels like something a junior could discuss in an interview.",
    starter: {
      html: ``,
      css: `.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
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
      css: `.app-shell {
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

.job-grid {
  display: grid;
  gap: 14px;
}

.job-card,
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

const jobs = [
  { id: 1, title: "Frontend Developer", location: "Remote" },
  { id: 2, title: "React Engineer", location: "London" },
  { id: 3, title: "UI Developer", location: "Remote" },
];

function JobList({ search, setSearch, location, setLocation, savedIds, onToggleSaved }) {
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchesLocation = location === "All" || job.location === location;

    return matchesSearch && matchesLocation;
  });

  return (
    <section className="app-shell">
      <div className="filters">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search roles"
        />
        <select value={location} onChange={(event) => setLocation(event.target.value)}>
          <option>All</option>
          <option>Remote</option>
          <option>London</option>
        </select>
      </div>

      {filteredJobs.length === 0 ? (
        <p>No jobs match those filters.</p>
      ) : (
        <div className="job-grid">
          {filteredJobs.map((job) => (
            <article className="job-card" key={job.id}>
              <h2>{job.title}</h2>
              <p>{job.location}</p>
              <div className="filters">
                <Link to={"/apply/" + job.id}>Apply</Link>
                <button type="button" onClick={() => onToggleSaved(job.id)}>
                  {savedIds.includes(job.id) ? "Saved" : "Save role"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function SavedRoles({ savedIds }) {
  const savedJobs = jobs.filter((job) => savedIds.includes(job.id));

  return (
    <section className="panel">
      <h2>Saved roles</h2>
      {savedJobs.length === 0 ? (
        <p>No saved roles yet.</p>
      ) : (
        <ul>
          {savedJobs.map((job) => (
            <li key={job.id}>
              {job.title} · {job.location}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function ApplyPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.includes("@")) {
      setMessage("Please enter a name and a valid email.");
      return;
    }

    setMessage("Application draft looks ready.");
  }

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h2>Application</h2>
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
      <button type="submit">Review application</button>
      <p>{message}</p>
    </form>
  );
}

function Challenge() {
  const [search, setSearch] = React.useState("");
  const [location, setLocation] = React.useState("All");
  const [savedIds, setSavedIds] = React.useState(() => {
    try {
      const raw = localStorage.getItem("interview-saved-jobs");
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  });

  React.useEffect(() => {
    localStorage.setItem("interview-saved-jobs", JSON.stringify(savedIds));
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
      <div className="app-shell">
        <nav>
          <Link to="/">Jobs</Link>
          <Link to="/saved">Saved</Link>
          <Link to="/apply/1">Apply</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <JobList
                search={search}
                setSearch={setSearch}
                location={location}
                setLocation={setLocation}
                savedIds={savedIds}
                onToggleSaved={toggleSaved}
              />
            }
          />
          <Route path="/saved" element={<SavedRoles savedIds={savedIds} />} />
          <Route path="/apply/:id" element={<ApplyPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}`,
    },
  },
  {
    id: "interview-accessibility-qa-test",
    editorType: "web",
    title: "Challenge 5 — Interview Test: Accessible Reservation Flow",
    difficulty: "Hard",
    category: "Accessibility + QA",
    goal: "Build a reservation request form with labels, visible focus states, validation feedback, and a clear success message.",
    requirements: [
      "Add a form with at least name, email, and guest count",
      "Add labels for the inputs",
      "Show visible focus styles",
      "Validate the fields on submit",
      "Show an error or success message",
      "Keep the form readable and keyboard-friendly",
    ],
    tips: [
      "This kind of interview brief checks quality, not just whether inputs exist.",
      "Use the real HTML elements first before reaching for extra JavaScript.",
      "A polished message and focus state often say more about job readiness than decoration.",
    ],
    concepts: [
      "accessibility",
      "form validation",
      "focus states",
      "semantic HTML",
      "UI feedback",
    ],
    suggestedApproach: [
      "Build the form structure with labels and grouped fields.",
      "Add CSS for spacing, borders, and clear focus treatment.",
      "Handle submit with JavaScript and validate the main fields.",
      "Show one clear feedback message after validation runs.",
    ],
    commonMistakes: [
      "Using placeholders without real labels",
      "Removing focus outlines without replacing them",
      "Showing success before the required fields are checked",
    ],
    expectedOutcome:
      "A reservation form that feels accessible, intentional, and safe to ship.",
    starter: {
      html: `<section class="reservation-shell">
  <h1>Reserve your table</h1>
  <form id="reservationForm">
  </form>
  <p id="reservationFeedback"></p>
</section>`,
      css: `.reservation-shell {
  display: grid;
  gap: 16px;
  max-width: 560px;
}`,
      js: ``,
    },
    solution: {
      html: `<section class="reservation-shell">
  <h1>Reserve your table</h1>
  <form id="reservationForm" class="reservation-form">
    <label for="reservationName">Name</label>
    <input id="reservationName" type="text" />

    <label for="reservationEmail">Email</label>
    <input id="reservationEmail" type="email" />

    <label for="reservationGuests">Guests</label>
    <select id="reservationGuests">
      <option value="">Choose</option>
      <option value="2">2</option>
      <option value="4">4</option>
      <option value="6">6</option>
    </select>

    <button type="submit">Review request</button>
  </form>
  <p id="reservationFeedback" aria-live="polite"></p>
</section>`,
      css: `.reservation-shell {
  display: grid;
  gap: 16px;
  max-width: 560px;
  padding: 20px;
}

.reservation-form {
  display: grid;
  gap: 12px;
}

label {
  font-weight: 700;
}

input,
select,
button {
  padding: 12px;
  border-radius: 12px;
  font: inherit;
}

input,
select {
  border: 1px solid #cbd5e1;
}

input:focus,
select:focus,
button:focus {
  outline: 3px solid #93c5fd;
  outline-offset: 2px;
}

button {
  border: none;
  background: #0f172a;
  color: white;
  font-weight: 700;
}`,
      js: `const reservationForm = document.getElementById("reservationForm");
const reservationName = document.getElementById("reservationName");
const reservationEmail = document.getElementById("reservationEmail");
const reservationGuests = document.getElementById("reservationGuests");
const reservationFeedback = document.getElementById("reservationFeedback");

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = reservationName.value.trim();
  const email = reservationEmail.value.trim();
  const guests = reservationGuests.value;

  if (!name || !email.includes("@") || !guests) {
    reservationFeedback.textContent =
      "Please enter your name, a valid email, and the guest count.";
    return;
  }

  reservationFeedback.textContent =
    "Reservation request looks ready to send.";
});`,
    },
  },
  {
    id: "interview-debug-dom-test",
    editorType: "web",
    title: "Challenge 6 — Interview Test: Debug a Broken DOM Filter",
    difficulty: "Hard",
    category: "JavaScript + Debugging",
    goal: "Fix a broken resource filter so search, clear, and no-results states work correctly again.",
    requirements: [
      "Fix the search behavior",
      "Make the search case-insensitive",
      "Fix the clear button",
      "Show a no-results state only when needed",
      "Keep the cards rendering from data",
    ],
    tips: [
      "Read the broken code slowly before changing everything.",
      "Good debugging usually starts with one visible symptom and one assumption at a time.",
      "If you need to rewrite part of the logic, keep the data shape stable.",
    ],
    concepts: [
      "debugging",
      "DOM filtering",
      "event listeners",
      "empty states",
      "rendering from arrays",
    ],
    suggestedApproach: [
      "Find why the current query is not matching predictably.",
      "Check that the clear button updates both the input and the rendered output.",
      "Make sure the empty state only appears when the filtered list is empty.",
      "Re-render from the filtered array after each relevant UI action.",
    ],
    commonMistakes: [
      "Fixing the search but forgetting the clear button",
      "Showing the empty state all the time",
      "Changing the data instead of the render logic",
    ],
    expectedOutcome:
      "A recovered filter interface that behaves like a reliable junior production task.",
    starter: {
      html: `<section class="debug-shell">
  <div class="toolbar">
    <input id="debugSearchInput" type="text" placeholder="Search resources" />
    <button id="debugClearBtn" type="button">Clear</button>
  </div>
  <p id="debugEmptyState" hidden>No matches found.</p>
  <section id="debugCards" class="debug-grid"></section>
</section>`,
      css: `.debug-shell {
  display: grid;
  gap: 16px;
}

.toolbar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.debug-grid {
  display: grid;
  gap: 12px;
}

.debug-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}`,
      js: `const debugSearchInput = document.getElementById("debugSearchInput");
const debugClearBtn = document.getElementById("debugClearBtn");
const debugEmptyState = document.getElementById("debugEmptyState");
const debugCards = document.getElementById("debugCards");

const debugResources = [
  { title: "React interview prep", level: "Advanced" },
  { title: "JavaScript arrays", level: "Builder" },
  { title: "Accessible forms", level: "Rookie" },
];

function renderDebugCards() {
  const query = debugSearchInput.value;
  const visibleResources = debugResources.filter((resource) =>
    resource.title.includes(query)
  );

  debugEmptyState.hidden = false;
  debugCards.innerHTML = visibleResources
    .map(
      (resource) =>
        "<article class='debug-card'><h2>" +
        resource.title +
        "</h2><p>" +
        resource.level +
        "</p></article>"
    )
    .join("");
}

debugSearchInput.addEventListener("change", renderDebugCards);

debugClearBtn.addEventListener("click", () => {
  debugSearchInput.textContent = "";
});

renderDebugCards();`,
    },
    solution: {
      html: `<section class="debug-shell">
  <div class="toolbar">
    <input id="debugSearchInput" type="text" placeholder="Search resources" />
    <button id="debugClearBtn" type="button">Clear</button>
  </div>
  <p id="debugEmptyState" hidden>No matches found.</p>
  <section id="debugCards" class="debug-grid"></section>
</section>`,
      css: `.debug-shell {
  display: grid;
  gap: 16px;
}

.toolbar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.debug-grid {
  display: grid;
  gap: 12px;
}

.debug-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}`,
      js: `const debugSearchInput = document.getElementById("debugSearchInput");
const debugClearBtn = document.getElementById("debugClearBtn");
const debugEmptyState = document.getElementById("debugEmptyState");
const debugCards = document.getElementById("debugCards");

const debugResources = [
  { title: "React interview prep", level: "Advanced" },
  { title: "JavaScript arrays", level: "Builder" },
  { title: "Accessible forms", level: "Rookie" },
];

function renderDebugCards() {
  const query = debugSearchInput.value.trim().toLowerCase();
  const visibleResources = debugResources.filter((resource) =>
    resource.title.toLowerCase().includes(query)
  );

  debugEmptyState.hidden = visibleResources.length > 0;
  debugCards.innerHTML = visibleResources
    .map(
      (resource) =>
        "<article class='debug-card'><h2>" +
        resource.title +
        "</h2><p>" +
        resource.level +
        "</p></article>"
    )
    .join("");
}

debugSearchInput.addEventListener("input", renderDebugCards);

debugClearBtn.addEventListener("click", () => {
  debugSearchInput.value = "";
  renderDebugCards();
});

renderDebugCards();`,
    },
  },
  {
    id: "interview-debug-async-test",
    editorType: "web",
    title: "Challenge 7 — Interview Test: Debug a Broken Async Dashboard",
    difficulty: "Hard",
    category: "JavaScript + Debugging",
    goal: "Fix a broken async dashboard so loading, retry, filtering, and saved note behavior all work together.",
    requirements: [
      "Fix the loading and success flow",
      "Handle the error state correctly",
      "Make retry work",
      "Fix the status filter rendering",
      "Keep the saved note working with localStorage",
    ],
    tips: [
      "Async bugs usually come from order, state resets, or missing catch paths.",
      "Watch which variables should be updated before the UI re-renders.",
      "Do not remove features to make the bug disappear.",
    ],
    concepts: [
      "debugging",
      "async/await",
      "error handling",
      "filter()",
      "localStorage",
    ],
    suggestedApproach: [
      "Read the request function and the render function separately.",
      "Fix the loading text and clear the old UI at the right time.",
      "Make sure the filter uses the loaded array, not stale state.",
      "Confirm the note is restored on load and saved after edits.",
    ],
    commonMistakes: [
      "Retrying without resetting the status text",
      "Catching the error but never updating the UI",
      "Filtering before the data is actually available",
    ],
    expectedOutcome:
      "A repaired async dashboard that demonstrates calm, methodical debugging.",
    starter: {
      html: `<section class="ops-debug">
  <div class="toolbar">
    <button id="opsDebugRetryBtn" type="button">Retry</button>
    <select id="opsDebugFilter">
      <option value="All">All</option>
      <option value="Open">Open</option>
      <option value="Blocked">Blocked</option>
    </select>
  </div>
  <p id="opsDebugStatus">Loading...</p>
  <section id="opsDebugCards" class="ops-grid"></section>
  <textarea id="opsDebugNote" placeholder="Write a note"></textarea>
  <button id="opsDebugSaveNoteBtn" type="button">Save note</button>
</section>`,
      css: `.ops-debug {
  display: grid;
  gap: 16px;
}

.toolbar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.ops-grid {
  display: grid;
  gap: 12px;
}`,
      js: `const opsDebugRetryBtn = document.getElementById("opsDebugRetryBtn");
const opsDebugFilter = document.getElementById("opsDebugFilter");
const opsDebugStatus = document.getElementById("opsDebugStatus");
const opsDebugCards = document.getElementById("opsDebugCards");
const opsDebugNote = document.getElementById("opsDebugNote");
const opsDebugSaveNoteBtn = document.getElementById("opsDebugSaveNoteBtn");

let failDebugOnce = true;
let opsDebugItems = [];

function requestDebugOps() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (failDebugOnce) {
        failDebugOnce = false;
        reject(new Error("Request failed."));
        return;
      }

      resolve([
        { id: 1, title: "Fix loading states", status: "Open" },
        { id: 2, title: "Review API response", status: "Blocked" },
      ]);
    }, 500);
  });
}

function renderDebugOps() {
  const filtered = opsDebugItems.filter((item) => {
    return opsDebugFilter.value === "All" && item.status === opsDebugFilter.value;
  });

  opsDebugCards.innerHTML = filtered
    .map((item) => "<article><h2>" + item.title + "</h2></article>")
    .join("");
}

async function hydrateDebugOps() {
  opsDebugStatus.textContent = "Loaded.";

  const data = await requestDebugOps();
  opsDebugItems = data;
  renderDebugOps();
}

opsDebugRetryBtn.addEventListener("click", hydrateDebugOps);
opsDebugFilter.addEventListener("change", hydrateDebugOps);
opsDebugSaveNoteBtn.addEventListener("click", () => {
  localStorage.setItem("ops-debug-note", opsDebugNote.value);
});

hydrateDebugOps();`,
    },
    solution: {
      html: `<section class="ops-debug">
  <div class="toolbar">
    <button id="opsDebugRetryBtn" type="button">Retry</button>
    <select id="opsDebugFilter">
      <option value="All">All</option>
      <option value="Open">Open</option>
      <option value="Blocked">Blocked</option>
    </select>
  </div>
  <p id="opsDebugStatus">Loading...</p>
  <section id="opsDebugCards" class="ops-grid"></section>
  <textarea id="opsDebugNote" placeholder="Write a note"></textarea>
  <button id="opsDebugSaveNoteBtn" type="button">Save note</button>
</section>`,
      css: `.ops-debug {
  display: grid;
  gap: 16px;
}

.toolbar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.ops-grid {
  display: grid;
  gap: 12px;
}

article {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}`,
      js: `const opsDebugRetryBtn = document.getElementById("opsDebugRetryBtn");
const opsDebugFilter = document.getElementById("opsDebugFilter");
const opsDebugStatus = document.getElementById("opsDebugStatus");
const opsDebugCards = document.getElementById("opsDebugCards");
const opsDebugNote = document.getElementById("opsDebugNote");
const opsDebugSaveNoteBtn = document.getElementById("opsDebugSaveNoteBtn");

let failDebugOnce = true;
let opsDebugItems = [];

function requestDebugOps() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (failDebugOnce) {
        failDebugOnce = false;
        reject(new Error("Request failed."));
        return;
      }

      resolve([
        { id: 1, title: "Fix loading states", status: "Open" },
        { id: 2, title: "Review API response", status: "Blocked" },
      ]);
    }, 500);
  });
}

function renderDebugOps() {
  const filtered = opsDebugItems.filter((item) => {
    return (
      opsDebugFilter.value === "All" || item.status === opsDebugFilter.value
    );
  });

  opsDebugCards.innerHTML = filtered
    .map(
      (item) =>
        "<article><h2>" +
        item.title +
        "</h2><p>" +
        item.status +
        "</p></article>"
    )
    .join("");
}

async function hydrateDebugOps() {
  opsDebugStatus.textContent = "Loading...";
  opsDebugCards.innerHTML = "";

  try {
    const data = await requestDebugOps();
    opsDebugItems = data;
    opsDebugStatus.textContent = "Dashboard ready.";
    renderDebugOps();
  } catch (error) {
    opsDebugStatus.textContent = error.message;
  }
}

opsDebugRetryBtn.addEventListener("click", hydrateDebugOps);
opsDebugFilter.addEventListener("change", renderDebugOps);
opsDebugSaveNoteBtn.addEventListener("click", () => {
  localStorage.setItem("ops-debug-note", opsDebugNote.value);
  opsDebugStatus.textContent = "Note saved locally.";
});

opsDebugNote.value = localStorage.getItem("ops-debug-note") || "";

hydrateDebugOps();`,
    },
  },
  {
    id: "interview-typescript-react-test",
    editorType: "react-ts",
    title: "Challenge 8 — Interview Test: TypeScript React Hiring Board",
    difficulty: "Hard",
    category: "React + TypeScript",
    goal: "Build a typed React hiring board with typed data, typed state, a union filter, and a controlled feedback form.",
    requirements: [
      "Create a type or interface for the data",
      "Render cards from typed data",
      "Add a typed filter such as All, Frontend, and React",
      "Use typed state in React",
      "Add a controlled form with a typed submit event",
      "Show a feedback message after submit",
    ],
    tips: [
      "The point is not advanced TypeScript. The point is learning how types protect everyday React work.",
      "Start with the data shape, then type the state that depends on it.",
      "A union is a good fit when the filter can only be one of a few values.",
    ],
    concepts: [
      "TypeScript",
      "typed props",
      "typed state",
      "union types",
      "controlled forms",
    ],
    suggestedApproach: [
      "Write the data type first.",
      "Create the array of typed items and render it with map().",
      "Add a typed filter state and derive the visible items with filter().",
      "Finish with a small typed form and a feedback message.",
    ],
    commonMistakes: [
      "Typing the data but leaving the rest of the component untyped",
      "Using plain string everywhere instead of a small union",
      "Building the form without a typed submit handler",
    ],
    expectedOutcome:
      "A small but realistic TypeScript React screen that feels closer to modern junior job work.",
    starter: {
      html: ``,
      css: `.ts-board {
  display: grid;
  gap: 16px;
}`,
      js: `type RoleFilter = "All" | "Frontend" | "React";

function Challenge() {
  return (
    <section className="ts-board">

    </section>
  );
}`,
    },
    solution: {
      html: ``,
      css: `.ts-board {
  display: grid;
  gap: 16px;
}

.ts-toolbar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.ts-grid {
  display: grid;
  gap: 12px;
}

.ts-card,
.ts-form {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
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
      js: `type RoleFilter = "All" | "Frontend" | "React";

type Candidate = {
  id: number;
  name: string;
  track: Exclude<RoleFilter, "All">;
};

const candidates: Candidate[] = [
  { id: 1, name: "Mia", track: "Frontend" },
  { id: 2, name: "Leo", track: "React" },
  { id: 3, name: "Sara", track: "Frontend" },
];

function CandidateCard({ candidate }: { candidate: Candidate }) {
  return (
    <article className="ts-card">
      <h2>{candidate.name}</h2>
      <p>{candidate.track}</p>
    </article>
  );
}

function Challenge() {
  const [filter, setFilter] = React.useState<RoleFilter>("All");
  const [note, setNote] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const visibleCandidates = candidates.filter((candidate) => {
    return filter === "All" || candidate.track === filter;
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!note.trim()) {
      setMessage("Please add a short interviewer note.");
      return;
    }

    setMessage("Typed feedback draft looks ready.");
  }

  return (
    <section className="ts-board">
      <div className="ts-toolbar">
        <select
          value={filter}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setFilter(event.target.value as RoleFilter)
          }
        >
          <option>All</option>
          <option>Frontend</option>
          <option>React</option>
        </select>
      </div>

      <section className="ts-grid">
        {visibleCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </section>

      <form className="ts-form" onSubmit={handleSubmit}>
        <input
          value={note}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNote(event.target.value)
          }
          placeholder="Add interviewer note"
        />
        <button type="submit">Review note</button>
        <p>{message}</p>
      </form>
    </section>
  );
}`,
    },
  },
  {
    id: "interview-debug-react-test",
    editorType: "react",
    title: "Challenge 9 — Interview Test: Debug a Broken React Dashboard",
    difficulty: "Hard",
    category: "React + Debugging",
    goal: "Fix a broken React dashboard so search, saved items, and empty states behave correctly again.",
    requirements: [
      "Fix the search filter",
      "Fix the saved toggle logic",
      "Show an empty state when nothing matches",
      "Keep the data rendering with map()",
      "Save the shortlist in localStorage",
    ],
    tips: [
      "This is a typical interview debugging task: the app kind of works, but the logic is unreliable.",
      "Pay attention to derived data versus state that should be persisted.",
      "If one fix introduces another bug, step back and simplify the flow.",
    ],
    concepts: [
      "debugging",
      "React state",
      "derived data",
      "localStorage",
      "empty states",
    ],
    suggestedApproach: [
      "Check the filtered list logic first.",
      "Confirm the saved ids are updated from the previous state safely.",
      "Make sure localStorage is written after state changes.",
      "Return a clear empty state when the filtered list is empty.",
    ],
    commonMistakes: [
      "Trying to store the filtered list in state",
      "Mutating the saved ids array directly",
      "Forgetting to restore saved ids on first render",
    ],
    expectedOutcome:
      "A repaired React dashboard that reflects real interview-style debugging work.",
    starter: {
      html: ``,
      css: `.react-debug-shell {
  display: grid;
  gap: 16px;
}`,
      js: `const resources = [
  { id: 1, title: "Debugging practice", type: "React" },
  { id: 2, title: "Accessible forms", type: "Frontend" },
  { id: 3, title: "State flow review", type: "React" },
];

function Challenge() {
  const [query, setQuery] = React.useState("");
  const [savedIds, setSavedIds] = React.useState([]);

  React.useEffect(() => {
    localStorage.setItem("react-debug-saved", savedIds);
  }, [savedIds]);

  const filteredResources = resources.filter((resource) =>
    resource.title.includes(query)
  );

  function toggleSaved(id) {
    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter((item) => item === id));
      return;
    }

    setSavedIds(savedIds.concat(id));
  }

  return (
    <section className="react-debug-shell">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search resources"
      />

      {resources.length === 0 ? (
        <p>No matching resources.</p>
      ) : (
        filteredResources.map((resource) => (
          <article key={resource.id}>
            <h2>{resource.title}</h2>
            <p>{resource.type}</p>
            <button type="button" onClick={() => toggleSaved(resource.id)}>
              {savedIds.includes(resource.id) ? "Saved" : "Save"}
            </button>
          </article>
        ))
      )}
    </section>
  );
}`,
    },
    solution: {
      html: ``,
      css: `.react-debug-shell {
  display: grid;
  gap: 16px;
}

.react-debug-grid {
  display: grid;
  gap: 12px;
}

.react-debug-card {
  padding: 16px;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  background: white;
}

input,
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
      js: `const resources = [
  { id: 1, title: "Debugging practice", type: "React" },
  { id: 2, title: "Accessible forms", type: "Frontend" },
  { id: 3, title: "State flow review", type: "React" },
];

function readDebugSavedIds() {
  try {
    const raw = localStorage.getItem("react-debug-saved");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function Challenge() {
  const [query, setQuery] = React.useState("");
  const [savedIds, setSavedIds] = React.useState(readDebugSavedIds);

  React.useEffect(() => {
    localStorage.setItem("react-debug-saved", JSON.stringify(savedIds));
  }, [savedIds]);

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(query.toLowerCase())
  );

  function toggleSaved(id) {
    setSavedIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((item) => item !== id)
        : [...currentIds, id]
    );
  }

  return (
    <section className="react-debug-shell">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search resources"
      />

      {filteredResources.length === 0 ? (
        <p>No matching resources.</p>
      ) : (
        <div className="react-debug-grid">
          {filteredResources.map((resource) => (
            <article className="react-debug-card" key={resource.id}>
              <h2>{resource.title}</h2>
              <p>{resource.type}</p>
              <button type="button" onClick={() => toggleSaved(resource.id)}>
                {savedIds.includes(resource.id) ? "Saved" : "Save"}
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}`,
    },
  },
  {
    id: "interview-shipping-readiness-test",
    editorType: "react",
    title: "Challenge 10 — Interview Test: Shipping-Ready Submit Flow",
    difficulty: "Hard",
    category: "React + QA",
    goal: "Build a shipping-ready submit flow with controlled inputs, loading, disabled submit, error feedback, and success feedback.",
    requirements: [
      "Add a controlled form with at least two fields",
      "Validate the fields before submitting",
      "Show a loading state while the fake request runs",
      "Disable the submit button while loading",
      "Show an error state and a success state",
    ],
    tips: [
      "This is the kind of flow recruiters often care about because it touches UX, state, and reliability together.",
      "Think in states first: idle, invalid, loading, error, success.",
      "You do not need a real API to prove the flow.",
    ],
    concepts: [
      "controlled forms",
      "loading state",
      "disabled submit",
      "error handling",
      "UI states",
    ],
    suggestedApproach: [
      "Create the form and state values first.",
      "Validate the fields in the submit handler.",
      "Simulate a request and show a loading label on the button.",
      "Switch between error and success messages based on the result.",
    ],
    commonMistakes: [
      "Leaving the button active during loading",
      "Showing success before the async work finishes",
      "Using one message for every state",
    ],
    expectedOutcome:
      "A submit flow that feels careful, deliberate, and close to production behavior.",
    starter: {
      html: ``,
      css: `.ship-form {
  display: grid;
  gap: 16px;
}`,
      js: `function Challenge() {
  return (
    <form className="ship-form">

    </form>
  );
}`,
    },
    solution: {
      html: ``,
      css: `.ship-form {
  display: grid;
  gap: 16px;
  max-width: 560px;
}

input,
button {
  padding: 12px;
  border-radius: 12px;
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
      js: `function Challenge() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  const [message, setMessage] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter your name and a valid email.");
      return;
    }

    setStatus("loading");
    setMessage("Submitting your review...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      setMessage("Submission is ready to send.");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong.");
    }
  }

  return (
    <form className="ship-form" onSubmit={handleSubmit}>
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
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit review"}
      </button>
      <p>{message}</p>
    </form>
  );
}`,
    },
  },
];
