import { CheckCircle2, Menu } from "lucide-react";
import { useMemo, useState } from "react";
import ConceptPrimer from "./components/ConceptPrimer";
import WorkspacePanel from "./components/WorkspacePanel";
import BriefPanel from "./components/layout/BriefPanel";
import ChallengeHeader from "./components/layout/ChallengeHeader";
import SidebarDrawer from "./components/layout/SidebarDrawer";
import ThemeToggle from "./components/ThemeToggle";
import { getClassModules } from "./data/classes";
import { challengeModes } from "./data/challenges/index.js";
import { getCopy, getLocalizedModes } from "./data/i18n";
import useLocalStorage from "./hooks/useLocalStorage";
import HomePage from "./pages/HomePage.jsx";
import { validateChallenge } from "./utils/validators";

export default function App() {
  const [selectedModeId, setSelectedModeId] = useLocalStorage(
    "practice-selected-mode",
    null
  );
  const [selectedClassId, setSelectedClassId] = useLocalStorage(
    "practice-selected-class",
    null
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [language, setLanguage] = useLocalStorage("practice-language", "en");
  const [theme, setTheme] = useLocalStorage("practice-theme", "light");
  const [skippedPrimers, setSkippedPrimers] = useLocalStorage(
    "practice-skipped-primers",
    {}
  );

  const [savedDrafts, setSavedDrafts] = useLocalStorage("challenge-drafts", {});
  const [challengeProgress, setChallengeProgress] = useLocalStorage(
    "challenge-progress",
    {}
  );

  const appCopy = useMemo(() => getCopy(language), [language]);
  const localizedModes = useMemo(
    () => getLocalizedModes(challengeModes, language),
    [language]
  );
  const classModules = useMemo(() => getClassModules(language), [language]);

  const selectedMode = useMemo(() => {
    return localizedModes.find((mode) => mode.id === selectedModeId) || null;
  }, [localizedModes, selectedModeId]);

  const selectedClass = useMemo(() => {
    const currentClass =
      classModules.find((module) => module.id === selectedClassId) || null;

    if (!currentClass || currentClass.modeId !== selectedModeId) return null;

    return currentClass;
  }, [classModules, selectedClassId, selectedModeId]);

  const modeChallenges = useMemo(
    () => selectedMode?.challenges || [],
    [selectedMode]
  );

  const challenges = useMemo(() => {
    if (!selectedClass) return modeChallenges;

    const challengesById = new Map(
      modeChallenges.map((challenge) => [challenge.id, challenge])
    );

    return selectedClass.challengeIds
      .map((challengeId) => challengesById.get(challengeId))
      .filter(Boolean);
  }, [modeChallenges, selectedClass]);

  const firstChallenge = challenges[0] || null;
  const [submissionResult, setSubmissionResult] = useState(null);

  const [activeId, setActiveId] = useLocalStorage("practice-active-id", "");

  const activeChallenge = useMemo(() => {
    if (!selectedMode || challenges.length === 0) return null;
    return (
      challenges.find((challenge) => challenge.id === activeId) ||
      firstChallenge
    );
  }, [selectedMode, challenges, activeId, firstChallenge]);

  const activeChallengeIndex = useMemo(() => {
    if (!activeChallenge) return -1;

    return challenges.findIndex(
      (challenge) => challenge.id === activeChallenge.id
    );
  }, [activeChallenge, challenges]);

  const nextChallenge =
    activeChallengeIndex >= 0
      ? challenges[activeChallengeIndex + 1] || null
      : null;

  const currentDraft = activeChallenge
    ? savedDrafts[activeChallenge.id] || activeChallenge.starter
    : { html: "", css: "", js: "" };

  const handleSelectMode = (modeId) => {
    const nextMode = localizedModes.find((mode) => mode.id === modeId);

    setSelectedModeId(modeId);
    setSelectedClassId(null);
    setActiveId(nextMode?.challenges[0]?.id || "");
    setSubmissionResult(null);
    setDrawerOpen(false);
  };

  const handleSelectClass = (classId) => {
    const nextClass = classModules.find((module) => module.id === classId);
    if (!nextClass) return;

    const firstClassChallenge = nextClass.challengeIds[0] || "";

    setSelectedModeId(nextClass.modeId);
    setSelectedClassId(nextClass.id);
    setActiveId(firstClassChallenge);
    setSubmissionResult(null);
    setDrawerOpen(false);
  };

  const handleSelectChallenge = (challengeId) => {
    setActiveId(challengeId);
    setSubmissionResult(null);
  };

  const handleSkipPrimer = () => {
    if (!activeChallenge) return;

    setSkippedPrimers((currentPrimers) => ({
      ...currentPrimers,
      [activeChallenge.id]: true,
    }));
  };

  const handleShowPrimer = () => {
    if (!activeChallenge) return;

    setSkippedPrimers((currentPrimers) => ({
      ...currentPrimers,
      [activeChallenge.id]: false,
    }));
  };

  const handleNextChallenge = () => {
    if (!nextChallenge) return;

    setActiveId(nextChallenge.id);
    setSubmissionResult(null);
  };

  const handleBackHome = () => {
    setSelectedModeId(null);
    setSelectedClassId(null);
    setDrawerOpen(false);
    setActiveId("");
    setSubmissionResult(null);
  };

  const handleSubmitSolution = () => {
    if (!activeChallenge) return;

    const result = validateChallenge(activeChallenge, currentDraft, language);
    setSubmissionResult(result);

    if (result.status === "success") {
      setChallengeProgress((currentProgress) => ({
        ...currentProgress,
        [activeChallenge.id]: "completed",
      }));
    }
  };

  const updateDraft = (field, value) => {
    if (!activeChallenge) return;

    const updatedDraft = {
      ...currentDraft,
      [field]: value,
    };

    setSavedDrafts((currentDrafts) => ({
      ...currentDrafts,
      [activeChallenge.id]: updatedDraft,
    }));

    const hasStarted =
      (updatedDraft.html || "").trim() ||
      (updatedDraft.css || "").trim() ||
      (updatedDraft.js || "").trim();

    setChallengeProgress((currentProgress) => ({
      ...currentProgress,
      [activeChallenge.id]: hasStarted ? "in-progress" : "not-started",
    }));
  };

  const handleReset = () => {
    if (!activeChallenge) return;

    setSavedDrafts((currentDrafts) => ({
      ...currentDrafts,
      [activeChallenge.id]: {
        ...activeChallenge.starter,
      },
    }));

    setChallengeProgress((currentProgress) => ({
      ...currentProgress,
      [activeChallenge.id]: "not-started",
    }));
  };

  const handleMarkComplete = () => {
    if (!activeChallenge) return;

    setChallengeProgress((currentProgress) => ({
      ...currentProgress,
      [activeChallenge.id]: "completed",
    }));
  };

  if (!selectedMode) {
    return (
      <div className="theme-root" data-theme={theme}>
        <HomePage
          modes={localizedModes}
          classModules={classModules}
          onSelectMode={handleSelectMode}
          onSelectClass={handleSelectClass}
          challengeProgress={challengeProgress}
          copy={appCopy}
          language={language}
          onLanguageChange={setLanguage}
          theme={theme}
          onThemeChange={setTheme}
        />
      </div>
    );
  }

  if (!activeChallenge) {
    return (
      <div className="theme-root" data-theme={theme}>
        <div className="app-main">{appCopy.app.noChallenge}</div>
      </div>
    );
  }

  return (
    <div className="theme-root app-shell single-layout" data-theme={theme}>
      <SidebarDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onBackHome={handleBackHome}
        modeTitle={
          selectedClass
            ? `${selectedMode.title} - ${selectedClass.title}`
            : appCopy.app.modeLabel(selectedMode.title)
        }
        challenges={challenges}
        activeId={activeChallenge.id}
        onSelect={handleSelectChallenge}
        challengeProgress={challengeProgress}
        selectedClass={selectedClass}
        copy={appCopy}
      />

      <div className="app-main">
        <div className="app-container">
          <div className="top-actions">
            <button className="primary-btn" onClick={() => setDrawerOpen(true)}>
              <Menu size={17} aria-hidden="true" />
              {appCopy.app.challenges}
            </button>
            <span className="mode-pill">
              {selectedClass
                ? `${selectedMode.title} - ${selectedClass.title}`
                : appCopy.app.modeLabel(selectedMode.title)}
            </span>
            {skippedPrimers[activeChallenge.id] && (
              <button className="secondary-btn" onClick={handleShowPrimer}>
                {appCopy.primer.reopen}
              </button>
            )}
            <button className="secondary-btn" onClick={handleMarkComplete}>
              <CheckCircle2 size={17} aria-hidden="true" />
              {appCopy.app.markComplete}
            </button>
            <ThemeToggle
              theme={theme}
              onChange={setTheme}
              copy={appCopy.theme}
            />
          </div>

          <ChallengeHeader challenge={activeChallenge} copy={appCopy} />

          {!skippedPrimers[activeChallenge.id] && (
            <ConceptPrimer
              key={`primer-${activeChallenge.id}`}
              challenge={activeChallenge}
              copy={appCopy}
              language={language}
              onSkip={handleSkipPrimer}
            />
          )}

          <div
            key={`${selectedMode.id}:${activeChallenge.id}:${language}`}
            className="content-grid"
          >
            <BriefPanel
              key={`brief-${activeChallenge.id}`}
              challenge={activeChallenge}
              copy={appCopy}
              language={language}
            />
            <WorkspacePanel
              key={`workspace-${activeChallenge.id}`}
              editorType={activeChallenge.editorType}
              html={currentDraft.html}
              css={currentDraft.css}
              js={currentDraft.js}
              setHtml={(value) => updateDraft("html", value)}
              setCss={(value) => updateDraft("css", value)}
              setJs={(value) => updateDraft("js", value)}
              onReset={handleReset}
              onSubmit={handleSubmitSolution}
              onNextChallenge={handleNextChallenge}
              nextChallenge={nextChallenge}
              starter={activeChallenge.starter}
              solution={activeChallenge.solution}
              submissionResult={submissionResult}
              copy={appCopy}
              language={language}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
