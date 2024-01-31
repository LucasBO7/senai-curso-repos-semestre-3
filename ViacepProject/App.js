import { StyleSheet, StatusBar } from 'react-native';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './style';
import { Header } from './src/components/Header';
import { Input } from './src/components/Input';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>
      <StatusBar style="auto" />

      {/* HEADER */}
      <Header />

      {/* HOMESCREEN */}
      <Input />


    </ContainerApp>
  );
}

const styles = StyleSheet.create({
});
