
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { BottomTabNavigator } from "./tab";
import { TabNavigator } from "./tab";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;