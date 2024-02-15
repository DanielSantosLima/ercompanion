import { calculateSingleArrayValues } from "@/lib/functions/calculateSingleArrayValues.ts";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { ToggableItem } from "../../components/ToggableItem.tsx";
import { talismans } from "../../lib/data/talismans/index.ts";
import { arraySorting } from "../../lib/functions/arraySorting.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const TalismansScreen = () => {
  const sortedArray = arraySorting(talismans);
  const [talismansArray, setTalismansArray] =
    useState<CommonItem[]>(sortedArray);

  const [totalCompletion, setTotalCompletion] = useState<number>(0);
  const [subtitle, setSubtitle] = useState<string>("");

  useEffect(() => {
    calculateCompletion();
  }, []);

  const calculateCompletion = () => {
    const result = calculateSingleArrayValues(talismansArray);
    setTotalCompletion((prev) => result.percentage);
    setSubtitle((prev) => result.text);
  };

  const onItemClick = (id: number, checked: boolean) => {
    const index = talismansArray.findIndex((item) => item.id === id);
    if (index !== -1) {
      const temp = [...talismansArray];
      temp[index].checked = checked;
      setTalismansArray(temp);
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
            title="Talismans Collected"
            subtitle={subtitle}
            progressValueFontSize={30}
          />
        </View>
        {talismansArray.map((item: CommonItem) => (
          <ToggableItem key={item.id} item={item} onItemClick={onItemClick} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
