import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

import NavBar from "../components/NavBar";
import ScanButton from "../components/ScanButton";
import CheckinCard from "../components/CheckinCard";

export default function HistoryPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <CheckinCard
          title="BCE"
          description="Biblioteca Central"
          hour="19:12"
        />
        <CheckinCard title="PJC" description="Sala 044" hour="16" />
        <CheckinCard title="RU" description="Restaurante 5" hour="13:30" />
        <CheckinCard title="PAT" description="Sala 026" hour="10" />
        <CheckinCard title="BCE" description="Biblioteca Central" hour="14" />
        <CheckinCard
          title="BCE"
          description="Biblioteca Central"
          hour="17:34"
        />
        <CheckinCard title="BCE" description="Biblioteca Central" hour={14} />
      </ScrollView>
      <ScanButton navigation={navigation} />
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  contentContainer: {
    marginBottom: 75,
  },
});
