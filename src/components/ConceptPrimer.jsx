import { BookOpen, ChevronDown, ChevronUp, Play, X } from "lucide-react";
import { useMemo, useState } from "react";
import { getChallengeLesson } from "../data/lessonContent";

function getLocalizedGuide(guide, language) {
  if (!guide) return null;
  if (guide[language]) return guide[language];
  if (guide.en) return guide.en;
  return guide;
}

function getDefaultJavaScriptGuide(challenge, copy) {
  const category = (challenge.category || "").toLowerCase();
  const concepts = (challenge.concepts || []).join(" ").toLowerCase();
  const goal = (challenge.goal || "").toLowerCase();
  const text = `${category} ${concepts} ${goal}`;

  if (!category.includes("javascript")) return null;

  const eventName = text.includes("submit")
    ? "submit"
    : text.includes("input") ||
        text.includes("typing") ||
        text.includes("search") ||
        text.includes("filter")
      ? "input"
      : "click";
  const readStep =
    eventName === "input" || eventName === "submit"
      ? copy.primer.howToReadInputStep
      : copy.primer.howToReadStateStep;
  const updateStep = text.includes("filter") || text.includes("search")
    ? copy.primer.howToFilterStep
    : copy.primer.howToUpdateStep;

  return {
    title: copy.primer.howToDefaultTitle,
    intro: copy.primer.howToDefaultIntro,
    steps: [
      copy.primer.howToSelectStep,
      copy.primer.howToListenStep(eventName),
      readStep,
      updateStep,
    ],
  };
}

export default function ConceptPrimer({ challenge, copy, language, onSkip }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSolutionExpanded, setIsSolutionExpanded] = useState(false);
  const lesson = useMemo(
    () => getChallengeLesson(challenge, language),
    [challenge, language]
  );
  const beginnerGuide = useMemo(() => {
    const challengeGuide = getLocalizedGuide(challenge.beginnerGuide, language);

    return (
      challengeGuide ||
      getDefaultJavaScriptGuide(challenge, copy)
    );
  }, [challenge, copy, language]);

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

          {beginnerGuide && (
            <div className="beginner-guide concept-primer-guide">
              <h4>{beginnerGuide.title || copy.primer.howToDefaultTitle}</h4>
              {beginnerGuide.intro && <p>{beginnerGuide.intro}</p>}

              {beginnerGuide.steps?.length > 0 && (
                <ol className="beginner-guide-steps">
                  {beginnerGuide.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              )}

              {beginnerGuide.code && (
                <>
                  <button
                    type="button"
                    className="secondary-btn concept-primer-solution-btn"
                    onClick={() =>
                      setIsSolutionExpanded((current) => !current)
                    }
                  >
                    {isSolutionExpanded ? (
                      <ChevronUp size={17} aria-hidden="true" />
                    ) : (
                      <ChevronDown size={17} aria-hidden="true" />
                    )}
                    {isSolutionExpanded
                      ? copy.primer.hideSolution
                      : copy.primer.learnSolution}
                  </button>

                  {isSolutionExpanded && (
                    <pre className="beginner-guide-code">
                      <code>{beginnerGuide.code}</code>
                    </pre>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
