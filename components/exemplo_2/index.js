import { View, Text } from 'react-native'

import Mensagem from './mensagem';

import styles from './styles';
function Exemplo2 ( ) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo_2</Text>
            <Text style={styles.viewmensagem}>Oi zé da manga</Text>
          
<Mensagem></Mensagem>

        </View>
    );

}

export default Exemplo2;