export default function InterviewReflectionPanel({
  value,
  onChange,
  copy,
  variant = "interview",
}) {
  const reflectionCopy =
    variant === "rookie" ? copy.rookieReflection : copy.reflection;

  return (
    <section className="panel interview-reflection-panel">
      <div className="panel-top">
        <h3>{reflectionCopy.title}</h3>
      </div>

      <p className="brief-text">{reflectionCopy.intro}</p>

      <div className="reflection-grid">
        <label className="reflection-field">
          <span>{reflectionCopy.summaryPrompt}</span>
          <textarea
            value={value.summary}
            onChange={(event) => onChange("summary", event.target.value)}
            placeholder={reflectionCopy.summaryPlaceholder}
          />
        </label>

        <label className="reflection-field">
          <span>{reflectionCopy.decisionsPrompt}</span>
          <textarea
            value={value.decisions}
            onChange={(event) => onChange("decisions", event.target.value)}
            placeholder={reflectionCopy.decisionsPlaceholder}
          />
        </label>

        <label className="reflection-field">
          <span>{reflectionCopy.improvePrompt}</span>
          <textarea
            value={value.improve}
            onChange={(event) => onChange("improve", event.target.value)}
            placeholder={reflectionCopy.improvePlaceholder}
          />
        </label>
      </div>
    </section>
  );
}
