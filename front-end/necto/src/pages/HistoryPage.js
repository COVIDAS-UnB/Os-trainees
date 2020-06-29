import React from "react";
import { StyleSheet, Text, View } from "react-native";

import NavBar from "../components/NavBar";

export default function HistoryPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>History Page</Text>
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
