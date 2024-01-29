import { SafeAreaView, StatusBar, FlatList } from 'react-native';
import Person from './src/components/Person/Person';
import Game from './src/components/Game/Game';

// Import da fonte
import { useFonts, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import { SingleDay_400Regular } from '@expo-google-fonts/single-day';

export default function App() {
  //#region FontsLoad
  let [fontsLoaded, fontError] = useFonts({
    Ubuntu_400Regular,
    SingleDay_400Regular
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  //#endregion

  // Dados locais
  const personList = [
    { id: '1', name: 'Gabriel', age: '20' },
    { id: '2', name: 'Matheus', age: '15' },
    { id: '3', name: 'Vinicius', age: '20' },
    { id: '4', name: 'Catarina', age: '16' }
  ]

  const gamesList = [
    { id: '1', name: 'Slime Rancher', releaseData: '2016', genre: 'Aventura', rate: 5, company: 'Monomi Park' },
    { id: '2', name: 'CS GO', releaseData: '2012', genre: 'FPS', rate: 5, company: 'Valve' },
    { id: '3', name: 'FC 24', releaseData: '2023', genre: 'Esporte', rate: 4, company: 'EA Sports' }
  ]

  return (
    <SafeAreaView>
      <StatusBar style='auto' />

      <FlatList
        data={personList}
        keyExtractor={(item) => item.id}
        renderItem={
          ({ item }) => <Person name={item.name} age={item.age} />
        } />

      <FlatList
        data={gamesList}
        keyExtractor={(item) => item.id}
        renderItem={
          ({ item }) => <Game name={item.name} releaseDate={item.releaseData} genre={item.genre} rate={item.rate} company={item.company} />
        } />


      {/* <Person name='Gabriel' age={37} />
      <Person name='Matheus' age={22} />
      <Person name='Vinicius' age={17} />
      <Person name='Catarina' age={55} /> */}
    </SafeAreaView>
  );
}