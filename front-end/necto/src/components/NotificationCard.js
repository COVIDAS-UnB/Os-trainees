import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function CheckinCard({
  navigation,
  title,
  description,
  color,
  place,
}) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Icon name="alert" size={25} color={color} />
        </View>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.place}>{place}</Text>
      </View>
      <View style={styles.warning_info}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 311,

    alignItems: "center",
    backgroundColor: "#FFF",
    margin: 15,
    borderRadius: 8,
    padding: 16,
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    maxWidth: 275,
    marginVertical: 8,
  },
  place: {
    fontSize: 14,
    color: "#858585",
  },
  warning_info: {
    flexDirection: "row",
    alignItems: "center",
  },
});
