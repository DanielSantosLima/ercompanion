import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonItem } from "../interfaces/Common";
import { arraySorting } from "./arraySorting";

export const asyncStorageFetch = async (
  key: string,
): Promise<CommonItem[] | null> => {
  try {
    const fetchedData = await AsyncStorage.getItem(key);
    if (fetchedData !== null) {
      const parsedSorceries = JSON.parse(fetchedData);
      const sortedArray = arraySorting(parsedSorceries);

      return sortedArray;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
