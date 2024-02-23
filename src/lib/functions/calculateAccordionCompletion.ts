import { Accordion } from "../interfaces/Accordion";
import { CommonItem } from "../interfaces/Common";

const countChecks = (array: CommonItem[]): number => {
  const count = array.reduce((total, item) => {
    return total + (item.checked ? 1 : 0);
  }, 0);
  return count;
};

export const accordionCompletion = (
  parentArray: Accordion[],
): {
  totalChecked: number;
  percentage: number;
  total: string;
  totalItemsInArray: number;
} => {
  const parentValues: number[] = parentArray.map((item: Accordion) => {
    return countChecks(item.contents);
  });

  const totalParentCount = parentValues.reduce((total, item) => {
    return total + item;
  }, 0);

  const totalItemsInParent = parentArray.reduce((total, item) => {
    return total + item.contents.length;
  }, 0);

  const percentage = (totalParentCount / totalItemsInParent) * 100;
  return {
    totalChecked: totalParentCount,
    percentage: percentage,
    total: `${totalParentCount}/${totalItemsInParent}`,
    totalItemsInArray: totalItemsInParent,
  };
};
