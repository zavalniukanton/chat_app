import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import ChatsScreen from "../screens/ChatsScreen";
import ComingSoonScreen from "../screens/ComingSoonScreen";
import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarStyle: { backgroundColor: COLORS.whitesmoke },
        headerStyle: { backgroundColor: COLORS.whitesmoke },
        tabBarActiveTintColor: COLORS.royalblue,
      }}
    >
      <Tab.Screen
        name="Status"
        component={ComingSoonScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-whatsapp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={ComingSoonScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={ComingSoonScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" size={size} color={color} />
          ),
          headerRight: () => (
            <Entypo
              name="new-message"
              size={18}
              color={COLORS.royalblue}
              style={{ marginRight: 15 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ComingSoonScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
