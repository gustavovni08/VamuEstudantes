import { TextInput, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


export default function Login (){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const auth = getAuth()
    const navigation = useNavigation() 

    const entrar = () => {
        signInWithEmailAndPassword(auth, email, senha)
          .then((userCredential) => {
            const user = userCredential.user
            console.log(`Usuário autenticado com sucesso: ${user.email}`)
            navigation.navigate('MeusCartoes')

          })
          .catch((error) =>{
            
            navigation.navigate('Home')
            const errorCode = error.code
            const errorMessage = error.message
            console.log(`Erro na autenticação: ${errorCode} - ${errorMessage}`)
            
          })
    }


    return(   

        <View style={styles.mainContainer}>

            <View style={styles.TextInputContainer}>
                <TextInput
                style={styles.TextInput}
                placeholder="digite seu email"
                onChangeText={setEmail}
                value={email}
                />

                <TextInput
                style={styles.TextInput}
                placeholder="digite sua senha"
                onChangeText={setSenha}
                value={senha}
                secureTextEntry
                />

            </View>



        <TouchableOpacity 
        style={styles.button}
        onPress={entrar}>
            <Text style={styles.buttonFont}>
                LOGIN
            </Text>
        </TouchableOpacity>


        </View>

    );

}

const styles = StyleSheet.create({

    mainContainer: {
        
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',



    },

    TextInputContainer:{

        flex: 0.37,
        width:327.35,
        alignItems:"center",
        justifyContent: "space-evenly",

    },

    TextInput:{

        backgroundColor:'#fff',
        width:200,
        padding:6,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,

    },

    buttonContainer:{

        alignItems:"center",
        justifyContent: "space-evenly"

    },

    button:{

        backgroundColor: '#2AAA8A',
        padding: 5,
        borderRadius: 5,
        width:170,
        height:45,
        justifyContent:'center',
        alignItems: 'center',


    },

    buttonFont:{
        fontWeight: "bold",
        color: '#fff',
    },

})