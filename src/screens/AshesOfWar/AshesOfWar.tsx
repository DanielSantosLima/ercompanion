import { ToggableItem } from "@/components/ToggableItem.tsx";
import { ashesOfWar } from "@/lib/data/ashesOfWar/index.ts";
import { calculateCommonItemCompletion } from "@/lib/functions/calculateCommonItemCompletion.ts";
import { commonItemArraySorting } from "@/lib/functions/commonItemArraySorting.ts";
import { commonItemAsyncStorageFetch } from "@/lib/functions/commonItemAsyncStorageFetch.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const AshesOfWarScreen = () => {
  const sortedArray = useMemo(() => commonItemArraySorting(ashesOfWar), []);
  const [ashesOfWarArray, setAshesOfWarArray] =
    useState<CommonItem[]>(sortedArray);

  const [totalCompletion, setTotalCompletion] = useState<number>(0);
  const [subtitle, setSubtitle] = useState<string>("");

  useEffect(() => {
    loadDataFromAsyncStorage();
  }, []);

  const loadDataFromAsyncStorage = async () => {
    try {
      const data = await commonItemAsyncStorageFetch("ashesOfWar");
      if (data !== null) {
        //Essa linha vai dar problema. Se entrar mais items no array depois que
        // gravou no Async Storage, não vão aparecer
        setAshesOfWarArray(data);
        calculateCompletion(data);
      } else {
        const stringfy = JSON.stringify(ashesOfWar);
        await AsyncStorage.setItem("ashesOfWar", stringfy);
        const sortedArray = commonItemArraySorting(ashesOfWar);
        setAshesOfWarArray(sortedArray);
        calculateCompletion(sortedArray);
      }
    } catch (error) {
      console.error("Error loading data from AsyncStorage:", error);
    }
  };

  const calculateCompletion = (array: CommonItem[]) => {
    const result = calculateCommonItemCompletion(array);

    setTotalCompletion(() => result.percentage);
    setSubtitle(() => result.total);
  };

  //usando UseCallback pra tentar diminuir o tempo de carregamento dos dados
  const onItemClick = useCallback(
    (id: number, checked: boolean) => {
      const index = ashesOfWarArray.findIndex((item) => item.id === id);
      if (index !== -1) {
        const temp = [...ashesOfWarArray];
        temp[index].checked = checked;
        setAshesOfWarArray(() => temp);
        AsyncStorage.setItem("ashesOfWar", JSON.stringify(temp)); // Save to AsyncStorage
        calculateCompletion(temp);
      }
    },
    [ashesOfWarArray],
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            valueSuffix="%"
            title="Ashes of War Collected"
            subtitle={subtitle}
            progressValueFontSize={30}
          />
        </View>
      </View>
      <FlatList
        data={ashesOfWarArray}
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
