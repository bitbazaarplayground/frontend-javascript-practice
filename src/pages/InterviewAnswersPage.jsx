import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  Lightbulb,
  MessageSquareQuote,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";
import ComparePatternsPanel from "../components/ComparePatternsPanel";
import KnowledgeCheckPanel from "../components/KnowledgeCheckPanel";
import LanguageToggle from "../components/LanguageToggle";
import MiloGuide from "../components/MiloGuide";
import { getComparePatterns } from "../data/comparePatterns";
import { getInterviewKnowledgeCheck } from "../data/interviewKnowledgeChecks";
import ThemeToggle from "../components/ThemeToggle";
import { getCopy } from "../data/i18n";

function normalize(value = "") {
  return value.toLowerCase().trim();
}

export default function InterviewAnswersPage({
  language = "en",
  onLanguageChange,
  theme = "light",
  onThemeChange,
  onBackHome,
  categories = [],
}) {
  const copy = useMemo(() => getCopy(language), [language]);
  const knowledgeCheck = useMemo(
    () => getInterviewKnowledgeCheck(language),
    [language]
  );
  const comparePatterns = useMemo(
    () => getComparePatterns(language),
    [language]
  );
  const [search, setSearch] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [openQuestionIds, setOpenQuestionIds] = useState(() => {
    const firstQuestionId = categories[0]?.questions?.[0]?.id;
    return firstQuestionId ? [firstQuestionId] : [];
  });

  const totalQuestionCount = useMemo(
    () =>
      categories.reduce(
        (sum, category) => sum + (category.questions?.length || 0),
        0
      ),
    [categories]
  );

  const normalizedSearch = normalize(search);

  const visibleCategories = useMemo(() => {
    return categories
      .filter(
        (category) =>
          activeCategoryId === "all" || category.id === activeCategoryId
      )
      .map((category) => {
        const questions = category.questions.filter((question) => {
          if (!normalizedSearch) return true;

          const searchableText = normalize(
            [
              category.title,
              question.question,
              question.shortAnswer,
              question.easyExplanation,
              question.interviewAnswer,
              question.commonMistake,
            ].join(" ")
          );

          return searchableText.includes(normalizedSearch);
        });

        return {
          ...category,
          questions,
        };
      })
      .filter((category) => category.questions.length > 0);
  }, [activeCategoryId, categories, normalizedSearch]);

  const visibleQuestionCount = useMemo(
    () =>
      visibleCategories.reduce(
        (sum, category) => sum + (category.questions?.length || 0),
        0
      ),
    [visibleCategories]
  );

  const toggleQuestion = (questionId) => {
    setOpenQuestionIds((currentIds) =>
      currentIds.includes(questionId)
        ? currentIds.filter((id) => id !== questionId)
        : [...currentIds, questionId]
    );
  };

  const handleResetFilters = () => {
    setSearch("");
    setActiveCategoryId("all");
  };

  return (
    <div className="theme-root app-shell single-layout" data-theme={theme}>
      <div className="app-main">
        <div className="app-container learn-page">
          <div className="top-actions">
            <button className="secondary-btn" onClick={onBackHome}>
              <ArrowLeft size={17} aria-hidden="true" />
              {copy.learn.backHome}
            </button>

            <span className="mode-pill">{copy.learn.badge}</span>

            <ThemeToggle
              theme={theme}
              onChange={onThemeChange}
              copy={copy.theme}
            />

            <LanguageToggle
              language={language}
              onChange={onLanguageChange}
              label={copy.languageLabel}
            />
          </div>

          <section className="panel learn-hero">
            <div className="learn-hero-main">
              <MiloGuide
                eyebrow={copy.learn.mentorLabel}
                title={copy.learn.title}
                message={copy.learn.heroMessage}
              />

              <div className="learn-hero-copy">
                <p className="guided-hero-intro">{copy.learn.heroIntro}</p>

                <div className="learn-stats-row">
                  <span className="status-pill not-started">
                    {copy.learn.categoryCount(categories.length)}
                  </span>
                  <span className="status-pill not-started">
                    {copy.learn.questionCount(totalQuestionCount)}
                  </span>
                  <span className="status-pill not-started">
                    {copy.learn.interviewFocus}
                  </span>
                </div>
              </div>
            </div>

            <div className="learn-study-strip">
              <article className="learn-study-card">
                <strong>{copy.learn.stepReadTitle}</strong>
                <p>{copy.learn.stepReadText}</p>
              </article>
              <article className="learn-study-card">
                <strong>{copy.learn.stepExampleTitle}</strong>
                <p>{copy.learn.stepExampleText}</p>
              </article>
              <article className="learn-study-card">
                <strong>{copy.learn.stepSayTitle}</strong>
                <p>{copy.learn.stepSayText}</p>
              </article>
            </div>
          </section>

          <section className="panel learn-filter-panel">
            <div className="learn-filter-top">
              <div className="learn-search-block">
                <label className="sidebar-section-label" htmlFor="learn-search">
                  {copy.learn.searchLabel}
                </label>
                <div className="learn-search-input-wrap">
                  <Search size={16} aria-hidden="true" />
                  <input
                    id="learn-search"
                    className="learn-search-input"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder={copy.learn.searchPlaceholder}
                  />
                </div>
              </div>

              <div className="learn-filter-summary">
                <span className="sidebar-section-label">
                  {copy.learn.resultsLabel}
                </span>
                <strong>
                  {copy.learn.resultsCount(
                    visibleQuestionCount,
                    totalQuestionCount
                  )}
                </strong>
              </div>
            </div>

            <div className="learn-category-row">
              <button
                type="button"
                className={
                  activeCategoryId === "all"
                    ? "secondary-btn active-toggle-btn"
                    : "secondary-btn"
                }
                onClick={() => setActiveCategoryId("all")}
              >
                {copy.learn.allCategories}
              </button>

              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={
                    activeCategoryId === category.id
                      ? "secondary-btn active-toggle-btn"
                      : "secondary-btn"
                  }
                  onClick={() => setActiveCategoryId(category.id)}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </section>

          <ComparePatternsPanel patterns={comparePatterns} copy={copy.learn} />

          {visibleCategories.length === 0 ? (
            <section className="panel learn-empty-state">
              <BookOpen size={22} aria-hidden="true" />
              <h2>{copy.learn.noResultsTitle}</h2>
              <p>{copy.learn.noResultsBody}</p>
              <button
                type="button"
                className="secondary-btn"
                onClick={handleResetFilters}
              >
                {copy.learn.resetFilters}
              </button>
            </section>
          ) : (
            <div className="learn-category-stack">
              {visibleCategories.map((category) => (
                <section className="panel learn-category-panel" key={category.id}>
                  <div className="learn-category-heading">
                    <div>
                      <p className="eyebrow">{copy.learn.topicLabel}</p>
                      <h2>{category.title}</h2>
                    </div>
                    <div className="learn-category-summary">
                      <p>{category.summary}</p>
                      <span className="mode-count">
                        {copy.learn.questionCount(category.questions.length)}
                      </span>
                    </div>
                  </div>

                  <div className="learn-answer-list">
                    {category.questions.map((question) => {
                      const isOpen = openQuestionIds.includes(question.id);
                      const answerPanelId = `answer-panel-${question.id}`;

                      return (
                        <article
                          className={`learn-answer-card ${
                            isOpen ? "expanded" : ""
                          }`}
                          key={question.id}
                        >
                          <button
                            type="button"
                            className="learn-answer-toggle"
                            onClick={() => toggleQuestion(question.id)}
                            aria-expanded={isOpen}
                            aria-controls={answerPanelId}
                          >
                            <div className="learn-answer-toggle-copy">
                              <span className="sidebar-section-label">
                                {copy.learn.questionLabel}
                              </span>
                              <h3>{question.question}</h3>
                              <p>{question.shortAnswer}</p>
                            </div>

                            <ChevronDown
                              size={18}
                              aria-hidden="true"
                              className="learn-answer-chevron"
                            />
                          </button>

                          {isOpen && (
                            <div
                              className="learn-answer-body"
                              id={answerPanelId}
                            >
                              <div className="learn-answer-grid">
                                <article className="learn-answer-pane learn-answer-pane-accent">
                                  <span className="sidebar-section-label">
                                    {copy.learn.shortAnswer}
                                  </span>
                                  <p>{question.shortAnswer}</p>
                                </article>

                                <article className="learn-answer-pane">
                                  <div className="learn-pane-heading">
                                    <Lightbulb size={15} aria-hidden="true" />
                                    <span>{copy.learn.easyExplanation}</span>
                                  </div>
                                  <p>{question.easyExplanation}</p>
                                </article>

                                <article className="learn-answer-pane learn-answer-pane-wide">
                                  <span className="sidebar-section-label">
                                    {copy.learn.tinyExample}
                                  </span>
                                  <pre className="guide-code-block learn-code-block">
                                    <code>{question.tinyExampleCode}</code>
                                  </pre>
                                  <p className="learn-example-note">
                                    {question.tinyExampleNote}
                                  </p>
                                </article>

                                <article className="learn-answer-pane learn-answer-pane-wide">
                                  <div className="learn-answer-spotlight">
                                    <div className="learn-answer-spotlight-top">
                                      <MessageSquareQuote
                                        size={16}
                                        aria-hidden="true"
                                      />
                                      <span>{copy.learn.interviewAnswer}</span>
                                    </div>
                                    <p>{question.interviewAnswer}</p>
                                  </div>
                                </article>

                                <article className="tips-box learn-mistake-box learn-answer-pane-wide">
                                  <strong>{copy.learn.commonMistake}</strong>
                                  <p>{question.commonMistake}</p>
                                </article>
                              </div>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          )}

          <KnowledgeCheckPanel quiz={knowledgeCheck} copy={copy.learn} />
        </div>
      </div>
    </div>
  );
}
