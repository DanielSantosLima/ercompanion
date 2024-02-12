import { NavigationContainer } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import { useState } from 'react';
import 'react-native-gesture-handler';
import { DrawerNavigator } from './src/navigators/DrawerNavigator';

export default function App() {
  const db = SQLite.openDatabase("ercompanion.db")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
    
  );
}


