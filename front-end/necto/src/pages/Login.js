import React from "react"
import {View, TextInput, Text, Image, StyleSheet, Linking} from "react-native"

const styles = StyleSheet.create({
    container:{
        marginTop: 50,
    },
    tinyLogo: {
        width: 200,
        height: 100,
        alignSelf: 'center',
        top: 30,
    },
    input: {
        alignSelf: 'center',
        width: 250,
        height: 45,
        borderColor: '#000',
        borderWidth: StyleSheet.hairlineWidth,
        marginBottom: 40,
        borderRadius: 5,
        top: 100,
    },
    subTitle: {
        left: 80,
        fontSize: 15,
        top: 100,
    },
    text:{
        alignSelf: 'center',
        top: 100,
    },
    registro: {
        color: '#CBC9C9',
        alignSelf: 'center',
        top: 100,
    }
})

function Login(){
    // const [input, setInput]  = useState('');
    // const [password, setPassword] = useState('');
    const url = "https://autenticacao.unb.br/sso-server/login?service=https%3A%2F%2Fsig.unb.br%2Fsigaa%2Flogin%2Fcas";
    return(
            <View style = {styles.container}>
                <Image
                style = {styles.tinyLogo}
                source={require('../../assets/Logo.png')}/>
                <Text style = {styles.subTitle}> Matrícula </Text>
                <TextInput style = {styles.input}></TextInput>
                <Text style = {styles.subTitle}> Senha </Text>
                <TextInput style = {styles.input}></TextInput>
                <Text style = {styles.text}> Não está cadastradx?</Text>
                <Text 
                onPress={()=> Linking.openURL(url)}
                style={styles.registro}>Registre-se</Text>
            </View>
    );
};

export default Login;
