import { useEffect, useState } from "react";

export default function BriefPanel({ challenge }) {
  const [openSections, setOpenSections] = useState({
    tips: false,
    approach: false,
    mistakes: false,
    outcome: false,
  });

  useEffect(() => {
    setOpenSections({
      tips: false,
      approach: false,
      mistakes: false,
      outcome: false,
    });
  }, [challenge.id]);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="panel brief-panel">
      <div className="panel-top">
        <h3>Challenge Brief</h3>
      </div>

      <div className="brief-block">
        <h4>Goal</h4>
        <p className="brief-text">{challenge.goal}</p>
      </div>

      <div className="brief-block">
        <h4>Requirements</h4>
        <ul className="clean-list">
          {challenge.requirements?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {challenge.concepts?.length > 0 && (
        <div className="brief-block">
          <h4>Concepts Practiced</h4>
          <div className="tag-list">
            {challenge.concepts.map((concept, index) => (
              <span key={index} className="mini-tag">
                {concept}
              </span>
            ))}
          </div>
        </div>
      )}

      {challenge.suggestedApproach?.length > 0 && (
        <div className="brief-block">
          <button
            className="brief-toggle"
            onClick={() => toggleSection("approach")}
          >
            <span>Suggested Approach</span>
            <span>{openSections.approach ? "−" : "+"}</span>
          </button>

          {openSections.approach && (
            <ul className="clean-list brief-dropdown-content">
              {challenge.suggestedApproach.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {challenge.commonMistakes?.length > 0 && (
        <div className="brief-block">
          <button
            className="brief-toggle"
            onClick={() => toggleSection("mistakes")}
          >
            <span>Common Mistakes</span>
            <span>{openSections.mistakes ? "−" : "+"}</span>
          </button>

          {openSections.mistakes && (
            <ul className="clean-list brief-dropdown-content">
              {challenge.commonMistakes.map((mistake, index) => (
                <li key={index}>{mistake}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {challenge.expectedOutcome && (
        <div className="brief-block">
          <button
            className="brief-toggle"
            onClick={() => toggleSection("outcome")}
          >
            <span>Expected Outcome</span>
            <span>{openSections.outcome ? "−" : "+"}</span>
          </button>

          {openSections.outcome && (
            <div className="target-preview brief-dropdown-content">
              <p>{challenge.expectedOutcome}</p>
            </div>
          )}
        </div>
      )}

      {challenge.tips?.length > 0 && (
        <div className="brief-block">
          <button
            className="brief-toggle"
            onClick={() => toggleSection("tips")}
          >
            <span>Tips</span>
            <span>{openSections.tips ? "−" : "+"}</span>
          </button>

          {openSections.tips && (
            <div className="tips-box brief-dropdown-content">
              <ul className="clean-list">
                {challenge.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
