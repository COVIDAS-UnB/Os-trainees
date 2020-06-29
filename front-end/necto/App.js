import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import NavBar from "./src/components/NavBar";
import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Histórico" />
      <Text>Open up App.js to start working on your app!</Text>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
