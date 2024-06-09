import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/Home/HomeScreen';
import SettingsScreen from '../../screens/Configs/SettingsScreen';
import HomePresPrud from '../../screens/HomePresPrud/HomePresPrud';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePresPrud} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}