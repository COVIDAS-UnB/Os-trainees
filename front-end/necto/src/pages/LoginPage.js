import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
