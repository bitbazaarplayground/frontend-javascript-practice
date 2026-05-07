export default function MiloGuide({
  eyebrow,
  title,
  message,
  compact = false,
}) {
  return (
    <div className={`milo-guide ${compact ? "compact" : ""}`}>
      <div className="milo-avatar" aria-hidden="true">
        <div className="milo-cap" />
        <div className="milo-face">
          <span className="milo-eye left" />
          <span className="milo-eye right" />
          <span className="milo-smile" />
        </div>
        <div className="milo-body" />
      </div>

      <div className="milo-speech">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}
