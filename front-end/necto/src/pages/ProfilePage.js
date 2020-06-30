import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


import NavBar from "../components/NavBar";

export default function ProfilePage({ navigation }) {
 
  return (
    <View style={styles.container}>

      <Icon name="account-circle" size={180} color="#FFF" />
      <Text style={styles.name}>ANA PAULA NÓBREGA</Text>
      <View style={styles.informacao}>
       
        
        <Text style={styles.idade}>Idade: 19 anos</Text>
        <Text style={styles.matricula}>Matricula: 198236737</Text>
        <Text style={styles.curso}>Curso: Arquitetura</Text>
      </View>
      <View style={styles.container2}>
      <Text style={styles.title}> Como está sua saúde no momento?</Text>
      
        <Text style={styles.bem} >Bem</Text>
        <Text style={styles.mal} >Mal</Text>

      </View>

      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
  },
  name: {
    alignSelf: "center",
    position: "absolute",
    fontSize: 17,
    width: 280,
    padding: 10,
    margin: 10,
    color: "black", 
    textAlign: "center",
  },
  container2: {
    display: "flex",
  },
  informacao: {
    padding: 40,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    marginTop: 45,
  },
  bem:{
    fontSize: 18,
    padding: 10,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#A8A7AB",
    borderRadius: 30,
    color: "white",
    margin: 15,
  },
  mal:{
    fontSize: 18,
    padding: 10,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#A8A7AB",
    borderRadius: 30,
    color: "white",
    margin: 15,
  },
  title:{
    textAlign: "center",
    alignContent: "center",
    position: "absolute",
  }
  
});
