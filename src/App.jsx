import { useEffect, useMemo, useState } from "react";
import { challengeModes } from "./data/challenges/index.js";
import HomePage from "./pages/HomePage";
import SidebarDrawer from "./components/layout/SidebarDrawer";
import ChallengeHeader from "./components/layout/ChallengeHeader";
import BriefPanel from "./components/layout/BriefPanel";
import WorkspacePanel from "./components/WorkspacePanel";

export default function App() {
  const [selectedModeId, setSelectedModeId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const selectedMode = useMemo(() => {
    return challengeModes.find((mode) => mode.id === selectedModeId) || null;
  }, [selectedModeId]);

  const challenges = selectedMode?.challenges || [];
  const firstChallenge = challenges[0] || null;

  const [activeId, setActiveId] = useState("");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

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
    if (!activeChallenge?.starter) return;
    setHtml(activeChallenge.starter.html || "");
    setCss(activeChallenge.starter.css || "");
    setJs(activeChallenge.starter.js || "");
  }, [activeChallenge]);

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
    setHtml("");
    setCss("");
    setJs("");
  };

  const handleReset = () => {
    if (!activeChallenge?.starter) return;
    setHtml(activeChallenge.starter.html || "");
    setCss(activeChallenge.starter.css || "");
    setJs(activeChallenge.starter.js || "");
  };

  if (!selectedMode) {
    return <HomePage modes={challengeModes} onSelectMode={handleSelectMode} />;
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
      />

      <div className="app-main">
        <div className="top-actions">
          <button className="primary-btn" onClick={() => setDrawerOpen(true)}>
            ☰ Challenges
          </button>
          <span className="mode-pill">{selectedMode.title} Mode</span>
        </div>

        <ChallengeHeader challenge={activeChallenge} />

        <div className="content-grid">
          <BriefPanel challenge={activeChallenge} />
          <WorkspacePanel
            html={html}
            css={css}
            js={js}
            setHtml={setHtml}
            setCss={setCss}
            setJs={setJs}
            onReset={handleReset}
            solution={activeChallenge.solution}
          />
        </div>
      </div>
    </div>
  );
}
