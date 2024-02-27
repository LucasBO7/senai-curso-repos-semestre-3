import React, { useState } from 'react'
import { Container } from '../../components/Container/Style'
import { TitleSecondary } from '../../components/Title/Style'
import { CalendarComponent } from '../../components/Calendar/CalendarComponent'
import { TextInput } from '../../components/Input/Style'
import { QuestionText } from '../../components/ModalScheduleConsult/Style'
import { Button, ButtonTitle } from '../../components/Button/Style'
import { LinkSecondary } from '../../components/Link/Style'
import { Dropdown } from '../../components/Dropdown'
import DropDownPicker from 'react-native-dropdown-picker';
import { ModalAppointmentConfirmation } from '../../components/ModalAppointmentConfirmation'

export const ConsultDateSelection = () => {
    return (
        <Container>
            <TitleSecondary>Selecionar data</TitleSecondary>

            <CalendarComponent />

            <TextInput>
                <QuestionText>Selecione um horário disponível</QuestionText>

                <Dropdown />
                {/* <InputTag placeholder="Informe a localização" /> */}
            </TextInput>

            <Button btnWidth='90%'>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

            <LinkSecondary>Cancelar</LinkSecondary>

            <ModalAppointmentConfirmation />
        </Container>
    )
}