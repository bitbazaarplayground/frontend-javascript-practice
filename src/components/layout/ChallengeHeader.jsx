// src/components/layout/ChallengeHeader.jsx
export default function ChallengeHeader({ challenge }) {
  return (
    <header className="challenge-header">
      <div>
        <p className="eyebrow">Practice challenge</p>
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
