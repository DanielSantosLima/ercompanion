import { CommonItem } from "../interfaces/Common"

export const CalculateCommonItemArrayPercentage = (CommonItemArray: CommonItem[]): number  => {
  const count = CommonItemArray.reduce((total, item) => {
    return total + (item.checked ? 1 : 0)
  }, 0)

  const percentage = (count / CommonItemArray.length) * 100
  return percentage
}