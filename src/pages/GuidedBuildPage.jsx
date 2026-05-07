import { ArrowLeft, CheckCircle2, Code2, PlayCircle, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import MiloGuide from "../components/MiloGuide";
import ThemeToggle from "../components/ThemeToggle";
import LanguageToggle from "../components/LanguageToggle";
import WorkspacePanel from "../components/WorkspacePanel";
import { getGuidedBuild } from "../data/guidedBuilds";
import { getCopy } from "../data/i18n";
import useLocalStorage from "../hooks/useLocalStorage";

function createThemeState(steps) {
  return {
    stepIndex: 0,
    draft: {
      ...steps[0].starter,
    },
    completedStepIds: [],
  };
}

export default function GuidedBuildPage({
  language = "en",
  onLanguageChange,
  theme = "light",
  onThemeChange,
  onBackHome,
}) {
  const copy = useMemo(() => getCopy(language), [language]);
  const [guideState, setGuideState] = useLocalStorage("guided-build-state", {
    selectedThemeId: "adventure",
    themeState: {},
  });
  const [previewViewport, setPreviewViewport] = useLocalStorage(
    "guided-build-preview-viewport",
    "desktop"
  );
  const [submissionResult, setSubmissionResult] = useState(null);
  const [snippetTab, setSnippetTab] = useState("html");

  const selectedThemeId = guideState.selectedThemeId || "adventure";
  const guide = useMemo(
    () => getGuidedBuild(language, selectedThemeId),
    [language, selectedThemeId]
  );

  const currentThemeState =
    guideState.themeState?.[selectedThemeId] || createThemeState(guide.steps);
  const currentStepIndex = Math.min(
    currentThemeState.stepIndex || 0,
    guide.steps.length - 1
  );
  const currentStep = guide.steps[currentStepIndex];
  const nextStep = guide.steps[currentStepIndex + 1] || null;
  const currentDraft = currentThemeState.draft || { ...currentStep.starter };

  const guideWorkspaceCopy = useMemo(
    () => ({
      ...copy,
      workspace: {
        ...copy.workspace,
        showSolution: copy.guide.viewExample,
        backToCode: copy.guide.backToBuild,
        submit: copy.guide.doneStep,
        feedback: copy.guide.stepCheckIn,
        nextPrompt: copy.guide.nextPrompt,
        nextChallenge: copy.guide.nextStep,
        blockComplete: copy.guide.finishedBuild,
      },
    }),
    [copy]
  );

  const completedSet = new Set(currentThemeState.completedStepIds || []);

  const updateGuideStateForTheme = (themeId, updater, nextSelectedThemeId = themeId) => {
    setGuideState((currentState) => {
      const nextGuide = getGuidedBuild(language, themeId);
      const baseThemeState =
        currentState.themeState?.[themeId] || createThemeState(nextGuide.steps);
      const nextThemeState = updater(baseThemeState, nextGuide.steps);

      return {
        selectedThemeId: nextSelectedThemeId,
        themeState: {
          ...currentState.themeState,
          [themeId]: nextThemeState,
        },
      };
    });
  };

  const updateDraft = (field, value) => {
    updateGuideStateForTheme(selectedThemeId, (themeState) => ({
      ...themeState,
      draft: {
        ...themeState.draft,
        [field]: value,
      },
    }));
  };

  const loadDraftSnapshot = (snapshot) => {
    updateGuideStateForTheme(selectedThemeId, (themeState) => ({
      ...themeState,
      draft: {
        ...snapshot,
      },
    }));
    setSubmissionResult(null);
  };

  const handleSelectTheme = (themeId) => {
    updateGuideStateForTheme(
      themeId,
      (themeState) => themeState,
      themeId
    );
    setSubmissionResult(null);
    setSnippetTab("html");
  };

  const handleSelectStep = (index) => {
    updateGuideStateForTheme(selectedThemeId, (themeState) => ({
      ...themeState,
      stepIndex: index,
    }));
    setSubmissionResult(null);
  };

  const handleResetStep = () => {
    updateGuideStateForTheme(selectedThemeId, (themeState, steps) => ({
      ...themeState,
      draft: {
        ...steps[currentStepIndex].starter,
      },
    }));
    setSubmissionResult(null);
  };

  const handleRestartGuide = () => {
    updateGuideStateForTheme(selectedThemeId, (_themeState, steps) =>
      createThemeState(steps)
    );
    setSubmissionResult(null);
    setSnippetTab("html");
  };

  const handleSubmitStep = () => {
    const result = currentStep.validate(currentDraft);
    setSubmissionResult(result);

    if (result.status === "success") {
      updateGuideStateForTheme(selectedThemeId, (themeState) => ({
        ...themeState,
        completedStepIds: Array.from(
          new Set([...(themeState.completedStepIds || []), currentStep.id])
        ),
      }));
    }
  };

  const handleNextStep = () => {
    if (!nextStep) return;

    updateGuideStateForTheme(selectedThemeId, (themeState) => ({
      ...themeState,
      stepIndex: Math.min(themeState.stepIndex + 1, guide.steps.length - 1),
    }));
    setSubmissionResult(null);
    setSnippetTab("html");
  };

  return (
    <div className="theme-root app-shell single-layout" data-theme={theme}>
      <div className="app-main">
        <div className="app-container guided-page">
          <div className="top-actions">
            <button className="secondary-btn" onClick={onBackHome}>
              <ArrowLeft size={17} aria-hidden="true" />
              {copy.guide.backHome}
            </button>

            <span className="mode-pill">{copy.guide.badge}</span>

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

          <section className="panel guided-hero">
            <div className="guided-hero-main">
              <MiloGuide
                eyebrow={copy.guide.mentorLabel}
                title={guide.title}
                message={currentStep.coachLine}
              />

              <div className="guided-hero-copy">
                <p className="guided-hero-intro">{guide.subtitle}</p>

                <div className="guided-theme-row">
                  {guide.themes.map((themeOption) => (
                    <button
                      key={themeOption.id}
                      type="button"
                      className={`guided-theme-card ${
                        selectedThemeId === themeOption.id ? "active" : ""
                      }`}
                      onClick={() => handleSelectTheme(themeOption.id)}
                    >
                      <strong>{themeOption.title}</strong>
                      <span>{themeOption.summary}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="guided-step-strip">
              {guide.steps.map((step, index) => {
                const isActive = index === currentStepIndex;
                const isCompleted = completedSet.has(step.id);

                return (
                  <button
                    key={step.id}
                    type="button"
                    className={`guided-step-btn ${isActive ? "active" : ""}`}
                    onClick={() => handleSelectStep(index)}
                  >
                    <span className="class-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="guided-step-copy">
                      <strong>{step.title}</strong>
                      <span>
                        {isCompleted ? copy.status.completed : copy.guide.stepLabel(index + 1, guide.steps.length)}
                      </span>
                    </div>

                    {isCompleted && <CheckCircle2 size={18} aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </section>

          <div className="guided-layout">
            <aside className="panel guide-sidebar">
              <div className="guide-section-block">
                <span className="sidebar-section-label">{copy.guide.currentStep}</span>
                <h3>{currentStep.title}</h3>
                <p className="brief-text">{currentStep.whyItMatters}</p>
              </div>

              <div className="guide-section-block">
                <span className="sidebar-section-label">{copy.guide.checklist}</span>
                <ul className="clean-list">
                  {currentStep.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="tips-box guide-tip-box">
                <strong>{copy.guide.tipLabel}</strong>
                <p>{currentStep.tip}</p>
              </div>

              <div className="guide-section-block">
                <div className="guide-snippet-top">
                  <span className="sidebar-section-label">{copy.guide.codeHelper}</span>
                  <span className="mode-count">{copy.guide.studyPattern}</span>
                </div>

                <div className="tab-group guide-snippet-tabs">
                  {["html", "css", "js"].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      className={snippetTab === tab ? "tab active" : "tab"}
                      onClick={() => setSnippetTab(tab)}
                    >
                      {tab.toUpperCase()}
                    </button>
                  ))}
                </div>

                <pre className="guide-code-block">
                  <code>{currentStep.snippets[snippetTab]}</code>
                </pre>
              </div>

              <div className="guide-section-block">
                <div className="guide-snippet-top">
                  <span className="sidebar-section-label">{copy.guide.codeDecoded}</span>
                  <span className="mode-count">{copy.guide.keepItSimple}</span>
                </div>

                <div className="guide-callout-list">
                  {currentStep.explainers[snippetTab].map((item) => (
                    <article className="guide-callout-card" key={`${snippetTab}-${item.line}`}>
                      <code>{item.line}</code>
                      <p>{item.explain}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="guide-action-stack">
                <button
                  type="button"
                  className="secondary-btn full-width"
                  onClick={() => loadDraftSnapshot(currentStep.starter)}
                >
                  <RotateCcw size={17} aria-hidden="true" />
                  {copy.guide.loadStarter}
                </button>

                <button
                  type="button"
                  className="secondary-btn full-width"
                  onClick={() => loadDraftSnapshot(currentStep.solution)}
                >
                  <Code2 size={17} aria-hidden="true" />
                  {copy.guide.loadExample}
                </button>

                <button
                  type="button"
                  className="secondary-btn full-width"
                  onClick={handleRestartGuide}
                >
                  <PlayCircle size={17} aria-hidden="true" />
                  {copy.guide.restart}
                </button>
              </div>
            </aside>

            <WorkspacePanel
              editorType="web"
              html={currentDraft.html}
              css={currentDraft.css}
              js={currentDraft.js}
              setHtml={(value) => updateDraft("html", value)}
              setCss={(value) => updateDraft("css", value)}
              setJs={(value) => updateDraft("js", value)}
              onReset={handleResetStep}
              onSubmit={handleSubmitStep}
              onNextChallenge={handleNextStep}
              nextChallenge={nextStep}
              starter={currentStep.starter}
              solution={currentStep.solution}
              submissionResult={submissionResult}
              copy={guideWorkspaceCopy}
              language={language}
              previewViewport={previewViewport}
              onPreviewViewportChange={setPreviewViewport}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
