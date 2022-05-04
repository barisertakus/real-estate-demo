import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";
import AccountInfo from "../screens/AccountInfo";

const Stack = createStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="AccountInfo" component={AccountInfo} />
    </Stack.Navigator>
  );
}

export default AccountStack;
