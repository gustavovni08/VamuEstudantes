import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";


export default function Home(){
    
    
    return (

        <View style={styles.mainContainer}>
            
            <Image
            source={'../src/imgs/VamuLogo.png'}
            alt={'logo'}
            />

            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text> ENTRAR </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text> CADASTRAR </Text>
                </TouchableOpacity>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    
    mainContainer: {
        
        flex: 0.5,
        backgroundColor: '#2AAA8A',
        alignItems: 'center',
        justifyContent: 'space-evenly',



    },

    buttonContainer:{

        flex:0.4,
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