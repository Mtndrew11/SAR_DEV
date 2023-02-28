// In App.js in a new project
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen, { SocialButton } from "react-native-login-screen";
import { DrawerContent } from './Screens/DrawerContent';

// Import screens
import HomeScreen from './Screens/HomeScreen';
import ActiveSearchesScreen from './Screens/ActiveSearchesScreen';
import MapScreen from './Screens/MapScreen';
import TeamsScreen from './Screens/TeamsScreen';
import ResourcesScreen from './Screens/ResourcesScreen';
import SettingsScreen from './Screens/SettingsScreen';


// Add a page to create/modify teams/members etc.
      // Create a Team
      // Add a lost person's info
      // Modify 

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={ props => <DrawerContent {...props} /> }>
        <Drawer.Screen name="Login"           component={LoginScreen} />
        <Drawer.Screen name="Home"            component={HomeScreen} />
        <Drawer.Screen name="Active Searches" component={ActiveSearchesScreen} />
        <Drawer.Screen name="Map"             component={MapScreen} />
        <Drawer.Screen name="Teams"           component={TeamsScreen} />
        <Drawer.Screen name="Resources"       component={ResourcesScreen} />
        <Drawer.Screen name="Settings"        component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App ;