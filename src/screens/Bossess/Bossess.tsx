import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { AccordionComponent } from "../../components/Accordion.tsx";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { bossess } from "../../lib/data/bossess/index.ts";
import { calculateAccordionCompletion } from "../../lib/functions/calculateAccordionCompletion.ts";
import { Accordion } from "../../lib/interfaces/Accordion.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const BossessScreen = () => {
  const [bossessArray, setBossessArray] = useState<Accordion[]>(bossess);
  const [totalCompletion, setTotalCompletion] = useState<number>(0);

  const calculateCompletion = (value: CommonItem[], arrayId: number) => {
    const parentIndex = bossessArray.findIndex((item) => item.id === arrayId);

    const temp = [...bossessArray];
    temp[parentIndex].contents = value;
    setBossessArray(temp);

    const percentage = calculateAccordionCompletion(bossessArray);

    setTotalCompletion(percentage);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            valueSuffix="%"
            title="Bossess Defeated"
          />
        </View>
        <AccordionComponent
          item={bossess}
          calculateCompletion={calculateCompletion}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
