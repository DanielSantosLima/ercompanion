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
    marginVertical: "10%",
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
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  modalButton: {
    padding: 10,
    borderRadius: 4,
    marginHorizontal: "2%",
    width: "40%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Mantinia",
  },
});
