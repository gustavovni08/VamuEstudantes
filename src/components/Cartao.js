import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";


export default function Cartao(){
   
   const nomeCartao = useSelector(state => state.cartao.nome)
   const numeroCartao = useSelector(state => state.cartao.numero)
   const quantidade = useSelector(state => state.cartao.quantidade)
   
    return(
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.headerFont}> {nomeCartao} </Text>
                <Text style={styles.headerFont}> {numeroCartao} </Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerFont}> {quantidade} DE PASSAGENS GRATUITAS </Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        
        

        width:350,
        height:207.77,
        backgroundColor: '#2AAA8A',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 4,


    },

    header:{
        paddingTop:23.888,
        paddingLeft:25.35,

        width:350,
        
    },

    headerFont:{
        color:"#fff",
        fontSize:15,

    },

    footer:{
        paddingBottom:38.888,
        paddingRight:35.35,
        width:350,
        alignItems: 'flex-end'
    },

    footerFont:{
        color:"#fff",
        fontWeight:'bold',
        fontSize:17,

    },

})