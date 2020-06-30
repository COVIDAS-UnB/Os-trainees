import React from "react";
import { View, TextInput, Text, Image, StyleSheet, Button } from "react-native";

import LoginButton from "../components/LoginButton";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.Logo} source={require("../../assets/Logo.png")} />
      <View>
        <View style={styles.form}>
          <Text style={styles.subTitle}> Matrícula </Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.form}>
          <Text style={styles.sub}> Senha </Text>
          <TextInput style={styles.input}></TextInput>
        </View>
      </View>
      <LoginButton navigation={navigation} />
      <View style={styles.actions}>
        <Text style={styles.text}> Não está cadastradx?</Text>
        <Text style={styles.registro}>Registre-se</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  form: {
    marginTop: 50,
  },
  input: {
    alignSelf: "center",
    width: 250,
    borderColor: "#000",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingLeft: 16,
    paddingVertical: 5,
  },
  button: {
    height: 37,
    width: 210,
  },
  actions: {
    alignItems: "center",
  },
});

export default Login;
