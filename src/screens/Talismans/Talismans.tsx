import { ToggableItem } from "@/components/ToggableItem.tsx";
import { talismans } from "@/lib/data/talismans/index.ts";
import { asyncStorageFetch } from "@/lib/functions/asyncStorageFetch.ts";
import { calculateSingleArrayValues } from "@/lib/functions/calculateSingleArrayValues.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { arraySorting } from "../../lib/functions/arraySorting.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const TalismansScreen = () => {
  const sortedArray = useMemo(() => arraySorting(talismans), []);
  const [talismansArray, setTalismansArray] =
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
      const data = await asyncStorageFetch("talismans");
      if (data !== null) {
        //Essa linha vai dar problema. Se entrar mais items no array depois que
        // gravou no Async Storage, não vão aparecer
        setTalismansArray(data);
        calculateCompletion(data);
      } else {
        const sortedArray = arraySorting(talismans);
        setTalismansArray(sortedArray);
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
      const index = talismansArray.findIndex((item) => item.id === id);
      if (index !== -1) {
        const temp = [...talismansArray];
        temp[index].checked = checked;
        setTalismansArray(() => temp);
        AsyncStorage.setItem("talismans", JSON.stringify(temp)); // Save to AsyncStorage
        calculateCompletion(temp);
      }
    },
    [talismansArray],
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            valueSuffix="%"
            title="talismans Collected"
            subtitle={subtitle}
            progressValueFontSize={30}
          />
        </View>
      </View>
      <FlatList
        data={talismansArray}
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
