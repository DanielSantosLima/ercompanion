import { CommonItem } from "../interfaces/Common";

export const commonItemArraySorting = (array: CommonItem[]): CommonItem[] => {
  const sortedArray = array.sort((a: CommonItem, b: CommonItem) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedArray;
};
