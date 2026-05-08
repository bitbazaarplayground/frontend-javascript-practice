import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Code2,
  Download,
  GraduationCap,
  PlayCircle,
  Upload,
} from "lucide-react";
import { useRef, useState } from "react";
import LanguageToggle from "../components/LanguageToggle";
import MiloGuide from "../components/MiloGuide";
import ThemeToggle from "../components/ThemeToggle";
import { getClassStats } from "../data/classes";
import { getCopy } from "../data/i18n";

function getPreviewTitle(title = "") {
  return title
    .replace(/^Challenge\s+\d+\s+—\s+/, "")
    .replace(/^Capstone\s+—\s+/, "")
    .replace(/^Reto\s+\d+\s+-\s+/, "")
    .replace(/^Proyecto final\s+-\s+/, "")
    .trim();
}

function getModeStats(challenges, challengeProgress) {
  const total = challenges.length;

  const completed = challenges.filter(
    (challenge) => challengeProgress?.[challenge.id] === "completed"
  ).length;

  const inProgress = challenges.filter(
    (challenge) => challengeProgress?.[challenge.id] === "in-progress"
  ).length;

  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return {
    total,
    completed,
    inProgress,
    percentage,
  };
}

function getDashboardStats(modes, classModules, challengeProgress) {
  const allChallenges = modes.flatMap((mode) => mode.challenges);
  const completed = allChallenges.filter(
    (challenge) => challengeProgress?.[challenge.id] === "completed"
  ).length;

  return {
    totalChallenges: allChallenges.length,
    completed,
    totalClasses: classModules.length,
    tracks: modes.length,
  };
}

function getInterviewAnswerStats(categories = []) {
  return categories.reduce(
    (stats, category) => ({
      categories: stats.categories + 1,
      questions: stats.questions + (category.questions?.length || 0),
    }),
    { categories: 0, questions: 0 }
  );
}

export default function HomePage({
  modes,
  classModules,
  onOpenGuide,
  onOpenLearnPage,
  onSelectMode,
  onSelectClass,
  challengeProgress = {},
  copy = getCopy("en"),
  language = "en",
  onLanguageChange,
  theme = "light",
  onThemeChange,
  interviewAnswerLibrary = [],
  onExportProgress,
  onImportProgress,
  progressTransferStatus = null,
}) {
  const [selectedHomeModeId, setSelectedHomeModeId] = useState(null);
  const importInputRef = useRef(null);
  const dashboardStats = getDashboardStats(
    modes,
    classModules,
    challengeProgress
  );
  const interviewStats = getInterviewAnswerStats(interviewAnswerLibrary);
  const challengeMap = new Map(
    modes.flatMap((mode) =>
      mode.challenges.map((challenge) => [challenge.id, challenge])
    )
  );

  const modulesByMode = modes.map((mode) => ({
    mode,
    modules: classModules
      .filter((module) => module.modeId === mode.id)
      .sort((a, b) => Number(a.trackNumber || a.number) - Number(b.trackNumber || b.number)),
  }));

  const selectedModeGroup =
    modulesByMode.find(({ mode }) => mode.id === selectedHomeModeId) || null;

  const handleOpenImport = () => {
    if (!importInputRef.current) return;
    importInputRef.current.value = "";
    importInputRef.current.click();
  };

  return (
    <main className="home-page">
      <header className="home-header">
        <div className="home-title-block">
          <p className="eyebrow">{copy.home.eyebrow}</p>
          <h1>{copy.home.title}</h1>
          <p className="hero-text">{copy.home.intro}</p>
        </div>

        <div className="header-controls">
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
      </header>

      <section className="dashboard-strip" aria-label={copy.home.dashboard}>
        <div className="stat-item">
          <Code2 size={20} aria-hidden="true" />
          <div>
            <strong>{dashboardStats.totalChallenges}</strong>
            <span>{copy.home.totalChallenges}</span>
          </div>
        </div>

        <div className="stat-item">
          <GraduationCap size={20} aria-hidden="true" />
          <div>
            <strong>{dashboardStats.totalClasses}</strong>
            <span>{copy.home.totalClasses}</span>
          </div>
        </div>

        <div className="stat-item">
          <BookOpen size={20} aria-hidden="true" />
          <div>
            <strong>{dashboardStats.tracks}</strong>
            <span>{copy.home.learningTracks}</span>
          </div>
        </div>

        <div className="stat-item progress-stat">
          <CheckCircle2 size={20} aria-hidden="true" />
          <div>
            <strong>
              {dashboardStats.completed}/{dashboardStats.totalChallenges}
            </strong>
            <span>{copy.home.completed}</span>
          </div>
        </div>
      </section>

      <section className="home-section">
        <article className="panel progress-transfer-card">
          <div className="progress-transfer-copy">
            <div>
              <p className="eyebrow">{copy.home.progressTransferEyebrow}</p>
              <h2>{copy.home.progressTransferTitle}</h2>
            </div>
            <p className="progress-transfer-body">
              {copy.home.progressTransferIntro}
            </p>
            <p className="progress-transfer-note">
              {copy.home.progressTransferNote}
            </p>
            {progressTransferStatus && (
              <p
                className={`progress-transfer-status ${progressTransferStatus.tone}`}
                role="status"
              >
                {progressTransferStatus.message}
              </p>
            )}
          </div>

          <div className="progress-transfer-actions">
            <button
              type="button"
              className="secondary-btn"
              onClick={onExportProgress}
            >
              <Download size={17} aria-hidden="true" />
              {copy.home.exportProgress}
            </button>

            <button
              type="button"
              className="primary-btn"
              onClick={handleOpenImport}
            >
              <Upload size={17} aria-hidden="true" />
              {copy.home.importProgress}
            </button>

            <input
              ref={importInputRef}
              type="file"
              accept=".json,application/json"
              className="sr-only-input"
              onChange={(event) => {
                const file = event.target.files?.[0] || null;
                onImportProgress?.(file);
                event.target.value = "";
              }}
            />
          </div>
        </article>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.guide.badge}</p>
            <h2>{copy.home.guidedStudio}</h2>
          </div>
          <p>{copy.home.guidedStudioIntro}</p>
        </div>

        <article className="guide-entry-card panel">
          <div className="guide-entry-copy">
            <MiloGuide
              compact
              eyebrow={copy.guide.mentorLabel}
              title={copy.home.guidedStudio}
              message={copy.home.guidedStudioMessage}
            />

            <div className="guide-entry-meta">
              <span className="mode-count">{copy.home.guidedThemes}</span>
              <div className="class-section-chip-row">
                <span className="status-pill not-started">Creature Quest</span>
                <span className="status-pill not-started">Travel Journal</span>
              </div>
            </div>
          </div>

          <div className="guide-entry-actions">
            <button
              type="button"
              className="primary-btn"
              onClick={() => onOpenGuide("first-website")}
            >
              <PlayCircle size={17} aria-hidden="true" />
              {copy.guide.openGuide}
            </button>
          </div>
        </article>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.learn.badge}</p>
            <h2>{copy.home.learnConcepts}</h2>
          </div>
          <p>{copy.home.learnConceptsIntro}</p>
        </div>

        <article className="guide-entry-card panel">
          <div className="guide-entry-copy">
            <MiloGuide
              compact
              eyebrow={copy.learn.mentorLabel}
              title={copy.home.learnConcepts}
              message={copy.home.learnConceptsMessage}
            />

            <div className="guide-entry-meta">
              <span className="mode-count">
                {copy.learn.questionCount(interviewStats.questions)}
              </span>
              <div className="class-section-chip-row">
                {interviewAnswerLibrary.slice(0, 6).map((category) => (
                  <span className="status-pill not-started" key={category.id}>
                    {category.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="guide-entry-actions guide-entry-actions-stack">
            <span className="mode-count">
              {copy.learn.categoryCount(interviewStats.categories)}
            </span>
            <button
              type="button"
              className="primary-btn"
              onClick={() => onOpenLearnPage("interview-answers")}
            >
              <BookOpen size={17} aria-hidden="true" />
              {copy.learn.openLibrary}
            </button>
          </div>
        </article>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.home.learningTracks}</p>
            <h2>{copy.home.learningTracks}</h2>
          </div>
          <p>{copy.home.trackIntro}</p>
        </div>

        <div className="mode-grid">
          {modulesByMode.map(({ mode, modules }) => {
            const modeStats = getModeStats(mode.challenges, challengeProgress);

            return (
              <button
                key={mode.id}
                className={`mode-card ${
                  selectedHomeModeId === mode.id ? "active" : ""
                }`}
                onClick={() => setSelectedHomeModeId(mode.id)}
              >
                <div className="mode-card-top">
                  <span className="mode-badge">{mode.title}</span>
                  <span className="mode-count">
                    {copy.home.completedOf(modeStats.completed, modeStats.total)}
                  </span>
                </div>

                <h3>{mode.title}</h3>
                <p>{mode.description}</p>

                <div className="mode-meta-row">
                  <span>{copy.home.blocksCount(modules.length)}</span>
                  <span>{copy.home.phaseChallenges(modeStats.total)}</span>
                </div>

                <div className="mode-progress-block">
                  <div className="mode-progress-label-row">
                    <span>{copy.home.progress}</span>
                    <span>{modeStats.percentage}%</span>
                  </div>

                  <div className="mode-progress-bar">
                    <div
                      className="mode-progress-fill"
                      style={{ width: `${modeStats.percentage}%` }}
                    />
                  </div>

                  <div className="mode-progress-summary">
                    <span>{copy.home.inProgressCount(modeStats.inProgress)}</span>
                    <span>{copy.home.completedOf(modeStats.completed, modeStats.total)}</span>
                  </div>
                </div>

                <span className="mode-link">
                  <PlayCircle size={17} aria-hidden="true" />
                  {copy.home.viewTrack}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {selectedModeGroup && (
        <section className="home-section">
          <div className="section-heading track-detail-heading">
            <div>
              <p className="eyebrow">{selectedModeGroup.mode.title}</p>
              <h2>{copy.home.classPath}</h2>
            </div>

            <div className="track-detail-summary">
              <p>{selectedModeGroup.mode.description}</p>

              <div className="track-detail-actions">
                <button
                  className="secondary-btn"
                  onClick={() => setSelectedHomeModeId(null)}
                >
                  <ArrowLeft size={17} aria-hidden="true" />
                  {copy.home.backToTracks}
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => onSelectMode(selectedModeGroup.mode.id)}
                >
                  <PlayCircle size={17} aria-hidden="true" />
                  {copy.home.openMode}
                </button>
              </div>
            </div>
          </div>

          <div className="class-grid">
            {selectedModeGroup.modules.map((module) => {
              const stats = getClassStats(module, challengeProgress);

              return (
                <article className="class-card" key={module.id}>
                  <div className="class-card-top">
                    <span className="class-number">{module.trackNumber}</span>
                    <span className="mode-count">
                      {copy.home.completedOf(stats.completed, stats.total)}
                    </span>
                  </div>

                  <h4>{module.title}</h4>
                  <p>{module.summary}</p>

                  <div className="class-meta-row">
                    <span>{copy.home.projectLabel}</span>
                    <strong>{module.project}</strong>
                  </div>

                  <div className="class-meta-grid">
                    <div className="class-meta-item">
                      <span>{copy.home.typicalTime}</span>
                      <strong>{module.estimatedTime}</strong>
                    </div>
                    <div className="class-meta-item">
                      <span>{copy.home.practiceModes}</span>
                      <strong>{module.formatLabel}</strong>
                    </div>
                  </div>

                  {module.sections?.length > 0 && (
                    <div className="class-section-previews">
                      <span>{copy.home.insideBlock}</span>

                      <div className="class-section-preview-list">
                        {module.sections.map((section) => {
                          const sectionChallenges = section.challengeIds
                            .map((challengeId) => challengeMap.get(challengeId))
                            .filter(Boolean);
                          const previewChallenges = sectionChallenges.slice(0, 3);
                          const remainingCount =
                            sectionChallenges.length - previewChallenges.length;

                          return (
                            <article
                              className="class-section-preview"
                              key={section.title}
                            >
                              <div className="class-section-preview-top">
                                <strong>{section.title}</strong>
                                <span className="section-preview-count">
                                  {copy.home.challengeCount(sectionChallenges.length)}
                                </span>
                              </div>

                              {section.summary && (
                                <p className="section-preview-summary">
                                  {section.summary}
                                </p>
                              )}

                              <ul className="section-preview-challenges">
                                {previewChallenges.map((challenge) => (
                                  <li key={challenge.id}>
                                    {getPreviewTitle(challenge.title)}
                                  </li>
                                ))}
                              </ul>

                              {remainingCount > 0 && (
                                <small className="section-preview-more">
                                  {copy.home.moreChallenges(remainingCount)}
                                </small>
                              )}
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="class-outcomes">
                    <span>{copy.home.outcomesLabel}</span>
                    <ul>
                      {module.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mode-progress-block">
                    <div className="mode-progress-label-row">
                      <span>{copy.home.linkedPractice}</span>
                      <span>{stats.percentage}%</span>
                    </div>

                    <div className="mode-progress-bar">
                      <div
                        className="mode-progress-fill"
                        style={{ width: `${stats.percentage}%` }}
                      />
                    </div>

                    <div className="mode-progress-summary">
                      <span>{copy.home.inProgressCount(stats.inProgress)}</span>
                      <span>{copy.home.completedOf(stats.completed, stats.total)}</span>
                    </div>
                  </div>

                  <button
                    className="secondary-btn class-action"
                    onClick={() => onSelectClass(module.id)}
                  >
                    <PlayCircle size={17} aria-hidden="true" />
                    {copy.home.openBlock}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
