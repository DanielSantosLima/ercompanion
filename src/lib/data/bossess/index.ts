import { Accordion } from "../../interfaces/Accordion";
import { altusPlateauBossess } from "./altusPlateauBossess";
import { caelidBossess } from "./caelidBossess";
import { dragonbarrowBossess } from "./dragonbarrowBossess";
import { leyndellBossess } from "./leyndellBossess";
import { limgraveBossess } from "./limgraveBossess";
import { liurniaBossess } from "./liurniaBossess";
import { mtGelmirBossess } from "./mtGelmirBossess";
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
  },
  {
    id: 3,
    location: "Liurnia of the Lakes",
    contents: liurniaBossess
  },
  {
    id: 4,
    location: "Caelid",
    contents: caelidBossess
  },
  {
    id: 5,
    location: "Dragonbarrow",
    contents: dragonbarrowBossess
  },
  {
    id: 6,
    location: "Altus Plateau",
    contents: altusPlateauBossess
  },
  {
    id: 7,
    location: "Mt. Gelmir",
    contents: mtGelmirBossess
  },
  {
    id: 8,
    location: "Leyndell",
    contents: leyndellBossess
  },
]