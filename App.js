import * as React from 'react';
import { Button, TouchableOpacity, View , Text, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from "./tab";

import FetchAPI from "./API";
function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}>
    <FetchAPI navigation={navigation}/>
</View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} 
        options={{
          title:'home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{
          title: 'note',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Drawer.Screen name="Contact" component={BottomTabNavigator} options={{ headerShown:false }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f8f8ff",
    alignItems:'center',
    justifyContent: "center",
  },
  img:{
      height:10,
      width:10,
  }
});