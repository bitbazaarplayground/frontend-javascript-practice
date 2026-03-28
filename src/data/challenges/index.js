import { builderChallenges } from "./builder.js";
import { rookieChallenges } from "./rookie.js";

export const challengeModes = [
  {
    id: "rookie",
    title: "Rookie",
    description:
      "Begin with HTML and CSS basics. Small wins, strong foundations.",
    challenges: rookieChallenges,
  },
  {
    id: "builder",
    title: "Builder",
    description:
      "Move into layouts, forms, and your first JavaScript interactions.",
    challenges: builderChallenges,
  },
];
