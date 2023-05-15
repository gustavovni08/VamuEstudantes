import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ListaDeCartoes from "./listaDeCartoes";
import 'firebase/firestore'


export default function MeusCartoes(){


    const navigation = useNavigation()
    const listaDeCartoes = useSelector(state => state.listaDeCartoes)

    const navegar = () =>{
        navigation.navigate('AdcionarCartao')
    }

    useEffect(()=>{
        console.log(listaDeCartoes)
    }, [listaDeCartoes])


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

