import { View, Text } from 'react-native'; 

import Mensagem from './mensagem';

import styles from './styles';

function Atividade_2() {
    return(
<View style={styles.container}>
<Text style= {styles.titulo}> Times de Futebol </Text>


<Mensagem nome='Real madrid'/>
<Mensagem nome='corinthians'/>
<Mensagem nome='liverpool'/>
<Mensagem nome='Manchester United'/>


</View>
   );
}

export default  Atividade_2;