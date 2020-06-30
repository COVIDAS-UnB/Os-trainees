import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationRouteContext } from "@react-navigation/native";

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
        onPress={() => navigation.navigate("Histórico")}
      >
        <Icon
          onPress={() => navigation.navigate("Mapa")}
          name="map-marker"
          size={24}
          color="#AAA"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Histórico")}
      >
        <Icon
          onPress={() => navigation.navigate("Reportar")}
          name="chat-alert"
          size={24}
          color="#AAA"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Histórico")}
      >
        <Icon
          onPress={() => navigation.navigate("Meu Perfil")}
          name="account"
          size={24}
          color="#AAA"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    height: 75,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 75,
  },
});
