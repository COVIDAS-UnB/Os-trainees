import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, FlatList, Image } from "react-native";


import NavBar from "../components/NavBar";

export default function ReportPage({ navigation }) {
  const [recomend, setRecomend] = useState([
    {text: '1. Reporte diagnóstico\n', key: '1' },
    {text: '2. Pratique o isolamento social\n', key: '2' },
    {text: '3. Mantenha-se hidratado\n', key: '3' },
    {text: '4. Limpe com frequência as superfícies tocadas\n', key: '4' },
    {text: '5. Se os sintomas forem fortes ligue: (61) 2017-1900\n', key: '5' },
])

  return (
    <View style={styles.container}>

      <View style={styles.content}> 
        <Text style={styles.title}> FOI DIAGNOSTICADO COM COVID-19?</Text>
        
          <View style={styles.list}> 
          <FlatList
              data= {recomend}
              renderItem={({item})=> (
                  <Text style={styles.item}>{item.text} </Text>
              )}
          />
          </View>
          <Text style={styles.reportar} >Reportar</Text>
        
      </View>

    <NavBar style={styles.nav} navigation={navigation} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
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

  content:{
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

  tinyLogo:{
    height: 50,
    width: 50,
  },

  reportar:{
    fontSize: 18,
    padding: 10,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#A8A7AB",
    borderRadius: 30,
    color: "white",
    margin: 15,
  },

});
