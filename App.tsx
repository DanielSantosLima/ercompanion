import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { DrawerNavigator } from "./src/navigators/DrawerNavigator";

export default function App() {
  const [loaded] = useFonts({
    Mantinia: require("./assets/fonts/Mantinia Regular.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
