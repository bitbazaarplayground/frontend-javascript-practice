import { CheckCircle2, CircleHelp, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

function normalizeCodeAnswer(value = "") {
  return value.replace(/\s+/g, "").trim();
}

function getScore(questions, answers) {
  return questions.reduce((score, question) => {
    if (question.type === "multiple-choice") {
      return answers[question.id] === question.correctOptionId ? score + 1 : score;
    }

    const submittedValue = normalizeCodeAnswer(answers[question.id] || "");
    const isCorrect = question.acceptableAnswers.some(
      (answer) => normalizeCodeAnswer(answer) === submittedValue
    );

    return isCorrect ? score + 1 : score;
  }, 0);
}

export default function KnowledgeCheckPanel({ quiz, copy }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const totalQuestions = quiz.questions.length;
  const answeredCount = useMemo(
    () =>
      quiz.questions.reduce((count, question) => {
        const answer = answers[question.id];
        const hasAnswer =
          question.type === "multiple-choice"
            ? Boolean(answer)
            : Boolean((answer || "").trim());

        return hasAnswer ? count + 1 : count;
      }, 0),
    [answers, quiz.questions]
  );

  const score = submitted ? getScore(quiz.questions, answers) : 0;
  const percentage =
    totalQuestions === 0 ? 0 : Math.round((score / totalQuestions) * 100);

  const handleSelectOption = (questionId, optionId) => {
    if (submitted) return;

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: optionId,
    }));
  };

  const handleCodeAnswerChange = (questionId, value) => {
    if (submitted) return;

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <section className="panel knowledge-check-panel">
      <div className="knowledge-check-heading">
        <div>
          <p className="eyebrow">{copy.knowledgeBadge}</p>
          <h2>{quiz.title}</h2>
        </div>

        <div className="knowledge-check-summary">
          <p>{quiz.intro}</p>
          <span className="mode-count">
            {copy.knowledgeProgress(answeredCount, totalQuestions)}
          </span>
        </div>
      </div>

      <div className="tips-box knowledge-check-coach">
        <strong>{copy.knowledgeCoachTitle}</strong>
        <p>{quiz.coachLine}</p>
      </div>

      {submitted && (
        <div className="knowledge-score-banner">
          <div>
            <span className="sidebar-section-label">{copy.knowledgeScoreLabel}</span>
            <h3>{copy.knowledgeScore(score, totalQuestions, percentage)}</h3>
          </div>
          <p>
            {percentage >= 80
              ? copy.knowledgeStrongResult
              : copy.knowledgeRetryResult}
          </p>
        </div>
      )}

      <div className="knowledge-question-list">
        {quiz.questions.map((question, index) => {
          const currentAnswer = answers[question.id];
          const isChoice = question.type === "multiple-choice";
          const isCorrect = submitted
            ? isChoice
              ? currentAnswer === question.correctOptionId
              : question.acceptableAnswers.some(
                  (answer) =>
                    normalizeCodeAnswer(answer) ===
                    normalizeCodeAnswer(currentAnswer || "")
                )
            : false;

          return (
            <article
              className={`knowledge-question-card ${
                submitted
                  ? isCorrect
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              key={question.id}
            >
              <div className="knowledge-question-top">
                <div>
                  <span className="sidebar-section-label">
                    {copy.knowledgeQuestionNumber(index + 1)}
                  </span>
                  <h3>{question.prompt}</h3>
                </div>

                <div className="knowledge-meta-stack">
                  <span className="status-pill not-started">{question.category}</span>
                  <span className="mode-count">
                    {isChoice
                      ? copy.knowledgeTypeChoice
                      : copy.knowledgeTypeCode}
                  </span>
                </div>
              </div>

              {isChoice ? (
                <div className="knowledge-option-list">
                  {question.options.map((option) => {
                    const selected = currentAnswer === option.id;
                    const optionCorrect =
                      submitted && option.id === question.correctOptionId;
                    const optionWrong =
                      submitted && selected && option.id !== question.correctOptionId;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        className={`knowledge-option-btn ${
                          selected ? "selected" : ""
                        } ${optionCorrect ? "correct" : ""} ${
                          optionWrong ? "incorrect" : ""
                        }`}
                        onClick={() => handleSelectOption(question.id, option.id)}
                      >
                        <span className="knowledge-option-badge">
                          {option.id.toUpperCase()}
                        </span>
                        <span>{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="knowledge-code-block-wrap">
                  <pre className="guide-code-block learn-code-block knowledge-code-block">
                    <code>{question.snippet}</code>
                  </pre>
                  <input
                    type="text"
                    className={`knowledge-code-input ${
                      submitted ? (isCorrect ? "correct" : "incorrect") : ""
                    }`}
                    value={currentAnswer || ""}
                    onChange={(event) =>
                      handleCodeAnswerChange(question.id, event.target.value)
                    }
                    placeholder={question.inputPlaceholder}
                  />
                </div>
              )}

              {submitted && (
                <div className="knowledge-feedback">
                  <div className="knowledge-feedback-status">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 size={16} aria-hidden="true" />
                        <span>{copy.knowledgeCorrect}</span>
                      </>
                    ) : (
                      <>
                        <CircleHelp size={16} aria-hidden="true" />
                        <span>{copy.knowledgeIncorrect}</span>
                      </>
                    )}
                  </div>

                  <div className="knowledge-feedback-grid">
                    <article className="knowledge-feedback-card">
                      <span className="sidebar-section-label">
                        {copy.knowledgeExplanation}
                      </span>
                      <p>{question.explanation}</p>
                    </article>

                    <article className="knowledge-feedback-card knowledge-feedback-card-accent">
                      <span className="sidebar-section-label">
                        {copy.knowledgeInterviewTip}
                      </span>
                      <p>{question.interviewTip}</p>
                    </article>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="knowledge-actions">
        <button
          type="button"
          className="primary-btn"
          onClick={handleSubmit}
          disabled={answeredCount !== totalQuestions || submitted}
        >
          <CheckCircle2 size={17} aria-hidden="true" />
          {copy.submitKnowledge}
        </button>

        <button
          type="button"
          className="secondary-btn"
          onClick={handleReset}
        >
          <RotateCcw size={17} aria-hidden="true" />
          {copy.resetKnowledge}
        </button>
      </div>
    </section>
  );
}
