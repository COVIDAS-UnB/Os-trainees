import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function CheckinCard({ navigation, title, description, hour }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.clock_info}>
        <Icon name="clock-outline" size={20} color="#858585" />
        <Text style={styles.hour}>{`${hour}h`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 311,
    height: 91,
    alignItems: "center",
    backgroundColor: "#FFF",
    margin: 15,
    borderRadius: 8,
    padding: 16,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    color: "#858585",
  },
  clock_info: {
    flexDirection: "row",
    alignItems: "center",
  },
  hour: {
    color: "#858585",
    fontSize: 20,
    marginLeft: 8,
  },
});
