import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#078f91',
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#02e7eb',
    },

    botao: {
        borderWidth: 3,
        padding: 10,
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: 'cyan',
    },

    txtBotao: {
        fontSize: 25,
        color: 'cyan',
        fontFamily:'Clarendon Blk BT',
    },

    botaoPress : {
        borderWidth: 3,
        padding: 10,
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#02c4be',
        backgroundColor: '#02c4be',
    },

    txtNumero: {
        fontSize: 30,
        color: '#02e7eb',
        marginVertical: 10,
    },

});

export default styles;

