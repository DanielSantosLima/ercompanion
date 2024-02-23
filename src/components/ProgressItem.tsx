import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Progress from "react-native-progress";
import { globalStyle } from "../lib/assets/globalStyle";

interface ProgressItemProps {
  navigation: DrawerNavigationProp<any>;
  title: string;
  progress: number;
  color?: string;
  total: string;
}

export const ProgressItem = (props: ProgressItemProps) => {
  return (
    <View style={[styles.barsContainer]}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(props.title);
        }}
      >
        <View style={styles.barItem}>
          <View>
            <Text style={[globalStyle.text, { fontSize: 18 }]}>
              {props.title} - {props.total}
            </Text>
          </View>
          <Progress.Bar
            progress={props.progress}
            width={250}
            color={props.color}
            height={15}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProgressItem;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    marginHorizontal: "10%",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    marginBottom: "5%",
    alignSelf: "center",
  },
  completionContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  completionTitle: {
    marginVertical: "2%",
    fontSize: 20,
  },
  barsContainer: {
    marginVertical: "5%",
    justifyContent: "flex-start",
  },
  barItem: {
    justifyContent: "flex-start",
  },
});
