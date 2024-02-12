import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import ProgressItem from "../../components/ProgressItem";
import { Colors } from '../../lib/assets/Colors';
import { styles } from './styles';

interface HomeScreenProps {
    navigation: DrawerNavigationProp<any>; // Adjust type according to your navigation setup
  }

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [totalCompletion, setTotalCompletion] = useState<number>(70)

    return (
      <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Elden Ring Companion</Text>
                <View style={styles.completionContainer}>
                <Text style={styles.completionTitle}>Your total completion is</Text>
                <CircularProgress
                    value={totalCompletion}
                    radius={100}
                    progressValueColor={'#000'}
                    duration={2000}
                    inActiveStrokeColor='#2ecc71'
                    activeStrokeWidth={15}
                    inActiveStrokeWidth={9}
                    inActiveStrokeOpacity={0.25}
                    strokeLinecap="round"
                    valueSuffix='%'
                />
                </View>
                <ProgressItem navigation={navigation} progress={0.88} title="Bossess" color={Colors.primary} />
                <ProgressItem navigation={navigation} progress={0.09} title="Weapons" color="green" />
                <ProgressItem navigation={navigation} progress={0.54} title="Armor" color="orange" />
                <ProgressItem navigation={navigation} progress={0.14} title="Shields" color="purple" />
                <ProgressItem navigation={navigation} progress={0.71} title="Talismans" color="blue" />
                <ProgressItem navigation={navigation} progress={0.42} title="Sorceries" color="blue" />
                <ProgressItem navigation={navigation} progress={0.67} title="Incantations" color="blue" />
                <ProgressItem navigation={navigation} progress={0.22} title="Spirit Summons" color="blue" />
                <ProgressItem navigation={navigation} progress={0.33} title="Ashes of War" color="pink" />{/* OK*/}
                <ProgressItem navigation={navigation} progress={0.11} title="Cookbooks" color="brown" />{/* OK*/}
                <ProgressItem navigation={navigation} progress={0.62} title="Crystal Tears" color="cyan" />{/* OK*/}
                <ProgressItem navigation={navigation} progress={0.59} title="Paintings" color="gray" />{/* OK*/}
            </ScrollView>
    </SafeAreaView>
    )
}

