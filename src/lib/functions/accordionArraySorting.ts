import { Accordion } from "../interfaces/Accordion";
import { arraySorting } from "./arraySorting";

export const accordionArraySorting = (array: Accordion[]): Accordion[] => {
  for (let i = 0; i < array.length; i++) {
    const sorted = arraySorting(array[i].contents)
    array[i].contents = sorted
  }

  return array
}