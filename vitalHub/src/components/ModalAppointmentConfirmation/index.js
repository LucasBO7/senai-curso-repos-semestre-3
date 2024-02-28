import React from 'react'
import { ModalConfirmationContainer, ModalContainer } from '../ModalConfirmation/Style'
import { ConsultTitle, Title } from '../Title/Style'
import { ConsultSubtitle, Subtitle } from '../Subtitle/Style'
import { ConsultInfosContainer, InfosGroup } from './Style'
import { Button, ButtonTitle } from '../Button/Style'
import { LinkSecondary } from '../Link/Style'

export const ModalAppointmentConfirmation = ({ consult, isVisible, cancelModalFunction }) => {
  return (
    <ModalContainer isVisible={isVisible}>
      <ModalConfirmationContainer containerHeight='580px'>
        <Title>Agendar consulta</Title>
        <Subtitle>Consulte os dados selecionados para a sua consulta</Subtitle>

        <ConsultInfosContainer>
          <InfosGroup>
            <ConsultTitle>Data da consulta</ConsultTitle>
            <ConsultSubtitle>{consult.date}</ConsultSubtitle>
          </InfosGroup>

          <InfosGroup>
            <ConsultTitle>Médico(a) da consulta</ConsultTitle>
            <ConsultSubtitle>{consult.doctor.name}</ConsultSubtitle>
            <ConsultSubtitle>{consult.doctor.specialty}</ConsultSubtitle>
          </InfosGroup>

          <InfosGroup>
            <ConsultTitle>Local da consulta</ConsultTitle>
            <ConsultSubtitle>{consult.local}</ConsultSubtitle>
          </InfosGroup>

          <InfosGroup>
            <ConsultTitle>Tipo da consulta</ConsultTitle>
            <ConsultSubtitle>{consult.type}</ConsultSubtitle>
          </InfosGroup>

          {/* Buttons */}
          <Button btnWidth="100%">
            <ButtonTitle>Confirmar</ButtonTitle>
          </Button>
          <LinkSecondary onPress={cancelModalFunction}>Cancelar</LinkSecondary>
        </ConsultInfosContainer>

      </ModalConfirmationContainer>
    </ModalContainer>
  )
}