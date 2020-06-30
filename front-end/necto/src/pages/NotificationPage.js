import React from "react";
import { StyleSheet, Text, View } from "react-native";

import NavBar from "../components/NavBar";
import CheckinCard from "../components/CheckinCard";

export default function Notification({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Notification Page</Text>
      <CheckinCard />
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
