// src/utils/validators.js
function includesAny(text, values) {
  const lowerText = text.toLowerCase();
  return values.some((value) => lowerText.includes(value.toLowerCase()));
}

function createResult({ status, feedback }) {
  return {
    status,
    feedback,
  };
}

export function validateStyledHeading({ html, css }) {
  const feedback = [];
  let score = 0;

  const hasH1 = includesAny(html, ["<h1"]);
  const hasRedBackground =
    includesAny(css, ["background: red", "background-color: red"]) ||
    includesAny(css, ["background:#ff0000", "background-color:#ff0000"]);
  const hasBorder = includesAny(css, [
    "border: 1px solid black",
    "border:1px solid black",
  ]);
  const hasBorderRadius = includesAny(css, ["border-radius"]);
  const hasPadding = includesAny(css, ["padding"]);

  if (hasH1) {
    score += 1;
    feedback.push("Good start — I found an h1 element.");
  } else {
    feedback.push("I could not find an h1 element yet.");
  }

  if (hasRedBackground) {
    score += 1;
    feedback.push("Nice — the heading appears to have a red background.");
  } else {
    feedback.push("Check the background color — it should be red.");
  }

  if (hasBorder) {
    score += 1;
    feedback.push("Great — I found a 1px solid black border.");
  } else {
    feedback.push("The heading still needs a 1px solid black border.");
  }

  if (hasBorderRadius) {
    score += 1;
    feedback.push("Good — rounded corners are present.");
  } else {
    feedback.push("Add rounded corners with border-radius.");
  }

  if (hasPadding) {
    score += 1;
    feedback.push("Nice — padding is included.");
  } else {
    feedback.push("Add some padding so the heading has space inside.");
  }

  if (score === 5) {
    return createResult({
      status: "success",
      feedback: [
        "Excellent work — this challenge looks complete.",
        ...feedback,
      ],
    });
  }

  if (score >= 3) {
    return createResult({
      status: "close",
      feedback: [
        "You are close — a few details still need attention.",
        ...feedback,
      ],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [
      "Good start, but this challenge still needs more work.",
      ...feedback,
    ],
  });
}

export function validateStyledButton({ html, css }) {
  const feedback = [];
  let score = 0;

  const hasButton = includesAny(html, ["<button"]);
  const hasPadding = includesAny(css, ["padding"]);
  const hasBorderRadius = includesAny(css, ["border-radius"]);
  const hasBackground = includesAny(css, ["background", "background-color"]);
  const hasHover = includesAny(css, [":hover"]);

  if (hasButton) {
    score += 1;
    feedback.push("Good — I found a button element.");
  } else {
    feedback.push("I could not find a button element yet.");
  }

  if (hasPadding) {
    score += 1;
    feedback.push("Nice — the button has padding.");
  } else {
    feedback.push("Add padding to make the button feel clickable.");
  }

  if (hasBorderRadius) {
    score += 1;
    feedback.push("Good — rounded corners are present.");
  } else {
    feedback.push("Add rounded corners with border-radius.");
  }

  if (hasBackground) {
    score += 1;
    feedback.push("Nice — the button has a background style.");
  } else {
    feedback.push("The button still needs a visible background color.");
  }

  if (hasHover) {
    score += 1;
    feedback.push("Great — I found a hover effect.");
  } else {
    feedback.push("Add a :hover style so the button changes on mouse over.");
  }

  if (score === 5) {
    return createResult({
      status: "success",
      feedback: [
        "Excellent work — this challenge looks complete.",
        ...feedback,
      ],
    });
  }

  if (score >= 3) {
    return createResult({
      status: "close",
      feedback: [
        "You are close — just a few improvements remain.",
        ...feedback,
      ],
    });
  }

  return createResult({
    status: "needs-work",
    feedback: [
      "This solution needs more work before it is complete.",
      ...feedback,
    ],
  });
}

export function validateChallenge(challengeId, draft) {
  const validators = {
    "styled-heading": validateStyledHeading,
    "styled-button": validateStyledButton,
  };

  const validator = validators[challengeId];

  if (!validator) {
    return {
      status: "not-available",
      feedback: [
        "A checker is not available for this challenge yet.",
        "You can still use the requirements, tips, and solution view to compare your work.",
      ],
    };
  }

  return validator(draft);
}
