import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cartao from "./Cartao";


export default function MeusCartoes(){

    const navigation = useNavigation()

    const navegar = () =>{
        navigation.navigate('AdcionarCartao')
    }

    return(
    <View style={styles.mainContainer} >
        <Cartao/>

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

