import React from "react";
import {
  ModalConfirmationContainer,
  ModalContainer,
} from "../ModalConfirmation/Style";
import { Title } from "../Title/Style";
import { Button, ButtonTitle } from "../Button/Style";
import { LinkSecondary } from "../Link/Style";
import { ImagePatient } from "../Image/Style";
import { RowContainer, SubtitleConsultModal } from "../ModalConsultInfos/Style";

export const ModalRelatory = ({
  navigation,
  isModalVisible,
  cancelModalFunction,
  imgSource,
  patientName,
  patientAge,
  patientEmail,
}) => {
  return (
    <ModalContainer isVisible={isModalVisible}>
      <ModalConfirmationContainer containerHeight="476px">
        <ImagePatient source={imgSource} />

        {/* Título */}
        <Title>{patientName}</Title>

        {/* Descrição */}
        <RowContainer>
          <SubtitleConsultModal>{patientAge}</SubtitleConsultModal>
          <SubtitleConsultModal>{patientEmail}</SubtitleConsultModal>
        </RowContainer>

        <Button
          btnWidth="90%"
          title="Login"
          onPress={() => {
            navigation.navigate("Prontuario");
          }}
        >
          <ButtonTitle>Inserir prontuário</ButtonTitle>
        </Button>

        <LinkSecondary onPress={cancelModalFunction}>Cancelar</LinkSecondary>
      </ModalConfirmationContainer>
    </ModalContainer>
  );
};
