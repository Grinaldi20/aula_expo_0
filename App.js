import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Atividade_1 from './components/atividade_1';
import Atividade_2 from './components/atividade_2';
import Atividade_3 from './components/Atividade_3';


export default function App() {
  return (
    <View style={styles.container}>
      <Atividade_3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    padding:18,
    fontSize:'50px',
    fontFamily:'Copperplate Gothic Bold',
    justifyContent: 'center',
    borderRadius: '10px',
  },
});
