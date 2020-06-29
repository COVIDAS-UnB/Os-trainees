import React from "react";
import { StyleSheet } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HistoryPage from "./src/pages/HistoryPage";
import LoginPage from "./src/pages/LoginPage";
import ScannerPage from "./src/pages/ScannerPage";
import MapPage from "./src/pages/MapPage";
import ReportPage from "./src/pages/ReportPage";
import ProfilePage from "./src/pages/ProfilePage";
import NotificationPage from "./src/pages/NotificationPage";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Histórico"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FF6B6B",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            marginLeft: 16,
          },
          headerRight: () => (
            <Icon
              style={styles.bell}
              name="bell-outline"
              size={26}
              onPress={() => alert("This is a button!")}
              color="#fff"
            />
          ),
        }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Scanner" component={ScannerPage} />
        <Stack.Screen name="Histórico" component={HistoryPage} />
        <Stack.Screen name="Mapa" component={MapPage} />
        <Stack.Screen name="Reportar" component={ReportPage} />
        <Stack.Screen name="Meu Perfil" component={ProfilePage} />
        <Stack.Screen name="Notificações" component={NotificationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bell: {
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
