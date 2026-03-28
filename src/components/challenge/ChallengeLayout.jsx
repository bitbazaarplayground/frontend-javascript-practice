import { useState } from "react";

export default function ChallengeLayout({ challenge, children }) {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="challenge-layout">
      <div className="instructions">
        <h1>{challenge.title}</h1>
        <p>{challenge.goal}</p>

        <h3>Requirements:</h3>
        <ul>
          {challenge.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>

        <button onClick={() => setShowHint(!showHint)}>Show Hint</button>
        {showHint && <p className="hint">{challenge.hint}</p>}

        <button onClick={() => setShowSolution(!showSolution)}>
          Show Solution
        </button>
        {showSolution && <pre className="solution">{challenge.solution}</pre>}
      </div>

      <div className="playground">{children}</div>
    </div>
  );
}
