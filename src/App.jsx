import { CheckCircle2, Menu } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ConceptPrimer from "./components/ConceptPrimer";
import InterviewReflectionPanel from "./components/InterviewReflectionPanel";
import PoliceLearningPanel from "./components/PoliceLearningPanel";
import PoliceSjtPanel from "./components/PoliceSjtPanel";
import ThemeToggle from "./components/ThemeToggle";
import WorkspacePanel from "./components/WorkspacePanel";
import BriefPanel from "./components/layout/BriefPanel";
import ChallengeHeader from "./components/layout/ChallengeHeader";
import SidebarDrawer from "./components/layout/SidebarDrawer";
import { challengeModes } from "./data/challenges/index.js";
import { getClassModules } from "./data/classes";
import { getInterviewAnswerLibrary } from "./data/interviewAnswers";
import { getCopy, getLocalizedModes } from "./data/i18n";
import useLocalStorage from "./hooks/useLocalStorage";
import GuidedBuildPage from "./pages/GuidedBuildPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import InterviewAnswersPage from "./pages/InterviewAnswersPage.jsx";
import { validateChallenge } from "./utils/validators";

const PROGRESS_EXPORT_VERSION = 1;

function readStoredJson(key) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeStoredJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error writing imported localStorage key:", key, error);
  }
}

function formatTimeRemaining(milliseconds, language = "en") {
  const totalSeconds = Math.max(Math.floor(milliseconds / 1000), 0);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  if (hours > 0) {
    return `${hours}:${paddedMinutes}:${paddedSeconds}`;
  }

  if (language === "es") {
    return `${minutes}:${paddedSeconds}`;
  }

  return `${minutes}:${paddedSeconds}`;
}

export default function App() {
  const [selectedGuideId, setSelectedGuideId] = useLocalStorage(
    "practice-selected-guide",
    null
  );
  const [selectedLearnPageId, setSelectedLearnPageId] = useLocalStorage(
    "practice-selected-learn-page",
    null
  );
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
  const [previewViewport, setPreviewViewport] = useLocalStorage(
    "practice-preview-viewport",
    "desktop"
  );
  const [briefCollapsed, setBriefCollapsed] = useLocalStorage(
    "practice-brief-collapsed",
    false
  );
  const [skippedPrimers, setSkippedPrimers] = useLocalStorage(
    "practice-skipped-primers",
    {}
  );

  const [savedDrafts, setSavedDrafts] = useLocalStorage("challenge-drafts", {});
  const [challengeProgress, setChallengeProgress] = useLocalStorage(
    "challenge-progress",
    {}
  );
  const [interviewMode, setInterviewMode] = useLocalStorage(
    "practice-interview-mode",
    "practice"
  );
  const [timedSessions, setTimedSessions] = useLocalStorage(
    "practice-timed-sessions",
    {}
  );
  const [interviewReflections, setInterviewReflections] = useLocalStorage(
    "practice-interview-reflections",
    {}
  );
  const [policeSjtProgress, setPoliceSjtProgress] = useLocalStorage(
    "practice-police-sjt-progress",
    {}
  );
  const [assessmentNow, setAssessmentNow] = useState(() => Date.now());
  const [progressTransferStatus, setProgressTransferStatus] = useState(null);

  const appCopy = useMemo(() => getCopy(language), [language]);
  const localizedModes = useMemo(
    () => getLocalizedModes(challengeModes, language),
    [language]
  );
  const classModules = useMemo(() => getClassModules(language), [language]);
  const interviewAnswerLibrary = useMemo(
    () => getInterviewAnswerLibrary(language),
    [language]
  );

  const selectedMode = useMemo(() => {
    return localizedModes.find((mode) => mode.id === selectedModeId) || null;
  }, [localizedModes, selectedModeId]);
  const isInterviewTrack = selectedMode?.id === "interview";
  const isPoliceTrack = selectedMode?.id === "police";
  const isRookieTrack = selectedMode?.id === "rookie";

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

  const timeLimitMinutes = selectedClass?.timeLimitMinutes || 60;
  const timedInterviewMode = isInterviewTrack && interviewMode === "timed";
  const activeTimedSession =
    timedInterviewMode && activeChallenge
      ? timedSessions[activeChallenge.id] || null
      : null;
  const remainingAssessmentMs = timedInterviewMode
    ? Math.max((activeTimedSession?.endsAt || 0) - assessmentNow, 0)
    : 0;
  const timedAssessmentFinished =
    !timedInterviewMode ||
    remainingAssessmentMs === 0 ||
    Boolean(activeTimedSession?.finishedAt);
  const currentReflection = activeChallenge
    ? interviewReflections[activeChallenge.id] || {
        summary: "",
        decisions: "",
        improve: "",
      }
    : { summary: "", decisions: "", improve: "" };
  const showExplanationPanel =
    (timedInterviewMode && submissionResult) ||
    (isRookieTrack && submissionResult?.status === "success");

  const currentDraft = activeChallenge
    ? savedDrafts[activeChallenge.id] || activeChallenge.starter
    : { html: "", css: "", js: "" };

  useEffect(() => {
    if (!timedInterviewMode || !activeChallenge) return;

    setTimedSessions((currentSessions) => {
      if (currentSessions[activeChallenge.id]) return currentSessions;

      const startedAt = Date.now();

      return {
        ...currentSessions,
        [activeChallenge.id]: {
          startedAt,
          endsAt: startedAt + timeLimitMinutes * 60 * 1000,
        },
      };
    });
  }, [
    timedInterviewMode,
    activeChallenge,
    timeLimitMinutes,
    setTimedSessions,
  ]);

  useEffect(() => {
    if (!timedInterviewMode) return;

    const timer = window.setInterval(() => {
      setAssessmentNow(Date.now());
    }, 1000);

    return () => window.clearInterval(timer);
  }, [timedInterviewMode, activeChallenge?.id]);

  const handleSelectMode = (modeId) => {
    const nextMode = localizedModes.find((mode) => mode.id === modeId);

    setSelectedGuideId(null);
    setSelectedLearnPageId(null);
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

    setSelectedGuideId(null);
    setSelectedLearnPageId(null);
    setSelectedModeId(nextClass.modeId);
    setSelectedClassId(nextClass.id);
    setActiveId(firstClassChallenge);
    setSubmissionResult(null);
    setDrawerOpen(false);
  };

  const handleOpenGuide = (guideId) => {
    setSelectedGuideId(guideId);
    setSelectedLearnPageId(null);
    setSelectedModeId(null);
    setSelectedClassId(null);
    setActiveId("");
    setSubmissionResult(null);
    setDrawerOpen(false);
  };

  const handleOpenLearnPage = (learnPageId) => {
    setSelectedLearnPageId(learnPageId);
    setSelectedGuideId(null);
    setSelectedModeId(null);
    setSelectedClassId(null);
    setActiveId("");
    setSubmissionResult(null);
    setDrawerOpen(false);
  };

  const handleExportProgress = () => {
    try {
      const payload = {
        kind: "frontend-practice-progress",
        version: PROGRESS_EXPORT_VERSION,
        exportedAt: new Date().toISOString(),
        data: {
          language,
          theme,
          selectedGuideId,
          selectedLearnPageId,
          selectedModeId,
          selectedClassId,
          activeId,
          previewViewport,
          briefCollapsed,
          skippedPrimers,
          savedDrafts,
          challengeProgress,
          interviewMode,
          timedSessions,
          interviewReflections,
          policeSjtProgress,
          guidedBuildState: readStoredJson("guided-build-state"),
          guidedBuildPreviewViewport: readStoredJson(
            "guided-build-preview-viewport"
          ),
        },
      };

      const fileName = `frontend-practice-progress-${new Date()
        .toISOString()
        .slice(0, 10)}.json`;
      const blob = new Blob([JSON.stringify(payload, null, 2)], {
        type: "application/json",
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setProgressTransferStatus({
        tone: "success",
        message: appCopy.home.exportDone(fileName),
      });
    } catch {
      setProgressTransferStatus({
        tone: "error",
        message: appCopy.home.transferFailed,
      });
    }
  };

  const handleImportProgress = async (file) => {
    if (!file) return;

    try {
      const raw = await file.text();
      const parsed = JSON.parse(raw);

      if (
        parsed?.kind !== "frontend-practice-progress" ||
        !parsed?.data ||
        typeof parsed.data !== "object"
      ) {
        setProgressTransferStatus({
          tone: "error",
          message: appCopy.home.importInvalid,
        });
        return;
      }

      const imported = parsed.data;

      if (typeof imported.language === "string") {
        setLanguage(imported.language);
      }

      if (typeof imported.theme === "string") {
        setTheme(imported.theme);
      }

      if (
        imported.selectedGuideId === null ||
        typeof imported.selectedGuideId === "string"
      ) {
        setSelectedGuideId(imported.selectedGuideId);
      }

      if (
        imported.selectedLearnPageId === null ||
        typeof imported.selectedLearnPageId === "string"
      ) {
        setSelectedLearnPageId(imported.selectedLearnPageId);
      }

      if (
        imported.selectedModeId === null ||
        typeof imported.selectedModeId === "string"
      ) {
        setSelectedModeId(imported.selectedModeId);
      }

      if (
        imported.selectedClassId === null ||
        typeof imported.selectedClassId === "string"
      ) {
        setSelectedClassId(imported.selectedClassId);
      }

      if (typeof imported.activeId === "string") {
        setActiveId(imported.activeId);
      }

      if (
        typeof imported.previewViewport === "string" &&
        (imported.previewViewport === "desktop" ||
          imported.previewViewport === "phone")
      ) {
        setPreviewViewport(imported.previewViewport);
      }

      if (typeof imported.briefCollapsed === "boolean") {
        setBriefCollapsed(imported.briefCollapsed);
      }

      if (
        imported.skippedPrimers &&
        typeof imported.skippedPrimers === "object" &&
        !Array.isArray(imported.skippedPrimers)
      ) {
        setSkippedPrimers(imported.skippedPrimers);
      }

      if (
        imported.savedDrafts &&
        typeof imported.savedDrafts === "object" &&
        !Array.isArray(imported.savedDrafts)
      ) {
        setSavedDrafts(imported.savedDrafts);
      }

      if (
        imported.challengeProgress &&
        typeof imported.challengeProgress === "object" &&
        !Array.isArray(imported.challengeProgress)
      ) {
        setChallengeProgress(imported.challengeProgress);
      }

      if (
        typeof imported.interviewMode === "string" &&
        (imported.interviewMode === "practice" ||
          imported.interviewMode === "timed")
      ) {
        setInterviewMode(imported.interviewMode);
      }

      if (
        imported.timedSessions &&
        typeof imported.timedSessions === "object" &&
        !Array.isArray(imported.timedSessions)
      ) {
        setTimedSessions(imported.timedSessions);
      }

      if (
        imported.interviewReflections &&
        typeof imported.interviewReflections === "object" &&
        !Array.isArray(imported.interviewReflections)
      ) {
        setInterviewReflections(imported.interviewReflections);
      }

      if (
        imported.policeSjtProgress &&
        typeof imported.policeSjtProgress === "object" &&
        !Array.isArray(imported.policeSjtProgress)
      ) {
        setPoliceSjtProgress(imported.policeSjtProgress);
      }

      if (
        imported.guidedBuildState &&
        typeof imported.guidedBuildState === "object" &&
        !Array.isArray(imported.guidedBuildState)
      ) {
        writeStoredJson("guided-build-state", imported.guidedBuildState);
      }

      if (
        typeof imported.guidedBuildPreviewViewport === "string" &&
        (imported.guidedBuildPreviewViewport === "desktop" ||
          imported.guidedBuildPreviewViewport === "phone")
      ) {
        writeStoredJson(
          "guided-build-preview-viewport",
          imported.guidedBuildPreviewViewport
        );
      }

      setSubmissionResult(null);
      setDrawerOpen(false);
      setAssessmentNow(Date.now());
      setProgressTransferStatus({
        tone: "success",
        message: appCopy.home.importDone(file.name),
      });
    } catch {
      setProgressTransferStatus({
        tone: "error",
        message: appCopy.home.importFailed,
      });
    }
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
    setSelectedGuideId(null);
    setSelectedLearnPageId(null);
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

    if (timedInterviewMode) {
      setTimedSessions((currentSessions) => {
        const existingSession = currentSessions[activeChallenge.id] || {
          startedAt: Date.now(),
          endsAt: Date.now() + timeLimitMinutes * 60 * 1000,
        };

        return {
          ...currentSessions,
          [activeChallenge.id]: {
            ...existingSession,
            finishedAt: Date.now(),
          },
        };
      });
    }

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

  const handleReflectionChange = (field, value) => {
    if (!activeChallenge) return;

    setInterviewReflections((currentReflections) => ({
      ...currentReflections,
      [activeChallenge.id]: {
        ...currentReflections[activeChallenge.id],
        [field]: value,
      },
    }));
  };

  const handlePoliceSjtProgressChange = (nextProgress) => {
    if (!activeChallenge) return;

    setPoliceSjtProgress((currentProgress) => ({
      ...currentProgress,
      [activeChallenge.id]: nextProgress,
    }));

    const answers = nextProgress.answers || {};
    const questions = activeChallenge.sjt?.questions || [];
    const isRatingMode = activeChallenge.sjt?.answerMode === "rating";
    const validRatingIds = new Set(
      (activeChallenge.sjt?.ratingScale || []).map((rating) => rating.id)
    );
    const totalQuestions = questions.length;
    const answeredCount = questions.filter((question) => {
      const answer = answers[question.id];
      if (!answer || typeof answer !== "object" || Array.isArray(answer)) {
        return false;
      }

      if (isRatingMode) {
        const ratings =
          answer.ratings &&
          typeof answer.ratings === "object" &&
          !Array.isArray(answer.ratings)
            ? answer.ratings
            : {};

        return question.options.every((option) =>
          validRatingIds.has(ratings[option.id])
        );
      }

      return Boolean(
        answer.best &&
          answer.worst &&
          answer.best !== answer.worst
      );
    }).length;
    const nextStatus =
      totalQuestions > 0 && answeredCount === totalQuestions
        ? "completed"
        : answeredCount > 0
          ? "in-progress"
          : "not-started";

    setChallengeProgress((currentProgress) => ({
      ...currentProgress,
      [activeChallenge.id]: nextStatus,
    }));
  };

  if (selectedGuideId) {
    return (
      <GuidedBuildPage
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeChange={setTheme}
        onBackHome={handleBackHome}
      />
    );
  }

  if (selectedLearnPageId) {
    return (
      <InterviewAnswersPage
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeChange={setTheme}
        onBackHome={handleBackHome}
        categories={interviewAnswerLibrary}
      />
    );
  }

  if (!selectedMode) {
    return (
      <div className="theme-root" data-theme={theme}>
        <HomePage
          modes={localizedModes}
          classModules={classModules}
          onOpenGuide={handleOpenGuide}
          onOpenLearnPage={handleOpenLearnPage}
          onSelectMode={handleSelectMode}
          onSelectClass={handleSelectClass}
          challengeProgress={challengeProgress}
          copy={appCopy}
          language={language}
          onLanguageChange={setLanguage}
          theme={theme}
          onThemeChange={setTheme}
          interviewAnswerLibrary={interviewAnswerLibrary}
          onExportProgress={handleExportProgress}
          onImportProgress={handleImportProgress}
          progressTransferStatus={progressTransferStatus}
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

  if (isPoliceTrack) {
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
          <div className="app-container police-sjt-container">
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
              <ThemeToggle
                theme={theme}
                onChange={setTheme}
                copy={appCopy.theme}
              />
            </div>

            <ChallengeHeader
              challenge={activeChallenge}
              copy={appCopy}
              eyebrow="Police SJT practice"
              stepLabel={
                selectedClass
                  ? appCopy.header.blockStep(
                      activeChallengeIndex + 1,
                      challenges.length
                    )
                  : null
              }
            />

            {activeChallenge.editorType === "sjt-learning" ? (
              <PoliceLearningPanel
                challenge={activeChallenge}
                onComplete={handleMarkComplete}
              />
            ) : (
              <PoliceSjtPanel
                challenge={activeChallenge}
                progress={policeSjtProgress[activeChallenge.id] || {}}
                onProgressChange={handlePoliceSjtProgressChange}
              />
            )}
          </div>
        </div>
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
            {isInterviewTrack && (
              <div
                className="assessment-mode-switch"
                role="group"
                aria-label={appCopy.assessment.modeLabel}
              >
                <button
                  type="button"
                  className={
                    interviewMode === "practice"
                      ? "secondary-btn active-toggle-btn"
                      : "secondary-btn"
                  }
                  onClick={() => {
                    setInterviewMode("practice");
                    setSubmissionResult(null);
                  }}
                >
                  {appCopy.assessment.practiceMode}
                </button>
                <button
                  type="button"
                  className={
                    interviewMode === "timed"
                      ? "secondary-btn active-toggle-btn"
                      : "secondary-btn"
                  }
                  onClick={() => {
                    setInterviewMode("timed");
                    setSubmissionResult(null);
                  }}
                >
                  {appCopy.assessment.timedMode}
                </button>
              </div>
            )}
            {!timedInterviewMode && skippedPrimers[activeChallenge.id] && (
              <button className="secondary-btn" onClick={handleShowPrimer}>
                {appCopy.primer.reopen}
              </button>
            )}
            {!timedInterviewMode && (
              <button className="secondary-btn" onClick={handleMarkComplete}>
                <CheckCircle2 size={17} aria-hidden="true" />
                {appCopy.app.markComplete}
              </button>
            )}
            <ThemeToggle
              theme={theme}
              onChange={setTheme}
              copy={appCopy.theme}
            />
          </div>

          <ChallengeHeader
            challenge={activeChallenge}
            copy={appCopy}
            eyebrow={
              timedInterviewMode
                ? appCopy.header.interviewEyebrow
                : appCopy.header.eyebrow
            }
            stepLabel={
              selectedClass
                ? appCopy.header.blockStep(
                    activeChallengeIndex + 1,
                    challenges.length
                  )
                : null
            }
          />

          {timedInterviewMode && (
            <section className="assessment-banner">
              <div className="assessment-banner-copy">
                <p className="eyebrow">{appCopy.assessment.badge}</p>
                <h3>{appCopy.assessment.title}</h3>
                <p>{appCopy.assessment.intro}</p>
                <small>{appCopy.assessment.rules}</small>
              </div>

              <div className="assessment-banner-status">
                <span className="status-pill">
                  {remainingAssessmentMs === 0
                    ? appCopy.assessment.timeFinished
                    : appCopy.assessment.timeRunning}
                </span>
                <strong>
                  {formatTimeRemaining(remainingAssessmentMs, language)}
                </strong>
                <span>
                  {appCopy.assessment.timeLimit(timeLimitMinutes)}
                </span>
              </div>
            </section>
          )}

          {!timedInterviewMode && !skippedPrimers[activeChallenge.id] && (
            <ConceptPrimer
              key={`primer-${activeChallenge.id}`}
              challenge={activeChallenge}
              copy={appCopy}
              language={language}
              onSkip={handleSkipPrimer}
            />
          )}

          <div
            key={`${selectedMode.id}:${activeChallenge.id}:${language}:${timedInterviewMode ? "timed" : "practice"}`}
            className={
              briefCollapsed
                ? "content-grid content-grid-brief-collapsed"
                : "content-grid"
            }
          >
            <BriefPanel
              key={`brief-${activeChallenge.id}`}
              challenge={activeChallenge}
              copy={appCopy}
              language={language}
              variant={timedInterviewMode ? "timed" : "default"}
              collapsed={briefCollapsed}
              onToggleCollapse={() => setBriefCollapsed((current) => !current)}
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
              previewViewport={previewViewport}
              onPreviewViewportChange={setPreviewViewport}
              solutionEnabled={timedAssessmentFinished}
              solutionLockedReason={
                timedInterviewMode && !timedAssessmentFinished
                  ? appCopy.workspace.solutionLocked
                  : ""
              }
            />
          </div>

          {showExplanationPanel && (
            <InterviewReflectionPanel
              value={currentReflection}
              onChange={handleReflectionChange}
              copy={appCopy}
              variant={isRookieTrack ? "rookie" : "interview"}
              challenge={activeChallenge}
            />
          )}
        </div>
      </div>
    </div>
  );
}
