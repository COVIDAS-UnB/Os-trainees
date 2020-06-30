import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import NavBar from "../components/NavBar";
import ScanButton from "../components/ScanButton";

export default function ProfilePage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Icon
          style={styles.icon}
          name="account-circle"
          size={150}
          color="#FFF"
        />
        <Text style={styles.name}>Ana Paula Nóbrega</Text>

        <View style={styles.informacao}>
          <Text style={styles.itemInfo}>Idade: 19 anos</Text>
          <Text style={styles.itemInfo}>Matricula: 198236737</Text>
          <Text style={styles.itemInfo}>Curso: Arquitetura</Text>
        </View>
      </ScrollView>
      <ScanButton navigation={navigation} />

      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-around",
  },

  contentContainer: {
    paddingBottom: 75,
  },

  icon: {
    alignSelf: "center",
  },

  name: {
    alignSelf: "center",
    fontSize: 25,
    width: 300,
    padding: 10,
    paddingBottom: 20,
    margin: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },

  enquete: {
    display: "flex",
  },

  informacao: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    marginTop: 10,
  },

  itemInfo: {
    fontSize: 16,
    lineHeight: 25,
  },

  question: {
    fontSize: 18,
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
  },

  enquete: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
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
});
