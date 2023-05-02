import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useSelector } from "react-redux";

import { useState } from "react";
import { useEffect } from "react";

import {doc, getDoc, setDoc} from "firebase/firestore"

import ListaDeCartoes from "./listaDeCartoes";
import database from "../config/firebaseConfig";

export default function MeusCartoes(){


    const navigation = useNavigation()
    const listaDeCartoes = useSelector(state => state.listaDeCartoes)
    const [lista, setLista] = useState( [] )

    const navegar = () =>{
        navigation.navigate('AdcionarCartao')
    }

    useEffect(()=>{

        const usuarios = doc( database, 'usuarios', 'gustavovni08')

        getDoc(usuarios).then((doc) =>{
            if (doc.exists()) {
                console.log("Dados do usuário:", doc.data());
              } else {
                console.log("O documento não existe.");
              }
            }).catch((error) => {
              console.log("Erro ao obter os dados do usuário:", error);
        })

       


        })


    return(
    <View style={styles.mainContainer} >
       
        <ListaDeCartoes/>

        <TouchableOpacity 
        style={styles.addCartaoButton}
        onPress={navegar}>
            <Text style={styles.addCartaoButtonFont}>+</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        
        flex: 1,
        backgroundColor: '#f7f8f9',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // borderRadius: 4,


    },

    addCartaoButton:{
        backgroundColor:'#2AAA8A',

        width:100,
        height:100,
        borderRadius:100,

        alignItems:'center',
        justifyContent:'center'
    },

    addCartaoButtonFont:{
        
        color:'#fff',
        fontWeight: 'bold',
        fontSize:42,
        paddingBottom:10,
    },

})

