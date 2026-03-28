import { useState } from "react";

export default function ToggleThemeChallenge() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: dark ? "#111" : "#f5f5f5",
        color: dark ? "white" : "black",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
