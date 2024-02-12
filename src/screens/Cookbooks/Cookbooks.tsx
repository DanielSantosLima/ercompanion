import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { SearchButton } from '../../components/SearchButton/SearchButton.tsx';
import { ToggableItem } from "../../components/ToggableItem.tsx";
import { Colors } from '../../lib/assets/Colors.ts';
import { cookbooks } from "../../lib/data/cookbooks.ts/index.ts";
import { CalculateCommonItemArrayPercentage } from '../../lib/functions/CalculateCommonItemArrayPercentage.ts';
import { CommonItem } from "../../lib/interfaces/Common.ts";
import { styles } from "./index.ts";

export const CookbooksScreen = () => {
    const [totalCompletion, setTotalCompletion] = useState<number>(0);
    const [collectedItems, setCollectedItems] = useState<CommonItem[]>(cookbooks);
    const [filteredItems, setFilteredItems] = useState<CommonItem[]>(cookbooks); 
    const [textSearch, setTextSearch] = useState<string>("");

    useEffect(() => {
        filterItems();
    }, [textSearch, collectedItems]);

    const calculateCompletion = () => {
        const percentage = CalculateCommonItemArrayPercentage(collectedItems);
        setTotalCompletion(percentage);
    };
    const [isInputVisible, setIsInputVisible] = useState<boolean>(false)
    

    const filterItems = () => {
        if (textSearch.trim() === "") {
            setFilteredItems(collectedItems);
        } else {
            const searchTextLower = textSearch.toLowerCase();
            const results = collectedItems.filter(item =>
                item.name.toLowerCase().includes(searchTextLower)
            );
            setFilteredItems(results);
        }
    };

    const onItemClick = (id: number, checked: boolean) => {
        const clickedItem = filteredItems.find(item => item.id === id);
        if (clickedItem) {
            const index = collectedItems.findIndex(item => item.id === clickedItem.id);
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
      setTextSearch(''); 
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.circularProgressContainer}>
                    <Text style={styles.progressTitle}>Cookbooks Collected</Text>
                    <CircularProgress
                        value={totalCompletion}
                        radius={60}
                        progressValueColor={'#000'}
                        duration={500}
                        inActiveStrokeColor={Colors.accent}
                        activeStrokeColor={Colors.primary}
                        activeStrokeWidth={15}
                        inActiveStrokeWidth={9}
                        inActiveStrokeOpacity={0.25}
                        strokeLinecap="round"
                        valueSuffix='%'
                    />
                </View>
                {/* <View style={styles.searchContainer}>
                  <TouchableOpacity onPress={toggleInputVisibility} style={styles.searchIcon}>
                    <Feather name="search" size={30} color={Colors.accent} />
                  </TouchableOpacity>
                    {isInputVisible && (
                      <View style={styles.inputContainer}>
                      <TextInput
                          placeholder="Type to search on the page"
                          style={styles.textInput}
                          onChangeText={(text: string) => setTextSearch(text)}
                          value={textSearch}
                      />
                      <TouchableOpacity onPress={() => {
                        Keyboard.dismiss()
                        setTextSearch(prev => "")
                        }}>
                        <MaterialIcons name="clear" size={24} color={Colors.primary} />
                      </TouchableOpacity>
                    </View>
                    )}
                </View> */}
                <SearchButton 
                  isInputVisible={isInputVisible}
                  textSearch={textSearch}
                  setTextSearch={(text) => setTextSearch(text)}
                  toggleInputVisibility={toggleInputVisibility}
                />
                {filteredItems.map((item: CommonItem) => (
                    <ToggableItem
                        key={item.id}
                        item={item}
                        onItemClick={onItemClick} // Pass the onItemClick function directly
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};
