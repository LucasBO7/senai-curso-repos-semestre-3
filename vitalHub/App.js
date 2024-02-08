import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import Login from './src/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import RecuperarSenha from './src/screens/RecuperarSenha/RecuperarSenha';
import VerificacaoEmail from './src/screens/VerificacaoEmail/VerificacaoEmail';
import RedefinicaoSenha from './src/screens/RedefinicaoSenha/RedefinicaoSenha';
import CadastroConta from './src/screens/CadastroConta/CadastroConta';
import ConsultasMedico from './src/screens/ConsultasMedico/ConsultasMedico';
import Perfil from './src/screens/Perfil/Perfil';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_700Bold, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, Quicksand_500Medium, Quicksand_600SemiBold
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
          options={{ title: "Recuperar Senha" }}
        />
        <Stack.Screen
          name="VerificacaoEmail"
          component={VerificacaoEmail}
          options={{ title: "Verificar Email" }}
        />
        <Stack.Screen
          name="RedefinicaoSenha"
          component={RedefinicaoSenha}
          options={{ title: "Redefinir Senha" }}
        />
        <Stack.Screen
          name="CadastroConta"
          component={CadastroConta}
          options={{ title: "Cadastrar Conta" }}
        />
        <Stack.Screen
          name="ConsultasMedico"
          component={ConsultasMedico}
          options={{ title: "Consultas Medico" }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}