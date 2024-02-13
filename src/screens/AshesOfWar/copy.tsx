import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { ToggableItem } from "../../components/ToggableItem.tsx";
import { Colors } from "../../lib/assets/Colors.ts";
import { ashesOfWar } from "../../lib/data/ashesOfWar/index.ts";
import { CalculateCommonItemArrayPercentage } from "../../lib/functions/CalculateCommonItemArrayPercentage.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const AshesOfWarScreen = () => {
  const [totalCompletion, setTotalCompletion] = useState<number>(0);
  const [collectedItems, setCollectedItems] =
    useState<CommonItem[]>(ashesOfWar);
  const [textSearch, setTextSearch] = useState<string>("");

  const calculateCompletion = (value: CommonItem, itemId: number) => {
    const itemIndex = collectedItems.findIndex(
      (element) => element.id === itemId
    );

    const temp = [...collectedItems];
    temp[itemIndex] = value;
    setCollectedItems(temp);

    const percentage = CalculateCommonItemArrayPercentage(collectedItems);

    setTotalCompletion(percentage);
  };

  const searchValues = (value: string, array: CommonItem[]): void => {
    const searchTextLower = value.toLowerCase();
    const results = array.filter((item) =>
      item.name.toLowerCase().includes(searchTextLower)
    );
    setCollectedItems(results);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <Text style={styles.progressTitle}>Ashes of War Collected</Text>
          <CircularProgress
            value={totalCompletion}
            radius={60}
            progressValueColor={"#000"}
            duration={500}
            inActiveStrokeColor={Colors.accent}
            activeStrokeColor={Colors.primary}
            activeStrokeWidth={15}
            inActiveStrokeWidth={9}
            inActiveStrokeOpacity={0.25}
            strokeLinecap="round"
            valueSuffix="%"
          />
        </View>
        <View style={styles.searchContainer}>
          <Feather name="search" size={24} color="#1b5e20" />
          <TextInput
            placeholder="Type to search on the page"
            style={styles.textInput}
            onChangeText={(text: string) => {
              setTextSearch(text);
              searchValues(text, collectedItems);
            }}
            value={textSearch}
          />
        </View>
        {collectedItems.map((item: CommonItem) => (
          <ToggableItem
            key={item.id}
            item={item}
            onItemClick={(id: number, checked: boolean) => {
              const index = collectedItems.findIndex((item) => item.id === id);

              if (index !== -1) {
                const temp = [...collectedItems];
                temp[index].checked = checked;
                setCollectedItems(temp);
                calculateCompletion(item, item.id);
              }
            }}
            // handleCheck={(value: boolean) => {handleCheckChange({id: item.id, checked: value, externalLink: item.externalLink, name: item.name})}}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
