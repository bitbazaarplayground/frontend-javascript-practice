export default function InterviewReflectionPanel({
  value,
  onChange,
  copy,
}) {
  return (
    <section className="panel interview-reflection-panel">
      <div className="panel-top">
        <h3>{copy.reflection.title}</h3>
      </div>

      <p className="brief-text">{copy.reflection.intro}</p>

      <div className="reflection-grid">
        <label className="reflection-field">
          <span>{copy.reflection.summaryPrompt}</span>
          <textarea
            value={value.summary}
            onChange={(event) => onChange("summary", event.target.value)}
            placeholder={copy.reflection.summaryPlaceholder}
          />
        </label>

        <label className="reflection-field">
          <span>{copy.reflection.decisionsPrompt}</span>
          <textarea
            value={value.decisions}
            onChange={(event) => onChange("decisions", event.target.value)}
            placeholder={copy.reflection.decisionsPlaceholder}
          />
        </label>

        <label className="reflection-field">
          <span>{copy.reflection.improvePrompt}</span>
          <textarea
            value={value.improve}
            onChange={(event) => onChange("improve", event.target.value)}
            placeholder={copy.reflection.improvePlaceholder}
          />
        </label>
      </div>
    </section>
  );
}
