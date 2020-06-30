import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationRouteContext } from "@react-navigation/native";
import { Dimensions } from "react-native";

export default function Navbar({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Histórico")}
      >
        <Icon name="book-open-variant" size={24} color="#AAA" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Mapa")}
      >
        <Icon name="map-marker" size={24} color="#AAA" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Reportar")}
      >
        <Icon name="chat-alert" size={24} color="#AAA" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Meu Perfil")}
      >
        <Icon name="account" size={24} color="#AAA" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: "#FFF",
    flex: 1,
    height: 75,
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 75,
  },
});
