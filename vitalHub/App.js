import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import Login from "./src/screens/Login/Login";
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_400Regular,
} from "@expo-google-fonts/quicksand";
import RecuperarSenha from "./src/screens/RecuperarSenha/RecuperarSenha";
import VerificacaoEmail from "./src/screens/VerificacaoEmail/VerificacaoEmail";
import RedefinicaoSenha from "./src/screens/RedefinicaoSenha/RedefinicaoSenha";
import CadastroConta from "./src/screens/CadastroConta/CadastroConta";
import Perfil from "./src/screens/Perfil/Perfil";
import { Prontuario } from "./src/screens/Prontuario/Prontuario";
import { ConsultasPaciente } from "./src/screens/ConsultasPaciente/ConsultasPaciente";
import { ConsultasMedico } from "./src/screens/ConsultasMedico/ConsultasMedico";
import { ClinicSelection } from "./src/screens/ClinicSelection/ClinicSelection";
import { DoctorSelection } from "./src/screens/DoctorSelection/DoctorSelection";
import { ConsultDateSelection } from "./src/screens/ConsultDateSelection/ConsultDateSelection";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular,
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
      <Stack.Navigator screenOptions={{
        headerShown: true
      }}>
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
          options={{ title: "Consultas do Médico" }}
        />
        <Stack.Screen
          name="ConsultasPaciente"
          component={ConsultasPaciente}
          options={{ title: "Consultas Paciente" }}
        />
        <Stack.Screen
          name="ClinicSelection"
          component={ClinicSelection}
          options={{ title: "Seleção de Clínica" }}
        />
        <Stack.Screen
          name="DoctorSelection"
          component={DoctorSelection}
          options={{ title: "Seleção de Médico" }}
        />
        <Stack.Screen
          name="ConsultDateSelection"
          component={ConsultDateSelection}
          options={{ title: "Seleção da data consulta" }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil" }}
        />
        <Stack.Screen
          name="Prontuario"
          component={Prontuario}
          options={{ title: "Prontuario" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
