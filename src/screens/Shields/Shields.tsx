import { accordionArraySorting } from "@/lib/functions/accordionArraySorting.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { AccordionComponent } from "../../components/Accordion.tsx";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { shields } from "../../lib/data/shields/index.ts";
import { accordionCompletion } from "../../lib/functions/calculateAccordionCompletion.ts";
import { Accordion } from "../../lib/interfaces/Accordion.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const ShieldsScreen = () => {
  const [shieldsArray, setShieldsArray] = useState<Accordion[]>([]);
  const [totalCompletion, setTotalCompletion] = useState<number>(0);

  //Esse valor tem que ser inicializado com a resposta da API feita no UseEffect
  const [numberOfShields, setNumberOfShields] = useState<string>("");

  const initialSetup = async () => {
    const shieldsFetch = await AsyncStorage.getItem("shields");
    if (shieldsFetch === null) {
      const stringfiedArray = JSON.stringify(shields);
      AsyncStorage.setItem("shields", stringfiedArray);

      const calculation = accordionCompletion(shieldsArray);
      setNumberOfShields(`${calculation.total}`);
      setTotalCompletion(() => calculation.percentage);
    } else {
      const parsedShields: Accordion[] = JSON.parse(shieldsFetch);

      const calculation = accordionCompletion(parsedShields);
      const shieldsSorted = accordionArraySorting(parsedShields);

      setNumberOfShields(`${calculation.total}`);
      setShieldsArray(() => shieldsSorted);
      setTotalCompletion(() => calculation.percentage);
    }
  };

  useEffect(() => {
    initialSetup();
  }, []);

  const calculateCompletion = (value: CommonItem[], arrayId: number) => {
    const parentIndex = shieldsArray.findIndex((item) => item.id === arrayId);

    const temp = [...shieldsArray];
    temp[parentIndex].contents = value;
    setShieldsArray(() => temp);

    const calculation = accordionCompletion(shieldsArray);

    setTotalCompletion(calculation.percentage);
    setNumberOfShields(`${calculation.total}`);

    const stringfiedArray = JSON.stringify(temp);
    AsyncStorage.setItem("shields", stringfiedArray);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            valueSuffix="%"
            title="Shields Collected"
            subtitle={numberOfShields}
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
