import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Atividade_1 from './components/atividade_1';
import Atividade_2 from './components/atividade_2';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade_2 />
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
  },
});
