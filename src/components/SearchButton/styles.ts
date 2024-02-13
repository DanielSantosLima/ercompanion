import { StyleSheet } from "react-native";
import { Colors } from "../../lib/assets/Colors";

export const styles = StyleSheet.create({
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
  fontSize: 20,
  fontFamily: "Mantinia"
},
searchIcon: {
backgroundColor: Colors.primary,
padding: 10,
borderRadius: 50
}
})