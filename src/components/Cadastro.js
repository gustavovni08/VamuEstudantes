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

            window.alert(`${email} cadastrado com sucesso`)
            console.log(`${email} cadastrado com sucesso`)
            navigation.navigate('Home')

        } catch (error) {
            
            const errorCode = error.code
            const errorMessage = error.message
            
            window.alert('Erro na criação do usuário:', errorCode, errorMessage)
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',



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
        justifyContent: "center",
        paddingBottom: 22,

    },

    button:{

        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#2AAA8A',
        padding: 5,
        borderRadius: 5,
        width:170,
        height:45,


    },

    buttonFont:{
        fontWeight: "bold",
        color: '#fff',
    },

})