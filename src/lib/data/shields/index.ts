import { Accordion } from "../../interfaces/Accordion";
import { greatShields } from "./greatShields";
import { mediumShields } from "./mediumShields";
import { smallShiels } from "./smallShiels";

export const shields: Accordion[] = [
  {
    id: 1,
    location: "Small Shields",
    contents: smallShiels,
  },
  {
    id: 2,
    location: "Medium Shields",
    contents: mediumShields,
  },
  {
    id: 3,
    location: "Great Shields",
    contents: greatShields,
  },
];
