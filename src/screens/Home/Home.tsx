import { armor } from "@/lib/data/armor";
import { ashesOfWar } from "@/lib/data/ashesOfWar";
import { cookbooksData } from "@/lib/data/cookbooks.ts";
import { incantations } from "@/lib/data/incantations";
import { shields } from "@/lib/data/shields";
import { sorceries } from "@/lib/data/sorceries";
import { spiritAshes } from "@/lib/data/spiritAshes";
import { talismans } from "@/lib/data/talismans";
import { weapons } from "@/lib/data/weapons";
import { accordionAsyncStorageFetch } from "@/lib/functions/accordionAsyncStorageFetch";
import { calculateCommonItemCompletion } from "@/lib/functions/calculateCommonItemCompletion";
import { commonItemAsyncStorageFetch } from "@/lib/functions/commonItemAsyncStorageFetch";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { CustomCircularProgress } from "../../components/CustomCircularProgress/CustomCircularProgress";
import ProgressItem from "../../components/ProgressItem";
import { Colors } from "../../lib/assets/Colors";
import { globalStyle } from "../../lib/assets/globalStyle";
import { bossess } from "../../lib/data/bossess";
import { styles } from "./styles";

interface HomeScreenProps {
  navigation: DrawerNavigationProp<any>; // Adjust type according to your navigation setup
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [totalCompletion, setTotalCompletion] = useState<number>(0);

  let totalItems: number[] = [];
  let totalItemsChecked: number[] = [];

  const [bossTotal, setBossTotal] = useState<string>("");
  const [bossPercentage, setBossPercentage] = useState<number>(0);
  const [weaponsTotal, setWeaponsTotal] = useState<string>("");
  const [weaponsPercentage, setWeaponsPercentage] = useState<number>(0);
  const [armorTotal, setArmorTotal] = useState<string>("");
  const [armorPercentage, setArmorPercentage] = useState<number>(0);
  const [shieldsTotal, setShieldsTotal] = useState<string>("");
  const [shieldsPercentage, setShieldsPercentage] = useState<number>(0);

  const [talismansTotal, setTalismansTotal] = useState<string>("");
  const [talismansPercentage, setTalismansPercentage] = useState<number>(0);
  const [sorceriesTotal, setSorceriesTotal] = useState<string>("");
  const [sorceriesPercentage, setSorceriesPercentage] = useState<number>(0);
  const [incantationsTotal, setIncantationsTotal] = useState<string>("");
  const [incantationsPercentage, setIncantationsPercentage] =
    useState<number>(0);
  const [spiritAshesTotal, setSpiritAshesTotal] = useState<string>("");
  const [spiritAshesPercentage, setSpiritAshesPercentage] = useState<number>(0);
  const [ashesOfWarTotal, setAshesOfWarTotal] = useState<string>("");
  const [ashesOfWarPercentage, setAshesOfWarPercentage] = useState<number>(0);
  const [cookbooksTotal, setCookbooksTotal] = useState<string>("");
  const [cookbooksPercentage, setCookbooksPercentage] = useState<number>(0);

  const focused = useIsFocused();

  const calculateTotalCompletion = async (
    array1: number[],
    array2: number[],
  ) => {
    try {
      const total = array1.reduce((total, item) => {
        return total + item;
      }, 0);

      const totalChecked = array2.reduce((total, item) => {
        return total + item;
      }, 0);

      const percentual = (totalChecked / total) * 100;

      setTotalCompletion(() => percentual);
    } catch (error) {
      console.log(error);
    }
  };

  const initialFetch = async () => {
    try {
      totalItems = [];
      totalItemsChecked = [];

      const accordionArray = [
        { key: "bossess", data: bossess },
        { key: "weapons", data: weapons },
        { key: "armor", data: armor },
        { key: "shields", data: shields },
      ];

      const commonItemArray = [
        { key: "talismans", data: talismans },
        { key: "sorceries", data: sorceries },
        { key: "incantations", data: incantations },
        { key: "spiritAshes", data: spiritAshes },
        { key: "ashesOfWar", data: ashesOfWar },
        { key: "cookbooks", data: cookbooksData },
      ];

      for (const fetchItem of commonItemArray) {
        const fetchResult = await commonItemAsyncStorageFetch(fetchItem.key);
        if (fetchResult !== null) {
          const result = calculateCommonItemCompletion(fetchResult);
          const { total, percentage, totalItemsInArray, totalChecked } = result;
          totalItems.push(totalItemsInArray);
          totalItemsChecked.push(totalChecked);

          switch (fetchItem.key) {
            case "talismans":
              setTalismansTotal(total);
              setTalismansPercentage(percentage);
              break;
            case "sorceries":
              setSorceriesTotal(total);
              setSorceriesPercentage(percentage);
              break;
            case "incantations":
              setIncantationsTotal(total);
              setIncantationsPercentage(percentage);
              break;
            case "spiritAshes":
              setSpiritAshesTotal(total);
              setSpiritAshesPercentage(percentage);
              break;
            case "ashesOfWar":
              setAshesOfWarTotal(total);
              setAshesOfWarPercentage(percentage);
              break;
            case "cookbooks":
              setCookbooksTotal(total);
              setCookbooksPercentage(percentage);
              break;
            default:
              break;
          }
        }
      }

      for (const fetchItem of accordionArray) {
        const fetchResult = await accordionAsyncStorageFetch(
          fetchItem.key,
          fetchItem.data,
        );
        if (fetchResult) {
          const { total, percentage, totalItemsInArray, totalChecked } =
            fetchResult;
          totalItems.push(totalItemsInArray);
          totalItemsChecked.push(totalChecked);

          switch (fetchItem.key) {
            case "bossess":
              setBossTotal(total);
              setBossPercentage(percentage);
              break;
            case "weapons":
              setWeaponsTotal(total);
              setWeaponsPercentage(percentage);
              break;
            case "armor":
              setArmorTotal(total);
              setArmorPercentage(percentage);
              break;
            case "shields":
              setShieldsTotal(total);
              setShieldsPercentage(percentage);
              break;
            default:
              break;
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await initialFetch();
      const temp1 = [...totalItems];
      const temp2 = [...totalItemsChecked];
      await calculateTotalCompletion(temp1, temp2);
    };
    fetchData();
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
            subtitle={``}
            progressValueFontSize={30}
          />
        </View>
        <View style={styles.progressContainer}>
          <ProgressItem
            navigation={navigation}
            progress={bossPercentage / 100}
            title="Bossess"
            color={Colors.primary}
            total={bossTotal}
          />
          <ProgressItem
            navigation={navigation}
            progress={weaponsPercentage / 100}
            title="Weapons"
            color="green"
            total={weaponsTotal}
          />
          <ProgressItem
            navigation={navigation}
            progress={armorPercentage / 100}
            title="Armor"
            color="orange"
            total={armorTotal}
          />
          <ProgressItem
            navigation={navigation}
            progress={shieldsPercentage / 100}
            title="Shields"
            color="purple"
            total={shieldsTotal}
          />
          <ProgressItem
            navigation={navigation}
            progress={talismansPercentage / 100}
            title={`Talismans`}
            total={talismansTotal}
            color="blue"
          />
          <ProgressItem
            navigation={navigation}
            progress={sorceriesPercentage / 100}
            title="Sorceries"
            color="#269ba9"
            total={sorceriesTotal}
          />
          <ProgressItem
            navigation={navigation}
            progress={incantationsPercentage / 100}
            title="Incantations"
            color="blue"
            total={incantationsTotal}
          />
          <ProgressItem
            navigation={navigation}
            progress={spiritAshesPercentage / 100}
            title="Spirit Ashes"
            color="purple"
            total={spiritAshesTotal}
          />
          <ProgressItem
            navigation={navigation}
            progress={ashesOfWarPercentage / 100}
            title="Ashes of War"
            color="grey"
            total={ashesOfWarTotal}
          />
          <ProgressItem
            navigation={navigation}
            progress={cookbooksPercentage / 100}
            title="Cookbooks"
            color="brown"
            total={cookbooksTotal}
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
