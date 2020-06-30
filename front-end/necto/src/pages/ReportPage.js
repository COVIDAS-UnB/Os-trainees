import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import NavBar from "../components/NavBar";
import ScanButton from "../components/ScanButton";

export default function ReportPage({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [recomend, setRecomend] = useState([
    { text: "1. Reporte diagnóstico\n", key: "1" },
    { text: "2. Pratique o isolamento social\n", key: "2" },
    { text: "3. Mantenha-se hidratado\n", key: "3" },
    { text: "4. Limpe com frequência as superfícies tocadas\n", key: "4" },
    {
      text: "5. Se os sintomas forem fortes ligue: (61) 2017-1900\n",
      key: "5",
    },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}> FOI DIAGNOSTICADO COM COVID-19?</Text>

        <View style={styles.list}>
          <Text style={styles.text}>1. Reporte diagnóstico</Text>
          <Text style={styles.text}>2. Pratique o isolamento social</Text>
          <Text style={styles.text}>3. Mantenha-se hidratado</Text>
          <Text style={styles.text}>
            4. Limpe com frequência as superfícies tocadas
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.question}> Como está sua saúde no momento?</Text>

        <View style={styles.enquete}>
          <Text style={styles.buttonBem}>Bem</Text>
          <Text style={styles.buttonMal}>Mal</Text>
        </View>
      </View>

      <ScanButton navigation={navigation} />
      <NavBar style={styles.nav} navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
    paddingBottom: 75,
  },

  title: {
    alignSelf: "center",
    position: "absolute",
    top: -17,
    borderRadius: 15,
    fontSize: 18,
    fontWeight: "bold",
    width: 280,
    padding: 10,
    color: "white",
    backgroundColor: "#FF6B6B",
    textAlign: "center",
  },

  content: {
    // paddingTop: 25,
    padding: 40,
    backgroundColor: "white",
    borderRadius: 50,
    margin: 20,
    marginTop: 45,
  },

  list: {
    marginTop: 30,
  },

  item: {
    fontSize: 18,
  },

  tinyLogo: {
    height: 50,
    width: 50,
  },

  reportar: {
    fontSize: 18,
    padding: 10,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#A8A7AB",
    borderRadius: 30,
    color: "white",
    margin: 15,
  },
  buttonBem: {
    fontSize: 18,
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#47BB4c",
    color: "white",
    marginHorizontal: 30,
    marginBottom: 60,
    marginTop: 30,
  },
  buttonMal: {
    fontSize: 18,
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#bb4747",
    color: "white",
    marginHorizontal: 20,
    marginBottom: 60,
    marginTop: 30,
  },
  enquete: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
  },
});
