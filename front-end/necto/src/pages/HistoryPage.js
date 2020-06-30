import React from "react";
import { StyleSheet, Text, View } from "react-native";

import NavBar from "../components/NavBar";
import ScanButton from "../components/ScanButton";

export default function HistoryPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScanButton navigation={navigation} />
      <NavBar style={styles.navbar} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
