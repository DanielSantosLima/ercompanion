import AsyncStorage from "@react-native-async-storage/async-storage";
import { Accordion } from "../interfaces/Accordion";
import { accordionCompletion } from "./calculateAccordionCompletion";

export const accordionAsyncStorageFetch = async (
  name: string,
  array: Accordion[],
): Promise<{
  totalChecked: number;
  percentage: number;
  total: string;
  totalItemsInArray: number;
} | null> => {
  try {
    const itemFetch = await AsyncStorage.getItem(name);
    if (itemFetch === null) {
      const result = accordionCompletion(array);
      return result;
    } else {
      const parsedItem = JSON.parse(itemFetch);
      const result = accordionCompletion(parsedItem);
      return result;
    }
  } catch (error) {
    console.error("Error in accordioncommonItemAsyncStorageFetch:", error);
    return null;
  }
};
