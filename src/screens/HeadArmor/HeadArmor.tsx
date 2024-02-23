import { ToggableItem } from "@/components/ToggableItem.tsx";
import { headArmor } from "@/lib/data/armor/headArmor.ts";
import { calculateSingleArrayValues } from "@/lib/functions/calculateCommonItemCompletion.ts";
import { commonItemAsyncStorageFetch } from "@/lib/functions/commonItemAsyncStorageFetch.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { commonItemSorting } from "../../lib/functions/commonItemArraySorting.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const HeadArmorScreen = () => {
  const sortedArray = useMemo(() => commonItemSorting(headArmor), []);
  const [headArmorsArray, setHeadArmorsArray] =
    useState<CommonItem[]>(sortedArray);

  const [totalCompletion, setTotalCompletion] = useState<number>(0);
  const [subtitle, setSubtitle] = useState<string>("");

  useEffect(() => {
    loadDataFromAsyncStorage();
  }, []);

  const loadDataFromAsyncStorage = async () => {
    try {
      const data = await commonItemAsyncStorageFetch("headArmor");
      if (data !== null) {
        //Essa linha vai dar problema. Se entrar mais items no array depois que
        // gravou no Async Storage, não vão aparecer
        setHeadArmorsArray(data);
        calculateCompletion(data);
      } else {
        const sortedArray = commonItemSorting(headArmor);
        setHeadArmorsArray(sortedArray);
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
      const index = headArmorsArray.findIndex((item) => item.id === id);
      if (index !== -1) {
        const temp = [...headArmorsArray];
        temp[index].checked = checked;
        setHeadArmorsArray(() => temp);
        AsyncStorage.setItem("headArmor", JSON.stringify(temp)); // Save to AsyncStorage
        calculateCompletion(temp);
      }
    },
    [headArmorsArray],
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            valueSuffix="%"
            title="Head Armor Collected"
            subtitle={subtitle}
            progressValueFontSize={30}
          />
        </View>
      </View>
      <FlatList
        data={headArmorsArray}
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
