import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import Cartao from './Cartao'
import { FlatList } from 'react-native-web'



export default function ListaDeCartoes(){

    const listaDeCartoes = useSelector(state => state.listaDeCartoes.listaDeCartoes)

const renderItem = ({item}) => {
    return(
        <View style={styles.cardContainer} >
            <Cartao
            nome={item.nome}
            numero={item.numero}
            quantidade={item.quantidade}/>
        
        </View>
    )
}

return(
    
    <View style={styles.mainContainer}>


    <FlatList
    
    data={listaDeCartoes}
    renderItem={renderItem}
    keyExtrator={item => item.id}
    />
    
    </View>
)


}



const styles = StyleSheet.create({
    
    mainContainer: {
        
        flex: 0.8,
        backgroundColor: '#f7f8f9',
        alignItems: 'center',
        justifyContent: 'space-evenly',


    },

    cardContainer:{
        padding: 5,
    }
})