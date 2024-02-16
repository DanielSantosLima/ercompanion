import { Accordion } from "../../interfaces/Accordion";
import { ainselRiverBossess } from "./ainselRiverBossess";
import { altusPlateauBossess } from "./altusPlateauBossess";
import { caelidBossess } from "./caelidBossess";
import { consecratedSnowfieldBossess } from "./consecratedSnowfieldBossess";
import { crumblingFarumAzulaBossess } from "./crumblingFarumAzulaBossess";
import { deeprootDepthsBossess } from "./deeprootDepthsBossess";
import { dragonbarrowBossess } from "./dragonbarrowBossess";
import { forbiddenLandsBossess } from "./forbiddenLandsBossess";
import { lakeOfRotBossess } from "./lakeOfRotBossess";
import { leyndellAshenCapitalBossess } from "./leyndellAshenCapitalBossess";
import { leyndellBossess } from "./leyndellBossess";
import { limgraveBossess } from "./limgraveBossess";
import { liurniaBossess } from "./liurniaBossess";
import { mohgwynPalaceBossess } from "./mohgwynPalaceBossess";
import { mountaintopsOfTheGiantsBossess } from "./mountaintopsOfTheGiantsBossess";
import { mtGelmirBossess } from "./mtGelmirBossess";
import { nokronBossess } from "./nokronBossess";
import { siofraRiverBossess } from "./siofraRiverBossess";
import { theHaligtreeBossess } from "./theHaligtreeBossess";
import { weepingPeninsulaBossess } from "./weepingPeninsulaBossess";

export const bossess: Accordion[] = [
  {
    id: 1,
    location: "Limgrave",
    contents: limgraveBossess,
  },
  {
    id: 2,
    location: "Weeping Peninsula",
    contents: weepingPeninsulaBossess,
  },
  {
    id: 3,
    location: "Liurnia of the Lakes",
    contents: liurniaBossess,
  },
  {
    id: 4,
    location: "Caelid",
    contents: caelidBossess,
  },
  {
    id: 5,
    location: "Dragonbarrow",
    contents: dragonbarrowBossess,
  },
  {
    id: 6,
    location: "Altus Plateau",
    contents: altusPlateauBossess,
  },
  {
    id: 7,
    location: "Mt. Gelmir",
    contents: mtGelmirBossess,
  },
  {
    id: 8,
    location: "Leyndell",
    contents: leyndellBossess,
  },
  {
    id: 9,
    location: "Siofra River",
    contents: siofraRiverBossess,
  },
  {
    id: 10,
    location: "Lake of Rot",
    contents: lakeOfRotBossess,
  },
  {
    id: 11,
    location: "Ainsel River",
    contents: ainselRiverBossess,
  },
  {
    id: 12,
    location: "Nokron, Eternal City",
    contents: nokronBossess,
  },
  {
    id: 13,
    location: "Deeproot Depths",
    contents: deeprootDepthsBossess,
  },
  {
    id: 14,
    location: "Forbidden Lands",
    contents: forbiddenLandsBossess,
  },
  {
    id: 15,
    location: "Mohgwyn Palace",
    contents: mohgwynPalaceBossess,
  },
  {
    id: 16,
    location: "Mountaintops of the Giants",
    contents: mountaintopsOfTheGiantsBossess,
  },
  {
    id: 17,
    location: "Consecrated Snowfield",
    contents: consecratedSnowfieldBossess,
  },
  {
    id: 18,
    location: "The Haligtree",
    contents: theHaligtreeBossess,
  },
  {
    id: 19,
    location: "Crumbling Farum Azula",
    contents: crumblingFarumAzulaBossess,
  },
  {
    id: 20,
    location: "Leyndell, Ashen Capital",
    contents: leyndellAshenCapitalBossess,
  },
];
