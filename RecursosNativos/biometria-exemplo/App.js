import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

// Import Local Authentication
import * as LocalAuthentication from 'expo-local-authentication';

// Import Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment/moment';

export default function App() {
  const [dateHistory, setDateHistory] = useState({});
  const [authenticated, setAuthenticated] = useState(false); // Salvar o status de autenticado
  const [isBiometricSupported, setIsBiometricSupported] = useState(false); // Salvar a referêncoa de suporte a biometria

  // Função para verificar se existe a biometria no aparelho
  async function checkExistAuthentications() {
    // Verifica no Hardware do dispositivo se há compatibilidade com a biometria
    const compatible = await LocalAuthentication.hasHardwareAsync();

    // Salvando o status de compatibilidade com a biometria
    setIsBiometricSupported(compatible);
  }

  // Salva o histórico da última autenticação
  async function SetHistory() {
    const objAuth = {
      dataAuthentication: moment().format('DD/MM/YYYY HH:mm:ss')
    };

    // Guarda a informação na chave 'authenticate' do AsyncStorage
    await AsyncStorage.setItem('authenticate', JSON.stringify(objAuth));

    setDateHistory(objAuth);
  }

  // Recebe o histórico da última autenticação
  async function GetHistory() {
    const objAuth = await AsyncStorage.getItem('authenticate');

    if (objAuth) {
      setDateHistory(JSON.parse(objAuth));
    }
  }


  async function handleAuthentication() {
    // Verificar se existe uma biometria cadastrada
    const biometricExists = await LocalAuthentication.isEnrolledAsync();

    // Validar a existencia
    if (!biometricExists) {
      return Alert.alert(
        'Falha ao logar',
        'Não foi encontrado nenhuma biometria cadastrada'
      )
    }

    // Salvar dentro de uma constante
    // Caso exista ->
    const auth = await LocalAuthentication.authenticateAsync();

    setAuthenticated(auth.success);

    // Verificar se está autenticado e salvar a data atual
    if (auth.success) {
      SetHistory();
    }
  }

  useEffect(() => {
    checkExistAuthentications();
    GetHistory(); // buscando a última autenticação
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {
          isBiometricSupported
            ? 'Seu dispositivo é compatível com a biometria'
            : 'O seu dispositivo não suporta a biometria / Face Id'
        }
      </Text>

      <TouchableOpacity style={styles.btnAuth} onPress={() => handleAuthentication()}>
        <Text style={styles.txtAuth}>Autenticar acesso</Text>
      </TouchableOpacity>

      <Text style={[styles.txtReturn, { color: authenticated ? 'green' : 'red' }]}>
        {
          authenticated
            ? 'Autenticado'
            : 'Não autenticado'
        }
      </Text>

      {
        dateHistory.dataAuthentication
          ? <Text style={styles.txtHistory}>
            Último acesso em {dateHistory.dataAuthentication}
          </Text>
          : null
      }
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
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30
  },
  btnAuth: {
    padding: 16,
    borderRadius: 10,
    margin: 20,
    backgroundColor: 'purple'
  },
  txtAuth: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  txtReturn: {
    fontSize: 22,
    marginTop: 50
  },
  txtHistory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#858383',
    position: 'absolute',
    bottom: 120
  }
});
