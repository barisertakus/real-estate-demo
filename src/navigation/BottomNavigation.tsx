import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "../screens/List";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";
import { wp } from "../utils/responsiveScreen";
import rf from "../utils/responsiveFont";
import AccountStack from "./AccountStack";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/appSlice";
import i18n from "../i18n";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const language = useSelector(selectLanguage);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.bottomTab,
        tabBarStyle: { paddingHorizontal: wp(15) },
        headerShown: false,
        tabBarLabelStyle: { fontSize: rf(11) },
      }}
      initialRouteName="Account"
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
          title: i18n.t("list"),
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarIcon: (props) => (
            <MaterialIcon name="account" size={24} color={Colors.bottomTab} />
          ),
          title: i18n.t("account"),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
