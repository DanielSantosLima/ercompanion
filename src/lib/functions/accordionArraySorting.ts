import { Accordion } from "../interfaces/Accordion";
import { commonItemArraySorting } from "./commonItemArraySorting";

export const accordionArraySorting = (array: Accordion[]): Accordion[] => {
  for (let i = 0; i < array.length; i++) {
    const sorted = commonItemArraySorting(array[i].contents);
    array[i].contents = sorted;
  }

  return array;
};
