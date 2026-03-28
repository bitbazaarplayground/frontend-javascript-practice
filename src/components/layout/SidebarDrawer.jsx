function getChallengeStatus(challengeId, challengeProgress) {
  return challengeProgress?.[challengeId] || "not-started";
}

export default function SidebarDrawer({
  isOpen,
  onClose,
  onBackHome,
  modeTitle,
  challenges,
  activeId,
  onSelect,
  challengeProgress,
}) {
  return (
    <>
      <div
        className={`drawer-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      />

      <aside className={`sidebar-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-top">
          <div>
            <h2>Frontend Practice Lab</h2>
            <p>{modeTitle} mode</p>
          </div>

          <button className="icon-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="drawer-actions">
          <button className="secondary-btn full-width" onClick={onBackHome}>
            ← Back to modes
          </button>
        </div>

        <div className="sidebar-section-label">Challenges</div>

        <div className="challenge-list">
          {challenges.map((challenge) => {
            const status = getChallengeStatus(challenge.id, challengeProgress);

            return (
              <button
                key={challenge.id}
                className={`challenge-nav-item ${
                  activeId === challenge.id ? "active" : ""
                }`}
                onClick={() => {
                  onSelect(challenge.id);
                  onClose();
                }}
              >
                <span
                  className={`difficulty-dot ${challenge.difficulty.toLowerCase()}`}
                />

                <div className="challenge-nav-content">
                  <strong>{challenge.title}</strong>
                  <small>{challenge.category}</small>

                  <div className="challenge-meta-row">
                    <span className={`status-pill ${status}`}>
                      {status === "not-started" && "Not started"}
                      {status === "in-progress" && "In progress"}
                      {status === "completed" && "Completed"}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}
