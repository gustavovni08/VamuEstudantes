import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import logo from '../imgs/VamuLogo.png'

export default function Home( {navigation} ){
    
    
    return (

        <View style={styles.mainContainer}>
            
            <Image
            source={logo}
            style={styles.logo}
            accessibilityLabel="logo"
            />

            
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonFont}> ENTRAR </Text>
                    
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Cadastro')}
                >
                
                    
                    <Text style={styles.buttonFont}> CADASTRAR </Text>
                </TouchableOpacity>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    
    mainContainer: {
        
        flex: 1,
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

        alignItems:"center",
        
        width: 150,
        height: 35.444,
        padding: 5,
        borderRadius: 7,
        backgroundColor:'#fff',

    },

    buttonFont:{
        fontWeight: "bold",
        color: '#2AAA8A',
    },

    logo:{
        width:250,
        height:100,
    },

})