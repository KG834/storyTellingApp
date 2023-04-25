import * as React from 'react';
import DrawerNavigator from './navigation/drawerNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
   <NavigationContainer>
    <DrawerNavigator/>
   </NavigationContainer>
  );
}

//https://nodejs.org/