import {
  ArrowRight,
  Code2,
  Columns2,
  Eye,
  Redo2,
  RefreshCw,
  RotateCcw,
  Rows2,
  Send,
  Undo2,
} from "lucide-react";
import { useMemo, useState } from "react";

function createEditorHistory(html = "", css = "", js = "") {
  return {
    html: { items: [html], index: 0 },
    css: { items: [css], index: 0 },
    js: { items: [js], index: 0 },
  };
}

function getPreviewStorageSetup() {
  return `
    <script>
      (function () {
        function createMemoryStorage() {
          const store = new Map();

          return {
            getItem(key) {
              const normalizedKey = String(key);
              return store.has(normalizedKey) ? store.get(normalizedKey) : null;
            },
            setItem(key, value) {
              store.set(String(key), String(value));
            },
            removeItem(key) {
              store.delete(String(key));
            },
            clear() {
              store.clear();
            },
            key(index) {
              return Array.from(store.keys())[index] ?? null;
            },
            get length() {
              return store.size;
            },
          };
        }

        function resolveStorage(name) {
          try {
            const storage = window[name];
            const probeKey = "__preview_probe__";
            storage.setItem(probeKey, "1");
            storage.removeItem(probeKey);
            return storage;
          } catch (error) {
            return createMemoryStorage();
          }
        }

        window.__previewLocalStorage = resolveStorage("localStorage");
        window.__previewSessionStorage = resolveStorage("sessionStorage");
      })();
    </script>
  `;
}

export default function WorkspacePanel({
  editorType = "web",
  html,
  css,
  js,
  setHtml,
  setCss,
  setJs,
  onReset,
  onSubmit,
  onNextChallenge,
  nextChallenge,
  starter,
  solution,
  submissionResult,
  copy,
  language = "en",
}) {
  const [activeTab, setActiveTab] = useState(() =>
    editorType === "react" || editorType === "react-ts" ? "js" : "html"
  );
  const [showSolution, setShowSolution] = useState(false);
  const [layoutMode, setLayoutMode] = useState("split");
  const [previewKey, setPreviewKey] = useState(0);
  const [editorHistory, setEditorHistory] = useState(() =>
    createEditorHistory(html || "", css || "", js || "")
  );

  const isReactChallenge =
    editorType === "react" || editorType === "react-ts";
  const isTypeScriptChallenge = editorType === "react-ts";

  const visibleHtml = showSolution ? solution?.html || "" : html || "";
  const visibleCss = showSolution ? solution?.css || "" : css || "";
  const visibleJs = showSolution ? solution?.js || "" : js || "";

  const srcDoc = useMemo(() => {
    const previewStorageSetup = getPreviewStorageSetup();

    if (isReactChallenge) {
      return `
        <!DOCTYPE html>
        <html lang="${language}">
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
            ${previewStorageSetup}

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
            </script>

            <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script crossorigin src="https://unpkg.com/@remix-run/router@1.23.0/dist/router.umd.min.js"></script>
            <script crossorigin src="https://unpkg.com/react-router@6.30.1/dist/umd/react-router.development.js"></script>
            <script crossorigin src="https://unpkg.com/react-router-dom@6.30.1/dist/umd/react-router-dom.development.js"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

            <script type="text/babel" data-presets="${
              isTypeScriptChallenge ? "react,typescript" : "react"
            }">
              try {
                (function (localStorage, sessionStorage) {
                  ${visibleJs}

                  const root = ReactDOM.createRoot(document.getElementById("root"));
                  root.render(<Challenge />);
                })(window.__previewLocalStorage, window.__previewSessionStorage);
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
            </script>
          </body>
        </html>
      `;
    }

    const userRuntimeCode = `
      (function (localStorage, sessionStorage) {
        try {
          ${visibleJs}
        } catch (error) {
          const errorEl = document.createElement("pre");
          errorEl.className = "preview-error";
          errorEl.textContent = error.message;
          document.body.appendChild(errorEl);
        }
      })(window.__previewLocalStorage, window.__previewSessionStorage);
    `;
    const serializedUserRuntime = JSON.stringify(userRuntimeCode).replace(
      /<\/script/gi,
      "<\\/script"
    );
    const webRuntime = visibleJs.trim()
      ? `
          <script>
            window.addEventListener("DOMContentLoaded", function () {
              const userScript = document.createElement("script");
              userScript.textContent = ${serializedUserRuntime};
              document.body.appendChild(userScript);
            });
          </script>
        `
      : "";

    return `
      <!DOCTYPE html>
      <html lang="${language}">
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
          ${previewStorageSetup}
          ${webRuntime}
        </head>
        <body>
          ${visibleHtml}
        </body>
      </html>
    `;
  }, [
    visibleHtml,
    visibleCss,
    visibleJs,
    isReactChallenge,
    isTypeScriptChallenge,
    language,
  ]);

  const toggleLayoutMode = () => {
    setLayoutMode((prev) => (prev === "split" ? "stacked" : "split"));
  };

  const writeField = (field, value) => {
    if (field === "html") setHtml(value);
    if (field === "css") setCss(value);
    if (field === "js") setJs(value);
  };

  const commitEditorChange = (field, value) => {
    writeField(field, value);

    setEditorHistory((currentHistory) => {
      const fieldHistory = currentHistory[field] || {
        items: [""],
        index: 0,
      };
      const currentValue = fieldHistory.items[fieldHistory.index];

      if (currentValue === value) return currentHistory;

      const nextItems = [
        ...fieldHistory.items.slice(0, fieldHistory.index + 1),
        value,
      ].slice(-80);

      return {
        ...currentHistory,
        [field]: {
          items: nextItems,
          index: nextItems.length - 1,
        },
      };
    });
  };

  const moveHistory = (direction) => {
    if (showSolution) return;

    const fieldHistory = editorHistory[activeTab];
    if (!fieldHistory) return;

    const nextIndex = Math.min(
      Math.max(fieldHistory.index + direction, 0),
      fieldHistory.items.length - 1
    );

    if (nextIndex === fieldHistory.index) return;

    const nextValue = fieldHistory.items[nextIndex];

    setEditorHistory((currentHistory) => ({
      ...currentHistory,
      [activeTab]: {
        ...fieldHistory,
        index: nextIndex,
      },
    }));
    writeField(activeTab, nextValue);
  };

  const handleEditorKeyDown = (event) => {
    const key = event.key.toLowerCase();
    const hasModifier = event.metaKey || event.ctrlKey;

    if (!hasModifier) return;

    if (key === "z") {
      event.preventDefault();
      moveHistory(event.shiftKey ? 1 : -1);
    }

    if (key === "y") {
      event.preventDefault();
      moveHistory(1);
    }
  };

  const handleReset = () => {
    onReset();
    setEditorHistory(
      createEditorHistory(
        starter?.html || "",
        starter?.css || "",
        starter?.js || ""
      )
    );
    setPreviewKey((current) => current + 1);
  };

  const activeHistory = editorHistory[activeTab] || { items: [""], index: 0 };
  const canUndo = !showSolution && activeHistory.index > 0;
  const canRedo =
    !showSolution && activeHistory.index < activeHistory.items.length - 1;

  const renderEditor = () => (
    <div className="editor-card">
      <div className="editor-label">
        {showSolution ? copy.workspace.solutionView : copy.workspace.yourCode}{" "}
        - {activeTab === "html" && copy.workspace.htmlEditor}
        {activeTab === "css" && copy.workspace.cssEditor}
        {activeTab === "js" &&
          (isReactChallenge
            ? copy.workspace.reactEditor
            : copy.workspace.jsEditor)}
      </div>

      {activeTab === "html" && !isReactChallenge && (
        <textarea
          className="code-editor"
          value={visibleHtml}
          onChange={(e) => {
            if (!showSolution) commitEditorChange("html", e.target.value);
          }}
          onKeyDown={handleEditorKeyDown}
          readOnly={showSolution}
          spellCheck={false}
          placeholder={showSolution ? "" : copy.workspace.htmlPlaceholder}
        />
      )}

      {activeTab === "css" && !isReactChallenge && (
        <textarea
          className="code-editor"
          value={visibleCss}
          onChange={(e) => {
            if (!showSolution) commitEditorChange("css", e.target.value);
          }}
          onKeyDown={handleEditorKeyDown}
          readOnly={showSolution}
          spellCheck={false}
          placeholder={showSolution ? "" : copy.workspace.cssPlaceholder}
        />
      )}

      {activeTab === "js" && (
        <textarea
          className="code-editor"
          value={visibleJs}
          onChange={(e) => {
            if (!showSolution) commitEditorChange("js", e.target.value);
          }}
          onKeyDown={handleEditorKeyDown}
          readOnly={showSolution}
          spellCheck={false}
          placeholder={
            showSolution
              ? ""
              : isReactChallenge
              ? copy.workspace.reactPlaceholder
              : copy.workspace.jsPlaceholder
          }
        />
      )}
    </div>
  );

  const renderPreview = () => (
    <div className="preview-card">
      <div className="editor-label preview-label">
        <span>
          {copy.workspace.livePreview} -{" "}
          {showSolution ? copy.workspace.solution : copy.workspace.myCode}
        </span>
        <button
          type="button"
          className="preview-refresh-btn"
          onClick={() => setPreviewKey((current) => current + 1)}
          title={copy.workspace.refreshPreview}
          aria-label={copy.workspace.refreshPreview}
        >
          <RefreshCw size={15} aria-hidden="true" />
        </button>
      </div>

      <iframe
        key={previewKey}
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
            {isTypeScriptChallenge ? "TSX" : isReactChallenge ? "React" : "JS"}
          </button>
        </div>

        <div className="toolbar-actions">
          <button
            className={`icon-toggle-btn ${layoutMode}`}
            onClick={toggleLayoutMode}
            title={
              layoutMode === "split"
                ? copy.workspace.switchStacked
                : copy.workspace.switchSplit
            }
            aria-label={
              layoutMode === "split"
                ? copy.workspace.switchStacked
                : copy.workspace.switchSplit
            }
          >
            {layoutMode === "split" ? (
              <Rows2 size={18} />
            ) : (
              <Columns2 size={18} />
            )}
          </button>

          <button
            type="button"
            className="icon-toggle-btn"
            onClick={() => moveHistory(-1)}
            disabled={!canUndo}
            title={copy.workspace.undo}
            aria-label={copy.workspace.undo}
          >
            <Undo2 size={18} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="icon-toggle-btn"
            onClick={() => moveHistory(1)}
            disabled={!canRedo}
            title={copy.workspace.redo}
            aria-label={copy.workspace.redo}
          >
            <Redo2 size={18} aria-hidden="true" />
          </button>

          <button
            className="secondary-btn"
            onClick={() => setShowSolution((prev) => !prev)}
          >
            {showSolution ? (
              <Code2 size={17} aria-hidden="true" />
            ) : (
              <Eye size={17} aria-hidden="true" />
            )}
            {showSolution
              ? copy.workspace.backToCode
              : copy.workspace.showSolution}
          </button>

          <button className="secondary-btn" onClick={handleReset}>
            <RotateCcw size={17} aria-hidden="true" />
            {copy.workspace.reset}
          </button>

          <button className="primary-btn" onClick={onSubmit}>
            <Send size={17} aria-hidden="true" />
            {copy.workspace.submit}
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
          <h4>{copy.workspace.feedback}</h4>
          <ul className="clean-list">
            {submissionResult.feedback.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {submissionResult.status === "success" && (
            <div className="submission-next">
              <p>
                {nextChallenge
                  ? copy.workspace.nextPrompt
                  : copy.workspace.blockComplete}
              </p>

              {nextChallenge && (
                <button
                  type="button"
                  className="primary-btn"
                  onClick={onNextChallenge}
                >
                  <ArrowRight size={17} aria-hidden="true" />
                  {copy.workspace.nextChallenge}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
