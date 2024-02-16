import { sorceries } from "@/lib/data/sorceries/index.ts";
import { asyncStorageFetch } from "@/lib/functions/asyncStorageFetch.ts";
import { calculateSingleArrayValues } from "@/lib/functions/calculateSingleArrayValues.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { ToggableItem } from "../../components/ToggableItem.tsx";
import { arraySorting } from "../../lib/functions/arraySorting.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const SorceriesScreen = () => {
  const sortedArray = arraySorting(sorceries);
  const [sorceriesArray, setSorceriesArray] =
    useState<CommonItem[]>(sortedArray);

  const [totalCompletion, setTotalCompletion] = useState<number>(0);
  const [subtitle, setSubtitle] = useState<string>("");

  useEffect(() => {
    loadDataFromAsyncStorage();
  }, []);

  const loadDataFromAsyncStorage = async () => {
    try {
      // const keys = await AsyncStorage.getAllKeys();
      // AsyncStorage.multiRemove(keys);
      const data = await asyncStorageFetch("sorceries");
      if (data !== null) {
        setSorceriesArray(data);
        calculateCompletion(data);
      } else {
        const sortedArray = arraySorting(sorceries);
        setSorceriesArray(sortedArray);
        calculateCompletion(sortedArray);
      }
    } catch (error) {
      console.error("Error loading data from AsyncStorage:", error);
    }
  };

  const calculateCompletion = (array: CommonItem[]) => {
    const result = calculateSingleArrayValues(array);

    setTotalCompletion(() => result.percentage);
    setSubtitle(() => result.text);
  };

  //usando UseCallback pra tentar diminuir o tempo de carregamento dos dados
  const onItemClick = useCallback(
    (id: number, checked: boolean) => {
      const index = sorceriesArray.findIndex((item) => item.id === id);
      if (index !== -1) {
        const temp = [...sorceriesArray];
        temp[index].checked = checked;
        setSorceriesArray(() => temp);
        AsyncStorage.setItem("sorceries", JSON.stringify(temp)); // Save to AsyncStorage
        calculateCompletion(temp);
      }
    },
    [sorceriesArray],
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            valueSuffix="%"
            title="Sorceries Collected"
            subtitle={subtitle}
            progressValueFontSize={30}
          />
        </View>
        <FlatList
          data={sorceriesArray}
          renderItem={({ item }) => (
            <ToggableItem key={item.id} item={item} onItemClick={onItemClick} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
