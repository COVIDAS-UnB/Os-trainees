import React from "react";
import { StyleSheet, Text, ScrollView, View, Image } from "react-native";

import NavBar from "../components/NavBar";
import ScanButton from "../components/ScanButton";

export default function HistoryPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScanButton navigation={navigation} />
      <Image style={styles.map} source={require("../../assets/Map.png")} />
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
});
