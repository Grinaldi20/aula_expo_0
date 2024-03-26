import { View, Text } from 'react-native'

import styles from './styles';

export default function Mensagem () {
    return(
        <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo_2</Text>
        <Text style={styles.viewmensagem}>Oi zé da manga</Text>
      
    </View>
    );
}