import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account";
import List from "../screens/List";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";
import { wp } from "../utils/responsiveScreen";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.bottomTab,
        tabBarStyle: { paddingHorizontal: wp(15) },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: (props) => (
            <MaterialIcon
              name="view-dashboard"
              size={24}
              color={Colors.bottomTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: (props) => (
            <MaterialIcon name="account" size={24} color={Colors.bottomTab} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
