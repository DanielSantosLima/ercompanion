import { accordionArraySorting } from "@/lib/functions/accordionArraySorting.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { AccordionComponent } from "../../components/Accordion.tsx";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { bossess } from "../../lib/data/bossess/index.ts";
import { accordionCompletion } from "../../lib/functions/calculateAccordionCompletion.ts";
import { Accordion } from "../../lib/interfaces/Accordion.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const BossessScreen = () => {
  const [bossessArray, setBossessArray] = useState<Accordion[]>([]);
  const [totalCompletion, setTotalCompletion] = useState<number>(0);

  //Esse valor tem que ser inicializado com a resposta da API feita no UseEffect
  const [numberOfBosses, setNumberOfBossess] = useState<string>("");

  const initialSetup = async () => {
    const bossessFetch = await AsyncStorage.getItem("bossess");
    if (bossessFetch === null) {
      const stringfiedArray = JSON.stringify(bossess);
      AsyncStorage.setItem("bossess", stringfiedArray);

      const calculation = accordionCompletion(bossessArray);
      setNumberOfBossess(`${calculation.total}`);
      setTotalCompletion(() => calculation.percentage);
    } else {
      const parsedbossess: Accordion[] = JSON.parse(bossessFetch);

      const calculation = accordionCompletion(parsedbossess);
      const bossessSorted = accordionArraySorting(parsedbossess);

      setNumberOfBossess(`${calculation.total}`);
      setBossessArray(() => bossessSorted);
      setTotalCompletion(() => calculation.percentage);
    }
  };

  useEffect(() => {
    initialSetup();
  }, []);

  const calculateCompletion = (value: CommonItem[], arrayId: number) => {
    const parentIndex = bossessArray.findIndex((item) => item.id === arrayId);

    const temp = [...bossessArray];
    temp[parentIndex].contents = value;
    setBossessArray(() => temp);

    const calculation = accordionCompletion(bossessArray);

    setTotalCompletion(calculation.percentage);
    setNumberOfBossess(`${calculation.total}`);

    const stringfiedArray = JSON.stringify(temp);
    AsyncStorage.setItem("bossess", stringfiedArray);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            valueSuffix="%"
            title="Bossess Defeated"
            subtitle={numberOfBosses}
            subtitleFontSize={14}
            progressValueFontSize={30}
            radius={70}
          />
        </View>
        <View style={{ marginBottom: "10%" }}>
          <AccordionComponent
            item={bossessArray}
            calculateCompletion={calculateCompletion}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
