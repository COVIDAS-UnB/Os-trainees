import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import NavBar from "./src/components/NavBar";
import Header from "./src/components/Header";

export default function App() {

  return (
    <View style={styles.container}>
      <Header title="Sintomas" />

      <Text style={styles.title}>Quais sintomas você está sentindo?</Text>

      <View style={styles.symptoms}>
        <Text style={styles.card}>Tosse seca</Text>
        <Text style={styles.card}>Febre</Text>
        <Text style={styles.card}>Dificuldade de respirar</Text>
        <Text style={styles.card}>Fadiga</Text>
        <Text style={styles.card}>Diarreia</Text>
        <Text style={styles.card}>Dor de cabeça</Text>
      </View>

      <Text style={styles.noSymptom}>Nenhum desses</Text>

      <Text onPress={() => alert("Obrigado por registrar seus sintomas!")} style={styles.enviar}>
        Enviar<Icon name="arrow-right" size={24} color="#FF6B6B"/>
      </Text> 
      
      
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4e4e4",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 16,
    alignItems: "center",
  },

  card: {
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 15,
    margin: 5,
  },

  symptoms: {
    width: 230,
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-around",
  },

  noSymptom: {
    fontSize: 16,
    backgroundColor: "#A8A7AB",
    textAlign: "center",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    width: 220,
    margin: 5,
  },

  touch: {
    backgroundColor: "black",
  },

  enviar: {
    color: "#FF6B6B",
    alignItems: "flex-end",
    justifyContent: "center",
    fontSize: 16,
    marginRight: 5,
  },
});
