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
                placeholder="digite sua email"
                onChangeText={setEmail}
                value={email}
                />

                <TextInput
                style={styles.TextInput}
                placeholder="digite seu senha"
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
        backgroundColor: '#2AAA8A',
        alignItems: 'center',
        justifyContent: 'center',



    },

    TextInputContainer:{

        flex:0.2,
        alignItems:"center",
        justifyContent: "space-evenly"

    },

    TextInput:{

        backgroundColor:'#fff',
        width:122,
        padding:6,
        borderRadius: 5 

    },

    buttonContainer:{

        alignItems:"center",
        justifyContent: "space-evenly"

    },

    button:{

        backgroundColor:'#fff',
        padding: 5,
        borderRadius: 5,


    },

    buttonFont:{
        fontWeight: "bold",
        color: '#2AAA8A',
    },

})