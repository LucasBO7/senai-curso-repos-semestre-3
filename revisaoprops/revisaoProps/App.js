import { SafeAreaView, StatusBar } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />

      <Person name='Gabriel' age={37} />
      <Person name='Matheus' age={22} />
      <Person name='Vinicius' age={17} />
    </SafeAreaView>
  );
}