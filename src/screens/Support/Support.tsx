import { Colors } from "@/lib/assets/Colors";
import { globalStyle } from "@/lib/assets/globalStyle";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export const SuportUsScreen = () => {
  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: Colors.background,
      alignItems: "center",
    },
    title: {},
    text: {
      ...globalStyle.text,
      fontSize: 20,
      marginBottom: "5%",
      marginLeft: "2%",
    },
  });

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={[styles.text, { fontSize: 30 }]}>Greetings!!!</Text>
      <Text style={[styles.text]}>
        This is a passion project designed and produced by a single, lowly
        Tarnished
      </Text>
      <Text style={[styles.text]}>
        If you liked the app and, somehow want to support its creator, you can
        toss a few runes to him using one of the channels below
      </Text>
      <Text style={[styles.text]}>
        Theres a lot of things designed to improve this app in the future,
        including the addition of the DLC stuff, so you can track your progress
        and farm the items you need/want
      </Text>
      <Text style={[styles.text, { fontSize: 30 }]}>
        May Grace bless you in the path of the Elden Lord
      </Text>
    </SafeAreaView>
  );
};
