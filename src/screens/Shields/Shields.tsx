import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { AccordionComponent } from "../../components/Accordion.tsx";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { shields } from "../../lib/data/shields/index.ts";
import { accordionArraySorting } from "../../lib/functions/accordionArraySorting.ts";
import { calculateAccordionCompletion } from "../../lib/functions/calculateAccordionCompletion.ts";
import { Accordion } from "../../lib/interfaces/Accordion.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const ShieldsScreen = () => {
  const shieldsSorted = accordionArraySorting(shields);

  const [shieldsArray, setShieldsArray] = useState<Accordion[]>(shieldsSorted);
  const [totalCompletion, setTotalCompletion] = useState<number>(0);

  //Esse valor tem que ser inicializado com a resposta da API feita no UseEffect
  const [numberOfBossess, setNumberOfBossess] = useState<string>("");

  useEffect(() => {
    const calculation = calculateAccordionCompletion(shieldsArray);

    setNumberOfBossess(
      `${calculation.totalChecked}/${calculation.totalInArray}`
    );
  }, []);

  const calculateCompletion = (value: CommonItem[], arrayId: number) => {
    const parentIndex = shieldsArray.findIndex((item) => item.id === arrayId);

    const temp = [...shieldsArray];
    temp[parentIndex].contents = value;
    setShieldsArray(temp);

    const calculation = calculateAccordionCompletion(shieldsArray);

    setTotalCompletion(calculation.percentage);
    setNumberOfBossess(
      `${calculation.totalChecked}/${calculation.totalInArray}`
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            valueSuffix="%"
            title="Shields Collected"
            subtitle={numberOfBossess}
            subtitleFontSize={14}
            progressValueFontSize={30}
            radius={70}
          />
        </View>
        <View style={{ marginBottom: "10%" }}>
          <AccordionComponent
            item={shieldsArray}
            calculateCompletion={calculateCompletion}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
