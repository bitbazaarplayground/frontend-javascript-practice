import { Columns2, Rows2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function WorkspacePanel({
  challengeId,
  editorType = "web",
  html,
  css,
  js,
  setHtml,
  setCss,
  setJs,
  onReset,
  onSubmit,
  solution,
  submissionResult,
}) {
  const [activeTab, setActiveTab] = useState("html");
  const [showSolution, setShowSolution] = useState(false);
  const [layoutMode, setLayoutMode] = useState("split");

  const isReactChallenge = editorType === "react";

  const visibleHtml = showSolution ? solution?.html || "" : html || "";
  const visibleCss = showSolution ? solution?.css || "" : css || "";
  const visibleJs = showSolution ? solution?.js || "" : js || "";

  const srcDoc = useMemo(() => {
    if (isReactChallenge) {
      return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <style>
              html, body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                background: white;
                color: #111827;
              }

              * {
                box-sizing: border-box;
              }

              body {
                padding: 16px;
              }

              #root {
                min-height: 100%;
              }

              .preview-error {
                white-space: pre-wrap;
                color: #b91c1c;
                background: #fef2f2;
                border: 1px solid #fecaca;
                border-radius: 8px;
                padding: 12px;
                font-family: monospace;
                line-height: 1.5;
              }

              ${visibleCss}
            </style>
          </head>
          <body>
            <div id="root"></div>

            <script>
              function showPreviewError(message) {
                const rootEl = document.getElementById("root");
                if (!rootEl) return;

                rootEl.innerHTML = "";
                const errorEl = document.createElement("pre");
                errorEl.className = "preview-error";
                errorEl.textContent = message;
                rootEl.appendChild(errorEl);
              }

              window.addEventListener("error", function (event) {
                showPreviewError(event.message);
              });

              window.addEventListener("unhandledrejection", function (event) {
                const message =
                  event.reason && event.reason.message
                    ? event.reason.message
                    : String(event.reason);
                showPreviewError(message);
              });
            <\/script>

            <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
            <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>

            <script type="text/babel" data-presets="react">
              try {
                ${visibleJs}

                const root = ReactDOM.createRoot(document.getElementById("root"));
                root.render(<Challenge />);
              } catch (error) {
                const rootEl = document.getElementById("root");
                if (rootEl) {
                  rootEl.innerHTML = "";
                  const errorEl = document.createElement("pre");
                  errorEl.className = "preview-error";
                  errorEl.textContent = error.message;
                  rootEl.appendChild(errorEl);
                }
              }
            <\/script>
          </body>
        </html>
      `;
    }

    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <style>
            html, body {
              margin: 0;
              font-family: Arial, sans-serif;
            }

            * {
              box-sizing: border-box;
            }

            ${visibleCss}
          </style>
        </head>
        <body>
          ${visibleHtml}
          <script>
            try {
              ${visibleJs}
            } catch (error) {
              const errorEl = document.createElement("pre");
              errorEl.style.color = "red";
              errorEl.style.padding = "12px";
              errorEl.textContent = error.message;
              document.body.appendChild(errorEl);
            }
          <\/script>
        </body>
      </html>
    `;
  }, [visibleHtml, visibleCss, visibleJs, isReactChallenge]);

  const toggleLayoutMode = () => {
    setLayoutMode((prev) => (prev === "split" ? "stacked" : "split"));
  };

  useEffect(() => {
    setActiveTab(editorType === "react" ? "js" : "html");
    setShowSolution(false);
  }, [challengeId, editorType]);

  const renderEditor = () => (
    <div className="editor-card">
      <div className="editor-label">
        {showSolution ? "Solution View" : "Your Code"} •{" "}
        {activeTab === "html" && "HTML Editor"}
        {activeTab === "css" && "CSS Editor"}
        {activeTab === "js" &&
          (isReactChallenge ? "React Editor" : "JavaScript Editor")}
      </div>

      {activeTab === "html" && !isReactChallenge && (
        <textarea
          className="code-editor"
          value={visibleHtml}
          onChange={(e) => {
            if (!showSolution) setHtml(e.target.value);
          }}
          readOnly={showSolution}
          spellCheck={false}
          placeholder={showSolution ? "" : "Write your HTML here..."}
        />
      )}

      {activeTab === "css" && !isReactChallenge && (
        <textarea
          className="code-editor"
          value={visibleCss}
          onChange={(e) => {
            if (!showSolution) setCss(e.target.value);
          }}
          readOnly={showSolution}
          spellCheck={false}
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
          spellCheck={false}
          placeholder={
            showSolution
              ? ""
              : isReactChallenge
              ? "Write your React code here..."
              : "Write your JavaScript here..."
          }
        />
      )}
    </div>
  );

  const renderPreview = () => (
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
  );

  return (
    <section className="panel workspace-panel">
      <div className="workspace-toolbar">
        <div className="tab-group">
          {!isReactChallenge && (
            <>
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
            </>
          )}

          <button
            className={activeTab === "js" ? "tab active" : "tab"}
            onClick={() => setActiveTab("js")}
          >
            {isReactChallenge ? "React" : "JS"}
          </button>
        </div>

        <div className="toolbar-actions">
          <button
            className={`icon-toggle-btn ${layoutMode}`}
            onClick={toggleLayoutMode}
            title={
              layoutMode === "split"
                ? "Switch to preview on top"
                : "Switch to side by side"
            }
            aria-label={
              layoutMode === "split"
                ? "Switch to preview on top"
                : "Switch to side by side"
            }
          >
            {layoutMode === "split" ? (
              <Rows2 size={18} />
            ) : (
              <Columns2 size={18} />
            )}
          </button>

          <button
            className="secondary-btn"
            onClick={() => setShowSolution((prev) => !prev)}
          >
            {showSolution ? "Back to My Code" : "Show Solution"}
          </button>

          <button className="secondary-btn" onClick={onReset}>
            Reset
          </button>

          <button className="primary-btn" onClick={onSubmit}>
            Submit Solution
          </button>
        </div>
      </div>

      <div
        className={
          layoutMode === "stacked"
            ? "workspace-grid workspace-grid-stacked"
            : "workspace-grid"
        }
      >
        {layoutMode === "stacked" ? (
          <>
            {renderPreview()}
            {renderEditor()}
          </>
        ) : (
          <>
            {renderEditor()}
            {renderPreview()}
          </>
        )}
      </div>

      {submissionResult && (
        <div className={`submission-feedback ${submissionResult.status}`}>
          <h4>Submission Feedback</h4>
          <ul className="clean-list">
            {submissionResult.feedback.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
