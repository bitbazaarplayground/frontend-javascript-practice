import { ArrowLeft, X } from "lucide-react";

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
  copy,
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
            <h2>{copy.appName}</h2>
            <p>{modeTitle}</p>
          </div>

          <button
            className="icon-btn"
            onClick={onClose}
            aria-label={copy.drawer.close}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="drawer-actions">
          <button className="secondary-btn full-width" onClick={onBackHome}>
            <ArrowLeft size={17} aria-hidden="true" />
            {copy.drawer.backToModes}
          </button>
        </div>

        <div className="sidebar-section-label">{copy.drawer.challenges}</div>

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
                      {copy.status[status]}
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
