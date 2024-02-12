import { StyleSheet } from "react-native";
import { Colors } from "../../lib/assets/Colors";

export const styles = StyleSheet.create({
  safeArea: {
      flex: 1,
      backgroundColor: Colors.background
  },
  container: {
    flex: 1,
    marginHorizontal: "10%",
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 30,
    marginBottom: "5%",
    alignSelf: "center"
  },
  completionContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  completionTitle: {
    marginVertical: "2%",
    fontSize: 20,
  },
  barsContainer: {
    marginVertical: "5%",
    justifyContent: "flex-start"
  },
  barItem: {
    justifyContent: "flex-start"
  }
});