import { View, Text } from "react-native";
import React from "react";
import {
  ModalConfirmationContainer,
  ModalContainer,
} from "../ModalConfirmation/Style";
import { Subtitle } from "../Subtitle/Style";
import { Title } from "../Title/Style";
import { Button, ButtonTitle } from "../Button/Style";
import { LinkSecondary } from "../Link/Style";
import { ImagePatient } from "../Image/Style";
import { RowContainer, SubtitleConsultModal } from "./Style";

export const ModalConsultInfos = ({
  navigation,
  isModalVisible,
  cancelModalFunction,
  imgSource,
  doctorName,
  doctorEspeciality,
  doctorCRM,
}) => {
  return (
    <ModalContainer isVisible={isModalVisible}>
      <ModalConfirmationContainer containerHeight="476px">
        <ImagePatient source={imgSource} />

        {/* Título */}
        <Title>{doctorName}</Title>

        {/* Descrição */}
        <RowContainer>
          <SubtitleConsultModal>{doctorEspeciality}</SubtitleConsultModal>
          <SubtitleConsultModal>{doctorCRM}</SubtitleConsultModal>
        </RowContainer>

        <Button
          btnWidth="90%"
          title="Login"
          onPress={() => {
            navigation.navigate("LocalConsulta");
          }}
        >
          <ButtonTitle>Ver local da consulta</ButtonTitle>
        </Button>

        <LinkSecondary onPress={cancelModalFunction}>Cancelar</LinkSecondary>
      </ModalConfirmationContainer>
    </ModalContainer>
  );
};
