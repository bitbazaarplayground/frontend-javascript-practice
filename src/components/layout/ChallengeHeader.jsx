// src/components/layout/ChallengeHeader.jsx
export default function ChallengeHeader({
  challenge,
  copy,
  stepLabel = null,
  eyebrow = null,
}) {
  return (
    <header className="challenge-header">
      <div>
        <p className="eyebrow">{eyebrow || copy.header.eyebrow}</p>
        {stepLabel && <p className="challenge-step">{stepLabel}</p>}
        <h2>{challenge.title}</h2>
        <p className="challenge-goal">{challenge.goal}</p>
      </div>

      <div className="header-badges">
        <span className="badge">{challenge.difficulty}</span>
        <span className="badge muted">{challenge.category}</span>
      </div>
    </header>
  );
}
