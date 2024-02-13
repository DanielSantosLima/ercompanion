import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress.tsx";
import { SearchButton } from "../../components/SearchButton/SearchButton.tsx";
import { ToggableItem } from "../../components/ToggableItem.tsx";
import { Colors } from "../../lib/assets/Colors.ts";
import { ashesOfWar } from "../../lib/data/ashesOfWar/index.ts";
import { CalculateCommonItemArrayPercentage } from "../../lib/functions/CalculateCommonItemArrayPercentage.ts";
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./styles.ts";

export const ArmorScreen = () => {
  const [totalCompletion, setTotalCompletion] = useState<number>(0);
  const [collectedItems, setCollectedItems] =
    useState<CommonItem[]>(ashesOfWar);
  const [filteredItems, setFilteredItems] = useState<CommonItem[]>(ashesOfWar);
  const [textSearch, setTextSearch] = useState<string>("");

  useEffect(() => {
    filterItems();
  }, [textSearch, collectedItems]);

  const calculateCompletion = () => {
    const percentage = CalculateCommonItemArrayPercentage(collectedItems);
    setTotalCompletion(percentage);
  };
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

  const filterItems = () => {
    if (textSearch.trim() === "") {
      setFilteredItems(collectedItems);
    } else {
      const searchTextLower = textSearch.toLowerCase();
      const results = collectedItems.filter((item) =>
        item.name.toLowerCase().includes(searchTextLower)
      );
      setFilteredItems(results);
    }
  };

  const onItemClick = (id: number, checked: boolean) => {
    const clickedItem = filteredItems.find((item) => item.id === id);
    if (clickedItem) {
      const index = collectedItems.findIndex(
        (item) => item.id === clickedItem.id
      );
      if (index !== -1) {
        const temp = [...collectedItems];
        temp[index].checked = checked;
        setCollectedItems(temp);
        calculateCompletion();
      }
    }
  };

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
    setTextSearch("");
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.circularProgressContainer}>
          <Text style={styles.progressTitle}>Armors Collected</Text>
          <CustomCircularProgress
            value={totalCompletion}
            progressValueColor={"#000"}
            inActiveStrokeColor="#2ecc71"
            activeStrokeColor={Colors.primary}
          />
        </View>
        <SearchButton
          isInputVisible={isInputVisible}
          textSearch={textSearch}
          setTextSearch={(text) => setTextSearch(text)}
          toggleInputVisibility={toggleInputVisibility}
        />
        {filteredItems.map((item: CommonItem) => (
          <ToggableItem key={item.id} item={item} onItemClick={onItemClick} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
