import *as React from "react";
import {View, StyleSheet, Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Feed from "../screens/feed";
import createStory from "../screens/createStory";
import Ionicons from 'react-native-vector-icons'

const Tab  = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
    return(
        <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          var iconName;
          if(route.name === "Feed"){
            iconName = focused ? "home-sharp" : "home-outline"
          }else if(route.name === "Story"){
            iconName = focused ? "create" : "create-outline"
          }
          return <Ionicons name={iconName} size={size} color/>
        }
        })}>
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="Story" component={createStory}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;