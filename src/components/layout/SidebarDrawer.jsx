export default function SidebarDrawer({
  isOpen,
  onClose,
  onBackHome,
  modeTitle,
  challenges,
  activeId,
  onSelect,
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
          {challenges.map((challenge) => (
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
              <div>
                <strong>{challenge.title}</strong>
                <small>{challenge.category}</small>
              </div>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
