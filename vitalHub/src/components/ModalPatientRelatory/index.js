import { View, Text } from 'react-native'
import React from 'react'
import { ModalConfirmationContainer, ModalContainer } from '../ModalConfirmation/Style';
import { Subtitle } from '../Subtitle/Style';
import { Title } from '../Title/Style';
import { Button, ButtonTitle } from '../Button/Style';
import { LinkSecondary } from '../Link/Style';
import { RowContainer } from './Style';
import { ImagePatient } from '../Image/Style';

export const ModalPatientRelatory = ({ navigation, imgSource, isModalVisible, cancelModalFunction, patientName, patientAge, patientEmail }) => {
    return (
        <ModalContainer isVisible={isModalVisible}>
            <ModalConfirmationContainer containerHeight='476px'>
                <ImagePatient source={require('../../assets/images/userPerfilImg.png')} />

                <Title>{patientName}</Title>
                <RowContainer>
                    <Subtitle>{patientAge}  {patientEmail}</Subtitle>
                </RowContainer>

                <Button title="Login" onPress={() => { navigation.navigate("Login") }}>
                    <ButtonTitle>Inserir prontuário</ButtonTitle>
                </Button>

                <LinkSecondary onPress={cancelModalFunction}>Cancelar</LinkSecondary>
            </ModalConfirmationContainer>
        </ModalContainer>
    );
}