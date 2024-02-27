import { View, Text } from 'react-native'
import React from 'react'
import { ModalConfirmationContainer, ModalContainer } from '../ModalConfirmation/Style'

export const ModalAppointmentConfirmation = () => {
  return (
    <ModalContainer isVisible={true}>
      <ModalConfirmationContainer containerHeight='350px'>

      </ModalConfirmationContainer>
    </ModalContainer>
  )
}