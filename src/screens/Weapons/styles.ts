import { StyleSheet } from "react-native";
import { Colors } from "../../lib/assets/Colors";

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    marginHorizontal: "5%"
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: "bold"
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
  inputContainer: {
    width: "100%", 
    flexDirection: "row",
    alignItems: 'center'
  },
  textInput: {
      borderBottomWidth: 1,
      width: "80%",
      padding: 15,
      fontSize: 15
  },
  searchIcon: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 50
  },
  title: {
    fontSize: 40,
    marginBottom: "5%",
    alignSelf: "center",
  },
})