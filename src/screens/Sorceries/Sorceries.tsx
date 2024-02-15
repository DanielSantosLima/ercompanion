import { sorceries } from "@/lib/data/sorceries/index.ts";
import { calculateSingleArrayValues } from "@/lib/functions/calculateSingleArrayValues.ts";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
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
    calculateCompletion();
  }, []);

  const calculateCompletion = () => {
    const result = calculateSingleArrayValues(sorceriesArray);

    setTotalCompletion((prev) => result.percentage);
    setSubtitle((prev) => result.text);
  };

  const onItemClick = (id: number, checked: boolean) => {
    const index = sorceriesArray.findIndex((item) => item.id === id);
    if (index !== -1) {
      const temp = [...sorceriesArray];
      temp[index].checked = checked;
      setSorceriesArray(temp);
      calculateCompletion();
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            valueSuffix="%"
            title="Sorceries Collected"
            subtitle={subtitle}
            progressValueFontSize={30}
          />
        </View>
        {sorceriesArray.map((item: CommonItem) => (
          <ToggableItem key={item.id} item={item} onItemClick={onItemClick} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
