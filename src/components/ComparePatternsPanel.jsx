import { ArrowRightLeft, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ComparePatternsPanel({ patterns, copy }) {
  const [activePatternId, setActivePatternId] = useState(
    patterns[0]?.id || null
  );

  const activePattern =
    patterns.find((pattern) => pattern.id === activePatternId) || patterns[0];

  if (!activePattern) return null;

  return (
    <section className="panel compare-patterns-panel">
      <div className="compare-patterns-heading">
        <div>
          <p className="eyebrow">{copy.compareBadge}</p>
          <h2>{copy.compareTitle}</h2>
        </div>

        <div className="compare-patterns-summary">
          <p>{copy.compareIntro}</p>
          <span className="mode-count">
            {copy.compareCount(patterns.length)}
          </span>
        </div>
      </div>

      <div className="compare-patterns-tab-row">
        {patterns.map((pattern) => (
          <button
            key={pattern.id}
            type="button"
            className={
              activePattern.id === pattern.id
                ? "secondary-btn active-toggle-btn"
                : "secondary-btn"
            }
            onClick={() => setActivePatternId(pattern.id)}
          >
            {pattern.title}
          </button>
        ))}
      </div>

      <div className="compare-patterns-card">
        <div className="compare-patterns-card-top">
          <div>
            <span className="sidebar-section-label">{copy.compareScenario}</span>
            <h3>{activePattern.title}</h3>
          </div>
          <p>{activePattern.summary}</p>
        </div>

        <div className="tips-box compare-patterns-scenario">
          <strong>{copy.compareScenario}</strong>
          <p>{activePattern.scenario}</p>
        </div>

        <div className="compare-approach-grid">
          {activePattern.approaches.map((approach) => (
            <article className="compare-approach-card" key={approach.label}>
              <div className="compare-approach-top">
                <span className="status-pill not-started">{approach.label}</span>
              </div>

              <pre className="guide-code-block learn-code-block compare-code-block">
                <code>{approach.code}</code>
              </pre>

              <div className="compare-note-block">
                <div className="learn-pane-heading">
                  <ArrowRightLeft size={15} aria-hidden="true" />
                  <span>{copy.compareWhenToUse}</span>
                </div>
                <p>{approach.whenToUse}</p>
              </div>

              <div className="compare-note-block compare-note-warning">
                <div className="learn-pane-heading">
                  <AlertCircle size={15} aria-hidden="true" />
                  <span>{copy.compareWatchOut}</span>
                </div>
                <p>{approach.watchOut}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="knowledge-score-banner compare-takeaway-banner">
          <div>
            <span className="sidebar-section-label">{copy.compareTakeaway}</span>
            <h3>{activePattern.title}</h3>
          </div>
          <p>{activePattern.takeaway}</p>
        </div>
      </div>
    </section>
  );
}
