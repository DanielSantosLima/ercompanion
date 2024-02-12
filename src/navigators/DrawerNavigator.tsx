import { Entypo, FontAwesome5, FontAwesome6, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { Colors } from '../lib/assets/Colors';
import { ArmorScreen } from '../screens/Armor/Armor';
import { AshesOfWarScreen } from '../screens/AshesOfWar/AshesOfWar';
import { BossessScreen } from '../screens/Bossess/Bossess';
import { CookbooksScreen } from '../screens/Cookbooks/Cookbooks';
import { CrystalTearsScreen } from '../screens/CrystalTears/CrystalTears';
import { HelpScreen } from '../screens/Help/Help';
import { HomeScreen } from '../screens/Home/Home';
import { IncantationsScreen } from '../screens/Incantations/Incantations';
import { PaintingsScreen } from '../screens/Paintings/Paintings';
import { ShieldsScreen } from '../screens/Shields/Shields';
import { SorceriesScreen } from '../screens/Sorceries/Sorceries';
import { SpiritSummonsScreen } from '../screens/SpiritSummons/SpiritSummons';
import { TalismansScreen } from '../screens/Talismans/Talismans';
import { WeaponsScreen } from '../screens/Weapons/Weapons';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const styles = StyleSheet.create({
    drawerLabel: {
      alignSelf: "center",
    }
  })

    return (
      <Drawer.Navigator 
        screenOptions={{
          drawerActiveTintColor: Colors.accent,
          drawerActiveBackgroundColor: Colors.primary,
          drawerStyle: {
            backgroundColor: Colors.background
          },
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.primary
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (<FontAwesome5 name="home" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel,
            }}
        />
        <Drawer.Screen name="Bossess" component={BossessScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (<MaterialCommunityIcons name="shield-sword" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
        <Drawer.Screen name="Weapons" component={WeaponsScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (<MaterialCommunityIcons name="sword" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
        <Drawer.Screen name="Armor" component={ArmorScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => ( <FontAwesome5 name="vest" size={24} color={focused ? Colors.accent : Colors.primary}/>),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
        <Drawer.Screen name="Shields" component={ShieldsScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (<Fontisto name="shield" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
        <Drawer.Screen name="Talismans" component={TalismansScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (  <MaterialCommunityIcons name="necklace" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
        <Drawer.Screen name="Sorceries" component={SorceriesScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (  <MaterialCommunityIcons name="magic-staff" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
        <Drawer.Screen name="Icantations" component={IncantationsScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (  <FontAwesome5 name="pray" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
        <Drawer.Screen name="Spirit Summons" component={SpiritSummonsScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (  <FontAwesome6 name="ghost" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
        <Drawer.Screen name="Ashes of War" component={AshesOfWarScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (  <MaterialCommunityIcons name="run-fast" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
        <Drawer.Screen name="Cookbooks" component={CookbooksScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (  <FontAwesome6 name="book" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
        <Drawer.Screen name="Crystal Tears" component={CrystalTearsScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (  <Entypo name="drop" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
        <Drawer.Screen name="Paintings" component={PaintingsScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (  <Fontisto name="picture" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
        <Drawer.Screen name="Help" component={HelpScreen} 
          options={{
            headerTitle: "", 
            drawerIcon: ({ focused, color, size }) => (  <Entypo name="help" size={24} color={focused ? Colors.accent : Colors.primary} />),
            drawerLabelStyle: styles.drawerLabel
            }}
        />
      </Drawer.Navigator>
    );
  }

  