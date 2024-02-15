import { CommonItem } from "../interfaces/Common";

export const calculateSingleArrayValues = (array: CommonItem[]) => {
  const checkedItemsCount = array.filter((item) => item.checked).length;
  const text = `${checkedItemsCount}/${array.length}`;
  const percentage = (checkedItemsCount / array.length) * 100;

  return {
    checkedCount: checkedItemsCount,
    text: text,
    percentage: percentage,
  };
};
