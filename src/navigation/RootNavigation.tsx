import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
