import { TextInput, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword  } from 'firebase/auth'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


export default function Cadastro (){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigation = useNavigation()
    const auth = getAuth()

    const CadastrarUsuario = async () => {

        try {
            const userCredencial = createUserWithEmailAndPassword(auth, email, senha)
            const user = (await userCredencial).user

            console.log(`${email} cadastrado com sucesso`)
            navigation.navigate('Home')

        } catch (error) {
            
            const errorCode = error.code
            const errorMessage = error.message
            
            console.log('Erro na criação do usuário:', errorCode, errorMessage)
     
        }
   
    
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
        onPress={CadastrarUsuario}>

            <Text style={styles.buttonFont}>
                CADASTRAR
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