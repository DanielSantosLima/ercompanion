import { ToggableItem } from "@/components/ToggableItem.tsx";
import { spiritAshes } from "@/lib/data/spiritAshes/index.ts";
import { asyncStorageFetch } from "@/lib/functions/asyncStorageFetch.ts";
import { calculateSingleArrayValues } from "@/lib/functions/calculateSingleArrayValues.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { arraySorting } from "../../lib/functions/arraySorting.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const SpiritAshesScreen = () => {
  const sortedArray = useMemo(() => arraySorting(spiritAshes), []);
  const [spiritAshesArray, setspiritAshesArray] =
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
      const data = await asyncStorageFetch("spiritAshes");
      if (data !== null) {
        //Essa linha vai dar problema. Se entrar mais items no array depois que
        // gravou no Async Storage, não vão aparecer
        setspiritAshesArray(data);
        calculateCompletion(data);
      } else {
        const sortedArray = arraySorting(spiritAshes);
        setspiritAshesArray(sortedArray);
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
      const index = spiritAshesArray.findIndex((item) => item.id === id);
      if (index !== -1) {
        const temp = [...spiritAshesArray];
        temp[index].checked = checked;
        setspiritAshesArray(() => temp);
        AsyncStorage.setItem("spiritAshes", JSON.stringify(temp)); // Save to AsyncStorage
        calculateCompletion(temp);
      }
    },
    [spiritAshesArray],
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            valueSuffix="%"
            title="Spirit Ashes Collected"
            subtitle={subtitle}
            progressValueFontSize={30}
          />
        </View>
      </View>
      <FlatList
        data={spiritAshesArray}
        renderItem={({ item }) => (
          <ToggableItem key={item.id} item={item} onItemClick={onItemClick} />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginHorizontal: "5%" }}
        initialNumToRender={10}
      />
    </SafeAreaView>
  );
};
