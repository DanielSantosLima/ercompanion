import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress";
import ProgressItem from "../../components/ProgressItem";
import { Colors } from "../../lib/assets/Colors";
import { globalStyle } from "../../lib/assets/globalStyle";
import { styles } from "./styles";
// const keys = await AsyncStorage.getAllKeys();
// AsyncStorage.multiRemove(keys);

interface HomeScreenProps {
  navigation: DrawerNavigationProp<any>; // Adjust type according to your navigation setup
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [totalCompletion, setTotalCompletion] = useState<number>(70);

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
            title="Talismans"
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
