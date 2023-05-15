import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";
import { useEffect } from "react";

import {doc, getDoc} from "firebase/firestore"
import { getAuth } from "@firebase/auth";

import ListaDeCartoes from "./listaDeCartoes";
import database from "../config/firebaseConfig";

import cartaoSlice, { adcionarNomeCartao, adcionarNumeroCartao } from "../../reducers/cartaoSlice";
import listaDeCartoesSlice, {adicionarCartaoaLista, adicionarCartaoalista} from "../../reducers/listaDeCartoesSlice";

export default function MeusCartoes(){

    const auth = getAuth()
    const user = auth.currentUser
    const userEmail = user.email

    const navigation = useNavigation()
    const dispatch = useDispatch()
    
    const listaDeCartoes = useSelector(state => state.listaDeCartoes)
    const [lista, setLista] = useState( [] )

    const navegar = () =>{
        navigation.navigate('AdcionarCartao')
    }


        useEffect(() => {
            const usuarios = doc(database, 'usuarios', userEmail);
          
            getDoc(usuarios)
              .then((doc) => {
                if (doc.exists()) {
                  console.log("Dados do usuário:", doc.data());
          
                  doc.data().cartoes.forEach((cartao) => {
                    dispatch(adcionarNomeCartao(cartao.nome));
                    dispatch(adcionarNumeroCartao(cartao.numero));
                    dispatch(adicionarCartaoaLista(cartao));
                  });
                } else {
                  console.log("O documento não existe.");
                }
              })
              .catch((error) => {
                console.log("Erro ao obter os dados do usuário:", error);
              });
          }, []);


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

