import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import Login from './src/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates';
import { MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold, MontserratAlternates_500Medium
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    // <SplashScreen />

    // Container - envolve toda a estrutura de navegação
    // Navigator - componente para navegação
    // Screen - tela
    // name: nome da tela
    // component: componente que será chamado
    // options: titulo da tela

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navegacao"
          component={Navegacao}
          options={{ title: "Navegação" }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}