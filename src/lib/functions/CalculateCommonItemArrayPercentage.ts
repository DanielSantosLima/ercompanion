import { CommonItem } from "../interfaces/Common";

export const CalculateCommonItemArrayPercentage = (
  commonItemArray: CommonItem[]
): {
  itemsChecked: number;
  percentage: number;
  totalItems: number;
} => {
  const count = commonItemArray.reduce((total, item) => {
    return total + (item.checked ? 1 : 0);
  }, 0);

  const percentage = (count / commonItemArray.length) * 100;
  return {
    itemsChecked: count,
    percentage: percentage,
    totalItems: commonItemArray.length,
  };
};
