import { Accordion } from "@/lib/interfaces/Accordion";
import { handsArmor } from "./handsArmor";
import { headArmor } from "./headArmor";
import { legsArmor } from "./legsArmor";
import { chestArmor } from "./torsoArmor";

export const armor: Accordion[] = [
  {
    id: 1,
    location: "Head Armor",
    contents: headArmor,
  },
  {
    id: 2,
    location: "Hands Armor",
    contents: handsArmor,
  },
  {
    id: 3,
    location: "Chest Armor",
    contents: chestArmor,
  },
  {
    id: 4,
    location: "Legs Armor",
    contents: legsArmor,
  },
];
