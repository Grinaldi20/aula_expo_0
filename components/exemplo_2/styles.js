import { StyleSheet } from "react-native-web";



const styles = StyleSheet.create ({
    container1: {
        
        backgroundColor: '#fff',
        flex: 1,
        height:'100%',
        width:'100%',
        borderRadius:20,
        alignItems:'center',
        padding:8,
    },
    titulo: {
        fontSize:30,
        fontWeight:'bold',
        marginVertical:20,
        color:'#c71ca2',
        fontFamily:'Vineta BT',
    },
    mensagem: {
        fontSize:25,
        margin:10,
        color:'#c71ca2',
        fontFamily:'Vineta BT',
    },
    viewmensagem: {
        borderWidth:2,
        borderColor: '#c71ca2',
        borderRadius:20,
        fontSize:25,
        margin:10,
        color:'#c71ca2',
        fontFamily:'Vineta BT',
    },
});

export default styles;