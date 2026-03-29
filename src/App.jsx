import { useEffect, useMemo, useState } from "react";
import WorkspacePanel from "./components/WorkspacePanel";
import BriefPanel from "./components/layout/BriefPanel";
import ChallengeHeader from "./components/layout/ChallengeHeader";
import SidebarDrawer from "./components/layout/SidebarDrawer";
import { challengeModes } from "./data/challenges/index.js";
import useLocalStorage from "./hooks/useLocalStorage";
import HomePage from "./pages/HomePage.jsx";
import { validateChallenge } from "./utils/validators";

export default function App() {
  const [selectedModeId, setSelectedModeId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [savedDrafts, setSavedDrafts] = useLocalStorage("challenge-drafts", {});
  const [challengeProgress, setChallengeProgress] = useLocalStorage(
    "challenge-progress",
    {}
  );

  const selectedMode = useMemo(() => {
    return challengeModes.find((mode) => mode.id === selectedModeId) || null;
  }, [selectedModeId]);

  const challenges = selectedMode?.challenges || [];
  const firstChallenge = challenges[0] || null;
  const [submissionResult, setSubmissionResult] = useState(null);

  const [activeId, setActiveId] = useState("");

  const activeChallenge = useMemo(() => {
    if (!selectedMode || challenges.length === 0) return null;
    return (
      challenges.find((challenge) => challenge.id === activeId) ||
      firstChallenge
    );
  }, [selectedMode, challenges, activeId, firstChallenge]);

  useEffect(() => {
    if (!selectedMode || !firstChallenge) return;
    setActiveId(firstChallenge.id);
  }, [selectedMode, firstChallenge]);

  useEffect(() => {
    setSubmissionResult(null);
  }, [activeId]);

  const currentDraft = activeChallenge
    ? savedDrafts[activeChallenge.id] || activeChallenge.starter
    : { html: "", css: "", js: "" };

  const handleSelectMode = (modeId) => {
    setSelectedModeId(modeId);
    setDrawerOpen(false);
  };

  const handleSelectChallenge = (challengeId) => {
    setActiveId(challengeId);
  };

  const handleBackHome = () => {
    setSelectedModeId(null);
    setDrawerOpen(false);
    setActiveId("");
  };

  const handleSubmitSolution = () => {
    if (!activeChallenge) return;

    const result = validateChallenge(activeChallenge.id, currentDraft);
    setSubmissionResult(result);

    if (result.status === "success") {
      setChallengeProgress({
        ...challengeProgress,
        [activeChallenge.id]: "completed",
      });
    }
  };

  const updateDraft = (field, value) => {
    if (!activeChallenge) return;

    const updatedDraft = {
      ...currentDraft,
      [field]: value,
    };

    setSavedDrafts({
      ...savedDrafts,
      [activeChallenge.id]: updatedDraft,
    });

    const hasStarted =
      (updatedDraft.html || "").trim() ||
      (updatedDraft.css || "").trim() ||
      (updatedDraft.js || "").trim();

    setChallengeProgress({
      ...challengeProgress,
      [activeChallenge.id]: hasStarted ? "in-progress" : "not-started",
    });
  };

  const handleReset = () => {
    if (!activeChallenge) return;

    setSavedDrafts({
      ...savedDrafts,
      [activeChallenge.id]: {
        ...activeChallenge.starter,
      },
    });

    setChallengeProgress({
      ...challengeProgress,
      [activeChallenge.id]: "not-started",
    });
  };

  const handleMarkComplete = () => {
    if (!activeChallenge) return;

    setChallengeProgress({
      ...challengeProgress,
      [activeChallenge.id]: "completed",
    });
  };

  if (!selectedMode) {
    return (
      <HomePage
        modes={challengeModes}
        onSelectMode={handleSelectMode}
        challengeProgress={challengeProgress}
      />
    );
  }

  if (!activeChallenge) {
    return <div className="app-main">No challenge found.</div>;
  }

  return (
    <div className="app-shell single-layout">
      <SidebarDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onBackHome={handleBackHome}
        modeTitle={selectedMode.title}
        challenges={challenges}
        activeId={activeId}
        onSelect={handleSelectChallenge}
        challengeProgress={challengeProgress}
      />

      <div className="app-main">
        <div className="app-container">
          <div className="top-actions">
            <button className="primary-btn" onClick={() => setDrawerOpen(true)}>
              ☰ Challenges
            </button>
            <span className="mode-pill">{selectedMode.title} Mode</span>
            <button className="secondary-btn" onClick={handleMarkComplete}>
              Mark Complete
            </button>
          </div>

          <ChallengeHeader challenge={activeChallenge} />

          <div className="content-grid">
            <BriefPanel challenge={activeChallenge} />
            <WorkspacePanel
              challengeId={activeChallenge.id}
              editorType={activeChallenge.editorType}
              html={currentDraft.html}
              css={currentDraft.css}
              js={currentDraft.js}
              setHtml={(value) => updateDraft("html", value)}
              setCss={(value) => updateDraft("css", value)}
              setJs={(value) => updateDraft("js", value)}
              onReset={handleReset}
              onSubmit={handleSubmitSolution}
              solution={activeChallenge.solution}
              submissionResult={submissionResult}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
