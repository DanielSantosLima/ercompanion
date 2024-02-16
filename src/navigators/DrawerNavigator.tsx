import { ArmorsScreen } from "@/screens/Armor/Armor";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { Colors } from "../lib/assets/Colors";
import { AshesOfWarScreen } from "../screens/AshesOfWar/AshesOfWar";
import { BossessScreen } from "../screens/Bossess/Bossess";
import { CookbooksScreen } from "../screens/Cookbooks/Cookbooks";
import { FAQScreen } from "../screens/FAQ/FAQ";
import { HomeScreen } from "../screens/Home/Home";
import { IncantationsScreen } from "../screens/Incantations/Incantations";
import { SettingsScreen } from "../screens/Settings/Settings";
import { ShieldsScreen } from "../screens/Shields/Shields";
import { SorceriesScreen } from "../screens/Sorceries/Sorceries";
import { SpiritAshesScreen } from "../screens/SpiritSummons/SpiritSummons";
import { SuportUsScreen } from "../screens/Support/Support";
import { TalismansScreen } from "../screens/Talismans/Talismans";
import { WeaponsScreen } from "../screens/Weapons/Weapons";

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const styles = StyleSheet.create({
    drawerLabel: {
      alignSelf: "center",
      fontFamily: "Mantinia",
      fontSize: 20,
    },
  });

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: Colors.primary,
        drawerActiveTintColor: Colors.accent,
        drawerStyle: {
          backgroundColor: Colors.background,
        },

        headerStyle: {
          backgroundColor: Colors.background,
          shadowColor: "transparent",
          elevation: 0,
        },
        headerTintColor: Colors.primary,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name="home"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Bossess"
        component={BossessScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="shield-sword"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Weapons"
        component={WeaponsScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="sword"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Armor"
        component={ArmorsScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name="vest"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Shields"
        component={ShieldsScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <Fontisto
              name="shield"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Talismans"
        component={TalismansScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="necklace"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Sorceries"
        component={SorceriesScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="magic-staff"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Incantations"
        component={IncantationsScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name="pray"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Spirit Ashes"
        component={SpiritAshesScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome6
              name="ghost"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Ashes of War"
        component={AshesOfWarScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="run-fast"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Cookbooks"
        component={CookbooksScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome6
              name="book"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      {/* <Drawer.Screen
        name="Crystal Tears"
        component={CrystalTearsScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <Entypo
              name="drop"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Paintings"
        component={PaintingsScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <Fontisto
              name="picture"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      /> */}
      <Drawer.Screen
        name="FAQ"
        component={FAQScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <Entypo
              name="help"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Support Us"
        component={SuportUsScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome
              name="money"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome
              name="gears"
              size={24}
              color={focused ? Colors.accent : Colors.primary}
            />
          ),
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
    </Drawer.Navigator>
  );
}
