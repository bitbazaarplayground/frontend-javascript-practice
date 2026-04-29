import { Palette } from "lucide-react";

const themeOptions = ["light", "blue"];

export default function ThemeToggle({ theme, onChange, copy }) {
  return (
    <div className="theme-toggle" aria-label={copy.label}>
      <Palette size={17} aria-hidden="true" />

      <div className="theme-options">
        {themeOptions.map((option) => (
          <button
            key={option}
            type="button"
            className={theme === option ? "active" : ""}
            onClick={() => onChange(option)}
            aria-pressed={theme === option}
          >
            {copy[option]}
          </button>
        ))}
      </div>
    </div>
  );
}
