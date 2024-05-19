import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import BiscoitoDaSorte from './src/screens/Biscoito/BiscoitoDaSorte';
import SettingsScreen from './src/screens/Configs/SettingsScreen';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Biscoito da sorte" component={BiscoitoDaSorte} />
        <Stack.Screen name="Configurações" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
