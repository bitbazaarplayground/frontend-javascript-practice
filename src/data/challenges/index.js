import { builderChallenges } from "./builder";
import { reactChallenges } from "./react";
import { rookieChallenges } from "./rookie";

export const challengeModes = [
  {
    id: "rookie",
    title: "Rookie",
    description:
      "Build strong foundations in HTML and CSS with beginner-friendly layout and styling challenges.",
    level: "Beginner",
    challenges: rookieChallenges,
  },
  {
    id: "builder",
    title: "Builder",
    description:
      "Practice real JavaScript fundamentals including DOM interaction, filtering, events, localStorage, and async logic.",
    level: "Beginner to Intermediate",
    challenges: builderChallenges,
  },
  {
    id: "react",
    title: "React",
    description:
      "Train modern React skills with components, props, state, forms, lists, hooks, and realistic UI patterns.",
    level: "Intermediate",
    challenges: reactChallenges,
  },
];
