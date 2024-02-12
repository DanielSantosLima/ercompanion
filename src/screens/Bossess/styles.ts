import { StyleSheet } from "react-native";
import { Colors } from "../../lib/assets/Colors";

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    marginHorizontal: "5%",
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: "2%"
  },
  circularProgressContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  searchContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      marginVertical: "5%",
      width: "100%"
  },
  textInput: {
      borderBottomWidth: 1,
      width: "80%",
      padding: 15,
      fontSize: 15
  }
})