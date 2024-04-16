import { View, Text } from 'react-native'

import Mensagem from './mensagem';

import styles from './styles';
function Exemplo2 ( ) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo_2</Text>
     
          
<Mensagem nome='Glauco' sobrenome='Martins'/>
<Mensagem nome='Miguel' idade={13}/>
<Mensagem nome='Ester'/>
<Mensagem nome='Pedro'/>

        </View>
    );

}

export default Exemplo2;