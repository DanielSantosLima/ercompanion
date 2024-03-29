import { ToggableItem } from "@/components/ToggableItem.tsx";
import { talismans } from "@/lib/data/talismans/index.ts";
import { calculateCommonItemCompletion } from "@/lib/functions/calculateCommonItemCompletion.ts";
import { commonItemArraySorting } from "@/lib/functions/commonItemArraySorting.ts";
import { commonItemAsyncStorageFetch } from "@/lib/functions/commonItemAsyncStorageFetch.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const TalismansScreen = () => {
  const sortedArray = useMemo(() => commonItemArraySorting(talismans), []);
  const [talismansArray, setTalismansArray] =
    useState<CommonItem[]>(sortedArray);

  const [totalCompletion, setTotalCompletion] = useState<number>(0);
  const [subtitle, setSubtitle] = useState<string>("");

  useEffect(() => {
    loadDataFromAsyncStorage();
  }, []);

  const loadDataFromAsyncStorage = async () => {
    try {
      const data = await commonItemAsyncStorageFetch("talismans");
      if (data !== null) {
        //Essa linha vai dar problema. Se entrar mais items no array depois que
        // gravou no Async Storage, não vão aparecer
        setTalismansArray(data);
        calculateCompletion(data);
      } else {
        const stringfy = JSON.stringify(talismans);
        await AsyncStorage.setItem("talismans", stringfy);
        const sortedArray = commonItemArraySorting(talismans);
        setTalismansArray(sortedArray);
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
            title="Talismans Collected"
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
