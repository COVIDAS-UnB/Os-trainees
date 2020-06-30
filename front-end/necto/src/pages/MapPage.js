import React from "react";
import { StyleSheet, Text, ScrollView, View, Image } from "react-native";

import NavBar from "../components/NavBar";
import ScanButton from "../components/ScanButton";

export default function HistoryPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.map} source={require("../../assets/Map.png")} />
      <ScanButton navigation={navigation} />
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginBottom: 75,
  },
  map: {
    flex: 1,
  },
});
