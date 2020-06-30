import React from "react";
import { StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


import NavBar from "../components/NavBar";

export default function ProfilePage({ navigation }) {
 
  return (
    <View style={styles.container}>

      <Icon style={styles.icon} name="account-circle" size={150} color="#FFF" />
      <Text style={styles.name}>Ana Paula Nóbrega</Text>

      <View style={styles.informacao}>             
        <Text style={styles.itemInfo}>Idade: 19 anos</Text>
        <Text style={styles.itemInfo}>Matricula: 198236737</Text>
        <Text style={styles.itemInfo}>Curso: Arquitetura</Text>
      </View>

      <Text style={styles.question}> Como está sua saúde no momento?</Text>
      
      <View style={styles.enquete}>
        <Text style={styles.button} >Bem</Text>
        <Text style={styles.button} >Mal</Text>
      </View>

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

  question:{
    fontSize: 18,
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
  },

  enquete: {
    flexDirection: "row",
    justifyContent: "center",
  },

  button:{
    fontSize: 18,
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#A8A7AB",
    color: "white",
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 60,
  },
});
