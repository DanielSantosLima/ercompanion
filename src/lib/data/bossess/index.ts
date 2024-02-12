import { Accordion } from "../../interfaces/Accordion";
import { limgraveBossess } from "./limgraveBossess";
import { weepingPeninsulaBossess } from "./weepingPeninsulaBossess";

export const bossess: Accordion[] = [
  {
    id: 1,
    location: "Limgrave",
    contents: limgraveBossess
  },
  {
    id: 2,
    location: "Weeping Peninsula",
    contents: weepingPeninsulaBossess
  }
]