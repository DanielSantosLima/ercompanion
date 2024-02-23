import { CommonItem } from "../interfaces/Common";

export const calculateCommonItemCompletion = (
  array: CommonItem[],
): {
  totalChecked: number;
  percentage: number;
  total: string;
  totalItemsInArray: number;
} => {
  const checkedItemsCount = array.filter((item) => item.checked).length;
  const text = `${checkedItemsCount}/${array.length}`;
  const percentage = (checkedItemsCount / array.length) * 100;

  return {
    totalChecked: checkedItemsCount,
    total: text,
    percentage: percentage,
    totalItemsInArray: array.length,
  };
};
