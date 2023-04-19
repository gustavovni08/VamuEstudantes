import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function AdicionarCartao (){

    return(
<View style={styles.mainContainer}>
   
   <View style={styles.formContainer}>
    <View style={styles.textInputContainer}>
        <Text style={styles.textInputFont}> Nome do cartão:</Text>
        <TextInput
        style={styles.textInput}/>
    </View>

    <View  style={styles.textInputContainer}>
        <Text style={styles.textInputFont}> Número do cartão:</Text>
        <TextInput
        style={styles.textInput}/>
    </View>
   </View>



    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonFont}> ADICIONAR </Text>
        </TouchableOpacity>
    </View>
</View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        
        flex: 1,
        backgroundColor: '#d9d9d9',
        alignItems: 'center',
        justifyContent: 'space-evenly',


    },

    formContainer: {
        backgroundColor:'#2AAA8A',
        justifyContent:'space-evenly',
        alignItems:'center',
        flex: 0.49,
        width:347.777,
        borderRadius:19,
    },

    textInputContainer:{
        width:347.777,
        flex:0.2999,
        paddingLeft:19,
        justifyContent:'space-evenly',
    },

    textInput:{
        backgroundColor:'#fff',
        borderRadius:22,
        width:300,
        height:24,
    },

    textInputFont:{
        color:'#fff',
        fontSize:19,
    },

    buttonContainer:{
        alignItems:"center",
        justifyContent: "space-evenly"
    },

    button:{
        backgroundColor:'#2AAA8A',
        borderRadius: 22,
        width:200,
        height:65,
        justifyContent:'center',
        alignItems:'center',


    },

    buttonFont:{
        color:'#fff',
        fontWeight: 'bold',
        fontSize:17,
    },

})