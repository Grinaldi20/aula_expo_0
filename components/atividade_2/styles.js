import { StyleSheet } from "react-native";



const styles = StyleSheet.create ({
    container: {
        
        backgroundColor: '#083740',
        flex: 1,
        height:'100%',
        width:'100%',
        borderRadius:20,
        alignItems:'center',
        padding:8,
    },
    titulo: {
        fontSize:70,
        fontWeight:'bold',
        marginVertical:20,
        color:'#098199',
        fontFamily:'Copperplate Gothic Bold',
    },
    mensagem: {
        fontSize:25,
        margin:10,
        color:'#75e8ff',
        fontFamily:'Copperplate Gothic Bold',
    },
    viewmensagem: {
        borderWidth:2,
        borderColor: '#c71ca2',
        borderRadius:20,
        fontSize:25,
        margin:10,
        color:'#c71ca2',
        fontFamily:'Copperplate Gothic Bold',
    },
});

export default styles;