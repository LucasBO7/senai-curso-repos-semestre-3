import React from "react";
import { Title } from "../Title/Style";
import { Subtitle } from "../Subtitle/Style";
import { Button, ButtonTitle } from "../Button/Style";
import { LinkSecondary } from "../Link/Style";
import { ModalConfirmationContainer, ModalContainer } from "./Style";

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

export const ModalConfirmation = ({ isModalVisible, cancelModalFunction }) => {
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
        title: "Consulta cancelada",
        body: "Consulta cancelada com sucesso!",
      },
      trigger: null
    });
  }

  return (
    <ModalContainer isVisible={isModalVisible}>
      <ModalConfirmationContainer containerHeight='350px'>
        <Title>Cancelar consulta</Title>

        <Subtitle>
          Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu
          horário, deseja mesmo cancelar essa consulta?
        </Subtitle>

        <Button onPress={() => { handleCallNotifications() && cancelModalFunction() }} btnWidth='90%'>
          <ButtonTitle>Confirmar</ButtonTitle>
        </Button>

        <LinkSecondary onPress={cancelModalFunction}>Cancelar</LinkSecondary>
      </ModalConfirmationContainer>
    </ModalContainer>
  );
};
