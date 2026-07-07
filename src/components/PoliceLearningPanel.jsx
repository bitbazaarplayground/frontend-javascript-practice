import {
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Layers3,
  ListChecks,
  ShieldCheck,
} from "lucide-react";

export default function PoliceLearningPanel({ challenge, onComplete }) {
  const learning = challenge.learning;

  return (
    <section className="police-learning-zone">
      <article className="panel police-learning-hero">
        <div>
          <p className="eyebrow">Learning zone</p>
          <h3>Police SJT preparation map</h3>
          <p>{learning.intro}</p>
        </div>
        <button type="button" className="primary-btn" onClick={onComplete}>
          <CheckCircle2 size={17} aria-hidden="true" />
          Mark learning read
        </button>
      </article>

      <section className="police-learning-grid">
        {learning.sections.map((section) => (
          <article className="panel police-learning-card" key={section.title}>
            <div className="sjt-section-title">
              <BookOpen size={18} aria-hidden="true" />
              <h3>{section.title}</h3>
            </div>
            <p>{section.body}</p>
            <ul>
              {section.checks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="panel police-learning-stages">
        <div className="sjt-section-title">
          <Layers3 size={18} aria-hidden="true" />
          <h3>Online assessment structure</h3>
        </div>
        <div className="police-stage-list">
          {learning.assessmentStages.map((stage, index) => (
            <article className="police-stage-item" key={stage.title}>
              <span>{index + 1}</span>
              <div>
                <h4>{stage.title}</h4>
                <p>{stage.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="police-learning-bottom">
        <article className="panel police-learning-card">
          <div className="sjt-section-title">
            <ListChecks size={18} aria-hidden="true" />
            <h3>Review prompts</h3>
          </div>
          <ul>
            {learning.reviewPrompts.map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ul>
        </article>

        <article className="panel police-learning-card">
          <div className="sjt-section-title">
            <ShieldCheck size={18} aria-hidden="true" />
            <h3>Sources</h3>
          </div>
          <div className="police-sjt-source-list">
            {learning.sources.map((source) => (
              <a
                href={source.url}
                key={source.url}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={15} aria-hidden="true" />
                <span>{source.label}</span>
              </a>
            ))}
          </div>
        </article>
      </section>
    </section>
  );
}
