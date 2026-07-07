import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { useMemo, useState } from "react";

function getStoredAnswer(rawAnswer) {
  if (!rawAnswer || typeof rawAnswer !== "object" || Array.isArray(rawAnswer)) {
    return { best: "", worst: "", ratings: {} };
  }

  return {
    best: rawAnswer.best || "",
    worst: rawAnswer.worst || "",
    ratings:
      rawAnswer.ratings &&
      typeof rawAnswer.ratings === "object" &&
      !Array.isArray(rawAnswer.ratings)
        ? rawAnswer.ratings
        : {},
  };
}

function isRatingMode(sjt) {
  return sjt.answerMode === "rating";
}

function getRatingLabel(ratingScale, ratingId) {
  return (
    ratingScale.find((rating) => rating.id === ratingId)?.label ||
    ratingId
  );
}

function isValidRating(sjt, ratingId) {
  return sjt.ratingScale.some((rating) => rating.id === ratingId);
}

function isQuestionAnswered(question, answer, sjt) {
  if (isRatingMode(sjt)) {
    return question.options.every((option) =>
      isValidRating(sjt, answer.ratings[option.id])
    );
  }

  return Boolean(
    answer.best &&
      answer.worst &&
      answer.best !== answer.worst &&
      question.options.some((option) => option.id === answer.best) &&
      question.options.some((option) => option.id === answer.worst)
  );
}

function getQuestionMaxScore(question, sjt) {
  return isRatingMode(sjt) ? question.options.length : 2;
}

function getQuestionScore(question, answer, sjt) {
  if (!isQuestionAnswered(question, answer, sjt)) return null;

  if (isRatingMode(sjt)) {
    return question.options.reduce(
      (score, option) =>
        score + (answer.ratings[option.id] === option.rating ? 1 : 0),
      0
    );
  }

  let score = 0;
  if (answer.best === question.bestOptionId) score += 1;
  if (answer.worst === question.worstOptionId) score += 1;
  return score;
}

function getScoreTone(percentage) {
  if (percentage >= 80) return "strong";
  if (percentage >= 60) return "steady";
  return "review";
}

function getScoreMessage(percentage, allAnswered) {
  if (!allAnswered) {
    return "Answer all questions to unlock the full mock score.";
  }

  if (percentage >= 80) {
    return "Strong judgement pattern. Now practise explaining why the best answer protects trust, safety, fairness, and procedure.";
  }

  if (percentage >= 60) {
    return "Good base. Review the lower scoring focus areas and repeat the scenarios that caught you out.";
  }

  return "This is useful practice data. Slow down, identify the risk in each scenario, then try again.";
}

function buildBreakdown(competencies, questions, answers, sjt) {
  return competencies.map((competency) => {
    const relevantQuestions = questions.filter((question) =>
      question.competencyIds.includes(competency.id)
    );
    const answeredQuestions = relevantQuestions.filter((question) =>
      isQuestionAnswered(question, getStoredAnswer(answers[question.id]), sjt)
    );
    const score = answeredQuestions.reduce(
      (sum, question) =>
        sum +
        (getQuestionScore(question, getStoredAnswer(answers[question.id]), sjt) ||
          0),
      0
    );
    const max = answeredQuestions.reduce(
      (sum, question) => sum + getQuestionMaxScore(question, sjt),
      0
    );
    const percentage = max === 0 ? 0 : Math.round((score / max) * 100);

    return {
      ...competency,
      answered: answeredQuestions.length,
      total: relevantQuestions.length,
      score,
      max,
      percentage,
    };
  });
}

function getOptionLabel(index) {
  return String.fromCharCode(65 + index);
}

export default function PoliceSjtPanel({
  challenge,
  progress = {},
  onProgressChange,
}) {
  const [showTheory, setShowTheory] = useState(true);
  const sjt = challenge.sjt;
  const questions = sjt.questions;
  const ratingMode = isRatingMode(sjt);
  const answers = useMemo(() => progress.answers || {}, [progress.answers]);
  const currentIndex = Math.min(
    Math.max(progress.currentIndex || 0, 0),
    questions.length - 1
  );
  const currentQuestion = questions[currentIndex];
  const currentAnswer = getStoredAnswer(answers[currentQuestion.id]);
  const answeredQuestions = questions.filter((question) =>
    isQuestionAnswered(question, getStoredAnswer(answers[question.id]), sjt)
  );
  const answeredCount = answeredQuestions.length;
  const allAnswered = answeredCount === questions.length;
  const totalScore = questions.reduce(
    (sum, question) =>
      sum +
      (getQuestionScore(question, getStoredAnswer(answers[question.id]), sjt) ||
        0),
    0
  );
  const maxScore = questions.reduce(
    (sum, question) => sum + getQuestionMaxScore(question, sjt),
    0
  );
  const percentage = Math.round((totalScore / maxScore) * 100);
  const scoreTone = getScoreTone(percentage);
  const questionScore = getQuestionScore(currentQuestion, currentAnswer, sjt);
  const questionMaxScore = getQuestionMaxScore(currentQuestion, sjt);
  const hasDuplicateSelection =
    !ratingMode &&
    currentAnswer.best &&
    currentAnswer.worst &&
    currentAnswer.best === currentAnswer.worst;
  const showExplanation = isQuestionAnswered(currentQuestion, currentAnswer, sjt);
  const breakdown = useMemo(
    () => buildBreakdown(sjt.competencies, questions, answers, sjt),
    [answers, questions, sjt]
  );

  const updateProgress = (nextProgress) => {
    onProgressChange?.({
      ...progress,
      ...nextProgress,
      updatedAt: new Date().toISOString(),
    });
  };

  const handleSelect = (type, optionId) => {
    const nextQuestionAnswer = {
      ...currentAnswer,
      [type]: optionId,
    };
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: nextQuestionAnswer,
    };
    const nextAnsweredCount = questions.filter((question) =>
      isQuestionAnswered(question, getStoredAnswer(nextAnswers[question.id]), sjt)
    ).length;

    updateProgress({
      answers: nextAnswers,
      currentIndex,
      startedAt: progress.startedAt || new Date().toISOString(),
      completedAt:
        nextAnsweredCount === questions.length
          ? new Date().toISOString()
          : progress.completedAt || null,
    });
  };

  const handleRatingSelect = (optionId, ratingId) => {
    const nextQuestionAnswer = {
      ...currentAnswer,
      ratings: {
        ...currentAnswer.ratings,
        [optionId]: ratingId,
      },
    };
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: nextQuestionAnswer,
    };
    const nextAnsweredCount = questions.filter((question) =>
      isQuestionAnswered(question, getStoredAnswer(nextAnswers[question.id]), sjt)
    ).length;

    updateProgress({
      answers: nextAnswers,
      currentIndex,
      startedAt: progress.startedAt || new Date().toISOString(),
      completedAt:
        nextAnsweredCount === questions.length
          ? new Date().toISOString()
          : progress.completedAt || null,
    });
  };

  const handleMove = (nextIndex) => {
    updateProgress({
      currentIndex: Math.min(Math.max(nextIndex, 0), questions.length - 1),
      startedAt: progress.startedAt || new Date().toISOString(),
    });
  };

  const handleReset = () => {
    onProgressChange?.({
      answers: {},
      currentIndex: 0,
      startedAt: null,
      completedAt: null,
      updatedAt: new Date().toISOString(),
    });
  };

  return (
    <section className="police-sjt-zone">
      <div className="police-sjt-main">
        <section className="panel police-sjt-brief">
          <div className="police-sjt-brief-copy">
            <p className="eyebrow">Police preparation</p>
            <h3>{sjt.heading || "Police SJT practice mock"}</h3>
            <p>{sjt.format}</p>
            <small>{sjt.disclaimer}</small>
          </div>

          <div className="police-sjt-source-list">
            {sjt.sources.map((source) => (
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
        </section>

        <section className="panel police-sjt-theory">
          <button
            type="button"
            className="brief-toggle"
            onClick={() => setShowTheory((current) => !current)}
          >
            <span>
              <BookOpen size={17} aria-hidden="true" />
              Theory you need before the mock
            </span>
            <span>{showTheory ? "Hide" : "Show"}</span>
          </button>

          {showTheory && (
            <div className="sjt-theory-grid">
              {sjt.theory.map((item) => (
                <article className="sjt-theory-card" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          )}
        </section>

        <article className="panel sjt-question-panel">
          <div className="sjt-question-top">
            <div>
              <p className="eyebrow">Question {currentIndex + 1}</p>
              <h3>
                {ratingMode
                  ? "Rate each response"
                  : "Choose the most and least appropriate response"}
              </h3>
            </div>
            <span className="mode-count">
              {answeredCount}/{questions.length} answered
            </span>
          </div>

          <p className="sjt-scenario">{currentQuestion.scenario}</p>

          <div className="sjt-option-list">
            {currentQuestion.options.map((option, index) => {
              const isBestChoice = currentAnswer.best === option.id;
              const isWorstChoice = currentAnswer.worst === option.id;
              const isCorrectBest = option.id === currentQuestion.bestOptionId;
              const isCorrectWorst = option.id === currentQuestion.worstOptionId;
              const selectedRating = currentAnswer.ratings[option.id];
              const isCorrectRating = selectedRating === option.rating;
              const isSelected = ratingMode
                ? Boolean(selectedRating)
                : isBestChoice || isWorstChoice;

              return (
                <article
                  className={`sjt-option-card ${isSelected ? "selected" : ""}`}
                  key={option.id}
                >
                  <div className="sjt-option-copy">
                    <span className="sjt-option-letter">
                      {getOptionLabel(index)}
                    </span>
                    <p>{option.text}</p>
                  </div>

                  <div
                    className={`sjt-option-actions ${
                      ratingMode ? "rating-actions" : ""
                    }`}
                  >
                    {ratingMode
                      ? sjt.ratingScale.map((rating) => (
                          <button
                            type="button"
                            className={`${
                              selectedRating === rating.id ? "selected" : ""
                            } ${
                              rating.id === "counterproductive" ? "danger" : ""
                            }`}
                            key={rating.id}
                            onClick={() =>
                              handleRatingSelect(option.id, rating.id)
                            }
                          >
                            {rating.label}
                          </button>
                        ))
                      : (
                          <>
                            <button
                              type="button"
                              className={isBestChoice ? "selected" : ""}
                              onClick={() => handleSelect("best", option.id)}
                            >
                              Most appropriate
                            </button>
                            <button
                              type="button"
                              className={isWorstChoice ? "selected danger" : ""}
                              onClick={() => handleSelect("worst", option.id)}
                            >
                              Least appropriate
                            </button>
                          </>
                        )}
                  </div>

                  {showExplanation && (
                    <div
                      className={`sjt-option-explanation ${
                        ratingMode
                          ? isCorrectRating
                            ? "correct"
                            : "incorrect"
                          : isCorrectBest
                            ? "best"
                            : ""
                      } ${!ratingMode && isCorrectWorst ? "worst" : ""}`}
                    >
                      <strong>
                        Correct rating:{" "}
                        {getRatingLabel(sjt.ratingScale, option.rating)}
                      </strong>
                      {ratingMode && selectedRating !== option.rating && (
                        <span>
                          Your choice:{" "}
                          {getRatingLabel(sjt.ratingScale, selectedRating)}
                        </span>
                      )}
                      <p>{option.explanation}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {hasDuplicateSelection && (
            <p className="sjt-warning">
              Choose two different responses: one most appropriate and one least
              appropriate.
            </p>
          )}

          {showExplanation && (
            <div className="sjt-explanation">
              <div className="sjt-explanation-result">
                <CheckCircle2 size={18} aria-hidden="true" />
                <div>
                  <strong>
                    Score for this question: {questionScore}/{questionMaxScore}
                  </strong>
                  {ratingMode ? (
                    <span>Correct ratings are shown beneath each response.</span>
                  ) : (
                    <span>
                      Best answer:{" "}
                      {getOptionLabel(
                        currentQuestion.options.findIndex(
                          (option) => option.id === currentQuestion.bestOptionId
                        )
                      )}
                      . Worst answer:{" "}
                      {getOptionLabel(
                        currentQuestion.options.findIndex(
                          (option) => option.id === currentQuestion.worstOptionId
                        )
                      )}
                      .
                    </span>
                  )}
                </div>
              </div>

              <p>{currentQuestion.debrief}</p>
            </div>
          )}

          <div className="sjt-question-actions">
            <button
              type="button"
              className="secondary-btn"
              onClick={() => handleMove(currentIndex - 1)}
              disabled={currentIndex === 0}
            >
              <ArrowLeft size={17} aria-hidden="true" />
              Previous
            </button>
            <button
              type="button"
              className="secondary-btn"
              onClick={() => handleMove(currentIndex + 1)}
              disabled={currentIndex === questions.length - 1}
            >
              Next
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        </article>
      </div>

      <aside className="police-sjt-side">
        <section className={`panel sjt-score-panel ${scoreTone}`}>
          <div className="sjt-score-top">
            <ShieldCheck size={22} aria-hidden="true" />
            <div>
              <p className="eyebrow">Mock score</p>
              <h3>{percentage}%</h3>
            </div>
          </div>

          <p>{getScoreMessage(percentage, allAnswered)}</p>

          <div className="sjt-score-meter">
            <span style={{ width: `${percentage}%` }} />
          </div>

          <div className="sjt-score-row">
            <span>Total</span>
            <strong>
              {totalScore}/{maxScore}
            </strong>
          </div>

          <button
            type="button"
            className="secondary-btn full-width"
            onClick={handleReset}
          >
            <RotateCcw size={17} aria-hidden="true" />
            Restart mock
          </button>
        </section>

        <section className="panel sjt-breakdown-panel">
          <div className="sjt-section-title">
            <BarChart3 size={18} aria-hidden="true" />
            <h3>Score breakdown</h3>
          </div>

          <div className="sjt-breakdown-list">
            {breakdown.map((item) => (
              <article className="sjt-breakdown-item" key={item.id}>
                <div>
                  <strong>{item.label}</strong>
                  <span>
                    {item.answered}/{item.total} answered
                  </span>
                </div>
                <p>{item.description}</p>
                <div className="sjt-breakdown-meter">
                  <span style={{ width: `${item.percentage}%` }} />
                </div>
                <small>
                  {item.score}/{item.max || item.total * questionMaxScore} points
                </small>
              </article>
            ))}
          </div>
        </section>

        <section className="panel sjt-map-panel">
          <h3>Question map</h3>
          <div className="sjt-question-map">
            {questions.map((question, index) => (
              <button
                type="button"
                key={question.id}
                className={`${index === currentIndex ? "active" : ""} ${
                  isQuestionAnswered(
                    question,
                    getStoredAnswer(answers[question.id]),
                    sjt
                  )
                    ? "answered"
                    : ""
                }`}
                onClick={() => handleMove(index)}
                aria-label={`Go to question ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </aside>
    </section>
  );
}
