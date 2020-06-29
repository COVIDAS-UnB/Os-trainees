import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Icon name="book-open-variant" size={24} color="#AAA" />
      <Icon name="map-marker" size={24} color="#AAA" />
      <Icon name="chat-alert" size={24} color="#AAA" />
      <Icon name="account" size={24} color="#AAA" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 75,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
