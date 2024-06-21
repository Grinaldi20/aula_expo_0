import { StyleSheet } from "react-native";


const styles= StyleSheet.create ({
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

    texto: {
       fontSize: 15,
       fontFamily:'Copperplate Gothic Bold',
       width: '80%',
       marginVertical:10,
    },

    input: {
        fontSize: 25,
        color: '#02e7eb',
        width: '80%',
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#078f91',
        padding: 5,
        borderRadius: 20, 


    },



});


export default styles;
