import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import BiscoitoDaSorte from './src/screens/Biscoito/BiscoitoDaSorte';
import SettingsScreen from './src/screens/Configs/SettingsScreen';
import GuiaTuristico from './src/screens/GuiaTuristico/GuiaTuristico';
import PontosHistoricos from './src/screens/PontosHistoricos/PontosHistoricos';
import Restaurantes from './src/screens/Restaurantes/Restaurantes';
import AtivadadesArLivre from './src/screens/AtividadesArLivre/AtividadesArLivre';
import HomePresPrud from './src/screens/HomePresPrud/HomePresPrud';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Biscoito da sorte" component={BiscoitoDaSorte} />
        <Stack.Screen name="Configurações" component={SettingsScreen} />
        <Stack.Screen name="Guia Turístico" component={GuiaTuristico} />
        <Stack.Screen name="Pontos Históricos" component={PontosHistoricos} />
        <Stack.Screen name="Restaurantes" component={Restaurantes} />
        <Stack.Screen name="Atividades ao Ar Livre" component={AtivadadesArLivre} />
        <Stack.Screen name="Informativo Presidente Prudente" component={HomePresPrud} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
