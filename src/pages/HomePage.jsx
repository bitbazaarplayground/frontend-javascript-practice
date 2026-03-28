export default function HomePage({ modes, onSelectMode }) {
  return (
    <main className="home-page">
      <section className="hero-card">
        <p className="eyebrow">From zero to hero</p>
        <h1>Frontend Practice Lab</h1>
        <p className="hero-text">
          Choose your training path and practice frontend step by step with
          challenges, hints, live preview, and full solutions.
        </p>
      </section>

      <section className="mode-grid">
        {modes.map((mode) => (
          <button
            key={mode.id}
            className="mode-card"
            onClick={() => onSelectMode(mode.id)}
          >
            <div className="mode-card-top">
              <span className="mode-badge">{mode.title}</span>
              <span className="mode-count">
                {mode.challenges.length} challenges
              </span>
            </div>

            <h2>{mode.title} Mode</h2>
            <p>{mode.description}</p>

            <span className="mode-link">Start mode →</span>
          </button>
        ))}
      </section>
    </main>
  );
}
