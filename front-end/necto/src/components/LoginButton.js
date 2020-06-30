import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function LoginButton({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Histórico")}
    >
      <Text style={styles.title}>Entrar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 86,
    paddingVertical: 10,
    backgroundColor: "#FF6B6B",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
