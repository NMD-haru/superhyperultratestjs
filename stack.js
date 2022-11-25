import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home1 from "./Home";
import About1 from "./About";
import Contact1 from "./Contact";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home1} options={{ }}/>
      <Stack.Screen name="About" component={About1} options={{  }}/>
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contact" component={Contact1} options={{  }}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };