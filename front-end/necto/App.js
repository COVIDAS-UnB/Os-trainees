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
import Sintomas from "./src/pages/Sintomas";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FF6B6B",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            marginLeft: 16,
          },
        }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen
          name="Scanner"
          component={ScannerPage}
          options={({ navigation }) => ({
            headerRight: (props) => (
              <Icon
                style={styles.bell}
                name="bell-outline"
                size={26}
                onPress={() => navigation.navigate("Notificações")}
                color="#fff"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Histórico"
          component={HistoryPage}
          options={({ navigation }) => ({
            headerRight: (props) => (
              <Icon
                style={styles.bell}
                name="bell-outline"
                size={26}
                onPress={() => navigation.navigate("Notificações")}
                color="#fff"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Mapa"
          component={MapPage}
          options={({ navigation }) => ({
            headerRight: (props) => (
              <Icon
                style={styles.bell}
                name="bell-outline"
                size={26}
                onPress={() => navigation.navigate("Notificações")}
                color="#fff"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Reportar"
          component={ReportPage}
          options={({ navigation }) => ({
            headerRight: (props) => (
              <Icon
                style={styles.bell}
                name="bell-outline"
                size={26}
                onPress={() => navigation.navigate("Notificações")}
                color="#fff"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Meu Perfil"
          component={ProfilePage}
          options={({ navigation }) => ({
            headerRight: (props) => (
              <Icon
                style={styles.bell}
                name="bell-outline"
                size={26}
                onPress={() => navigation.navigate("Notificações")}
                color="#fff"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Notificações"
          component={NotificationPage}
          options={({ navigation }) => ({
            headerRight: (props) => (
              <Icon
                style={styles.bell}
                name="bell-outline"
                size={26}
                onPress={() => navigation.navigate("Notificações")}
                color="#fff"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Sintomas"
          component={Sintomas}
          options={({ navigation }) => ({
            headerRight: (props) => (
              <Icon
                style={styles.bell}
                name="bell-outline"
                size={26}
                onPress={() => navigation.navigate("Notificações")}
                color="#fff"
              />
            ),
          })}
        />
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
