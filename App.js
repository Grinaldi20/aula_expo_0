import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Atividade_1 from './components/atividade_1';
import Exemplo2 from './components/exemplo_2';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#601cc7',
    alignItems: 'center',
    justifyContent: 'center',
    padding:18,
  },
});
