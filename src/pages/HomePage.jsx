import {
  BookOpen,
  CheckCircle2,
  Code2,
  GraduationCap,
  PlayCircle,
} from "lucide-react";
import LanguageToggle from "../components/LanguageToggle";
import ThemeToggle from "../components/ThemeToggle";
import { getClassStats } from "../data/classes";
import { getCopy } from "../data/i18n";

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

export default function HomePage({
  modes,
  classModules,
  onSelectMode,
  onSelectClass,
  challengeProgress = {},
  copy = getCopy("en"),
  language = "en",
  onLanguageChange,
  theme = "light",
  onThemeChange,
}) {
  const dashboardStats = getDashboardStats(
    modes,
    classModules,
    challengeProgress
  );
  const modulesByMode = modes.map((mode) => ({
    mode,
    modules: classModules
      .filter((module) => module.modeId === mode.id)
      .sort((a, b) => Number(a.number) - Number(b.number)),
  }));

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
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.home.classPath}</p>
            <h2>{copy.home.classPath}</h2>
          </div>
          <p>{copy.home.classIntro}</p>
        </div>

        <div className="track-stack">
          {modulesByMode.map(({ mode, modules }) => {
            const modeStats = getModeStats(mode.challenges, challengeProgress);

            return (
              <article className="track-section" key={mode.id}>
                <div className="track-header">
                  <div>
                    <span className="mode-badge">{mode.title}</span>
                    <h3>{mode.title}</h3>
                    <p>{mode.description}</p>
                  </div>

                  <div className="track-summary">
                    <strong>
                      {copy.home.completedOf(
                        modeStats.completed,
                        modeStats.total
                      )}
                    </strong>
                    <span>{copy.home.progress}</span>
                  </div>
                </div>

                <div className="class-grid">
                  {modules.map((module) => {
                    const stats = getClassStats(module, challengeProgress);

                    return (
                      <article className="class-card" key={module.id}>
                        <div className="class-card-top">
                          <span className="class-number">{module.number}</span>
                          <span className="mode-count">
                            {copy.home.completedOf(
                              stats.completed,
                              stats.total
                            )}
                          </span>
                        </div>

                        <h4>{module.title}</h4>
                        <p>{module.summary}</p>

                        <div className="class-meta-row">
                          <span>{copy.home.projectLabel}</span>
                          <strong>{module.project}</strong>
                        </div>

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
                            <span>
                              {copy.home.inProgressCount(stats.inProgress)}
                            </span>
                            <span>
                              {copy.home.completedOf(
                                stats.completed,
                                stats.total
                              )}
                            </span>
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
              </article>
            );
          })}
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.home.practiceModes}</p>
            <h2>{copy.home.practiceModes}</h2>
          </div>
          <p>{copy.home.practiceIntro}</p>
        </div>

        <div className="mode-grid">
          {modes.map((mode) => {
            const stats = getModeStats(mode.challenges, challengeProgress);

            return (
              <button
                key={mode.id}
                className="mode-card"
                onClick={() => onSelectMode(mode.id)}
              >
                <div className="mode-card-top">
                  <span className="mode-badge">{mode.title}</span>
                  <span className="mode-count">
                    {copy.home.completedOf(stats.completed, stats.total)}
                  </span>
                </div>

                <h3>{mode.title}</h3>
                <p>{mode.description}</p>

                <div className="mode-progress-block">
                  <div className="mode-progress-label-row">
                    <span>{copy.home.progress}</span>
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

                <span className="mode-link">
                  <PlayCircle size={17} aria-hidden="true" />
                  {stats.completed > 0
                    ? copy.home.continueMode
                    : copy.home.startMode}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
