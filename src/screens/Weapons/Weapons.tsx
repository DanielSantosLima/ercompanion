import { accordionArraySorting } from "@/lib/functions/accordionArraySorting.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { AccordionComponent } from "../../components/Accordion.tsx";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { weapons } from "../../lib/data/weapons/index.ts";
import { accordionCompletion } from "../../lib/functions/calculateAccordionCompletion.ts";
import { Accordion } from "../../lib/interfaces/Accordion.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const WeaponsScreen = () => {
  const [weaponsArray, setWeaponsArray] = useState<Accordion[]>([]);
  const [totalCompletion, setTotalCompletion] = useState<number>(0);

  //Esse valor tem que ser inicializado com a resposta da API feita no UseEffect
  const [numberOfWeapons, setNumberOfWeapons] = useState<string>("");

  const initialSetup = async () => {
    const weaponsFetch = await AsyncStorage.getItem("weapons");
    if (weaponsFetch === null) {
      const stringfiedArray = JSON.stringify(weapons);
      AsyncStorage.setItem("weapons", stringfiedArray);

      const calculation = accordionCompletion(weaponsArray);
      setNumberOfWeapons(`${calculation.total}`);
      setTotalCompletion(() => calculation.percentage);
    } else {
      const parsedWeapons: Accordion[] = JSON.parse(weaponsFetch);

      const calculation = accordionCompletion(parsedWeapons);
      const wesponsSorted = accordionArraySorting(parsedWeapons);

      setNumberOfWeapons(`${calculation.total}`);
      setWeaponsArray(() => wesponsSorted);
      setTotalCompletion(() => calculation.percentage);
    }
  };

  useEffect(() => {
    initialSetup();
  }, []);

  const calculateCompletion = (value: CommonItem[], arrayId: number) => {
    const parentIndex = weaponsArray.findIndex((item) => item.id === arrayId);

    const temp = [...weaponsArray];
    temp[parentIndex].contents = value;
    setWeaponsArray(() => temp);

    const calculation = accordionCompletion(weaponsArray);

    setTotalCompletion(calculation.percentage);
    setNumberOfWeapons(`${calculation.total}`);

    const stringfiedArray = JSON.stringify(temp);
    AsyncStorage.setItem("weapons", stringfiedArray);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            valueSuffix="%"
            title="Weapons Collected"
            subtitle={numberOfWeapons}
            subtitleFontSize={14}
            progressValueFontSize={30}
            radius={70}
          />
        </View>
        <View style={{ marginBottom: "10%" }}>
          <AccordionComponent
            item={weaponsArray}
            calculateCompletion={calculateCompletion}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
