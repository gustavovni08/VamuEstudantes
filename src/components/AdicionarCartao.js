import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


export default function AdicionarCartao (){

    const navigator = useNavigation()
    const [nomeCartao, setNomeCartao] = useState('')
    const [numeroCartao, setNumeroCartao] = useState('')


    const cadastrarCartao = () =>{
        
        if(numeroCartao && nomeCartao){
            
            if(numeroCartao.lenght !== 15){
                window.alert('insira um numero de cartão válido')
                console.log('insira um numero de cartão válido')
            } else {
                console.log(nomeCartao, numeroCartao)
                navigator.navigate('MeusCartoes')
            }

        
        } else {

            window.alert('insira os dados do seu cartão')
            // Alert.alert('Erro', 'insira os dados do seu cartão', [{text: 'OK'}])
            console.log('insira os dados do seu cartão')
        }
        
    }



    return(
<View style={styles.mainContainer}>
   
   <View style={styles.formContainer}>
    
    <View style={styles.textInputContainer}>
      
        <Text style={styles.textInputFont}> Nome do cartão:</Text>
      
        <TextInput
        onChangeText={setNomeCartao}
        value={nomeCartao}
        style={styles.textInput}/>
    
    </View>

    <View  style={styles.textInputContainer}>
        
        <Text style={styles.textInputFont}> Número do cartão:</Text>
        
        <TextInputMask
        onChangeText={setNumeroCartao}
        value={numeroCartao}
        style={styles.textInput}
        type={"custom"}
        options={{
            mask: '99.99.9999999999-9'
        }}/>
    
    </View>
   </View>



    <View style={styles.buttonContainer}>
        <TouchableOpacity 
        onPress={cadastrarCartao}
        style={styles.button}>
        <Text style={styles.buttonFont}> ADICIONAR </Text>
        </TouchableOpacity>
    </View>
</View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        
        flex: 1,
        backgroundColor: '#fff',
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
        height:27,
        padding: 11,
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