import { BookOpen, ChevronDown, ChevronUp, Play, X } from "lucide-react";
import { useMemo, useState } from "react";
import { getChallengeLesson } from "../data/lessonContent";

export default function ConceptPrimer({ challenge, copy, language, onSkip }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const lesson = useMemo(
    () => getChallengeLesson(challenge, language),
    [challenge, language]
  );

  const title = lesson.title || challenge.category;
  const summary = lesson.summary || copy.primer.fallbackSummary;
  const why = lesson.why || challenge.goal;
  const learnMore = lesson.learnMore || copy.primer.mentalModelText;
  const examples = lesson.examples || [];

  return (
    <section className="concept-primer">
      <button
        type="button"
        className="concept-primer-close"
        onClick={onSkip}
        aria-label={copy.primer.skip}
      >
        <X size={16} aria-hidden="true" />
      </button>

      <div className="concept-primer-main">
        <p className="eyebrow">{copy.primer.eyebrow}</p>
        <h3>
          <BookOpen size={20} aria-hidden="true" />
          {title}
        </h3>
        <p>{summary}</p>
        <p className="concept-primer-why">{why}</p>
      </div>

      <div className="concept-primer-actions">
        <button
          type="button"
          className="secondary-btn"
          onClick={() => setIsExpanded((current) => !current)}
        >
          {isExpanded ? (
            <ChevronUp size={17} aria-hidden="true" />
          ) : (
            <ChevronDown size={17} aria-hidden="true" />
          )}
          {isExpanded ? copy.primer.showLess : copy.primer.learnMore}
        </button>
        <button type="button" className="primary-btn" onClick={onSkip}>
          <Play size={17} aria-hidden="true" />
          {copy.primer.start}
        </button>
      </div>

      {isExpanded && (
        <div className="concept-primer-expanded">
          <div>
            <h4>{copy.primer.learnMoreTitle}</h4>
            <p>{learnMore}</p>
          </div>

          {examples.length > 0 && (
            <div>
              <h4>{copy.primer.examples}</h4>
              <ul className="clean-list">
                {examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
