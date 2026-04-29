// src/components/layout/ChallengeHeader.jsx
export default function ChallengeHeader({ challenge, copy }) {
  return (
    <header className="challenge-header">
      <div>
        <p className="eyebrow">{copy.header.eyebrow}</p>
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
