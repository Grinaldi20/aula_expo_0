import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-web';




function Atividade_3() {

const [numero, setNumero] = useState (0);

function incremento () {
  setNumero(numero + 1);
}
function tirar () {
    setNumero(numero - 1);
  }

  function zero () {
    setNumero(numero  - numero);
  }
  
 

    return (
         
      
          

        <View style={styles.container}>

        <TouchableOpacity
        onPress={ () => alert('olá mundo')}
        style={styles.button}
        >
            <Text style={styles.textButton}>
             "olá, mundo!!"
            </Text>

        </TouchableOpacity>
    



            <Text style={styles.titulo}>Atividade 3</Text>
            
            <Text style={styles.txtNumero}>{numero}</Text>


            <Pressable
                onPress={() => incremento ()}
                style={  ({pressed}) => pressed ? styles.botaoPress : styles.botao}
            >
                <Text style={styles.txtBotao}>+1</Text>
            </Pressable>

            <Pressable
                onPress={() =>tirar ()}
                style={  ({pressed}) => pressed ? styles.botaoPress : styles.botao}
            >
                <Text style={styles.txtBotao}>-1</Text>
            </Pressable>

            <Pressable
                onPress={() => zero ()}
                style={  ({pressed}) => pressed ? styles.botaoPress : styles.botao}
            >
                <Text style={styles.txtBotao}>ZERAR</Text>
            </Pressable>
        </View>

       
    );
}

export default Atividade_3;