import React, { useState } from "react";
import { Title } from "../Title/Style";
import { Subtitle } from "../Subtitle/Style";
import { Button, ButtonTitle } from "../Button/Style";
import { LinkSecondary } from "../Link/Style";
import { ModalConfirmationContainer, ModalContainer } from "./Style";

export const ModalConfirmation = ({ isModalVisible, cancelModalFunction }) => {
  return (
    <ModalContainer isVisible={isModalVisible}>
      <ModalConfirmationContainer>
        <Title>Cancelar consulta</Title>

        <Subtitle>
          Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu
          horário, deseja mesmo cancelar essa consulta?
        </Subtitle>

        <Button>
          <ButtonTitle>Confirmar</ButtonTitle>
        </Button>

        <LinkSecondary onPress={cancelModalFunction}>Cancelar</LinkSecondary>
      </ModalConfirmationContainer>
    </ModalContainer>
  );
};
