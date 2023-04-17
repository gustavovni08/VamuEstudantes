import { View, Text, StyleSheet } from "react-native";

export default function Cartao(){
    return(
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.headerFont}> NOME DO CARTÃO </Text>
                <Text style={styles.headerFont}> n° do cartao</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerFont}> N° DE PASSAGENS GRATUITAS </Text>
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