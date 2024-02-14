import { Colors } from "@/lib/assets/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenView: {
    backgroundColor: Colors.background,
    flex: 1,
    fontFamily: "Mantinia",
  },
  themeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "10%",
    marginVertical: "5%",
  },
  resetContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "10%",
  },
  resetButtonContainer: {
    borderRadius: 4,
    padding: 10,
    width: "25%",
    alignItems: "center",
    backgroundColor: Colors.error,
  },
  resetText: {
    color: "#fff",
    fontFamily: "Mantinia",
    fontSize: 20,
  },
  text: {
    fontFamily: "Mantinia",
    fontSize: 20,
  },
});
