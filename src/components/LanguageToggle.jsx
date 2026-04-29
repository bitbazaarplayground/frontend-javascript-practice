import { Languages } from "lucide-react";
import { languageOptions } from "../data/i18n";

export default function LanguageToggle({ language, onChange, label }) {
  return (
    <div className="language-toggle" aria-label={label}>
      <Languages size={17} aria-hidden="true" />

      <div className="language-options">
        {languageOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            className={language === option.id ? "active" : ""}
            onClick={() => onChange(option.id)}
            aria-pressed={language === option.id}
          >
            {option.shortLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
