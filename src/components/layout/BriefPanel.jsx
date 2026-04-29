import { useMemo, useState } from "react";
import { getConcept } from "../../data/concepts";

export default function BriefPanel({ challenge, copy, language }) {
  const [openSections, setOpenSections] = useState({
    tips: false,
    approach: false,
    mistakes: false,
    outcome: false,
  });
  const [selectedConcept, setSelectedConcept] = useState(null);
  const selectedConceptDetails = useMemo(
    () =>
      selectedConcept ? getConcept(selectedConcept, language) : null,
    [selectedConcept, language]
  );

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="panel brief-panel">
      <div className="panel-top">
        <h3>{copy.brief.title}</h3>
      </div>

      <div className="brief-block">
        <h4>{copy.brief.goal}</h4>
        <p className="brief-text">{challenge.goal}</p>
      </div>

      <div className="brief-block">
        <h4>{copy.brief.requirements}</h4>
        <ul className="clean-list">
          {challenge.requirements?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {challenge.concepts?.length > 0 && (
        <div className="brief-block">
          <h4>{copy.brief.concepts}</h4>
          <div className="tag-list">
            {challenge.concepts.map((concept, index) => {
              const conceptDetails = getConcept(concept, language);

              if (!conceptDetails) {
                return (
                  <span key={index} className="mini-tag">
                    {concept}
                  </span>
                );
              }

              return (
                <button
                  key={index}
                  type="button"
                  className="mini-tag concept-tag"
                  onClick={() => setSelectedConcept(concept)}
                  aria-label={`${copy.brief.learnConcept}: ${conceptDetails.title}`}
                >
                  {concept}
                </button>
              );
            })}
          </div>

          {selectedConceptDetails && (
            <div className="concept-card">
              <div className="concept-card-top">
                <span>{copy.brief.learnConcept}</span>
                <button
                  type="button"
                  className="concept-close"
                  onClick={() => setSelectedConcept(null)}
                  aria-label={copy.brief.closeConcept}
                >
                  ×
                </button>
              </div>
              <h5>{selectedConceptDetails.title}</h5>
              <p>{selectedConceptDetails.summary}</p>
              <strong>{copy.brief.whyItMatters}</strong>
              <p>{selectedConceptDetails.why}</p>
            </div>
          )}
        </div>
      )}

      {challenge.suggestedApproach?.length > 0 && (
        <div className="brief-block">
          <button
            className="brief-toggle"
            onClick={() => toggleSection("approach")}
          >
            <span>{copy.brief.approach}</span>
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
            <span>{copy.brief.mistakes}</span>
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
            <span>{copy.brief.outcome}</span>
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
            <span>{copy.brief.tips}</span>
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
