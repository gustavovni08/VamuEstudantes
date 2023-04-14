import { TextInput, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, createUserWithNameAndPassword  } from 'firebase/auth'

export default function Cadastro (){

    const CadastrarUsuario = () => {
        
        createUserWithNameAndPassword(auth, email, password)
    
    }

    return(

        <View style={styles.mainContainer}>

            <View style={styles.TextInputContainer}>
                <TextInput
                style={styles.TextInput}
                placeholder="digite sua email"
                />

                <TextInput
                style={styles.TextInput}
                placeholder="digite seu senha"
                />

            </View>



        <TouchableOpacity style={styles.button}>
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