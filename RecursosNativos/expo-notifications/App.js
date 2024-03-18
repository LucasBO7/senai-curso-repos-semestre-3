import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Importar recursos do expo notifications
import * as Notifications from "expo-notifications";

// Solicita a permissão as notificações ao iniciar o app
Notifications.requestPermissionsAsync();

// Define como as notificações devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // mostrar o alerta quando a notificação for recebida
    shouldShowAlert: true,

    // reproduz som ao receber notificação
    shouldPlaySound: true,

    // mostrar número de notificações no ícone do app
    shouldSetBadge: false
  })
});

export default function App() {

  // Função para lidar com a chamada de notificação
  const handleCallNotifications = async () => {

    // obtém o status da permissão
    const { status } = await Notifications.getPermissionsAsync();

    if (status != "granted") {
      alert("Você não deixou as notificações ativas");
      return;
    }

    // agenda uma notificação
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem vindo ao SENAI",
        body: "Notificação recebida.",
      },
      trigger: null
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallNotifications}>
        <Text style={styles.text}>Clique aqui</Text>
      </TouchableOpacity>
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
  button: {
    width: '80%',
    height: 50,
    backgroundColor: "gold",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

  },
  text: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 24,
  }
});