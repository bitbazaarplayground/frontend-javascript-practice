// src/components/layout/BriefPanel.jsx

import { useState } from "react";

export default function BriefPanel({ challenge }) {
  const [showTips, setShowTips] = useState(false);

  return (
    <section className="panel brief-panel">
      <div className="panel-top">
        <h3>Challenge Brief</h3>
        <button
          className="secondary-btn"
          onClick={() => setShowTips((prev) => !prev)}
        >
          {showTips ? "Hide Tips" : "Show Tips"}
        </button>
      </div>

      <div className="brief-block">
        <h4>Requirements</h4>
        <ul className="clean-list">
          {challenge.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="brief-block">
        <h4>Target</h4>
        <div className="target-preview">
          <p>Build the UI in the editor until it matches the challenge goal.</p>
        </div>
      </div>

      {showTips && (
        <div className="brief-block tips-box">
          <h4>Tips</h4>
          <ul className="clean-list">
            {challenge.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
