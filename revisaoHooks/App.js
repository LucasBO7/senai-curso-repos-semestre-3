import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  // hook de state
  const [count, setCount] = useState(0);

  // função para incremento
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  useEffect(() => {
    console.log(`Contador atualizado: ${count}`);
  }, count)

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.title}>Contador</Text>
        <Text style={styles.countNumber}>{count}</Text>

        <TouchableOpacity style={styles.resetButton} onPress={reset}>
          <Text>Zerar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.incrementButton} onPress={increment}>
          <Text>Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.decrementButton} onPress={decrement}>
          <Text>Decrementar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  countContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#F4F4F4',
    padding: 35,
    borderRadius: 20
  },
  countNumber: {
    fontSize: 20,
    color: '#8E49FF',
    marginBottom: 20
  },
  resetButton: {
    padding: 25,
    paddingVertical: 10
  },
  incrementButton: {
    backgroundColor: '#EBFFBF',
    padding: 25,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  decrementButton: {
    backgroundColor: '#FFBFBF',
    padding: 25,
    paddingVertical: 15,
    borderRadius: 5,
  }
});