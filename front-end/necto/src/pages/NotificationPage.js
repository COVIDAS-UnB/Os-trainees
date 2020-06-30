import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

import NavBar from "../components/NavBar";
import ScanButton from "../components/ScanButton";
import NotificationCard from "../components/NotificationCard";

export default function NotificationPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <NotificationCard
          title="Caso Confirmado"
          description="Uma pessoa diagnosticada com COVID-19 frequentou um local que você estava."
          color="#ff3131"
          place="Biblioteca Central"
        />
        <NotificationCard
          title="Caso Suspeito    "
          description="Uma pessoa apresentando sintômas do COVID-19 frequentou um local que você estava."
          color="#edf12d"
          place="PJC, Sala 044"
        />
      </ScrollView>
      <ScanButton navigation={navigation} />
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
