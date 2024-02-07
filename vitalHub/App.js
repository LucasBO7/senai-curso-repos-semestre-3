import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import Login from './src/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import RecuperarSenha from './src/screens/RecuperarSenha/RecuperarSenha';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_700Bold, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, Quicksand_500Medium
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
        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{ title: "Login" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}