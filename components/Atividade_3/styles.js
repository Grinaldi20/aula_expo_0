import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1e8f8d',
        borderRadius:20,
        width:'100%',
        alignItems:'center',
    },
    
    container2:{
        display: 'flex',
        flexDirection: 'row',
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        marginVertical:20,
        color: '#07f0ec',
        
    },

    botao:{
        borderWidth: 3,
        padding:10,
        width:'50%',
        borderRadius:20,
        alignItems:'center',
        borderColor: '#07f0ec',
        margin: 10,
    },

    txtbotao:{
        fontSize: 25,
        color: '#07f0ec',
    },

    botaopress:{
        backgroundColor: '#07f0ec'
    },

    txtpress:{
        fontSize:25,
        color: '#07f0ec'
    },

    txtNumero:{
        fontSize: 25,
        color: '#07f0ec',
        marginVertical: 10,
    },
});

export default styles;