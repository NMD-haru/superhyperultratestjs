
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, ContactStackNavigator } from "./stack";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    initialRouteName="b"
    screenOptions={{
      tabBarActiveTintColor:'#f4511e'
    }}
  >
      <Tab.Screen name="b" component={ContactStackNavigator} options={{
        headerShown:false ,
          title: 'bang tin',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },tabBarIcon:({color , size})=>(<MaterialCommunityIcons name="comment-text-multiple"color={color} size={size}/>),
        }}/>
      <Tab.Screen name="a" component={MainStackNavigator} options={{
        headerShown:false ,
          title: 'bai tap tren lop',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },tabBarIcon:({color , size})=>(<MaterialCommunityIcons name="clipboard-list-outline"color={color} size={size}/>),
        }}/>
        <Tab.Screen name="c" component={MainStackNavigator} options={{
        headerShown:false ,
          title: 'nguoi',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },tabBarIcon:({color , size})=>(<MaterialCommunityIcons name="account-group"color={color} size={size}/>),
        }}/>
    </Tab.Navigator>
  );
};

export { BottomTabNavigator};