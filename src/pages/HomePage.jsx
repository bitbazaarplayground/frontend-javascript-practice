function getModeStats(challenges, challengeProgress) {
  const total = challenges.length;

  const completed = challenges.filter(
    (challenge) => challengeProgress?.[challenge.id] === "completed"
  ).length;

  const inProgress = challenges.filter(
    (challenge) => challengeProgress?.[challenge.id] === "in-progress"
  ).length;

  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return {
    total,
    completed,
    inProgress,
    percentage,
  };
}

export default function HomePage({
  modes,
  onSelectMode,
  challengeProgress = {},
}) {
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
        {modes.map((mode) => {
          const stats = getModeStats(mode.challenges, challengeProgress);

          return (
            <button
              key={mode.id}
              className="mode-card"
              onClick={() => onSelectMode(mode.id)}
            >
              <div className="mode-card-top">
                <span className="mode-badge">{mode.title}</span>
                <span className="mode-count">
                  {stats.completed}/{stats.total} completed
                </span>
              </div>

              <h2>{mode.title} Mode</h2>
              <p>{mode.description}</p>

              <div className="mode-progress-block">
                <div className="mode-progress-label-row">
                  <span>Progress</span>
                  <span>{stats.percentage}%</span>
                </div>

                <div className="mode-progress-bar">
                  <div
                    className="mode-progress-fill"
                    style={{ width: `${stats.percentage}%` }}
                  />
                </div>

                <div className="mode-progress-summary">
                  <span>{stats.inProgress} in progress</span>
                  <span>{stats.completed} completed</span>
                </div>
              </div>

              <span className="mode-link">Start mode →</span>
            </button>
          );
        })}
      </section>
    </main>
  );
}
