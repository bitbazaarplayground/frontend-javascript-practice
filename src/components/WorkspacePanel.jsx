import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Code2,
  Columns2,
  Eye,
  Monitor,
  Redo2,
  RefreshCw,
  RotateCcw,
  Rows2,
  Send,
  Smartphone,
  Terminal,
  Trash2,
  Undo2,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const HISTORY_LIMIT = 240;
const HISTORY_GROUP_MS = 500;
const DESKTOP_PREVIEW_WIDTH = 820;

function createEditorHistory(html = "", css = "", js = "") {
  return {
    html: { items: [html], index: 0 },
    css: { items: [css], index: 0 },
    js: { items: [js], index: 0 },
  };
}

function createHistoryMeta() {
  return {
    html: { lastRecordedAt: 0 },
    css: { lastRecordedAt: 0 },
    js: { lastRecordedAt: 0 },
  };
}

function shouldForceHistoryBoundary(previousValue, nextValue) {
  const lengthDelta = Math.abs(nextValue.length - previousValue.length);
  const previousHasNewline = previousValue.includes("\n");
  const nextHasNewline = nextValue.includes("\n");

  return (
    lengthDelta > 1 ||
    previousHasNewline !== nextHasNewline ||
    nextValue.split("\n").length !== previousValue.split("\n").length
  );
}

function isUndoShortcut(event) {
  const key = event.key.toLowerCase();
  const hasModifier = event.metaKey || event.ctrlKey;

  return hasModifier && key === "z" && !event.shiftKey;
}

function isRedoShortcut(event) {
  const key = event.key.toLowerCase();
  const hasModifier = event.metaKey || event.ctrlKey;

  return hasModifier && (key === "y" || (key === "z" && event.shiftKey));
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

function getPreviewScrollSetup() {
  return `
    <script>
      (function () {
        const PREVIEW_SCROLL_KEY = "__practicePreviewScroll__";

        function readWindowName() {
          try {
            return window.name ? JSON.parse(window.name) : {};
          } catch (error) {
            return {};
          }
        }

        function writeWindowName(nextValue) {
          try {
            window.name = JSON.stringify(nextValue);
          } catch (error) {
            window.name = "";
          }
        }

        function saveScrollPosition() {
          const payload = readWindowName();
          payload[PREVIEW_SCROLL_KEY] = {
            x: window.scrollX || 0,
            y: window.scrollY || 0,
          };
          writeWindowName(payload);
        }

        function getSavedScrollPosition() {
          const payload = readWindowName();
          return payload[PREVIEW_SCROLL_KEY] || { x: 0, y: 0 };
        }

        const savedScroll = getSavedScrollPosition();

        window.addEventListener("scroll", saveScrollPosition, {
          passive: true,
        });

        window.addEventListener("beforeunload", saveScrollPosition);

        window.addEventListener("load", function () {
          function restoreScrollPosition() {
            window.scrollTo(savedScroll.x || 0, savedScroll.y || 0);
          }

          restoreScrollPosition();
          requestAnimationFrame(restoreScrollPosition);
          setTimeout(restoreScrollPosition, 120);
        });

        document.addEventListener("click", function (event) {
          const trigger = event.target.closest('a[href^="#"]');
          if (!trigger) return;

          const hash = trigger.getAttribute("href");
          if (!hash || hash === "#") return;

          const target = document.querySelector(hash);
          if (!target) return;

          event.preventDefault();

          const possibleHeader = document.querySelector(
            ".site-header, .navbar, [data-sticky-header]"
          );
          const hasStickyHeader =
            possibleHeader &&
            ["sticky", "fixed"].includes(
              window.getComputedStyle(possibleHeader).position
            );
          const headerOffset = hasStickyHeader
            ? possibleHeader.getBoundingClientRect().height + 12
            : 0;
          const targetTop =
            target.getBoundingClientRect().top + window.scrollY - headerOffset;

          window.scrollTo({
            top: Math.max(targetTop, 0),
            behavior: "smooth",
          });

          try {
            window.history.replaceState(null, "", hash);
          } catch (error) {
            window.location.hash = hash;
          }
        });
      })();
    </script>
  `;
}

function getPreviewConsoleSetup() {
  return `
    <script>
      (function () {
        const MESSAGE_SOURCE = "frontend-practice-preview-console";
        const originalConsole = {
          log: console.log.bind(console),
          info: console.info.bind(console),
          warn: console.warn.bind(console),
          error: console.error.bind(console),
        };

        function serialize(value) {
          if (value instanceof Error) {
            return value.name + ": " + value.message;
          }

          if (typeof value === "string") {
            return value;
          }

          try {
            return JSON.stringify(value, null, 2);
          } catch (error) {
            return String(value);
          }
        }

        function send(level, values, detail) {
          const message = values.map(serialize).join(" ");

          window.parent.postMessage(
            {
              source: MESSAGE_SOURCE,
              level,
              message: message || level,
              detail: detail ? serialize(detail) : "",
              timestamp: Date.now(),
            },
            "*"
          );
        }

        window.__previewConsole = {
          log: (...values) => send("log", values),
          info: (...values) => send("info", values),
          warn: (...values) => send("warn", values),
          error: (...values) => send("error", values),
        };

        ["log", "info", "warn", "error"].forEach(function (level) {
          console[level] = function (...values) {
            send(level, values);
            originalConsole[level](...values);
          };
        });

        window.addEventListener("error", function (event) {
          const location =
            event.lineno || event.colno
              ? "Line " + event.lineno + ", column " + event.colno
              : "";
          const stack = event.error && event.error.stack ? event.error.stack : "";

          send("error", [event.message || "Script error"], stack || location);
        });

        window.addEventListener("unhandledrejection", function (event) {
          const reason = event.reason;
          const message =
            reason && reason.message ? reason.message : String(reason);
          const stack = reason && reason.stack ? reason.stack : "";

          send("error", ["Unhandled promise rejection: " + message], stack);
        });
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
  previewViewport = "desktop",
  onPreviewViewportChange,
  solutionEnabled = true,
  solutionLockedReason = "",
}) {
  const [activeTab, setActiveTab] = useState(() =>
    editorType === "react" ||
    editorType === "react-ts" ||
    editorType === "react-test"
      ? "js"
      : "html"
  );
  const [showSolution, setShowSolution] = useState(false);
  const [layoutMode, setLayoutMode] = useState("split");
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [previewConsoleState, setPreviewConsoleState] = useState({
    signature: "",
    messages: [],
  });
  const [previewKey, setPreviewKey] = useState(0);
  const [previewStageWidth, setPreviewStageWidth] = useState(
    DESKTOP_PREVIEW_WIDTH
  );
  const [editorHistory, setEditorHistory] = useState(() =>
    createEditorHistory(html || "", css || "", js || "")
  );
  const historyMetaRef = useRef(createHistoryMeta());
  const previewStageRef = useRef(null);
  const previewFrameRef = useRef(null);

  const isReactTestChallenge = editorType === "react-test";
  const isReactChallenge =
    editorType === "react" ||
    editorType === "react-ts" ||
    isReactTestChallenge;
  const isTypeScriptChallenge = editorType === "react-ts";
  const isShowingSolution = solutionEnabled && showSolution;
  const desktopPreviewFitScale = previewStageWidth / DESKTOP_PREVIEW_WIDTH;
  const desktopPreviewScale =
    previewViewport === "desktop"
      ? Math.min(1, desktopPreviewFitScale)
      : 1;

  const visibleHtml = isShowingSolution ? solution?.html || "" : html || "";
  const visibleCss = isShowingSolution ? solution?.css || "" : css || "";
  const visibleJs = isShowingSolution ? solution?.js || "" : js || "";

  useEffect(() => {
    const stage = previewStageRef.current;
    if (!stage || typeof ResizeObserver === "undefined") return undefined;

    const observer = new ResizeObserver(([entry]) => {
      setPreviewStageWidth(entry.contentRect.width || DESKTOP_PREVIEW_WIDTH);
    });

    observer.observe(stage);

    return () => observer.disconnect();
  }, []);

  const srcDoc = useMemo(() => {
    const previewStorageSetup = getPreviewStorageSetup();
    const previewScrollSetup = getPreviewScrollSetup();
    const previewConsoleSetup = getPreviewConsoleSetup();

    if (isReactTestChallenge) {
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

              .test-shell {
                display: grid;
                grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
                gap: 16px;
                min-height: calc(100vh - 32px);
              }

              .test-column {
                min-width: 0;
                padding: 14px;
                border: 1px solid #dbe3ef;
                border-radius: 16px;
                background: #f8fafc;
              }

              .test-column h2 {
                margin: 0 0 12px;
                font-size: 16px;
              }

              #root {
                min-height: 120px;
                border-radius: 12px;
                background: white;
                padding: 12px;
                border: 1px solid #e2e8f0;
              }

              .test-results {
                display: grid;
                gap: 10px;
              }

              .test-summary {
                padding: 12px;
                border-radius: 12px;
                background: white;
                border: 1px solid #dbe3ef;
                font-weight: 700;
              }

              .test-result {
                padding: 12px;
                border-radius: 12px;
                border: 1px solid #dbe3ef;
                background: white;
              }

              .test-result.pass {
                border-color: #86efac;
                background: #f0fdf4;
              }

              .test-result.fail {
                border-color: #fecaca;
                background: #fef2f2;
              }

              .test-result strong,
              .test-result span {
                display: block;
              }

              .test-result span {
                margin-top: 6px;
                color: #475569;
                white-space: pre-wrap;
                line-height: 1.5;
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

              @media (max-width: 840px) {
                .test-shell {
                  grid-template-columns: 1fr;
                }
              }

              ${visibleCss}
            </style>
          </head>
          <body>
            <div class="test-shell">
              <section class="test-column">
                <h2>${language === "es" ? "Vista del componente" : "Component preview"}</h2>
                <div id="root"></div>
              </section>
              <section class="test-column">
                <h2>${language === "es" ? "Resultados de tests" : "Test results"}</h2>
                <div id="testResults" class="test-results"></div>
              </section>
            </div>

            ${previewStorageSetup}
            ${previewScrollSetup}
            ${previewConsoleSetup}

            <script>
              function showPreviewError(message) {
                const resultsEl = document.getElementById("testResults");
                if (!resultsEl) return;

                resultsEl.innerHTML = "";
                const errorEl = document.createElement("pre");
                errorEl.className = "preview-error";
                errorEl.textContent = message;
                resultsEl.appendChild(errorEl);
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
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

            <script type="text/babel" data-presets="react">
              try {
                (async function (localStorage, sessionStorage) {
                  const previewRoot = document.getElementById("root");
                  const testResults = document.getElementById("testResults");
                  const testDefinitions = [];
                  const reactRoot = ReactDOM.createRoot(previewRoot);

                  function normalizeText(value) {
                    return String(value || "")
                      .replace(/\\s+/g, " ")
                      .trim();
                  }

                  function matchesMatcher(value, matcher) {
                    if (matcher == null) return true;
                    const normalizedValue = normalizeText(value);

                    if (typeof matcher === "string") {
                      return normalizedValue
                        .toLowerCase()
                        .includes(matcher.toLowerCase());
                    }

                    if (matcher instanceof RegExp) {
                      return matcher.test(normalizedValue);
                    }

                    if (typeof matcher === "function") {
                      return Boolean(matcher(normalizedValue));
                    }

                    return normalizedValue === String(matcher);
                  }

                  function getLabelText(control) {
                    if (!control) return "";

                    if (control.labels && control.labels.length > 0) {
                      return Array.from(control.labels)
                        .map((label) => normalizeText(label.textContent))
                        .join(" ");
                    }

                    if (control.id) {
                      const label = document.querySelector('label[for="' + control.id + '"]');
                      if (label) return normalizeText(label.textContent);
                    }

                    const wrapper = control.closest("label");
                    if (wrapper) return normalizeText(wrapper.textContent);

                    return "";
                  }

                  function getAccessibleName(element) {
                    if (!element) return "";

                    return normalizeText(
                      element.getAttribute("aria-label") ||
                        getLabelText(element) ||
                        element.textContent ||
                        element.value ||
                        ""
                    );
                  }

                  function getRoleCandidates(role) {
                    const selectors = {
                      button:
                        'button, input[type="button"], input[type="submit"], input[type="reset"], [role="button"]',
                      textbox:
                        'input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="button"]):not([type="reset"]), textarea, [role="textbox"]',
                      link: 'a[href], [role="link"]',
                      heading: 'h1, h2, h3, h4, h5, h6, [role="heading"]',
                      tab: '[role="tab"]',
                      dialog: '[role="dialog"]',
                      alert: '[role="alert"]',
                      status: '[role="status"]',
                    };

                    const selector = selectors[role] || '[role="' + role + '"]';
                    return Array.from(previewRoot.querySelectorAll(selector));
                  }

                  function getByText(matcher) {
                    const elements = [
                      previewRoot,
                      ...Array.from(previewRoot.querySelectorAll("*")),
                    ];
                    const element = elements.find((item) =>
                      matchesMatcher(item.textContent, matcher)
                    );

                    if (!element) {
                      throw new Error("Unable to find text: " + matcher);
                    }

                    return element;
                  }

                  function queryByText(matcher) {
                    try {
                      return getByText(matcher);
                    } catch (error) {
                      return null;
                    }
                  }

                  function getByRole(role, options = {}) {
                    const candidates = getRoleCandidates(role);
                    const element = candidates.find((item) =>
                      matchesMatcher(getAccessibleName(item), options.name)
                    );

                    if (!element) {
                      throw new Error("Unable to find role: " + role);
                    }

                    return element;
                  }

                  function queryByRole(role, options = {}) {
                    try {
                      return getByRole(role, options);
                    } catch (error) {
                      return null;
                    }
                  }

                  function getAllByRole(role, options = {}) {
                    const matches = getRoleCandidates(role).filter((item) =>
                      matchesMatcher(getAccessibleName(item), options.name)
                    );

                    if (matches.length === 0) {
                      throw new Error("Unable to find role: " + role);
                    }

                    return matches;
                  }

                  function getByLabelText(matcher) {
                    const labels = Array.from(previewRoot.querySelectorAll("label"));
                    const label = labels.find((item) =>
                      matchesMatcher(item.textContent, matcher)
                    );

                    if (!label) {
                      throw new Error("Unable to find label: " + matcher);
                    }

                    const control =
                      label.control ||
                      (label.getAttribute("for")
                        ? previewRoot.querySelector("#" + label.getAttribute("for"))
                        : label.querySelector("input, textarea, select"));

                    if (!control) {
                      throw new Error("Label does not control an input: " + matcher);
                    }

                    return control;
                  }

                  function getByPlaceholderText(matcher) {
                    const controls = Array.from(
                      previewRoot.querySelectorAll("input, textarea")
                    );
                    const control = controls.find((item) =>
                      matchesMatcher(item.getAttribute("placeholder"), matcher)
                    );

                    if (!control) {
                      throw new Error("Unable to find placeholder: " + matcher);
                    }

                    return control;
                  }

                  function cleanup() {
                    ReactDOM.flushSync(() => {
                      reactRoot.render(null);
                    });
                  }

                  function render(ui) {
                    ReactDOM.flushSync(() => {
                      reactRoot.render(ui);
                    });

                    return {
                      container: previewRoot,
                      rerender(nextUi) {
                        ReactDOM.flushSync(() => {
                          reactRoot.render(nextUi);
                        });
                      },
                    };
                  }

                  function dispatchEvent(element, event) {
                    if (!element) return;
                    element.dispatchEvent(event);
                  }

                  const fireEvent = {
                    click(element) {
                      dispatchEvent(
                        element,
                        new MouseEvent("click", { bubbles: true, cancelable: true })
                      );
                    },
                    input(element, payload = {}) {
                      if (payload.target && "value" in payload.target) {
                        element.value = payload.target.value;
                      }

                      dispatchEvent(
                        element,
                        new Event("input", { bubbles: true, cancelable: true })
                      );
                    },
                    change(element, payload = {}) {
                      if (payload.target && "value" in payload.target) {
                        element.value = payload.target.value;
                      }

                      dispatchEvent(
                        element,
                        new Event("input", { bubbles: true, cancelable: true })
                      );
                      dispatchEvent(
                        element,
                        new Event("change", { bubbles: true, cancelable: true })
                      );
                    },
                    submit(element) {
                      dispatchEvent(
                        element,
                        new Event("submit", { bubbles: true, cancelable: true })
                      );
                    },
                    keyDown(element, payload = {}) {
                      dispatchEvent(
                        element,
                        new KeyboardEvent("keydown", {
                          key: payload.key || "",
                          code: payload.code || "",
                          bubbles: true,
                          cancelable: true,
                        })
                      );
                    },
                    focus(element) {
                      element.focus();
                    },
                  };

                  function createAssertionError(message) {
                    return new Error(message);
                  }

                  function expect(received) {
                    const api = {
                      toBe(expected) {
                        if (received !== expected) {
                          throw createAssertionError(
                            "Expected " + received + " to be " + expected
                          );
                        }
                      },
                      toEqual(expected) {
                        const actualString = JSON.stringify(received);
                        const expectedString = JSON.stringify(expected);

                        if (actualString !== expectedString) {
                          throw createAssertionError(
                            "Expected " + actualString + " to equal " + expectedString
                          );
                        }
                      },
                      toContain(expected) {
                        if (!received || !received.includes(expected)) {
                          throw createAssertionError(
                            "Expected value to contain " + expected
                          );
                        }
                      },
                      toHaveLength(expected) {
                        if (!received || received.length !== expected) {
                          throw createAssertionError(
                            "Expected length " +
                              expected +
                              " but received " +
                              (received ? received.length : "undefined")
                          );
                        }
                      },
                      toBeTruthy() {
                        if (!received) {
                          throw createAssertionError("Expected value to be truthy.");
                        }
                      },
                      toBeFalsy() {
                        if (received) {
                          throw createAssertionError("Expected value to be falsy.");
                        }
                      },
                      toBeInTheDocument() {
                        if (!(received instanceof Element) || !previewRoot.contains(received)) {
                          throw createAssertionError("Expected element to be in the document.");
                        }
                      },
                      toHaveTextContent(expected) {
                        const text = normalizeText(received && received.textContent);
                        if (!matchesMatcher(text, expected)) {
                          throw createAssertionError(
                            "Expected text content to match " + expected
                          );
                        }
                      },
                      toHaveValue(expected) {
                        if (!received || received.value !== expected) {
                          throw createAssertionError(
                            "Expected value " + expected + " but received " + (received && received.value)
                          );
                        }
                      },
                      toBeDisabled() {
                        if (!received || !received.disabled) {
                          throw createAssertionError("Expected element to be disabled.");
                        }
                      },
                      toHaveAttribute(name, expected) {
                        if (!(received instanceof Element)) {
                          throw createAssertionError("Expected an element.");
                        }

                        const actual = received.getAttribute(name);

                        if (expected === undefined) {
                          if (actual === null) {
                            throw createAssertionError(
                              "Expected element to have attribute " + name
                            );
                          }
                          return;
                        }

                        if (actual !== expected) {
                          throw createAssertionError(
                            "Expected attribute " +
                              name +
                              " to be " +
                              expected +
                              " but received " +
                              actual
                          );
                        }
                      },
                      toHaveFocus() {
                        if (document.activeElement !== received) {
                          throw createAssertionError("Expected element to have focus.");
                        }
                      },
                    };

                    api.not = {
                      toBeInTheDocument() {
                        if (received instanceof Element && previewRoot.contains(received)) {
                          throw createAssertionError(
                            "Expected element not to be in the document."
                          );
                        }
                      },
                      toBeDisabled() {
                        if (received && received.disabled) {
                          throw createAssertionError(
                            "Expected element not to be disabled."
                          );
                        }
                      },
                      toHaveTextContent(expected) {
                        const text = normalizeText(received && received.textContent);
                        if (matchesMatcher(text, expected)) {
                          throw createAssertionError(
                            "Expected text content not to match " + expected
                          );
                        }
                      },
                    };

                    return api;
                  }

                  async function waitFor(callback, options = {}) {
                    const timeout = options.timeout || 1800;
                    const interval = options.interval || 40;
                    const startedAt = Date.now();
                    let lastError = null;

                    while (Date.now() - startedAt < timeout) {
                      try {
                        return await callback();
                      } catch (error) {
                        lastError = error;
                        await new Promise((resolve) => setTimeout(resolve, interval));
                      }
                    }

                    throw lastError || new Error("waitFor timed out.");
                  }

                  function test(name, fn) {
                    testDefinitions.push({ name, fn });
                  }

                  const it = test;

                  function describe(_name, fn) {
                    fn();
                  }

                  const screen = {
                    getByText,
                    queryByText,
                    getByRole,
                    queryByRole,
                    getAllByRole,
                    getByLabelText,
                    getByPlaceholderText,
                  };

                  ${visibleJs}

                  async function runTests() {
                    const results = [];

                    for (const definition of testDefinitions) {
                      cleanup();

                      try {
                        await definition.fn();
                        results.push({
                          name: definition.name,
                          status: "pass",
                          message: "${language === "es" ? "Test superado." : "Test passed."}",
                        });
                      } catch (error) {
                        results.push({
                          name: definition.name,
                          status: "fail",
                          message: error && error.message ? error.message : String(error),
                        });
                      }
                    }

                    const passedCount = results.filter(
                      (result) => result.status === "pass"
                    ).length;

                    testResults.innerHTML =
                      '<div class="test-summary">' +
                      passedCount +
                      "/" +
                      results.length +
                      " ${language === "es" ? "tests superados" : "tests passed"}" +
                      "</div>" +
                      results
                        .map((result) => {
                          return (
                            '<article class="test-result ' +
                            result.status +
                            '">' +
                            "<strong>" +
                            result.name +
                            "</strong>" +
                            "<span>" +
                            result.message +
                            "</span>" +
                            "</article>"
                          );
                        })
                        .join("");
                  }

                  await runTests();
                })(window.__previewLocalStorage, window.__previewSessionStorage);
              } catch (error) {
                if (window.__previewConsole) {
                  window.__previewConsole.error(error.message);
                }
                showPreviewError(error.message);
              }
            </script>
          </body>
        </html>
      `;
    }

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
            ${previewScrollSetup}
            ${previewConsoleSetup}

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
                if (window.__previewConsole) {
                  window.__previewConsole.error(error.message);
                }
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
          if (window.__previewConsole) {
            window.__previewConsole.error(error.message);
          }
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
          ${previewScrollSetup}
          ${previewConsoleSetup}
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
    isReactTestChallenge,
    isTypeScriptChallenge,
    language,
  ]);

  const previewConsoleSignature = `${previewKey}:${srcDoc}`;
  const previewConsoleMessages =
    previewConsoleState.signature === previewConsoleSignature
      ? previewConsoleState.messages
      : [];

  useEffect(() => {
    function handlePreviewConsoleMessage(event) {
      if (event.source !== previewFrameRef.current?.contentWindow) return;
      if (
        !event.data ||
        event.data.source !== "frontend-practice-preview-console"
      ) {
        return;
      }

      const level = event.data.level || "log";
      const message = String(event.data.message || "");
      const detail = event.data.detail ? String(event.data.detail) : "";

      setPreviewConsoleState((currentState) => {
        const currentMessages =
          currentState.signature === previewConsoleSignature
            ? currentState.messages
            : [];

        return {
          signature: previewConsoleSignature,
          messages: [
            ...currentMessages.slice(-49),
            {
              id: `${Date.now()}-${Math.random()}`,
              level,
              message,
              detail,
              timestamp: event.data.timestamp || Date.now(),
            },
          ],
        };
      });

      if (level === "error" || level === "warn") {
        setConsoleOpen(true);
      }
    }

    window.addEventListener("message", handlePreviewConsoleMessage);

    return () => {
      window.removeEventListener("message", handlePreviewConsoleMessage);
    };
  }, [previewConsoleSignature]);

  const previewConsoleErrorCount = previewConsoleMessages.filter(
    (message) => message.level === "error"
  ).length;

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
      const fieldMeta = historyMetaRef.current[field] || { lastRecordedAt: 0 };
      const now = Date.now();

      if (currentValue === value) return currentHistory;

      const isAtLatestEntry =
        fieldHistory.index === fieldHistory.items.length - 1;
      const isShortGap = now - fieldMeta.lastRecordedAt < HISTORY_GROUP_MS;
      const shouldMergeChange =
        isAtLatestEntry &&
        isShortGap &&
        !shouldForceHistoryBoundary(currentValue, value);

      let nextItems = [];
      let nextIndex = 0;

      if (shouldMergeChange) {
        nextItems = fieldHistory.items.map((item, itemIndex) =>
          itemIndex === fieldHistory.index ? value : item
        );
        nextIndex = fieldHistory.index;
      } else {
        nextItems = [
          ...fieldHistory.items.slice(0, fieldHistory.index + 1),
          value,
        ];

        if (nextItems.length > HISTORY_LIMIT) {
          nextItems = nextItems.slice(nextItems.length - HISTORY_LIMIT);
        }

        nextIndex = nextItems.length - 1;
      }

      historyMetaRef.current[field] = { lastRecordedAt: now };

      return {
        ...currentHistory,
        [field]: {
          items: nextItems,
          index: nextIndex,
        },
      };
    });
  };

  const moveHistory = (direction) => {
    if (isShowingSolution) return;

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
    if (isUndoShortcut(event)) {
      event.preventDefault();
      event.stopPropagation();
      moveHistory(-1);
      return;
    }

    if (isRedoShortcut(event)) {
      event.preventDefault();
      event.stopPropagation();
      moveHistory(1);
    }
  };

  const handleReset = () => {
    onReset();
    historyMetaRef.current = createHistoryMeta();
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
  const canUndo = !isShowingSolution && activeHistory.index > 0;
  const canRedo =
    !isShowingSolution && activeHistory.index < activeHistory.items.length - 1;

  const renderEditor = () => (
    <div className="editor-card">
      <div className="editor-label">
        {isShowingSolution ? copy.workspace.solutionView : copy.workspace.yourCode}{" "}
        - {activeTab === "html" && copy.workspace.htmlEditor}
        {activeTab === "css" && copy.workspace.cssEditor}
        {activeTab === "js" &&
          (isReactChallenge
            ? isReactTestChallenge
              ? copy.workspace.testEditor
              : copy.workspace.reactEditor
            : copy.workspace.jsEditor)}
      </div>

      {activeTab === "html" && !isReactChallenge && (
        <textarea
          className="code-editor"
          value={visibleHtml}
          onChange={(e) => {
            if (!isShowingSolution) commitEditorChange("html", e.target.value);
          }}
          onKeyDownCapture={handleEditorKeyDown}
          readOnly={isShowingSolution}
          spellCheck={false}
          placeholder={isShowingSolution ? "" : copy.workspace.htmlPlaceholder}
        />
      )}

      {activeTab === "css" && !isReactChallenge && (
        <textarea
          className="code-editor"
          value={visibleCss}
          onChange={(e) => {
            if (!isShowingSolution) commitEditorChange("css", e.target.value);
          }}
          onKeyDownCapture={handleEditorKeyDown}
          readOnly={isShowingSolution}
          spellCheck={false}
          placeholder={isShowingSolution ? "" : copy.workspace.cssPlaceholder}
        />
      )}

      {activeTab === "js" && (
        <textarea
          className="code-editor"
          value={visibleJs}
          onChange={(e) => {
            if (!isShowingSolution) commitEditorChange("js", e.target.value);
          }}
          onKeyDownCapture={handleEditorKeyDown}
          readOnly={isShowingSolution}
          spellCheck={false}
          placeholder={
            isShowingSolution
              ? ""
              : isReactChallenge
              ? isReactTestChallenge
                ? copy.workspace.testPlaceholder
                : copy.workspace.reactPlaceholder
              : copy.workspace.jsPlaceholder
          }
        />
      )}
    </div>
  );

  const renderPreviewConsole = () => (
    <div className="preview-console-panel" aria-label={copy.workspace.console}>
      <div className="preview-console-toolbar">
        <span>{copy.workspace.consoleOutput}</span>

        <button
          type="button"
          className="preview-console-clear"
          onClick={() =>
            setPreviewConsoleState({
              signature: previewConsoleSignature,
              messages: [],
            })
          }
          title={copy.workspace.clearConsole}
          aria-label={copy.workspace.clearConsole}
          disabled={previewConsoleMessages.length === 0}
        >
          <Trash2 size={14} aria-hidden="true" />
        </button>
      </div>

      <div className="preview-console-log" aria-live="polite">
        {previewConsoleMessages.length === 0 ? (
          <p className="preview-console-empty">{copy.workspace.consoleEmpty}</p>
        ) : (
          previewConsoleMessages.map((message) => (
            <article
              className={`preview-console-message ${message.level}`}
              key={message.id}
            >
              <span className="preview-console-level">{message.level}</span>
              <div>
                <p>{message.message}</p>
                {message.detail && <pre>{message.detail}</pre>}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );

  const renderPreview = () => (
    <div className="preview-card">
      <div className="editor-label preview-label">
        <span>
          {copy.workspace.livePreview} -{" "}
          {isShowingSolution ? copy.workspace.solution : copy.workspace.myCode}
        </span>

        <div className="preview-label-actions">
          {onPreviewViewportChange && (
            <div
              className="preview-viewport-group"
              role="group"
              aria-label={copy.workspace.previewViewport}
            >
              <button
                type="button"
                className={
                  previewViewport === "desktop"
                    ? "preview-viewport-btn active"
                    : "preview-viewport-btn"
                }
                onClick={() => onPreviewViewportChange("desktop")}
                title={copy.workspace.desktopView}
                aria-label={copy.workspace.desktopView}
              >
                <Monitor size={15} aria-hidden="true" />
                <span>{copy.workspace.desktopView}</span>
              </button>

              <button
                type="button"
                className={
                  previewViewport === "phone"
                    ? "preview-viewport-btn active"
                    : "preview-viewport-btn"
                }
                onClick={() => onPreviewViewportChange("phone")}
                title={copy.workspace.phoneView}
                aria-label={copy.workspace.phoneView}
              >
                <Smartphone size={15} aria-hidden="true" />
                <span>{copy.workspace.phoneView}</span>
              </button>
            </div>
          )}

          <button
            type="button"
            className={
              consoleOpen
                ? "preview-console-toggle active"
                : "preview-console-toggle"
            }
            onClick={() => setConsoleOpen((current) => !current)}
            title={
              consoleOpen
                ? copy.workspace.hideConsole
                : copy.workspace.showConsole
            }
            aria-label={
              consoleOpen
                ? copy.workspace.hideConsole
                : copy.workspace.showConsole
            }
            aria-expanded={consoleOpen}
          >
            <Terminal size={15} aria-hidden="true" />
            <span>{copy.workspace.console}</span>
            {previewConsoleErrorCount > 0 && (
              <strong>{previewConsoleErrorCount}</strong>
            )}
            {consoleOpen ? (
              <ChevronUp size={15} aria-hidden="true" />
            ) : (
              <ChevronDown size={15} aria-hidden="true" />
            )}
          </button>

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
      </div>

      <div ref={previewStageRef} className={`preview-stage ${previewViewport}`}>
        <div
          className="preview-frame-shell"
          style={
            previewViewport === "desktop"
              ? {
                  width: `${DESKTOP_PREVIEW_WIDTH * desktopPreviewScale}px`,
                }
              : undefined
          }
        >
          <iframe
            ref={previewFrameRef}
            key={previewKey}
            title="preview"
            srcDoc={srcDoc}
            className="preview-frame"
            sandbox="allow-scripts"
            style={
              previewViewport === "desktop"
                ? {
                    height: `${100 / desktopPreviewScale}%`,
                    transform: `scale(${desktopPreviewScale})`,
                  }
                : undefined
            }
          />
        </div>
      </div>

      {consoleOpen && renderPreviewConsole()}
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
            {isTypeScriptChallenge
              ? "TSX"
              : isReactTestChallenge
                ? "Tests"
                : isReactChallenge
                  ? "React"
                  : "JS"}
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

          {solutionEnabled ? (
            <button
              className="secondary-btn"
              onClick={() => setShowSolution((prev) => !prev)}
            >
              {isShowingSolution ? (
                <Code2 size={17} aria-hidden="true" />
              ) : (
                <Eye size={17} aria-hidden="true" />
              )}
              {isShowingSolution
                ? copy.workspace.backToCode
                : copy.workspace.showSolution}
            </button>
          ) : solutionLockedReason ? (
            <span className="status-pill workspace-lock-pill">
              {solutionLockedReason}
            </span>
          ) : null}

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
            : previewViewport === "desktop"
              ? "workspace-grid workspace-grid-desktop-preview"
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
