import { AccordionComponent } from "@/components/Accordion";
import { CustomCircularProgress } from "@/components/CustomCircularProgress/CustomCircularProgress";
import { armor } from "@/lib/data/armor";
import { accordionArraySorting } from "@/lib/functions/accordionArraySorting";
import { calculateAccordionCompletion } from "@/lib/functions/calculateAccordionCompletion";
import { Accordion } from "@/lib/interfaces/Accordion";
import { CommonItem } from "@/lib/interfaces/Common";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { styles } from "./styles";

export const ArmorsScreen = () => {
  const armorsSorted = accordionArraySorting(armor);

  const [armorsArray, setArmorsArray] = useState<Accordion[]>(armorsSorted);

  const [totalCompletion, setTotalCompletion] = useState<number>(0);

  //Esse valor tem que ser inicializado com a resposta da API feita no UseEffect
  const [numberOfArmor, setNumberOfArmor] = useState<string>("");

  useEffect(() => {
    const calculation = calculateAccordionCompletion(armorsArray);

    setNumberOfArmor(`${calculation.totalChecked}/${calculation.totalInArray}`);
  }, []);

  const calculateCompletion = (value: CommonItem[], arrayId: number) => {
    const parentIndex = armorsArray.findIndex((item) => item.id === arrayId);

    const temp = [...armorsArray];
    temp[parentIndex].contents = value;
    setArmorsArray(temp);

    const calculation = calculateAccordionCompletion(armorsArray);

    setTotalCompletion(calculation.percentage);
    setNumberOfArmor(`${calculation.totalChecked}/${calculation.totalInArray}`);
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
