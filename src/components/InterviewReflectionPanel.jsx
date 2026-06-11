import { useState } from "react";

export default function InterviewReflectionPanel({
  value,
  onChange,
  copy,
  variant = "interview",
  challenge,
}) {
  const [showAnswers, setShowAnswers] = useState(false);
  const isRookie = variant === "rookie";
  const reflectionCopy =
    isRookie ? copy.rookieReflection : copy.reflection;
  const answerGuide = isRookie ? challenge?.readinessChecks || [] : [];

  return (
    <section className="panel interview-reflection-panel">
      <div className="panel-top">
        <h3>{reflectionCopy.title}</h3>
        {answerGuide.length > 0 && (
          <button
            type="button"
            className="secondary-btn reflection-answer-toggle"
            onClick={() => setShowAnswers((current) => !current)}
          >
            {showAnswers
              ? reflectionCopy.hideAnswers
              : reflectionCopy.revealAnswers}
          </button>
        )}
      </div>

      <p className="brief-text">{reflectionCopy.intro}</p>

      <div className="reflection-grid">
        <label className="reflection-field">
          <span>{reflectionCopy.summaryPrompt}</span>
          <textarea
            value={value.summary}
            onChange={(event) => onChange("summary", event.target.value)}
            placeholder={reflectionCopy.summaryPlaceholder}
          />
        </label>

        <label className="reflection-field">
          <span>{reflectionCopy.decisionsPrompt}</span>
          <textarea
            value={value.decisions}
            onChange={(event) => onChange("decisions", event.target.value)}
            placeholder={reflectionCopy.decisionsPlaceholder}
          />
        </label>

        <label className="reflection-field">
          <span>{reflectionCopy.improvePrompt}</span>
          <textarea
            value={value.improve}
            onChange={(event) => onChange("improve", event.target.value)}
            placeholder={reflectionCopy.improvePlaceholder}
          />
        </label>
      </div>

      {answerGuide.length > 0 && showAnswers && (
        <div className="rookie-answer-guide">
          <h4>{reflectionCopy.answerGuideTitle}</h4>
          <p>{reflectionCopy.answerGuideIntro}</p>

          <div className="readiness-checks">
            {answerGuide.map((item, index) => (
              <article className="readiness-answer" key={index}>
                <h5>{item.question}</h5>
                <strong>{reflectionCopy.modelAnswer}</strong>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
