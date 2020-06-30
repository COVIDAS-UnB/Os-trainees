import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import NavBar from "../components/NavBar";

export default function Sintomas({ navigation }) {
  const handleInform = () => {
    alert("Obrigado por registrar seus sintomas!");
    navigation.navigate("Histórico");
  };

  const handleDiagnostic = () => {
    alert("Obrigado por iformar!");
    navigation.navigate("Histórico");
  };

  const [tosse, setTosse] = useState(false);
  const [febre, setFebre] = useState(false);
  const [respirar, setRespirar] = useState(false);
  const [fadiga, setFadiga] = useState(false);
  const [diarreia, setDiarreia] = useState(false);
  const [dor, setDor] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quais sintomas você está sentindo?</Text>

      <View style={styles.symptoms}>
        <Text
          onPress={() => setTosse(!tosse)}
          style={tosse ? styles.buttonActive : styles.buttonInactive}
        >
          Tosse seca
        </Text>
        <Text
          style={febre ? styles.buttonActive : styles.buttonInactive}
          onPress={() => setFebre(!febre)}
        >
          Febre
        </Text>
        <Text
          style={respirar ? styles.buttonActive : styles.buttonInactive}
          onPress={() => setRespirar(!respirar)}
        >
          Dificuldade de respirar
        </Text>
        <Text
          style={fadiga ? styles.buttonActive : styles.buttonInactive}
          onPress={() => setFadiga(!fadiga)}
        >
          Fadiga
        </Text>
        <Text
          style={diarreia ? styles.buttonActive : styles.buttonInactive}
          onPress={() => setDiarreia(!diarreia)}
        >
          Diarreia
        </Text>
        <Text
          style={dor ? styles.buttonActive : styles.buttonInactive}
          onPress={() => setDor(!dor)}
        >
          Dor de cabeça
        </Text>
      </View>

      <View>
        <Text style={styles.noSymptom} onPress={handleInform}>
          Informar
        </Text>
        <Text style={styles.buttonDiagnostico} onPress={handleDiagnostic}>
          Fui diagnosticado
        </Text>
      </View>

      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4e4e4",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 75,
  },

  title: {
    fontSize: 16,
    alignItems: "center",
  },

  buttonInactive: {
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
  buttonActive: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#BB4747",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 15,
    margin: 5,
  },

  symptoms: {
    width: 230,
    margin: 5,
    flexDirection: "column",
    flexWrap: "wrap",
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
    marginRight: 10,
  },
  buttonDiagnostico: {
    fontSize: 16,
    backgroundColor: "#BB4747",
    textAlign: "center",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    width: 220,
    margin: 5,
  },
});
