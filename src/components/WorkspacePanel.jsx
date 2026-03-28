import { useMemo, useState } from "react";

export default function WorkspacePanel({
  html,
  css,
  js,
  setHtml,
  setCss,
  setJs,
  onReset,
  solution,
}) {
  const [activeTab, setActiveTab] = useState("html");
  const [showSolution, setShowSolution] = useState(false);

  const visibleHtml = showSolution ? solution.html : html;
  const visibleCss = showSolution ? solution.css : css;
  const visibleJs = showSolution ? solution.js : js;

  const srcDoc = useMemo(() => {
    return `
      <html>
        <head>
          <style>${visibleCss}</style>
        </head>
        <body>
          ${visibleHtml}
          <script>
            try {
              ${visibleJs}
            } catch (error) {
              document.body.innerHTML += '<pre style="color:red;padding:12px;">' + error.message + '</pre>';
            }
          </script>
        </body>
      </html>
    `;
  }, [visibleHtml, visibleCss, visibleJs]);

  return (
    <section className="panel workspace-panel">
      <div className="workspace-toolbar">
        <div className="tab-group">
          <button
            className={activeTab === "html" ? "tab active" : "tab"}
            onClick={() => setActiveTab("html")}
          >
            HTML
          </button>
          <button
            className={activeTab === "css" ? "tab active" : "tab"}
            onClick={() => setActiveTab("css")}
          >
            CSS
          </button>
          <button
            className={activeTab === "js" ? "tab active" : "tab"}
            onClick={() => setActiveTab("js")}
          >
            JS
          </button>
        </div>

        <div className="toolbar-actions">
          <button
            className="secondary-btn"
            onClick={() => setShowSolution((prev) => !prev)}
          >
            {showSolution ? "Back to My Code" : "Show Solution"}
          </button>

          <button className="secondary-btn" onClick={onReset}>
            Reset
          </button>
        </div>
      </div>

      <div className="workspace-grid">
        <div className="editor-card">
          <div className="editor-label">
            {showSolution ? "Solution View" : "Your Code"} •{" "}
            {activeTab === "html" && "HTML Editor"}
            {activeTab === "css" && "CSS Editor"}
            {activeTab === "js" && "JavaScript Editor"}
          </div>

          {activeTab === "html" && (
            <textarea
              className="code-editor"
              value={visibleHtml}
              onChange={(e) => {
                if (!showSolution) setHtml(e.target.value);
              }}
              readOnly={showSolution}
              spellCheck="false"
              placeholder={showSolution ? "" : "Write your HTML here..."}
            />
          )}

          {activeTab === "css" && (
            <textarea
              className="code-editor"
              value={visibleCss}
              onChange={(e) => {
                if (!showSolution) setCss(e.target.value);
              }}
              readOnly={showSolution}
              spellCheck="false"
              placeholder={showSolution ? "" : "Write your CSS here..."}
            />
          )}

          {activeTab === "js" && (
            <textarea
              className="code-editor"
              value={visibleJs}
              onChange={(e) => {
                if (!showSolution) setJs(e.target.value);
              }}
              readOnly={showSolution}
              spellCheck="false"
              placeholder={showSolution ? "" : "Write your JavaScript here..."}
            />
          )}
        </div>

        <div className="preview-card">
          <div className="editor-label">
            Live Preview {showSolution ? "• Solution" : "• My Code"}
          </div>

          <iframe
            title="preview"
            srcDoc={srcDoc}
            className="preview-frame"
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </section>
  );
}
