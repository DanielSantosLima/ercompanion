import { asyncStorageFetch } from "@/lib/functions/asyncStorageFetch";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress";
import ProgressItem from "../../components/ProgressItem";
import { Colors } from "../../lib/assets/Colors";
import { globalStyle } from "../../lib/assets/globalStyle";
import { styles } from "./styles";

interface HomeScreenProps {
  navigation: DrawerNavigationProp<any>; // Adjust type according to your navigation setup
}

type HomeScreenType = {
  talismans: string;
  sorceries: string;
  incantations: string;
  [key: string]: string;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [totalCompletion, setTotalCompletion] = useState<number>(70);
  const [talismansTotal, setTalismansTotal] = useState<string>("0");
  const [itemsValues, setItemsValues] = useState<HomeScreenType>({
    talismans: "0",
    sorceries: "0",
    incantations: "0",
  });

  const focused = useIsFocused();

  const initialFetch = async () => {
    for (const prop in itemsValues) {
      if (Object.prototype.hasOwnProperty.call(itemsValues, prop)) {
        const result = asyncStorageFetch(itemsValues[prop]);
        console.log(result);
      }
    }
    // const talismans = await asyncStorageFetch("talismans");

    // if (talismans) {
    //   const result = calculateSingleArrayValues(talismans);
    //   setTalismansTotal(() => result.text);
    //   console.log(result);
    // }
  };

  useEffect(() => {
    initialFetch();
  }, [focused]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={[globalStyle.text, styles.title]}>
          Elden Ring Companion
        </Text>
        <View style={styles.completionContainer}>
          <CustomCircularProgress
            value={totalCompletion}
            title="Your Total Completion is"
            titleStyle={styles.completionTitle}
            radius={80}
          />
        </View>
        <View style={styles.progressContainer}>
          <ProgressItem
            navigation={navigation}
            progress={0.88}
            title="Bossess"
            color={Colors.primary}
          />
          <ProgressItem
            navigation={navigation}
            progress={0.09}
            title="Weapons"
            color="green"
          />
          <ProgressItem
            navigation={navigation}
            progress={0.54}
            title="Armor"
            color="orange"
          />
          <ProgressItem
            navigation={navigation}
            progress={0.14}
            title="Shields"
            color="purple"
          />
          <ProgressItem
            navigation={navigation}
            progress={0.71}
            title={`Talismans`}
            total={talismansTotal}
            color="blue"
          />
          <ProgressItem
            navigation={navigation}
            progress={0.42}
            title="Sorceries"
            color="#269ba9"
          />
          <ProgressItem
            navigation={navigation}
            progress={0.67}
            title="Incantations"
            color="blue"
          />
          <ProgressItem
            navigation={navigation}
            progress={0.22}
            title="Spirit Ashes"
            color="blue"
          />
          <ProgressItem
            navigation={navigation}
            progress={0.33}
            title="Ashes of War"
            color="pink"
          />
          <ProgressItem
            navigation={navigation}
            progress={0.11}
            title="Cookbooks"
            color="brown"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//Bossess
//Weapons
//Armor
//Shields
//Talismans - OK
//Sorceries
//Incatations
//Spirit Summons
//Ashes of War - OK
//Cookbooks - OK
