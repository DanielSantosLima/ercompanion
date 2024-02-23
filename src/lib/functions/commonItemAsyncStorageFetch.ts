import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonItem } from "../interfaces/Common";

export const commonItemAsyncStorageFetch = async (
  key: string,
): Promise<CommonItem[] | null> => {
  try {
    const fetchedData = await AsyncStorage.getItem(key);
    if (fetchedData !== null) {
      const parsedItem = JSON.parse(fetchedData);
      return parsedItem;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
