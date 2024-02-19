import {
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

// const keys = await AsyncStorage.getAllKeys();
// AsyncStorage.multiRemove(keys);

export const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.screenView}>
      <View style={styles.themeContainer}>
        <Text style={styles.text}>Tema Escuro</Text>
        <Switch />
      </View>
      <View style={styles.resetContainer}>
        <Text style={styles.text}>Reset Progression</Text>
        <TouchableOpacity style={styles.resetButtonContainer}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
