import { accordionArraySorting } from "@/lib/functions/accordionArraySorting.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { AccordionComponent } from "../../components/Accordion.tsx";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { armor } from "../../lib/data/armor/index.ts";
import { accordionCompletion } from "../../lib/functions/calculateAccordionCompletion.ts";
import { Accordion } from "../../lib/interfaces/Accordion.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const ArmorsScreen = () => {
  const [armorsArray, setArmorsArray] = useState<Accordion[]>([]);
  const [totalCompletion, setTotalCompletion] = useState<number>(0);

  //Esse valor tem que ser inicializado com a resposta da API feita no UseEffect
  const [numberOfArmor, setNumberOfArmors] = useState<string>("");

  const initialSetup = async () => {
    try {
      const armorsFetch = await AsyncStorage.getItem("armor");

      if (armorsFetch === null) {
        const stringfiedArray = JSON.stringify(armor);
        AsyncStorage.setItem("armor", stringfiedArray);

        const calculation = accordionCompletion(armorsArray);
        setNumberOfArmors(`${calculation.total}`);
        setTotalCompletion(() => calculation.percentage);
      } else {
        const parsedarmor: Accordion[] = JSON.parse(armorsFetch);

        const calculation = accordionCompletion(parsedarmor);
        const armorsSorted = accordionArraySorting(parsedarmor);

        setNumberOfArmors(`${calculation.total}`);
        setArmorsArray(() => armorsSorted);
        setTotalCompletion(() => calculation.percentage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initialSetup();
  }, []);

  const calculateCompletion = async (value: CommonItem[], arrayId: number) => {
    const parentIndex = armorsArray.findIndex((item) => item.id === arrayId);

    const temp = [...armorsArray];
    temp[parentIndex].contents = value;
    setArmorsArray(() => temp);

    const calculation = accordionCompletion(armorsArray);

    setTotalCompletion(calculation.percentage);
    setNumberOfArmors(`${calculation.total}`);

    const stringfiedArray = JSON.stringify(temp);
    await AsyncStorage.setItem("armor", stringfiedArray);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            valueSuffix="%"
            title="Armor Collected"
            subtitle={numberOfArmor}
            subtitleFontSize={14}
            progressValueFontSize={30}
            radius={70}
          />
        </View>
        <View style={{ marginBottom: "10%" }}>
          <AccordionComponent
            item={armorsArray}
            calculateCompletion={calculateCompletion}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
