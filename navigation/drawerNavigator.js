import *as React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/profile';
import BottomTabNavigator from "./bottomTabNavigator"

const Drawer = createDrawerNavigator();

const DrawerNavigator=()=>{
    return(
       <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BottomTabNavigator}/>
        <Drawer.Screen name="profile" component={Profile}/>
       </Drawer.Navigator>
    )
}

export default DrawerNavigator;