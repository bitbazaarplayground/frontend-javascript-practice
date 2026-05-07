import { builderChallenges } from "./builder.js";
import { interviewChallenges } from "./interview.js";
import { reactChallenges } from "./react.js";
import { rookieChallenges } from "./rookie.js";
import { typescriptChallenges } from "./typescript.js";

function renumberChallenges(challenges) {
  return challenges.map((challenge, index) => {
    const match = challenge.title.match(/^Challenge\s+\d+\s+—\s+(.+)$/);

    if (!match) {
      return challenge;
    }

    return {
      ...challenge,
      title: `Challenge ${index + 1} — ${match[1]}`,
    };
  });
}

export const challengeModes = [
  {
    id: "rookie",
    title: "Rookie",
    description:
      "Build HTML and CSS foundations from selectors and spacing through flexbox, grid, responsive sections, polished beginner projects, and first interview-style layout tasks.",
    level: "Beginner",
    challenges: renumberChallenges(rookieChallenges),
  },
  {
    id: "builder",
    title: "Builder",
    description:
      "Practice real JavaScript fundamentals including DOM interaction, filtering, APIs, async logic, debugging, and backend awareness.",
    level: "Beginner to Intermediate",
    challenges: renumberChallenges(builderChallenges),
  },
  {
    id: "react",
    title: "React",
    description:
      "Train modern React skills with components, props, state, effects, routing, auth flows, TypeScript-ready patterns, and realistic UI work.",
    level: "Intermediate",
    challenges: renumberChallenges(reactChallenges),
  },
  {
    id: "typescript",
    title: "TypeScript",
    description:
      "Move from plain React into typed frontend work with interfaces, unions, typed props, typed forms, async data, and a full TypeScript capstone.",
    level: "Intermediate to Advanced",
    challenges: renumberChallenges(typescriptChallenges),
  },
  {
    id: "interview",
    title: "Interview Ready",
    description:
      "Practice hiring-style builds that combine layout, DOM logic, async states, accessibility, testing, debugging, TypeScript, and realistic React take-homes.",
    level: "Advanced",
    challenges: renumberChallenges(interviewChallenges),
  },
];
