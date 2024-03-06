import React, { useState } from 'react'
import { ConsultDateContainer, Container } from '../../components/Container/Style'
import { TitleSecondary } from '../../components/Title/Style'
import { CalendarComponent } from '../../components/Calendar/CalendarComponent'
import { TextInput } from '../../components/Input/Style'
import { QuestionText } from '../../components/ModalScheduleConsult/Style'
import { Button, ButtonTitle } from '../../components/Button/Style'
import { LinkSecondary } from '../../components/Link/Style'
import { Dropdown } from '../../components/Dropdown'
import { ModalAppointmentConfirmation } from '../../components/ModalAppointmentConfirmation'

export const ConsultDateSelection = ({ navigation }) => {
    const consulta = {
        id: 0,
        date: "1 de Novembro de 2023",
        doctor: {
            id: 0,
            name: "Dra Alessandra",
            specialty: "Demartologa, Esteticista"
        },
        local: "São Paulo, SP",
        type: "Rotina"
    };
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onModalVisibilityChange = () => {
        isModalVisible ? setIsModalVisible(false) : setIsModalVisible(true);
    }


    return (
        <Container>
            <ConsultDateContainer>


                <TitleSecondary>Selecionar data</TitleSecondary>

                <CalendarComponent />

                <TextInput>
                    <QuestionText>Selecione um horário disponível</QuestionText>

                    <Dropdown />
                    {/* <InputTag placeholder="Informe a localização" /> */}
                </TextInput>

                <Button onPress={onModalVisibilityChange} btnWidth='100%'>
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>

                <LinkSecondary>Cancelar</LinkSecondary>

                <ModalAppointmentConfirmation
                    navigation={navigation}
                    consult={consulta}
                    isVisible={isModalVisible}
                    cancelModalFunction={onModalVisibilityChange}
                />
            </ConsultDateContainer>
        </Container>
    )
}